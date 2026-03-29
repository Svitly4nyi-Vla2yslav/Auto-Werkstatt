import styled from 'styled-components';

import { Icon } from './Icon';

interface TrustBadgeProps {
  label: string;
}

const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
  border-radius: ${({ theme }) => theme.radii.pill};
  padding: ${({ theme }) => `${theme.spacing(2.5)} ${theme.spacing(3.5)}`};
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: ${({ theme }) => theme.colors.white};
  font-size: 0.95rem;
  font-weight: 700;
`;

const IconWrap = styled.span`
  display: inline-grid;
  place-items: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.12);
`;

export const TrustBadge = ({ label }: TrustBadgeProps) => (
  <Badge>
    <IconWrap>
      <Icon name="check" size={16} />
    </IconWrap>
    {label}
  </Badge>
);
