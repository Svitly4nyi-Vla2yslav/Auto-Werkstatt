import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { contactInfo } from '../data/contact';
import { legalNavigation, primaryNavigation } from '../data/navigation';
import { CTAButton } from './CTAButton';
import { Icon } from './Icon';
import { Logo } from './Logo';

const Wrapper = styled.footer`
  padding: ${({ theme }) => `${theme.spacing(18)} ${theme.spacing(5)} ${theme.spacing(28)}`};
  background: ${({ theme }) => theme.colors.elevated};
  color: rgba(255, 255, 255, 0.76);

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => `${theme.spacing(20)} ${theme.spacing(8)} ${theme.spacing(12)}`};
  }
`;

const Inner = styled.div`
  width: min(100%, ${({ theme }) => theme.layout.base});
  margin: 0 auto;
  display: grid;
  gap: ${({ theme }) => theme.spacing(10)};
`;

const Top = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing(8)};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1.2fr 0.9fr 0.9fr 1fr;
  }
`;

const BrandColumn = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing(5)};

  p {
    max-width: 360px;
    line-height: 1.75;
  }
`;

const Column = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing(4)};

  h3 {
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.08rem;
  }

  ul {
    display: grid;
    gap: ${({ theme }) => theme.spacing(3)};
  }

  li,
  a,
  span {
    color: rgba(255, 255, 255, 0.72);
    line-height: 1.7;
  }
`;

const FooterLink = styled(Link)`
  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }
`;

const ContactRow = styled.a`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
  width: fit-content;
  font-weight: 700;

  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }
`;

const Bottom = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(3)};
  padding-top: ${({ theme }) => theme.spacing(6)};
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  font-size: 0.95rem;
`;

export const Footer = () => (
  <Wrapper>
    <Inner>
      <Top>
        <BrandColumn>
          <Logo inverted />
          <p>
            Moderne Auto Werkstatt in Musterstadt mit Fokus auf klare Kommunikation, planbare
            Termine und zuverlässige Lösungen für den Alltag.
          </p>
          <CTAButton to="/termin-kontakt">Termin anfragen</CTAButton>
        </BrandColumn>

        <Column>
          <h3>Navigation</h3>
          <ul>
            {primaryNavigation.map((item) => (
              <li key={item.to}>
                <FooterLink to={item.to}>{item.label}</FooterLink>
              </li>
            ))}
          </ul>
        </Column>

        <Column>
          <h3>Kontakt</h3>
          <ContactRow href={`tel:${contactInfo.phoneRaw}`}>
            <Icon name="phone" size={16} />
            {contactInfo.phoneDisplay}
          </ContactRow>
          <ContactRow href={`mailto:${contactInfo.email}`}>
            <Icon name="chat" size={16} />
            {contactInfo.email}
          </ContactRow>
          <span>{contactInfo.addressLine1}</span>
          <span>
            {contactInfo.postalCode} {contactInfo.city}
          </span>
        </Column>

        <Column>
          <h3>Öffnungszeiten</h3>
          <ul>
            {contactInfo.hours.map((entry) => (
              <li key={entry.day}>
                <strong>{entry.day}:</strong> {entry.hours}
              </li>
            ))}
          </ul>
        </Column>
      </Top>

      <Bottom>
        <span>© 2026 {contactInfo.businessName}. Alle Rechte vorbehalten.</span>
        <span>
          {legalNavigation.map((item, index) => (
            <span key={item.to}>
              <FooterLink to={item.to}>{item.label}</FooterLink>
              {index < legalNavigation.length - 1 ? ' · ' : ''}
            </span>
          ))}
        </span>
      </Bottom>
    </Inner>
  </Wrapper>
);
