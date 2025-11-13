import React from 'react';
import '../../styles/pages/service-detail.css';

const ManagedServices = () => {
  return (
    <div className="service-detail">
      {/* Hero Section */}
      <section className="service-hero">
        <div className="container">
          <div className="service-hero__content">
            <h1 className="service-hero__title">Managed Service Providers</h1>
            <p className="service-hero__subtitle">
              24/7 security operations with proactive threat hunting and incident response capabilities.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="service-overview">
        <div className="container">
          <div className="service-overview__content">
            <div className="service-overview__text">
              <h2>24/7 Managed IT Services</h2>
              <p>
                Your operations are paramount. Our dedicated support channels are available around the clock 
                to provide swift assistance and ensure uninterrupted performance. We take care of your IT infrastructure 
                so you can focus on your core business.
              </p>
              <p>
                Our managed services include proactive monitoring, security operations, threat hunting, and rapid incident 
                response. We ensure your systems are always secure, optimized, and running at peak performance.
              </p>
            </div>
            <div className="service-overview__image">
              <div className="service-icon-large">🔧</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="service-features">
        <div className="container">
          <h2 className="section-title">Our Managed Services</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🛡️</div>
              <h3>24/7 Security Operations</h3>
              <p>Round-the-clock security monitoring and threat detection to protect your infrastructure from cyber threats.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔍</div>
              <h3>Proactive Threat Hunting</h3>
              <p>Advanced threat hunting capabilities to identify and neutralize security threats before they impact your business.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Incident Response</h3>
              <p>Rapid incident response team ready to address security incidents and minimize business impact.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Infrastructure Monitoring</h3>
              <p>Continuous monitoring of your IT infrastructure to ensure optimal performance and availability.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔄</div>
              <h3>Cloud Infrastructure Management</h3>
              <p>Comprehensive management of your cloud infrastructure including optimization, scaling, and cost management.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔧</div>
              <h3>Technical Support</h3>
              <p>Dedicated technical support channels available 24/7 to resolve issues and provide expert guidance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="service-benefits">
        <div className="container">
          <h2 className="section-title">Why Choose Our Managed Services</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-icon">⏱️</div>
              <h3>Reliable Delivery</h3>
              <p>Count on us for timely project completion with efficient workflows that minimize delays.</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">👥</div>
              <h3>Expert Teams</h3>
              <p>Leverage our pool of seasoned professionals with deep domain knowledge and cutting-edge skills.</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">🔧</div>
              <h3>Continuous Support</h3>
              <p>Dedicated support channels available around the clock to ensure uninterrupted performance.</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">⭐</div>
              <h3>Quality Commitment</h3>
              <p>Focus on high-quality, scalable IT solutions that strengthen operations and provide solid foundations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="service-cta">
        <div className="container">
          <h2>Ready to Outsource Your IT Management?</h2>
          <p>Let's discuss how our managed services can free up your team to focus on strategic initiatives.</p>
          <a href="/contact" className="btn btn-primary">Get Started</a>
        </div>
      </section>
    </div>
  );
};

export default ManagedServices;

