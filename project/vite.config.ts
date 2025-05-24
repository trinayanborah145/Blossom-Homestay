import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    nodePolyfills({
      // To exclude specific polyfills, add them here
      exclude: [
        'fs', // Excludes the polyfill for `fs` and `node:fs`.
      ],
      // Whether to polyfill `node:` protocol imports.
      protocolImports: true,
    }),
  ],
  base: '/',
  define: {
    'process.env': {},
    global: 'globalThis',
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, 'src')
      },
      // Handle Node.js built-in modules
      {
        find: 'path',
        replacement: 'path-browserify',
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
      'stream-browserify',
      'buffer',
      'process',
      'assert',
      'stream-http',
      'https-browserify',
      'url'
    ]
  },
  server: {
    port: 3000,
    open: true,
  }
});
