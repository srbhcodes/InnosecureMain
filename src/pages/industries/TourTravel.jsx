import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/pages/industry-detail.css';
import tour1 from '../../components/industries/images/tour1.avif';
import tour2 from '../../components/industries/images/tour2.webp';
import tour3 from '../../components/industries/images/tour3.jpg';

const TourTravel = () => {
  return (
    <div className="industry-detail">
      {/* Hero Section */}
      <section className="industry-hero">
        <div className="industry-hero__content">
          <h1 className="industry-hero__title">
            Transforming Travel with Virtual Tourism, AI Trip Planning, and Smart Destination Management
          </h1>
        </div>
      </section>

      {/* First Section */}
      <section className="industry-section">
        <div className="industry-section__content">
          <div className="industry-section__text">
            <h2 className="industry-section__title">Virtual Tourism Experiences</h2>
            <p className="industry-section__description">
              Creating immersive virtual travel experiences through VR and AR technologies. Our solutions enable travelers to explore destinations virtually, preview accommodations, and experience cultural attractions before booking, enhancing trip planning and decision-making.
            </p>
          </div>
          <div className="industry-section__image">
            <img src={tour1} alt="Travel Solutions" />
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section className="industry-section alt">
        <div className="industry-section__content reverse">
          <div className="industry-section__text">
            <h2 className="industry-section__title">AI Travel Planning</h2>
            <p className="industry-section__description">
              Developing intelligent travel planning assistants that create personalized itineraries. Our AI solutions analyze traveler preferences, suggest optimal routes, and provide real-time recommendations for activities, dining, and accommodations based on individual interests.
            </p>
          </div>
          <div className="industry-section__image">
            <img src={tour2} alt="AI Travel Planning" />
          </div>
        </div>
      </section>

      {/* Third Section */}
      <section className="industry-section">
        <div className="industry-section__content">
          <div className="industry-section__text">
            <h2 className="industry-section__title">Smart Destination Management</h2>
            <p className="industry-section__description">
              Implementing smart tourism solutions that optimize destination management. Our technologies include crowd monitoring systems, real-time visitor analytics, and digital wayfinding tools that enhance visitor experiences while supporting sustainable tourism practices.
            </p>
          </div>
          <div className="industry-section__image">
            <img src={tour3} alt="Smart Destination Management" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="industry-cta">
        <div className="container">
          <h2>Ready to Transform Your Travel Operations?</h2>
          <p>Let's discuss how our travel solutions can drive innovation in your organization.</p>
          <Link to="/contact" className="btn btn-primary">Get Started</Link>
        </div>
      </section>
    </div>
  );
};

export default TourTravel;

