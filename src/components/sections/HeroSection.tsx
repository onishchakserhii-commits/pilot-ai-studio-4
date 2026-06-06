import { BadgePercent, Zap } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { content } from '@/lib/i18n-content';
import { AuroraMouseGlow } from '@/components/AuroraMouseGlow';

type Props = {
  t: typeof content.fr;
};

export function HeroSection({ t }: Props) {
  return (
    <section className="relative pt-20 pb-32 overflow-hidden bg-slate-950 text-white">
      <AuroraMouseGlow />
      <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent-foreground border border-accent/30 text-sm font-semibold mb-6 animate-in fade-in slide-in-from-bottom-3 duration-500">
            <Zap className="w-4 h-4 text-accent" />
            <span className="text-white">{t.hero.tagline}</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-headline font-bold text-white max-w-5xl mx-auto leading-[1.1] mb-8 animate-in fade-in slide-in-from-bottom-5 duration-700">
            {t.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 animate-in fade-in slide-in-from-bottom-7 duration-1000">
            {t.hero.subtitle}
          </p>
          <Link
            href="#pricing"
            className="mb-8 inline-flex max-w-3xl items-center justify-center gap-3 rounded-full border border-accent/40 bg-accent/20 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-accent/30 md:text-base"
          >
            <BadgePercent className="h-5 w-5 shrink-0 text-accent" />
            <span>{t.hero.promo}</span>
          </Link>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in slide-in-from-bottom-10 duration-1000">
            <Button size="lg" className="h-auto min-h-12 py-3 px-8 text-base rounded-full whitespace-normal text-center max-w-full sm:max-w-md bg-accent text-white hover:bg-accent/90" asChild>
              <Link href="#audit">{t.hero.ctaPrimary}</Link>
            </Button>
            <Button size="lg" variant="outline" className="h-auto min-h-12 py-3 px-8 text-base rounded-full whitespace-normal text-center border-slate-700 bg-transparent text-white hover:bg-slate-800 hover:text-white" asChild>
              <Link href="#services">{t.hero.ctaSecondary}</Link>
            </Button>
          </div>
        </div>
    </section>
  );
}
