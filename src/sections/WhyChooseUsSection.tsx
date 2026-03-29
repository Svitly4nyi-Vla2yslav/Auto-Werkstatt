import styled from 'styled-components';

import { workshopBenefits } from '../data/benefits';
import { contactInfo } from '../data/contact';
import { CTAButton } from '../components/CTAButton';
import { Icon } from '../components/Icon';
import { InfoCard } from '../components/InfoCard';
import { SectionContainer } from '../components/SectionContainer';
import { SectionHeading } from '../components/SectionHeading';

const Grid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing(5)};
  margin-top: ${({ theme }) => theme.spacing(10)};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

const Callout = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing(4)};
  padding: ${({ theme }) => theme.spacing(6)};
  border-radius: ${({ theme }) => theme.radii.xl};
  background: ${({ theme }) => theme.colors.elevated};
  color: rgba(255, 255, 255, 0.82);

  h3 {
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.35rem;
  }

  p {
    line-height: 1.75;
  }
`;

export const WhyChooseUsSection = () => (
  <SectionContainer>
    <SectionHeading
      eyebrow="Warum wir"
      title="Vertrauen entsteht durch gute Abläufe, nicht durch laute Versprechen."
      description="Unser Anspruch ist eine Werkstatt, die modern organisiert ist und gleichzeitig persönlich bleibt. Das merkt man an Rückmeldungen, Terminen und an der Rechnung."
    />
    <Grid>
      {workshopBenefits.map((benefit) => (
        <InfoCard key={benefit.title} icon={<Icon name="shield" size={18} />} title={benefit.title}>
          <p>{benefit.description}</p>
        </InfoCard>
      ))}
      <Callout>
        <span>Direkte Hilfe</span>
        <h3>Wenn es eilig ist, sprechen wir lieber kurz direkt.</h3>
        <p>
          Bei Warnleuchten, Bremsenproblemen oder anderen akuten Themen sagen wir Ihnen am Telefon
          schnell, wie dringend es ist und wann wir helfen können.
        </p>
        <CTAButton href={`tel:${contactInfo.phoneRaw}`}>Notfall: Jetzt anrufen</CTAButton>
      </Callout>
    </Grid>
  </SectionContainer>
);
