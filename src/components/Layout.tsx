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

export const Layout = ({ children }: LayoutProps) => (
  <>
    <Header />
    <Main>{children}</Main>
    <Footer />
    <MobileQuickActionBar />
  </>
);
