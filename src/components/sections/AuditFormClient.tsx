"use client"

import { useState } from 'react';
import { useFirestore } from '@/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { useToast } from '@/hooks/use-toast';
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError, type SecurityRuleContext } from '@/firebase/errors';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { content } from '@/lib/i18n-content';

type Props = {
  t: typeof content.fr;
};

export function AuditFormClient({ t }: Props) {
  const db = useFirestore();
  const { toast } = useToast();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAuditSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      businessName: formData.get('business') as string,
      website: formData.get('link') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      message: formData.get('message') as string,
    };

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to submit');
      }

      toast({
        title: t.audit.form.successTitle,
        description: t.audit.form.successDesc,
      });
      (e.target as HTMLFormElement).reset();
      router.push('/success');
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem submitting your request. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
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
        <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto px-12 h-auto min-h-14 py-3 rounded-full text-lg font-headline whitespace-normal text-center">
          {isSubmitting ? t.audit.form.sending : t.audit.form.submit}
        </Button>
      </div>
    </form>
  );
}
