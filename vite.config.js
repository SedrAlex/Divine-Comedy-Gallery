import { defineConfig } from 'vite';

export default defineConfig({
  base: '/art-gallery',
  build: {
    rollupOptions: {
      input: '/main.js',
    },
  },
});
