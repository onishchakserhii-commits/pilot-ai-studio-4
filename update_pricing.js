const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/lib/i18n-content.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Replacements
content = content.replace(/promo:\s*'.*?',/g, "promo: '',");
content = content.replace(/subtitle:\s*'Offre spéciale.*?350\.',/g, "subtitle: '',");
content = content.replace(/subtitle:\s*'Special launch offer.*?350\.',/g, "subtitle: '',");
content = content.replace(/subtitle:\s*'Акційна пропозиція.*?350\.',/g, "subtitle: '',");
content = content.replace(/subtitle:\s*'Offerta speciale di lancio.*?350\.',/g, "subtitle: '',");
content = content.replace(/subtitle:\s*'Spezielles Einführungsangebot.*?350\.',/g, "subtitle: '',");

content = content.replace(/footer:\s*'Le pack promotionnel inclut.*?',/g, "footer: '',");
content = content.replace(/footer:\s*'The promotional pack includes.*?',/g, "footer: '',");
content = content.replace(/footer:\s*'Акційний пакет включає.*?',/g, "footer: '',");
content = content.replace(/footer:\s*'Il pacchetto promozionale include.*?',/g, "footer: '',");
content = content.replace(/footer:\s*'Das Aktionspaket beinhaltet.*?',/g, "footer: '',");

content = content.replace(/promoBadge:\s*'.*?',/g, "promoBadge: '',");
content = content.replace(/price:\s*'350',/g, "price: '690',");
content = content.replace(/originalPrice:\s*'490',/g, "originalPrice: '',");

// Remove "Promo" / "Акційний" from titles
content = content.replace(/title:\s*'Site Promo \+ Assistant IA',/g, "title: 'Site \+ Assistant IA',");
content = content.replace(/title:\s*'Promo Website \+ AI Assistant',/g, "title: 'Website \+ AI Assistant',");
content = content.replace(/title:\s*'Акційний сайт \+ AI-асистент',/g, "title: 'Сайт \+ AI-асистент',");
content = content.replace(/title:\s*'Sito Promo \+ Assistente IA',/g, "title: 'Sito \+ Assistente IA',");
content = content.replace(/title:\s*'Promo-Website \+ KI-Assistent',/g, "title: 'Website \+ KI-Assistent',");

fs.writeFileSync(filePath, content, 'utf8');
console.log('Done');
