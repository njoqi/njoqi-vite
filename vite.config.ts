import { defineConfig } from 'vite';
import vuePlugin from '@vitejs/plugin-vue';
import vitePages from 'vite-plugin-pages';
import bundleScss from 'rollup-plugin-bundle-scss';
import postcss from 'rollup-plugin-postcss';
import markdown from 'vite-plugin-md';
import markdownItAttrs from 'markdown-it-attrs';
import markdownItMark from 'markdown-it-mark';
import markdownItSmall from 'markdown-it-small';

// https://vitejs.dev/config/
// We adjust the Vite config to bundle single-file components SCSS when in build mode
export default defineConfig(({ command, mode }) => {
  const config = {
    plugins: [
      vuePlugin({
        include: [/\.vue$/, /\.md$/]
      }),
      vitePages({
        extensions: ['vue', 'ts', 'md']
      }),
      markdown({
        headEnabled: true,
        wrapperComponent: 'div',
        markdownItSetup(md) {
          md.use(markdownItAttrs, {
            allowedAttributes: ['id', 'class', 'width', 'height', 'loading']
          })
          .use(markdownItMark)
          .use(markdownItSmall);
        }
      })
    ],
    build: {
      minify: false
    }
  };

  if (command !== 'serve') {
    config.plugins.push(
      bundleScss({
        exclusive: false,
        output: 'style.scss'
      }),
      postcss({
        extract: true,
        minimize: true
      })
    );

    config.build.rollupOptions = {
      output: {
        entryFileNames: '[name].[hash].js'
      }
    };
  }

  return config;
})