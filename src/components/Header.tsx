import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { contactInfo } from '../data/contact';
import { primaryNavigation } from '../data/navigation';
import { CTAButton } from './CTAButton';
import { Icon } from './Icon';
import { Logo } from './Logo';
import { MobileMenu } from './MobileMenu';

const Wrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 80;
  backdrop-filter: blur(16px);
  background: rgba(244, 245, 247, 0.84);
  border-bottom: 1px solid rgba(16, 22, 31, 0.08);
`;

const Inner = styled.div`
  width: min(100%, ${({ theme }) => theme.layout.base});
  margin: 0 auto;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(4)};
  padding: ${({ theme }) => `${theme.spacing(3)} ${theme.spacing(5)}`};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => `${theme.spacing(4)} ${theme.spacing(8)}`};
  }
`;

const Nav = styled.nav`
  display: none;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(5)};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: flex;
  }
`;

const NavItem = styled(NavLink)`
  position: relative;
  padding: ${({ theme }) => `${theme.spacing(2)} 0`};
  color: ${({ theme }) => theme.colors.heading};
  font-weight: 700;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 100%;
    height: 2px;
    transform: scaleX(0);
    transform-origin: left;
    background: ${({ theme }) => theme.colors.accent};
    transition: transform ${({ theme }) => theme.transitions.base};
  }

  &:hover::after,
  &.active::after {
    transform: scaleX(1);
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(3)};
`;

const CallLink = styled.a`
  display: none;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
  color: ${({ theme }) => theme.colors.heading};
  font-weight: 800;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: inline-flex;
  }
`;

const DesktopCTA = styled.div`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
  }
`;

const MenuButton = styled.button`
  display: inline-grid;
  place-items: center;
  width: 46px;
  height: 46px;
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`;

const MenuLines = styled.span`
  display: grid;
  gap: 4px;

  i {
    display: block;
    width: 18px;
    height: 2px;
    border-radius: 999px;
    background: ${({ theme }) => theme.colors.heading};
  }
`;

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <Wrapper>
        <Inner>
          <Logo />
          <Nav aria-label="Hauptnavigation">
            {primaryNavigation.map((item) => (
              <NavItem key={item.to} to={item.to} end={item.to === '/'}>
                {item.label}
              </NavItem>
            ))}
          </Nav>
          <Right>
            <CallLink href={`tel:${contactInfo.phoneRaw}`}>
              <Icon name="phone" size={18} />
              {contactInfo.phoneDisplay}
            </CallLink>
            <DesktopCTA>
              <CTAButton to="/termin-kontakt">Termin anfragen</CTAButton>
            </DesktopCTA>
            <MenuButton
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Menü öffnen"
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
            >
              <MenuLines aria-hidden="true">
                <i />
                <i />
                <i />
              </MenuLines>
            </MenuButton>
          </Right>
        </Inner>
      </Wrapper>
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
};
