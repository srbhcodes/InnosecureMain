import React from 'react';
import '../../styles/pages/service-detail.css';

const ServiceBenefits = ({ title, benefits }) => {
  return (
    <section className="service-benefits">
      <div className="container">
        <h2 className="section-title">{title}</h2>
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-item">
              <div className="benefit-icon">{benefit.icon}</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceBenefits;





