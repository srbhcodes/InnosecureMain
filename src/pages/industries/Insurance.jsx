import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/pages/industry-detail.css';

const Insurance = () => {
  return (
    <div className="industry-detail">
      {/* Hero Section */}
      <section className="industry-hero">
        <div className="industry-hero__content">
          <h1 className="industry-hero__title">
            Modernizing Insurance with Digital Platforms, Risk Analytics, and Automated Claims Processing
          </h1>
        </div>
      </section>

      {/* First Section */}
      <section className="industry-section">
        <div className="industry-section__content">
          <div className="industry-section__text">
            <h2 className="industry-section__title">Digital Insurance Platform</h2>
            <p className="industry-section__description">
              Creating comprehensive digital insurance solutions that streamline policy management, claims processing, and customer service. Our platform enables insurers to deliver personalized products and seamless experiences to their customers.
            </p>
          </div>
          <div className="industry-section__image">
            <img src="/img/life-insurance.png" alt="Digital Insurance Platform" />
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section className="industry-section alt">
        <div className="industry-section__content reverse">
          <div className="industry-section__text">
            <h2 className="industry-section__title">Risk Analytics Solutions</h2>
            <p className="industry-section__description">
              Implementing advanced analytics to assess risks, predict claims, and optimize pricing strategies. Our solutions help insurers make data-driven decisions and improve underwriting accuracy through AI-powered risk assessment.
            </p>
          </div>
          <div className="industry-section__image">
            <img src="/img/protection.png" alt="Risk Analytics Solutions" />
          </div>
        </div>
      </section>

      {/* Third Section */}
      <section className="industry-section">
        <div className="industry-section__content">
          <div className="industry-section__text">
            <h2 className="industry-section__title">Claims Automation</h2>
            <p className="industry-section__description">
              Developing automated claims processing systems that reduce processing time and improve accuracy. Our solutions leverage AI and machine learning to streamline claims assessment, fraud detection, and settlement processes.
            </p>
          </div>
          <div className="industry-section__image">
            <img src="/img/pic10.png" alt="Claims Automation" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="industry-cta">
        <div className="container">
          <h2>Ready to Transform Your Insurance Operations?</h2>
          <p>Let's discuss how our insurance solutions can drive innovation in your organization.</p>
          <Link to="/contact" className="btn btn-primary">Get Started</Link>
        </div>
      </section>
    </div>
  );
};

export default Insurance;

