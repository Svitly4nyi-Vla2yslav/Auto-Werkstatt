import styled from 'styled-components';

import { contactInfo } from '../data/contact';
import { Icon } from '../components/Icon';
import { SectionContainer } from '../components/SectionContainer';

const Grid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing(4)};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

const Item = styled.article`
  display: grid;
  gap: ${({ theme }) => theme.spacing(2)};
  padding: ${({ theme }) => theme.spacing(5)};
  border-radius: ${({ theme }) => theme.radii.lg};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadows.sm};

  strong {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.heading};
  }

  p {
    line-height: 1.65;
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

const items = [
  {
    icon: 'calendar' as const,
    title: 'Schnelle Terminvergabe',
    text: 'Viele Standardleistungen sind oft noch in derselben Woche möglich.',
  },
  {
    icon: 'shield' as const,
    title: 'Meisterbetrieb mit Klartext',
    text: 'Verständliche Beratung statt unnötiger Werkstattbegriffe.',
  },
  {
    icon: 'phone' as const,
    title: 'Direkt erreichbar',
    text: `Telefonisch schnell erreichbar unter ${contactInfo.phoneDisplay}.`,
  },
  {
    icon: 'check' as const,
    title: 'Transparente Reparaturen',
    text: 'Wir sprechen Kosten und Umfang vor größeren Arbeiten offen mit Ihnen ab.',
  },
];

export const TrustStripSection = () => (
  <SectionContainer>
    <Grid>
      {items.map((item) => (
        <Item key={item.title}>
          <IconWrap>
            <Icon name={item.icon} size={18} />
          </IconWrap>
          <strong>{item.title}</strong>
          <p>{item.text}</p>
        </Item>
      ))}
    </Grid>
  </SectionContainer>
);
