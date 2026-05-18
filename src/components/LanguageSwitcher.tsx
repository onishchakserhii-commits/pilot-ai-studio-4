"use client"

import { useTranslation } from './LanguageContext';
import { useRouter } from 'next/navigation';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { Language } from '@/lib/i18n-content';

export function LanguageSwitcher() {
  const { lang, setLang } = useTranslation();
  const router = useRouter();

  const labels = {
    fr: '🇫🇷 FR',
    en: '🇬🇧 EN',
    ua: '🇺🇦 UA'
  };

  const handleLangChange = (newLang: Language) => {
    setLang(newLang);
    router.refresh();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2">
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline">{labels[lang]}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => handleLangChange('fr')}>Français</DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleLangChange('en')}>English</DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleLangChange('ua')}>Українська</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}