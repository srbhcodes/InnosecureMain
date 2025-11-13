import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/pages/service-category.css';

const Digital = () => {
  const services = [
    {
      title: 'Generative AI',
      description: 'Secure implementation of AI models with protection against data poisoning and prompt injection attacks.',
      icon: '🤖',
      link: '/services/generative-ai'
    },
    {
      title: 'App Development',
      description: 'Developing secure applications with built-in protection against the latest threats and vulnerabilities.',
      icon: '📱',
      link: '/services/app-development'
    }
  ];

  return (
    <div className="service-category">
      {/* Hero Section */}
      <section className="category-hero">
        <div className="container">
          <h1 className="category-hero__title">Digital Services</h1>
          <p className="category-hero__subtitle">
            Seamlessly merging creativity & technology
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="category-overview">
        <div className="container">
          <div className="category-overview__content">
            <div className="category-overview__text">
              <h2>We Are Your Digital Transformation Partner</h2>
              <p>
                We accelerate your Digital Transformation journey by helping you build solutions of the future using 
                emerging technologies such as Blockchain, GenAI, IoT, AI/ML, RPA, Cloud and more.
              </p>
              <p>
                Our digital services combine cutting-edge technology with creative design to deliver exceptional 
                digital experiences that drive business growth and customer engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="category-services">
        <div className="container">
          <h2 className="section-title">Our Digital Services</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <Link to={service.link} key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <span className="service-link">Learn More →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="category-cta">
        <div className="container">
          <h2>Ready to Transform Your Digital Presence?</h2>
          <p>Let's discuss how our digital services can accelerate your business growth.</p>
          <Link to="/contact" className="btn btn-primary">Get Started</Link>
        </div>
      </section>
    </div>
  );
};

export default Digital;

