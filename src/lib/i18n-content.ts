export type Language = 'fr' | 'en' | 'ua' | 'it' | 'de';

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
        { before: "Les clients écrivent sur WhatsApp, Insta, SMS. 2h/jour perdues à fixer des RDV manuellement.", after: "Un lien unique synchronisé avec Google Agenda. Confirmation & rappels WhatsApp 100% automatisés." },
        { before: "Appels manqués pendant votre service ou le soir. Les prospects partent chez vos concurrents.", after: "Assistant IA 24/7 qui répond aux questions fréquentes (tarifs, horaires) et capture les coordonnées." },
        { before: "Site web lent (6+ sec sur mobile) et fiche Google Maps invisible dans votre région.", after: "Site Next.js ultra-rapide (<1 sec) et fiche Google Business optimisée pour générer des appels directs." },
        { before: "Demandes de devis perdues dans les e-mails. Lenteur à répondre et relances clients oubliées.", after: "Formulaire intelligent connecté à votre CRM/Google Sheets. Alertes immédiates et relances automatiques." }
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
        sending: 'Envoi...',
        successTitle: 'Merci !',
        successDesc: "Votre demande d'audit a été bien reçue. Nous vous contacterons bientôt.",
      }
    },
    footer: {
      desc: 'Pilot AI Studio aide les petites entreprises locales à utiliser le web, l’intelligence artificielle et l’automatisation sans complexité inutile.',
    },
    chatbot: {
      greeting: 'Bonjour ! Je suis l\'assistant Pilot AI. Comment puis-je aider votre business aujourd\'hui ?',
      ctaAudit: 'Recevoir mon audit gratuit',
      ctaContact: 'Laisser mes coordonnées',
      error: 'Désolé, une erreur est survenue.',
      placeholder: 'Votre question...',
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
        { before: "Clients message on WhatsApp, Insta, SMS. 2 hours/day wasted coordinating appointments manually.", after: "A single booking link synced with Google Calendar. 100% automated confirmations & WhatsApp reminders." },
        { before: "Missed calls during busy hours or evenings. Potential clients go to competitors who reply faster.", after: "24/7 AI Assistant answering common questions (prices, hours) instantly and capturing lead details." },
        { before: "Slow website (6+ sec load on mobile) and invisible Google Maps profile in local searches.", after: "Ultra-fast Next.js site (<1 sec load) and optimized Google Profile driving direct calls." },
        { before: "Quote requests lost in email inbox. Slow response times and forgotten customer follow-ups.", after: "Smart forms connected to your CRM/Google Sheets. Instant notifications and automated follow-ups." }
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
        sending: 'Sending...',
        successTitle: 'Thank you!',
        successDesc: 'Your audit request has been received. We will contact you soon.',
      }
    },
    footer: {
      desc: 'Pilot AI Studio helps local small businesses use web, AI, and automation without unnecessary complexity.',
    },
    chatbot: {
      greeting: 'Hello! I am the Pilot AI assistant. How can I help your business today?',
      ctaAudit: 'Request my free audit',
      ctaContact: 'Leave my contact info',
      error: 'Sorry, an error occurred.',
      placeholder: 'Your question...',
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
        { before: "Клієнти пишуть у WhatsApp, Insta, SMS. Ви витрачаєте 2 години на день на ручний запис.", after: "Єдине посилання для запису, інтегроване з Google календарем. Автоматичні нагадування у WhatsApp." },
        { before: "Пропущені дзвінки під час завантаженості чи ввечері. Клієнти йдуть до тих, хто відповідає швидше.", after: "ШІ-асистент 24/7, який миттєво відповідає на часті запитання (ціни, графік) та збирає контакти." },
        { before: "Повільний сайт (6+ секунд на мобільному) та відсутність вашої компанії на картах Google.", after: "Ультрашвидкий сайт на Next.js (завантаження <1 сек) та оптимізований профіль Google Maps." },
        { before: "Запити на послуги губляться в пошті. Довгі відповіді та відсутність повторних нагадувань.", after: "Розумні форми, інтегровані з CRM/Google Sheets. Миттєві сповіщення та авто-нагадування клієнтам." }
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
        sending: 'Надсилання...',
        successTitle: 'Дякуємо!',
        successDesc: 'Ваш запит на аудит успішно отримано. Ми зв’яжемося з вами найближчим часом.',
      }
    },
    footer: {
      desc: 'Pilot AI Studio допомагає малому бізнесу використовувати веб-технології, AI та автоматизацію без зайвої складності.',
    },
    chatbot: {
      greeting: 'Вітаю! Я асистент Pilot AI. Як я можу допомогти вашому бізнесу сьогодні?',
      ctaAudit: 'Отримати безкоштовний аудит',
      ctaContact: 'Залишити контактні дані',
      error: 'Вибачте, виникла помилка.',
      placeholder: 'Ваше запитання...',
    }
  },
  it: {
    nav: {
      home: 'Home',
      services: 'Servizi',
      audit: 'Audit Gratuito',
      process: 'Processo',
      pricing: 'Prezzi',
      contact: 'Contatti',
      blog: 'Blog',
    },
    blog: {
      title: 'Blog & Risorse',
      subtitle: 'Consigli, automazioni e strategie per far crescere la tua attività locale.',
      readMore: 'Leggi l\'articolo',
      backToList: 'Torna agli articoli',
      ctaTitle: 'Vuoi migliorare la tua presenza online?',
      ctaButton: 'Richiedi un audit gratuito',
      noPosts: 'Nessun articolo trovato.',
    },
    hero: {
      title: 'Siti web veloci, IA e automazioni semplici per le piccole imprese nella Svizzera francofona.',
      subtitle: 'Aiutiamo ristoranti, saloni, artigiani, officine e servizi locali a ricevere più richieste, semplificare le prenotazioni e automatizzare le attività ripetitive — senza complessità tecnica.',
      ctaPrimary: 'Audit gratuito della tua presenza online',
      ctaSecondary: 'Scopri le soluzioni',
      tagline: 'Più richieste. Meno routine.',
    },
    categories: {
      title: 'Per chi è?',
      restaurants: { title: 'Ristoranti & Caffè', problem: 'Prenotazioni manuali e telefonate continue.', solution: 'Sito + Prenotazione online + Conferma automatica.' },
      salons: { title: 'Saloni di Bellezza', problem: 'I clienti scrivono ovunque, agenda cartacea.', solution: 'Sito + Promemoria WhatsApp + CRM.' },
      artisans: { title: 'Artigiani & Ristrutturazioni', problem: 'Nessuna visibilità, preventivi persi.', solution: 'Sito professionale + Galleria + Modulo intelligente.' },
      garages: { title: 'Officine / Autofficine', problem: 'Appuntamenti caotici al telefono.', solution: 'Sito mobile + Agenda + Gestione clienti.' },
    },
    services: {
      title: 'I Nostri Servizi',
      web: { title: 'Creazione Sito Web Rapido', desc: 'Siti moderni, mobile-first, ottimizzati per la conversione.' },
      ai: { title: 'Chatbot IA', desc: 'Assistente 24/7 che risponde alle domande e cattura lead.' },
      automation: { title: 'Automazione n8n', desc: 'Connetti i tuoi strumenti per eliminare i compiti ripetitivi.' },
      audit: { title: 'Audit Local Business', desc: 'Analisi completa della tua presenza online per trovare opportunità rapide.' },
    },
    improvements: {
      title: "Esempi di ciò che miglioriamo",
      subtitle: "Risultati concreti per semplificare il tuo lavoro quotidiano e attrarre clienti.",
      cases: [
        { before: "I clienti scrivono su WhatsApp, Instagram, SMS. 2 ore al giorno perse a fissare appuntamenti manualmente.", after: "Un unico link sincronizzato con Google Calendar. Conferme e promemoria WhatsApp 100% automatizzati." },
        { before: "Chiamate perse durante il servizio o la sera. I potenziali clienti vanno dalla concorrenza che risponde prima.", after: "Assistente IA 24/7 che risponde alle domande frequenti (prezzi, orari) e raccoglie i contatti dei clienti." },
        { before: "Sito lento (6+ secondi su mobile) e scheda Google Maps invisibile nelle ricerche locali.", after: "Sito Next.js ultra-veloce (<1 sec) e profilo Google Business ottimizzato per generare chiamate dirette." },
        { before: "Richieste di preventivo perse nelle email. Risposte lente e follow-up dimenticati.", after: "Moduli intelligenti collegati al tuo CRM/Google Sheets. Notifiche immediate e follow-up automatici." }
      ],
      automation: {
        title: "Automazione semplice per risparmiare tempo",
        desc: "Quando un cliente compila il modulo, ricevi automaticamente una notifica WhatsApp o email. La richiesta può anche essere aggiunta in Google Sheets / CRM, con un promemoria per non dimenticare di rispondere."
      }
    },
    packs: {
      title: "Soluzioni pronte per la tua attività",
      subtitle: "Configurazioni adattate alle reali esigenze delle PMI locali.",
      beauty: {
        title: "Per saloni di bellezza",
        features: ["Sito mobile veloce", "Galleria di lavori", "Listino prezzi", "Pulsante prenotazione online", "Promemoria appuntamenti WhatsApp", "Richiesta automatica di recensioni Google"]
      },
      artisans: {
        title: "Per artigiani & ristrutturazioni",
        features: ["Sito vetrina professionale", "Galleria progetti Prima/Dopo", "Modulo richiesta preventivo intelligente", "Notifica immediata delle richieste", "Tracciamento e follow-up dei lead"]
      },
      garages: {
        title: "Per officine & autofficine",
        features: ["Prenotazione appuntamenti online", "Modulo segnalazione problemi auto", "Promemoria automatico revisioni", "Scheda cliente semplice integrata", "Pulsanti Google Maps & Telefono diretto"]
      }
    },
    steps: {
      title: "Come funziona?",
      subtitle: "Un processo semplice e rapido, dall'audit al lancio.",
      items: [
        { num: "1", title: "Audit gratuito", desc: "Analizziamo il tuo sito attuale, la scheda Google Business Profile e l'esperienza mobile." },
        { num: "2", title: "Proposta chiara", desc: "Ricevi una raccomandazione concreta e semplice, senza gergo tecnico." },
        { num: "3", title: "Creazione & Miglioramento", desc: "Costruiamo il tuo sito, i tuoi moduli e configuriamo le automazioni essenziali." },
        { num: "4", title: "Lancio", desc: "Il tuo nuovo sistema pronto all'uso viene messo online. Tutto funziona da subito." },
        { num: "5", title: "Supporto & Aggiustamenti", desc: "Restiamo al tuo fianco per effettuare le modifiche in base ai primi feedback." }
      ]
    },
    pricing: {
      title: 'Offerte & Prezzi',
      subtitle: 'Prezzi di lancio per le prime collaborazioni locali nella Svizzera francofona.',
      whyTitle: 'Perché?',
      whyDesc: 'Le nostre offerte sono pensate per le piccole imprese che vogliono iniziare semplicemente, senza budget eccessivo.',
      footer: 'Ogni progetto è adattato alla tua attività: sito web, modulo, WhatsApp, Google, IA, automazione o CRM.',
      starter: {
        title: 'Starter Website',
        price: '490',
        desc: 'Per una prima presenza professionale online.',
        features: ['Sito one-page moderno', 'Versione mobile', 'Pulsante chiamata/WhatsApp', 'Google Maps integrato', 'Modulo di contatto', 'SEO di base'],
        cta: 'Richiedi Starter'
      },
      business: {
        title: 'Business Website',
        price: '890',
        desc: 'Per un\'attività locale che vuole ricevere più richieste.',
        features: ['Sito da 3 a 5 pagine', 'Design professionale', 'Ottimizzazione conversione', 'Google Analytics', 'Struttura SEO locale', 'Google Business Profile'],
        cta: 'Richiedi Business'
      },
      premium: {
        title: 'AI Premium',
        price: '1’490',
        desc: 'Per un\'azienda che vuole un sito moderno con IA e automazione.',
        features: ['Sito da 5 a 8 pagine', 'Multilingue', 'Chatbot IA integrato', 'Automazione n8n', 'Notifiche WhatsApp', 'Supporto post-lancio'],
        cta: 'Richiedi AI Premium'
      },
      audit: { title: 'Local Business Audit', price: '0', desc: 'Analisi rapida della tua presenza online.' },
      n8n: { title: 'Automazione n8n', price: '390', desc: 'Per automatizzare i compiti ripetitivi.' },
      bot: { title: 'AI Chatbot', price: '590', desc: 'Un assistente IA semplice per i tuoi clienti.' }
    },
    audit: {
      title: 'Audit gratuito della tua presenza online',
      subtitle: 'Analizziamo il tuo sito, la scheda Google e il percorso del cliente da mobile per trovare miglioramenti semplici.',
      form: {
        name: 'Nome',
        business: 'Nome dell\'azienda',
        link: 'Sito / Google Maps',
        email: 'Email',
        phone: 'WhatsApp / Telefono',
        message: 'Messaggio (Facoltativo)',
        submit: 'Ricevi il mio audit gratuito',
        sending: 'Invio...',
        successTitle: 'Grazie!',
        successDesc: 'La tua richiesta di audit è stata ricevuta. Ti contatteremo presto.',
      }
    },
    footer: {
      desc: 'Pilot AI Studio aiuta le piccole imprese locali a usare il web, l\'intelligenza artificiale e l\'automazione senza complessità inutile.',
    },
    chatbot: {
      greeting: 'Buongiorno! Sono l\'assistente Pilot AI. Come posso aiutare la tua attività oggi?',
      ctaAudit: 'Richiedi il mio audit gratuito',
      ctaContact: 'Lascia i miei dati di contatto',
      error: 'Spiacenti, si è verificato un errore.',
      placeholder: 'La tua domanda...',
    }
  },
  de: {
    nav: {
      home: 'Startseite',
      services: 'Leistungen',
      audit: 'Gratis Audit',
      process: 'Ablauf',
      pricing: 'Preise',
      contact: 'Kontakt',
      blog: 'Blog',
    },
    blog: {
      title: 'Blog & Ressourcen',
      subtitle: 'Tipps, Automatisierungen und Strategien für Ihr lokales Unternehmen.',
      readMore: 'Artikel lesen',
      backToList: 'Zurück zur Übersicht',
      ctaTitle: 'Möchten Sie Ihre Online-Präsenz verbessern?',
      ctaButton: 'Gratis Audit anfordern',
      noPosts: 'Keine Artikel gefunden.',
    },
    hero: {
      title: 'Schnelle Websites, KI und einfache Automatisierungen für Kleinunternehmen in der Westschweiz.',
      subtitle: 'Wir helfen Restaurants, Salons, Handwerkern, Garagen und lokalen Dienstleistern, mehr Anfragen zu erhalten, Buchungen zu vereinfachen und wiederkehrende Aufgaben zu automatisieren — ohne technische Komplexität.',
      ctaPrimary: 'Kostenloses Audit Ihrer Online-Präsenz',
      ctaSecondary: 'Lösungen ansehen',
      tagline: 'Mehr Anfragen. Weniger Routine.',
    },
    categories: {
      title: 'Für wen ist das?',
      restaurants: { title: 'Restaurants & Cafés', problem: 'Manuelle Reservierungen und ständige Anrufe.', solution: 'Website + Online-Buchung + Auto-Bestätigung.' },
      salons: { title: 'Schönheitssalons', problem: 'Kunden schreiben überall, Papierpläne.', solution: 'Website + WhatsApp-Erinnerungen + CRM.' },
      artisans: { title: 'Handwerker & Renovierung', problem: 'Keine Sichtbarkeit, verlorene Angebote.', solution: 'Profi-Website + Galerie + Smart-Formular.' },
      garages: { title: 'Garagen / Werkstätten', problem: 'Chaotische Terminvereinbarungen per Telefon.', solution: 'Mobile Website + Kalender + Kundenverwaltung.' },
    },
    services: {
      title: 'Unsere Leistungen',
      web: { title: 'Schnelle Website-Erstellung', desc: 'Moderne, mobile-first Websites, optimiert für Conversions.' },
      ai: { title: 'KI-Chatbot', desc: '24/7-Assistent, der Fragen beantwortet und Leads erfasst.' },
      automation: { title: 'n8n-Automatisierung', desc: 'Verbinden Sie Ihre Tools, um Routineaufgaben zu eliminieren.' },
      audit: { title: 'Local Business Audit', desc: 'Vollständige Analyse Ihrer Online-Präsenz für schnelle Gewinne.' },
    },
    improvements: {
      title: "Beispiele für das, was wir verbessern",
      subtitle: "Konkrete Ergebnisse, um Ihren Alltag zu vereinfachen und Kunden zu gewinnen.",
      cases: [
        { before: "Kunden schreiben auf WhatsApp, Instagram, SMS. 2 Stunden täglich verloren durch manuelle Terminkoordination.", after: "Ein einziger Buchungslink, synchronisiert mit Google Kalender. Bestätigungen & WhatsApp-Erinnerungen 100% automatisiert." },
        { before: "Verpasste Anrufe während des Betriebs oder abends. Potenzielle Kunden gehen zur Konkurrenz, die schneller antwortet.", after: "24/7 KI-Assistent beantwortet häufige Fragen (Preise, Öffnungszeiten) sofort und erfasst Kundenkontakte." },
        { before: "Langsame Website (6+ Sek. auf dem Handy) und unsichtbares Google-Maps-Profil in lokalen Suchen.", after: "Ultraschnelle Next.js-Website (<1 Sek.) und optimiertes Google Business-Profil für direkte Anrufe." },
        { before: "Angebotsanfragen gehen in E-Mails verloren. Langsame Reaktionszeiten und vergessene Nachfassaktionen.", after: "Intelligente Formulare verbunden mit Ihrem CRM/Google Sheets. Sofortige Benachrichtigungen und automatische Follow-ups." }
      ],
      automation: {
        title: "Einfache Automatisierung zum Zeitsparen",
        desc: "Wenn ein Kunde das Formular ausfüllt, erhalten Sie automatisch eine WhatsApp- oder E-Mail-Benachrichtigung. Die Anfrage kann auch in Google Sheets / CRM eingetragen werden, mit einer Erinnerung, nicht zu vergessen zu antworten."
      }
    },
    packs: {
      title: "Fertige Lösungen für Ihr Unternehmen",
      subtitle: "Konfigurationen angepasst an die realen Bedürfnisse lokaler KMU.",
      beauty: {
        title: "Für Schönheitssalons",
        features: ["Schnelle mobile Website", "Arbeitsbeispiel-Galerie", "Preisliste", "Online-Buchungsschaltfläche", "WhatsApp-Terminerinnerungen", "Automatische Google-Bewertungsanfragen"]
      },
      artisans: {
        title: "Für Handwerker & Renovierung",
        features: ["Professionelle Visitenkarten-Website", "Vorher/Nachher-Projektgalerie", "Intelligentes Angebotsformular", "Sofortige Benachrichtigung bei Anfragen", "Lead-Tracking und Nachfassung"]
      },
      garages: {
        title: "Für Garagen & Werkstätten",
        features: ["Online-Terminbuchung", "Fahrzeugproblem-Meldeformular", "Automatische Service-Erinnerungen", "Einfache integrierte Kundenkarte", "Direkte Google Maps & Telefonschaltflächen"]
      }
    },
    steps: {
      title: "Wie läuft das ab?",
      subtitle: "Ein einfacher und schneller Ablauf, vom Audit bis zum Launch.",
      items: [
        { num: "1", title: "Gratis Audit", desc: "Wir analysieren Ihre aktuelle Website, Ihr Google Business-Profil und das mobile Nutzererlebnis." },
        { num: "2", title: "Klarer Vorschlag", desc: "Sie erhalten eine konkrete, einfache Empfehlung ohne technischen Fachjargon." },
        { num: "3", title: "Erstellung & Verbesserung", desc: "Wir bauen Ihre Website, erstellen Formulare und konfigurieren die wichtigsten Automatisierungen." },
        { num: "4", title: "Launch", desc: "Ihr neues, sofort einsatzbereites System geht online. Alles funktioniert auf Anhieb." },
        { num: "5", title: "Begleitung & Anpassung", desc: "Wir bleiben an Ihrer Seite, um Anpassungen basierend auf Ihren ersten Rückmeldungen vorzunehmen." }
      ]
    },
    pricing: {
      title: 'Angebote & Preise',
      subtitle: 'Einführungspreise für die ersten lokalen Partnerschaften in der Westschweiz.',
      whyTitle: 'Warum?',
      whyDesc: 'Unsere Angebote sind für Kleinunternehmen gedacht, die einfach und ohne übermässiges Budget starten möchten.',
      footer: 'Jedes Projekt wird an Ihr Unternehmen angepasst: Website, Formular, WhatsApp, Google, KI, Automatisierung oder CRM.',
      starter: {
        title: 'Starter Website',
        price: '490',
        desc: 'Für eine erste professionelle Online-Präsenz.',
        features: ['Moderne One-Page-Website', 'Mobile Version', 'Anruf-/WhatsApp-Schaltfläche', 'Google Maps integriert', 'Kontaktformular', 'Basis-SEO'],
        cta: 'Starter anfragen'
      },
      business: {
        title: 'Business Website',
        price: '890',
        desc: 'Für ein lokales Unternehmen, das mehr Anfragen erhalten möchte.',
        features: ['Website mit 3 bis 5 Seiten', 'Professionelles Design', 'Conversion-Optimierung', 'Google Analytics', 'Lokale SEO-Struktur', 'Google Business Profile'],
        cta: 'Business anfragen'
      },
      premium: {
        title: 'AI Premium',
        price: '1’490',
        desc: 'Für Unternehmen, die eine moderne Website mit KI und Automatisierung möchten.',
        features: ['Website mit 5 bis 8 Seiten', 'Mehrsprachig', 'Integrierter KI-Chatbot', 'n8n-Automatisierung', 'WhatsApp-Benachrichtigungen', 'Support nach dem Launch'],
        cta: 'AI Premium anfragen'
      },
      audit: { title: 'Local Business Audit', price: '0', desc: 'Schnelle Analyse Ihrer Online-Präsenz.' },
      n8n: { title: 'n8n-Automatisierung', price: '390', desc: 'Zur Automatisierung wiederkehrender Aufgaben.' },
      bot: { title: 'KI-Chatbot', price: '590', desc: 'Ein einfacher KI-Assistent für Ihre Kunden.' }
    },
    audit: {
      title: 'Kostenloser Audit Ihrer Online-Präsenz',
      subtitle: 'Wir analysieren Ihre Website, Ihr Google-Profil und die mobile Customer Journey, um einfache Verbesserungen zu finden.',
      form: {
        name: 'Name',
        business: 'Unternehmensname',
        link: 'Website / Google Maps Link',
        email: 'E-Mail',
        phone: 'WhatsApp / Telefon',
        message: 'Nachricht (Optional)',
        submit: 'Gratis Audit erhalten',
        sending: 'Wird gesendet...',
        successTitle: 'Vielen Dank!',
        successDesc: 'Ihre Audit-Anfrage wurde empfangen. Wir werden uns bald bei Ihnen melden.',
      }
    },
    footer: {
      desc: 'Pilot AI Studio hilft kleinen lokalen Unternehmen, das Web, künstliche Intelligenz und Automatisierung ohne unnötige Komplexität zu nutzen.',
    },
    chatbot: {
      greeting: 'Hallo! Ich bin der Pilot AI Assistent. Wie kann ich Ihrem Unternehmen heute helfen?',
      ctaAudit: 'Gratis Audit erhalten',
      ctaContact: 'Kontaktdaten hinterlassen',
      error: 'Entschuldigung, es ist ein Fehler aufgetreten.',
      placeholder: 'Ihre Frage...',
    }
  }
};
