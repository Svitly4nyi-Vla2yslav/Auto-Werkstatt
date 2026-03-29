import styled from 'styled-components';

import { contactInfo } from '../data/contact';
import { AppointmentForm } from '../components/AppointmentForm';
import { ContactForm } from '../components/ContactForm';
import { CTAButton } from '../components/CTAButton';
import { Icon } from '../components/Icon';
import { InfoCard } from '../components/InfoCard';
import { PageHero } from '../components/PageHero';
import { SectionContainer } from '../components/SectionContainer';
import { SectionHeading } from '../components/SectionHeading';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { routeMeta } from '../routes/routeMeta';
import { ContactLocationSection } from '../sections/ContactLocationSection';
import { CTABannerSection } from '../sections/CTABannerSection';

const QuickGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing(5)};
  margin-top: ${({ theme }) => theme.spacing(10)};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

const FormGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing(6)};
  margin-top: ${({ theme }) => theme.spacing(10)};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1.12fr) minmax(0, 0.88fr);
    align-items: start;
  }
`;

const WhatsAppLink = `https://wa.me/${contactInfo.whatsappRaw.replace('+', '')}`;

const ContactPage = () => {
  useDocumentMeta(routeMeta.contact.title, routeMeta.contact.description);

  return (
    <>
      <PageHero
        eyebrow="Termin & Kontakt"
        title="Der schnellste Weg zur Werkstatt ist der, der für Sie am einfachsten ist."
        description="Anrufen, per WhatsApp schreiben oder direkt die Anfrage absenden. Diese Seite ist bewusst conversion-orientiert aufgebaut, damit lokale Kunden ohne Umwege Kontakt aufnehmen können."
        primaryCta={{ label: 'Terminformular öffnen', to: '/termin-kontakt' }}
        secondaryCta={{ label: 'Jetzt anrufen', href: `tel:${contactInfo.phoneRaw}` }}
      />

      <SectionContainer>
        <SectionHeading
          eyebrow="Direkte Kontaktwege"
          title="Sofort anrufen, schreiben oder Termin anfragen."
          description="Wenn es schnell gehen soll, sind direkte Kontaktwege oft der beste Start. Für planbare Termine nutzen Sie einfach das Formular."
        />
        <QuickGrid>
          <InfoCard icon={<Icon name="phone" size={18} />} title="Telefon">
            <a href={`tel:${contactInfo.phoneRaw}`}>{contactInfo.phoneDisplay}</a>
            <p>{contactInfo.emergencyNote}</p>
          </InfoCard>
          <InfoCard icon={<Icon name="chat" size={18} />} title="WhatsApp">
            <a href={WhatsAppLink} target="_blank" rel="noreferrer">
              Anfrage per WhatsApp senden
            </a>
            <p>Ideal für kurze Rückfragen, Fotos oder eine erste Einschätzung.</p>
          </InfoCard>
          <InfoCard icon={<Icon name="clock" size={18} />} title="Öffnungszeiten">
            <p>Montag bis Freitag planbar erreichbar.</p>
            <p>Samstags nach Vereinbarung.</p>
          </InfoCard>
        </QuickGrid>
      </SectionContainer>

      <SectionContainer tone="surface">
        <SectionHeading
          eyebrow="Formulare"
          title="Kontaktformular und Terminwunsch klar getrennt."
          description="So kann die Werkstatt später beide Anfragen problemlos unterschiedlich verarbeiten, ohne die Nutzerführung zu verkomplizieren."
        />
        <FormGrid>
          <AppointmentForm />
          <ContactForm />
        </FormGrid>
      </SectionContainer>

      <ContactLocationSection />

      <CTABannerSection
        title="Lieber kurz direkt sprechen?"
        description="Gerade bei dringenden Themen wie Bremsen, Warnleuchten oder Ausfällen bringt ein kurzer Anruf oft am schnellsten Klarheit."
      />
    </>
  );
};

export default ContactPage;
