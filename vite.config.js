import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// vite-ssg handles static pre-rendering at build time.
// Each page in src/pages/ becomes a fully-rendered HTML file
// with <title>, <meta> and JSON-LD already in the source —
// exactly what Google crawlers and LLMs need.

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})