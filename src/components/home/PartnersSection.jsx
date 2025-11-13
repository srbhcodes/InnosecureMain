import React from 'react';
import { partners } from '../../data/homeData';

const PartnersSection = () => {
  return (
    <section className="partners-section">
      <div className="container">
        <h2 className="section-title">Our Partners</h2>
        <div className="partners-grid">
          {partners.map((partner, index) => (
            <div key={index} className="partner-logo">
              <img src={partner.image} alt={partner.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;

