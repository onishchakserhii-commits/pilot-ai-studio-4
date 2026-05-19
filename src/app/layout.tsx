import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import './globals.css';
import { LanguageProvider } from '@/components/LanguageContext';
import { Toaster } from '@/components/ui/toaster';
import { FirebaseClientProvider } from '@/firebase/client-provider';
import { Language } from '@/lib/i18n-content';

export const metadata: Metadata = {
  title: 'Pilot AI Studio | Plus de demandes. Moins de routine.',
  description: 'Sites web rapides, IA et automatisations simples pour les petites entreprises en Suisse romande.',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
        <FirebaseClientProvider>
          <LanguageProvider initialLang={initialLang}>
            {children}
            <Toaster />
          </LanguageProvider>
        </FirebaseClientProvider>
      </body>
    </html>
  );
}
