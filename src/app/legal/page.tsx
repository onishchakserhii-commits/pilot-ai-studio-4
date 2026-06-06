import type { Metadata } from 'next';
import { content } from '@/lib/i18n-content';

export const metadata: Metadata = {
  title: 'Legal Notice | Aivello',
  description: 'Legal information required by Swiss law (canton Vaud).',
};

export default function LegalPage() {
  // Using French placeholder (you can replace with actual data)
  const t = content.fr.legal;
  return (
    <section className="container mx-auto py-12 max-w-4xl px-4">
      <h1 className="text-3xl font-headline font-bold mb-6">{t.title}</h1>
      <p className="mb-8 text-muted-foreground">{t.intro}</p>
      
      <div className="space-y-6 text-foreground">
        <div>
          <h2 className="text-xl font-semibold mb-2">Propriétaire du site / Éditeur</h2>
          <p>Onyshchak Serhii</p>
          <p>Belmont 50</p>
          <p>1820 Montreux</p>
          <p>Suisse</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Contact</h2>
          <p>{t.email}: <a href="mailto:aivello.studio@gmail.com" className="text-accent hover:underline">aivello.studio@gmail.com</a></p>
          <p>{t.phone}: <a href="tel:+41796186852" className="text-accent hover:underline">+41 79 618 68 52</a></p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Registre du commerce & IDE</h2>
          <p>Raison individuelle non inscrite au registre du commerce pour le moment.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">TVA</h2>
          <p>Entreprise non assujettie à la TVA (chiffre d'affaires inférieur au seuil obligatoire).</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Hébergement</h2>
          <p>Ce site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA.</p>
        </div>
      </div>
    </section>
  );
}
