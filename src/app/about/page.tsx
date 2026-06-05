import { Navigation } from '@/components/Navigation';
import { FooterSection } from '@/components/sections/FooterSection';
import { content, Language } from '@/lib/i18n-content';
import { cookies } from 'next/headers';

export default async function AboutPage() {
  const cookieStore = await cookies();
  const savedLang = cookieStore.get('pilot-lang')?.value as Language | undefined;
  const validLangs: Language[] = ['fr', 'en', 'ua', 'it', 'de'];
  const lang: Language = savedLang && validLangs.includes(savedLang) ? savedLang : 'fr';
  const t = content[lang];

  return (
    <div className="min-h-screen hero-gradient flex flex-col">
      <Navigation />
      <main className="flex-1 container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-headline font-bold mb-12 text-center text-foreground">
          À propos d'Aivello
        </h1>
        
        <div className="max-w-5xl mx-auto mb-16 rounded-2xl overflow-hidden shadow-2xl border border-border bg-card">
          <img 
            src="/aivello-banner.jpg" 
            alt="Aivello Banner" 
            className="w-full h-auto object-cover"
            onError={(e) => {
              // Fallback if the image is not found
              (e.target as HTMLImageElement).src = "/logo.png";
              (e.target as HTMLImageElement).className = "w-32 h-32 mx-auto my-12 object-contain";
            }}
          />
        </div>
        
        <div className="prose dark:prose-invert max-w-3xl mx-auto text-lg text-muted-foreground space-y-6">
          <p>
            Bienvenue chez <strong>Aivello</strong>. Notre mission est de simplifier la vie des entreprises locales en Suisse romande grâce à des solutions digitales modernes.
          </p>
          <p>
            Nous créons des sites web intelligents et mettons en place des automatisations propulsées par l'intelligence artificielle pour vous faire gagner du temps et vous aider à développer votre activité.
          </p>
          <p>
            Que vous ayez besoin d'un site vitrine, d'un système de réservation automatisé ou d'un assistant virtuel pour répondre à vos clients 24h/24, Aivello est votre partenaire de confiance.
          </p>
        </div>
      </main>
      <FooterSection t={t} />
    </div>
  );
}
