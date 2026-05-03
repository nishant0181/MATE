import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite';
import path from 'path'
import { fileURLToPath } from 'url'
import { VitePWA } from 'vite-plugin-pwa'


const __dirname = path.dirname(fileURLToPath(import.meta.url))



export default defineConfig({

  plugins: [react(), tailwindcss(), VitePWA({
    registerType: 'autoUpdate',
    workbox: {
      maximumFileSizeToCacheInBytes: 10 * 1024 * 1024,
      globPatterns: ['**/*.{js,css,html,ico,png,svg,wasm,woff,woff2,ttf}']
    },
    manifest: {
      name: 'MATE',
      short_name: 'MATE',
      theme_color: '#1c1c1c',
      background_color: '#1c1c1c',
      display: 'standalone',
      description: 'The future of learning with MATE. Your seamlessly designed, all-in-one platform for premium study materials to supercharge your college journey.',
      categories: ['education', 'productivity'],

      screenshots: [
        {
          src: '/screenshot-wide.png',
          sizes: '1280x800',
          type: 'image/png',
          form_factor: 'wide',
          label: 'MATE — Your College Notes Dashboard'
        },
        {
          src: '/screenshot-narrow.png',
          sizes: '640x1136',
          type: 'image/png',
          form_factor: 'narrow',
          label: 'MATE — Browse and Study Notes'
        },
       
        {
          src: '/dash-wide.png',
          sizes: '1280x800',
          type: 'image/png',
          form_factor: 'wide',
          label: 'Dashboard Preview'
        },
        {
          src: '/note-wide.png',
          sizes: '1280x800',
          type: 'image/png',
          form_factor: 'wide',
          label: 'Notes Preview'
        },
        {
          src: '/fav-wide.png',
          sizes: '1280x800',
          type: 'image/png',
          form_factor: 'wide',
          label: 'Favorites Preview'
        },
        {
          src: '/about-wide.png',
          sizes: '1280x800',
          type: 'image/png',
          form_factor: 'wide',
          label: 'About Preview'
        },
        // Add more narrow (mobile) screenshots below
        {
          src: '/dash-narrow.png',
          sizes: '640x1136',
          type: 'image/png',
          form_factor: 'narrow',
          label: 'Mobile Dashboard Preview'
        },
        {
          src: '/note-narrow.png',
          sizes: '640x1136',
          type: 'image/png',
          form_factor: 'narrow',
          label: 'Mobile Notes Preview'
        },
        {
          src: '/fav-narrow.png',
          sizes: '640x1136',
          type: 'image/png',
          form_factor: 'narrow',
          label: 'Mobile Favorites Preview'
        },
        {
          src: '/about-narrow.png',
          sizes: '640x1136',
          type: 'image/png',
          form_factor: 'narrow',
          label: 'Mobile About Preview'
        },
      ],

      share_target: {
        action: '/share-target',
        method: 'GET',
        enctype: 'application/x-www-form-urlencoded',
        params: { title: 'title', text: 'text', url: 'url' }
      },

      shortcuts: [
        {
          name: 'Dashboard',
          short_name: 'Dashboard',
          description: 'Go directly to your dashboard page',
          url: '/dashboard',
          icons: [{ src: '/icons/dashboard.png', sizes: '192x192', type: 'image/png' }]
        },
        {
          name: 'Notes',
          short_name: 'Notes',
          description: 'Browse all your notes',
          url: '/notes',
          icons: [{ src: '/icons/notes.png', sizes: '192x192', type: 'image/png' }]
        },
        {
          name: 'Favorites',
          short_name: 'Favorites',
          description: 'Go directly to your favorites',
          url: '/favorites',
          icons: [{ src: '/icons/favorites.png', sizes: '192x192', type: 'image/png' }]
        }
      ],
      icons: [
        { src: '/icons/icon-48x48.png', sizes: '48x48', type: 'image/png', purpose: 'any maskable' },
        { src: '/icons/icon-72x72.png', sizes: '72x72', type: 'image/png', purpose: 'any maskable' },
        { src: '/icons/icon-96x96.png', sizes: '96x96', type: 'image/png', purpose: 'any maskable' },
        { src: '/icons/icon-128x128.png', sizes: '128x128', type: 'image/png', purpose: 'any maskable' },
        { src: '/icons/icon-144x144.png', sizes: '144x144', type: 'image/png', purpose: 'any maskable' },
        { src: '/icons/icon-152x152.png', sizes: '152x152', type: 'image/png', purpose: 'any maskable' },
        { src: '/icons/icon-192x192.png', sizes: '192x192', type: 'image/png', purpose: 'any maskable' },
        { src: '/icons/icon-256x256.png', sizes: '256x256', type: 'image/png', purpose: 'any maskable' },
        { src: '/icons/icon-384x384.png', sizes: '384x384', type: 'image/png', purpose: 'any maskable' },
        { src: '/icons/icon-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'any maskable' },
      ]
    }
  })
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
          'vendor-motion': ['framer-motion', 'motion'],
          'vendor-router': ['react-router'],
          'vendor-ui': ['lucide-react', 'sonner', 'clsx', 'tailwind-merge'],
        }
      }
    }
  }
})
