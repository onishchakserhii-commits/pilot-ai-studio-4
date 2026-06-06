import { MetadataRoute } from 'next';

const SITE_URL = 'https://pilot-ai-studio-6y843nul8-onserpet-7539s-projects.vercel.app'; // Can be an env variable in production

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/api/',
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
