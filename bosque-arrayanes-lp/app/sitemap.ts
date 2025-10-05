import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://bosquearrayanes.com';
  const locales = ['es', 'en', 'pt'];
  const lastModified = new Date();

  const routes = locales.map((locale) => ({
    url: `${baseUrl}/${locale}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: 1.0,
  }));

  return routes;
}
