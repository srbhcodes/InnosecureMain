import React from 'react';
import { industries } from '../../data/homeData';

const IndustriesSection = () => {
  return (
    <section className="industries-section">
      <div className="container">
        <h2 className="section-title">Industries that we serve</h2>
        <p className="section-subtitle">
          We achieved the business transformation objectives by utilising advanced technology to produce exceptional results. Working with clients from around the world has aided us in developing a comprehensive approach and knowledge base to meet a wide range of industries' unique requirements.
        </p>

        <div className="industries-grid">
          {industries.map((industry, index) => (
            <div key={index} className="industry-card">
              <span className="industry-icon">{industry.icon}</span>
              <h3>{industry.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;

