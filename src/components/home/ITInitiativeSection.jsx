import React from 'react';
import { itInitiatives } from '../../data/homeData';

const ITInitiativeSection = () => {
  return (
    <section className="it-initiative-section">
      <div className="container">
        <h2 className="section-title">Secure the Success of Your IT Initiative</h2>
        <p className="section-subtitle">
          As a tech partner, Innosecure takes on a mission of achieving your project success no matter what. Check the tried-and-true project management practices we rely on to drive the project to its goals despite budget constraints and changing requirements.
        </p>

        <div className="initiative-grid">
          {itInitiatives.map((initiative, index) => (
            <div key={index} className="initiative-card">
              <div className="initiative-icon">{initiative.icon}</div>
              <h3>{initiative.title}</h3>
              <p>{initiative.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ITInitiativeSection;

