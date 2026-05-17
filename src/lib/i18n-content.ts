
export type Language = 'fr' | 'en' | 'ua';

export const content = {
  fr: {
    nav: {
      home: 'Accueil',
      services: 'Services',
      audit: 'Audit Gratuit',
      process: 'Processus',
      pricing: 'Tarifs',
      contact: 'Contact',
      blog: 'Blog',
    },
    blog: {
      title: 'Blog & Ressources',
      subtitle: 'Conseils, automatisations et stratégies pour booster votre business local.',
      readMore: 'Lire l\'article',
      backToList: 'Retour aux articles',
      ctaTitle: 'Vous voulez améliorer votre présence en ligne ?',
      ctaButton: 'Demander un audit gratuit',
      noPosts: 'Aucun article trouvé.',
    },
    hero: {
      title: 'Des sites rapides et des automatisations IA pour les entreprises locales en Suisse',
      subtitle: 'Nous aidons les restaurants, salons, artisans, garages et services locaux à obtenir plus de demandes, simplifier les réservations et gagner du temps grâce au web, à l’IA et à n8n.',
      ctaPrimary: 'Demander un audit gratuit',
      ctaSecondary: 'Voir les services',
      tagline: 'Plus de demandes. Moins de routine.',
    },
    // ... remaining existing fr content
    categories: {
      title: 'Pour qui ?',
      restaurants: { title: 'Restaurants & Cafés', problem: 'Réservations manuelles et appels incessants.', solution: 'Site + Réservation en ligne + Confirmation auto.' },
      salons: { title: 'Salons de Beauté', problem: 'Clients écrivent partout, planning papier.', solution: 'Site + Rappels WhatsApp + CRM.' },
      artisans: { title: 'Artisans & Rénovation', problem: 'Pas de visibilité, devis perdus.', solution: 'Site pro + Galerie + Formulaire intelligent.' },
      garages: { title: 'Garages / СТО', problem: 'Prise de RDV chaotique au téléphone.', solution: 'Site mobile + Agenda + Suivi client.' },
    },
    services: {
      title: 'Nos Services',
      web: { title: 'Création Site Web Rapide', desc: 'Sites modernes, mobile-first, optimisés pour la conversion.' },
      ai: { title: 'Chatbot IA', desc: 'Assistant 24/7 qui répond aux questions et capture des leads.' },
      automation: { title: 'Automatisation n8n', desc: 'Connectez vos outils pour éliminer les tâches répétitives.' },
      audit: { title: 'Audit Local Business', desc: 'Analyse complète de votre présence en ligne pour trouver des gains rapides.' },
    },
    pricing: {
      title: 'Tarifs de lancement',
      subtitle: 'Nos prix sont actuellement environ 45% plus accessibles que les tarifs habituels du marché suisse.',
      whyTitle: 'Pourquoi ?',
      whyDesc: 'Parce que nous voulons construire des collaborations locales solides en Suisse romande et aider les petites entreprises à améliorer leur présence en ligne sans budget excessif.',
      footer: 'Chaque projet est adapté à votre business : site web, formulaire, WhatsApp, Google, IA, automatisation ou CRM.',
      starter: {
        title: 'Starter Website',
        price: '490',
        desc: 'Pour une première présence professionnelle en ligne.',
        features: ['Site one-page moderne', 'Version mobile', 'Bouton appel/WhatsApp', 'Google Maps intégré', 'Formulaire de contact', 'SEO de base'],
        cta: 'Demander Starter'
      },
      business: {
        title: 'Business Website',
        price: '890',
        desc: 'Pour une entreprise locale qui veut recevoir plus de demandes.',
        features: ['Site 3 à 5 pages', 'Design professionnel', 'Optimisation conversion', 'Google Analytics', 'Structure SEO locale', 'Google Business Profile'],
        cta: 'Demander Business'
      },
      premium: {
        title: 'AI Premium',
        price: '1’490',
        desc: 'Pour une entreprise qui veut un site moderne avec IA et automatisation.',
        features: ['Site 5 à 8 pages', 'Multilingue', 'Chatbot IA intégré', 'Automatisation n8n', 'Notifications WhatsApp', 'Support après lancement'],
        cta: 'Demander AI Premium'
      },
      audit: { title: 'Local Business Audit', price: '0', desc: 'Analyse rapide de votre présence en ligne.' },
      n8n: { title: 'Automatisation n8n', price: '390', desc: 'Pour automatiser les tâches répétitives.' },
      bot: { title: 'AI Chatbot', price: '590', desc: 'Un assistant IA simple pour vos clients.' }
    },
    audit: {
      title: 'Audit gratuit de votre présence en ligne',
      subtitle: 'Nous analysons votre site, votre fiche Google et le parcours client mobile pour trouver des améliorations simples.',
      form: {
        name: 'Nom',
        business: 'Nom de l\'entreprise',
        link: 'Lien Site / Google Maps',
        email: 'Email',
        phone: 'WhatsApp / Téléphone',
        message: 'Message (Optionnel)',
        submit: 'Recevoir mon audit gratuit',
      }
    },
    footer: {
      desc: 'Pilot AI Studio aide les petites entreprises locales à utiliser le web, l’intelligence artificielle et l’automatisation sans complexité inutile.',
    }
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      audit: 'Free Audit',
      process: 'Process',
      pricing: 'Pricing',
      contact: 'Contact',
      blog: 'Blog',
    },
    blog: {
      title: 'Blog & Resources',
      subtitle: 'Tips, automations, and strategies to boost your local business.',
      readMore: 'Read article',
      backToList: 'Back to articles',
      ctaTitle: 'Want to improve your online presence?',
      ctaButton: 'Request a free audit',
      noPosts: 'No articles found.',
    },
    hero: {
      title: 'Fast Websites and AI Automation for Local Businesses in Switzerland',
      subtitle: 'We help restaurants, salons, artisans, and local services get more leads, simplify bookings, and save time with Web, AI, and n8n.',
      ctaPrimary: 'Request a Free Audit',
      ctaSecondary: 'View Services',
      tagline: 'More leads. Less routine.',
    },
    // ... remaining existing en content
    categories: {
      title: 'Who is this for?',
      restaurants: { title: 'Restaurants & Cafés', problem: 'Manual bookings and constant calls.', solution: 'Site + Online Booking + Auto confirmation.' },
      salons: { title: 'Beauty Salons', problem: 'Clients message everywhere, paper schedules.', solution: 'Site + WhatsApp reminders + CRM.' },
      artisans: { title: 'Artisans & Renovation', problem: 'No visibility, lost quotes.', solution: 'Pro site + Gallery + Smart form.' },
      garages: { title: 'Garages / Repair', problem: 'Chaotic phone bookings.', solution: 'Mobile site + Calendar + Client tracking.' },
    },
    services: {
      title: 'Our Services',
      web: { title: 'Fast Website Creation', desc: 'Modern, mobile-first websites optimized for conversion.' },
      ai: { title: 'AI Chatbot', desc: '24/7 assistant answering questions and capturing leads.' },
      automation: { title: 'n8n Automation', desc: 'Connect your tools to eliminate repetitive tasks.' },
      audit: { title: 'Local Business Audit', desc: 'Complete online presence analysis for quick wins.' },
    },
    pricing: {
      title: 'Launch Pricing',
      subtitle: 'Our prices are currently about 45% more accessible than usual Swiss market rates.',
      whyTitle: 'Why?',
      whyDesc: 'Because we want to build strong local partnerships in Swiss Romande and help small businesses improve their online presence without excessive budgets.',
      footer: 'Every project is tailored to your business: website, forms, WhatsApp, Google, AI, automation, or CRM.',
      starter: {
        title: 'Starter Website',
        price: '490',
        desc: 'For a first professional online presence.',
        features: ['Modern one-page site', 'Mobile version', 'Call/WhatsApp buttons', 'Google Maps integration', 'Contact form', 'Basic SEO'],
        cta: 'Request Starter'
      },
      business: {
        title: 'Business Website',
        price: '890',
        desc: 'For local businesses wanting more inquiries.',
        features: ['3 to 5 pages site', 'Professional design', 'Conversion optimized', 'Google Analytics', 'Local SEO structure', 'Google Business Profile'],
        cta: 'Request Business'
      },
      premium: {
        title: 'AI Premium',
        price: '1’490',
        desc: 'For businesses wanting a modern site with AI and automation.',
        features: ['5 to 8 pages site', 'Multi-language support', 'Integrated AI Chatbot', 'n8n Automation', 'WhatsApp notifications', 'Post-launch support'],
        cta: 'Request AI Premium'
      },
      audit: { title: 'Local Business Audit', price: '0', desc: 'Quick analysis of your online presence.' },
      n8n: { title: 'n8n Automation', price: '390', desc: 'To automate repetitive tasks.' },
      bot: { title: 'AI Chatbot', price: '590', desc: 'A simple AI assistant for your clients.' }
    },
    audit: {
      title: 'Free Online Presence Audit',
      subtitle: 'We analyze your site, Google profile, and mobile journey to find simple improvements.',
      form: {
        name: 'Name',
        business: 'Business Name',
        link: 'Site / Google Maps Link',
        email: 'Email',
        phone: 'WhatsApp / Phone',
        message: 'Message (Optional)',
        submit: 'Get My Free Audit',
      }
    },
    footer: {
      desc: 'Pilot AI Studio helps local small businesses use web, AI, and automation without unnecessary complexity.',
    }
  },
  ua: {
    nav: {
      home: 'Головна',
      services: 'Послуги',
      audit: 'Безкоштовний Аудит',
      process: 'Процес',
      pricing: 'Ціни',
      contact: 'Контакти',
      blog: 'Блог',
    },
    blog: {
      title: 'Блог та Ресурси',
      subtitle: 'Поради, автоматизації та стратегії для вашого бізнесу.',
      readMore: 'Читати далі',
      backToList: 'Назад до статей',
      ctaTitle: 'Хочете покращити свою онлайн-присутність?',
      ctaButton: 'Замовити безкоштовний аудит',
      noPosts: 'Статей не знайдено.',
    },
    hero: {
      title: 'Швидкі сайти та AI-автоматизація для малого бізнесу у Швейцарії',
      subtitle: 'Ми допомагаємо ресторанам, салонам, майстрам і локальному бізнесу отримувати більше заявок, спрощувати запис клієнтів і економити час.',
      ctaPrimary: 'Замовити безкоштовний аудит',
      ctaSecondary: 'Переглянути послуги',
      tagline: 'Більше заявок. Менше рутини.',
    },
    // ... remaining existing ua content
    categories: {
      title: 'Для кого це?',
      restaurants: { title: 'Ресторани та Кафе', problem: 'Ручний запис та постійні дзвінки.', solution: 'Сайт + Онлайн бронювання + Автовідповідь.' },
      salons: { title: 'Салони Краси', problem: 'Клієнти пишуть всюди, паперовий запис.', solution: 'Сайт + WhatsApp нагадування + CRM.' },
      artisans: { title: 'Майстри та Ремонт', problem: 'Відсутність у пошуку, втрачені замовлення.', solution: 'Професійний сайт + Галерея + Форма.' },
      garages: { title: 'Garages / СТО', problem: 'Хаотичні дзвінки для запису.', solution: 'Мобільний сайт + Календар + База клієнтів.' },
    },
    services: {
      title: 'Наші Послуги',
      web: { title: 'Швидке Створення Сайту', desc: 'Сучасні, адаптовані під мобільні пристрої сайти.' },
      ai: { title: 'AI-Чатбот', desc: 'Асистент 24/7, що відповідає клієнтам та збирає ліди.' },
      automation: { title: 'Автоматизація n8n', desc: 'З\'єднайте ваші інструменти, щоб забути про рутину.' },
      audit: { title: 'Аудит Локального Бізнесу', desc: 'Повний аналіз вашої присутності в мережі.' },
    },
    pricing: {
      title: 'Стартові ціни',
      subtitle: 'Наші ціни зараз приблизно на 45% доступніші за стандартні ціни швейцарського ринку.',
      whyTitle: 'Чому?',
      whyDesc: 'Тому що ми хочемо будувати сильні локальні кейси у Suisse romande і допомагати малому бізнесу покращувати онлайн-присутність без надмірного бюджету.',
      footer: 'Кожен проєкт адаптується під ваш бізнес: сайт, форма заявки, WhatsApp, Google, AI, автоматизація або CRM.',
      starter: {
        title: 'Starter Website',
        price: '490',
        desc: 'Для бізнесу, якому потрібен простий професійний сайт.',
        features: ['Односторінковий сайт', 'Мобільна версія', 'Кнопки дзвінка/WhatsApp', 'Google Maps інтеграція', 'Форма заявки', 'Базове SEO'],
        cta: 'Замовити Starter'
      },
      business: {
        title: 'Business Website',
        price: '890',
        desc: 'Для локального бізнесу, який хоче більше заявок.',
        features: ['Сайт 3–5 сторінок', 'Професійний дизайн', 'Оптимізація конверсії', 'Google Analytics', 'Локальна SEO-структура', 'Google Business Profile'],
        cta: 'Замовити Business'
      },
      premium: {
        title: 'AI Premium',
        price: '1’490',
        desc: 'Для бізнесу, якому потрібен сайт + AI + автоматизація.',
        features: ['Сайт 5–8 сторінок', 'Мультимовність', 'Вбудований AI-чатбот', 'Автоматизація n8n', 'WhatsApp сповіщення', 'Підтримка після запуску'],
        cta: 'Замовити AI Premium'
      },
      audit: { title: 'Local Business Audit', price: '0', desc: 'Швидкий аналіз вашої присутності онлайн.' },
      n8n: { title: 'n8n Automation', price: '390', desc: 'Автоматизація рутинних завдань.' },
      bot: { title: 'AI Chatbot', price: '590', desc: 'AI-асистент для вашого бізнесу.' }
    },
    audit: {
      title: 'Безкоштовний аудит вашої присутності онлайн',
      subtitle: 'Ми аналізуємо ваш сайт, профіль Google та шлях клієнта з мобільного.',
      form: {
        name: 'Ім\'я',
        business: 'Назва бізнесу',
        link: 'Сайт / Google Maps',
        email: 'Email',
        phone: 'WhatsApp / Телефон',
        message: 'Повідомлення (Опціонально)',
        submit: 'Отримати аудит безкоштовно',
      }
    },
    footer: {
      desc: 'Pilot AI Studio допомагає малому бізнесу використовувати веб-технології, AI та автоматизацію без зайвої складності.',
    }
  }
};
