export type ServiceIcon =
  | 'inspection'
  | 'oil'
  | 'brakes'
  | 'tires'
  | 'huau'
  | 'climate'
  | 'diagnostic'
  | 'repair'
  | 'battery'
  | 'fleet';

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: ServiceIcon;
  highlights: string[];
}
