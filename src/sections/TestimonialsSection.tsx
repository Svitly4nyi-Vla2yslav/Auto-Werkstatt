import styled from 'styled-components';

import { testimonials } from '../data/testimonials';
import { SectionContainer } from '../components/SectionContainer';
import { SectionHeading } from '../components/SectionHeading';
import { TestimonialCard } from '../components/TestimonialCard';

const Grid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing(5)};
  margin-top: ${({ theme }) => theme.spacing(10)};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export const TestimonialsSection = () => (
  <SectionContainer tone="surface">
    <SectionHeading
      eyebrow="Vertrauen"
      title="Was Kunden an einer guten Werkstatt wirklich schätzen."
      description="Nicht Show, sondern Verlässlichkeit. Viele Kunden kommen wegen der ersten Reparatur und bleiben wegen der ehrlichen Kommunikation."
      align="center"
    />
    <Grid>
      {testimonials.map((testimonial) => (
        <TestimonialCard key={testimonial.id} testimonial={testimonial} />
      ))}
    </Grid>
  </SectionContainer>
);
