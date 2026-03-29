import styled from 'styled-components';

import { contactInfo } from '../data/contact';
import { CTAButton } from './CTAButton';
import { Icon } from './Icon';
import { SecondaryButton } from './SecondaryButton';

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 70;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing(3)};
  padding: ${({ theme }) => `${theme.spacing(3)} ${theme.spacing(4)} max(${theme.spacing(3)}, env(safe-area-inset-bottom))`};
  background: rgba(16, 22, 31, 0.92);
  backdrop-filter: blur(14px);

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const PhoneContent = styled.span`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const MobileQuickActionBar = () => (
  <Wrapper>
    <SecondaryButton href={`tel:${contactInfo.phoneRaw}`} fullWidth inverse>
      <PhoneContent>
        <Icon name="phone" size={16} />
        Anrufen
      </PhoneContent>
    </SecondaryButton>
    <CTAButton to="/termin-kontakt" fullWidth>
      Termin
    </CTAButton>
  </Wrapper>
);
