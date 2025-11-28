import React, { useState, memo, useMemo, useCallback } from 'react';
import { serviceBenefits } from '../../data/homeData';

const ServiceBenefitsSection = memo(() => {
  const [selectedService, setSelectedService] = useState(0);

  const handleServiceSelect = useCallback((index) => {
    setSelectedService(index);
  }, []);

  const selectedServiceData = useMemo(() => {
    return serviceBenefits[selectedService];
  }, [selectedService]);

  return (
    <section className="service-benefits">
      <div className="container">
        <h2 className="section-title">How our services benefit businesses</h2>
        <p className="section-subtitle">
          We created professional services to assist businesses develop enormously and stand out in the market.
        </p>

        <div className="benefits-container">
          {/* Left Panel - Service List */}
          <div className="benefits-list">
            {serviceBenefits.map((service, index) => (
              <button
                key={service.title}
                className={`benefit-item ${selectedService === index ? 'active' : ''}`}
                onClick={() => handleServiceSelect(index)}
              >
                {service.title}
              </button>
            ))}
          </div>

          {/* Right Panel - Content Container */}
          <div className="benefits-content">
            <div className="benefit-content-card">
              <p className="benefit-content-description">
                {selectedServiceData.description}
              </p>
              <div className="benefit-services-grid">
                {selectedServiceData.services.map((service, index) => (
                  <div key={`${selectedServiceData.title}-${service}-${index}`} className="benefit-service-item">
                    {service}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

ServiceBenefitsSection.displayName = 'ServiceBenefitsSection';

export default ServiceBenefitsSection;

