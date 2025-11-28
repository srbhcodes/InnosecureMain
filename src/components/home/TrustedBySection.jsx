import React, { memo } from 'react';
import { certifications } from '../../data/homeData';

const TrustedBySection = memo(() => {
  return (
    <section className="trusted-by">
      <div className="container">
        <h2 className="trusted-by__title">
          From startups to global enterprises,<br />
          ambitious businesses choose<br />
          <span className="gradient-text">Innosecure.</span>
        </h2>
        <div className="certifications">
          {certifications.map((cert) => (
            <div key={cert.text || cert.alt || cert.icon} className="certification-badge">
              {cert.image ? (
                <img src={cert.image} alt={cert.alt} className="cert-image" />
              ) : (
                <span className="cert-icon">{cert.icon}</span>
              )}
              <span className="cert-text">{cert.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

TrustedBySection.displayName = 'TrustedBySection';

export default TrustedBySection;

