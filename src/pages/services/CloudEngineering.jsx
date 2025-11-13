import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/pages/service-detail.css';

const CloudEngineering = () => {
  return (
    <div className="service-detail">
      {/* Hero Section */}
      <section className="service-hero">
        <div className="container">
          <div className="service-hero__content">
            <h1 className="service-hero__title">Cloud Engineering</h1>
            <p className="service-hero__subtitle">
              Secure cloud architecture design with continuous compliance monitoring and automated security controls.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="service-overview">
        <div className="container">
          <div className="service-overview__content">
            <div className="service-overview__text">
              <h2>Cloud Computing Solutions</h2>
              <p>
                Utilize scalable and flexible cloud platforms for enhanced performance. Our cloud engineering services 
                help you migrate to the cloud, optimize existing cloud infrastructure, and implement secure, compliant 
                cloud architectures.
              </p>
              <p>
                We design cloud solutions with security at the forefront, implementing continuous compliance monitoring 
                and automated security controls to ensure your cloud infrastructure meets industry standards and regulatory 
                requirements.
              </p>
            </div>
            <div className="service-overview__image">
              <div className="service-icon-large">☁️</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="service-features">
        <div className="container">
          <h2 className="section-title">Our Cloud Engineering Services</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>Cloud Migration</h3>
              <p>Seamlessly migrate your applications and infrastructure to the cloud with minimal downtime.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🏗️</div>
              <h3>Cloud Architecture Design</h3>
              <p>Design scalable, secure, and cost-effective cloud architectures tailored to your business needs.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Cloud Security</h3>
              <p>Implement comprehensive security measures including IAM, encryption, and compliance monitoring.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚙️</div>
              <h3>DevOps & CI/CD</h3>
              <p>Set up automated deployment pipelines and DevOps practices for efficient cloud operations.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Cloud Optimization</h3>
              <p>Optimize cloud costs and performance through right-sizing, auto-scaling, and resource management.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔄</div>
              <h3>Multi-Cloud Strategy</h3>
              <p>Design and implement multi-cloud solutions for redundancy, compliance, and vendor flexibility.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="service-benefits">
        <div className="container">
          <h2 className="section-title">Why Choose Our Cloud Engineering Services</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-icon">🔐</div>
              <h3>Security & Compliance</h3>
              <p>Continuous compliance monitoring and automated security controls to protect your cloud infrastructure.</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">💰</div>
              <h3>Cost Optimization</h3>
              <p>Optimize cloud spending through intelligent resource management and cost-effective architecture design.</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">⚡</div>
              <h3>Scalability</h3>
              <p>Build cloud solutions that automatically scale to meet demand and handle traffic spikes efficiently.</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">🛠️</div>
              <h3>Expert Support</h3>
              <p>24/7 cloud infrastructure management and support from certified cloud engineers and architects.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="service-cta">
        <div className="container">
          <h2>Ready to Transform Your Infrastructure with Cloud?</h2>
          <p>Let's discuss how cloud engineering can enhance your business agility and scalability.</p>
          <Link to="/contact" className="btn btn-primary">Get Started</Link>
        </div>
      </section>
    </div>
  );
};

export default CloudEngineering;

