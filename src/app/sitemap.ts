import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/markdown';

const SITE_URL = 'https://pilot-ai-studio-6y843nul8-onserpet-7539s-projects.vercel.app'; // Can be an env variable in production

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Base static routes
  const routes = [
    '',
    '/blog',
  ].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Get all blog posts to generate their URLs
  const posts = [
    ...(await getAllPosts('fr')),
    ...(await getAllPosts('ua')),
    ...(await getAllPosts('en')),
    ...(await getAllPosts('it')),
    ...(await getAllPosts('de')),
  ];

  const postRoutes = posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.createdAt),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Avoid duplicate routes if posts are returned multiple times somehow
  const uniquePostRoutes = Array.from(new Map(postRoutes.map((item) => [item.url, item])).values());

  return [...routes, ...uniquePostRoutes];
}
