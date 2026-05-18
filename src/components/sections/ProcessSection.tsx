import { content } from '@/lib/i18n-content';

type Props = {
  t: typeof content.fr;
};

export function ProcessSection({ t }: Props) {
  return (
    <section id="process" className="py-24 bg-white/80 backdrop-blur-sm relative border-t border-b border-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl font-headline font-bold text-foreground mb-4">{t.steps.title}</h2>
          <p className="text-muted-foreground text-lg">{t.steps.subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
          {t.steps.items.map((step: any, i: number) => (
            <div key={i} className="flex flex-col items-center text-center relative group">
              {/* Visual Step number */}
              <div className="w-14 h-14 rounded-full bg-primary/5 text-primary border-2 border-primary/10 group-hover:border-accent group-hover:bg-accent/5 transition-all duration-300 flex items-center justify-center text-xl font-bold font-headline mb-6 shrink-0 relative z-10">
                {step.num}
              </div>
              
              <h4 className="font-headline font-bold text-lg mb-2 text-foreground">{step.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-[200px]">{step.desc}</p>
              
              {/* Arrow helper for large screens */}
              {i < 4 && (
                <div className="hidden md:block absolute top-7 left-[calc(50%+28px)] w-[calc(100%-56px)] h-0.5 bg-muted group-hover:bg-accent/20 transition-colors z-0" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
