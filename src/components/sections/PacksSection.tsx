import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Scissors, Hammer, Wrench, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { content } from '@/lib/i18n-content';

type Props = {
  t: typeof content.fr;
};

export function PacksSection({ t }: Props) {
  return (
    <section className="py-24 bg-white/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl font-headline font-bold text-foreground mb-4">{t.packs.title}</h2>
          <p className="text-muted-foreground text-lg">{t.packs.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Salon de beauté Card */}
          <Card className="border-none shadow-lg bg-background/80 hover:shadow-xl transition-all hover:-translate-y-1 duration-300">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 rounded-2xl bg-pink-500/10 text-pink-500 flex items-center justify-center mb-4">
                <Scissors className="w-6 h-6" />
              </div>
              <CardTitle className="text-2xl font-headline font-bold">{t.packs.beauty.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                {t.packs.beauty.features.map((feat: string, i: number) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-pink-500 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="pt-4 border-t border-muted/50">
              <Button variant="outline" className="w-full rounded-full border-pink-500/20 text-pink-600 hover:bg-pink-500 hover:text-white" asChild>
                <Link href="#audit">{t.hero.ctaPrimary}</Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Artisans / Rénovation Card */}
          <Card className="border-none shadow-lg bg-background/80 hover:shadow-xl transition-all hover:-translate-y-1 duration-300">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center mb-4">
                <Hammer className="w-6 h-6" />
              </div>
              <CardTitle className="text-2xl font-headline font-bold">{t.packs.artisans.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                {t.packs.artisans.features.map((feat: string, i: number) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="pt-4 border-t border-muted/50">
              <Button variant="outline" className="w-full rounded-full border-amber-500/20 text-amber-600 hover:bg-amber-500 hover:text-white" asChild>
                <Link href="#audit">{t.hero.ctaPrimary}</Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Garages Card */}
          <Card className="border-none shadow-lg bg-background/80 hover:shadow-xl transition-all hover:-translate-y-1 duration-300">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-500 flex items-center justify-center mb-4">
                <Wrench className="w-6 h-6" />
              </div>
              <CardTitle className="text-2xl font-headline font-bold">{t.packs.garages.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                {t.packs.garages.features.map((feat: string, i: number) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="pt-4 border-t border-muted/50">
              <Button variant="outline" className="w-full rounded-full border-blue-500/20 text-blue-600 hover:bg-blue-500 hover:text-white" asChild>
                <Link href="#audit">{t.hero.ctaPrimary}</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
