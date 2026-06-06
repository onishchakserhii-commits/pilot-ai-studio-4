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
      promo: 'Offre spéciale : site web avec assistant IA et configuration standard pour CHF 350.',
    },
    // ... remaining existing fr content
    categories: {
      title: 'Pour qui ?',
      restaurants: { title: 'Restaurants & Cafés', problem: 'Réservations manuelles et appels incessants.', solution: 'Site + Réservation en ligne + Confirmation auto.' },
      salons: { title: 'Salons de Beauté', problem: 'Clients écrivent partout, planning papier.', solution: 'Site + Rappels WhatsApp + CRM.' },
      artisans: { title: 'Artisans & Rénovation', problem: 'Pas de visibilité, devis perdus.', solution: 'Site pro + Galerie + Formulaire intelligent.' },
      garages: { title: 'Garages / СТО', problem: 'Prise de RDV chaotique au téléphone.', solution: 'Site mobile + Agenda + Suivi client.' },
      bakeries: { title: 'Boulangeries & Pâtisseries', problem: 'Commandes de gâteaux manuelles, questions récurrentes.', solution: 'Site + Commandes en ligne + Chatbot IA.' },
    },
    services: {
      title: 'Nos Services',
      categories: {
        web: {
          title: 'Sites Web Modernes',
          items: [
            { title: 'Landing Pages', desc: 'Pages de destination ultra-rapides conçues pour maximiser vos conversions.' },
            { title: 'Sites Vitrines', desc: 'Présentez votre activité et vos réalisations de manière professionnelle.' },
            { title: 'Design Mobile-First', desc: 'Une navigation fluide et rapide adaptée à tous les écrans de smartphones.' },
            { title: 'SEO Local de Base', desc: 'Structure technique optimisée pour être visible dans votre région.' }
          ]
        },
        automation: {
          title: 'Automatisation & IA',
          items: [
            { title: 'Assistant IA personnalisé', desc: 'Assistant connecté à vos informations, documents et FAQ pour aider vos clients et votre équipe.' },
            { title: 'Chat IA pour site web', desc: 'Un chatbot moderne qui répond aux visiteurs et capture les demandes 24h/24.' },
            { title: 'Réservations intelligentes', desc: 'Confirmations automatiques, rappels WhatsApp et synchronisation Google Agenda.' },
            { title: 'Automatisation n8n', desc: 'Connexion de vos outils pour éliminer les tâches répétitives.' },
            { title: 'Intégration CRM simple', desc: 'Suivi et centralisation facile de toutes vos demandes clients.' }
          ]
        },
        acquisition: {
          title: 'Acquisition Clients',
          items: [
            { title: 'Optimisation Google Business', desc: 'Photos, référencement local Maps et posts automatiques pour attirer des appels.' },
            { title: 'Formulaires intelligents', desc: 'Transformez les visiteurs en prospects avec des formulaires dynamiques et des CTAs WhatsApp.' },
            { title: 'Création de contenu auto', desc: 'Publication automatique d\'articles SEO, de posts Instagram/Facebook et de newsletters.' },
            { title: 'Tableau de bord & Analytics', desc: 'Visualisez vos demandes, réservations, appels et performances dans un espace simple.' },
            { title: 'SEO Local Avancé', desc: 'Positionnement supérieur sur les mots-clés stratégiques de votre secteur.' }
          ]
        }
      }
    },
    improvements: {
      title: "Des résultats concrets pour nos clients",
      subtitle: "Ce ne sont pas des promesses — ce sont les résultats réels de nos premiers partenaires locaux.",
      features: [
        { title: "+120%", desc: "d'appels et de demandes reçues en moyenne après 30 jours avec un site optimisé et Google Business." },
        { title: "-80%", desc: "de travail manuel éliminé grâce aux réservations automatiques, rappels et formulaires intelligents." },
        { title: "4.9 ★", desc: "note moyenne obtenue par nos clients grâce à la demande automatique d'avis Google après chaque visite." },
        { title: "24/7", desc: "votre business capte des demandes jour et nuit grâce à l'IA et aux formulaires actifs en permanence." }
      ],
      automation: {
        badge: "TÉMOIGNAGE CLIENT",
        title: "Demandez votre audit gratuit",
        desc: "Depuis qu'Aivello a refait notre site et configuré les réservations automatiques, je ne perds plus de temps au téléphone. Les clients réservent seuls et je reçois une notification. C'est incroyable.",
        highlight: "Marie L. — Salon de coiffure, Lausanne",
        highlightDesc: "Cliente Aivello depuis 3 mois"
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
      },
      bakeries: {
        title: "Pour boulangeries & pâtisseries",
        features: ["Vitrine des produits", "Formulaire de commande de gâteaux", "Bouton Click & Collect", "Chatbot IA pour questions", "Horaires Google toujours à jour"]
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
      subtitle: 'Offre spéciale de lancement : votre site avec assistant IA et configuration standard pour CHF 350.',
      whyTitle: 'Pourquoi ?',
      whyDesc: 'Nos offres sont pensées pour les petites entreprises qui veulent commencer vite, avec un budget clair et sans complexité.',
      footer: 'Le pack promotionnel inclut le site, l’assistant IA, les réglages essentiels et les connexions de base pour recevoir des demandes.',
      promoBadge: 'PROMO CHF 350',
      starter: {
        title: 'Site Promo + Assistant IA',
        price: '350',
        originalPrice: '490',
        note: 'Site + IA + réglages standard inclus',
        desc: 'Pour lancer rapidement une présence professionnelle avec un assistant IA prêt à répondre aux visiteurs.',
        features: ['Site one-page moderne', 'Assistant IA intégré', 'Configuration standard incluse', 'Boutons appel/WhatsApp', 'Google Maps + formulaire', 'SEO local de base'],
        cta: 'Profiter de la promo'
      },
      business: {
        title: 'Business Growth',
        price: '690',
        desc: 'Pour une entreprise locale qui veut plus de pages, plus de confiance et plus de demandes.',
        features: ['Site 3 à 5 pages', 'Design professionnel', 'Optimisation conversion', 'Google Analytics', 'Structure SEO locale', 'Google Business Profile optimisé'],
        cta: 'Demander Business'
      },
      premium: {
        title: 'AI Premium',
        price: '1’190',
        desc: 'Pour une entreprise qui veut un site moderne avec IA et automatisation.',
        features: ['Site 5 à 8 pages', 'Multilingue', 'Assistant IA enrichi', 'Automatisation n8n', 'Notifications WhatsApp', 'Support après lancement'],
        cta: 'Demander AI Premium'
      },
      audit: { title: 'Audit Express', price: '0', desc: 'Analyse rapide de votre présence en ligne et de vos priorités.', cta: 'Recevoir l’audit' },
      n8n: { title: 'WhatsApp & Réservation', price: '150', desc: 'Boutons, formulaire simple et notifications pour ne pas perdre de demandes.', cta: 'Ajouter ce module' },
      bot: { title: 'IA enrichie', price: '190', desc: 'Ajout de FAQ, textes métier et réponses personnalisées dans l’assistant.', cta: 'Améliorer l’IA' }
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
    terms: {
      title: 'Conditions d’utilisation',
      intro: 'En utilisant ce site, vous acceptez ces conditions générales.',
      usage: 'Utilisation du site',
      usageDesc: 'Le site présente les services Aivello et permet de demander un audit ou un contact.',
      liability: 'Responsabilité',
      liabilityDesc: 'Les informations sont fournies à titre indicatif et peuvent être mises à jour sans préavis.',
      termination: 'Suspension',
      terminationDesc: 'Nous pouvons limiter l’accès au site en cas d’usage abusif ou non autorisé.',
      governingLaw: 'Droit applicable',
      governingLawDesc: 'Ces conditions sont régies par le droit suisse, canton de Vaud.'
    },
    privacy: {
      title: 'Politique de confidentialité',
      intro: 'Nous traitons les données uniquement pour répondre aux demandes et améliorer nos services.',
      dataCollected: 'Données collectées',
      dataUse: 'Utilisation des données',
      thirdParties: 'Services tiers',
      rights: 'Vos droits',
      contact: 'Contact',
      email: 'Email'
    },
    legal: {
      title: 'Mentions légales',
      intro: 'Informations légales relatives à Aivello.',
      companyName: 'Nom de l’entreprise',
      address: 'Adresse',
      registrationNumber: 'Numéro d’enregistrement',
      vatNumber: 'Numéro TVA',
      email: 'Email',
      phone: 'Téléphone'
    },
    cookieBanner: {
      title: 'Utilisation des cookies',
      description: 'Nous utilisons des cookies pour améliorer votre expérience et analyser le trafic.',
      acceptAll: 'Tout accepter',
      rejectAll: 'Tout refuser',
      customize: 'Personnaliser',
      policyLink: 'Politique des cookies'
    },
    footer: {
      desc: 'Aivello aide les petites entreprises locales à utiliser le web, l’intelligence artificielle et l’automatisation sans complexité inutile.',
    },
    chatbot: {
      greeting: 'Bonjour ! Je suis l\'assistant Aivello. Comment puis-je aider votre business aujourd\'hui ?',
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
      promo: 'Special offer: website with AI assistant and standard setup for CHF 350.',
    },
    // ... remaining existing en content
    categories: {
      title: 'Who is this for?',
      restaurants: { title: 'Restaurants & Cafés', problem: 'Manual bookings and constant calls.', solution: 'Site + Online Booking + Auto confirmation.' },
      salons: { title: 'Beauty Salons', problem: 'Clients message everywhere, paper schedules.', solution: 'Site + WhatsApp reminders + CRM.' },
      artisans: { title: 'Artisans & Renovation', problem: 'No visibility, lost quotes.', solution: 'Pro site + Gallery + Smart form.' },
      garages: { title: 'Garages / Repair', problem: 'Chaotic phone bookings.', solution: 'Mobile site + Calendar + Client tracking.' },
      bakeries: { title: 'Bakeries & Pastry Shops', problem: 'Manual cake orders, repetitive questions.', solution: 'Site + Online Ordering + AI Chatbot.' },
    },
    services: {
      title: 'Our Services',
      categories: {
        web: {
          title: 'Modern Websites',
          items: [
            { title: 'Landing Pages', desc: 'Ultra-fast landing pages designed to maximize your conversions.' },
            { title: 'Showcase Websites', desc: 'Present your business and achievements in a professional way.' },
            { title: 'Mobile-First Design', desc: 'Fluid and fast navigation tailored to all smartphone screens.' },
            { title: 'Basic Local SEO', desc: 'Optimized technical structure to be visible in your local area.' }
          ]
        },
        automation: {
          title: 'Automation & AI',
          items: [
            { title: 'Custom AI Assistant', desc: 'AI assistant connected to your info, documents, and FAQ to help your clients and team.' },
            { title: 'AI Chatbot for Website', desc: 'A modern chatbot that answers visitors and captures inquiries 24/7.' },
            { title: 'Smart Bookings', desc: 'Automated confirmations, WhatsApp reminders, and Google Calendar sync.' },
            { title: 'n8n Automation', desc: 'Connecting your tools to eliminate repetitive manual tasks.' },
            { title: 'Simple CRM Integration', desc: 'Easy tracking and centralization of all your customer requests.' }
          ]
        },
        acquisition: {
          title: 'Client Acquisition',
          items: [
            { title: 'Google Business Profile', desc: 'Photos, local Maps SEO, and automated posts to attract calls.' },
            { title: 'Smart Forms & CTAs', desc: 'Turn visitors into prospects with dynamic forms and WhatsApp call-to-actions.' },
            { title: 'AI Content Automation', desc: 'Automated publishing of SEO articles, Instagram/Facebook posts, and newsletters.' },
            { title: 'Dashboard & Analytics', desc: 'Visualize your requests, bookings, calls, and performance in a simple space.' },
            { title: 'Advanced Local SEO', desc: 'Top rankings on strategic search keywords for your business sector.' }
          ]
        }
      }
    },
    improvements: {
      title: "Real results for real businesses",
      subtitle: "These aren't promises — they're actual results from our first local partners.",
      features: [
        { title: "+120%", desc: "increase in calls and inquiries on average within 30 days of launching an optimized site and Google Business." },
        { title: "-80%", desc: "of manual work eliminated thanks to automatic bookings, reminders and smart forms." },
        { title: "4.9 ★", desc: "average rating achieved by our clients through automated Google review requests after every visit." },
        { title: "24/7", desc: "your business captures leads day and night thanks to AI and always-active forms." }
      ],
      automation: {
        badge: "CLIENT TESTIMONIAL",
        title: "Request your free audit",
        desc: "Since Aivello rebuilt our site and set up automatic bookings, I no longer waste time on the phone. Clients book on their own and I get a notification. It's incredible.",
        highlight: "Marie L. — Hair Salon, Lausanne",
        highlightDesc: "Aivello client for 3 months"
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
      },
      bakeries: {
        title: "For bakeries & pastry shops",
        features: ["Product showcase", "Cake order form", "Click & Collect button", "AI Chatbot for questions", "Always up-to-date Google hours"]
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
      subtitle: 'Special launch offer: your website with an AI assistant and standard setup for CHF 350.',
      whyTitle: 'Why?',
      whyDesc: 'Our offers are designed for small businesses that want to launch quickly with a clear budget and no technical complexity.',
      footer: 'The promotional pack includes the website, AI assistant, essential settings, and basic lead-capture connections.',
      promoBadge: 'CHF 350 PROMO',
      starter: {
        title: 'Promo Website + AI Assistant',
        price: '350',
        originalPrice: '490',
        note: 'Website + AI + standard setup included',
        desc: 'For launching a professional presence quickly with an AI assistant ready to answer visitors.',
        features: ['Modern one-page website', 'Integrated AI assistant', 'Standard setup included', 'Call/WhatsApp buttons', 'Google Maps + contact form', 'Basic local SEO'],
        cta: 'Claim the offer'
      },
      business: {
        title: 'Business Growth',
        price: '690',
        desc: 'For local businesses that need more pages, more trust, and more inquiries.',
        features: ['3 to 5 pages site', 'Professional design', 'Conversion optimized', 'Google Analytics', 'Local SEO structure', 'Optimized Google Business Profile'],
        cta: 'Request Business'
      },
      premium: {
        title: 'AI Premium',
        price: '1’190',
        desc: 'For businesses wanting a modern site with AI and automation.',
        features: ['5 to 8 pages site', 'Multi-language support', 'Enhanced AI assistant', 'n8n Automation', 'WhatsApp notifications', 'Post-launch support'],
        cta: 'Request AI Premium'
      },
      audit: { title: 'Express Audit', price: '0', desc: 'Quick review of your online presence and priorities.', cta: 'Get the audit' },
      n8n: { title: 'WhatsApp & Booking', price: '150', desc: 'Buttons, a simple form, and notifications so you do not lose inquiries.', cta: 'Add this module' },
      bot: { title: 'Enhanced AI', price: '190', desc: 'FAQ, business texts, and custom answers added to the assistant.', cta: 'Upgrade the AI' }
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
    terms: {
      title: 'Terms of Use',
      intro: 'By using this website, you accept these general terms.',
      usage: 'Website Use',
      usageDesc: 'The website presents Aivello services and lets visitors request an audit or contact.',
      liability: 'Liability',
      liabilityDesc: 'Information is provided for guidance and may be updated without prior notice.',
      termination: 'Suspension',
      terminationDesc: 'We may limit access in case of abusive or unauthorized use.',
      governingLaw: 'Governing Law',
      governingLawDesc: 'These terms are governed by Swiss law, canton of Vaud.'
    },
    privacy: {
      title: 'Privacy Policy',
      intro: 'We process data only to respond to requests and improve our services.',
      dataCollected: 'Data Collected',
      dataUse: 'Use of Data',
      thirdParties: 'Third-party Services',
      rights: 'Your Rights',
      contact: 'Contact',
      email: 'Email'
    },
    legal: {
      title: 'Legal Notice',
      intro: 'Legal information about Aivello.',
      companyName: 'Company Name',
      address: 'Address',
      registrationNumber: 'Registration Number',
      vatNumber: 'VAT Number',
      email: 'Email',
      phone: 'Phone'
    },
    cookieBanner: {
      title: 'Cookie Policy',
      description: 'We use cookies to improve your experience and analyze traffic.',
      acceptAll: 'Accept all',
      rejectAll: 'Reject all',
      customize: 'Customize',
      policyLink: 'Cookie policy'
    },
    footer: {
      desc: 'Aivello helps local small businesses use web, AI, and automation without unnecessary complexity.',
    },
    chatbot: {
      greeting: 'Hello! I am the Aivello assistant. How can I help your business today?',
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
      promo: 'Акція: сайт з AI-асистентом і стандартними налаштуваннями за CHF 350.',
    },
    // ... remaining existing ua content
    categories: {
      title: 'Для кого це?',
      restaurants: { title: 'Ресторани та Кафе', problem: 'Ручний запис та постійні дзвінки.', solution: 'Сайт + Онлайн бронювання + Автовідповідь.' },
      salons: { title: 'Салони Краси', problem: 'Клієнти пишуть всюди, паперовий запис.', solution: 'Сайт + WhatsApp нагадування + CRM.' },
      artisans: { title: 'Майстри та Ремонт', problem: 'Відсутність у пошуку, втрачені замовлення.', solution: 'Професійний сайт + Галерея + Форма.' },
      garages: { title: 'Garages / СТО', problem: 'Хаотичні дзвінки для запису.', solution: 'Мобільний сайт + Календар + База клієнтів.' },
      bakeries: { title: 'Пекарні та Кондитерські', problem: 'Замовлення тортів вручну, одні й ті самі питання.', solution: 'Сайт + Онлайн замовлення + AI Чатбот.' },
    },
    services: {
      title: 'Наші Послуги',
      categories: {
        web: {
          title: 'Сучасні Сайти',
          items: [
            { title: 'Landing Pages', desc: 'Ультрашвидкі сторінки для максимальної конверсії ваших послуг.' },
            { title: 'Сайти-візитки', desc: 'Професійне та елегантне представлення вашого бізнесу та послуг.' },
            { title: 'Мобільна оптимізація', desc: 'Зручна навігація, адаптована під будь-які екрани смартфонів.' },
            { title: 'Базове локальне SEO', desc: 'Оптимізована структура сайту для видимості у вашому місті.' }
          ]
        },
        automation: {
          title: 'Автоматизація та AI',
          items: [
            { title: 'Персональний AI-асистент', desc: 'ШІ-асистент, підключений до документів і FAQ для допомоги клієнтам та команді.' },
            { title: 'AI-чатбот для сайту', desc: 'Сучасний чатбот, який відповідає відвідувачам та збирає заявки цілодобово.' },
            { title: 'Розумне бронювання', desc: 'Автоматичні підтвердження, нагадування у WhatsApp та синхронізація з календарем.' },
            { title: 'Автоматизація n8n', desc: 'Об\'єднання ваших інструментів для усунення рутинних ручних дій.' },
            { title: 'Проста інтеграція CRM', desc: 'Зручний збір та відстеження всіх запитів клієнтів в одному місці.' }
          ]
        },
        acquisition: {
          title: 'Залучення Клієнтів',
          items: [
            { title: 'Оптимізація Google Business', desc: 'Фото, просування в картах Google та автопости для збільшення дзвінків.' },
            { title: 'Розумні форми та CTAs', desc: 'Перетворення відвідувачів на лідів за допомогою динамічних форм та WhatsApp.' },
            { title: 'Автоматичний контент', desc: 'Створення та автоматична публікація SEO-статей, постів у соцмережах та розсилок.' },
            { title: 'Панель керування та аналітика', desc: 'Простий дашборд для відстеження дзвінків, заявок та бронювань у реальному часі.' },
            { title: 'Просунуте локальне SEO', desc: 'Вихід на перші позиції в пошуку за ключовими запитами вашого бізнесу.' }
          ]
        }
      }
    },
    improvements: {
      title: "Реальні результати для реального бізнесу",
      subtitle: "Це не обіцянки — це фактичні результати наших перших локальних партнерів.",
      features: [
        { title: "+120%", desc: "зростання дзвінків та заявок у середньому за 30 днів після запуску оптимізованого сайту та Google Business." },
        { title: "-80%", desc: "ручної роботи усунуто завдяки автоматичному бронюванню, нагадуванням та розумним формам." },
        { title: "4.9 ★", desc: "середній рейтинг клієнтів завдяки автоматичному запиту відгуків у Google після кожного візиту." },
        { title: "24/7", desc: "ваш бізнес збирає заявки вдень і вночі завдяки ШІ та формам, що працюють постійно." }
      ],
      automation: {
        badge: "ВІДГУК КЛІЄНТА",
        title: "Замовте безкоштовний аудит",
        desc: "Відколи Aivello переробив наш сайт і налаштував автоматичне бронювання, я більше не витрачаю час на телефоні. Клієнти записуються самі, а я отримую сповіщення. Це неймовірно.",
        highlight: "Марі Л. — Салон краси, Лозанна",
        highlightDesc: "Клієнтка Aivello вже 3 місяці"
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
      },
      bakeries: {
        title: "Для пекарень та кондитерських",
        features: ["Вітрина продукції", "Форма замовлення тортів", "Кнопка Click & Collect", "AI Чатбот для запитань", "Завжди актуальні години в Google"]
      }
    },
    cookieBanner: {
      title: 'Політика використання файлів cookie',
      description: 'Ми використовуємо файли cookie, щоб покращити ваш досвід, аналізувати трафік та показувати персоналізований контент.',
      acceptAll: 'Прийняти всі',
      rejectAll: 'Відхилити всі',
      customize: 'Налаштувати',
      policyLink: 'Політика щодо файлів cookie'
    },
    localProjects: {
      title: 'Локальні проєкти',
      description: 'Приклади місцевих проєктів з вашого регіону.'
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
      subtitle: 'Акційна пропозиція: сайт з AI-асистентом і стандартними налаштуваннями за CHF 350.',
      whyTitle: 'Чому?',
      whyDesc: 'Наші пропозиції створені для малого бізнесу, який хоче швидко стартувати з прозорою ціною і без технічної складності.',
      footer: 'Акційний пакет включає сайт, AI-асистента, базові налаштування та основні підключення для отримання заявок.',
      promoBadge: 'АКЦІЯ CHF 350',
      starter: {
        title: 'Акційний сайт + AI-асистент',
        price: '350',
        originalPrice: '490',
        note: 'Сайт + AI + стандартні налаштування входять у ціну',
        desc: 'Для швидкого запуску професійної онлайн-присутності з AI-асистентом, який відповідає відвідувачам.',
        features: ['Сучасний one-page сайт', 'Вбудований AI-асистент', 'Стандартні налаштування включені', 'Кнопки дзвінка/WhatsApp', 'Google Maps + форма заявки', 'Базове локальне SEO'],
        cta: 'Скористатися акцією'
      },
      business: {
        title: 'Business Growth',
        price: '690',
        desc: 'Для локального бізнесу, якому потрібно більше сторінок, довіри та заявок.',
        features: ['Сайт 3–5 сторінок', 'Професійний дизайн', 'Оптимізація конверсії', 'Google Analytics', 'Локальна SEO-структура', 'Оптимізований Google Business Profile'],
        cta: 'Замовити Business'
      },
      premium: {
        title: 'AI Premium',
        price: '1’190',
        desc: 'Для бізнесу, якому потрібен сайт + AI + автоматизація.',
        features: ['Сайт 5–8 сторінок', 'Мультимовність', 'Розширений AI-асистент', 'Автоматизація n8n', 'WhatsApp сповіщення', 'Підтримка після запуску'],
        cta: 'Замовити AI Premium'
      },
      audit: { title: 'Експрес-аудит', price: '0', desc: 'Швидкий аналіз вашої онлайн-присутності та пріоритетів.', cta: 'Отримати аудит' },
      n8n: { title: 'WhatsApp і бронювання', price: '150', desc: 'Кнопки, проста форма і сповіщення, щоб не втрачати заявки.', cta: 'Додати модуль' },
      bot: { title: 'Розширення AI', price: '190', desc: 'FAQ, тексти бізнесу та персональні відповіді для AI-асистента.', cta: 'Покращити AI' }
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
    terms: {
      title: 'Умови використання',
      intro: 'Користуючись цим сайтом, ви погоджуєтесь із цими умовами.',
      usage: 'Використання сайту',
      usageDesc: 'Сайт представляє послуги Aivello та дозволяє залишити заявку на аудит або контакт.',
      liability: 'Відповідальність',
      liabilityDesc: 'Інформація на сайті має довідковий характер і може оновлюватися без попередження.',
      termination: 'Обмеження доступу',
      terminationDesc: 'Ми можемо обмежити доступ у разі зловживання або несанкціонованого використання.',
      governingLaw: 'Застосовне право',
      governingLawDesc: 'Ці умови регулюються законодавством Швейцарії, кантон Во.'
    },
    privacy: {
      title: 'Політика конфіденційності',
      intro: 'Ми обробляємо дані лише для відповіді на заявки та покращення послуг.',
      dataCollected: 'Зібрані дані',
      dataUse: 'Використання даних',
      thirdParties: 'Сторонні сервіси',
      rights: 'Ваші права',
      contact: 'Контакт',
      email: 'Email'
    },
    legal: {
      title: 'Юридична інформація',
      intro: 'Юридична інформація про Aivello.',
      companyName: 'Назва компанії',
      address: 'Адреса',
      registrationNumber: 'Реєстраційний номер',
      vatNumber: 'Номер VAT',
      email: 'Email',
      phone: 'Телефон'
    },
    footer: {
      desc: 'Aivello допомагає малому бізнесу використовувати веб-технології, AI та автоматизацію без зайвої складності.',
    },
    chatbot: {
      greeting: 'Вітаю! Я асистент Aivello. Як я можу допомогти вашому бізнесу сьогодні?',
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
      promo: 'Offerta speciale: sito con assistente IA e configurazione standard a CHF 350.',
    },
    categories: {
      title: 'Per chi è?',
      restaurants: { title: 'Ristoranti & Caffè', problem: 'Prenotazioni manuali e telefonate continue.', solution: 'Sito + Prenotazione online + Conferma automatica.' },
      salons: { title: 'Saloni di Bellezza', problem: 'I clienti scrivono ovunque, agenda cartacea.', solution: 'Sito + Promemoria WhatsApp + CRM.' },
      artisans: { title: 'Artigiani & Ristrutturazioni', problem: 'Nessuna visibilità, preventivi persi.', solution: 'Sito professionale + Galleria + Modulo intelligente.' },
      garages: { title: 'Officine / Autofficine', problem: 'Appuntamenti caotici al telefono.', solution: 'Sito mobile + Agenda + Gestione clienti.' },
      bakeries: { title: 'Panetterie & Pasticcerie', problem: 'Ordini manuali, domande ripetitive.', solution: 'Sito + Ordini online + Chatbot IA.' },
    },
    services: {
      title: 'I Nostri Servizi',
      categories: {
        web: {
          title: 'Siti Web Moderni',
          items: [
            { title: 'Landing Pages', desc: 'Pagine di destinazione ultra-rapide progettate per massimizzare le conversioni.' },
            { title: 'Siti Vetrina', desc: 'Presenta la tua attività e i tuoi progetti in modo professionale.' },
            { title: 'Design Mobile-First', desc: 'Navigazione fluida e rapida adatta a tutti gli schermi degli smartphone.' },
            { title: 'SEO Locale di Base', desc: 'Struttura tecnica ottimizzata per essere visibile nella tua zona.' }
          ]
        },
        automation: {
          title: 'Automazione & IA',
          items: [
            { title: 'Assistente IA personalizzato', desc: 'Assistente connesso alle tue informazioni, documenti e FAQ per aiutare clienti e team.' },
            { title: 'Chatbot IA per sito', desc: 'Un chatbot moderno che risponde ai visitatori e acquisisce lead 24 ore su 24.' },
            { title: 'Prenotazioni intelligenti', desc: 'Conferme automatiche, promemoria WhatsApp e sincronizzazione Google Calendar.' },
            { title: 'Automazione n8n', desc: 'Connessione dei tuoi strumenti per eliminare le attività ripetitive.' },
            { title: 'CRM Semplice', desc: 'Monitoraggio e centralizzazione facile di tutte le richieste dei clienti.' }
          ]
        },
        acquisition: {
          title: 'Acquisizione Clienti',
          items: [
            { title: 'Ottimizzazione Google Business', desc: 'Foto, SEO locale Maps e post automatici per attirare chiamate.' },
            { title: 'Moduli intelligenti', desc: 'Trasforma i visitatori in contatti qualificati con moduli dinamici e CTA WhatsApp.' },
            { title: 'Contenuto automatico', desc: 'Generazione e pubblicazione automatica di articoli SEO, post social e newsletter.' },
            { title: 'Dashboard & Analytics', desc: 'Visualizza le tue richieste, prenotazioni, chiamate e prestazioni in uno spazio semplice.' },
            { title: 'SEO Locale Avanzato', desc: 'Posizionamento superiore sulle parole chiave strategiche del tuo settore.' }
          ]
        }
      }
    },
    improvements: {
      title: "Risultati concreti per i nostri clienti",
      subtitle: "Non sono promesse — sono i risultati reali dei nostri primi partner locali.",
      features: [
        { title: "+120%", desc: "di chiamate e richieste ricevute in media dopo 30 giorni con un sito ottimizzato e Google Business." },
        { title: "-80%", desc: "di lavoro manuale eliminato grazie a prenotazioni automatiche, promemoria e moduli intelligenti." },
        { title: "4.9 ★", desc: "valutazione media ottenuta dai nostri clienti grazie alla richiesta automatica di recensioni Google." },
        { title: "24/7", desc: "la tua attività acquisisce contatti giorno e notte grazie all'IA e ai moduli sempre attivi." }
      ],
      automation: {
        badge: "TESTIMONIANZA",
        title: "Richiedi il tuo audit gratuito",
        desc: "Da quando Aivello ha rifatto il nostro sito e configurato le prenotazioni automatiche, non perdo più tempo al telefono. I clienti prenotano da soli e io ricevo una notifica. È incredibile.",
        highlight: "Marie L. — Salone di parrucchiera, Losanna",
        highlightDesc: "Cliente Aivello da 3 mesi"
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
      },
      bakeries: {
        title: "Per panetterie & pasticcerie",
        features: ["Vetrina dei prodotti", "Modulo ordine torte", "Pulsante Click & Collect", "Chatbot IA per domande", "Orari Google sempre aggiornati"]
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
      subtitle: 'Offerta speciale di lancio: sito con assistente IA e configurazione standard a CHF 350.',
      whyTitle: 'Perché?',
      whyDesc: 'Le nostre offerte sono pensate per piccole imprese che vogliono partire rapidamente con un budget chiaro.',
      footer: 'Il pacchetto promo include sito, assistente IA, impostazioni essenziali e connessioni base per ricevere richieste.',
      promoBadge: 'PROMO CHF 350',
      starter: {
        title: 'Sito Promo + Assistente IA',
        price: '350',
        originalPrice: '490',
        note: 'Sito + IA + configurazione standard inclusi',
        desc: 'Per lanciare rapidamente una presenza professionale con un assistente IA pronto a rispondere ai visitatori.',
        features: ['Sito one-page moderno', 'Assistente IA integrato', 'Configurazione standard inclusa', 'Pulsanti chiamata/WhatsApp', 'Google Maps + modulo', 'SEO locale di base'],
        cta: 'Approfitta della promo'
      },
      business: {
        title: 'Business Growth',
        price: '690',
        desc: 'Per un\'attività locale che vuole più pagine, più fiducia e più richieste.',
        features: ['Sito da 3 a 5 pagine', 'Design professionale', 'Ottimizzazione conversione', 'Google Analytics', 'Struttura SEO locale', 'Google Business Profile ottimizzato'],
        cta: 'Richiedi Business'
      },
      premium: {
        title: 'AI Premium',
        price: '1’190',
        desc: 'Per un\'azienda che vuole un sito moderno con IA e automazione.',
        features: ['Sito da 5 a 8 pagine', 'Multilingue', 'Assistente IA avanzato', 'Automazione n8n', 'Notifiche WhatsApp', 'Supporto post-lancio'],
        cta: 'Richiedi AI Premium'
      },
      audit: { title: 'Audit Express', price: '0', desc: 'Analisi rapida della tua presenza online e delle priorità.', cta: 'Ricevi l’audit' },
      n8n: { title: 'WhatsApp & Prenotazioni', price: '150', desc: 'Pulsanti, modulo semplice e notifiche per non perdere richieste.', cta: 'Aggiungi modulo' },
      bot: { title: 'IA Avanzata', price: '190', desc: 'FAQ, testi aziendali e risposte personalizzate nell’assistente.', cta: 'Migliora l’IA' }
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
    terms: {
      title: 'Termini di utilizzo',
      intro: 'Utilizzando questo sito, accetti questi termini generali.',
      usage: 'Uso del sito',
      usageDesc: 'Il sito presenta i servizi Aivello e permette di richiedere un audit o un contatto.',
      liability: 'Responsabilità',
      liabilityDesc: 'Le informazioni sono fornite a titolo indicativo e possono essere aggiornate senza preavviso.',
      termination: 'Sospensione',
      terminationDesc: 'Possiamo limitare l’accesso in caso di uso abusivo o non autorizzato.',
      governingLaw: 'Legge applicabile',
      governingLawDesc: 'Questi termini sono regolati dal diritto svizzero, cantone Vaud.'
    },
    privacy: {
      title: 'Informativa sulla privacy',
      intro: 'Trattiamo i dati solo per rispondere alle richieste e migliorare i servizi.',
      dataCollected: 'Dati raccolti',
      dataUse: 'Uso dei dati',
      thirdParties: 'Servizi di terze parti',
      rights: 'I tuoi diritti',
      contact: 'Contatto',
      email: 'Email'
    },
    legal: {
      title: 'Note legali',
      intro: 'Informazioni legali su Aivello.',
      companyName: 'Nome azienda',
      address: 'Indirizzo',
      registrationNumber: 'Numero di registrazione',
      vatNumber: 'Numero IVA',
      email: 'Email',
      phone: 'Telefono'
    },
    cookieBanner: {
      title: 'Politica dei cookie',
      description: 'Utilizziamo cookie per migliorare la tua esperienza e analizzare il traffico.',
      acceptAll: 'Accetta tutto',
      rejectAll: 'Rifiuta tutto',
      customize: 'Personalizza',
      policyLink: 'Politica dei cookie'
    },
    footer: {
      desc: 'Aivello aiuta le piccole imprese locali a usare il web, l\'intelligenza artificiale e l\'automazione senza complessità inutile.',
    },
    chatbot: {
      greeting: 'Buongiorno! Sono l\'assistente Aivello. Come posso aiutare la tua attività oggi?',
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
      promo: 'Sonderangebot: Website mit KI-Assistent und Standard-Einrichtung für CHF 350.',
    },
    categories: {
      title: 'Für wen ist das?',
      restaurants: { title: 'Restaurants & Cafés', problem: 'Manuelle Reservierungen und ständige Anrufe.', solution: 'Website + Online-Buchung + Auto-Bestätigung.' },
      salons: { title: 'Schönheitssalons', problem: 'Kunden schreiben überall, Papierpläne.', solution: 'Website + WhatsApp-Erinnerungen + CRM.' },
      artisans: { title: 'Handwerker & Renovierung', problem: 'Keine Sichtbarkeit, verlorene Angebote.', solution: 'Profi-Website + Galerie + Smart-Formular.' },
      garages: { title: 'Garagen / Werkstätten', problem: 'Chaotische Terminvereinbarungen per Telefon.', solution: 'Mobile Website + Kalender + Kundenverwaltung.' },
      bakeries: { title: 'Bäckereien & Konditoreien', problem: 'Manuelle Bestellungen, wiederkehrende Fragen.', solution: 'Website + Online-Bestellung + KI-Chatbot.' },
    },
    services: {
      title: 'Unsere Leistungen',
      categories: {
        web: {
          title: 'Moderne Websites',
          items: [
            { title: 'Landingpages', desc: 'Ultraschnelle Landingpages, um Ihre Conversions zu maximieren.' },
            { title: 'Visitenkarten-Websites', desc: 'Präsentieren Sie Ihr Unternehmen und Ihre Projekte professionell.' },
            { title: 'Mobile-First-Design', desc: 'Flüssige und schnelle Navigation für alle Smartphone-Bildschirme.' },
            { title: 'Basis-Lokales SEO', desc: 'Optimierte technische Struktur für Sichtbarkeit in Ihrer Region.' }
          ]
        },
        automation: {
          title: 'Automatisierung & KI',
          items: [
            { title: 'Eigener KI-Assistent', desc: 'Mit Ihren Informationen und FAQs verbundener Assistent für Kunden und Team.' },
            { title: 'KI-Chatbot für Website', desc: 'Ein moderner Chatbot, der rund um die Uhr Fragen beantwortet und Leads erfasst.' },
            { title: 'Intelligente Buchungen', desc: 'Automatische Bestätigungen, WhatsApp-Erinnerungen und Google Calendar-Abgleich.' },
            { title: 'n8n-Automatisierung', desc: 'Verbindung Ihrer Tools zur Eliminierung wiederkehrender Aufgaben.' },
            { title: 'Einfaches CRM', desc: 'Einfache Verfolgung und Zentralisierung aller Kundenanfragen.' }
          ]
        },
        acquisition: {
          title: 'Kundengewinnung',
          items: [
            { title: 'Google Business Profile', desc: 'Fotos, lokales Maps-SEO und automatische Beiträge für mehr Anrufe.' },
            { title: 'Intelligente Formulare', desc: 'Gewinnen Sie Leads mit dynamischen Formulare und WhatsApp-CTAs.' },
            { title: 'Automatische Inhalte', desc: 'Automatische Erstellung und Veröffentlichung von SEO-Artikeln, Social-Media-Posts und Newslettern.' },
            { title: 'Dashboard & Analysen', desc: 'Visualisieren Sie Anfragen, Buchungen, Anrufe und Leistung in einem einfachen Dashboard.' },
            { title: 'Erweitertes Lokales SEO', desc: 'Spitzenplatzierungen bei den strategischen Suchbegriffen Ihrer Branche.' }
          ]
        }
      }
    },
    improvements: {
      title: "Der Aivello-Effekt: Ihr Unternehmen auf Autopilot",
      subtitle: "Vergessen Sie wiederkehrende Aufgaben. Konzentrieren Sie sich auf das, was Sie am besten können, unsere Technologie erledigt den Rest.",
      features: [
        { title: "24/7 Buchungen", desc: "Ihr Kalender füllt sich von selbst, Tag und Nacht, ohne dass Sie einen Finger rühren müssen." },
        { title: "Keine verlorenen Kunden", desc: "Unsere KI beantwortet sofort die Fragen Ihrer Interessenten und erfasst deren Kontaktdaten." },
        { title: "Maximale Sichtbarkeit", desc: "Dominieren Sie lokale Suchanfragen. Wenn Leute nach Ihrem Service suchen, sind Sie die Ersten, die sie finden." },
        { title: "Automatisiertes Follow-up", desc: "Keine manuellen Erinnerungen mehr. Ihre Kunden erhalten automatische Erinnerungen per SMS oder WhatsApp." }
      ],
      automation: {
        badge: "SORGENFREI",
        title: "Unsichtbare Technologie, sichtbare Ergebnisse",
        desc: "Wir kümmern uns um die gesamte technische Einrichtung. Sie erhalten einfach Benachrichtigungen über neue Kunden direkt auf Ihr Telefon.",
        highlight: "Kein Fachjargon",
        highlightDesc: "Sie müssen nichts einrichten oder lernen. Wir verwalten alles."
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
      },
      bakeries: {
        title: "Für Bäckereien & Konditoreien",
        features: ["Produktpräsentation", "Bestellformular für Torten", "Click & Collect Button", "KI-Chatbot für Fragen", "Immer aktuelle Google-Öffnungszeiten"]
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
      subtitle: 'Sonderangebot zum Start: Website mit KI-Assistent und Standard-Einrichtung für CHF 350.',
      whyTitle: 'Warum?',
      whyDesc: 'Unsere Angebote sind für Kleinunternehmen gedacht, die schnell mit klarem Budget und ohne technische Komplexität starten möchten.',
      footer: 'Das Promo-Paket enthält Website, KI-Assistent, wichtige Einstellungen und Basis-Verbindungen für neue Anfragen.',
      promoBadge: 'PROMO CHF 350',
      starter: {
        title: 'Promo-Website + KI-Assistent',
        price: '350',
        originalPrice: '490',
        note: 'Website + KI + Standard-Einrichtung inklusive',
        desc: 'Für einen schnellen professionellen Start mit einem KI-Assistenten, der Besucherfragen beantwortet.',
        features: ['Moderne One-Page-Website', 'Integrierter KI-Assistent', 'Standard-Einrichtung inklusive', 'Anruf-/WhatsApp-Schaltflächen', 'Google Maps + Formular', 'Basis-Lokales SEO'],
        cta: 'Promo anfragen'
      },
      business: {
        title: 'Business Growth',
        price: '690',
        desc: 'Für lokale Unternehmen, die mehr Seiten, mehr Vertrauen und mehr Anfragen brauchen.',
        features: ['Website mit 3 bis 5 Seiten', 'Professionelles Design', 'Conversion-Optimierung', 'Google Analytics', 'Lokale SEO-Struktur', 'Optimiertes Google Business Profile'],
        cta: 'Business anfragen'
      },
      premium: {
        title: 'AI Premium',
        price: '1’190',
        desc: 'Für Unternehmen, die eine moderne Website mit KI und Automatisierung möchten.',
        features: ['Website mit 5 bis 8 Seiten', 'Mehrsprachig', 'Erweiterter KI-Assistent', 'n8n-Automatisierung', 'WhatsApp-Benachrichtigungen', 'Support nach dem Launch'],
        cta: 'AI Premium anfragen'
      },
      audit: { title: 'Express-Audit', price: '0', desc: 'Schnelle Analyse Ihrer Online-Präsenz und Prioritäten.', cta: 'Audit erhalten' },
      n8n: { title: 'WhatsApp & Buchung', price: '150', desc: 'Schaltflächen, einfaches Formular und Benachrichtigungen, damit keine Anfrage verloren geht.', cta: 'Modul hinzufügen' },
      bot: { title: 'Erweiterte KI', price: '190', desc: 'FAQ, Geschäftstexte und individuelle Antworten im Assistenten.', cta: 'KI verbessern' }
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
    terms: {
      title: 'Nutzungsbedingungen',
      intro: 'Mit der Nutzung dieser Website akzeptieren Sie diese allgemeinen Bedingungen.',
      usage: 'Nutzung der Website',
      usageDesc: 'Die Website präsentiert Aivello-Dienstleistungen und ermöglicht Audit- oder Kontaktanfragen.',
      liability: 'Haftung',
      liabilityDesc: 'Die Informationen dienen zur Orientierung und können ohne Vorankündigung aktualisiert werden.',
      termination: 'Sperrung',
      terminationDesc: 'Wir können den Zugriff bei missbräuchlicher oder unbefugter Nutzung einschränken.',
      governingLaw: 'Anwendbares Recht',
      governingLawDesc: 'Diese Bedingungen unterliegen schweizerischem Recht, Kanton Waadt.'
    },
    privacy: {
      title: 'Datenschutzerklärung',
      intro: 'Wir verarbeiten Daten nur, um Anfragen zu beantworten und unsere Dienste zu verbessern.',
      dataCollected: 'Erhobene Daten',
      dataUse: 'Verwendung der Daten',
      thirdParties: 'Drittanbieter',
      rights: 'Ihre Rechte',
      contact: 'Kontakt',
      email: 'E-Mail'
    },
    legal: {
      title: 'Impressum',
      intro: 'Rechtliche Informationen zu Aivello.',
      companyName: 'Firmenname',
      address: 'Adresse',
      registrationNumber: 'Registrierungsnummer',
      vatNumber: 'MwSt.-Nummer',
      email: 'E-Mail',
      phone: 'Telefon'
    },
    cookieBanner: {
      title: 'Cookie-Richtlinie',
      description: 'Wir verwenden Cookies, um Ihre Erfahrung zu verbessern und den Traffic zu analysieren.',
      acceptAll: 'Alle akzeptieren',
      rejectAll: 'Alle ablehnen',
      customize: 'Anpassen',
      policyLink: 'Cookie-Richtlinie'
    },
    footer: {
      desc: 'Aivello hilft kleinen lokalen Unternehmen, das Web, künstliche Intelligenz und Automatisierung ohne unnötige Komplexität zu nutzen.',
    },
    chatbot: {
      greeting: 'Hallo! Ich bin der Aivello Assistent. Wie kann ich Ihrem Unternehmen heute helfen?',
      ctaAudit: 'Gratis Audit erhalten',
      ctaContact: 'Kontaktdaten hinterlassen',
      error: 'Entschuldigung, es ist ein Fehler aufgetreten.',
      placeholder: 'Ihre Frage...',
    }
  }
};
