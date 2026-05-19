
"use client"

import { useTranslation } from '@/components/LanguageContext';
import { Navigation } from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useFirestore, useCollection } from '@/firebase';
import { collection, query, where, orderBy } from 'firebase/firestore';
import Link from 'next/link';
import { useMemo } from 'react';
import { format } from 'date-fns';
import { fr, enUS, uk, it, de } from 'date-fns/locale';

export default function BlogListing() {
  const { t, lang } = useTranslation();
  const db = useFirestore();

  const blogQuery = useMemo(() => {
    if (!db) return null;
    return query(
      collection(db, 'blogPosts'),
      where('status', '==', 'published'),
      where('language', '==', lang),
      orderBy('createdAt', 'desc')
    );
  }, [db, lang]);

  const { data: posts, loading } = useCollection(blogQuery);

  const dateLocale = lang === 'ua' ? uk : lang === 'en' ? enUS : lang === 'it' ? it : lang === 'de' ? de : fr;

  return (
    <div className="min-h-screen hero-gradient">
      <Navigation />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-headline font-bold mb-4">{t.blog.title}</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.blog.subtitle}</p>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map(i => (
                <Card key={i} className="animate-pulse h-64 bg-muted" />
              ))}
            </div>
          ) : posts && posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post: any) => (
                <Card key={post.id} className="flex flex-col h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-bold uppercase text-accent bg-accent/10 px-2 py-1 rounded">
                        {post.category}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {format(new Date(post.createdAt), 'dd MMMM yyyy', { locale: dateLocale })}
                      </span>
                    </div>
                    <CardTitle className="font-headline text-2xl leading-tight">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-muted-foreground line-clamp-3">
                      {post.excerpt}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="link" className="p-0 text-accent font-semibold" asChild>
                      <Link href={`/blog/${post.slug}`}>
                        {t.blog.readMore} →
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-xl">{t.blog.noPosts}</p>
            </div>
          )}
        </div>
      </section>

      {/* Simplified Footer */}
      <footer className="py-16 bg-white border-t mt-auto">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Pilot AI Studio. Built for Swiss local business.
        </div>
      </footer>
    </div>
  );
}
