import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { quasar, transformAssetUrls } from '@quasar/vite-plugin';

export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls },
    }),
    quasar({
      sassVariables: 'src/styles/quasar-variables.sass',
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setup.js',
  },
});
