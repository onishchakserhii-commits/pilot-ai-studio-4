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
      title: 'Sites web rapides, IA et automatisations simples pour les petites entreprises en Suisse romande.',
      subtitle: 'Nous aidons les restaurants, salons, artisans, garages et services locaux à recevoir plus de demandes, simplifier les réservations et automatiser les tâches répétitives — sans complexité technique.',
      ctaPrimary: 'Audit gratuit de votre présence en ligne',
      ctaSecondary: 'Voir les solutions',
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
    improvements: {
      title: "Exemples de ce que nous améliorons",
      subtitle: "Des résultats concrets pour simplifier votre quotidien et attirer des clients.",
      cases: [
        { before: "Pas de bouton de réservation visible", after: "Bouton de réservation direct et visible sur tous les écrans" },
        { before: "Les clients écrivent partout (WhatsApp, Instagram, appels)", after: "Toutes les demandes centralisées automatiquement (CRM / Google Sheet / Email)" },
        { before: "Pas de statistiques de visite (Google Analytics)", after: "Tableau de bord clair avec les sources de vos appels et messages" }
      ],
      automation: {
        title: "Automatisation simple pour gagner du temps",
        desc: "Quand un client remplit le formulaire, vous recevez automatiquement une notification WhatsApp ou email. La demande peut aussi être ajoutée dans Google Sheets / CRM, avec un rappel pour ne pas oublier de répondre."
      }
    },
    packs: {
      title: "Solutions prêtes pour votre activité",
      subtitle: "Des configurations adaptées aux besoins réels des PME locales.",
      beauty: {
        title: "Pour salons de beauté",
        features: ["Site mobile rapide", "Galerie de réalisations", "Liste des tarifs", "Bouton de réservation en ligne", "Rappels de rendez-vous WhatsApp", "Demande d'avis Google automatique"]
      },
      artisans: {
        title: "Pour artisans / rénovation",
        features: ["Site vitrine professionnel", "Galerie de projets avant/après", "Formulaire de devis intelligent", "Notification automatique de demande", "Suivi et relance des prospects"]
      },
      garages: {
        title: "Pour garages & ateliers",
        features: ["Prise de rendez-vous en ligne", "Formulaire de signalement de panne", "Rappel automatique des révisions", "Fiche client simple intégrée", "Boutons Google Maps & Téléphone direct"]
      }
    },
    steps: {
      title: "Comment ça se passe ?",
      subtitle: "Un processus simple et rapide, de l'audit au lancement.",
      items: [
        { num: "1", title: "Audit gratuit", desc: "Nous analysons votre site actuel, votre fiche Google Business Profile et votre parcours sur mobile." },
        { num: "2", title: "Proposition claire", desc: "Vous recevez une recommandation concrète et simple, sans jargon technique." },
        { num: "3", title: "Création & Amélioration", desc: "Nous construisons votre site, vos formulaires et configurons les automatisations indispensables." },
        { num: "4", title: "Lancement", desc: "Votre nouveau système prêt à l'emploi est mis en ligne. Tout fonctionne directement." },
        { num: "5", title: "Suivi & Ajustement", desc: "Nous restons à vos côtés pour effectuer les ajustements selon vos premiers retours." }
      ]
    },
    pricing: {
      title: 'Offres & Tarifs',
      subtitle: 'Tarifs de lancement pour les premières collaborations locales en Suisse romande.',
      whyTitle: 'Pourquoi ?',
      whyDesc: 'Nos offres sont pensées pour les petites entreprises qui veulent commencer simplement, sans budget excessif.',
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
      title: 'Fast websites, AI and simple automations for small businesses in French-speaking Switzerland.',
      subtitle: 'We help restaurants, salons, artisans, garages and local services get more leads, simplify bookings, and automate repetitive tasks — without technical complexity.',
      ctaPrimary: 'Free audit of your online presence',
      ctaSecondary: 'View solutions',
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
    improvements: {
      title: "Examples of what we improve",
      subtitle: "Concrete results to simplify your daily work and attract clients.",
      cases: [
        { before: "No booking button visible", after: "Direct and visible booking button on all screens" },
        { before: "Clients message everywhere (WhatsApp, Instagram, calls)", after: "All inquiries automatically centralized (CRM / Google Sheets / Email)" },
        { before: "No website statistics (Google Analytics)", after: "Clear dashboard showing where your calls and inquiries come from" }
      ],
      automation: {
        title: "Simple automation to save time",
        desc: "When a customer fills out the form, you automatically receive a WhatsApp or email notification. The request can also be added to Google Sheets / CRM, with a reminder so you never forget to reply."
      }
    },
    packs: {
      title: "Tailored packs for your business",
      subtitle: "Configurations adapted to the real needs of local businesses.",
      beauty: {
        title: "For beauty salons",
        features: ["Fast mobile site", "Photo gallery", "Price list", "Online booking button", "WhatsApp appointment reminders", "Automatic Google review requests"]
      },
      artisans: {
        title: "For artisans & renovation",
        features: ["Professional vitrine site", "Before/After project gallery", "Smart quote request form", "Instant notification of requests", "Lead tracking and follow-up"]
      },
      garages: {
        title: "For garages & workshops",
        features: ["Online appointment scheduling", "Car issue reporting form", "Automatic service reminders", "Simple built-in customer card", "Direct Google Maps & Phone buttons"]
      }
    },
    steps: {
      title: "How does it work?",
      subtitle: "A simple and quick process, from audit to launch.",
      items: [
        { num: "1", title: "Free Audit", desc: "We analyze your current website, Google Business Profile, and mobile user experience." },
        { num: "2", title: "Simple Proposal", desc: "You receive a clear, jargon-free recommendation." },
        { num: "3", title: "Creation & Improvement", desc: "We build the site, create the forms, and configure your automated workflows." },
        { num: "4", title: "Launch", desc: "Your ready-to-use system goes live. Everything works out-of-the-box." },
        { num: "5", title: "Follow-up", desc: "We stay with you to adjust the system based on initial feedback." }
      ]
    },
    pricing: {
      title: 'Pricing & Offers',
      subtitle: 'Launch pricing for our first local partnerships in French-speaking Switzerland.',
      whyTitle: 'Why?',
      whyDesc: 'Our offers are designed for small businesses that want to start simply, without an excessive budget.',
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
      title: 'Швидкі сайти, AI та проста автоматизація для малого бізнесу у франкомовній Швейцарії.',
      subtitle: 'Ми допомагаємо ресторанам, салонам, майстрам, автосервісам та локальним службам отримувати більше заявок, спрощувати бронювання та автоматизувати рутину — без зайвої технічної складності.',
      ctaPrimary: 'Безкоштовний аудит вашої присутності в мережі',
      ctaSecondary: 'Дивитися рішення',
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
    improvements: {
      title: "Приклади того, що ми покращуємо",
      subtitle: "Конкретні результати для спрощення вашої щоденної роботи та залучення клієнтів.",
      cases: [
        { before: "Немає видимої кнопки бронювання", after: "Пряма та помітна кнопка бронювання на всіх пристроях" },
        { before: "Клієнти пишуть всюди (WhatsApp, Instagram, телефонують)", after: "Всі заявки автоматично збираються в одному місці (CRM / Google Sheets / Email)" },
        { before: "Немає статистики відвідувань сайту (Google Analytics)", after: "Проста та зрозуміла аналітика джерел дзвінків та звернень" }
      ],
      automation: {
        title: "Проста автоматизація для економії часу",
        desc: "Коли клієнт заповнює форму, ви миттєво отримуєте сповіщення у WhatsApp або на email. Заявка автоматично додається у Google Sheets / CRM із нагадуванням відповісти."
      }
    },
    packs: {
      title: "Готові пакети під ваш тип бізнесу",
      subtitle: "Рішення, адаптовані під реальні потреби локального бізнесу.",
      beauty: {
        title: "Для салонів краси",
        features: ["Швидкий мобільний сайт", "Галерея робіт", "Прайс-лист", "Кнопка онлайн-запису", "Нагадування про візит у WhatsApp", "Автоматичний збір відгуків у Google"]
      },
      artisans: {
        title: "Для майстрів та ремонту",
        features: ["Професійний сайт-візитка", "Галерея робіт До / Після", "Розумна форма розрахунку вартості", "Автоматичні сповіщення про нові заявки", "Ведення та нагадування для лідів"]
      },
      garages: {
        title: "Для автосервісів / СТО",
        features: ["Онлайн-запис на обслуговування", "Форма опису проблеми з авто", "Автоматичні нагадування про ТО", "Проста база клієнтів", "Швидкий виклик карти Google Maps та телефону"]
      }
    },
    steps: {
      title: "Як проходить робота?",
      subtitle: "Простий та зрозумілый процес від аудиту до запуску.",
      items: [
        { num: "1", title: "Безкоштовний аудит", desc: "Аналізуємо ваш поточний сайт, профіль Google Business та зручність для мобільних пристроїв." },
        { num: "2", title: "Проста пропозиція", desc: "Ви отримуєте чіткі та зрозумілі рекомендації без складної технічної термінології." },
        { num: "3", title: "Створення та покращення", desc: "Ми розробляємо сайт, створюємо форми та налаштовуємо необхідні автоматизації." },
        { num: "4", title: "Запуск", desc: "Ви отримуєте повністю готову до роботи систему, яка працює одразу." },
        { num: "5", title: "Підтримка", desc: "Ми допомагаємо налаштувати систему за результатами перших відгуків клієнтів." }
      ]
    },
    pricing: {
      title: 'Ціни та пропозиції',
      subtitle: 'Стартові ціни для перших локальних клієнтів у Suisse romande.',
      whyTitle: 'Чому?',
      whyDesc: 'Наші пропозиції створені для малого бізнесу, який хоче отримати простий старт без надмірних витрат.',
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
