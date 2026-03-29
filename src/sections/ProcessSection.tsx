import styled from 'styled-components';

import { processSteps } from '../data/process';
import { ProcessStep } from '../components/ProcessStep';
import { SectionContainer } from '../components/SectionContainer';
import { SectionHeading } from '../components/SectionHeading';

const Grid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing(5)};
  margin-top: ${({ theme }) => theme.spacing(10)};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

export const ProcessSection = () => (
  <SectionContainer tone="dark">
    <SectionHeading
      eyebrow="Ablauf"
      title="So läuft Ihr Werkstatttermin bei uns ab."
      description="Strukturiert, verständlich und ohne unnötige Schleifen. Genau das macht einen Werkstattbesuch entspannter."
      light
    />
    <Grid>
      {processSteps.map((step, index) => (
        <ProcessStep key={step.title} index={index + 1} title={step.title} description={step.description} />
      ))}
    </Grid>
  </SectionContainer>
);
