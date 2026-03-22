import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'SwarajyaRatna',
    short_name: 'SwarajyaRatna',
    description: 'Swarajyacha Dhyas, Ratna cha Gaurav. A premier youth-driven cultural movement in Maharashtra promoting Maratha history, arts, and community engagement.',
    start_url: '/',
    display: 'standalone',
    background_color: '#FF9933',
    theme_color: '#3E2723',
    icons: [
      {
        src: '/icon.png',
        sizes: '512x512',
        type: 'image/png',
      }
    ],
  }
}
