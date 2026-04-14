import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite';
import path from 'path'
import { fileURLToPath } from 'url'
import {VitePWA} from 'vite-plugin-pwa'

const __dirname = path.dirname(fileURLToPath(import.meta.url))


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),VitePWA({
    registerType: 'autoUpdate',
    // includeAssets: ['favicon.svg', 'robots.txt', 'mask-icon.svg'],
    // manifest: {
    //   name: 'MATE',
    //   short_name: 'MATE',
    //   description: 'MATE',
    //   theme_color: '#ffffff',
    //   icons: [
    //     {
    //       src: '/pwa-192x192.png',
    //       sizes: '192x192',
    //       type: 'image/png',
    //     },
    //     {
    //       src: '/pwa-512x512.png',
    //       sizes: '512x512',
    //       type: 'image/png',
    //     },
      // ],
    // },
  })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
