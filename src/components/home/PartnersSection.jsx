import React, { memo } from 'react';
import { partners } from '../../data/homeData';

const PartnersSection = memo(() => {
  return (
    <section className="partners-section">
      <div className="container">
        <h2 className="section-title">Our Partners</h2>
        <div className="partners-grid">
          {partners.map((partner) => (
            <div key={partner.alt} className="partner-logo">
              <img src={partner.image} alt={partner.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

PartnersSection.displayName = 'PartnersSection';

export default PartnersSection;

