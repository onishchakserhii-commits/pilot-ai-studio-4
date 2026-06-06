import type { Metadata } from 'next';
import { content } from '@/lib/i18n-content';

export const metadata: Metadata = {
  title: 'Privacy Policy | Aivello',
  description: 'Privacy policy required by Swiss data protection law.',
};

export default function PrivacyPage() {
  const t = content.fr.privacy;
  return (
    <section className="container mx-auto py-12 max-w-4xl px-4 text-foreground">
      <h1 className="text-3xl font-headline font-bold mb-6">{t.title}</h1>
      <p className="mb-4">{t.intro}</p>
      <p className="mb-8">Dernière mise à jour : {new Date().toLocaleDateString('fr-CH')}</p>

      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">1. Responsable du traitement des données</h2>
          <p>Onyshchak Serhii<br/>Belmont 50, 1820 Montreux, Suisse<br/>Email : aivello.studio@gmail.com</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">2. {t.dataCollected}</h2>
          <p>Nous collectons les données suivantes :</p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Données de contact (nom, email, téléphone) fournies via nos formulaires ou par email.</li>
            <li>Données d'utilisation (adresse IP, type de navigateur, pages visitées) collectées automatiquement pour assurer le fonctionnement et la sécurité du site.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">3. {t.dataUse}</h2>
          <p>Vos données sont utilisées exclusivement pour :</p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Répondre à vos demandes et communiquer avec vous.</li>
            <li>Améliorer nos services et l'expérience utilisateur.</li>
            <li>Respecter nos obligations légales.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">4. {t.thirdParties}</h2>
          <p>Nous pouvons partager certaines données avec des prestataires de services tiers de confiance (par ex. pour l'hébergement du site chez Vercel). Ces tiers sont tenus de respecter la confidentialité de vos données conformément à la loi suisse sur la protection des données (nLPD).</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">5. {t.rights}</h2>
          <p>Conformément à la nLPD, vous disposez des droits suivants concernant vos données personnelles :</p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Droit d'accès et d'information.</li>
            <li>Droit de rectification ou d'effacement.</li>
            <li>Droit de retirer votre consentement.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">6. {t.contact}</h2>
          <p>Pour toute question ou demande concernant vos données, veuillez nous contacter à :</p>
          <p className="mt-2 font-medium">aivello.studio@gmail.com</p>
        </div>
      </div>
    </section>
  );
}
