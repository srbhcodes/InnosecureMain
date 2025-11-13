import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/pages/service-detail.css';

const Blockchain = () => {
  return (
    <div className="service-detail">
      {/* Hero Section */}
      <section className="service-hero">
        <div className="container">
          <div className="service-hero__content">
            <h1 className="service-hero__title">Blockchain & Web3</h1>
            <p className="service-hero__subtitle">
              Smart contract auditing and security architecture for decentralized applications and protocols.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="service-overview">
        <div className="container">
          <div className="service-overview__content">
            <div className="service-overview__text">
              <h2>Blockchain Solutions</h2>
              <p>
                Build secure, transparent, and decentralized applications for various industries. Our blockchain expertise 
                helps you leverage the power of distributed ledger technology to create innovative solutions that enhance 
                trust, transparency, and efficiency.
              </p>
              <p>
                We specialize in smart contract development, auditing, and security architecture for Web3 applications. 
                Our team ensures your decentralized applications are secure, scalable, and compliant with industry standards.
              </p>
            </div>
            <div className="service-overview__image">
              <div className="service-icon-large">🔗</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="service-features">
        <div className="container">
          <h2 className="section-title">Our Blockchain & Web3 Services</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📝</div>
              <h3>Smart Contract Development</h3>
              <p>Develop secure and efficient smart contracts for various blockchain platforms including Ethereum, Polygon, and more.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔍</div>
              <h3>Smart Contract Auditing</h3>
              <p>Comprehensive security audits to identify vulnerabilities and ensure your smart contracts are production-ready.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🏗️</div>
              <h3>DApp Development</h3>
              <p>Build decentralized applications (DApps) with user-friendly interfaces and seamless blockchain integration.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔐</div>
              <h3>Security Architecture</h3>
              <p>Design robust security frameworks for Web3 applications to protect against common blockchain vulnerabilities.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌐</div>
              <h3>Web3 Integration</h3>
              <p>Integrate Web3 technologies into existing systems to enable decentralized functionality and tokenization.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💼</div>
              <h3>Blockchain Consulting</h3>
              <p>Strategic guidance on blockchain adoption, tokenomics design, and decentralized business models.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="service-benefits">
        <div className="container">
          <h2 className="section-title">Why Choose Our Blockchain Solutions</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-icon">🛡️</div>
              <h3>Security First</h3>
              <p>Comprehensive security audits and best practices to ensure your blockchain solutions are secure and reliable.</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">⚡</div>
              <h3>Scalable Solutions</h3>
              <p>Build blockchain applications that can scale with your business needs and handle high transaction volumes.</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">🔗</div>
              <h3>Multi-Chain Support</h3>
              <p>Expertise across multiple blockchain platforms to choose the best solution for your specific use case.</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">💡</div>
              <h3>Innovation Driven</h3>
              <p>Leverage cutting-edge Web3 technologies to create innovative solutions that give you a competitive edge.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="service-cta">
        <div className="container">
          <h2>Ready to Build on the Blockchain?</h2>
          <p>Let's discuss how blockchain and Web3 can transform your business operations.</p>
          <Link to="/contact" className="btn btn-primary">Get Started</Link>
        </div>
      </section>
    </div>
  );
};

export default Blockchain;

