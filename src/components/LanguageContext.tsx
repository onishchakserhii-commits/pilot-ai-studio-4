"use client"

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, content } from '@/lib/i18n-content';

type LanguageContextType = {
  lang: Language;
  setLang: (lang: Language) => void;
  t: typeof content.fr;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>('fr');

  useEffect(() => {
    const saved = localStorage.getItem('pilot-lang') as Language;
    if (saved && (saved === 'fr' || saved === 'en' || saved === 'ua')) {
      setLang(saved);
    }
  }, []);

  const handleSetLang = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem('pilot-lang', newLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang: handleSetLang, t: content[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useTranslation must be used within LanguageProvider');
  return context;
};