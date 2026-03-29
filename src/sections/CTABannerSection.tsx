import styled from 'styled-components';

import { contactInfo } from '../data/contact';
import { CTAButton } from '../components/CTAButton';
import { SecondaryButton } from '../components/SecondaryButton';
import { SectionContainer } from '../components/SectionContainer';

interface CTABannerSectionProps {
  title?: string;
  description?: string;
}

const Banner = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing(6)};
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1fr) auto;
  }

  h2 {
    color: ${({ theme }) => theme.colors.white};
    font-size: clamp(2rem, 2vw + 1.3rem, 3.2rem);
  }

  p {
    margin-top: ${({ theme }) => theme.spacing(4)};
    max-width: 720px;
    color: rgba(255, 255, 255, 0.84);
    line-height: 1.75;
  }
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing(3)};
`;

export const CTABannerSection = ({
  title = 'Brauchen Sie einen Termin oder eine schnelle Einschätzung?',
  description = 'Rufen Sie an, schreiben Sie per WhatsApp oder senden Sie direkt eine Anfrage. Wir halten die Wege kurz und sagen Ihnen ehrlich, wann wir helfen können.',
}: CTABannerSectionProps) => (
  <SectionContainer tone="accent">
    <Banner>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <Actions>
        <CTAButton to="/termin-kontakt">Termin anfragen</CTAButton>
        <SecondaryButton href={`tel:${contactInfo.phoneRaw}`} inverse>
          Jetzt anrufen
        </SecondaryButton>
      </Actions>
    </Banner>
  </SectionContainer>
);
