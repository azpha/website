import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  publicDir: './src/public',
  build: {
    copyPublicDir: !!process.env.SSR,
    ssr: !!process.env.SSR,
    outDir: process.env.SSR ? 'dist/server' : 'dist/client',
    rollupOptions: {
      input: process.env.SSR ? './server.ts' : './index.html'
    }
  }
})
