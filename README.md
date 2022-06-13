# njoqi-vite

![njoqi logo](project-logo.png "njoqi")

Website accessible at [njoqi.me](https://njoqi.me).

Personal portfolio / wiki, built with [Vue 3](https://vuejs.org/) and [Vite](https://vitejs.dev/) as a static website.

Uses single-file components, Markdown, SCSS and Typescript.
Deploys on [Render](https://render.com/) through git.

## Development

1. `npm install` to install dependencies.
2. `npm run dev` to start the local Vite server at `http://localhost:3000`

Routes are automatically defined through file structure in `src/pages`. For instance, `pages/codex/index.vue` will be available at `{your-url}/codex`.

Reusable components are placed in `src/components`.
Assets such as images or fonts are served from the `public` folder.

## Build

`npm run build`

Will compile the `.vue` and `.md` files in `src/pages` into html files, while keeping the sames routes as in development.
Since we simply want a static prerender and don't need preload directives, only one build step is performed instead of client-side + server (no manifest generation, no duplicate assets folders, etc).

The static website is generated in `/dist`.

The css bundle is minimized, and hashed for cache busting.

## Improvements

- [x] Fluid typography
- [x] Test importing content through Markdown files or a headless CMS
- [x] Hash the css bundle according to its contents
- [ ] Add small illustrations for the main pages
- [ ] Properly use Typescript
- [ ] Make the Vite project template available on its own
- [ ] Add a French version

## (Un)license

This repository's code is [unlicensed](UNLICENSE). Texts, photos and other media content are [CC0](https://creativecommons.org/publicdomain/zero/1.0/) unless specified otherwise.