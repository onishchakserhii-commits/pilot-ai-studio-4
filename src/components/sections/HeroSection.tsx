'use client';

import { BadgePercent, Zap } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { content, Language } from '@/lib/i18n-content';
import { motion } from 'framer-motion';

type Props = {
  t: typeof content.fr;
};

export function HeroSection({ t }: Props) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 pb-32 overflow-hidden text-foreground">
      <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent-foreground border border-accent/20 text-sm font-semibold mb-6"
          >
            <Zap className="w-4 h-4 text-accent" />
            <span className="text-foreground">{t.hero.tagline}</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-7xl font-headline font-bold text-foreground max-w-5xl mx-auto leading-[1.1] mb-8"
          >
            {t.hero.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            {t.hero.subtitle}
          </motion.p>
          
          {t.hero.promo && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <Link
                href="#pricing"
                className="mb-8 inline-flex max-w-3xl items-center justify-center gap-3 rounded-full border border-accent/40 bg-accent/20 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-accent/30 md:text-base"
              >
                <BadgePercent className="h-5 w-5 shrink-0 text-accent" />
                <span>{t.hero.promo}</span>
              </Link>
            </motion.div>
          )}

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button size="lg" className="h-auto min-h-12 py-3 px-8 text-base rounded-full whitespace-normal text-center max-w-full sm:max-w-md bg-accent text-white hover:bg-accent/90" asChild>
              <Link href="#audit">{t.hero.ctaPrimary}</Link>
            </Button>
            <Button size="lg" variant="outline" className="h-auto min-h-12 py-3 px-8 text-base rounded-full whitespace-normal text-center border-border bg-white/5 backdrop-blur-md text-foreground hover:bg-white/10 hover:text-foreground" asChild>
              <Link href="#services">{t.hero.ctaSecondary}</Link>
            </Button>
          </motion.div>
        </div>
    </section>
  );
}
