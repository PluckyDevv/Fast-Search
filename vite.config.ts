import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    minify: 'esbuild',
    target: 'esnext',
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
});
