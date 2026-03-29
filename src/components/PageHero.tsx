import { motion } from 'framer-motion';
import styled from 'styled-components';

import { CTAButton } from './CTAButton';
import { fadeUpVariants, revealViewport } from './motionTokens';
import { SecondaryButton } from './SecondaryButton';
import { SectionContainer } from './SectionContainer';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta?: { label: string; to?: string; href?: string };
  secondaryCta?: { label: string; to?: string; href?: string };
}

const Shell = styled(motion.div)`
  display: grid;
  gap: ${({ theme }) => theme.spacing(6)};
`;

const Eyebrow = styled.span`
  display: inline-flex;
  width: fit-content;
  border-radius: ${({ theme }) => theme.radii.pill};
  padding: ${({ theme }) => `${theme.spacing(2)} ${theme.spacing(3)}`};
  background: ${({ theme }) => theme.colors.accentTint};
  color: ${({ theme }) => theme.colors.accentStrong};
  font-size: 0.82rem;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
`;

const Text = styled.div`
  max-width: 760px;

  h1 {
    font-size: clamp(2.35rem, 3vw + 1.5rem, 4.7rem);
    margin-bottom: ${({ theme }) => theme.spacing(5)};
  }

  p {
    font-size: 1.08rem;
    line-height: 1.72;
  }
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing(3)};
`;

export const PageHero = ({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
}: PageHeroProps) => (
  <SectionContainer as="header">
    <Shell
      variants={fadeUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={revealViewport}
    >
      <Eyebrow>{eyebrow}</Eyebrow>
      <Text>
        <h1>{title}</h1>
        <p>{description}</p>
      </Text>
      {(primaryCta || secondaryCta) && (
        <Actions>
          {primaryCta ? <CTAButton to={primaryCta.to} href={primaryCta.href}>{primaryCta.label}</CTAButton> : null}
          {secondaryCta ? (
            <SecondaryButton to={secondaryCta.to} href={secondaryCta.href}>
              {secondaryCta.label}
            </SecondaryButton>
          ) : null}
        </Actions>
      )}
    </Shell>
  </SectionContainer>
);
