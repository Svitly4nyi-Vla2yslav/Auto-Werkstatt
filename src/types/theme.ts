export interface AppTheme {
  colors: {
    background: string;
    surface: string;
    surfaceAlt: string;
    elevated: string;
    border: string;
    borderStrong: string;
    text: string;
    textMuted: string;
    heading: string;
    accent: string;
    accentStrong: string;
    accentSoft: string;
    accentTint: string;
    success: string;
    warning: string;
    danger: string;
    white: string;
    black: string;
  };
  fonts: {
    heading: string;
    body: string;
  };
  radii: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    pill: string;
  };
  shadows: {
    sm: string;
    md: string;
    lg: string;
  };
  spacing: (step: number) => string;
  breakpoints: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  layout: {
    narrow: string;
    base: string;
    wide: string;
  };
  transitions: {
    base: string;
    slow: string;
  };
}
