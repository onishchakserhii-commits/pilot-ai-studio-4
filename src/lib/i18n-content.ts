export type Language = 'fr' | 'en' | 'ua' | 'it' | 'de';

export const content = {
  fr: {
    nav: {
      home: 'Accueil',
      about: 'À propos',
      services: 'Services',
      pricing: 'Tarifs',
      contact: 'Contact',
      blog: 'Blog',
      login: 'Connexion',
      dashboard: 'Tableau de bord',
    },
    about: {
      title: 'À propos de nous',
      subtitle: 'Découvrez Pilot AI Studio et notre mission.',
      missionTitle: 'Notre mission',
      missionDesc: 'Nous aidons les entreprises locales en Suisse à utiliser les technologies web modernes et l\'intelligence artificielle pour optimiser leurs processus et attirer de nouveaux clients sans complexité technique.',
      contactTitle: 'Contactez-nous',
      contactDesc: 'Scannez le QR code pour nous écrire sur Telegram, ou utilisez nos autres canaux de communication.',
      certTitle: 'Certifications',
      certDesc: 'Nous améliorons continuellement nos compétences pour vous offrir les meilleures solutions IA pour votre entreprise.',
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
      title: 'Créez votre propre Chatbot IA et Mini-CRM en quelques minutes.',
      subtitle: 'La plateforme SaaS tout-en-un pour créer des chatbots intelligents, gérer vos clients et automatiser votre activité — sans coder.',
      ctaPrimary: 'Commencer gratuitement',
      ctaSecondary: 'Voir la démo',
      tagline: 'L\'IA au service de votre croissance.',
      promo: '',
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
      title: 'Nos Fonctionnalités',
      categories: {
        web: {
          title: 'Créateur de Chatbot',
          items: [
            { title: 'Chatbot IA sur mesure', desc: 'Créez un assistant IA entraîné sur vos propres données et documents.' },
            { title: 'Réponses instantanées', desc: 'Votre chatbot répond aux questions de vos clients 24h/24 et 7j/7.' },
            { title: 'Personnalisation', desc: 'Adaptez l\'apparence et le comportement du chatbot à votre marque.' },
            { title: 'Multilingue', desc: 'Communiquez avec vos clients dans plus de 50 langues automatiquement.' }
          ]
        },
        automation: {
          title: 'Mini-CRM Intégré',
          items: [
            { title: 'Gestion des prospects', desc: 'Capturez et organisez automatiquement les leads générés par votre chatbot.' },
            { title: 'Historique des conversations', desc: 'Accédez à l\'historique complet des échanges avec vos clients.' },
            { title: 'Segmentation', desc: 'Classez vos contacts par tags et créez des listes ciblées.' },
            { title: 'Notifications en temps réel', desc: 'Soyez alerté par email ou WhatsApp lors d\'une demande importante.' }
          ]
        },
        acquisition: {
          title: 'Intégration Simple',
          items: [
            { title: 'Widget pour site web', desc: 'Ajoutez le chatbot à votre site en copiant-collant une seule ligne de code.' },
            { title: 'Lien partagé', desc: 'Partagez une page de chat dédiée avec vos clients via WhatsApp ou email.' },
            { title: 'API & Webhooks', desc: 'Connectez facilement vos données à vos outils existants.' },
            { title: 'Analytique', desc: 'Suivez les performances de votre chatbot et l\'engagement de vos utilisateurs.' }
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
      subtitle: '',
      whyTitle: 'Pourquoi ?',
      whyDesc: 'Nos offres sont pensées pour les petites entreprises qui veulent commencer vite, avec un budget clair et sans complexité.',
      footer: '',
      promoBadge: '',
      starter: {
        title: 'Gratuit',
        price: '0',
        originalPrice: '',
        note: 'Pour tester la plateforme',
        desc: 'Créez votre premier chatbot gratuitement et découvrez la puissance de l\'IA.',
        features: ['1 Chatbot IA', '100 messages / mois', 'Mini-CRM de base', 'Intégration site web', 'Support communautaire'],
        cta: 'Commencer gratuitement'
      },
      business: {
        title: 'Pro',
        price: '49',
        desc: 'Pour les professionnels qui souhaitent automatiser leur service client.',
        features: ['3 Chatbots IA', '2 000 messages / mois', 'Mini-CRM avancé', 'Personnalisation complète', 'Export de données', 'Support prioritaire'],
        cta: 'Passer en Pro'
      },
      premium: {
        title: 'Enterprise',
        price: '199',
        desc: 'Pour les entreprises ayant des besoins complexes et un fort volume.',
        features: ['Chatbots illimités', 'Messages illimités', 'Accès API & Webhooks', 'Marque blanche', 'Gestion d\'équipe', 'Gestionnaire de compte dédié'],
        cta: 'Contacter les ventes'
      },
      audit: { title: '', price: '', desc: '', cta: '' },
      n8n: { title: '', price: '', desc: '', cta: '' },
      bot: { title: '', price: '', desc: '', cta: '' }
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
      about: 'About Us',
      services: 'Services',
      pricing: 'Pricing',
      contact: 'Contact',
      blog: 'Blog',
      login: 'Login',
      dashboard: 'Dashboard',
    },
    about: {
      title: 'About Us',
      subtitle: 'Learn more about Pilot AI Studio and our mission.',
      missionTitle: 'Our Mission',
      missionDesc: 'We help local businesses in Switzerland use modern web technologies and artificial intelligence to optimize their processes and attract new clients without technical complexity.',
      contactTitle: 'Get in Touch',
      contactDesc: 'Scan the QR code to message us on Telegram, or use our other communication channels.',
      certTitle: 'Certifications',
      certDesc: 'We continuously upgrade our skills to provide the best AI solutions for your business.',
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
      title: 'Build your own AI Chatbot & CRM in minutes.',
      subtitle: 'The all-in-one SaaS platform to create smart chatbots, manage your clients, and automate your business — without coding.',
      ctaPrimary: 'Start for free',
      ctaSecondary: 'Watch demo',
      tagline: 'AI powering your growth.',
      promo: '',
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
      title: 'Our Features',
      categories: {
        web: {
          title: 'Chatbot Builder',
          items: [
            { title: 'Custom AI Chatbot', desc: 'Create an AI assistant trained on your own data and documents.' },
            { title: 'Instant answers', desc: 'Your chatbot answers your clients\' questions 24/7.' },
            { title: 'Customization', desc: 'Adapt the look and feel of the chatbot to match your brand.' },
            { title: 'Multilingual', desc: 'Communicate with your clients in over 50 languages automatically.' }
          ]
        },
        automation: {
          title: 'Mini-CRM Integrated',
          items: [
            { title: 'Lead management', desc: 'Automatically capture and organize leads generated by your chatbot.' },
            { title: 'Conversation history', desc: 'Access the complete history of chats with your customers.' },
            { title: 'Segmentation', desc: 'Categorize your contacts by tags and create targeted lists.' },
            { title: 'Real-time notifications', desc: 'Get alerted via email or WhatsApp for important requests.' }
          ]
        },
        acquisition: {
          title: 'Easy Integration',
          items: [
            { title: 'Website Widget', desc: 'Embed the chatbot on your site by copying and pasting a single line of code.' },
            { title: 'Shared link', desc: 'Share a dedicated chat page with your clients via WhatsApp or email.' },
            { title: 'API & Webhooks', desc: 'Easily connect your data to your existing tools.' },
            { title: 'Analytics', desc: 'Track your chatbot\'s performance and user engagement.' }
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
      title: 'Pricing Plans',
      subtitle: '',
      whyTitle: 'Simple pricing',
      whyDesc: 'Our plans are designed for businesses of all sizes, with clear monthly subscriptions.',
      footer: '',
      promoBadge: '',
      starter: {
        title: 'Free',
        price: '0',
        originalPrice: '',
        note: 'To test the platform',
        desc: 'Create your first chatbot for free and discover the power of AI.',
        features: ['1 AI Chatbot', '100 messages / month', 'Basic Mini-CRM', 'Website integration', 'Community support'],
        cta: 'Start for free'
      },
      business: {
        title: 'Pro',
        price: '49',
        desc: 'For professionals looking to automate their customer service.',
        features: ['3 AI Chatbots', '2,000 messages / month', 'Advanced Mini-CRM', 'Full customization', 'Data export', 'Priority support'],
        cta: 'Upgrade to Pro'
      },
      premium: {
        title: 'Enterprise',
        price: '199',
        desc: 'For businesses with complex needs and high volume.',
        features: ['Unlimited Chatbots', 'Unlimited messages', 'API & Webhooks access', 'White-label', 'Team management', 'Dedicated account manager'],
        cta: 'Contact Sales'
      },
      audit: { title: '', price: '', desc: '', cta: '' },
      n8n: { title: '', price: '', desc: '', cta: '' },
      bot: { title: '', price: '', desc: '', cta: '' }
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
      about: 'Про нас',
      services: 'Послуги',
      pricing: 'Ціни',
      contact: 'Контакти',
      blog: 'Блог',
      login: 'Увійти',
      dashboard: 'Панель керування',
    },
    about: {
      title: 'Про нас',
      subtitle: 'Дізнайтеся більше про Pilot AI Studio та нашу місію.',
      missionTitle: 'Наша місія',
      missionDesc: 'Ми допомагаємо локальному бізнесу в Швейцарії використовувати сучасні веб-технології та штучний інтелект для оптимізації процесів та залучення нових клієнтів без зайвої технічної складності.',
      contactTitle: 'Зв\'яжіться з нами',
      contactDesc: 'Відскануйте QR-код, щоб написати нам у Telegram, або скористайтеся нашими іншими каналами зв\'язку.',
      certTitle: 'Сертифікати',
      certDesc: 'Ми постійно вдосконалюємо свої навички, щоб надавати найкращі ШІ-рішення для вашого бізнесу.',
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
      title: 'Створіть свій власний AI Чатбот та CRM за лічені хвилини.',
      subtitle: 'Єдина SaaS-платформа для створення розумних чатботів, керування клієнтами та автоматизації бізнесу — без програмування.',
      ctaPrimary: 'Почати безкоштовно',
      ctaSecondary: 'Дивитись демо',
      tagline: 'ШІ для вашого зростання.',
      promo: '',
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
      title: 'Наші Можливості',
      categories: {
        web: {
          title: 'Конструктор Чатботів',
          items: [
            { title: 'Власний AI Чатбот', desc: 'Створіть ШІ-асистента, навченого на ваших власних даних та документах.' },
            { title: 'Миттєві відповіді', desc: 'Ваш чатбот відповідає на запитання клієнтів 24/7.' },
            { title: 'Персоналізація', desc: 'Адаптуйте зовнішній вигляд та поведінку чатбота під ваш бренд.' },
            { title: 'Мультимовність', desc: 'Автоматично спілкуйтеся з клієнтами більш ніж 50 мовами.' }
          ]
        },
        automation: {
          title: 'Вбудована Міні-CRM',
          items: [
            { title: 'Керування лідами', desc: 'Автоматично збирайте та впорядковуйте заявки, згенеровані вашим чатботом.' },
            { title: 'Історія розмов', desc: 'Отримайте доступ до повної історії спілкування з вашими клієнтами.' },
            { title: 'Сегментація', desc: 'Групуйте контакти за тегами та створюйте цільові списки.' },
            { title: 'Сповіщення в реальному часі', desc: 'Отримуйте сповіщення на email або WhatsApp про важливі запити.' }
          ]
        },
        acquisition: {
          title: 'Проста Інтеграція',
          items: [
            { title: 'Віджет для сайту', desc: 'Додайте чатбота на свій сайт, скопіювавши лише один рядок коду.' },
            { title: 'Спільне посилання', desc: 'Діліться окремою сторінкою чату з клієнтами через WhatsApp або email.' },
            { title: 'API та Webhooks', desc: 'Легко підключайте ваші дані до існуючих інструментів.' },
            { title: 'Аналітика', desc: 'Відстежуйте ефективність чатбота та залученість користувачів.' }
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
      title: 'Тарифи',
      subtitle: '',
      whyTitle: 'Прозорі ціни',
      whyDesc: 'Наші тарифи створені для бізнесу будь-якого розміру зі зрозумілою щомісячною підпискою.',
      footer: '',
      promoBadge: '',
      starter: {
        title: 'Безкоштовний',
        price: '0',
        originalPrice: '',
        note: 'Для тестування платформи',
        desc: 'Створіть свій перший чатбот безкоштовно та відкрийте для себе силу ШІ.',
        features: ['1 AI Чатбот', '100 повідомлень / місяць', 'Базова Міні-CRM', 'Інтеграція на сайт', 'Підтримка спільноти'],
        cta: 'Почати безкоштовно'
      },
      business: {
        title: 'Pro',
        price: '49',
        desc: 'Для професіоналів, які хочуть автоматизувати підтримку клієнтів.',
        features: ['3 AI Чатботи', '2 000 повідомлень / місяць', 'Розширена Міні-CRM', 'Повна персоналізація', 'Експорт даних', 'Пріоритетна підтримка'],
        cta: 'Перейти на Pro'
      },
      premium: {
        title: 'Enterprise',
        price: '199',
        desc: 'Для компаній зі складними потребами та великим обсягом.',
        features: ['Необмежені Чатботи', 'Необмежені повідомлення', 'Доступ до API та Webhooks', 'White-label', 'Керування командою', 'Особистий менеджер'],
        cta: 'Зв\'язатися з відділом продажу'
      },
      audit: { title: '', price: '', desc: '', cta: '' },
      n8n: { title: '', price: '', desc: '', cta: '' },
      bot: { title: '', price: '', desc: '', cta: '' }
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
      about: 'Chi siamo',
      services: 'Servizi',
      pricing: 'Prezzi',
      contact: 'Contatti',
      blog: 'Blog',
      login: 'Accedi',
      dashboard: 'Dashboard',
    },
    about: {
      title: 'Chi siamo',
      subtitle: 'Scopri di più su Pilot AI Studio e la nostra missione.',
      missionTitle: 'La nostra missione',
      missionDesc: 'Aiutiamo le imprese locali in Svizzera a utilizzare le moderne tecnologie web e l\'intelligenza artificiale per ottimizzare i processi e attrarre nuovi clienti senza complessità tecniche.',
      contactTitle: 'Contattaci',
      contactDesc: 'Scansiona il codice QR per scriverci su Telegram o utilizza i nostri altri canali di comunicazione.',
      certTitle: 'Certificazioni',
      certDesc: 'Miglioriamo costantemente le nostre competenze per offrirti le migliori soluzioni IA per la tua attività.',
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
      title: 'Crea il tuo Chatbot IA & CRM in pochi minuti.',
      subtitle: 'La piattaforma SaaS all-in-one per creare chatbot intelligenti, gestire i clienti e automatizzare la tua attività — senza codice.',
      ctaPrimary: 'Inizia gratuitamente',
      ctaSecondary: 'Guarda la demo',
      tagline: 'L\'IA per la tua crescita.',
      promo: '',
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
      title: 'Le Nostre Funzionalità',
      categories: {
        web: {
          title: 'Costruttore di Chatbot',
          items: [
            { title: 'Chatbot IA su misura', desc: 'Crea un assistente IA addestrato sui tuoi dati e documenti.' },
            { title: 'Risposte immediate', desc: 'Il tuo chatbot risponde alle domande dei clienti 24/7.' },
            { title: 'Personalizzazione', desc: 'Adatta l\'aspetto e il comportamento del chatbot al tuo marchio.' },
            { title: 'Multilingua', desc: 'Comunica automaticamente con i tuoi clienti in oltre 50 lingue.' }
          ]
        },
        automation: {
          title: 'Mini-CRM Integrato',
          items: [
            { title: 'Gestione lead', desc: 'Acquisisci e organizza automaticamente i contatti generati dal tuo chatbot.' },
            { title: 'Cronologia conversazioni', desc: 'Accedi alla cronologia completa delle chat con i tuoi clienti.' },
            { title: 'Segmentazione', desc: 'Classifica i tuoi contatti tramite tag e crea elenchi mirati.' },
            { title: 'Notifiche in tempo reale', desc: 'Ricevi avvisi via email o WhatsApp per richieste importanti.' }
          ]
        },
        acquisition: {
          title: 'Integrazione Semplice',
          items: [
            { title: 'Widget per sito web', desc: 'Aggiungi il chatbot al tuo sito copiando e incollando una sola riga di codice.' },
            { title: 'Link condiviso', desc: 'Condividi una pagina di chat dedicata con i tuoi clienti tramite WhatsApp o email.' },
            { title: 'API & Webhooks', desc: 'Collega facilmente i tuoi dati agli strumenti esistenti.' },
            { title: 'Analitica', desc: 'Monitora le prestazioni del tuo chatbot e il coinvolgimento degli utenti.' }
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
      title: 'Piani Tariffari',
      subtitle: '',
      whyTitle: 'Prezzi semplici',
      whyDesc: 'I nostri piani sono pensati per aziende di tutte le dimensioni, con abbonamenti mensili chiari.',
      footer: '',
      promoBadge: '',
      starter: {
        title: 'Gratuito',
        price: '0',
        originalPrice: '',
        note: 'Per testare la piattaforma',
        desc: 'Crea il tuo primo chatbot gratuitamente e scopri la potenza dell\'IA.',
        features: ['1 Chatbot IA', '100 messaggi / mese', 'Mini-CRM di base', 'Integrazione sito web', 'Supporto community'],
        cta: 'Inizia gratuitamente'
      },
      business: {
        title: 'Pro',
        price: '49',
        desc: 'Per i professionisti che desiderano automatizzare il servizio clienti.',
        features: ['3 Chatbot IA', '2.000 messaggi / mese', 'Mini-CRM avanzato', 'Personalizzazione completa', 'Esportazione dati', 'Supporto prioritario'],
        cta: 'Passa a Pro'
      },
      premium: {
        title: 'Enterprise',
        price: '199',
        desc: 'Per le aziende con esigenze complesse e volumi elevati.',
        features: ['Chatbot illimitati', 'Messaggi illimitati', 'Accesso API & Webhooks', 'White-label', 'Gestione team', 'Account manager dedicato'],
        cta: 'Contatta le vendite'
      },
      audit: { title: '', price: '', desc: '', cta: '' },
      n8n: { title: '', price: '', desc: '', cta: '' },
      bot: { title: '', price: '', desc: '', cta: '' }
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
      about: 'Über uns',
      services: 'Leistungen',
      pricing: 'Preise',
      contact: 'Kontakt',
      blog: 'Blog',
      login: 'Anmelden',
      dashboard: 'Dashboard',
    },
    about: {
      title: 'Über uns',
      subtitle: 'Erfahren Sie mehr über Pilot AI Studio und unsere Mission.',
      missionTitle: 'Unsere Mission',
      missionDesc: 'Wir helfen lokalen Unternehmen in der Schweiz, moderne Webtechnologien und künstliche Intelligenz zu nutzen, um ihre Prozesse zu optimieren und neue Kunden zu gewinnen, ohne technische Komplexität.',
      contactTitle: 'Kontaktieren Sie uns',
      contactDesc: 'Scannen Sie den QR-Code, um uns auf Telegram zu schreiben, oder nutzen Sie unsere anderen Kommunikationskanäle.',
      certTitle: 'Zertifizierungen',
      certDesc: 'Wir verbessern unsere Fähigkeiten kontinuierlich, um Ihnen die besten KI-Lösungen für Ihr Unternehmen anzubieten.',
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
      title: 'Erstellen Sie Ihren eigenen KI-Chatbot & CRM in wenigen Minuten.',
      subtitle: 'Die All-in-One-SaaS-Plattform zur Erstellung intelligenter Chatbots, Verwaltung Ihrer Kunden und Automatisierung Ihres Unternehmens — ohne Programmieren.',
      ctaPrimary: 'Kostenlos starten',
      ctaSecondary: 'Demo ansehen',
      tagline: 'KI für Ihr Wachstum.',
      promo: '',
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
      title: 'Unsere Funktionen',
      categories: {
        web: {
          title: 'Chatbot Builder',
          items: [
            { title: 'Eigener KI-Chatbot', desc: 'Erstellen Sie einen KI-Assistenten, der mit Ihren eigenen Daten und Dokumenten trainiert wurde.' },
            { title: 'Sofortige Antworten', desc: 'Ihr Chatbot beantwortet die Fragen Ihrer Kunden rund um die Uhr.' },
            { title: 'Personalisierung', desc: 'Passen Sie das Aussehen und Verhalten des Chatbots an Ihre Marke an.' },
            { title: 'Mehrsprachig', desc: 'Kommunizieren Sie automatisch in über 50 Sprachen mit Ihren Kunden.' }
          ]
        },
        automation: {
          title: 'Integriertes Mini-CRM',
          items: [
            { title: 'Lead-Management', desc: 'Erfassen und organisieren Sie automatisch die von Ihrem Chatbot generierten Leads.' },
            { title: 'Chat-Verlauf', desc: 'Greifen Sie auf den vollständigen Verlauf der Chats mit Ihren Kunden zu.' },
            { title: 'Segmentierung', desc: 'Kategorisieren Sie Ihre Kontakte mit Tags und erstellen Sie zielgerichtete Listen.' },
            { title: 'Echtzeit-Benachrichtigungen', desc: 'Erhalten Sie bei wichtigen Anfragen Benachrichtigungen per E-Mail oder WhatsApp.' }
          ]
        },
        acquisition: {
          title: 'Einfache Integration',
          items: [
            { title: 'Website-Widget', desc: 'Fügen Sie den Chatbot in Ihre Website ein, indem Sie nur eine Codezeile kopieren und einfügen.' },
            { title: 'Geteilter Link', desc: 'Teilen Sie eine dedizierte Chat-Seite über WhatsApp oder E-Mail mit Ihren Kunden.' },
            { title: 'API & Webhooks', desc: 'Verbinden Sie Ihre Daten einfach mit Ihren vorhandenen Tools.' },
            { title: 'Analytik', desc: 'Verfolgen Sie die Leistung Ihres Chatbots und das Nutzerengagement.' }
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
      title: 'Preise & Angebote',
      subtitle: '',
      whyTitle: 'Einfache Preise',
      whyDesc: 'Unsere Angebote sind für Unternehmen jeder Größe konzipiert, mit klaren monatlichen Abonnements.',
      footer: '',
      promoBadge: '',
      starter: {
        title: 'Kostenlos',
        price: '0',
        originalPrice: '',
        note: 'Zum Testen der Plattform',
        desc: 'Erstellen Sie Ihren ersten Chatbot kostenlos und entdecken Sie die Möglichkeiten der KI.',
        features: ['1 KI-Chatbot', '100 Nachrichten / Monat', 'Basis Mini-CRM', 'Website-Integration', 'Community-Support'],
        cta: 'Kostenlos starten'
      },
      business: {
        title: 'Pro',
        price: '49',
        desc: 'Für Profis, die ihren Kundenservice automatisieren möchten.',
        features: ['3 KI-Chatbots', '2.000 Nachrichten / Monat', 'Erweitertes Mini-CRM', 'Volle Personalisierung', 'Datenexport', 'Priorisierter Support'],
        cta: 'Auf Pro upgraden'
      },
      premium: {
        title: 'Enterprise',
        price: '199',
        desc: 'Für Unternehmen mit komplexen Anforderungen und hohem Volumen.',
        features: ['Unbegrenzte Chatbots', 'Unbegrenzte Nachrichten', 'API & Webhooks-Zugang', 'White-Label', 'Team-Management', 'Dedizierter Account-Manager'],
        cta: 'Vertrieb kontaktieren'
      },
      audit: { title: '', price: '', desc: '', cta: '' },
      n8n: { title: '', price: '', desc: '', cta: '' },
      bot: { title: '', price: '', desc: '', cta: '' }
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
