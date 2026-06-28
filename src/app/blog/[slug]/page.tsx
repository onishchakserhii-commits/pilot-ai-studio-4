import { getPostBySlug } from '@/lib/markdown';
import { BlogPostClient } from './BlogPostClient';
import { notFound } from 'next/navigation';
import { cookies } from 'next/headers';
import { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const { slug } = await params;
  const cookieStore = await cookies();
  const savedLang = cookieStore.get('pilot-lang')?.value || 'fr';
  const post = await getPostBySlug(slug, savedLang);

  if (!post) {
    return {
      title: 'Post Not Found | Pilot AI Studio',
    };
  }

  return {
    title: `${post.title} | Pilot AI Studio`,
    description: post.metaDescription || post.excerpt,
    openGraph: {
      title: post.title,
      description: post.metaDescription || post.excerpt,
      type: 'article',
      publishedTime: post.createdAt,
      tags: post.tags,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const cookieStore = await cookies();
  const savedLang = cookieStore.get('pilot-lang')?.value || 'fr';
  const post = await getPostBySlug(slug, savedLang);

  if (!post) {
    notFound();
  }

  return <BlogPostClient post={post} />;
}
