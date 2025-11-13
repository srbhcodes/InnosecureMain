import React from 'react';
import { Link } from 'react-router-dom';
import { serviceTiles } from '../../data/homeData';

const ServiceTilesSection = () => {
  return (
    <section className="services-preview">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          Comprehensive solutions to secure your business
        </p>

        <div className="service-tiles-grid">
          {serviceTiles.map((service, index) => (
            <Link to={service.link} key={index} className="service-tile">
              <div className="service-tile__icon">{service.icon}</div>
              <h3 className="service-tile__title">{service.title}</h3>
              <p className="service-tile__description">{service.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceTilesSection;

