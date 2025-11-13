import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/pages/industry-detail.css';
import banking1 from '../../components/industries/images/banking1.jpg';
import banking2 from '../../components/industries/images/banking2.png';
import banking3 from '../../components/industries/images/banking3.jpg';

const Banking = () => {
  return (
    <div className="industry-detail">
      {/* Hero Section */}
      <section className="industry-hero">
        <div className="industry-hero__content">
          <h1 className="industry-hero__title">
            Transforming Banking with Digital Innovation, Secure Transactions, and Customer-Centric Financial Solutions
          </h1>
        </div>
      </section>

      {/* First Section */}
      <section className="industry-section">
        <div className="industry-section__content">
          <div className="industry-section__text">
            <h2 className="industry-section__title">Digital Banking Platform</h2>
            <p className="industry-section__description">
              Revolutionizing the banking experience with our comprehensive digital platform that offers seamless online banking, mobile payments, and personalized financial management tools. Our solutions enable secure, convenient, and efficient banking operations for both retail and corporate clients.
            </p>
          </div>
          <div className="industry-section__image">
            <img src={banking1} alt="Digital Banking Platform" />
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section className="industry-section alt">
        <div className="industry-section__content reverse">
          <div className="industry-section__text">
            <h2 className="industry-section__title">Advanced Security Solutions</h2>
            <p className="industry-section__description">
              Implementing cutting-edge security measures including biometric authentication, AI-powered fraud detection, and blockchain-based transaction security. Our solutions ensure the highest level of protection for financial data and transactions while maintaining regulatory compliance.
            </p>
          </div>
          <div className="industry-section__image">
            <img src={banking2} alt="Advanced Security Solutions" />
          </div>
        </div>
      </section>

      {/* Third Section */}
      <section className="industry-section">
        <div className="industry-section__content">
          <div className="industry-section__text">
            <h2 className="industry-section__title">Financial Analytics</h2>
            <p className="industry-section__description">
              Leveraging big data and AI to provide actionable insights for risk management, customer behavior analysis, and investment strategies. Our analytics solutions help financial institutions make data-driven decisions and optimize their operations.
            </p>
          </div>
          <div className="industry-section__image">
            <img src={banking3} alt="Financial Analytics" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="industry-cta">
        <div className="container">
          <h2>Ready to Transform Your Banking Operations?</h2>
          <p>Let's discuss how our banking solutions can drive innovation in your organization.</p>
          <Link to="/contact" className="btn btn-primary">Get Started</Link>
        </div>
      </section>
    </div>
  );
};

export default Banking;

