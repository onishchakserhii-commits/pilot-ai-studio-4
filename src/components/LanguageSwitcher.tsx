"use client"

import { useTranslation } from './LanguageContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

export function LanguageSwitcher() {
  const { lang, setLang } = useTranslation();

  const labels = {
    fr: '🇫🇷 FR',
    en: '🇬🇧 EN',
    ua: '🇺🇦 UA'
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
        <DropdownMenuItem onClick={() => setLang('fr')}>Français</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLang('en')}>English</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLang('ua')}>Українська</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}