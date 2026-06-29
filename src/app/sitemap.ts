import type { MetadataRoute } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://dayonedevs.com'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, changeFrequency: 'weekly', priority: 1 },
    { url: `${siteUrl}/projects`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${siteUrl}/how-we-build`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/pricing`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/book-call`, changeFrequency: 'monthly', priority: 0.7 },
  ]
}
