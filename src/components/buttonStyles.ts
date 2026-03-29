import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export interface BaseActionProps {
  children: ReactNode;
  to?: string;
  href?: string;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  fullWidth?: boolean;
  inverse?: boolean;
  ariaLabel?: string;
  target?: AnchorHTMLAttributes<HTMLAnchorElement>['target'];
  rel?: AnchorHTMLAttributes<HTMLAnchorElement>['rel'];
  onClick?: () => void;
}

const baseStyles = css<{ $fullWidth?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(2)};
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'fit-content')};
  min-height: 54px;
  padding: ${({ theme }) => `${theme.spacing(4)} ${theme.spacing(6)}`};
  border-radius: ${({ theme }) => theme.radii.pill};
  font-weight: 800;
  letter-spacing: -0.02em;
  transition:
    transform ${({ theme }) => theme.transitions.base},
    box-shadow ${({ theme }) => theme.transitions.base},
    background-color ${({ theme }) => theme.transitions.base},
    color ${({ theme }) => theme.transitions.base},
    border-color ${({ theme }) => theme.transitions.base};

  &:hover {
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const primaryStyles = css`
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 18px 40px rgba(236, 107, 45, 0.26);

  &:hover {
    background: ${({ theme }) => theme.colors.accentStrong};
  }
`;

const secondaryStyles = css<{ $inverse?: boolean }>`
  background: transparent;
  color: ${({ theme, $inverse }) => ($inverse ? theme.colors.white : theme.colors.heading)};
  border: 1px solid
    ${({ theme, $inverse }) => ($inverse ? 'rgba(255, 255, 255, 0.28)' : theme.colors.borderStrong)};

  &:hover {
    border-color: ${({ theme, $inverse }) => ($inverse ? 'rgba(255, 255, 255, 0.5)' : theme.colors.accent)};
    color: ${({ theme, $inverse }) => ($inverse ? theme.colors.white : theme.colors.accentStrong)};
    background: ${({ $inverse }) => ($inverse ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.4)')};
  }
`;

export const PrimaryLink = styled(Link)<{ $fullWidth?: boolean }>`
  ${baseStyles}
  ${primaryStyles}
`;

export const PrimaryAnchor = styled.a<{ $fullWidth?: boolean }>`
  ${baseStyles}
  ${primaryStyles}
`;

export const PrimaryButton = styled.button<{ $fullWidth?: boolean }>`
  ${baseStyles}
  ${primaryStyles}
`;

export const SecondaryLink = styled(Link)<{ $fullWidth?: boolean; $inverse?: boolean }>`
  ${baseStyles}
  ${secondaryStyles}
`;

export const SecondaryAnchor = styled.a<{ $fullWidth?: boolean; $inverse?: boolean }>`
  ${baseStyles}
  ${secondaryStyles}
`;

export const SecondaryButtonElement = styled.button<{ $fullWidth?: boolean; $inverse?: boolean }>`
  ${baseStyles}
  ${secondaryStyles}
`;
