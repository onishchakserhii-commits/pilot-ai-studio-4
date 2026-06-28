"use client"

import { useTranslation } from '../LanguageContext';
import { FadeIn } from '../FadeIn';

export function AboutHero() {
  const { t } = useTranslation();

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-headline font-bold mb-6 tracking-tight text-white">
              {t.about?.title || 'About Us'}
            </h1>
            <p className="text-xl text-slate-300 mb-12">
              {t.about?.subtitle || 'Learn more about Pilot AI Studio and our mission.'}
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mt-16 max-w-5xl mx-auto">
          {/* Mission Block */}
          <FadeIn delay={0.1}>
            <div className="bg-slate-900/60 backdrop-blur-md rounded-3xl p-8 border border-slate-700/50 shadow-xl h-full flex flex-col justify-center">
              <h2 className="text-2xl font-headline font-bold mb-4 text-white">{t.about?.missionTitle || 'Our Mission'}</h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                {t.about?.missionDesc || 'We help local businesses in Switzerland use modern web technologies and artificial intelligence to optimize their processes and attract new clients without technical complexity.'}
              </p>
              <div className="flex items-center gap-3 text-sm font-medium text-accent">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                Montreux, Belmont 50, 1820
              </div>
            </div>
          </FadeIn>

          {/* Contact & QR Code Block */}
          <FadeIn delay={0.2}>
            <div className="bg-slate-900/60 rounded-3xl p-8 border border-slate-700/50 h-full flex flex-col items-center justify-center text-center">
              <h2 className="text-2xl font-headline font-bold mb-4 text-white">{t.about?.contactTitle || 'Get in Touch'}</h2>
              <p className="text-slate-300 mb-8">
                {t.about?.contactDesc || 'Scan the QR code to message us on Telegram, or use our other communication channels.'}
              </p>
              
              <div className="bg-white p-4 rounded-2xl shadow-sm mb-6 inline-block">
                {/* QR Code Placeholder - User needs to place telegram-qr.png in public folder */}
                <img 
                  src="/telegram-qr.png" 
                  alt="Telegram QR Code" 
                  className="w-48 h-48 object-cover rounded-xl"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"><rect width="200" height="200" fill="%23f3f4f6"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="14" fill="%236b7280">QR Code (telegram-qr.png)</text></svg>'
                  }}
                />
              </div>

              <div className="flex gap-4">
                <a href="https://t.me/AivelloStudio" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#0088cc] text-white px-4 py-2 rounded-full hover:bg-[#0077b3] transition-colors font-medium">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
                  </svg>
                  @AivelloStudio
                </a>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Certifications Block */}
        <div className="mt-8 max-w-5xl mx-auto">
          <FadeIn delay={0.3}>
            <div className="bg-slate-900/60 backdrop-blur-md rounded-3xl p-8 border border-slate-700/50 shadow-xl flex flex-col items-center justify-center text-center">
              <h2 className="text-2xl font-headline font-bold mb-4 text-white">{t.about?.certTitle || 'Certifications'}</h2>
              <p className="text-slate-300 mb-8 max-w-2xl">
                {t.about?.certDesc || 'We continuously upgrade our skills to provide the best AI solutions for your business.'}
              </p>
              
              <div className="bg-white p-4 rounded-2xl shadow-sm inline-block">
                {/* Certificate Placeholder - User needs to place certificate.png in public folder */}
                <img 
                  src="/certificate.png" 
                  alt="AI Fluency for Small Businesses - PayPal Anthropic Certificate" 
                  className="w-full max-w-[600px] h-auto object-contain rounded-xl"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400"><rect width="600" height="400" fill="%23f3f4f6"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="16" fill="%236b7280">Certificate (public/certificate.png)</text></svg>'
                  }}
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
