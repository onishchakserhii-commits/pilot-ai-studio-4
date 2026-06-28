import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import './globals.css';
import Script from 'next/script';
import { LanguageProvider } from '@/components/LanguageContext';
import CookieBanner from '@/components/CookieBanner';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Toaster } from '@/components/ui/toaster';
import { FirebaseClientProvider } from '@/firebase/client-provider';
import { Language } from '@/lib/i18n-content';
import { ModelProvider } from '@/lib/ModelContext';

export const metadata: Metadata = {
  title: 'Pilot AI Studio | Plus de demandes. Moins de routine.',
  description: 'Sites web rapides, IA et automatisations simples pour les petites entreprises en Suisse romande. Отримайте більше клієнтів за допомогою штучного інтелекту.',
  openGraph: {
    title: 'Pilot AI Studio',
    description: 'Агенція автоматизації та ШІ для локального бізнесу.',
    url: 'https://pilot-ai-studio.vercel.app',
    siteName: 'Pilot AI Studio',
    images: [
      {
        url: '/icon.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'fr_CH',
    type: 'website',
  },
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const cookieStore = await cookies();
  const savedLang = cookieStore.get('pilot-lang')?.value as Language | undefined;
  const validLangs: Language[] = ['fr', 'en', 'ua', 'it', 'de'];
  const initialLang: Language = savedLang && validLangs.includes(savedLang) ? savedLang : 'fr';

  return (
    <html lang={initialLang} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18186584530"
          strategy="afterInteractive"
        />
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-18186584530');
          `}
        </Script>
        <FirebaseClientProvider>
          <LanguageProvider initialLang={initialLang}>
            <ModelProvider>
              {children}
              <WhatsAppButton />
              <Toaster />
              <CookieBanner />
            </ModelProvider>
          </LanguageProvider>
        </FirebaseClientProvider>
      </body>
    </html>
  );
}
