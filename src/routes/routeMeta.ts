import type { RouteMeta } from '../types/route';

export const routeMeta: Record<string, RouteMeta> = {
  home: {
    path: '/',
    label: 'Start',
    title: 'AutoWerk Musterstadt | Moderne Auto Werkstatt in Musterstadt',
    description:
      'AutoWerk Musterstadt ist Ihre moderne Auto Werkstatt in Musterstadt für Inspektion, Ölwechsel, Bremsenservice, Diagnose und schnelle Termine.',
  },
  services: {
    path: '/leistungen',
    label: 'Leistungen',
    title: 'Leistungen | AutoWerk Musterstadt',
    description:
      'Alle Leistungen von AutoWerk Musterstadt: Inspektion, Ölwechsel, Bremsenservice, Reifenservice, Klimaservice, Diagnose und Reparaturen.',
  },
  about: {
    path: '/ueber-uns',
    label: 'Über uns',
    title: 'Über uns | AutoWerk Musterstadt',
    description:
      'Lernen Sie AutoWerk Musterstadt kennen: persönliche Beratung, ehrliche Abläufe und zuverlässiger Werkstattservice für Kunden aus Musterstadt.',
  },
  contact: {
    path: '/termin-kontakt',
    label: 'Termin / Kontakt',
    title: 'Termin & Kontakt | AutoWerk Musterstadt',
    description:
      'Termin anfragen, anrufen oder per WhatsApp schreiben: Alle Kontaktmöglichkeiten von AutoWerk Musterstadt auf einen Blick.',
  },
  faq: {
    path: '/faq',
    label: 'FAQ',
    title: 'FAQ | AutoWerk Musterstadt',
    description:
      'Antworten auf häufige Fragen zu Terminen, Inspektion, Kosten, HU/AU-Vorbereitung und Reparaturen bei AutoWerk Musterstadt.',
  },
  imprint: {
    path: '/impressum',
    label: 'Impressum',
    title: 'Impressum | AutoWerk Musterstadt',
    description: 'Impressum der AutoWerk Musterstadt GmbH mit Ansprechpartnern und Pflichtangaben.',
  },
  privacy: {
    path: '/datenschutz',
    label: 'Datenschutz',
    title: 'Datenschutz | AutoWerk Musterstadt',
    description: 'Datenschutzhinweise der AutoWerk Musterstadt GmbH für Website-Anfragen und Kontaktformulare.',
  },
};
