import type { Metadata } from 'next';
import { content } from '@/lib/i18n-content';

export const metadata: Metadata = {
  title: 'Legal Notice | Pilot AI Studio',
  description: 'Legal information required by Swiss law (canton Vaud).',
};

export default function LegalPage() {
  // Using French placeholder (you can replace with actual data)
  const t = content.fr.legal;
  return (
    <section className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-6">{t.title}</h1>
      <p>{t.intro}</p>
      <ul className="list-disc ml-6 mt-4 space-y-2">
        <li>{t.companyName}: [Your Company Name]</li>
        <li>{t.address}: [Street, No., ZIP, City]</li>
        <li>{t.registrationNumber}: [Register No.]</li>
        <li>{t.vatNumber}: [VAT No.]</li>
        <li>{t.email}: [contact@example.com]</li>
        <li>{t.phone}: +41 79 618 68 52</li>
      </ul>
    </section>
  );
}
