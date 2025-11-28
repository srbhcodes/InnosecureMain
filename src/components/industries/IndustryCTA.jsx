import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/pages/industry-detail.css';

const IndustryCTA = ({ title, description, buttonText = 'Get Started', buttonLink = '/contact' }) => {
  return (
    <section className="industry-cta">
      <div className="container">
        <h2>{title}</h2>
        <p>{description}</p>
        <Link to={buttonLink} className="btn btn-primary">{buttonText}</Link>
      </div>
    </section>
  );
};

export default IndustryCTA;





