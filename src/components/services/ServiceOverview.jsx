import React from 'react';
import '../../styles/pages/service-detail.css';

const ServiceOverview = ({ title, paragraphs, icon }) => {
  return (
    <section className="service-overview">
      <div className="container">
        <div className="service-overview__content">
          <div className="service-overview__text">
            <h2>{title}</h2>
            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <div className="service-overview__image">
            <div className="service-icon-large">{icon}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceOverview;





