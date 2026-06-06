"use client";

import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { useTranslation } from "@/components/LanguageContext";
import { Button } from "@/components/ui/button";
import { ConstellationBackground } from "@/components/ConstellationBackground";
import Script from "next/script";

export default function SuccessPage() {
  const { t } = useTranslation();

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-slate-950 text-white">
      <Script id="google-ads-conversion" strategy="afterInteractive">
        {`
          gtag('event', 'conversion', {
              'send_to': 'AW-18186584530/pHhPCIem8bkcENKDheBD',
              'transaction_id': ''
          });
        `}
      </Script>
      <ConstellationBackground />
      
      <div className="relative z-10 container max-w-lg mx-auto px-4 text-center">
        <div className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl animate-in zoom-in-95 duration-500">
          <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          
          <h1 className="text-3xl md:text-4xl font-headline font-bold mb-4">
            {t.audit.form.successTitle}
          </h1>
          
          <p className="text-lg text-slate-300 mb-8 leading-relaxed">
            {t.audit.form.successDesc}
          </p>
          
          <Button asChild className="w-full sm:w-auto px-8 py-6 rounded-full text-lg font-medium bg-white text-slate-950 hover:bg-slate-200 transition-colors">
            <Link href="/">
              {t.nav.home}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
