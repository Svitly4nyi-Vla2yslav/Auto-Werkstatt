import { useState } from 'react';

import { services } from '../data/services';
import { CTAButton } from './CTAButton';
import {
  Feedback,
  Field,
  FieldGrid,
  FormCard,
  FormHeader,
  Input,
  Select,
  TextArea,
} from './formStyles';
import { fadeUpVariants, revealViewport } from './motionTokens';

interface AppointmentFormState {
  name: string;
  phone: string;
  email: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  vehicle: string;
  issue: string;
}

const initialState: AppointmentFormState = {
  name: '',
  phone: '',
  email: '',
  service: '',
  preferredDate: '',
  preferredTime: '',
  vehicle: '',
  issue: '',
};

export const AppointmentForm = () => {
  const [formState, setFormState] = useState<AppointmentFormState>(initialState);
  const [status, setStatus] = useState<'idle' | 'success' | 'error' | 'submitting'>('idle');

  const handleChange = (field: keyof AppointmentFormState, value: string) => {
    setFormState((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formState.name || !formState.phone || !formState.service || !formState.preferredDate) {
      setStatus('error');
      return;
    }

    setStatus('submitting');
    await new Promise((resolve) => setTimeout(resolve, 900));
    setStatus('success');
    setFormState(initialState);
  };

  return (
    <FormCard
      onSubmit={handleSubmit}
      variants={fadeUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={revealViewport}
    >
      <FormHeader>
        <h2>Termin anfragen</h2>
        <p>
          Wählen Sie die gewünschte Leistung, nennen Sie Ihr Zeitfenster und beschreiben Sie kurz
          das Anliegen. So können wir schneller passend planen.
        </p>
      </FormHeader>

      <FieldGrid>
        <Field>
          <span>Name</span>
          <Input
            value={formState.name}
            onChange={(event) => handleChange('name', event.target.value)}
            aria-label="Name"
          />
        </Field>
        <Field>
          <span>Telefon</span>
          <Input
            value={formState.phone}
            onChange={(event) => handleChange('phone', event.target.value)}
            aria-label="Telefon"
          />
        </Field>
      </FieldGrid>

      <FieldGrid>
        <Field>
          <span>E-Mail</span>
          <Input
            type="email"
            value={formState.email}
            onChange={(event) => handleChange('email', event.target.value)}
            aria-label="E-Mail"
          />
        </Field>
        <Field>
          <span>Fahrzeug</span>
          <Input
            placeholder="z. B. VW Golf 7, 2019"
            value={formState.vehicle}
            onChange={(event) => handleChange('vehicle', event.target.value)}
            aria-label="Fahrzeug"
          />
        </Field>
      </FieldGrid>

      <FieldGrid>
        <Field>
          <span>Leistung</span>
          <Select
            value={formState.service}
            onChange={(event) => handleChange('service', event.target.value)}
            aria-label="Leistung"
          >
            <option value="">Bitte auswählen</option>
            {services.map((service) => (
              <option key={service.id} value={service.title}>
                {service.title}
              </option>
            ))}
          </Select>
        </Field>
        <Field>
          <span>Wunschtermin</span>
          <Input
            type="date"
            value={formState.preferredDate}
            onChange={(event) => handleChange('preferredDate', event.target.value)}
            aria-label="Wunschtermin"
          />
        </Field>
      </FieldGrid>

      <Field>
        <span>Bevorzugte Uhrzeit</span>
        <Select
          value={formState.preferredTime}
          onChange={(event) => handleChange('preferredTime', event.target.value)}
          aria-label="Bevorzugte Uhrzeit"
        >
          <option value="">Bitte auswählen</option>
          <option value="morgens">Morgens</option>
          <option value="mittags">Mittags</option>
          <option value="nachmittags">Nachmittags</option>
          <option value="flexibel">Flexibel</option>
        </Select>
      </Field>

      <Field>
        <span>Problem / Hinweis</span>
        <TextArea
          placeholder="Zum Beispiel Geräusche, Warnleuchte, Reifenwechsel oder gewünschte Wartung."
          value={formState.issue}
          onChange={(event) => handleChange('issue', event.target.value)}
          aria-label="Problem oder Hinweis"
        />
      </Field>

      {status === 'success' ? (
        <Feedback $tone="success">Ihre Terminanfrage wurde im Demo-Frontend erfolgreich erfasst.</Feedback>
      ) : null}
      {status === 'error' ? (
        <Feedback $tone="error">Bitte füllen Sie Name, Telefon, Leistung und Wunschtermin aus.</Feedback>
      ) : null}

      <CTAButton type="submit" fullWidth>
        {status === 'submitting' ? 'Anfrage wird gesendet...' : 'Termin anfragen'}
      </CTAButton>
    </FormCard>
  );
};
