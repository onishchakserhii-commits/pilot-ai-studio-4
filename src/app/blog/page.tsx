import { Navigation } from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { format } from 'date-fns';
import { fr, enUS, uk, it, de } from 'date-fns/locale';
import { getAllPosts } from '@/lib/markdown';

// We must handle translation strings server-side or pass them down,
// but since this is App Router and we might not have server-side translations set up easily,
// we can use a basic map or just hardcode for simplicity if t() is not available.
// Actually, let's keep it simple and use a basic dictionary for server components,
// or we can make the listing a Client Component that just fetches data on the server?
// No, server components can't use `useTranslation`. We can pass data to a Client Component,
// or just make `BlogListing` a Client Component that receives `posts` as a prop.

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Pilot AI Studio',
  description: 'Découvrez nos articles sur l\'intelligence artificielle, l\'automatisation et la transformation numérique pour les PME en Suisse.',
};

export default async function BlogPage() {
  const postsFr = getAllPosts('fr');
  const postsUa = getAllPosts('ua');
  const postsEn = getAllPosts('en');
  const postsIt = getAllPosts('it');
  const postsDe = getAllPosts('de');
  
  // To keep it simple, we pass all posts to a client component that handles the current language
  return <BlogListingClient 
    postsByLang={{ fr: postsFr, ua: postsUa, en: postsEn, it: postsIt, de: postsDe }} 
  />;
}

import { BlogListingClient } from './BlogListingClient';
