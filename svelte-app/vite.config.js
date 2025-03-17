import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: '../public',  // Specify the output directory
    rollupOptions: {
      input: './index.html',  // Ensure Vite knows where to find the entry point
    },
  }
});