import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { contactInfo } from '../data/contact';
import { legalNavigation, primaryNavigation } from '../data/navigation';
import { useLockBodyScroll } from '../hooks/useLockBodyScroll';
import { CTAButton } from './CTAButton';
import { SecondaryButton } from './SecondaryButton';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const Overlay = styled.div<{ $open: boolean }>`
  position: fixed;
  inset: 0;
  z-index: 90;
  display: ${({ $open }) => ($open ? 'block' : 'none')};
  background: rgba(5, 7, 10, 0.52);

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`;

const Panel = styled.aside`
  position: absolute;
  top: 0;
  right: 0;
  width: min(100%, 360px);
  height: 100%;
  padding: ${({ theme }) => theme.spacing(6)};
  background: ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  overflow-y: auto;
`;

const CloseRow = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: ${({ theme }) => theme.spacing(6)};
`;

const CloseButton = styled.button`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.surfaceAlt};
  color: ${({ theme }) => theme.colors.heading};
  font-size: 1.5rem;
`;

const NavList = styled.nav`
  display: grid;
  gap: ${({ theme }) => theme.spacing(2)};
`;

const NavItem = styled(NavLink)`
  padding: ${({ theme }) => `${theme.spacing(3)} ${theme.spacing(2)}`};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.heading};
  font-weight: 800;

  &.active {
    color: ${({ theme }) => theme.colors.accentStrong};
  }
`;

const ActionStack = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing(3)};
  margin-top: ${({ theme }) => theme.spacing(8)};
`;

const Meta = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing(2)};
  margin-top: ${({ theme }) => theme.spacing(8)};
  padding-top: ${({ theme }) => theme.spacing(6)};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.6;
`;

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  useLockBodyScroll(isOpen);

  return (
    <Overlay $open={isOpen} onClick={onClose} aria-hidden={!isOpen}>
      <Panel id="mobile-navigation" onClick={(event) => event.stopPropagation()}>
        <CloseRow>
          <CloseButton type="button" onClick={onClose} aria-label="Menü schließen">
            ×
          </CloseButton>
        </CloseRow>

        <NavList aria-label="Mobile Navigation">
          {primaryNavigation.map((item) => (
            <NavItem key={item.to} to={item.to} onClick={onClose}>
              {item.label}
            </NavItem>
          ))}
          {legalNavigation.map((item) => (
            <NavItem key={item.to} to={item.to} onClick={onClose}>
              {item.label}
            </NavItem>
          ))}
        </NavList>

        <ActionStack>
          <CTAButton to="/termin-kontakt" fullWidth>
            Termin anfragen
          </CTAButton>
          <SecondaryButton href={`tel:${contactInfo.phoneRaw}`} fullWidth>
            {contactInfo.phoneDisplay}
          </SecondaryButton>
        </ActionStack>

        <Meta>
          <strong>{contactInfo.businessName}</strong>
          <span>{contactInfo.addressLine1}</span>
          <span>
            {contactInfo.postalCode} {contactInfo.city}
          </span>
        </Meta>
      </Panel>
    </Overlay>
  );
};
