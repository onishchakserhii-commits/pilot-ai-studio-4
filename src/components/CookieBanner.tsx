"use client";
import React, { useState, useEffect } from 'react';
import { useTranslation } from '@/components/LanguageContext';
import Link from 'next/link';

const CookieBanner: React.FC = () => {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show banner if consent cookie not set
    const consent = document.cookie.split('; ').find(row => row.startsWith('cookie_consent='));
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    document.cookie = `cookie_consent=all; path=/; max-age=31536000`;
    setVisible(false);
  };

  const handleReject = () => {
    document.cookie = `cookie_consent=none; path=/; max-age=31536000`;
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-300 dark:border-gray-600 p-4 flex flex-col md:flex-row items-center justify-between shadow-lg z-50">
      <div className="flex-1 text-sm text-gray-800 dark:text-gray-200 mb-2 md:mb-0">
        <h2 className="font-semibold text-base mb-1">{t.cookieBanner.title}</h2>
        <p className="mb-1">{t.cookieBanner.description}</p>
        <Link href="/privacy" className="underline hover:text-blue-600 dark:hover:text-blue-400">{t.cookieBanner.policyLink}</Link>
      </div>
      <div className="flex space-x-2">
        <button onClick={handleReject} className="px-4 py-2 bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-200 rounded">
          {t.cookieBanner.rejectAll}
        </button>
        <button onClick={handleAccept} className="px-4 py-2 bg-blue-600 text-white rounded">
          {t.cookieBanner.acceptAll}
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
