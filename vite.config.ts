import { defineConfig } from 'vite';
import vuePlugin from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import vuePages from 'vite-plugin-pages';
import bundleScss from 'rollup-plugin-bundle-scss';
import postcss from 'rollup-plugin-postcss';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vuePlugin(),
    vueJsx(),
    vuePages({
      extensions: ['vue', 'ts']
    }),
    bundleScss({
      exclusive: false,
      output: 'style.scss'
    }),
    postcss({
      extract: true,
      minimize: true
    })
  ],
  
  build: {
    minify: false,
    rollupOptions: {
      output: {
        entryFileNames: '[name].[hash].js'
      },
    }
  }
});