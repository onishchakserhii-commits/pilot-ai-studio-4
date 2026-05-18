import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Zap, Bot } from 'lucide-react';
import Link from 'next/link';
import { content } from '@/lib/i18n-content';

type Props = {
  t: typeof content.fr;
};

export function ImprovementsSection({ t }: Props) {
  return (
    <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl font-headline font-bold mb-4 text-white">{t.improvements.title}</h2>
          <p className="text-primary-foreground/75 text-lg">{t.improvements.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Before/After list */}
          <div className="space-y-6">
            {t.improvements.cases.map((c: any, i: number) => (
              <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-4 text-left">
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 flex items-center justify-center rounded-full bg-destructive/20 text-white text-xs shrink-0 mt-0.5">✕</span>
                  <div>
                    <span className="text-xs uppercase font-bold text-destructive-foreground/75 tracking-wider">Avant</span>
                    <p className="text-primary-foreground/90 font-medium">{c.before}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 border-t border-white/5 pt-4">
                  <span className="w-6 h-6 flex items-center justify-center rounded-full bg-accent/20 text-accent text-xs shrink-0 mt-0.5">✓</span>
                  <div>
                    <span className="text-xs uppercase font-bold text-accent tracking-wider">Après avec Pilot AI</span>
                    <p className="text-white font-semibold">{c.after}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Simple Automation Explanation */}
          <Card className="bg-white/10 border-white/20 text-white backdrop-blur shadow-2xl overflow-hidden relative border-none">
            <div className="absolute top-0 right-0 bg-accent text-primary font-headline font-bold text-xs px-3 py-1.5 rounded-bl-xl tracking-wider">COMMENT ÇA MARCHE</div>
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl font-headline font-bold text-white flex items-center gap-2">
                <Zap className="w-5 h-5 text-accent animate-pulse" />
                {t.improvements.automation.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-left">
              <p className="text-white/80 leading-relaxed">
                {t.improvements.automation.desc}
              </p>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/20 text-accent flex items-center justify-center shrink-0">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-bold text-sm">Zéro jargon. Résultat concret.</h5>
                  <p className="text-xs text-white/60">Vous n'avez rien à configurer. Nous gérons tout de A à Z.</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-accent text-primary hover:bg-accent/90 rounded-full font-bold" asChild>
                <Link href="#audit">{t.hero.ctaPrimary}</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
