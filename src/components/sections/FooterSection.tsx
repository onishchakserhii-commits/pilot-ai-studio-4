import Link from 'next/link';
import { content } from '@/lib/i18n-content';

type Props = {
  t: typeof content.fr;
};

export function FooterSection({ t }: Props) {
  return (
    <footer className="py-16 bg-white border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-headline font-bold">P</span>
              </div>
              <span className="font-headline font-bold text-xl tracking-tight">Pilot AI <span className="text-accent">Studio</span></span>
            </Link>
            <p className="text-muted-foreground max-sm">
              {t.footer.desc}
            </p>
          </div>
          <div>
            <h4 className="font-headline font-bold mb-6">Navigation</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="#services" className="hover:text-accent">{t.nav.services}</Link></li>
              <li><Link href="#pricing" className="hover:text-accent">{t.nav.pricing}</Link></li>
              <li><Link href="#audit" className="hover:text-accent">{t.nav.audit}</Link></li>
              <li><Link href="/blog" className="hover:text-accent">{t.nav.blog}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-headline font-bold mb-6">{t.nav.contact}</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>Suisse Romande</li>
              <li><a href="mailto:onishchakserhii@gmail.com" className="hover:text-accent transition-colors">onishchakserhii@gmail.com</a></li>
              <li>WhatsApp: <a href="https://wa.me/41796186852" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">WhatsApp</a></li>
              <li>Telegram: <a href="https://t.me/PilotAiStudio" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">@PilotAiStudio</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Pilot AI Studio. Built for Swiss local business.
        </div>
      </div>
    </footer>
  );
}
