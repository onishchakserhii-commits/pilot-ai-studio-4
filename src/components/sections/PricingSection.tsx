import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { content } from '@/lib/i18n-content';

type Props = {
  t: typeof content.fr;
};

export function PricingSection({ t }: Props) {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-headline font-bold mb-6">{t.pricing.title}</h2>
          <div className="p-6 rounded-2xl bg-accent/5 border border-accent/10 mb-8">
            <p className="text-lg md:text-xl font-medium text-foreground mb-4">{t.pricing.subtitle}</p>
            <div className="flex flex-col md:flex-row gap-8 text-left">
              <div>
                <h4 className="font-bold text-accent mb-2">{t.pricing.whyTitle}</h4>
                <p className="text-muted-foreground text-sm">{t.pricing.whyDesc}</p>
              </div>
              <div className="md:border-l md:pl-8 flex items-center">
                <p className="text-muted-foreground text-sm font-medium italic">
                  {t.pricing.footer}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="flex flex-col relative overflow-hidden border-2 border-accent shadow-xl md:scale-105 z-10">
            <div className="absolute top-0 right-0 bg-accent text-white px-3 py-1 text-xs font-bold rounded-bl-lg">{t.pricing.promoBadge}</div>
            <CardHeader>
              <CardTitle className="font-headline">{t.pricing.starter.title}</CardTitle>
              <CardDescription>{t.pricing.starter.desc}</CardDescription>
              <div className="pt-4">
                <div className="text-sm font-medium text-muted-foreground line-through">CHF {t.pricing.starter.originalPrice}</div>
                <span className="text-4xl font-bold text-foreground">CHF {t.pricing.starter.price}</span>
                <p className="mt-1 text-sm font-semibold text-accent">{t.pricing.starter.note}</p>
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-3">
                {t.pricing.starter.features.map((f: string, i: number) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-accent" />
                    {f}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full rounded-full" asChild>
                <Link href="#audit">{t.pricing.starter.cta}</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="flex flex-col relative overflow-hidden border-2 border-transparent hover:border-primary/20 transition-all">
            <CardHeader>
              <CardTitle className="font-headline">{t.pricing.business.title}</CardTitle>
              <CardDescription>{t.pricing.business.desc}</CardDescription>
              <div className="pt-4">
                <span className="text-4xl font-bold text-foreground">CHF {t.pricing.business.price}</span>
                <span className="text-muted-foreground ml-2 text-sm">+</span>
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-3">
                {t.pricing.business.features.map((f: string, i: number) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-accent" />
                    {f}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full rounded-full bg-accent hover:bg-accent/90" asChild>
                <Link href="#audit">{t.pricing.business.cta}</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="flex flex-col relative overflow-hidden border-2 border-transparent hover:border-primary/20 transition-all">
            <CardHeader>
              <CardTitle className="font-headline">{t.pricing.premium.title}</CardTitle>
              <CardDescription>{t.pricing.premium.desc}</CardDescription>
              <div className="pt-4">
                <span className="text-4xl font-bold text-foreground">CHF {t.pricing.premium.price}</span>
                <span className="text-muted-foreground ml-2 text-sm">+</span>
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-3">
                {t.pricing.premium.features.map((f: string, i: number) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-accent" />
                    {f}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full rounded-full" asChild>
                <Link href="#audit">{t.pricing.premium.cta}</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
           <Card className="bg-muted/30 border-none">
             <CardHeader className="pb-2">
               <CardTitle className="text-lg font-headline">{t.pricing.audit.title}</CardTitle>
               <div className="text-xl font-bold text-accent">CHF {t.pricing.audit.price}</div>
             </CardHeader>
             <CardContent>
               <p className="text-xs text-muted-foreground">{t.pricing.audit.desc}</p>
               <Button variant="link" className="p-0 h-auto text-accent text-xs mt-2" asChild>
                  <Link href="#audit">{t.pricing.audit.cta} <ArrowRight className="w-3 h-3 ml-1"/></Link>
               </Button>
             </CardContent>
           </Card>
           <Card className="bg-muted/30 border-none">
             <CardHeader className="pb-2">
               <CardTitle className="text-lg font-headline">{t.pricing.n8n.title}</CardTitle>
               <div className="text-xl font-bold">CHF {t.pricing.n8n.price}+</div>
             </CardHeader>
             <CardContent>
               <p className="text-xs text-muted-foreground">{t.pricing.n8n.desc}</p>
               <Button variant="link" className="p-0 h-auto text-accent text-xs mt-2" asChild>
                  <Link href="#audit">{t.pricing.n8n.cta} <ArrowRight className="w-3 h-3 ml-1"/></Link>
               </Button>
             </CardContent>
           </Card>
           <Card className="bg-muted/30 border-none">
             <CardHeader className="pb-2">
               <CardTitle className="text-lg font-headline">{t.pricing.bot.title}</CardTitle>
               <div className="text-xl font-bold">CHF {t.pricing.bot.price}+</div>
             </CardHeader>
             <CardContent>
               <p className="text-xs text-muted-foreground">{t.pricing.bot.desc}</p>
               <Button variant="link" className="p-0 h-auto text-accent text-xs mt-2" asChild>
                  <Link href="#audit">{t.pricing.bot.cta} <ArrowRight className="w-3 h-3 ml-1"/></Link>
               </Button>
             </CardContent>
           </Card>
        </div>
      </div>
    </section>
  );
}
