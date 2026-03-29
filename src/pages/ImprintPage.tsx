import { contactInfo } from '../data/contact';
import { PageHero } from '../components/PageHero';
import { SectionContainer } from '../components/SectionContainer';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { routeMeta } from '../routes/routeMeta';
import { LegalArticle, LegalList, LegalSection } from './legalStyles';

const ImprintPage = () => {
  useDocumentMeta(routeMeta.imprint.title, routeMeta.imprint.description);

  return (
    <>
      <PageHero
        eyebrow="Impressum"
        title="Pflichtangaben zur Website und zum Unternehmen."
        description="Dieses Impressum ist als realistisch strukturierter Platzhalter für eine lokale Auto Werkstatt in Deutschland aufgebaut und kann direkt mit echten Firmendaten ergänzt werden."
      />

      <SectionContainer narrow>
        <LegalArticle>
          <LegalSection>
            <h2>Angaben gemäß § 5 TMG</h2>
            <p>{contactInfo.legalName}</p>
            <p>{contactInfo.addressLine1}</p>
            <p>
              {contactInfo.postalCode} {contactInfo.city}
            </p>
            <p>Vertreten durch den Geschäftsführer: {contactInfo.owner}</p>
          </LegalSection>

          <LegalSection>
            <h2>Kontakt</h2>
            <LegalList>
              <li>Telefon: {contactInfo.phoneDisplay}</li>
              <li>E-Mail: {contactInfo.email}</li>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <h2>Registereintrag</h2>
            <LegalList>
              <li>Eintragung im Handelsregister</li>
              <li>Registergericht: Amtsgericht Musterstadt</li>
              <li>Registernummer: HRB 123456</li>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <h2>Umsatzsteuer-ID</h2>
            <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: DE123456789</p>
          </LegalSection>

          <LegalSection>
            <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <p>{contactInfo.owner}</p>
            <p>
              {contactInfo.addressLine1}, {contactInfo.postalCode} {contactInfo.city}
            </p>
          </LegalSection>

          <LegalSection>
            <h2>Hinweis</h2>
            <p>
              Dies ist eine Demo-Struktur mit plausiblen Platzhalterdaten für eine lokale Werkstattwebsite.
              Für den Live-Einsatz müssen alle Pflichtangaben mit den echten Unternehmensdaten abgeglichen
              und rechtlich geprüft werden.
            </p>
          </LegalSection>
        </LegalArticle>
      </SectionContainer>
    </>
  );
};

export default ImprintPage;
