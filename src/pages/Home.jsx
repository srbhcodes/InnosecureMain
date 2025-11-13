import React from 'react';
import '../styles/pages/home.css';

// Import all section components
import {
  HeroSection,
  TrustedBySection,
  ServiceBenefitsSection,
  ServiceTilesSection,
  StatsSection,
  IndustriesSection,
  ITInitiativeSection,
  PartnersSection,
  ClientsSection,
  ConversionStatsSection,
  TestimonialsSection,
  FeaturedInsightsSection,
  ContactCTASection
} from '../components/home';

const Home = () => {
  return (
    <div className="home">
      <HeroSection />
      <TrustedBySection />
      <ServiceBenefitsSection />
      <ServiceTilesSection />
      <StatsSection />
      <IndustriesSection />
      <ITInitiativeSection />
      <PartnersSection />
      <ClientsSection />
      <ConversionStatsSection />
      <TestimonialsSection />
      <FeaturedInsightsSection />
      <ContactCTASection />
    </div>
  );
};

export default Home;
