
"use client"

import { useTranslation } from '@/components/LanguageContext';
import { Navigation } from '@/components/Navigation';
import { Chatbot } from '@/components/Chatbot';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Smartphone, Zap, Bot, TrendingUp, CheckCircle, ArrowRight, ShieldCheck, Clock, Users, Check, Scissors, Hammer, Wrench } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { useFirestore } from '@/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { useToast } from '@/hooks/use-toast';
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError, type SecurityRuleContext } from '@/firebase/errors';

export default function Home() {
  const { t } = useTranslation();
  const db = useFirestore();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAuditSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!db || isSubmitting) return;

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      businessName: formData.get('business') as string,
      website: formData.get('link') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      message: formData.get('message') as string,
      status: 'new',
      createdAt: new Date().toISOString(),
    };

    setIsSubmitting(true);

    const leadsRef = collection(db, 'leads');
    addDoc(leadsRef, data)
      .then(() => {
        toast({
          title: "Merci !",
          description: "Votre demande d'audit a été bien reçue. Nous vous contacterons bientôt.",
        });
        (e.target as HTMLFormElement).reset();
      })
      .catch(async (serverError) => {
        const permissionError = new FirestorePermissionError({
          path: leadsRef.path,
          operation: 'create',
          requestResourceData: data,
        } satisfies SecurityRuleContext);
        errorEmitter.emit('permission-error', permissionError);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="min-h-screen hero-gradient">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6 animate-in fade-in slide-in-from-bottom-3 duration-500">
            <Zap className="w-4 h-4" />
            <span>{t.hero.tagline}</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-headline font-bold text-foreground max-w-5xl mx-auto leading-[1.1] mb-8 animate-in fade-in slide-in-from-bottom-5 duration-700">
            {t.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-in fade-in slide-in-from-bottom-7 duration-1000">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-10 duration-1000">
            <Button size="lg" className="h-12 px-8 text-base rounded-full" asChild>
              <Link href="#audit">{t.hero.ctaPrimary}</Link>
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-base rounded-full" asChild>
              <Link href="#services">{t.hero.ctaSecondary}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Target Audience Section / Packs par type de business */}
      <section className="py-24 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl font-headline font-bold text-foreground mb-4">{t.packs.title}</h2>
            <p className="text-muted-foreground text-lg">{t.packs.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Salon de beauté Card */}
            <Card className="border-none shadow-lg bg-background/80 hover:shadow-xl transition-all hover:-translate-y-1 duration-300">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-2xl bg-pink-500/10 text-pink-500 flex items-center justify-center mb-4">
                  <Scissors className="w-6 h-6" />
                </div>
                <CardTitle className="text-2xl font-headline font-bold">{t.packs.beauty.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {t.packs.beauty.features.map((feat: string, i: number) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-pink-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="pt-4 border-t border-muted/50">
                <Button variant="outline" className="w-full rounded-full border-pink-500/20 text-pink-600 hover:bg-pink-500 hover:text-white" asChild>
                  <Link href="#audit">{t.hero.ctaPrimary}</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Artisans / Rénovation Card */}
            <Card className="border-none shadow-lg bg-background/80 hover:shadow-xl transition-all hover:-translate-y-1 duration-300">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center mb-4">
                  <Hammer className="w-6 h-6" />
                </div>
                <CardTitle className="text-2xl font-headline font-bold">{t.packs.artisans.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {t.packs.artisans.features.map((feat: string, i: number) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="pt-4 border-t border-muted/50">
                <Button variant="outline" className="w-full rounded-full border-amber-500/20 text-amber-600 hover:bg-amber-500 hover:text-white" asChild>
                  <Link href="#audit">{t.hero.ctaPrimary}</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Garages Card */}
            <Card className="border-none shadow-lg bg-background/80 hover:shadow-xl transition-all hover:-translate-y-1 duration-300">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-500 flex items-center justify-center mb-4">
                  <Wrench className="w-6 h-6" />
                </div>
                <CardTitle className="text-2xl font-headline font-bold">{t.packs.garages.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {t.packs.garages.features.map((feat: string, i: number) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="pt-4 border-t border-muted/50">
                <Button variant="outline" className="w-full rounded-full border-blue-500/20 text-blue-600 hover:bg-blue-500 hover:text-white" asChild>
                  <Link href="#audit">{t.hero.ctaPrimary}</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-headline mb-4">{t.services.title}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-6">
              <Card className="group hover:border-accent transition-colors overflow-hidden">
                <CardHeader className="flex flex-row items-start gap-4 space-y-0">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-accent group-hover:text-white transition-colors">
                    <Smartphone className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <CardTitle className="font-headline">{t.services.web.title}</CardTitle>
                    <CardDescription>{t.services.web.desc}</CardDescription>
                  </div>
                </CardHeader>
              </Card>
              <Card className="group hover:border-accent transition-colors overflow-hidden">
                <CardHeader className="flex flex-row items-start gap-4 space-y-0">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-accent group-hover:text-white transition-colors">
                    <Bot className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <CardTitle className="font-headline">{t.services.ai.title}</CardTitle>
                    <CardDescription>{t.services.ai.desc}</CardDescription>
                  </div>
                </CardHeader>
              </Card>
            </div>
            <div className="flex flex-col gap-6">
              <Card className="group hover:border-accent transition-colors overflow-hidden">
                <CardHeader className="flex flex-row items-start gap-4 space-y-0">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-accent group-hover:text-white transition-colors">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <CardTitle className="font-headline">{t.services.automation.title}</CardTitle>
                    <CardDescription>{t.services.automation.desc}</CardDescription>
                  </div>
                </CardHeader>
              </Card>
              <Card className="group hover:border-accent transition-colors overflow-hidden">
                <CardHeader className="flex flex-row items-start gap-4 space-y-0">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-accent group-hover:text-white transition-colors">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <CardTitle className="font-headline">{t.services.audit.title}</CardTitle>
                    <CardDescription>{t.services.audit.desc}</CardDescription>
                  </div>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Before / After & Simple Automation Section */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl font-headline font-bold mb-4 text-white">{t.improvements.title}</h2>
            <p className="text-primary-foreground/75 text-lg">{t.improvements.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Before/After list */}
            <div className="space-y-6">
              {t.improvements.cases.map((c: any, i: number) => (
                <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-4 text-left">
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 flex items-center justify-center rounded-full bg-destructive/20 text-white text-xs shrink-0 mt-0.5">✕</span>
                    <div>
                      <span className="text-xs uppercase font-bold text-destructive-foreground/75 tracking-wider">Avant</span>
                      <p className="text-primary-foreground/90 font-medium">{c.before}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 border-t border-white/5 pt-4">
                    <span className="w-6 h-6 flex items-center justify-center rounded-full bg-accent/20 text-accent text-xs shrink-0 mt-0.5">✓</span>
                    <div>
                      <span className="text-xs uppercase font-bold text-accent tracking-wider">Après avec Pilot AI</span>
                      <p className="text-white font-semibold">{c.after}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Simple Automation Explanation */}
            <Card className="bg-white/10 border-white/20 text-white backdrop-blur shadow-2xl overflow-hidden relative border-none">
              <div className="absolute top-0 right-0 bg-accent text-primary font-headline font-bold text-xs px-3 py-1.5 rounded-bl-xl tracking-wider">COMMENT ÇA MARCHE</div>
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-headline font-bold text-white flex items-center gap-2">
                  <Zap className="w-5 h-5 text-accent animate-pulse" />
                  {t.improvements.automation.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-left">
                <p className="text-white/80 leading-relaxed">
                  {t.improvements.automation.desc}
                </p>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/20 text-accent flex items-center justify-center shrink-0">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm">Zéro jargon. Résultat concret.</h5>
                    <p className="text-xs text-white/60">Vous n'avez rien à configurer. Nous gérons tout de A à Z.</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-accent text-primary hover:bg-accent/90 rounded-full font-bold" asChild>
                  <Link href="#audit">{t.hero.ctaPrimary}</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-headline font-bold mb-6">{t.pricing.title}</h2>
            <div className="p-6 rounded-2xl bg-accent/5 border border-accent/10 mb-8">
              <p className="text-lg md:text-xl font-medium text-foreground mb-4">{t.pricing.subtitle}</p>
              <div className="flex flex-col md:flex-row gap-8 text-left">
                <div>
                  <h4 className="font-bold text-accent mb-2">{t.pricing.whyTitle}</h4>
                  <p className="text-muted-foreground text-sm">{t.pricing.whyDesc}</p>
                </div>
                <div className="md:border-l md:pl-8 flex items-center">
                  <p className="text-muted-foreground text-sm font-medium italic">
                    {t.pricing.footer}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="flex flex-col relative overflow-hidden border-2 border-transparent hover:border-primary/20 transition-all">
              <CardHeader>
                <CardTitle className="font-headline">{t.pricing.starter.title}</CardTitle>
                <CardDescription>{t.pricing.starter.desc}</CardDescription>
                <div className="pt-4">
                  <span className="text-4xl font-bold text-foreground">CHF {t.pricing.starter.price}</span>
                  <span className="text-muted-foreground ml-2 text-sm">+</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3">
                  {t.pricing.starter.features.map((f: string, i: number) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-accent" />
                      {f}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full rounded-full" asChild>
                  <Link href="#audit">{t.pricing.starter.cta}</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="flex flex-col relative overflow-hidden border-2 border-accent shadow-xl scale-105 z-10">
               <div className="absolute top-0 right-0 bg-accent text-white px-3 py-1 text-xs font-bold rounded-bl-lg">POPULAR</div>
              <CardHeader>
                <CardTitle className="font-headline">{t.pricing.business.title}</CardTitle>
                <CardDescription>{t.pricing.business.desc}</CardDescription>
                <div className="pt-4">
                  <span className="text-4xl font-bold text-foreground">CHF {t.pricing.business.price}</span>
                  <span className="text-muted-foreground ml-2 text-sm">+</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3">
                  {t.pricing.business.features.map((f: string, i: number) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-accent" />
                      {f}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full rounded-full bg-accent hover:bg-accent/90" asChild>
                  <Link href="#audit">{t.pricing.business.cta}</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="flex flex-col relative overflow-hidden border-2 border-transparent hover:border-primary/20 transition-all">
              <CardHeader>
                <CardTitle className="font-headline">{t.pricing.premium.title}</CardTitle>
                <CardDescription>{t.pricing.premium.desc}</CardDescription>
                <div className="pt-4">
                  <span className="text-4xl font-bold text-foreground">CHF {t.pricing.premium.price}</span>
                  <span className="text-muted-foreground ml-2 text-sm">+</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3">
                  {t.pricing.premium.features.map((f: string, i: number) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-accent" />
                      {f}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full rounded-full" asChild>
                  <Link href="#audit">{t.pricing.premium.cta}</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
             <Card className="bg-muted/30 border-none">
               <CardHeader className="pb-2">
                 <CardTitle className="text-lg font-headline">{t.pricing.audit.title}</CardTitle>
                 <div className="text-xl font-bold text-accent">Gratuit</div>
               </CardHeader>
               <CardContent>
                 <p className="text-xs text-muted-foreground">{t.pricing.audit.desc}</p>
                 <Button variant="link" className="p-0 h-auto text-accent text-xs mt-2" asChild>
                    <Link href="#audit">Recevoir l'audit <ArrowRight className="w-3 h-3 ml-1"/></Link>
                 </Button>
               </CardContent>
             </Card>
             <Card className="bg-muted/30 border-none">
               <CardHeader className="pb-2">
                 <CardTitle className="text-lg font-headline">{t.pricing.n8n.title}</CardTitle>
                 <div className="text-xl font-bold">CHF {t.pricing.n8n.price}+</div>
               </CardHeader>
               <CardContent>
                 <p className="text-xs text-muted-foreground">{t.pricing.n8n.desc}</p>
                 <Button variant="link" className="p-0 h-auto text-accent text-xs mt-2" asChild>
                    <Link href="#audit">Automatiser mon business <ArrowRight className="w-3 h-3 ml-1"/></Link>
                 </Button>
               </CardContent>
             </Card>
             <Card className="bg-muted/30 border-none">
               <CardHeader className="pb-2">
                 <CardTitle className="text-lg font-headline">{t.pricing.bot.title}</CardTitle>
                 <div className="text-xl font-bold">CHF {t.pricing.bot.price}+</div>
               </CardHeader>
               <CardContent>
                 <p className="text-xs text-muted-foreground">{t.pricing.bot.desc}</p>
                 <Button variant="link" className="p-0 h-auto text-accent text-xs mt-2" asChild>
                    <Link href="#audit">Ajouter un assistant IA <ArrowRight className="w-3 h-3 ml-1"/></Link>
                 </Button>
               </CardContent>
             </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 bg-white/80 backdrop-blur-sm relative border-t border-b border-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl font-headline font-bold text-foreground mb-4">{t.steps.title}</h2>
            <p className="text-muted-foreground text-lg">{t.steps.subtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
            {t.steps.items.map((step: any, i: number) => (
              <div key={i} className="flex flex-col items-center text-center relative group">
                {/* Visual Step number */}
                <div className="w-14 h-14 rounded-full bg-primary/5 text-primary border-2 border-primary/10 group-hover:border-accent group-hover:bg-accent/5 transition-all duration-300 flex items-center justify-center text-xl font-bold font-headline mb-6 shrink-0 relative z-10">
                  {step.num}
                </div>
                
                <h4 className="font-headline font-bold text-lg mb-2 text-foreground">{step.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-[200px]">{step.desc}</p>
                
                {/* Arrow helper for large screens */}
                {i < 4 && (
                  <div className="hidden md:block absolute top-7 left-[calc(50%+28px)] w-[calc(100%-56px)] h-0.5 bg-muted group-hover:bg-accent/20 transition-colors z-0" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Audit Form Section */}
      <section id="audit" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-headline font-bold mb-4">{t.audit.title}</h2>
              <p className="text-muted-foreground text-lg">{t.audit.subtitle}</p>
            </div>
            <Card className="p-8 shadow-2xl border-primary/5">
              <form onSubmit={handleAuditSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">{t.audit.form.name}</label>
                  <Input name="name" required placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">{t.audit.form.business}</label>
                  <Input name="business" placeholder="Mon Petit Café" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">{t.audit.form.link}</label>
                  <Input name="link" placeholder="www.mon-site.ch" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">{t.audit.form.email}</label>
                  <Input name="email" type="email" required placeholder="john@example.com" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-medium">{t.audit.form.phone}</label>
                  <Input name="phone" placeholder="+41 7x xxx xx xx" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-medium">{t.audit.form.message}</label>
                  <Textarea name="message" placeholder="..." className="min-h-[100px]" />
                </div>
                <div className="md:col-span-2 text-center pt-4">
                  <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto px-12 h-14 rounded-full text-lg font-headline">
                    {isSubmitting ? 'Envoi...' : t.audit.form.submit}
                  </Button>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-headline text-center mb-16">Pourquoi travailler avec Pilot AI Studio ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="space-y-4">
              <div className="mx-auto w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="font-headline font-bold">Expertise Suisse Romande</h4>
              <p className="text-muted-foreground text-sm">Une compréhension fine du marché local et des besoins des PME de la région.</p>
            </div>
            <div className="space-y-4">
              <div className="mx-auto w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                <Clock className="w-6 h-6" />
              </div>
              <h4 className="font-headline font-bold">Fait pour gagner du temps</h4>
              <p className="text-muted-foreground text-sm">Nous ne faisons pas de l'IA pour la mode, mais pour réduire vos tâches manuelles.</p>
            </div>
            <div className="space-y-4">
              <div className="mx-auto w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                <Users className="w-6 h-6" />
              </div>
              <h4 className="font-headline font-bold">Simple et transparent</h4>
              <p className="text-muted-foreground text-sm">Pas de jargon technique complexe. Des résultats clairs et mesurables.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
                <li>WhatsApp: <a href="https://wa.me/41796186852" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">+41 79 618 68 52</a></li>
                <li>Telegram: <a href="https://t.me/PilotAiStudio" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">@PilotAiStudio</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Pilot AI Studio. Built for Swiss local business.
          </div>
        </div>
      </footer>

      <Chatbot />
    </div>
  );
}
