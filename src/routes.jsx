import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Industries from './pages/Industries';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

// Service category pages
import Digital from './pages/services/Digital';
import Consulting from './pages/services/Consulting';
import Technology from './pages/services/Technology';

// Individual service pages
import GenerativeAI from './pages/services/GenerativeAI';
import Blockchain from './pages/services/Blockchain';
import DataEngineering from './pages/services/DataEngineering';
import CloudEngineering from './pages/services/CloudEngineering';
import AppDevelopment from './pages/services/AppDevelopment';
import ManagedServices from './pages/services/ManagedServices';
import IntelligentAutomation from './pages/services/IntelligentAutomation';

// Individual industry pages
import Aerospace from './pages/industries/Aerospace';
import Automotive from './pages/industries/Automotive';
import Banking from './pages/industries/Banking';
import Education from './pages/industries/Education';
import Healthcare from './pages/industries/Healthcare';
import HighTech from './pages/industries/HighTech';
import Hospitality from './pages/industries/Hospitality';
import Insurance from './pages/industries/Insurance';
import Logistics from './pages/industries/Logistics';
import Media from './pages/industries/Media';
import Retail from './pages/industries/Retail';
import TourTravel from './pages/industries/TourTravel';

// Insight pages
import InsightDetail from './pages/insights/InsightDetail';

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
        element: <About />,
      },
      {
        path: 'services',
        element: <Services />,
      },
      // Service category pages
      {
        path: 'services/digital',
        element: <Digital />,
      },
      {
        path: 'services/consulting',
        element: <Consulting />,
      },
      {
        path: 'services/technology',
        element: <Technology />,
      },
      // Individual service pages
      {
        path: 'services/generative-ai',
        element: <GenerativeAI />,
      },
      {
        path: 'services/blockchain',
        element: <Blockchain />,
      },
      {
        path: 'services/data-engineering',
        element: <DataEngineering />,
      },
      {
        path: 'services/cloud-engineering',
        element: <CloudEngineering />,
      },
      {
        path: 'services/app-development',
        element: <AppDevelopment />,
      },
      {
        path: 'services/managed-services',
        element: <ManagedServices />,
      },
      {
        path: 'services/intelligent-automation',
        element: <IntelligentAutomation />,
      },
      {
        path: 'industries',
        element: <Industries />,
      },
      // Individual industry pages
      {
        path: 'industries/aerospace',
        element: <Aerospace />,
      },
      {
        path: 'industries/automotive',
        element: <Automotive />,
      },
      {
        path: 'industries/banking',
        element: <Banking />,
      },
      {
        path: 'industries/education',
        element: <Education />,
      },
      {
        path: 'industries/healthcare',
        element: <Healthcare />,
      },
      {
        path: 'industries/high-tech',
        element: <HighTech />,
      },
      {
        path: 'industries/hospitality',
        element: <Hospitality />,
      },
      {
        path: 'industries/insurance',
        element: <Insurance />,
      },
      {
        path: 'industries/logistics',
        element: <Logistics />,
      },
      {
        path: 'industries/media',
        element: <Media />,
      },
      {
        path: 'industries/retail',
        element: <Retail />,
      },
      {
        path: 'industries/tour-travel',
        element: <TourTravel />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'insights/:id',
        element: <InsightDetail />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

