import type { Metadata } from 'next';
import { content } from '@/lib/i18n-content';

export const metadata: Metadata = {
  title: 'Privacy Policy | Pilot AI Studio',
  description: 'Privacy policy required by Swiss data protection law.',
};

export default function PrivacyPage() {
  const t = content.fr.privacy;
  return (
    <section className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-6">{t.title}</h1>
      <p>{t.intro}</p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">{t.dataCollected}</h2>
      <p>[Describe data collected]</p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">{t.dataUse}</h2>
      <p>[Explain how data is used]</p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">{t.thirdParties}</h2>
      <p>[List third‑party services]</p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">{t.rights}</h2>
      <p>[Describe user rights]</p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">{t.contact}</h2>
      <p>{t.email}: [contact@example.com]</p>
    </section>
  );
}
