import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp, PhoneCall, Clock, Star, Quote } from 'lucide-react';
import Link from 'next/link';
import { content } from '@/lib/i18n-content';

type Props = {
  t: typeof content.fr;
};

export function ImprovementsSection({ t }: Props) {
  const icons = [
    <TrendingUp key={0} className="w-7 h-7" />,
    <PhoneCall key={1} className="w-7 h-7" />,
    <Clock key={2} className="w-7 h-7" />,
    <Star key={3} className="w-7 h-7" />,
  ];

  return (
    <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-headline font-bold mb-6 text-white leading-tight">
            {t.improvements.title}
          </h2>
          <p className="text-primary-foreground/80 text-xl max-w-2xl mx-auto">
            {t.improvements.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {t.improvements.features.map((feature: any, i: number) => (
            <Card key={i} className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 border-none backdrop-blur shadow-xl hover:-translate-y-1 group">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 rounded-2xl bg-accent/20 text-accent flex items-center justify-center mb-5 mx-auto group-hover:scale-110 transition-transform duration-300">
                  {icons[i] || icons[0]}
                </div>
                <p className="text-4xl font-headline font-black text-accent mb-2">{feature.title}</p>
                <p className="text-white/70 leading-relaxed text-sm">{feature.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="max-w-4xl mx-auto bg-gradient-to-r from-white/5 to-white/10 border-white/20 text-white backdrop-blur-md shadow-2xl overflow-hidden relative border-none">
          <div className="absolute top-0 right-0 bg-accent text-primary font-headline font-bold text-xs px-4 py-2 rounded-bl-xl tracking-wider">
            {t.improvements.automation.badge}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-8 md:p-12">
            <div className="space-y-6 text-left">
              <Quote className="w-10 h-10 text-accent/40" />
              <p className="text-white/90 leading-relaxed text-lg italic">
                {t.improvements.automation.desc}
              </p>
              <div>
                <h5 className="font-bold text-lg text-white">{t.improvements.automation.highlight}</h5>
                <p className="text-sm text-white/60">{t.improvements.automation.highlightDesc}</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-headline font-bold text-white">
                {t.improvements.automation.title}
              </h3>
              <Button className="w-fit h-auto py-3 px-8 bg-accent text-primary hover:bg-accent/90 rounded-full font-bold shadow-[0_0_20px_rgba(var(--accent),0.3)] transition-all hover:scale-105" asChild>
                <Link href="#audit">{t.hero.ctaPrimary}</Link>
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
