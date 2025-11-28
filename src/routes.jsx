import { createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import MainLayout from './layouts/MainLayout';
import LoadingSpinner from './components/common/LoadingSpinner';

// Home page - load immediately (above the fold)
import Home from './pages/Home';

// Lazy load all other pages for code splitting
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Industries = lazy(() => import('./pages/Industries'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Service category pages - lazy loaded
const Digital = lazy(() => import('./pages/services/Digital'));
const Consulting = lazy(() => import('./pages/services/Consulting'));
const Technology = lazy(() => import('./pages/services/Technology'));

// Individual service pages - lazy loaded
const GenerativeAI = lazy(() => import('./pages/services/GenerativeAI'));
const Blockchain = lazy(() => import('./pages/services/Blockchain'));
const DataEngineering = lazy(() => import('./pages/services/DataEngineering'));
const CloudEngineering = lazy(() => import('./pages/services/CloudEngineering'));
const AppDevelopment = lazy(() => import('./pages/services/AppDevelopment'));
const ManagedServices = lazy(() => import('./pages/services/ManagedServices'));
const IntelligentAutomation = lazy(() => import('./pages/services/IntelligentAutomation'));

// Individual industry pages - lazy loaded
const Aerospace = lazy(() => import('./pages/industries/Aerospace'));
const Automotive = lazy(() => import('./pages/industries/Automotive'));
const Banking = lazy(() => import('./pages/industries/Banking'));
const Education = lazy(() => import('./pages/industries/Education'));
const Healthcare = lazy(() => import('./pages/industries/Healthcare'));
const HighTech = lazy(() => import('./pages/industries/HighTech'));
const Hospitality = lazy(() => import('./pages/industries/Hospitality'));
const Insurance = lazy(() => import('./pages/industries/Insurance'));
const Logistics = lazy(() => import('./pages/industries/Logistics'));
const Media = lazy(() => import('./pages/industries/Media'));
const Retail = lazy(() => import('./pages/industries/Retail'));
const TourTravel = lazy(() => import('./pages/industries/TourTravel'));

// Insight pages - lazy loaded
const InsightDetail = lazy(() => import('./pages/insights/InsightDetail'));

// Wrapper component for Suspense
const LazyWrapper = ({ children }) => (
  <Suspense fallback={<LoadingSpinner />}>
    {children}
  </Suspense>
);

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <LazyWrapper><About /></LazyWrapper>,
      },
      {
        path: 'services',
        element: <LazyWrapper><Services /></LazyWrapper>,
      },
      // Service category pages
      {
        path: 'services/digital',
        element: <LazyWrapper><Digital /></LazyWrapper>,
      },
      {
        path: 'services/consulting',
        element: <LazyWrapper><Consulting /></LazyWrapper>,
      },
      {
        path: 'services/technology',
        element: <LazyWrapper><Technology /></LazyWrapper>,
      },
      // Individual service pages
      {
        path: 'services/generative-ai',
        element: <LazyWrapper><GenerativeAI /></LazyWrapper>,
      },
      {
        path: 'services/blockchain',
        element: <LazyWrapper><Blockchain /></LazyWrapper>,
      },
      {
        path: 'services/data-engineering',
        element: <LazyWrapper><DataEngineering /></LazyWrapper>,
      },
      {
        path: 'services/cloud-engineering',
        element: <LazyWrapper><CloudEngineering /></LazyWrapper>,
      },
      {
        path: 'services/app-development',
        element: <LazyWrapper><AppDevelopment /></LazyWrapper>,
      },
      {
        path: 'services/managed-services',
        element: <LazyWrapper><ManagedServices /></LazyWrapper>,
      },
      {
        path: 'services/intelligent-automation',
        element: <LazyWrapper><IntelligentAutomation /></LazyWrapper>,
      },
      {
        path: 'industries',
        element: <LazyWrapper><Industries /></LazyWrapper>,
      },
      // Individual industry pages
      {
        path: 'industries/aerospace',
        element: <LazyWrapper><Aerospace /></LazyWrapper>,
      },
      {
        path: 'industries/automotive',
        element: <LazyWrapper><Automotive /></LazyWrapper>,
      },
      {
        path: 'industries/banking',
        element: <LazyWrapper><Banking /></LazyWrapper>,
      },
      {
        path: 'industries/education',
        element: <LazyWrapper><Education /></LazyWrapper>,
      },
      {
        path: 'industries/healthcare',
        element: <LazyWrapper><Healthcare /></LazyWrapper>,
      },
      {
        path: 'industries/high-tech',
        element: <LazyWrapper><HighTech /></LazyWrapper>,
      },
      {
        path: 'industries/hospitality',
        element: <LazyWrapper><Hospitality /></LazyWrapper>,
      },
      {
        path: 'industries/insurance',
        element: <LazyWrapper><Insurance /></LazyWrapper>,
      },
      {
        path: 'industries/logistics',
        element: <LazyWrapper><Logistics /></LazyWrapper>,
      },
      {
        path: 'industries/media',
        element: <LazyWrapper><Media /></LazyWrapper>,
      },
      {
        path: 'industries/retail',
        element: <LazyWrapper><Retail /></LazyWrapper>,
      },
      {
        path: 'industries/tour-travel',
        element: <LazyWrapper><TourTravel /></LazyWrapper>,
      },
      {
        path: 'contact',
        element: <LazyWrapper><Contact /></LazyWrapper>,
      },
      {
        path: 'insights/:id',
        element: <LazyWrapper><InsightDetail /></LazyWrapper>,
      },
      {
        path: '*',
        element: <LazyWrapper><NotFound /></LazyWrapper>,
      },
    ],
  },
]);

