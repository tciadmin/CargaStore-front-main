import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const urlBack = import.meta.env.VITE_URL_BACKEND;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/socket.io': {
        target: urlBack,
        ws: true,
      },
    }
  }
})
