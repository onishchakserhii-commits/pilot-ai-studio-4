import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyD95VjMbLb-3ff9dfq5pDRKp26kI_Oa3hY",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "web-pilot-b89f1.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "web-pilot-b89f1",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "web-pilot-b89f1.firebasestorage.app",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "562055053881",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:562055053881:web:647aa8285224aba08d43e8",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const posts = [
  {
    title: "Comment l'IA peut transformer votre entreprise locale en Suisse romande",
    slug: "comment-ia-transformer-entreprise-suisse-romande",
    excerpt: "Découvrez comment les petites entreprises de Montreux, Vevey et Lausanne utilisent l'intelligence artificielle pour gagner du temps et augmenter leurs ventes.",
    content: "L'intelligence artificielle n'est plus réservée aux géants de la technologie. Aujourd'hui, les restaurants, cliniques privées, et agences immobilières de la Riviera suisse adoptent des solutions IA pour se démarquer.\n\n### 1. Automatisation du service client\nLes chatbots IA peuvent répondre aux questions fréquentes 24/7, permettant à votre équipe de se concentrer sur les tâches à forte valeur ajoutée.\n\n### 2. Réservations intelligentes\nFini les appels manqués pendant les heures de pointe. Un assistant virtuel peut prendre des rendez-vous et mettre à jour votre calendrier automatiquement.\n\n### 3. Marketing personnalisé\nL'IA analyse les données de vos clients pour proposer des offres sur mesure, augmentant ainsi la fidélité.\n\nChez Aivello, nous concevons des solutions IA accessibles et adaptées au marché suisse. Contactez-nous pour un audit gratuit de votre entreprise.",
    metaDescription: "Guide pratique sur l'utilisation de l'IA pour les PME en Suisse romande.",
    category: "Automatisation",
    tags: ["IA", "PME", "Suisse Romande", "Innovation"],
    language: "fr"
  },
  {
    title: "Штучний інтелект для малого бізнесу в Швейцарії: з чого почати?",
    slug: "ai-for-small-business-switzerland-where-to-start",
    excerpt: "Практичний посібник для підприємців: як впровадити ШІ у свої бізнес-процеси без великих витрат та технічних знань.",
    content: "Багато підприємців у Швейцарії чули про ChatGPT, але не знають, як застосувати ШІ для власного бізнесу. Ось три перші кроки для успішного старту:\n\n### 1. Визначте рутинні процеси\nЩо забирає найбільше часу? Відповіді на email, запис клієнтів, обробка накладних? Це ідеальні кандидати для автоматизації.\n\n### 2. Впровадьте розумний чат-бот на сайт\nБільшість клієнтів шукають послуги в неробочий час. Чат-бот на базі ШІ може консультувати їх та збирати ліди 24/7.\n\n### 3. Використовуйте ШІ для контенту\nПишіть пости для соцмереж або статті для блогу втричі швидше за допомогою генеративного ШІ, налаштованого на голос вашого бренду.\n\nСтудія Aivello допоможе вам безболісно інтегрувати ці рішення. Ми говоримо вашою мовою та розуміємо специфіку місцевого ринку.",
    metaDescription: "Як малому бізнесу в Швейцарії почати використовувати штучний інтелект.",
    category: "Інновації",
    tags: ["ШІ", "Малий бізнес", "Автоматизація", "Швейцарія"],
    language: "ua"
  },
  {
    title: "5 façons d'automatiser avec n8n pour les PME",
    slug: "5-facons-automatiser-n8n-pme",
    excerpt: "Pourquoi n8n est l'alternative parfaite à Zapier pour les entreprises suisses soucieuses de la confidentialité de leurs données.",
    content: "L'automatisation est la clé de la croissance, mais la sécurité des données est primordiale en Suisse (LPD). Voici comment n8n, une solution hébergeable localement, surpasse les autres.\n\n### 1. Synchronisation CRM sécurisée\nConnectez votre site web à votre CRM sans que les données ne transitent par des serveurs tiers opaques.\n\n### 2. Facturation automatisée\nLorsqu'un projet est marqué comme terminé, n8n peut générer et envoyer automatiquement une facture via votre logiciel comptable suisse.\n\n### 3. Traitement des leads\nChaque nouveau prospect reçoit un email personnalisé généré par IA, tandis que votre équipe est notifiée sur Slack ou Microsoft Teams.\n\nChez Aivello, nous mettons en place des flux de travail n8n sur mesure pour optimiser votre rentabilité.",
    metaDescription: "Découvrez les avantages de n8n pour l'automatisation des PME en Suisse.",
    category: "Tutoriels",
    tags: ["n8n", "Automatisation", "Data Privacy", "PME"],
    language: "fr"
  }
];

async function run() {
  for (const post of posts) {
    try {
      const docRef = await addDoc(collection(db, 'blogPosts'), {
        ...post,
        status: 'draft',
        author: 'AI Assistant',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      });
      console.log(`Created: ${post.title} with ID: ${docRef.id}`);
    } catch (e) {
      console.error('Error:', e);
    }
  }
  process.exit(0);
}
run();
