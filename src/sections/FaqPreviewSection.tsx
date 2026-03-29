import styled from 'styled-components';

import { faqs } from '../data/faqs';
import { CTAButton } from '../components/CTAButton';
import { FAQAccordion } from '../components/FAQAccordion';
import { SectionContainer } from '../components/SectionContainer';
import { SectionHeading } from '../components/SectionHeading';

const Layout = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing(8)};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
    align-items: start;
  }
`;

const Sidebar = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing(5)};
`;

export const FaqPreviewSection = () => (
  <SectionContainer>
    <Layout>
      <Sidebar>
        <SectionHeading
          eyebrow="FAQ"
          title="Die wichtigsten Fragen vor dem Werkstatttermin."
          description="Klare Antworten helfen schon vor dem ersten Anruf. Weitere Details finden Sie auf der vollständigen FAQ-Seite."
        />
        <CTAButton to="/faq">Alle Fragen ansehen</CTAButton>
      </Sidebar>
      <FAQAccordion items={faqs.slice(0, 4)} />
    </Layout>
  </SectionContainer>
);
