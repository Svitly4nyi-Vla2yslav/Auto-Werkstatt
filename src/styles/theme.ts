import type { AppTheme } from '../types/theme';

export const theme: AppTheme = {
  colors: {
    background: '#f4f5f7',
    surface: '#ffffff',
    surfaceAlt: '#eef1f4',
    elevated: '#11161d',
    border: 'rgba(18, 24, 31, 0.08)',
    borderStrong: 'rgba(18, 24, 31, 0.16)',
    text: '#44505d',
    textMuted: '#6c7887',
    heading: '#10161f',
    accent: '#ec6b2d',
    accentStrong: '#c44c15',
    accentSoft: '#ffe5d7',
    accentTint: '#fff4ee',
    success: '#187a52',
    warning: '#a5680a',
    danger: '#b53d2a',
    white: '#ffffff',
    black: '#05070a',
  },
  fonts: {
    heading: "'Space Grotesk', 'Segoe UI', sans-serif",
    body: "'Manrope', 'Segoe UI', sans-serif",
  },
  radii: {
    xs: '10px',
    sm: '14px',
    md: '18px',
    lg: '24px',
    xl: '32px',
    pill: '999px',
  },
  shadows: {
    sm: '0 12px 32px rgba(16, 22, 31, 0.06)',
    md: '0 20px 50px rgba(16, 22, 31, 0.10)',
    lg: '0 24px 80px rgba(5, 7, 10, 0.18)',
  },
  spacing: (step) => `${step * 4}px`,
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
  layout: {
    narrow: '720px',
    base: '1180px',
    wide: '1320px',
  },
  transitions: {
    base: '220ms ease',
    slow: '280ms ease',
  },
};
