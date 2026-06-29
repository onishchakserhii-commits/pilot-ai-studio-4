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
import dynamic from 'next/dynamic';

const Scene = dynamic(() => import('@/components/canvas/Scene').then(mod => mod.Scene), { 
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-background/50" />
});

export default async function Home() {
  const cookieStore = await cookies();
  const savedLang = cookieStore.get('pilot-lang')?.value as Language | undefined;
  const validLangs: Language[] = ['fr', 'en', 'ua', 'it', 'de'];
  const lang: Language = savedLang && validLangs.includes(savedLang) ? savedLang : 'fr';
  const t = content[lang];

  return (
    <div className="min-h-screen relative overflow-hidden text-foreground">
      <Scene />
      <div className="relative z-10 w-full">
        <Navigation />
        <main className="flex flex-col gap-0 w-full">
          <HeroSection t={t} />
          <PacksSection t={t} />
          <ServicesSection t={t} />
          <ImprovementsSection t={t} />
          <PricingSection t={t} />
          <ProcessSection t={t} />
          <AuditSection t={t} />
          <TrustSection t={t} />
        </main>
        <FooterSection t={t} />
        <Chatbot />
      </div>
    </div>
  );
}
