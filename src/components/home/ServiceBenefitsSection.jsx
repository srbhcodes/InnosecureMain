import React, { useState } from 'react';
import { serviceBenefits } from '../../data/homeData';

const ServiceBenefitsSection = () => {
  const [selectedService, setSelectedService] = useState(0);

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
                key={index}
                className={`benefit-item ${selectedService === index ? 'active' : ''}`}
                onClick={() => setSelectedService(index)}
              >
                {service.title}
              </button>
            ))}
          </div>

          {/* Right Panel - Content Container */}
          <div className="benefits-content">
            <div className="benefit-content-card">
              <p className="benefit-content-description">
                {serviceBenefits[selectedService].description}
              </p>
              <div className="benefit-services-grid">
                {serviceBenefits[selectedService].services.map((service, index) => (
                  <div key={index} className="benefit-service-item">
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
};

export default ServiceBenefitsSection;

