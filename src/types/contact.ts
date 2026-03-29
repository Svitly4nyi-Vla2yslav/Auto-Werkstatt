export interface OpeningHour {
  day: string;
  hours: string;
}

export interface ContactInfo {
  businessName: string;
  legalName: string;
  owner: string;
  addressLine1: string;
  postalCode: string;
  city: string;
  phoneDisplay: string;
  phoneRaw: string;
  whatsappRaw: string;
  email: string;
  emergencyNote: string;
  hours: OpeningHour[];
}
