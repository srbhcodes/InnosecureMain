import React, { lazy, Suspense } from 'react';
import LazySection from '../components/common/LazySection';
import LoadingSpinner from '../components/common/LoadingSpinner';

// Above-the-fold sections - load immediately
import HeroSection from '../components/home/HeroSection';
import TrustedBySection from '../components/home/TrustedBySection';
import ServiceBenefitsSection from '../components/home/ServiceBenefitsSection';

// Below-the-fold sections - lazy load
const ServiceTilesSection = lazy(() => import('../components/home/ServiceTilesSection'));
const StatsSection = lazy(() => import('../components/home/StatsSection'));
const IndustriesSection = lazy(() => import('../components/home/IndustriesSection'));
const ITInitiativeSection = lazy(() => import('../components/home/ITInitiativeSection'));
const PartnersSection = lazy(() => import('../components/home/PartnersSection'));
const ClientsSection = lazy(() => import('../components/home/ClientsSection'));
const ConversionStatsSection = lazy(() => import('../components/home/ConversionStatsSection'));
const TestimonialsSection = lazy(() => import('../components/home/TestimonialsSection'));
const FeaturedInsightsSection = lazy(() => import('../components/home/FeaturedInsightsSection'));
const ContactCTASection = lazy(() => import('../components/home/ContactCTASection'));

const Home = () => {
  return (
    <div className="home">
      {/* Above-the-fold - load immediately */}
      <HeroSection />
      <TrustedBySection />
      <ServiceBenefitsSection />
      
      {/* Below-the-fold - lazy load when entering viewport */}
      <LazySection fallback={<LoadingSpinner />}>
        <ServiceTilesSection />
      </LazySection>
      
      <LazySection fallback={<LoadingSpinner />}>
        <StatsSection />
      </LazySection>
      
      <LazySection fallback={<LoadingSpinner />}>
        <IndustriesSection />
      </LazySection>
      
      <LazySection fallback={<LoadingSpinner />}>
        <ITInitiativeSection />
      </LazySection>
      
      <LazySection fallback={<LoadingSpinner />}>
        <PartnersSection />
      </LazySection>
      
      <LazySection fallback={<LoadingSpinner />}>
        <ClientsSection />
      </LazySection>
      
      <LazySection fallback={<LoadingSpinner />}>
        <ConversionStatsSection />
      </LazySection>
      
      <LazySection fallback={<LoadingSpinner />}>
        <TestimonialsSection />
      </LazySection>
      
      <LazySection fallback={<LoadingSpinner />}>
        <FeaturedInsightsSection />
      </LazySection>
      
      <LazySection fallback={<LoadingSpinner />}>
        <ContactCTASection />
      </LazySection>
    </div>
  );
};

export default Home;
