
"use client"

import Link from 'next/link';
import { useTranslation } from './LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Button } from '@/components/ui/button';

export function Navigation() {
  const { t } = useTranslation();

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-headline font-bold">P</span>
          </div>
          <span className="font-headline font-bold text-xl tracking-tight">Pilot AI <span className="text-accent">Studio</span></span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/#services" className="hover:text-accent transition-colors">{t.nav.services}</Link>
          <Link href="/blog" className="hover:text-accent transition-colors">{t.nav.blog}</Link>
          <Link href="/#pricing" className="hover:text-accent transition-colors">{t.nav.pricing}</Link>
          <Link href="/#audit" className="hover:text-accent transition-colors">{t.nav.audit}</Link>
        </div>

        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <Button asChild variant="default" className="hidden sm:flex">
            <Link href="/#audit">{t.nav.audit}</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
