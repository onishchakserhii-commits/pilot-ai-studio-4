import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Smartphone, Zap, Bot, TrendingUp } from 'lucide-react';
import { content } from '@/lib/i18n-content';

type Props = {
  t: typeof content.fr;
};

export function ServicesSection({ t }: Props) {
  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-headline mb-4">{t.services.title}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-6">
            <Card className="group hover:border-accent transition-colors overflow-hidden">
              <CardHeader className="flex flex-row items-start gap-4 space-y-0">
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-accent group-hover:text-white transition-colors">
                  <Smartphone className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <CardTitle className="font-headline">{t.services.web.title}</CardTitle>
                  <CardDescription>{t.services.web.desc}</CardDescription>
                </div>
              </CardHeader>
            </Card>
            <Card className="group hover:border-accent transition-colors overflow-hidden">
              <CardHeader className="flex flex-row items-start gap-4 space-y-0">
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-accent group-hover:text-white transition-colors">
                  <Bot className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <CardTitle className="font-headline">{t.services.ai.title}</CardTitle>
                  <CardDescription>{t.services.ai.desc}</CardDescription>
                </div>
              </CardHeader>
            </Card>
          </div>
          <div className="flex flex-col gap-6">
            <Card className="group hover:border-accent transition-colors overflow-hidden">
              <CardHeader className="flex flex-row items-start gap-4 space-y-0">
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-accent group-hover:text-white transition-colors">
                  <Zap className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <CardTitle className="font-headline">{t.services.automation.title}</CardTitle>
                  <CardDescription>{t.services.automation.desc}</CardDescription>
                </div>
              </CardHeader>
            </Card>
            <Card className="group hover:border-accent transition-colors overflow-hidden">
              <CardHeader className="flex flex-row items-start gap-4 space-y-0">
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-accent group-hover:text-white transition-colors">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <CardTitle className="font-headline">{t.services.audit.title}</CardTitle>
                  <CardDescription>{t.services.audit.desc}</CardDescription>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
