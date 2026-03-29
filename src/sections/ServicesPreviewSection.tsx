import styled from 'styled-components';

import { services } from '../data/services';
import { CTAButton } from '../components/CTAButton';
import { SectionContainer } from '../components/SectionContainer';
import { SectionHeading } from '../components/SectionHeading';
import { ServiceCard } from '../components/ServiceCard';

const HeaderRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(5)};
  align-items: end;
`;

const Grid = styled.div`
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

export const ServicesPreviewSection = () => (
  <SectionContainer>
    <HeaderRow>
      <SectionHeading
        eyebrow="Leistungen"
        title="Alles, was Ihr Auto im Alltag zuverlässig hält."
        description="Von schneller Wartung bis zur gezielten Fehlersuche: Wir decken die typischen Werkstattleistungen für Privatkunden, Familien und lokale Gewerbekunden ab."
      />
      <CTAButton to="/leistungen">Alle Leistungen ansehen</CTAButton>
    </HeaderRow>
    <Grid>
      {services.slice(0, 6).map((service) => (
        <ServiceCard key={service.id} service={service} compact />
      ))}
    </Grid>
  </SectionContainer>
);
