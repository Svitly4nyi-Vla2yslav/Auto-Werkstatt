import type { Service } from '../types/service';

export const services: Service[] = [
  {
    id: 'inspektion',
    title: 'Inspektion',
    shortDescription: 'Herstellergerechte Wartung mit klarer Beratung und digitaler Dokumentation.',
    fullDescription:
      'Wir führen Ihre Inspektion sauber, nachvollziehbar und terminsicher durch, damit Ihr Fahrzeug zuverlässig im Alltag bleibt.',
    icon: 'inspection',
    highlights: ['Nach Herstellervorgaben', 'Digitale Rückmeldung', 'Klare Kostenübersicht'],
  },
  {
    id: 'oelwechsel',
    title: 'Ölwechsel',
    shortDescription: 'Schneller Service mit passendem Öl, Filterwechsel und Blick auf die wichtigsten Verschleißpunkte.',
    fullDescription:
      'Ein sauberer Ölwechsel schützt den Motor und spart Folgekosten. Wir arbeiten mit freigegebenen Produkten und transparenten Preisen.',
    icon: 'oil',
    highlights: ['Markenöle', 'Filter inklusive', 'Kurzfristige Termine'],
  },
  {
    id: 'bremsenservice',
    title: 'Bremsenservice',
    shortDescription: 'Prüfung, Wartung und Austausch von Belägen, Scheiben und Bremsflüssigkeit.',
    fullDescription:
      'Gerade beim Thema Sicherheit beraten wir direkt und verständlich. Sie erfahren, was nötig ist und was noch warten kann.',
    icon: 'brakes',
    highlights: ['Sicherheitscheck', 'Original- oder Qualitätsersatzteile', 'Probefahrt inklusive'],
  },
  {
    id: 'reifenservice',
    title: 'Reifenwechsel & Einlagerung',
    shortDescription: 'Saisonaler Reifenservice mit Auswuchten, Sichtprüfung und optionaler Einlagerung.',
    fullDescription:
      'Wir kümmern uns um Radwechsel, Luftdruck, Profil und Lagerung, damit Sie ohne Stress in die Saison starten.',
    icon: 'tires',
    highlights: ['Reifenhotel', 'Auswuchten', 'Erinnerungsservice'],
  },
  {
    id: 'huau',
    title: 'HU / AU Vorbereitung',
    shortDescription: 'Vorab-Check mit Fokus auf typische Mängel, damit Ihr Fahrzeug bestmöglich vorbereitet ist.',
    fullDescription:
      'Wir prüfen relevante Punkte im Vorfeld, besprechen die Ergebnisse mit Ihnen und bereiten Ihr Fahrzeug zielgerichtet vor.',
    icon: 'huau',
    highlights: ['Mängel vorab erkennen', 'Planbare Kosten', 'Schnelle Abstimmung'],
  },
  {
    id: 'klimaservice',
    title: 'Klimaservice',
    shortDescription: 'Leistungsprüfung, Wartung und Reinigung für eine zuverlässig arbeitende Klimaanlage.',
    fullDescription:
      'Von der Kühlleistung bis zur Hygiene prüfen wir Ihre Anlage sorgfältig, damit es im Fahrzeug wieder angenehm bleibt.',
    icon: 'climate',
    highlights: ['Funktionsprüfung', 'Desinfektion', 'Kältemittel-Service'],
  },
  {
    id: 'diagnose',
    title: 'Diagnose',
    shortDescription: 'Moderne Fehleranalyse bei Warnleuchten, Elektronikproblemen oder unklarem Fahrverhalten.',
    fullDescription:
      'Wir lesen Fehler aus, prüfen systematisch weiter und erklären verständlich, wo die Ursache liegt und wie wir sie beheben.',
    icon: 'diagnostic',
    highlights: ['Elektronische Diagnose', 'Transparente Rücksprache', 'Gezielte Fehlersuche'],
  },
  {
    id: 'allgemeine-reparaturen',
    title: 'Allgemeine Reparaturen',
    shortDescription: 'Vom Fahrwerk bis zur Auspuffanlage übernehmen wir typische Reparaturen aller Art.',
    fullDescription:
      'Unser Team erledigt tägliche Werkstattarbeiten effizient und mit klarem Fokus auf zuverlässige, saubere Lösungen.',
    icon: 'repair',
    highlights: ['Alle Marken', 'Alltagstaugliche Lösungen', 'Saubere Ausführung'],
  },
  {
    id: 'batterie-elektrik',
    title: 'Batterie / Elektrik',
    shortDescription: 'Prüfung von Batterie, Ladesystem, Beleuchtung und wichtigen elektrischen Komponenten.',
    fullDescription:
      'Wenn Startprobleme oder elektrische Ausfälle auftreten, finden wir die Ursache schnell und sprechen die nächsten Schritte mit Ihnen ab.',
    icon: 'battery',
    highlights: ['Batterietest', 'Licht- und Ladeprüfung', 'Schnelle Hilfe im Alltag'],
  },
  {
    id: 'flottenservice',
    title: 'Gewerbekunden / Flottenservice',
    shortDescription: 'Verlässliche Wartung und Reparaturen für Firmenfahrzeuge mit planbaren Abläufen.',
    fullDescription:
      'Für kleinere Flotten und lokale Betriebe bieten wir schnelle Kommunikation, feste Ansprechpartner und terminsichere Abwicklung.',
    icon: 'fleet',
    highlights: ['Planbare Standzeiten', 'Direkte Ansprechpartner', 'Laufende Fahrzeugbetreuung'],
  },
];
