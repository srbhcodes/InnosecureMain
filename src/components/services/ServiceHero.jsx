import React from 'react';
import '../../styles/pages/service-detail.css';

const ServiceHero = ({ title, subtitle }) => {
  return (
    <section className="service-hero">
      <div className="container">
        <div className="service-hero__content">
          <h1 className="service-hero__title">{title}</h1>
          <p className="service-hero__subtitle">{subtitle}</p>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;





