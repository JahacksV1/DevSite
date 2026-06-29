import type { MetadataRoute } from 'next'
import { SITE_NAME } from '@/lib/constants'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: 'Day One',
    description:
      'Full-stack apps that ship — MVPs, codebase repair, and production deploys.',
    start_url: '/',
    display: 'standalone',
    background_color: '#050510',
    theme_color: '#00ffc6',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
