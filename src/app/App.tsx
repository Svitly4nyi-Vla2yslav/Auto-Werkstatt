import { ThemeProvider } from 'styled-components';

import { AppRouter } from '../routes/AppRouter';
import { GlobalStyles } from '../styles/GlobalStyles';
import { theme } from '../styles/theme';

/**
 * Створює кореневу композицію застосунку без власного стану.
 *
 * ThemeProvider надає дизайн-токени всьому дереву, GlobalStyles застосовує
 * базові стилі, а AppRouter відповідає за BrowserRouter, маршрути й прокручування.
 */
export const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <AppRouter />
  </ThemeProvider>
);
