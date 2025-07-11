import { type MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://studio--rugbycare-ug.us-central1.hosted.app/sitemap.xml',
  }
}
