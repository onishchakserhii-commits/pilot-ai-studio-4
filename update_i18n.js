
const fs = require("fs");
let content = fs.readFileSync("src/lib/i18n-content.ts", "utf8");

const newImprovements = {
  fr: `{
      title: "L'Effet Aivello : Votre activite sur pilote automatique",
      subtitle: "Oubliez les taches repetitives. Concentrez-vous sur ce que vous faites de mieux, notre technologie s'occupe du reste.",
      features: [
        { title: "Reservations 24/7", desc: "Votre calendrier se remplit tout seul, de jour comme de nuit, sans aucun effort manuel." },
        { title: "Zero client perdu", desc: "Notre IA repond instantanement aux questions de vos prospects et recupere leurs coordonnees." },
        { title: "Visibilite maximisee", desc: "Dominez les recherches locales. Quand on cherche votre service, c'est vous qu'on trouve." },
        { title: "Suivi automatise", desc: "Fini les relances. Vos clients recoivent des rappels automatiques par SMS ou WhatsApp." }
      ],
      automation: {
        badge: "TRANQUILLITE D'ESPRIT",
        title: "Technologie invisible, resultats visibles",
        desc: "Nous nous occupons de toute la configuration technique. Vous recevez simplement les notifications de nouveaux clients directement sur votre telephone.",
        highlight: "Zero jargon technique",
        highlightDesc: "Vous n'avez rien a configurer ni a apprendre. Nous gerons tout de A a Z."
      }
    }`,
  en: `{
      title: "The Aivello Effect: Your business on autopilot",
      subtitle: "Forget repetitive tasks. Focus on what you do best, our technology takes care of the rest.",
      features: [
        { title: "24/7 Bookings", desc: "Your calendar fills up on its own, day and night, without you having to lift a finger." },
        { title: "Zero lost clients", desc: "Our AI instantly answers your prospects' questions and captures their contact info." },
        { title: "Maximized visibility", desc: "Dominate local searches. When people look for your service, you're the first they find." },
        { title: "Automated follow-up", desc: "No more manual reminders. Your clients receive automatic reminders via SMS or WhatsApp." }
      ],
      automation: {
        badge: "PEACE OF MIND",
        title: "Invisible tech, visible results",
        desc: "We handle all the technical setup. You simply receive new client notifications directly on your phone.",
        highlight: "Zero tech jargon",
        highlightDesc: "You don't have to set up or learn anything. We manage it all."
      }
    }`,
  ua: `{
      title: "Ефект Aivello: Ваш бізнес на автопілоті",
      subtitle: "Забудьте про рутину. Зосередьтеся на тому, що ви робите найкраще, а наша технологія подбає про решту.",
      features: [
        { title: "Бронювання 24/7", desc: "Ваш календар заповнюється сам, вдень і вночі, без вашої участі." },
        { title: "Жодного втраченого клієнта", desc: "Наш ШІ миттєво відповідає на запитання потенційних клієнтів і збирає їхні контакти." },
        { title: "Максимальна видимість", desc: "Домінуйте в локальному пошуку. Коли шукають вашу послугу, вас знаходять першими." },
        { title: "Автоматичні нагадування", desc: "Більше ніяких ручних повідомлень. Ваші клієнти отримують автоматичні нагадування через SMS або WhatsApp." }
      ],
      automation: {
        badge: "СПОКІЙ",
        title: "Невидима технологія, видимі результати",
        desc: "Ми беремо на себе всі технічні налаштування. Ви просто отримуєте сповіщення про нових клієнтів прямо на свій телефон.",
        highlight: "Жодного технічного жаргону",
        highlightDesc: "Вам не потрібно нічого налаштовувати чи вивчати. Ми керуємо всім."
      }
    }`,
  it: `{
      title: "L'Effetto Aivello: La tua attivita col pilota automatico",
      subtitle: "Dimentica i compiti ripetitivi. Concentrati su cio che sai fare meglio, al resto pensa la nostra tecnologia.",
      features: [
        { title: "Prenotazioni 24/7", desc: "Il tuo calendario si riempie da solo, giorno e notte, senza che tu debba muovere un dito." },
        { title: "Zero clienti persi", desc: "La nostra IA risponde all'istante alle domande dei potenziali clienti e raccoglie i loro dati." },
        { title: "Visibilita massimizzata", desc: "Domina le ricerche locali. Quando cercano il tuo servizio, trovano te per primo." },
        { title: "Follow-up automatico", desc: "Basta solleciti manuali. I tuoi clienti ricevono promemoria automatici via SMS o WhatsApp." }
      ],
      automation: {
        badge: "TRANQUILLITA TOTALE",
        title: "Tecnologia invisibile, risultati visibili",
        desc: "Ci occupiamo noi di tutta la configurazione tecnica. Tu ricevi semplicemente le notifiche dei nuovi clienti sul tuo telefono.",
        highlight: "Zero gergo tecnico",
        highlightDesc: "Non devi configurare o imparare nulla. Gestiamo tutto noi."
      }
    }`,
  de: `{
      title: "Der Aivello-Effekt: Ihr Unternehmen auf Autopilot",
      subtitle: "Vergessen Sie wiederkehrende Aufgaben. Konzentrieren Sie sich auf das, was Sie am besten konnen, unsere Technologie erledigt den Rest.",
      features: [
        { title: "24/7 Buchungen", desc: "Ihr Kalender fullt sich von selbst, Tag und Nacht, ohne dass Sie einen Finger ruhren mussen." },
        { title: "Keine verlorenen Kunden", desc: "Unsere KI beantwortet sofort die Fragen Ihrer Interessenten und erfasst deren Kontaktdaten." },
        { title: "Maximale Sichtbarkeit", desc: "Dominieren Sie lokale Suchanfragen. Wenn Leute nach Ihrem Service suchen, sind Sie die Ersten, die sie finden." },
        { title: "Automatisiertes Follow-up", desc: "Keine manuellen Erinnerungen mehr. Ihre Kunden erhalten automatische Erinnerungen per SMS oder WhatsApp." }
      ],
      automation: {
        badge: "SORGENFREI",
        title: "Unsichtbare Technologie, sichtbare Ergebnisse",
        desc: "Wir kummern uns um die gesamte technische Einrichtung. Sie erhalten einfach Benachrichtigungen uber neue Kunden direkt auf Ihr Telefon.",
        highlight: "Kein Fachjargon",
        highlightDesc: "Sie mussen nichts einrichten oder lernen. Wir verwalten alles."
      }
    }`
};

for (const lang of ["fr", "en", "ua", "it", "de"]) {
  const regex = new RegExp("improvements:\\s*\\\\{[\\\\s\\\\S]*?automation:\\s*\\\\{[\\\\s\\\\S]*?\\\\}\\s*\\\\},", "g");
  // wait, the global regex will replace all. We need to replace each one respectively.
  // Actually, a better approach: split by lang sections.
}

let newContent = content;

// Use precise replace for each language.
const languages = ["fr", "en", "ua", "it", "de"];
languages.forEach(lang => {
  const pattern = new RegExp(\`(\${lang}: \\\\{[\\\\s\\\\S]*?)improvements:\\s*\\\\{[\\\\s\\\\S]*?automation:\\s*\\\\{[\\\\s\\\\S]*?\\\\}\\s*\\\\},\\s*(packs:)\`);
  newContent = newContent.replace(pattern, \`$1improvements: \${newImprovements[lang]},\\n      $2\`);
});

fs.writeFileSync("src/lib/i18n-content.ts", newContent, "utf8");
console.log("Updated i18n-content.ts");

