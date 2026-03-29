import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;700&display=swap');

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    font-family: ${({ theme }) => theme.fonts.body};
    background:
      radial-gradient(circle at top right, rgba(236, 107, 45, 0.09), transparent 28%),
      linear-gradient(180deg, #f8f9fb 0%, ${({ theme }) => theme.colors.background} 100%);
    color: ${({ theme }) => theme.colors.text};
    min-width: 320px;
  }

  img,
  svg {
    display: block;
    max-width: 100%;
  }

  button,
  input,
  select,
  textarea {
    font: inherit;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  p,
  ul,
  ol {
    margin: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    color: ${({ theme }) => theme.colors.heading};
    font-family: ${({ theme }) => theme.fonts.heading};
    line-height: 1.05;
    letter-spacing: -0.03em;
  }

  ul {
    padding: 0;
    list-style: none;
  }

  button {
    border: 0;
    background: none;
    cursor: pointer;
  }

  input,
  select,
  textarea {
    width: 100%;
  }

  :focus-visible {
    outline: 3px solid rgba(236, 107, 45, 0.45);
    outline-offset: 2px;
  }

  ::selection {
    background: rgba(236, 107, 45, 0.20);
  }
`;
