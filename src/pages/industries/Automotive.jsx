import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/pages/industry-detail.css';

const Automotive = () => {
  return (
    <div className="industry-detail">
      {/* Hero Section */}
      <section className="industry-hero">
        <div className="industry-hero__content">
          <h1 className="industry-hero__title">
            Driving Innovation in Automotive Technology with Advanced Mobility Solutions and Smart Vehicle Systems
          </h1>
        </div>
      </section>

      {/* First Section */}
      <section className="industry-section">
        <div className="industry-section__content">
          <div className="industry-section__text">
            <h2 className="industry-section__title">Electric Vehicle Technology</h2>
            <p className="industry-section__description">
              Pioneering the future of electric mobility with cutting-edge battery technology, charging infrastructure, and power management systems. Our solutions are driving the transition to sustainable transportation with innovative EV platforms and energy-efficient powertrains.
            </p>
          </div>
          <div className="industry-section__image">
            <img src="/img/pic10.png" alt="Electric Vehicle Solutions" />
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section className="industry-section alt">
        <div className="industry-section__content reverse">
          <div className="industry-section__text">
            <h2 className="industry-section__title">Connected Vehicle Systems</h2>
            <p className="industry-section__description">
              Developing advanced connected vehicle technologies that enable seamless communication between vehicles, infrastructure, and cloud systems. Our solutions enhance safety, optimize traffic flow, and deliver personalized in-vehicle experiences through cutting-edge telematics and IoT integration.
            </p>
          </div>
          <div className="industry-section__image">
            <div className="industry-section__image-placeholder">📡</div>
          </div>
        </div>
      </section>

      {/* Third Section */}
      <section className="industry-section">
        <div className="industry-section__content">
          <div className="industry-section__text">
            <h2 className="industry-section__title">Autonomous Driving</h2>
            <p className="industry-section__description">
              Leading the development of autonomous driving systems with advanced AI, sensor fusion, and real-time decision-making capabilities. Our solutions are setting new standards for vehicle safety and automation, enabling the next generation of self-driving vehicles.
            </p>
          </div>
          <div className="industry-section__image">
            <div className="industry-section__image-placeholder">🚗</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="industry-cta">
        <div className="container">
          <h2>Ready to Transform Your Automotive Operations?</h2>
          <p>Let's discuss how our automotive solutions can drive innovation in your organization.</p>
          <Link to="/contact" className="btn btn-primary">Get Started</Link>
        </div>
      </section>
    </div>
  );
};

export default Automotive;

