import { Card, CardHeader } from '@/components/ui/card';
import {
  Globe,
  Bot,
  TrendingUp,
  Layers,
  Smartphone,
  MapPin,
  Brain,
  CalendarCheck,
  Zap,
  Users,
  Store,
  FileEdit,
  PenTool,
  BarChart3
} from 'lucide-react';
import { content } from '@/lib/i18n-content';

type Props = {
  t: typeof content.fr;
};

export function ServicesSection({ t }: Props) {
  const categories = [
    {
      key: 'web',
      icon: Globe,
      color: 'text-blue-500 bg-blue-500/10',
      title: t.services.categories.web.title,
      items: t.services.categories.web.items,
      itemIcons: [Layers, Globe, Smartphone, MapPin]
    },
    {
      key: 'automation',
      icon: Bot,
      color: 'text-violet-500 bg-violet-500/10',
      title: t.services.categories.automation.title,
      items: t.services.categories.automation.items,
      itemIcons: [Brain, Bot, CalendarCheck, Zap, Users]
    },
    {
      key: 'acquisition',
      icon: TrendingUp,
      color: 'text-emerald-500 bg-emerald-500/10',
      title: t.services.categories.acquisition.title,
      items: t.services.categories.acquisition.items,
      itemIcons: [Store, FileEdit, PenTool, BarChart3, TrendingUp]
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none -translate-x-1/2" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-headline font-bold mb-4 tracking-tight">
            {t.services.title}
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div key={cat.key} className="flex flex-col gap-6 h-full">
                {/* Category Header */}
                <div className="flex items-center gap-3.5 pb-4 border-b border-muted/50">
                  <div className={`p-3 rounded-2xl ${cat.color} shrink-0`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold font-headline tracking-tight text-foreground">
                    {cat.title}
                  </h3>
                </div>

                {/* Service Cards */}
                <div className="flex flex-col gap-4">
                  {cat.items.map((item, idx) => {
                    const ItemIcon = cat.itemIcons[idx] || Zap;
                    return (
                      <Card 
                        key={idx} 
                        className="group border border-muted bg-white/70 hover:bg-white backdrop-blur-sm hover:border-accent/40 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 rounded-2xl overflow-hidden"
                      >
                        <CardHeader className="p-5 flex flex-row items-start gap-4 space-y-0">
                          <div className="p-2.5 rounded-xl bg-primary/5 text-primary group-hover:bg-accent group-hover:text-white transition-all duration-300 shrink-0">
                            <ItemIcon className="w-5 h-5" />
                          </div>
                          <div className="space-y-1.5">
                            <h4 className="font-bold text-base text-foreground group-hover:text-accent transition-colors duration-300 font-headline leading-snug">
                              {item.title}
                            </h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {item.desc}
                            </p>
                          </div>
                        </CardHeader>
                      </Card>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
