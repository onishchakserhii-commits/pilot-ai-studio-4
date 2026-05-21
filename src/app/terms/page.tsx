import type { Metadata } from 'next';
import { content } from '@/lib/i18n-content';
import { LanguageProvider } from '@/components/LanguageContext';
import { cookies } from 'next/headers';

export const metadata: Metadata = {
  title: 'Умови використання – Pilot AI Studio',
  description: 'Офіційні умови використання сайту Pilot AI Studio, відповідно до законодавства Швейцарії (кантон Во Монтре).',
};

export default async function TermsPage() {
  const cookieStore = await cookies();
  const savedLang = cookieStore.get('pilot-lang')?.value as keyof typeof content;
  const t = content[savedLang ?? 'ua'];

  return (
    <LanguageProvider initialLang={savedLang ?? 'ua'}>
      <section className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-headline mb-6">{t.terms.title}</h1>
        <p className="mb-4">{t.terms.intro}</p>
        <h2 className="text-2xl font-bold mt-8 mb-4">{t.terms.usage}</h2>
        <p>{t.terms.usageDesc}</p>
        <h2 className="text-2xl font-bold mt-8 mb-4">{t.terms.liability}</h2>
        <p>{t.terms.liabilityDesc}</p>
        <h2 className="text-2xl font-bold mt-8 mb-4">{t.terms.termination}</h2>
        <p>{t.terms.terminationDesc}</p>
        <h2 className="text-2xl font-bold mt-8 mb-4">{t.terms.governingLaw}</h2>
        <p>{t.terms.governingLawDesc}</p>
      </section>
    </LanguageProvider>
  );
}
