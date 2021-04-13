# njoqi-vite
![njoqi logo](project-logo.png "njoqi")

Website accessible at [njoqi.me](https://njoqi.me).

Personal portfolio / wiki, built with [Vue 3](https://v3.vuejs.org/) and [Vite](https://vitejs.dev/) as a static website.

Uses single-file components, SCSS and Typescript.
Deploys on [Render](https://render.com/) through git.

### Development

1. `npm install` to install dependencies.
2. `npm run dev` to start the local Vite server at `http://localhost:3000`

Routes are automatically defined through file structure in `src/pages`. For instance, `pages/codex/index.vue` will be available at `{your-url}/codex`.

Reusable components are placed in `src/components`.
Assets such as images or fonts are served through the `public` folder.

### Build

`npm run build`

Will compile the `.vue` files in `src/pages` into html files, while keeping the sames routes as in development.
Since we simply want a static prerender and don't need preload directives, only one build step is performed instead of client-side + server (no manifest generation, no duplicate asset folders, etc).

The static website is generated in `/dist`.

The css bundle is minimized, and hashed for cache busting.

### Improvements

- [x] Fluid typography
- [ ] Add small illustrations for the 3 main pages
- [ ] Cleanup and separate the layouts into components
- [ ] Test importing content through Markdown files or a headless CMS
- [] Hash the css bundle according to its contents