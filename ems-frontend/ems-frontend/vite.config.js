import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],



  // Changing the server port to 3000 to avoid conflicts with other services
  server: {
    port: 3000
  }
})
