import { cookies } from 'next/headers';
import { content, Language } from '@/lib/i18n-content';
import { Navigation } from '@/components/Navigation';
import { Chatbot } from '@/components/Chatbot';
import { HeroSection } from '@/components/sections/HeroSection';
import { PacksSection } from '@/components/sections/PacksSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { ImprovementsSection } from '@/components/sections/ImprovementsSection';
import { PricingSection } from '@/components/sections/PricingSection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { AuditSection } from '@/components/sections/AuditSection';
import { TrustSection } from '@/components/sections/TrustSection';
import { FooterSection } from '@/components/sections/FooterSection';

export default async function Home() {
  const cookieStore = await cookies();
  const savedLang = cookieStore.get('pilot-lang')?.value as Language | undefined;
  const validLangs: Language[] = ['fr', 'en', 'ua', 'it', 'de'];
  const lang: Language = savedLang && validLangs.includes(savedLang) ? savedLang : 'fr';
  const t = content[lang];

  return (
    <div className="min-h-screen hero-gradient">
      <Navigation />
      <HeroSection t={t} />
      <PacksSection t={t} />
      <ServicesSection t={t} />
      <ImprovementsSection t={t} />
      <PricingSection t={t} />
      <ProcessSection t={t} />
      <AuditSection t={t} />
      <TrustSection t={t} />
      <FooterSection t={t} />
      <Chatbot />
    </div>
  );
}
