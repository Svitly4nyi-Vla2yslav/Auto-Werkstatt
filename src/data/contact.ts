import type { ContactInfo } from '../types/contact';

export const contactInfo: ContactInfo = {
  businessName: 'AutoWerk Musterstadt',
  legalName: 'AutoWerk Musterstadt GmbH',
  owner: 'Mehmet Kaya',
  addressLine1: 'Industriestraße 24',
  postalCode: '12345',
  city: 'Musterstadt',
  phoneDisplay: '030 1234 5678',
  phoneRaw: '+493012345678',
  whatsappRaw: '+491701234567',
  email: 'service@autowerk-musterstadt.de',
  emergencyNote: 'Bei akuten Problemen finden wir oft noch in derselben Woche einen Termin.',
  hours: [
    { day: 'Montag', hours: '07:30 - 18:00' },
    { day: 'Dienstag', hours: '07:30 - 18:00' },
    { day: 'Mittwoch', hours: '07:30 - 18:00' },
    { day: 'Donnerstag', hours: '07:30 - 18:00' },
    { day: 'Freitag', hours: '07:30 - 17:00' },
    { day: 'Samstag', hours: 'Nach Vereinbarung' },
    { day: 'Sonntag', hours: 'Geschlossen' },
  ],
};
