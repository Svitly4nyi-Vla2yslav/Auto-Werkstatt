import { ThemeProvider } from 'styled-components';

import { AppRouter } from '../routes/AppRouter';
import { GlobalStyles } from '../styles/GlobalStyles';
import { theme } from '../styles/theme';

export const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <AppRouter />
  </ThemeProvider>
);
