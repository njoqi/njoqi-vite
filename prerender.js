// Pre-render the app into static HTML.
// run `npm generate` and then `dist/static` can be served as a static site.

const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');

const toAbsolute = (p) => path.resolve(__dirname, p);

const builtFiles = fs.readdirSync(toAbsolute('dist/server'));
const template = fs.readFileSync(toAbsolute('index.html'), 'utf-8');
const [serverFile] = builtFiles.filter(file => file.indexOf('.js') >= 0);

const { render } = require(`./dist/server/${serverFile}`);

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
    const [_, name] = file.replace(/\.vue$/, '').toLowerCase().split('pages\\');
    if (name === "[...all]") {
      return "404";
    }
    return name.replace(/\\/g, '/').replace('/index', '');
  });

;(async () => {
  // Pre-render each route
  for (const url of routesToPrerender) {
    console.log('Prerendering ' + url);
    const appHtml = await render("/" + (url === "index" ? "" : url));

    let writeUrl = url;
    if(url.indexOf("index") < 0 && url !== "404") {
      writeUrl = url + "/index";
    }

    const html = template
      .replace(`<!--stylesheet-->`, `<link rel="stylesheet" href="/assets/style.${nameHash}.css">`)
      .replace(`<script type="module" src="/src/entry-client.ts"></script>`, '')
      .replace(`<!--app-html-->`, appHtml);

    const filePath = `dist/static/${writeUrl}.html`;

    mkdirp(path.dirname(filePath)).then(made => {
      fs.writeFileSync(toAbsolute(filePath), html);
    });
  }

  // Move assets files from /server to /static
  builtFiles.forEach((file) => {
    fs.renameSync(toAbsolute(`dist/server/${file}`), toAbsolute(`dist/static/${file}`), err => {
      if (err) throw err;
    });
  });

  
  fs.rename(toAbsolute(`dist/static/${nameBase}.${nameHash}.css`), toAbsolute(`dist/static/assets/style.${nameHash}.css`), err => {
    if (err) throw err;
  });
  

  // Remove leftover files and server folder

  fs.unlinkSync(toAbsolute(`dist/static/${serverFile}`));
  fs.unlinkSync(toAbsolute(`dist/static/style.scss`));
  fs.rmdirSync(toAbsolute(`dist/server`));

})();