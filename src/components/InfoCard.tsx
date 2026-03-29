import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

import { fadeUpVariants, revealViewport } from './motionTokens';

interface InfoCardProps {
  icon?: ReactNode;
  title: string;
  children: ReactNode;
}

const Card = styled(motion.article)`
  display: grid;
  gap: ${({ theme }) => theme.spacing(3)};
  height: 100%;
  padding: ${({ theme }) => theme.spacing(5)};
  border-radius: ${({ theme }) => theme.radii.lg};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadows.sm};
`;

const Header = styled.div`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(3)};

  h3 {
    font-size: 1.08rem;
  }
`;

const IconWrap = styled.div`
  display: inline-grid;
  place-items: center;
  width: 42px;
  height: 42px;
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ theme }) => theme.colors.accentTint};
  color: ${({ theme }) => theme.colors.accentStrong};
`;

const Content = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing(2)};
  line-height: 1.7;
`;

export const InfoCard = ({ icon, title, children }: InfoCardProps) => (
  <Card
    variants={fadeUpVariants}
    initial="hidden"
    whileInView="visible"
    viewport={revealViewport}
  >
    <Header>
      {icon ? <IconWrap>{icon}</IconWrap> : null}
      <h3>{title}</h3>
    </Header>
    <Content>{children}</Content>
  </Card>
);
