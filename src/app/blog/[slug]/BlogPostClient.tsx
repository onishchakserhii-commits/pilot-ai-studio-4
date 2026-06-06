"use client"

import { useTranslation } from '@/components/LanguageContext';
import { Navigation } from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import { format } from 'date-fns';
import { fr, enUS, uk, it, de } from 'date-fns/locale';
import type { BlogPost } from '@/lib/markdown';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

type Props = {
  post: BlogPost;
};

export function BlogPostClient({ post }: Props) {
  const { t, lang } = useTranslation();
  const dateLocale = lang === 'ua' ? uk : lang === 'en' ? enUS : lang === 'it' ? it : lang === 'de' ? de : fr;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <article className="container mx-auto px-4 py-16 max-w-3xl">
        <Button variant="ghost" size="sm" className="mb-8 group" asChild>
          <Link href="/blog" className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            {t.blog.backToList}
          </Link>
        </Button>

        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
            <span className="flex items-center gap-1 bg-accent/10 text-accent px-2 py-0.5 rounded font-bold uppercase text-xs">
              <Tag className="w-3 h-3" />
              {post.category}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {format(new Date(post.createdAt), 'dd MMMM yyyy', { locale: dateLocale })}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-foreground leading-tight mb-6">
            {post.title}
          </h1>
          <p className="text-xl text-muted-foreground italic leading-relaxed">
            {post.excerpt}
          </p>
        </header>

        <div className="prose prose-lg dark:prose-invert max-w-none mb-16 text-foreground/90">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.content}
          </ReactMarkdown>
        </div>

        {/* CTA Block */}
        <Card className="p-8 border-2 border-accent/20 bg-accent/5 shadow-none text-center">
          <h3 className="text-2xl font-headline font-bold mb-4">{t.blog.ctaTitle}</h3>
          <p className="text-muted-foreground mb-8">
            {lang === 'fr' 
              ? 'Nous analysons votre présence en ligne pour trouver des solutions simples et concrètes.' 
              : lang === 'ua'
              ? 'Ми проаналізуємо вашу присутність онлайн, щоб знайти прості та конкретні рішення.'
              : lang === 'it'
              ? 'Analizziamo la tua presenza online per trovare soluzioni semplici e concrete.'
              : lang === 'de'
              ? 'Wir analysieren Ihre Online-Präsenz, um einfache und konkrete Lösungen zu finden.'
              : 'We analyze your online presence to find simple and concrete solutions.'}
          </p>
          <Button size="lg" className="rounded-full px-8 h-12 text-lg" asChild>
            <Link href="/#audit">{t.blog.ctaButton}</Link>
          </Button>
        </Card>
      </article>

      <footer className="py-16 border-t mt-20">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Aivello.
        </div>
      </footer>
    </div>
  );
}
