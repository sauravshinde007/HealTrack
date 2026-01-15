import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5174,
    host: true
  },
  preview: {
    allowedHosts: ['admin.65.0.71.166.nip.io']
  }
})


