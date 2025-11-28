import React from 'react';
import { Link } from 'react-router-dom';

const IndustryHero = ({ title, subtitle }) => {
  return (
    <section className="industry-hero">
      <div className="industry-hero__content">
        <h1 className="industry-hero__title">{title}</h1>
        {subtitle && <p className="industry-hero__subtitle">{subtitle}</p>}
        <div className="industry-hero__cta">
          <Link to="/contact" className="btn btn-primary">Get Started</Link>
          <Link to="/about" className="btn btn-secondary">Learn More</Link>
        </div>
      </div>
    </section>
  );
};

export default IndustryHero;





