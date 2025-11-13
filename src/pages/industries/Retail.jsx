import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/pages/industry-detail.css';
import retail1 from '../../components/industries/images/retail1.png';
import retail2 from '../../components/industries/images/retail2.jpg';
import retail3 from '../../components/industries/images/retail3.jpg';

const Retail = () => {
  return (
    <div className="industry-detail">
      {/* Hero Section */}
      <section className="industry-hero">
        <div className="industry-hero__content">
          <h1 className="industry-hero__title">
            Transforming Retail with Omnichannel Solutions, Smart Inventory Management, and Personalized Shopping Experiences
          </h1>
        </div>
      </section>

      {/* First Section */}
      <section className="industry-section">
        <div className="industry-section__content">
          <div className="industry-section__text">
            <h2 className="industry-section__title">Omnichannel Platform</h2>
            <p className="industry-section__description">
              Creating seamless shopping experiences across online and offline channels. Our platform integrates e-commerce, mobile apps, and physical stores to provide customers with consistent, personalized shopping journeys.
            </p>
          </div>
          <div className="industry-section__image">
            <img src={retail1} alt="Digital Retail Platform" />
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section className="industry-section alt">
        <div className="industry-section__content reverse">
          <div className="industry-section__text">
            <h2 className="industry-section__title">Smart Inventory Management</h2>
            <p className="industry-section__description">
              Implementing advanced inventory management systems that optimize stock levels and reduce operational costs. Our solutions provide real-time inventory tracking, automated replenishment, and predictive analytics for better stock management.
            </p>
          </div>
          <div className="industry-section__image">
            <img src={retail2} alt="Smart Inventory Management" />
          </div>
        </div>
      </section>

      {/* Third Section */}
      <section className="industry-section">
        <div className="industry-section__content">
          <div className="industry-section__text">
            <h2 className="industry-section__title">Personalized Shopping</h2>
            <p className="industry-section__description">
              Developing AI-powered personalization engines that deliver tailored product recommendations and promotions. Our solutions enhance customer engagement and increase sales through personalized shopping experiences.
            </p>
          </div>
          <div className="industry-section__image">
            <img src={retail3} alt="Personalized Shopping" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="industry-cta">
        <div className="container">
          <h2>Ready to Transform Your Retail Operations?</h2>
          <p>Let's discuss how our retail solutions can drive innovation in your organization.</p>
          <Link to="/contact" className="btn btn-primary">Get Started</Link>
        </div>
      </section>
    </div>
  );
};

export default Retail;

