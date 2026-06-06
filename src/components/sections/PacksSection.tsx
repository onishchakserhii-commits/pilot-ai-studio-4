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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
              <Button variant="outline" className="w-full h-auto min-h-10 py-3 rounded-full border-pink-500/20 text-pink-600 hover:bg-pink-500 hover:text-white whitespace-normal text-center" asChild>
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
              <Button variant="outline" className="w-full h-auto min-h-10 py-3 rounded-full border-amber-500/20 text-amber-600 hover:bg-amber-500 hover:text-white whitespace-normal text-center" asChild>
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
              <Button variant="outline" className="w-full h-auto min-h-10 py-3 rounded-full border-blue-500/20 text-blue-600 hover:bg-blue-500 hover:text-white whitespace-normal text-center" asChild>
                <Link href="#audit">{t.hero.ctaPrimary}</Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Bakeries Card */}
          <Card className="border-none shadow-lg bg-background/80 hover:shadow-xl transition-all hover:-translate-y-1 duration-300">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 rounded-2xl bg-orange-500/10 text-orange-500 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-croissant w-6 h-6"><path d="m4.6 13.4-.52 2.8c-.1.54.22 1.05.74 1.25.96.38 2.05.41 3.1.28l.21-.03c1.23-.16 2.45-.48 3.63-.89l.86-.3c1.55-.54 3.03-1.28 4.39-2.22l.53-.37c.36-.26.54-.7.44-1.12l-.46-2-2.14-9.33c-.08-.34-.33-.61-.66-.71-.34-.1-.7-.01-.95.23l-3.52 3.52c-.64.64-1.46 1.09-2.35 1.28L4.6 6.6c-.36.08-.66.33-.77.68l-.8 2.39c-.14.4.01.85.35 1.1l2.5 1.83.72.68Z"/><path d="m10.5 21.5 1.1-2"/><path d="M14 19.5 15.5 18"/><path d="M17.5 16 19 14.5"/></svg>
              </div>
              <CardTitle className="text-2xl font-headline font-bold">{t.packs.bakeries.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                {t.packs.bakeries.features.map((feat: string, i: number) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="pt-4 border-t border-muted/50">
              <Button variant="outline" className="w-full h-auto min-h-10 py-3 rounded-full border-orange-500/20 text-orange-600 hover:bg-orange-500 hover:text-white whitespace-normal text-center" asChild>
                <Link href="#audit">{t.hero.ctaPrimary}</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
