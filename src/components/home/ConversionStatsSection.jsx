import React, { memo } from 'react';
import { conversionStats } from '../../data/homeData';

const ConversionStatsSection = memo(() => {
  return (
    <section className="conversion-stats">
      <div className="container">
        <div className="conversion-grid">
          {conversionStats.map((stat) => (
            <div key={stat.title} className="conversion-card">
              <div className="conversion-icon">{stat.icon}</div>
              <h3>{stat.title}</h3>
              <p>{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

ConversionStatsSection.displayName = 'ConversionStatsSection';

export default ConversionStatsSection;

