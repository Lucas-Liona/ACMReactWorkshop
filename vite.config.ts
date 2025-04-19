import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    strictPort: false
  },
  // This is how we handle client-side routing in Vite
  preview: {
    port: 5173
  }
})