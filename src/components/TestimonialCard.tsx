import { motion } from 'framer-motion';
import styled from 'styled-components';

import type { Testimonial } from '../types/testimonial';
import { fadeUpVariants, revealViewport } from './motionTokens';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const Card = styled(motion.article)`
  display: grid;
  gap: ${({ theme }) => theme.spacing(4)};
  height: 100%;
  padding: ${({ theme }) => theme.spacing(6)};
  border-radius: ${({ theme }) => theme.radii.lg};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadows.sm};
`;

const Quote = styled.p`
  font-size: 1.02rem;
  line-height: 1.75;
  color: ${({ theme }) => theme.colors.heading};
`;

const Meta = styled.footer`
  display: grid;
  gap: ${({ theme }) => theme.spacing(1)};

  strong {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.heading};
  }

  span {
    color: ${({ theme }) => theme.colors.textMuted};
  }
`;

const Highlight = styled.div`
  display: inline-flex;
  width: fit-content;
  border-radius: ${({ theme }) => theme.radii.pill};
  padding: ${({ theme }) => `${theme.spacing(2)} ${theme.spacing(3)}`};
  background: ${({ theme }) => theme.colors.accentTint};
  color: ${({ theme }) => theme.colors.accentStrong};
  font-weight: 800;
  font-size: 0.85rem;
`;

export const TestimonialCard = ({ testimonial }: TestimonialCardProps) => (
  <Card
    variants={fadeUpVariants}
    initial="hidden"
    whileInView="visible"
    viewport={revealViewport}
  >
    <Highlight>{testimonial.highlight}</Highlight>
    <Quote>"{testimonial.quote}"</Quote>
    <Meta>
      <strong>{testimonial.name}</strong>
      <span>{testimonial.vehicle}</span>
    </Meta>
  </Card>
);
