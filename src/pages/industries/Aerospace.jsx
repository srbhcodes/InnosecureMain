import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/pages/industry-detail.css';

const Aerospace = () => {
  return (
    <div className="industry-detail">
      {/* Hero Section */}
      <section className="industry-hero">
        <div className="industry-hero__content">
          <h1 className="industry-hero__title">
            Pioneering the Future of Aerospace with Advanced Propulsion, Hypersonic Flight, and Next-Generation Aircraft Design
          </h1>
        </div>
      </section>

      {/* First Section */}
      <section className="industry-section">
        <div className="industry-section__content">
          <div className="industry-section__text">
            <h2 className="industry-section__title">Advanced Propulsion Systems</h2>
            <p className="industry-section__description">
              Developing revolutionary propulsion technologies including scramjet engines, hybrid-electric systems, and advanced turbofan designs. Our innovations in propulsion are setting new standards for fuel efficiency, reduced emissions, and enhanced performance in both commercial and military aircraft.
            </p>
          </div>
          <div className="industry-section__image">
            <img src="/img/aerospace-engineering.png" alt="Advanced Propulsion Systems" />
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section className="industry-section alt">
        <div className="industry-section__content reverse">
          <div className="industry-section__text">
            <h2 className="industry-section__title">Next-Generation Aerospace Materials</h2>
            <p className="industry-section__description">
              Pioneering the development of advanced aerospace materials including carbon fiber composites, titanium alloys, and heat-resistant ceramics. Our material innovations enable lighter, stronger, and more durable aircraft structures while maintaining optimal thermal and mechanical properties for extreme aerospace environments.
            </p>
          </div>
          <div className="industry-section__image">
            <img src="/img/pic1.png" alt="Next-Generation Aerospace Materials" />
          </div>
        </div>
      </section>

      {/* Third Section */}
      <section className="industry-section">
        <div className="industry-section__content">
          <div className="industry-section__text">
            <h2 className="industry-section__title">Autonomous Flight Systems</h2>
            <p className="industry-section__description">
              Leading the development of autonomous flight technologies and advanced avionics systems. Our solutions integrate AI-powered flight control systems, real-time data analytics, and advanced sensor networks to enhance flight safety, optimize navigation, and enable next-generation unmanned aerial systems.
            </p>
          </div>
          <div className="industry-section__image">
            <img src="/img/pic2.png" alt="Autonomous Flight Systems" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="industry-cta">
        <div className="container">
          <h2>Ready to Transform Your Aerospace Operations?</h2>
          <p>Let's discuss how our aerospace solutions can drive innovation in your organization.</p>
          <Link to="/contact" className="btn btn-primary">Get Started</Link>
        </div>
      </section>
    </div>
  );
};

export default Aerospace;

