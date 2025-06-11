import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/digital_portfolio/',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: 'index.html',
    },
  }
})
