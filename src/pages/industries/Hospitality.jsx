import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/pages/industry-detail.css';

const Hospitality = () => {
  return (
    <div className="industry-detail">
      {/* Hero Section */}
      <section className="industry-hero">
        <div className="industry-hero__content">
          <h1 className="industry-hero__title">
            Transforming Hospitality with Smart Hotel Management, Guest Experience Solutions, and Digital Booking Platforms
          </h1>
        </div>
      </section>

      {/* First Section */}
      <section className="industry-section">
        <div className="industry-section__content">
          <div className="industry-section__text">
            <h2 className="industry-section__title">Smart Hotel Management</h2>
            <p className="industry-section__description">
              Implementing comprehensive hotel management systems that streamline operations, optimize resources, and enhance guest satisfaction. Our solutions integrate property management, staff scheduling, and inventory control for efficient hotel operations.
            </p>
          </div>
          <div className="industry-section__image">
            <img src="/img/hospitality.png" alt="Smart Hotel Management" />
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section className="industry-section alt">
        <div className="industry-section__content reverse">
          <div className="industry-section__text">
            <h2 className="industry-section__title">Guest Experience Solutions</h2>
            <p className="industry-section__description">
              Creating personalized guest experiences through digital concierge services, mobile check-in/out, and smart room controls. Our solutions enhance guest satisfaction while reducing operational costs and improving service efficiency.
            </p>
          </div>
          <div className="industry-section__image">
            <img src="/img/pic10.png" alt="Guest Experience Solutions" />
          </div>
        </div>
      </section>

      {/* Third Section */}
      <section className="industry-section">
        <div className="industry-section__content">
          <div className="industry-section__text">
            <h2 className="industry-section__title">Digital Booking Platform</h2>
            <p className="industry-section__description">
              Developing advanced booking and reservation systems that optimize occupancy rates and revenue management. Our platforms provide seamless booking experiences, dynamic pricing capabilities, and integrated payment solutions.
            </p>
          </div>
          <div className="industry-section__image">
            <img src="/img/trip.png" alt="Digital Booking Platform" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="industry-cta">
        <div className="container">
          <h2>Ready to Transform Your Hospitality Operations?</h2>
          <p>Let's discuss how our hospitality solutions can drive innovation in your organization.</p>
          <Link to="/contact" className="btn btn-primary">Get Started</Link>
        </div>
      </section>
    </div>
  );
};

export default Hospitality;

