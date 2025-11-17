import React from 'react';
import '../../styles/pages/service-detail.css';

const ServiceFeatures = ({ title, features }) => {
  return (
    <section className="service-features">
      <div className="container">
        <h2 className="section-title">{title}</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceFeatures;


