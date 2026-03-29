import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import type { Service } from '../types/service';
import { Icon } from './Icon';
import { fadeUpVariants, revealViewport } from './motionTokens';

interface ServiceCardProps {
  service: Service;
  compact?: boolean;
}

const Card = styled(motion.article)<{ $compact?: boolean }>`
  display: grid;
  gap: ${({ theme }) => theme.spacing(4)};
  height: 100%;
  padding: ${({ theme }) => theme.spacing(6)};
  border-radius: ${({ theme }) => theme.radii.lg};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  transition:
    transform ${({ theme }) => theme.transitions.base},
    border-color ${({ theme }) => theme.transitions.base},
    box-shadow ${({ theme }) => theme.transitions.base};

  &:hover {
    transform: translateY(-4px);
    border-color: ${({ theme }) => theme.colors.borderStrong};
    box-shadow: ${({ theme }) => theme.shadows.md};
  }

  ${({ $compact, theme }) => $compact && `padding: ${theme.spacing(5)};`}
`;

const IconWrap = styled.div`
  display: inline-grid;
  place-items: center;
  width: 52px;
  height: 52px;
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ theme }) => theme.colors.accentTint};
  color: ${({ theme }) => theme.colors.accentStrong};
`;

const Content = styled.div`
  h3 {
    font-size: 1.3rem;
  }

  p {
    margin-top: ${({ theme }) => theme.spacing(3)};
    line-height: 1.72;
  }
`;

const Highlights = styled.ul`
  display: grid;
  gap: ${({ theme }) => theme.spacing(2)};

  li {
    display: inline-flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing(2)};
    font-weight: 700;
    color: ${({ theme }) => theme.colors.heading};
  }
`;

const ServiceLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
  width: fit-content;
  margin-top: auto;
  color: ${({ theme }) => theme.colors.accentStrong};
  font-weight: 800;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const ServiceCard = ({ service, compact }: ServiceCardProps) => (
  <Card
    $compact={compact}
    variants={fadeUpVariants}
    initial="hidden"
    whileInView="visible"
    viewport={revealViewport}
  >
    <IconWrap>
      <Icon name={service.icon} />
    </IconWrap>
    <Content>
      <h3>{service.title}</h3>
      <p>{compact ? service.shortDescription : service.fullDescription}</p>
    </Content>
    <Highlights>
      {service.highlights.map((highlight) => (
        <li key={highlight}>
          <Icon name="check" size={16} />
          {highlight}
        </li>
      ))}
    </Highlights>
    <ServiceLink to="/termin-kontakt">
      Termin anfragen
      <Icon name="arrow" size={16} />
    </ServiceLink>
  </Card>
);
