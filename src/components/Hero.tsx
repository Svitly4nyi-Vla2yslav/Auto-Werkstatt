import { motion } from 'framer-motion';
import styled from 'styled-components';

import { contactInfo } from '../data/contact';
import { trustBullets } from '../data/benefits';
import { CTAButton } from './CTAButton';
import { HeroBackgroundVisual } from './HeroBackgroundVisual';
import { Icon } from './Icon';
import { fadeUpVariants, revealViewport } from './motionTokens';
import { SecondaryButton } from './SecondaryButton';
import { TrustBadge } from './TrustBadge';

const HeroSection = styled.section`
  position: relative;
  width: 100%;
  background: ${({ theme }) => theme.colors.elevated};
`;

const HeroShell = styled.div`
  position: relative;
  isolation: isolate;
  min-height: calc(100svh - 84px);
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    min-height: calc(100svh - 74px);
  }
`;

const Grid = styled.div`
  position: relative;
  z-index: 1;
  width: min(100%, ${({ theme }) => theme.layout.base});
  min-height: inherit;
  margin: 0 auto;
  display: grid;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(10)};
  padding: ${({ theme }) => `${theme.spacing(18)} ${theme.spacing(5)}`};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => `${theme.spacing(18)} ${theme.spacing(8)}`};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1.08fr) minmax(360px, 0.92fr);
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
    max-width: 680px;
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

const Spacer = styled.div`
  min-height: 320px;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`;

export const Hero = () => (
  <HeroSection>
    <HeroShell>
      <HeroBackgroundVisual />
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
            <h1>Zuverlaessiger Werkstattservice ohne Umwege.</h1>
            <p>
              Faire Preise, schnelle Termine und klare Rueckmeldungen fuer Inspektion, Reparaturen
              und alltaegliche Werkstattfaelle. Fuer Privatkunden, Familien und alle, die ihr Auto
              einfach zuverlaessig betreut wissen moechten.
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
        <Spacer aria-hidden="true" />
      </Grid>
    </HeroShell>
  </HeroSection>
);
