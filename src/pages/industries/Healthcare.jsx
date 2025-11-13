import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/pages/industry-detail.css';

const Healthcare = () => {
  return (
    <div className="industry-detail">
      {/* Hero Section */}
      <section className="industry-hero">
        <div className="industry-hero__content">
          <h1 className="industry-hero__title">
            Transforming Healthcare with Digital Health Solutions, Telemedicine, and Advanced Medical Analytics
          </h1>
        </div>
      </section>

      {/* First Section */}
      <section className="industry-section">
        <div className="industry-section__content">
          <div className="industry-section__text">
            <h2 className="industry-section__title">Digital Health Platform</h2>
            <p className="industry-section__description">
              Creating comprehensive digital health environments that combine electronic health records, telemedicine capabilities, and patient engagement tools. Our platform enables healthcare providers to deliver better care while improving patient outcomes and operational efficiency.
            </p>
          </div>
          <div className="industry-section__image">
            <img src="/img/pic5.png" alt="Digital Health Platform" />
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section className="industry-section alt">
        <div className="industry-section__content reverse">
          <div className="industry-section__text">
            <h2 className="industry-section__title">Telemedicine Solutions</h2>
            <p className="industry-section__description">
              Developing secure and reliable telemedicine platforms that connect patients with healthcare providers. Our solutions enable remote consultations, virtual visits, and remote patient monitoring, making healthcare more accessible and convenient.
            </p>
          </div>
          <div className="industry-section__image">
            <img src="/img/pic6.png" alt="Telemedicine Solutions" />
          </div>
        </div>
      </section>

      {/* Third Section */}
      <section className="industry-section">
        <div className="industry-section__content">
          <div className="industry-section__text">
            <h2 className="industry-section__title">Medical Analytics</h2>
            <p className="industry-section__description">
              Implementing advanced analytics to improve patient care, optimize operations, and enhance decision-making. Our analytics solutions help healthcare providers identify trends, predict outcomes, and deliver more personalized care through data-driven insights.
            </p>
          </div>
          <div className="industry-section__image">
            <img src="/img/pic7.png" alt="Medical Analytics" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="industry-cta">
        <div className="container">
          <h2>Ready to Transform Your Healthcare Operations?</h2>
          <p>Let's discuss how our healthcare solutions can drive innovation in your organization.</p>
          <Link to="/contact" className="btn btn-primary">Get Started</Link>
        </div>
      </section>
    </div>
  );
};

export default Healthcare;

