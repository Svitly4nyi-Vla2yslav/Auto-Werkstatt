import { motion } from 'framer-motion';
import styled from 'styled-components';

export const FormCard = styled(motion.form)`
  display: grid;
  gap: ${({ theme }) => theme.spacing(4)};
  padding: ${({ theme }) => theme.spacing(6)};
  border-radius: ${({ theme }) => theme.radii.xl};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadows.md};
`;

export const FormHeader = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing(2)};

  h2 {
    font-size: 1.55rem;
  }

  p {
    line-height: 1.7;
  }
`;

export const FieldGrid = styled.div<{ $columns?: 2 | 1 }>`
  display: grid;
  gap: ${({ theme }) => theme.spacing(4)};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: ${({ $columns = 2 }) => `repeat(${$columns}, minmax(0, 1fr))`};
  }
`;

export const Field = styled.label`
  display: grid;
  gap: ${({ theme }) => theme.spacing(2)};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.heading};

  span {
    font-size: 0.95rem;
  }
`;

const inputStyles = `
  width: 100%;
  border-radius: 16px;
  border: 1px solid rgba(16, 22, 31, 0.12);
  background: #fbfcfd;
  padding: 14px 16px;
  color: #10161f;
  transition: border-color 220ms ease, box-shadow 220ms ease, background-color 220ms ease;

  &:focus {
    border-color: rgba(236, 107, 45, 0.58);
    box-shadow: 0 0 0 4px rgba(236, 107, 45, 0.12);
    outline: none;
    background: #ffffff;
  }
`;

export const Input = styled.input`
  ${inputStyles}
`;

export const Select = styled.select`
  ${inputStyles}
`;

export const TextArea = styled.textarea`
  ${inputStyles}
  min-height: 140px;
  resize: vertical;
`;

export const Feedback = styled.div<{ $tone: 'success' | 'error' }>`
  border-radius: ${({ theme }) => theme.radii.md};
  padding: ${({ theme }) => theme.spacing(4)};
  font-weight: 700;
  background: ${({ theme, $tone }) =>
    $tone === 'success' ? 'rgba(24, 122, 82, 0.10)' : 'rgba(181, 61, 42, 0.10)'};
  color: ${({ theme, $tone }) => ($tone === 'success' ? theme.colors.success : theme.colors.danger)};
`;
