import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/pages/service-detail.css';

const IntelligentAutomation = () => {
  return (
    <div className="service-detail">
      {/* Hero Section */}
      <section className="service-hero">
        <div className="container">
          <div className="service-hero__content">
            <h1 className="service-hero__title">Intelligent Automation</h1>
            <p className="service-hero__subtitle">
              Secure automation solutions with built-in controls and compliance-by-design architecture.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="service-overview">
        <div className="container">
          <div className="service-overview__content">
            <div className="service-overview__text">
              <h2>RPA & Intelligent Automation</h2>
              <p>
                Automate complex business processes with intelligent automation solutions that combine RPA (Robotic Process 
                Automation), AI, and machine learning. Our automation solutions help you reduce manual work, improve accuracy, 
                and accelerate business processes.
              </p>
              <p>
                We design automation solutions with security and compliance built-in from the ground up. Our automation 
                frameworks include built-in controls, audit trails, and compliance-by-design architecture to ensure your 
                automated processes meet regulatory requirements.
              </p>
            </div>
            <div className="service-overview__image">
              <div className="service-icon-large">⚙️</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="service-features">
        <div className="container">
          <h2 className="section-title">Our Intelligent Automation Services</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🤖</div>
              <h3>RPA Implementation</h3>
              <p>Deploy robotic process automation to automate repetitive tasks and improve operational efficiency.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🧠</div>
              <h3>AI-Powered Automation</h3>
              <p>Combine AI and ML with automation to handle complex decision-making and cognitive tasks.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔄</div>
              <h3>Process Automation</h3>
              <p>Automate end-to-end business processes across multiple systems and applications.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Compliance-by-Design</h3>
              <p>Build automation solutions with built-in controls and compliance measures from the start.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Automation Analytics</h3>
              <p>Monitor and analyze automation performance to continuously improve efficiency and ROI.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🛠️</div>
              <h3>Automation Support</h3>
              <p>Ongoing support and maintenance to ensure your automation solutions run smoothly and efficiently.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="service-benefits">
        <div className="container">
          <h2 className="section-title">Benefits of Intelligent Automation</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-icon">⏱️</div>
              <h3>Time Savings</h3>
              <p>Automate repetitive tasks to free up your team for strategic, high-value work.</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">✅</div>
              <h3>Improved Accuracy</h3>
              <p>Reduce human errors and ensure consistent, accurate process execution.</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">💰</div>
              <h3>Cost Reduction</h3>
              <p>Lower operational costs by automating labor-intensive processes and workflows.</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">📈</div>
              <h3>Scalability</h3>
              <p>Scale your operations quickly without proportional increases in human resources.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="service-cta">
        <div className="container">
          <h2>Ready to Automate Your Business Processes?</h2>
          <p>Let's discuss how intelligent automation can transform your operations and drive efficiency.</p>
          <Link to="/contact" className="btn btn-primary">Get Started</Link>
        </div>
      </section>
    </div>
  );
};

export default IntelligentAutomation;

