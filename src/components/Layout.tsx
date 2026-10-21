import type { ReactNode } from 'react';
import styled from 'styled-components';

import { Footer } from './Footer';
import { Header } from './Header';
import { MobileQuickActionBar } from './MobileQuickActionBar';

interface LayoutProps {
  children: ReactNode;
}

const Main = styled.main`
  min-height: 100vh;
`;

/**
 * Обгортає вміст кожної сторінки спільними Header, Footer і мобільною панеллю дій.
 * Приймає довільний React-вміст у `children`, розміщує його в `main`
 * та не зберігає стану й не виконує побічних ефектів.
 */
export const Layout = ({ children }: LayoutProps) => (
  <>
    <Header />
    <Main>{children}</Main>
    <Footer />
    <MobileQuickActionBar />
  </>
);
