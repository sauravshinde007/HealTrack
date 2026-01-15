import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: true
  },
  preview:{
    allowedHosts: ['65.0.71.166.nip.io']
  }
})
