import type { SVGProps } from 'react';

export const BrandMark = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="6" y="6" width="60" height="60" rx="18" fill="currentColor" />
    <path
      d="M21 43.5L31.5 25.5H40.5L51 43.5H43.5L36 30.6L28.5 43.5H21ZM28.2 39.6H43.8V45H28.2V39.6Z"
      fill="white"
    />
  </svg>
);
