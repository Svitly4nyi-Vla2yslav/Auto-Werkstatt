import type { ServiceIcon } from '../types/service';

type IconName =
  | ServiceIcon
  | 'phone'
  | 'clock'
  | 'location'
  | 'chat'
  | 'check'
  | 'shield'
  | 'calendar'
  | 'team'
  | 'arrow';

interface IconProps {
  name: IconName;
  size?: number;
}

export const Icon = ({ name, size = 22 }: IconProps) => {
  const commonProps = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': true,
  };

  switch (name) {
    case 'phone':
      return (
        <svg {...commonProps}>
          <path
            d="M5 5.8C5 4.806 5.806 4 6.8 4H9.182C9.94 4 10.607 4.503 10.816 5.232L11.62 8.042C11.789 8.632 11.633 9.268 11.213 9.707L9.97 11.005C10.763 12.575 11.999 13.811 13.569 14.604L14.867 13.361C15.306 12.941 15.942 12.785 16.532 12.954L19.342 13.758C20.071 13.967 20.574 14.634 20.574 15.392V17.774C20.574 18.768 19.768 19.574 18.774 19.574H17.8C10.179 19.574 4 13.395 4 5.774V5.8H5Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'clock':
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
          <path d="M12 7.8V12L15 13.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case 'location':
      return (
        <svg {...commonProps}>
          <path
            d="M12 20C15.8 15.2 17.7 11.8 17.7 9.6C17.7 6.507 15.093 4 12 4C8.907 4 6.3 6.507 6.3 9.6C6.3 11.8 8.2 15.2 12 20Z"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <circle cx="12" cy="9.6" r="2.2" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      );
    case 'chat':
      return (
        <svg {...commonProps}>
          <path
            d="M6.4 17.8L4.8 19.2L5.3 16.8C4.5 15.8 4 14.5 4 13.2C4 9.776 7.134 7 11 7C14.866 7 18 9.776 18 13.2C18 16.624 14.866 19.4 11 19.4C9.793 19.4 8.657 19.13 7.658 18.655L6.4 17.8Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M9 12.8H13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case 'check':
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
          <path d="M8.6 12.4L10.9 14.6L15.4 9.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case 'shield':
      return (
        <svg {...commonProps}>
          <path
            d="M12 4L18 6.4V11.6C18 15.38 15.44 18.76 12 20C8.56 18.76 6 15.38 6 11.6V6.4L12 4Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path d="M9.3 12.2L11.1 14L14.8 10.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case 'calendar':
      return (
        <svg {...commonProps}>
          <rect x="4" y="6" width="16" height="14" rx="3" stroke="currentColor" strokeWidth="1.8" />
          <path d="M8 4V8M16 4V8M4 10.5H20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case 'team':
      return (
        <svg {...commonProps}>
          <circle cx="9" cy="9" r="2.8" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="16.2" cy="10.2" r="2.2" stroke="currentColor" strokeWidth="1.8" />
          <path d="M4.8 18C5.3 15.6 7.1 14 9.4 14H10.2C12.5 14 14.3 15.6 14.8 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M14.2 17.2C14.5 15.6 15.7 14.5 17.3 14.5C18.3 14.5 19.2 14.9 19.8 15.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case 'arrow':
      return (
        <svg {...commonProps}>
          <path d="M5 12H19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M13.5 6.5L19 12L13.5 17.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case 'inspection':
      return (
        <svg {...commonProps}>
          <path d="M7.2 18.2H17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M7.5 5.8H16.5C17.88 5.8 19 6.92 19 8.3V12.2C19 13.58 17.88 14.7 16.5 14.7H7.5C6.12 14.7 5 13.58 5 12.2V8.3C5 6.92 6.12 5.8 7.5 5.8Z" stroke="currentColor" strokeWidth="1.8" />
          <path d="M8.4 10.2L10.5 12.1L15.6 7.9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case 'oil':
      return (
        <svg {...commonProps}>
          <path d="M13 4.8C14.3 6.9 17.2 9.6 17.2 13C17.2 16 14.9 18.2 12 18.2C9.1 18.2 6.8 16 6.8 13C6.8 9.6 9.7 6.9 11 4.8" stroke="currentColor" strokeWidth="1.8" />
          <path d="M9.8 14C10.5 14.8 11.3 15.2 12 15.2C12.9 15.2 13.8 14.6 14.4 13.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case 'brakes':
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="12" cy="12" r="2.2" stroke="currentColor" strokeWidth="1.8" />
          <path d="M12 5V9M19 12H15M12 19V15M5 12H9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case 'tires':
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="7.5" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.8" />
          <path d="M12 4.5V9.5M19.5 12H14.5M12 19.5V14.5M4.5 12H9.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case 'huau':
      return (
        <svg {...commonProps}>
          <rect x="5" y="6" width="14" height="12" rx="2.8" stroke="currentColor" strokeWidth="1.8" />
          <path d="M8 10H16M8 13.4H13.4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case 'climate':
      return (
        <svg {...commonProps}>
          <path d="M12 4.8V19.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M7.1 7.4C8.1 8.3 9.8 8.6 11.2 8.1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M16.9 7.4C15.9 8.3 14.2 8.6 12.8 8.1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M7.1 16.6C8.1 15.7 9.8 15.4 11.2 15.9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M16.9 16.6C15.9 15.7 14.2 15.4 12.8 15.9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case 'diagnostic':
      return (
        <svg {...commonProps}>
          <rect x="6" y="5" width="12" height="10" rx="2.4" stroke="currentColor" strokeWidth="1.8" />
          <path d="M9 19H15M12 15V19M8.7 9.7L10.6 11.6L15.2 7.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case 'repair':
      return (
        <svg {...commonProps}>
          <path d="M14.8 5.2C15.9 6.3 15.9 8.1 14.8 9.2L9.2 14.8C8.1 15.9 6.3 15.9 5.2 14.8C4.1 13.7 4.1 11.9 5.2 10.8L10.8 5.2C11.9 4.1 13.7 4.1 14.8 5.2Z" stroke="currentColor" strokeWidth="1.8" />
          <path d="M13.6 10.4L18.8 15.6M16.4 18.8L14.8 17.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case 'battery':
      return (
        <svg {...commonProps}>
          <rect x="5" y="8" width="13" height="8" rx="2" stroke="currentColor" strokeWidth="1.8" />
          <path d="M18 10H19.5V14H18M9 10.8V13.2M7.8 12H10.2M13.4 12H15.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case 'fleet':
      return (
        <svg {...commonProps}>
          <path d="M4.8 13.5V9.2C4.8 7.985 5.785 7 7 7H13.3C14.515 7 15.5 7.985 15.5 9.2V13.5" stroke="currentColor" strokeWidth="1.8" />
          <path d="M15.5 9.5H18.2L19.6 11.7V13.5" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="8.5" cy="15.7" r="1.8" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="16.6" cy="15.7" r="1.8" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      );
    default:
      return null;
  }
};
