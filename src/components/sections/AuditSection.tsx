'use client';

import { content } from '@/lib/i18n-content';
import { AuditFormClient } from './AuditFormClient';
import { motion } from 'framer-motion';

type Props = {
  t: typeof content.fr;
};

export function AuditSection({ t }: Props) {
  return (
    <section id="audit" className="py-24 relative overflow-hidden text-foreground">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-headline font-bold mb-4">{t.audit.title}</h2>
            <p className="text-muted-foreground text-lg">{t.audit.subtitle}</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-8 shadow-2xl glass-card rounded-3xl"
          >
            <AuditFormClient t={t} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
