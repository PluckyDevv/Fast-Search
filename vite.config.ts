import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  build: {
    minify: 'esbuild',
    target: 'esnext',
    cssMinify: true,
  },
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
    }),
  ],
});
