// Pre-render the app into static HTML.
// Use `npm run build` and then `dist` can be served as a static site.

const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');

const toAbsolute = (p) => path.resolve(__dirname, p);

const builtFiles = fs.readdirSync(toAbsolute('dist'));
const template = fs.readFileSync(toAbsolute('index.html'), 'utf-8');
const [serverFile] = builtFiles.filter(file => file.indexOf('.js') >= 0);

const { render } = require(`./dist/${serverFile}`);

const recursiveReaddir = function(dirPath, arrayOfFiles) {
  files = fs.readdirSync(dirPath);
  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function(file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = recursiveReaddir(dirPath + "/" + file, arrayOfFiles);
    } else {
      const newFile = path.join(dirPath, "/", file);
      arrayOfFiles.push(newFile);
    }
  });

  return arrayOfFiles;
};

const [nameBase, nameHash] = serverFile.split('.');

// Determine routes to pre-render from src/pages
const routesToPrerender = recursiveReaddir(toAbsolute('src/pages'))
  .map((file) => {
    const [_, name] = file
      .replace(/\.(?:vue|md)$/, '')
      .replace(/\\/g, '/')
      .toLowerCase()
      .split('pages/');
    
    if (name === "[...all]") {
      return "404";
    }
    return name.replace('/index', '');
  });

;(async () => {
  // Pre-render each route
  for (const url of routesToPrerender) {
    // Log which route is rendering
    console.log('Prerendering ' + url);
    const appHtml = await render("/" + (url === "index" ? "" : url));

    let writeUrl = url;
    if(url.indexOf("index") < 0 && url !== "404") {
      writeUrl = url + "/index";
    }

    // Remove HMR module and insert pre-rendered HTML
    const html = template
      .replace(`<!--stylesheet-->`, `<link rel="stylesheet" href="/assets/style.${nameHash}.css">`)
      .replace(`<script type="module" src="/src/entry-client.ts"></script>`, '')
      .replace(`<!--app-html-->`, appHtml);

    const filePath = `dist/${writeUrl}.html`;

    mkdirp(path.dirname(filePath)).then(made => {
      fs.writeFileSync(toAbsolute(filePath), html);
    });
  }

  // Move and rename the CSS bundle
  fs.rename(toAbsolute(`dist/${nameBase}.${nameHash}.css`), toAbsolute(`dist/assets/style.${nameHash}.css`), err => {
    if (err) throw err;
  });

  // Remove leftover build files
  fs.unlinkSync(toAbsolute(`dist/${serverFile}`));
  fs.unlinkSync(toAbsolute(`dist/style.scss`));

})();