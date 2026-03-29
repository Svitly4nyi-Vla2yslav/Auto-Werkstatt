import { motion } from 'framer-motion';
import styled from 'styled-components';

import { contactInfo } from '../data/contact';
import { trustBullets } from '../data/benefits';
import { CTAButton } from './CTAButton';
import { Icon } from './Icon';
import { fadeUpVariants, revealViewport } from './motionTokens';
import { SecondaryButton } from './SecondaryButton';
import { SectionContainer } from './SectionContainer';
import { TrustBadge } from './TrustBadge';

const Grid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing(10)};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1.15fr) minmax(360px, 0.85fr);
    align-items: center;
  }
`;

const Copy = styled(motion.div)`
  display: grid;
  gap: ${({ theme }) => theme.spacing(6)};
  color: rgba(255, 255, 255, 0.86);
`;

const Eyebrow = styled.span`
  display: inline-flex;
  width: fit-content;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
  border-radius: ${({ theme }) => theme.radii.pill};
  padding: ${({ theme }) => `${theme.spacing(2)} ${theme.spacing(3)}`};
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
  font-size: 0.84rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
`;

const HeadingWrap = styled.div`
  h1 {
    font-size: clamp(2.8rem, 4vw + 1.3rem, 5.3rem);
    color: ${({ theme }) => theme.colors.white};
  }

  p {
    margin-top: ${({ theme }) => theme.spacing(5)};
    max-width: 720px;
    font-size: 1.12rem;
    line-height: 1.75;
  }
`;

const ActionRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing(3)};
`;

const BulletGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing(3)};
`;

const VisualPanel = styled(motion.aside)`
  position: relative;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radii.xl};
  padding: ${({ theme }) => theme.spacing(6)};
  min-height: 420px;
  background:
    radial-gradient(circle at top right, rgba(236, 107, 45, 0.45), transparent 34%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02)),
    #171d26;
  box-shadow: ${({ theme }) => theme.shadows.lg};
`;

const AmbientCircle = styled.div<{ $top: string; $left?: string; $right?: string; $size: string }>`
  position: absolute;
  top: ${({ $top }) => $top};
  left: ${({ $left }) => $left ?? 'auto'};
  right: ${({ $right }) => $right ?? 'auto'};
  width: ${({ $size }) => $size};
  height: ${({ $size }) => $size};
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0));
`;

const StatCard = styled.div`
  position: relative;
  z-index: 1;
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.spacing(5)};
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(8px);

  strong {
    display: block;
    margin-top: ${({ theme }) => theme.spacing(3)};
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.2rem;
  }

  p {
    margin-top: ${({ theme }) => theme.spacing(2)};
    color: rgba(255, 255, 255, 0.74);
    line-height: 1.65;
  }
`;

const VisualGrid = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
  gap: ${({ theme }) => theme.spacing(4)};
  grid-template-columns: 1.05fr 0.95fr;
  align-items: end;
  height: 100%;
`;

const TallCard = styled(StatCard)`
  min-height: 240px;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const SmallStack = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing(4)};
`;

const MetaRow = styled.div`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
  color: rgba(255, 255, 255, 0.7);
  font-weight: 700;
`;

export const Hero = () => (
  <SectionContainer tone="dark">
    <Grid>
      <Copy
        variants={fadeUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
      >
        <Eyebrow>
          <Icon name="shield" size={16} />
          Meisterbetrieb in Musterstadt
        </Eyebrow>
        <HeadingWrap>
          <h1>Zuverlässiger Werkstattservice ohne Umwege.</h1>
          <p>
            Faire Preise, schnelle Termine und klare Rückmeldungen für Inspektion, Reparaturen und
            alltägliche Werkstattfälle. Für Privatkunden, Familien und alle, die ihr Auto einfach
            zuverlässig betreut wissen möchten.
          </p>
        </HeadingWrap>
        <ActionRow>
          <CTAButton to="/termin-kontakt">Termin anfragen</CTAButton>
          <SecondaryButton href={`tel:${contactInfo.phoneRaw}`} inverse>
            Jetzt anrufen
          </SecondaryButton>
        </ActionRow>
        <BulletGrid>
          {trustBullets.map((bullet) => (
            <TrustBadge key={bullet} label={bullet} />
          ))}
        </BulletGrid>
      </Copy>

      <VisualPanel
        aria-label="Werkstatt-Vorteile"
        variants={fadeUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
      >
        <AmbientCircle $top="-10%" $right="-8%" $size="180px" />
        <AmbientCircle $top="56%" $left="-10%" $size="150px" />
        <VisualGrid>
          <TallCard>
            <MetaRow>
              <Icon name="calendar" size={18} />
              Termin in derselben Woche oft möglich
            </MetaRow>
            <strong>Klare Abläufe von der Annahme bis zur Abholung</strong>
            <p>
              Wir sagen Ihnen früh, was sinnvoll ist, wie lange es dauert und womit Sie rechnen
              können.
            </p>
          </TallCard>
          <SmallStack>
            <StatCard>
              <MetaRow>
                <Icon name="phone" size={18} />
                Direkt erreichbar
              </MetaRow>
              <strong>{contactInfo.phoneDisplay}</strong>
              <p>Kurze Wege für Rückfragen, Terminwünsche und schnelle Abstimmungen.</p>
            </StatCard>
            <StatCard>
              <MetaRow>
                <Icon name="check" size={18} />
                Transparenter Service
              </MetaRow>
              <strong>Nur das, was wirklich nötig ist</strong>
              <p>Persönlicher Kontakt statt unklarer Werkstattrechnung.</p>
            </StatCard>
          </SmallStack>
        </VisualGrid>
      </VisualPanel>
    </Grid>
  </SectionContainer>
);
