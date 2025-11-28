import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { serviceTiles } from '../../data/homeData';

const ServiceTilesSection = memo(() => {
  return (
    <section className="services-preview">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          Comprehensive solutions to secure your business
        </p>

        <div className="service-tiles-grid">
          {serviceTiles.map((service) => (
            <Link to={service.link} key={service.link} className="service-tile">
              <div className="service-tile__icon">{service.icon}</div>
              <h3 className="service-tile__title">{service.title}</h3>
              <p className="service-tile__description">{service.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
});

ServiceTilesSection.displayName = 'ServiceTilesSection';

export default ServiceTilesSection;

