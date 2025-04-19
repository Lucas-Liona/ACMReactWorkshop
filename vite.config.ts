import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/ACMReactWorkshop/',  // Github Pages
  server: {
    port: 5173,
    strictPort: false
  },
  preview: {
    port: 5173
  }
})