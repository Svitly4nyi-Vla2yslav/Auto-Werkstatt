import { motion } from 'framer-motion';
import styled from 'styled-components';

import { fadeUpVariants, revealViewport } from './motionTokens';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

const Wrapper = styled(motion.div)<{ $align: 'left' | 'center'; $light?: boolean }>`
  max-width: 760px;
  margin: ${({ $align }) => ($align === 'center' ? '0 auto' : '0')};
  text-align: ${({ $align }) => $align};

  span {
    display: inline-flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing(2)};
    margin-bottom: ${({ theme }) => theme.spacing(4)};
    border-radius: ${({ theme }) => theme.radii.pill};
    padding: ${({ theme }) => `${theme.spacing(2)} ${theme.spacing(3)}`};
    background: ${({ theme, $light }) => ($light ? 'rgba(255,255,255,0.12)' : theme.colors.accentTint)};
    color: ${({ theme, $light }) => ($light ? theme.colors.white : theme.colors.accentStrong)};
    font-size: 0.84rem;
    font-weight: 800;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  h2 {
    font-size: clamp(2rem, 2vw + 1.4rem, 3.5rem);
  }

  p {
    margin-top: ${({ theme }) => theme.spacing(5)};
    font-size: 1.04rem;
    line-height: 1.7;
    color: ${({ theme, $light }) => ($light ? 'rgba(255,255,255,0.8)' : theme.colors.text)};
  }
`;

export const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = 'left',
  light,
}: SectionHeadingProps) => (
  <Wrapper
    $align={align}
    $light={light}
    variants={fadeUpVariants}
    initial="hidden"
    whileInView="visible"
    viewport={revealViewport}
  >
    {eyebrow ? <span>{eyebrow}</span> : null}
    <h2>{title}</h2>
    {description ? <p>{description}</p> : null}
  </Wrapper>
);
