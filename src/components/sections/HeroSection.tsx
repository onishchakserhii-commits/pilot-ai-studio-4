import { Zap } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { content } from '@/lib/i18n-content';

type Props = {
  t: typeof content.fr;
};

export function HeroSection({ t }: Props) {
  return (
    <section className="relative pt-20 pb-32 overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6 animate-in fade-in slide-in-from-bottom-3 duration-500">
          <Zap className="w-4 h-4" />
          <span>{t.hero.tagline}</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-headline font-bold text-foreground max-w-5xl mx-auto leading-[1.1] mb-8 animate-in fade-in slide-in-from-bottom-5 duration-700">
          {t.hero.title}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-in fade-in slide-in-from-bottom-7 duration-1000">
          {t.hero.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-10 duration-1000">
          <Button size="lg" className="h-12 px-8 text-base rounded-full" asChild>
            <Link href="#audit">{t.hero.ctaPrimary}</Link>
          </Button>
          <Button size="lg" variant="outline" className="h-12 px-8 text-base rounded-full" asChild>
            <Link href="#services">{t.hero.ctaSecondary}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
