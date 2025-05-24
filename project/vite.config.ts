import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  define: {
    // This is needed to handle Node.js built-in modules in the browser
    'process.platform': JSON.stringify('browser'),
    'process.env': {},
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
      external: ['/src/main.tsx']
    },
    // This is needed to handle Node.js built-in modules
    commonjsOptions: {
      transformMixedEsModules: true,
      exclude: ['node_modules/pdf-parse/**'],
    },
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, 'src')
      },
      // Polyfill for Node.js built-in modules
      {
        find: /^node:.*/,
        replacement: 'unenv/runtime/node/empty'
      },
      // Handle fs module
      {
        find: 'fs',
        replacement: 'unenv/runtime/node/empty',
      },
      // Handle path module
      {
        find: 'path',
        replacement: 'path-browserify',
      },
    ]
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
    esbuildOptions: {
      // Node.js global to browser globalThis
      define: {
        global: 'globalThis',
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});
