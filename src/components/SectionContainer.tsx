import type { ElementType, ReactNode } from 'react';
import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

import { fadeUpVariants, revealViewport } from './motionTokens';

type Tone = 'default' | 'surface' | 'dark' | 'accent';

interface SectionContainerProps {
  children: ReactNode;
  as?: ElementType;
  id?: string;
  tone?: Tone;
  narrow?: boolean;
}

const backgroundByTone = {
  default: css`
    background: transparent;
  `,
  surface: css`
    background: ${({ theme }) => theme.colors.surface};
  `,
  dark: css`
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0)),
      ${({ theme }) => theme.colors.elevated};
    color: rgba(255, 255, 255, 0.88);
  `,
  accent: css`
    background:
      radial-gradient(circle at top right, rgba(255, 255, 255, 0.16), transparent 34%),
      linear-gradient(135deg, ${({ theme }) => theme.colors.accent} 0%, ${({ theme }) => theme.colors.accentStrong} 100%);
    color: ${({ theme }) => theme.colors.white};
  `,
};

const Outer = styled.section<{ $tone: Tone }>`
  ${({ $tone }) => backgroundByTone[$tone]}
  padding: ${({ theme }) => `${theme.spacing(18)} ${theme.spacing(5)}`};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => `${theme.spacing(24)} ${theme.spacing(8)}`};
  }
`;

const Inner = styled(motion.div)<{ $narrow?: boolean }>`
  width: min(100%, ${({ theme, $narrow }) => ($narrow ? theme.layout.narrow : theme.layout.base)});
  margin: 0 auto;
`;

export const SectionContainer = ({ children, as, id, tone = 'default', narrow }: SectionContainerProps) => (
  <Outer as={as} id={id} $tone={tone}>
    <Inner
      $narrow={narrow}
      variants={fadeUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={revealViewport}
    >
      {children}
    </Inner>
  </Outer>
);
