import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

   server: {
    allowedHosts: [
      "862b-2a00-1eb8-c247-d97e-dc6a-6dde-3e5a-cb1a.ngrok-free.app"
    ]
  } 
})
