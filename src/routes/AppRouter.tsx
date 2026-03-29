import { Suspense, lazy, type ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { Layout } from '../components/Layout';
import { smoothRevealTransition } from '../components/motionTokens';
import { ScrollToTop } from './ScrollToTop';

const HomePage = lazy(() => import('../pages/HomePage'));
const ServicesPage = lazy(() => import('../pages/ServicesPage'));
const AboutPage = lazy(() => import('../pages/AboutPage'));
const ContactPage = lazy(() => import('../pages/ContactPage'));
const FAQPage = lazy(() => import('../pages/FAQPage'));
const ImprintPage = lazy(() => import('../pages/ImprintPage'));
const PrivacyPage = lazy(() => import('../pages/PrivacyPage'));

const LoadingShell = styled.div`
  min-height: 50vh;
  display: grid;
  place-items: center;
  padding: ${({ theme }) => theme.spacing(20)} ${({ theme }) => theme.spacing(6)};
  color: ${({ theme }) => theme.colors.textMuted};
`;

const PageShell = styled(motion.div)`
  min-height: 100%;
`;

const pageTransition = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0, transition: smoothRevealTransition },
  exit: { opacity: 0, y: -10, transition: { duration: 0.24 } },
};

const AnimatedRoutes = () => {
  const location = useLocation();

  const withTransition = (page: ReactNode) => (
    <PageShell
      initial={pageTransition.initial}
      animate={pageTransition.animate}
      exit={pageTransition.exit}
    >
      {page}
    </PageShell>
  );

  return (
    <Layout>
      <Suspense fallback={<LoadingShell>Seite wird geladen...</LoadingShell>}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={withTransition(<HomePage />)} />
            <Route path="/leistungen" element={withTransition(<ServicesPage />)} />
            <Route path="/ueber-uns" element={withTransition(<AboutPage />)} />
            <Route path="/termin-kontakt" element={withTransition(<ContactPage />)} />
            <Route path="/faq" element={withTransition(<FAQPage />)} />
            <Route path="/impressum" element={withTransition(<ImprintPage />)} />
            <Route path="/datenschutz" element={withTransition(<PrivacyPage />)} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </AnimatePresence>
      </Suspense>
    </Layout>
  );
};

export const AppRouter = () => (
  <BrowserRouter>
    <ScrollToTop />
    <AnimatedRoutes />
  </BrowserRouter>
);
