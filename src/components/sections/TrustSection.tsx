import { ShieldCheck, Clock, Users } from 'lucide-react';
import { content } from '@/lib/i18n-content';

type Props = {
  t: typeof content.fr;
};

export function TrustSection({ t }: Props) {
  // We can add translations for TrustSection later if needed, for now it's hardcoded as in original
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-headline text-center mb-16">Pourquoi travailler avec Pilot AI Studio ?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="space-y-4">
            <div className="mx-auto w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h4 className="font-headline font-bold">Expertise Suisse Romande</h4>
            <p className="text-muted-foreground text-sm">Une compréhension fine du marché local et des besoins des PME de la région.</p>
          </div>
          <div className="space-y-4">
            <div className="mx-auto w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
              <Clock className="w-6 h-6" />
            </div>
            <h4 className="font-headline font-bold">Fait pour gagner du temps</h4>
            <p className="text-muted-foreground text-sm">Nous ne faisons pas de l'IA pour la mode, mais pour réduire vos tâches manuelles.</p>
          </div>
          <div className="space-y-4">
            <div className="mx-auto w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
              <Users className="w-6 h-6" />
            </div>
            <h4 className="font-headline font-bold">Simple et transparent</h4>
            <p className="text-muted-foreground text-sm">Pas de jargon technique complexe. Des résultats clairs et mesurables.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
