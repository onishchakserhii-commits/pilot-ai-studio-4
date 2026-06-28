import { Navigation } from '@/components/Navigation';
import { FooterSection } from '@/components/sections/FooterSection';
import { content, Language } from '@/lib/i18n-content';
import { cookies } from 'next/headers';
import { AboutHero } from '@/components/sections/AboutHero';
import { ConstellationBackground } from '@/components/ConstellationBackground';

export default async function AboutPage() {
  const cookieStore = await cookies();
  const savedLang = cookieStore.get('pilot-lang')?.value as Language | undefined;
  const validLangs: Language[] = ['fr', 'en', 'ua', 'it', 'de'];
  const lang: Language = savedLang && validLangs.includes(savedLang) ? savedLang : 'fr';
  const t = content[lang];

  return (
    <div className="min-h-screen flex flex-col relative">
      <ConstellationBackground />
      <Navigation />
      <main className="flex-1">
        <AboutHero />
      </main>
      <FooterSection t={t} />
    </div>
  );
}
