import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence, motion } from 'framer-motion';
import { lazy, Suspense } from 'react';
import { Layout } from './components/layout/Layout';
import { ErrorBoundary } from './components/ErrorBoundary';
import { ScrollProgress } from './components/ui/ScrollProgress';
import { LoadingSpinner } from './components/ui/LoadingSpinner';
import { pageTransition } from './constants/animations';

// Lazy load pages for code splitting
const Home = lazy(() => import('./pages/Home').then(module => ({ default: module.Home })));
const Features = lazy(() => import('./pages/Features').then(module => ({ default: module.Features })));
const Download = lazy(() => import('./pages/Download').then(module => ({ default: module.Download })));
const About = lazy(() => import('./pages/About').then(module => ({ default: module.About })));
const NotFound = lazy(() => import('./pages/NotFound').then(module => ({ default: module.NotFound })));

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              variants={pageTransition}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <Home />
            </motion.div>
          }
        />
        <Route
          path="/features"
          element={
            <motion.div
              variants={pageTransition}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <Features />
            </motion.div>
          }
        />
        <Route
          path="/download"
          element={
            <motion.div
              variants={pageTransition}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <Download />
            </motion.div>
          }
        />
        <Route
          path="/about"
          element={
            <motion.div
              variants={pageTransition}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <About />
            </motion.div>
          }
        />
        <Route
          path="*"
          element={
            <motion.div
              variants={pageTransition}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <NotFound />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <Router>
          <ScrollProgress />
          <Layout>
            <Suspense fallback={<LoadingSpinner />}>
              <AnimatedRoutes />
            </Suspense>
          </Layout>
        </Router>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;
