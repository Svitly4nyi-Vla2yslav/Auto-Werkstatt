import { contactInfo } from '../data/contact';
import { PageHero } from '../components/PageHero';
import { SectionContainer } from '../components/SectionContainer';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { routeMeta } from '../routes/routeMeta';
import { LegalArticle, LegalList, LegalSection } from './legalStyles';

const PrivacyPage = () => {
  useDocumentMeta(routeMeta.privacy.title, routeMeta.privacy.description);

  return (
    <>
      <PageHero
        eyebrow="Datenschutz"
        title="Hinweise zur Verarbeitung personenbezogener Daten."
        description="Diese Datenschutzseite ist als glaubwürdiger, sauber strukturierter Platzhalter für eine lokale Werkstattwebsite vorbereitet und kann später juristisch finalisiert werden."
      />

      <SectionContainer narrow>
        <LegalArticle>
          <LegalSection>
            <h2>1. Verantwortliche Stelle</h2>
            <p>{contactInfo.legalName}</p>
            <p>{contactInfo.addressLine1}</p>
            <p>
              {contactInfo.postalCode} {contactInfo.city}
            </p>
            <p>E-Mail: {contactInfo.email}</p>
          </LegalSection>

          <LegalSection>
            <h2>2. Erhebung und Speicherung personenbezogener Daten</h2>
            <p>
              Beim Besuch dieser Website können technisch erforderliche Daten wie IP-Adresse,
              Browsertyp, Datum und Uhrzeit automatisch verarbeitet werden. Wenn Sie ein Formular
              nutzen, werden zusätzlich die von Ihnen eingegebenen Angaben verarbeitet.
            </p>
          </LegalSection>

          <LegalSection>
            <h2>3. Zweck der Datenverarbeitung</h2>
            <LegalList>
              <li>Bearbeitung von Kontaktanfragen</li>
              <li>Terminabstimmung und Servicekommunikation</li>
              <li>Sicherstellung eines stabilen und sicheren Websitebetriebs</li>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <h2>4. Kontaktformular und Terminanfrage</h2>
            <p>
              Wenn Sie über die Formulare Kontakt aufnehmen, werden Ihre Angaben ausschließlich zur
              Bearbeitung Ihrer Anfrage und möglicher Anschlussfragen verarbeitet. Ohne Ihre
              Einwilligung erfolgt keine Weitergabe an Dritte, soweit keine gesetzliche Pflicht
              besteht.
            </p>
          </LegalSection>

          <LegalSection>
            <h2>5. Speicherdauer</h2>
            <p>
              Personenbezogene Daten werden nur so lange gespeichert, wie es für die jeweilige
              Bearbeitung erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen.
            </p>
          </LegalSection>

          <LegalSection>
            <h2>6. Ihre Rechte</h2>
            <LegalList>
              <li>Auskunft über gespeicherte Daten</li>
              <li>Berichtigung unrichtiger Daten</li>
              <li>Löschung oder Einschränkung der Verarbeitung</li>
              <li>Widerspruch gegen die Verarbeitung</li>
              <li>Datenübertragbarkeit im Rahmen der gesetzlichen Vorgaben</li>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <h2>7. Externe Dienste und Karten</h2>
            <p>
              In dieser Demo ist noch keine externe Kartenlösung eingebunden. Wird später ein
              Kartendienst ergänzt, muss dieser Abschnitt um die konkreten Hinweise zu Anbieter,
              Datenübertragung und Rechtsgrundlage erweitert werden.
            </p>
          </LegalSection>

          <LegalSection>
            <h2>8. Hinweis</h2>
            <p>
              Diese Datenschutzerklärung dient als struktureller Platzhalter für eine glaubwürdige
              Demo. Vor Veröffentlichung sollte sie durch echte technische Angaben und rechtliche
              Prüfung ergänzt werden.
            </p>
          </LegalSection>
        </LegalArticle>
      </SectionContainer>
    </>
  );
};

export default PrivacyPage;
