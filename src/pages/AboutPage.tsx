import styled from 'styled-components';

import { contactInfo } from '../data/contact';
import { teamMembers } from '../data/team';
import { CTAButton } from '../components/CTAButton';
import { Icon } from '../components/Icon';
import { InfoCard } from '../components/InfoCard';
import { PageHero } from '../components/PageHero';
import { SectionContainer } from '../components/SectionContainer';
import { SectionHeading } from '../components/SectionHeading';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { routeMeta } from '../routes/routeMeta';
import { CTABannerSection } from '../sections/CTABannerSection';

const StoryGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing(8)};
  margin-top: ${({ theme }) => theme.spacing(10)};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1.05fr 0.95fr;
  }
`;

const StoryCard = styled.article`
  padding: ${({ theme }) => theme.spacing(7)};
  border-radius: ${({ theme }) => theme.radii.xl};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadows.md};

  p + p {
    margin-top: ${({ theme }) => theme.spacing(4)};
  }

  p {
    line-height: 1.8;
  }
`;

const StatGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing(4)};
`;

const StatCard = styled.div`
  padding: ${({ theme }) => theme.spacing(6)};
  border-radius: ${({ theme }) => theme.radii.lg};
  background: ${({ theme }) => theme.colors.elevated};
  color: rgba(255, 255, 255, 0.82);

  strong {
    display: block;
    color: ${({ theme }) => theme.colors.white};
    font-size: 2rem;
    margin-bottom: ${({ theme }) => theme.spacing(2)};
  }

  span {
    line-height: 1.7;
  }
`;

const ValuesGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing(5)};
  margin-top: ${({ theme }) => theme.spacing(10)};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const TeamGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing(5)};
  margin-top: ${({ theme }) => theme.spacing(10)};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

const TeamCard = styled.article`
  display: grid;
  gap: ${({ theme }) => theme.spacing(4)};
  padding: ${({ theme }) => theme.spacing(6)};
  border-radius: ${({ theme }) => theme.radii.lg};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadows.sm};

  h3 {
    font-size: 1.2rem;
  }

  span {
    color: ${({ theme }) => theme.colors.accentStrong};
    font-weight: 800;
  }

  p {
    line-height: 1.72;
  }
`;

const AboutPage = () => {
  useDocumentMeta(routeMeta.about.title, routeMeta.about.description);

  return (
    <>
      <PageHero
        eyebrow="Über uns"
        title="Eine Werkstatt, die modern arbeitet und dabei persönlich bleibt."
        description="AutoWerk Musterstadt ist als lokale Werkstatt für Kunden gedacht, die klare Kommunikation, saubere Arbeit und ehrliche Einschätzungen schätzen. Nicht kompliziert, sondern verlässlich."
        primaryCta={{ label: 'Termin anfragen', to: '/termin-kontakt' }}
        secondaryCta={{ label: 'Jetzt anrufen', href: `tel:${contactInfo.phoneRaw}` }}
      />

      <SectionContainer>
        <SectionHeading
          eyebrow="Unsere Geschichte"
          title="Gewachsen aus dem Anspruch, Werkstattservice einfacher zu machen."
          description="Viele Kunden möchten keine große Inszenierung. Sie möchten eine Werkstatt, die erreichbar ist, Rückfragen beantwortet und sauber arbeitet. Genau darauf ist unser Betrieb aufgebaut."
        />
        <StoryGrid>
          <StoryCard>
            <p>
              AutoWerk Musterstadt ist als lokale Werkstatt für Menschen entstanden, die ihr Auto im
              Alltag brauchen und sich auf Zusagen verlassen möchten. Familien, Pendler,
              Berufstätige und kleinere Gewerbekunden brauchen oft keine großen Versprechen, sondern
              eine Werkstatt, die ordentlich organisiert ist.
            </p>
            <p>
              Deshalb setzen wir auf ehrliche Annahme, planbare Kommunikation und nachvollziehbare
              Reparaturen. Wenn etwas notwendig ist, sagen wir es klar. Wenn etwas warten kann,
              sagen wir das genauso.
            </p>
            <p>
              Unser Ziel ist, dass Kunden schon nach dem ersten Termin das Gefühl haben: Hier weiß
              jemand, was er tut, und hier wird vernünftig mit meinem Fahrzeug umgegangen.
            </p>
          </StoryCard>
          <StatGrid>
            <StatCard>
              <strong>Seit 2014</strong>
              <span>Lokaler Werkstattbetrieb mit Fokus auf Stammkunden aus Musterstadt und Umgebung.</span>
            </StatCard>
            <StatCard>
              <strong>3 feste Ansprechpartner</strong>
              <span>Kurze Wege zwischen Annahme, Diagnose und Rückmeldung.</span>
            </StatCard>
            <StatCard>
              <strong>Alle Marken willkommen</strong>
              <span>Vom Familienauto bis zum Firmenfahrzeug betreuen wir gängige Fahrzeugtypen im Alltag.</span>
            </StatCard>
          </StatGrid>
        </StoryGrid>
      </SectionContainer>

      <SectionContainer tone="surface">
        <SectionHeading
          eyebrow="Werte"
          title="Was Kunden bei uns erwarten dürfen."
          description="Unsere Arbeit basiert auf vier einfachen Grundsätzen, die im Werkstattalltag tatsächlich spürbar sein sollen."
        />
        <ValuesGrid>
          <InfoCard icon={<Icon name="shield" size={18} />} title="Ehrlichkeit">
            <p>Wir verkaufen keine unnötigen Arbeiten und erklären auch kleinere Entscheidungen nachvollziehbar.</p>
          </InfoCard>
          <InfoCard icon={<Icon name="check" size={18} />} title="Transparenz">
            <p>Kosten, Aufwand und Freigaben werden vor größeren Reparaturen offen abgestimmt.</p>
          </InfoCard>
          <InfoCard icon={<Icon name="calendar" size={18} />} title="Zuverlässigkeit">
            <p>Wir planen realistisch und geben Ihnen Rückmeldung, wenn sich etwas am Zeitplan ändert.</p>
          </InfoCard>
          <InfoCard icon={<Icon name="phone" size={18} />} title="Schnelligkeit">
            <p>Kurze Kontaktwege helfen gerade bei typischen Alltagsproblemen und dringenden Fällen.</p>
          </InfoCard>
        </ValuesGrid>
      </SectionContainer>

      <SectionContainer>
        <SectionHeading
          eyebrow="Team"
          title="Menschen, die Verantwortung für Ihr Fahrzeug übernehmen."
          description="Hier sehen Sie die typischen Rollen einer modernen lokalen Werkstatt. Die Inhalte sind realistisch formuliert und sofort als glaubwürdige Demo nutzbar."
        />
        <TeamGrid>
          {teamMembers.map((member) => (
            <TeamCard key={member.id}>
              <Icon name="team" size={22} />
              <div>
                <h3>{member.name}</h3>
                <span>{member.role}</span>
              </div>
              <p>{member.description}</p>
            </TeamCard>
          ))}
        </TeamGrid>
      </SectionContainer>

      <CTABannerSection
        title="Lernen Sie die Werkstatt am besten direkt im ersten Termin kennen."
        description="Ein kurzer Anruf oder eine Anfrage reicht oft schon aus, damit wir Ihr Anliegen passend einordnen und den nächsten Schritt mit Ihnen planen."
      />
    </>
  );
};

export default AboutPage;
