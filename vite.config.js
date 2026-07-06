import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// vite-react-ssg pre-renders every route to static HTML at build time.
// Each page in src/pages/ becomes a fully-rendered HTML file with
// <title>, <meta>, <link rel="canonical"> and JSON-LD already in the
// source — exactly what search crawlers and LLM crawlers need.
// (No includedRoutes filter → all discovered routes are prerendered.)

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})