import styled from 'styled-components';

export const LegalArticle = styled.article`
  display: grid;
  gap: ${({ theme }) => theme.spacing(8)};
  line-height: 1.8;

  h2 {
    font-size: 1.45rem;
    margin-bottom: ${({ theme }) => theme.spacing(3)};
  }

  h3 {
    font-size: 1.08rem;
    margin-bottom: ${({ theme }) => theme.spacing(2)};
  }

  p + p {
    margin-top: ${({ theme }) => theme.spacing(3)};
  }
`;

export const LegalSection = styled.section`
  padding: ${({ theme }) => theme.spacing(6)};
  border-radius: ${({ theme }) => theme.radii.xl};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadows.sm};
`;

export const LegalList = styled.ul`
  display: grid;
  gap: ${({ theme }) => theme.spacing(2)};
  margin-top: ${({ theme }) => theme.spacing(3)};

  li {
    line-height: 1.75;
  }
`;
