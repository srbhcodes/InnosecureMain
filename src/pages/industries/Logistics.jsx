import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/pages/industry-detail.css';

const Logistics = () => {
  return (
    <div className="industry-detail">
      {/* Hero Section */}
      <section className="industry-hero">
        <div className="industry-hero__content">
          <h1 className="industry-hero__title">
            Transforming Logistics with Autonomous Delivery Systems, Smart Warehousing, and Real-Time Supply Chain Analytics
          </h1>
        </div>
      </section>

      {/* First Section */}
      <section className="industry-section">
        <div className="industry-section__content">
          <div className="industry-section__text">
            <h2 className="industry-section__title">Autonomous Delivery Systems</h2>
            <p className="industry-section__description">
              Implementing cutting-edge autonomous delivery solutions including drones, self-driving vehicles, and robotic delivery systems. Our technologies enhance delivery efficiency, reduce operational costs, and provide last-mile delivery solutions for urban and remote areas.
            </p>
          </div>
          <div className="industry-section__image">
            <img src="/img/logistic.png" alt="Autonomous Delivery Systems" />
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section className="industry-section alt">
        <div className="industry-section__content reverse">
          <div className="industry-section__text">
            <h2 className="industry-section__title">Smart Warehousing Solutions</h2>
            <p className="industry-section__description">
              Developing intelligent warehouse management systems that optimize inventory control and order fulfillment. Our solutions incorporate robotics, IoT sensors, and AI-powered analytics to streamline warehouse operations and improve inventory accuracy.
            </p>
          </div>
          <div className="industry-section__image">
            <img src="/img/pic10.png" alt="Smart Warehousing Solutions" />
          </div>
        </div>
      </section>

      {/* Third Section */}
      <section className="industry-section">
        <div className="industry-section__content">
          <div className="industry-section__text">
            <h2 className="industry-section__title">Supply Chain Analytics</h2>
            <p className="industry-section__description">
              Creating advanced analytics platforms that provide real-time visibility into supply chain operations. Our solutions enable predictive analytics, route optimization, and demand forecasting to improve efficiency and reduce operational costs.
            </p>
          </div>
          <div className="industry-section__image">
            <img src="/img/growth.png" alt="Supply Chain Analytics" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="industry-cta">
        <div className="container">
          <h2>Ready to Transform Your Logistics Operations?</h2>
          <p>Let's discuss how our logistics solutions can drive innovation in your organization.</p>
          <Link to="/contact" className="btn btn-primary">Get Started</Link>
        </div>
      </section>
    </div>
  );
};

export default Logistics;

