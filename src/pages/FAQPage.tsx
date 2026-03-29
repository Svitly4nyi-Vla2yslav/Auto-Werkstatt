import styled from 'styled-components';

import { contactInfo } from '../data/contact';
import { faqs } from '../data/faqs';
import { CTAButton } from '../components/CTAButton';
import { FAQAccordion } from '../components/FAQAccordion';
import { Icon } from '../components/Icon';
import { InfoCard } from '../components/InfoCard';
import { PageHero } from '../components/PageHero';
import { SectionContainer } from '../components/SectionContainer';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { routeMeta } from '../routes/routeMeta';

const Layout = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing(8)};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: minmax(0, 0.92fr) minmax(0, 1.08fr);
    align-items: start;
  }
`;

const Aside = styled.aside`
  display: grid;
  gap: ${({ theme }) => theme.spacing(5)};
`;

const FAQPage = () => {
  useDocumentMeta(routeMeta.faq.title, routeMeta.faq.description);

  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Häufige Fragen zur Werkstatt, zu Terminen und zu typischen Abläufen."
        description="Diese Fragen sind bewusst nah an echten Kundenanliegen formuliert. So wirkt die Seite glaubwürdig und hilft Besuchern schon vor dem ersten Kontakt weiter."
        primaryCta={{ label: 'Termin anfragen', to: '/termin-kontakt' }}
        secondaryCta={{ label: 'Jetzt anrufen', href: `tel:${contactInfo.phoneRaw}` }}
      />

      <SectionContainer>
        <Layout>
          <Aside>
            <InfoCard icon={<Icon name="calendar" size={18} />} title="Schnelle Rückmeldung">
              <p>Wenn Ihre Frage hier nicht beantwortet wird, reichen oft zwei Sätze per Telefon oder WhatsApp.</p>
            </InfoCard>
            <InfoCard icon={<Icon name="shield" size={18} />} title="Klare Einschätzung">
              <p>Wir sagen offen, was telefonisch sinnvoll einschätzbar ist und wann ein kurzer Vor-Ort-Termin besser ist.</p>
            </InfoCard>
            <CTAButton to="/termin-kontakt">Kontakt aufnehmen</CTAButton>
          </Aside>
          <FAQAccordion items={faqs} />
        </Layout>
      </SectionContainer>
    </>
  );
};

export default FAQPage;
