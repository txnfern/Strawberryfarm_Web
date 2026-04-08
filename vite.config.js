// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(),tailwindcss()],
  server: {
    host: '0.0.0.0', // ⭐ สำคัญมาก ให้ Vite listen ทุก IP
    port: process.env.PORT || 5173, // ⭐ สำคัญ ใช้ PORT ที่ระบบให้มา
  },
  preview: {
    host: '0.0.0.0',
    port: process.env.PORT || 4173,
    allowedHosts: ['strawberryfarm-web.onrender.com'], // ⭐ เพิ่มตรงนี้
  }
});