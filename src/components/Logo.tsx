import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { BrandMark } from '../assets/BrandMark';

const Brand = styled(Link)<{ $inverted?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(3)};
  flex-shrink: 0;
`;

const Mark = styled(BrandMark)`
  width: 46px;
  color: ${({ theme }) => theme.colors.accent};
`;

const Copy = styled.div<{ $inverted?: boolean }>`
  display: grid;
  gap: 2px;

  strong {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: 1.08rem;
    font-weight: 700;
    color: ${({ theme, $inverted }) => ($inverted ? theme.colors.white : theme.colors.heading)};
  }

  span {
    font-size: 0.85rem;
    color: ${({ theme, $inverted }) => ($inverted ? 'rgba(255,255,255,0.66)' : theme.colors.textMuted)};
  }
`;

interface LogoProps {
  inverted?: boolean;
}

export const Logo = ({ inverted }: LogoProps) => (
  <Brand to="/" aria-label="AutoWerk Musterstadt Startseite" $inverted={inverted}>
    <Mark />
    <Copy $inverted={inverted}>
      <strong>AutoWerk Musterstadt</strong>
      <span>Moderne Werkstatt. Klare Lösungen.</span>
    </Copy>
  </Brand>
);
