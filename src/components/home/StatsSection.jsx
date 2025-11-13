import React from 'react';
import { statsSectionData } from '../../data/homeData';

const StatsSection = () => {
  return (
    <section className="stats-section">
      <div className="container">
        <h2 className="stats-section__title">IT'S OUR PEOPLE WHO MAKES THE DIFFERENCE</h2>
        <div className="stats-grid">
          {statsSectionData.map((stat, index) => (
            <div key={index} className="stat-card">
              <span className="stat-card__number">{stat.number}</span>
              <span className="stat-card__label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

