import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
  },
  // Generate a _redirects file for Netlify to handle SPA routing
  // This ensures page refreshes don't result in 404 errors
  publicDir: 'public',
  base: '/',
})
