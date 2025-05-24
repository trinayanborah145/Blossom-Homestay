import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  root: '.',
  publicDir: 'public',
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, 'src')
      },
      {
        find: /^~(.+)/,
        replacement: '$1'
      }
    ]
  },
  define: {
    'process.env': {},
    global: 'window'
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: false,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html')
      },
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom']
        }
      }
    },
    commonjsOptions: {
      transformMixedEsModules: true
    }
  },
  server: {
    port: 3000,
    open: true,
    host: true
  }
});
