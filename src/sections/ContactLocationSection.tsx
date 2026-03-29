import styled from 'styled-components';

import { contactInfo } from '../data/contact';
import { CTAButton } from '../components/CTAButton';
import { Icon } from '../components/Icon';
import { InfoCard } from '../components/InfoCard';
import { SectionContainer } from '../components/SectionContainer';
import { SectionHeading } from '../components/SectionHeading';

const Layout = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing(8)};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 0.95fr 1.05fr;
  }
`;

const Cards = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing(4)};
  margin-top: ${({ theme }) => theme.spacing(8)};
`;

const MapPlaceholder = styled.div`
  height: 100%;
  min-height: 420px;
  border-radius: ${({ theme }) => theme.radii.xl};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background:
    linear-gradient(135deg, rgba(236, 107, 45, 0.14), transparent 40%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.85), rgba(240, 243, 246, 0.92));
  box-shadow: ${({ theme }) => theme.shadows.md};
  padding: ${({ theme }) => theme.spacing(8)};
  display: grid;
  align-content: space-between;
`;

const MapPattern = styled.div`
  position: relative;
  min-height: 220px;
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  background:
    repeating-linear-gradient(
      90deg,
      rgba(16, 22, 31, 0.05) 0,
      rgba(16, 22, 31, 0.05) 2px,
      transparent 2px,
      transparent 52px
    ),
    repeating-linear-gradient(
      180deg,
      rgba(16, 22, 31, 0.05) 0,
      rgba(16, 22, 31, 0.05) 2px,
      transparent 2px,
      transparent 46px
    ),
    #f5f6f8;

  &::after {
    content: '';
    position: absolute;
    top: 28%;
    left: 18%;
    width: 52%;
    height: 12px;
    border-radius: 999px;
    background: rgba(236, 107, 45, 0.32);
    transform: rotate(-20deg);
  }

  &::before {
    content: '';
    position: absolute;
    top: 44%;
    left: 46%;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.accent};
    box-shadow: 0 0 0 10px rgba(236, 107, 45, 0.16);
  }
`;

const MapFooter = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing(3)};

  h3 {
    font-size: 1.4rem;
  }

  p {
    line-height: 1.75;
  }
`;

export const ContactLocationSection = () => (
  <SectionContainer tone="surface">
    <Layout>
      <div>
        <SectionHeading
          eyebrow="Kontakt & Standort"
          title="Schnell erreichbar, gut organisiert und direkt vor Ort."
          description="Sie möchten anrufen, schreiben oder direkt einen Termin anfragen? Hier finden Sie alle wichtigen Kontaktwege auf einen Blick."
        />
        <Cards>
          <InfoCard icon={<Icon name="phone" size={18} />} title="Telefon">
            <a href={`tel:${contactInfo.phoneRaw}`}>{contactInfo.phoneDisplay}</a>
            <p>{contactInfo.emergencyNote}</p>
          </InfoCard>
          <InfoCard icon={<Icon name="location" size={18} />} title="Adresse">
            <p>{contactInfo.addressLine1}</p>
            <p>
              {contactInfo.postalCode} {contactInfo.city}
            </p>
          </InfoCard>
          <InfoCard icon={<Icon name="clock" size={18} />} title="Öffnungszeiten">
            {contactInfo.hours.map((entry) => (
              <p key={entry.day}>
                <strong>{entry.day}:</strong> {entry.hours}
              </p>
            ))}
          </InfoCard>
        </Cards>
      </div>

      <MapPlaceholder aria-label="Standortkarte Platzhalter">
        <MapPattern />
        <MapFooter>
          <h3>Werkstattstandort in Musterstadt</h3>
          <p>
            Hier ist bewusst ein sauberer Platzhalter für eine spätere Google-Maps- oder OpenStreetMap-Einbindung vorbereitet. Die Kontakt- und Standortinformationen sind bereits so aufgebaut, dass die Integration schnell ergänzt werden kann.
          </p>
          <CTAButton to="/termin-kontakt">Route & Termin anfragen</CTAButton>
        </MapFooter>
      </MapPlaceholder>
    </Layout>
  </SectionContainer>
);
