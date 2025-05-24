import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  define: {
    'process.env': {}
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, 'src')
      },
      // Handle Node.js built-in modules
      {
        find: 'fs',
        replacement: 'unenv/runtime/node/empty',
      },
      {
        find: 'path',
        replacement: 'path-browserify',
      },
      {
        find: 'crypto',
        replacement: 'crypto-browserify',
      },
      {
        find: 'stream',
        replacement: 'stream-browserify',
      },
      {
        find: 'util',
        replacement: 'util/',
      }
    ],
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: false,
    commonjsOptions: {
      transformMixedEsModules: true,
      exclude: ['node_modules/pdf-parse/**'],
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      // Node.js global to browser globalThis
      define: {
        global: 'globalThis',
      },
    },
    include: [
      'react',
      'react-dom',
      'path-browserify',
      'crypto-browserify',
      'stream-browserify'
    ]
  },
  server: {
    port: 3000,
    open: true,
  }
});
