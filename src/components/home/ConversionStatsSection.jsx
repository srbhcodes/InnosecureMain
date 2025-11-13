import React from 'react';
import { conversionStats } from '../../data/homeData';

const ConversionStatsSection = () => {
  return (
    <section className="conversion-stats">
      <div className="container">
        <div className="conversion-grid">
          {conversionStats.map((stat, index) => (
            <div key={index} className="conversion-card">
              <div className="conversion-icon">{stat.icon}</div>
              <h3>{stat.title}</h3>
              <p>{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConversionStatsSection;

