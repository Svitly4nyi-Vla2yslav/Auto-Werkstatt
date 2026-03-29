import styled from 'styled-components';

import { services } from '../data/services';
import { Icon } from '../components/Icon';
import { InfoCard } from '../components/InfoCard';
import { PageHero } from '../components/PageHero';
import { SectionContainer } from '../components/SectionContainer';
import { SectionHeading } from '../components/SectionHeading';
import { ServiceCard } from '../components/ServiceCard';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { routeMeta } from '../routes/routeMeta';
import { CTABannerSection } from '../sections/CTABannerSection';

const IntroGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing(5)};
  margin-top: ${({ theme }) => theme.spacing(10)};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing(5)};
  margin-top: ${({ theme }) => theme.spacing(10)};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

const ServicesPage = () => {
  useDocumentMeta(routeMeta.services.title, routeMeta.services.description);

  return (
    <>
      <PageHero
        eyebrow="Leistungen"
        title="Werkstattleistungen für alles, was Ihr Auto zuverlässig im Einsatz hält."
        description="Inspektion, Ölwechsel, Bremsenservice, Reifenservice, Diagnose, Klimaservice und Reparaturen aller Marken. Klar erklärt, sauber geplant und passend für den Alltag in Musterstadt."
        primaryCta={{ label: 'Termin anfragen', to: '/termin-kontakt' }}
        secondaryCta={{ label: 'Jetzt anrufen', href: 'tel:+493012345678' }}
      />

      <SectionContainer>
        <SectionHeading
          eyebrow="Servicefokus"
          title="Die häufigsten Werkstattanliegen direkt im Überblick."
          description="Jede Leistung ist so aufbereitet, dass Kunden schnell verstehen, worum es geht und wie sie den nächsten Schritt machen können."
        />
        <IntroGrid>
          <InfoCard icon={<Icon name="calendar" size={18} />} title="Schnelle Standardtermine">
            <p>Gerade bei Ölwechsel, Reifenservice oder Diagnose können wir oft kurzfristig helfen.</p>
          </InfoCard>
          <InfoCard icon={<Icon name="shield" size={18} />} title="Transparente Freigabe">
            <p>Vor größeren Arbeiten sprechen wir Aufwand, Nutzen und Kosten sauber mit Ihnen ab.</p>
          </InfoCard>
          <InfoCard icon={<Icon name="team" size={18} />} title="Privat & Gewerbe">
            <p>Wir betreuen Alltagsfahrzeuge, Familienautos und kleinere lokale Fahrzeugflotten.</p>
          </InfoCard>
        </IntroGrid>
      </SectionContainer>

      <SectionContainer tone="surface">
        <SectionHeading
          eyebrow="Alle Leistungen"
          title="Strukturiert, verständlich und mit direktem Weg zur Terminanfrage."
          description="Alle Servicebereiche sind auf schnelle Orientierung ausgelegt, damit Kunden auf Anhieb den passenden Werkstattkontakt finden."
        />
        <ServicesGrid>
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </ServicesGrid>
      </SectionContainer>

      <CTABannerSection
        title="Nicht sicher, welche Leistung die richtige ist?"
        description="Beschreiben Sie das Problem kurz per Telefon, WhatsApp oder Formular. Wir helfen Ihnen bei der Einordnung und schlagen den passenden Termin vor."
      />
    </>
  );
};

export default ServicesPage;
