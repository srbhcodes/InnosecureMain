import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/pages/service-category.css';

const Consulting = () => {
  const services = [
    {
      title: 'Managed Service Providers',
      description: '24/7 security operations with proactive threat hunting and incident response capabilities.',
      icon: '🔧',
      link: '/services/managed-services'
    }
  ];

  const consultingServices = [
    {
      title: 'Workday Services',
      description: 'Efficient and responsive management for Workday applications to help businesses in financial management, human resource management, and business planning.',
      icon: '💼'
    },
    {
      title: 'Kronos Consulting Services',
      description: 'Time & Attendance, Leave Management, Activity Management, Advanced Scheduling, and Analytics end-to-end implementation and support.',
      icon: '⏰'
    },
    {
      title: 'Jira Consulting Services',
      description: 'Help businesses run more efficiently while also being more productive. Scale, develop, and grow with Jira software, Jira work management, and Confluence.',
      icon: '📋'
    }
  ];

  return (
    <div className="service-category">
      {/* Hero Section */}
      <section className="category-hero">
        <div className="container">
          <h1 className="category-hero__title">Consulting Services</h1>
          <p className="category-hero__subtitle">
            InnoSolve - Tackling complexity
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="category-overview">
        <div className="container">
          <div className="category-overview__content">
            <div className="category-overview__text">
              <h2>IT Consulting</h2>
              <p>
                Transform your business with strategic IT consulting services. Our experts help you navigate digital 
                transformation, optimize operations, and implement cutting-edge solutions.
              </p>
              <p>
                We offer comprehensive services to help businesses navigate the constantly evolving world of technology. 
                Our team of experienced consultants provide strategic advice and guidance on a range of IT-related topics, 
                including cybersecurity, cloud computing, data management, and software development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="category-services">
        <div className="container">
          <h2 className="section-title">Our Consulting Services</h2>
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

      {/* Specialized Consulting */}
      <section className="specialized-consulting">
        <div className="container">
          <h2 className="section-title">Specialized Consulting Solutions</h2>
          <div className="consulting-grid">
            {consultingServices.map((service, index) => (
              <div key={index} className="consulting-card">
                <div className="consulting-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="category-cta">
        <div className="container">
          <h2>Ready to Get Expert IT Consulting?</h2>
          <p>Let's discuss how our consulting services can transform your business operations.</p>
          <Link to="/contact" className="btn btn-primary">Get Started</Link>
        </div>
      </section>
    </div>
  );
};

export default Consulting;

