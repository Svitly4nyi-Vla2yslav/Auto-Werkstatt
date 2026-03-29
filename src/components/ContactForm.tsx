import { useState } from 'react';

import { CTAButton } from './CTAButton';
import {
  Feedback,
  Field,
  FieldGrid,
  FormCard,
  FormHeader,
  Input,
  TextArea,
} from './formStyles';
import { fadeUpVariants, revealViewport } from './motionTokens';

interface ContactFormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const initialState: ContactFormState = {
  name: '',
  email: '',
  phone: '',
  message: '',
};

export const ContactForm = () => {
  const [formState, setFormState] = useState<ContactFormState>(initialState);
  const [status, setStatus] = useState<'idle' | 'success' | 'error' | 'submitting'>('idle');

  const handleChange = (field: keyof ContactFormState, value: string) => {
    setFormState((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formState.name || (!formState.email && !formState.phone) || !formState.message) {
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
        <h2>Kontaktformular</h2>
        <p>
          Schreiben Sie uns kurz, worum es geht. Wir melden uns schnell mit einer passenden
          Rückmeldung zurück.
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
          <span>E-Mail</span>
          <Input
            type="email"
            value={formState.email}
            onChange={(event) => handleChange('email', event.target.value)}
            aria-label="E-Mail"
          />
        </Field>
      </FieldGrid>

      <Field>
        <span>Telefon</span>
        <Input
          value={formState.phone}
          onChange={(event) => handleChange('phone', event.target.value)}
          aria-label="Telefon"
        />
      </Field>

      <Field>
        <span>Nachricht</span>
        <TextArea
          value={formState.message}
          onChange={(event) => handleChange('message', event.target.value)}
          aria-label="Nachricht"
        />
      </Field>

      {status === 'success' ? (
        <Feedback $tone="success">Ihre Anfrage wurde im Demo-Frontend erfolgreich erfasst.</Feedback>
      ) : null}
      {status === 'error' ? (
        <Feedback $tone="error">Bitte füllen Sie Name, Nachricht und mindestens eine Kontaktmöglichkeit aus.</Feedback>
      ) : null}

      <CTAButton type="submit" fullWidth>
        {status === 'submitting' ? 'Wird gesendet...' : 'Nachricht senden'}
      </CTAButton>
    </FormCard>
  );
};
