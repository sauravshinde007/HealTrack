import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: true
  },
  preview:{
    allowedHosts: ['3.6.66.138.nip.io']
  }
})
