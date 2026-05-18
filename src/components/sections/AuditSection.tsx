import { Card } from '@/components/ui/card';
import { content } from '@/lib/i18n-content';
import { AuditFormClient } from './AuditFormClient';

type Props = {
  t: typeof content.fr;
};

export function AuditSection({ t }: Props) {
  return (
    <section id="audit" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-headline font-bold mb-4">{t.audit.title}</h2>
            <p className="text-muted-foreground text-lg">{t.audit.subtitle}</p>
          </div>
          <Card className="p-8 shadow-2xl border-primary/5">
            <AuditFormClient t={t} />
          </Card>
        </div>
      </div>
    </section>
  );
}
