import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: If you change the repo name, update `base` accordingly.
// Example: base: '/your-repo-name/'
export default defineConfig({
  plugins: [react()],
  base: '/site/'
})
