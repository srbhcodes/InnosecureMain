import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/pages/service-detail.css';

const DataEngineering = () => {
  return (
    <div className="service-detail">
      {/* Hero Section */}
      <section className="service-hero">
        <div className="container">
          <div className="service-hero__content">
            <h1 className="service-hero__title">Data Engineering</h1>
            <p className="service-hero__subtitle">
              Robust data infrastructure with end-to-end encryption and secure processing pipelines.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="service-overview">
        <div className="container">
          <div className="service-overview__content">
            <div className="service-overview__text">
              <h2>Big Data Analytics & Engineering</h2>
              <p>
                Extract valuable insights from large datasets to drive informed decisions. Our data engineering services 
                help you build robust, scalable data infrastructure that enables real-time analytics and business intelligence.
              </p>
              <p>
                We design and implement secure data pipelines with end-to-end encryption, ensuring your sensitive data 
                is protected throughout the entire data lifecycle. From data ingestion to processing and storage, we ensure 
                your data infrastructure is secure, compliant, and optimized for performance.
              </p>
            </div>
            <div className="service-overview__image">
              <div className="service-icon-large">📊</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="service-features">
        <div className="container">
          <h2 className="section-title">Our Data Engineering Services</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🏗️</div>
              <h3>Data Pipeline Development</h3>
              <p>Build scalable ETL/ELT pipelines to process large volumes of data efficiently and reliably.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💾</div>
              <h3>Data Warehouse Design</h3>
              <p>Design and implement data warehouses optimized for analytics and business intelligence.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Data Security & Encryption</h3>
              <p>Implement end-to-end encryption and security measures to protect sensitive data at rest and in transit.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Real-Time Data Processing</h3>
              <p>Build real-time data streaming solutions for immediate insights and decision-making.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📈</div>
              <h3>Data Analytics & BI</h3>
              <p>Create powerful analytics dashboards and business intelligence solutions for data-driven decisions.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">☁️</div>
              <h3>Cloud Data Solutions</h3>
              <p>Leverage cloud platforms for scalable, cost-effective data storage and processing solutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="service-benefits">
        <div className="container">
          <h2 className="section-title">Why Choose Our Data Engineering Services</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-icon">🔐</div>
              <h3>Security First</h3>
              <p>End-to-end encryption and comprehensive security measures to protect your sensitive data.</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">📊</div>
              <h3>Actionable Insights</h3>
              <p>Transform raw data into actionable insights that drive business growth and optimization.</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">⚡</div>
              <h3>Scalable Architecture</h3>
              <p>Build data infrastructure that scales with your business needs and handles growing data volumes.</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">✅</div>
              <h3>Compliance Ready</h3>
              <p>Ensure your data solutions meet regulatory requirements including GDPR, HIPAA, and more.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="service-cta">
        <div className="container">
          <h2>Ready to Unlock the Power of Your Data?</h2>
          <p>Let's discuss how data engineering can transform your business intelligence and analytics capabilities.</p>
          <Link to="/contact" className="btn btn-primary">Get Started</Link>
        </div>
      </section>
    </div>
  );
};

export default DataEngineering;

