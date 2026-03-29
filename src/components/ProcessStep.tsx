import { motion } from 'framer-motion';
import styled from 'styled-components';

import { fadeUpVariants, revealViewport } from './motionTokens';

interface ProcessStepProps {
  index: number;
  title: string;
  description: string;
}

const Card = styled(motion.article)`
  height: 100%;
  padding: ${({ theme }) => theme.spacing(6)};
  border-radius: ${({ theme }) => theme.radii.lg};
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.12);
`;

const Number = styled.div`
  display: inline-grid;
  place-items: center;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  margin-bottom: ${({ theme }) => theme.spacing(5)};
  background: rgba(255, 255, 255, 0.12);
  color: ${({ theme }) => theme.colors.white};
  font-weight: 800;
`;

const Heading = styled.h3`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.22rem;
`;

const Copy = styled.p`
  margin-top: ${({ theme }) => theme.spacing(3)};
  color: rgba(255, 255, 255, 0.76);
  line-height: 1.7;
`;

export const ProcessStep = ({ index, title, description }: ProcessStepProps) => (
  <Card
    variants={fadeUpVariants}
    initial="hidden"
    whileInView="visible"
    viewport={revealViewport}
  >
    <Number>{String(index).padStart(2, '0')}</Number>
    <Heading>{title}</Heading>
    <Copy>{description}</Copy>
  </Card>
);
