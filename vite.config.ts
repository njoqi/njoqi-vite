import { defineConfig } from 'vite';
import vuePlugin from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import vuePages from 'vite-plugin-pages';
import bundleScss from 'rollup-plugin-bundle-scss';
import postcss from 'rollup-plugin-postcss';

// https://vitejs.dev/config/
// We adjust the Vite config to bundle single-file components SCSS when in build mode
export default defineConfig(({ command, mode }) => {
  const config = {
    plugins: [
      vuePlugin(),
      vueJsx(),
      vuePages({
        extensions: ['vue', 'ts']
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