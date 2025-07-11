import { type MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://studio--rugbycare-ug.us-central1.hosted.app',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
     {
      url: 'https://studio--rugbycare-ug.us-central1.hosted.app/register',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://studio--rugbycare-ug.us-central1.hosted.app/service-providers',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
  ]
}
