import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/pages/services.css';

const Services = () => {
  const services = [
    {
      title: 'Generative AI',
      description: 'Secure implementation of AI models with protection against data poisoning and prompt injection attacks.',
      icon: '🤖',
      link: '/services/generative-ai'
    },
    {
      title: 'Blockchain & Web3',
      description: 'Smart contract auditing and security architecture for decentralized applications and protocols.',
      icon: '🔗',
      link: '/services/blockchain'
    },
    {
      title: 'Data Engineering',
      description: 'Robust data infrastructure with end-to-end encryption and secure processing pipelines.',
      icon: '📊',
      link: '/services/data-engineering'
    },
    {
      title: 'Cloud Engineering',
      description: 'Secure cloud architecture design with continuous compliance monitoring and automated security controls.',
      icon: '☁️',
      link: '/services/cloud-engineering'
    },
    {
      title: 'App Development',
      description: 'Developing secure applications with built-in protection against the latest threats and vulnerabilities.',
      icon: '📱',
      link: '/services/app-development'
    },
    {
      title: 'Managed Service Providers',
      description: '24/7 security operations with proactive threat hunting and incident response capabilities.',
      icon: '🔧',
      link: '/services/managed-services'
    },
    {
      title: 'Intelligent Automation',
      description: 'Secure automation solutions with built-in controls and compliance-by-design architecture.',
      icon: '⚙️',
      link: '/services/intelligent-automation'
    }
  ];

  return (
    <div className="services">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Our Services</h1>
          <p className="page-subtitle">
            Comprehensive solutions to secure your business
          </p>
        </div>
      </div>

      <section className="services-section">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <Link to={service.link} key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="service-categories">
        <div className="container">
          <h2 className="section-title">Service Categories</h2>
          <div className="categories-grid">
            <Link to="/services/digital" className="category-card">
              <div className="service-badge badge-purple">DG</div>
              <h3>Digital Services</h3>
              <p>Seamlessly merging creativity & technology</p>
            </Link>

            <Link to="/services/consulting" className="category-card">
              <div className="service-badge badge-blue">CS</div>
              <h3>Consulting Services</h3>
              <p>InnoSolve - Tackling complexity</p>
            </Link>

            <Link to="/services/technology" className="category-card">
              <div className="service-badge badge-teal">TC</div>
              <h3>Technology Services</h3>
              <p>Innovation - Empowering innovation for success</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
