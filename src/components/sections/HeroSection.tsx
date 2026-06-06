import { BadgePercent, Zap } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { content } from '@/lib/i18n-content';
import { AmbientBackground } from '@/components/AmbientBackground';

type Props = {
  t: typeof content.fr;
};

export function HeroSection({ t }: Props) {
  return (
    <>
      <AmbientBackground />
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6 animate-in fade-in slide-in-from-bottom-3 duration-500 relative z-10">
            <Zap className="w-4 h-4" />
            <span>{t.hero.tagline}</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-headline font-bold text-foreground max-w-5xl mx-auto leading-[1.1] mb-8 animate-in fade-in slide-in-from-bottom-5 duration-700 relative z-10">
            {t.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-in fade-in slide-in-from-bottom-7 duration-1000 relative z-10">
            {t.hero.subtitle}
          </p>
          <Link
            href="#pricing"
            className="mb-8 inline-flex max-w-3xl items-center justify-center gap-3 rounded-full border border-accent/20 bg-accent/10 px-5 py-3 text-sm font-semibold text-accent shadow-sm transition-colors hover:bg-accent/15 md:text-base relative z-10"
          >
            <BadgePercent className="h-5 w-5 shrink-0" />
            <span>{t.hero.promo}</span>
          </Link>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in slide-in-from-bottom-10 duration-1000 relative z-10">
            <Button size="lg" className="h-auto min-h-12 py-3 px-8 text-base rounded-full whitespace-normal text-center max-w-full sm:max-w-md" asChild>
              <Link href="#audit">{t.hero.ctaPrimary}</Link>
            </Button>
            <Button size="lg" variant="outline" className="h-auto min-h-12 py-3 px-8 text-base rounded-full whitespace-normal text-center" asChild>
              <Link href="#services">{t.hero.ctaSecondary}</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
