import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/pages/service-category.css';

const Technology = () => {
  const services = [
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
      title: 'Intelligent Automation',
      description: 'Secure automation solutions with built-in controls and compliance-by-design architecture.',
      icon: '⚙️',
      link: '/services/intelligent-automation'
    }
  ];

  return (
    <div className="service-category">
      {/* Hero Section */}
      <section className="category-hero">
        <div className="container">
          <h1 className="category-hero__title">Technology Services</h1>
          <p className="category-hero__subtitle">
            Innovation - Empowering innovation for success
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="category-overview">
        <div className="container">
          <div className="category-overview__content">
            <div className="category-overview__text">
              <h2>Emerging Technologies</h2>
              <p>
                Leverage the power of cutting-edge solutions like AI, ML, IoT, Blockchain, and more to transform 
                your business operations and gain a competitive edge.
              </p>
              <p>
                Our technology services help you stay ahead of the curve in the rapidly changing technology landscape. 
                We provide strategic advice and implementation services for emerging technologies that drive innovation 
                and business growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="category-services">
        <div className="container">
          <h2 className="section-title">Our Technology Services</h2>
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

      {/* Expertise Section */}
      <section className="expertise-section">
        <div className="container">
          <h2 className="section-title">Our Expertise in Emerging Technologies</h2>
          <div className="expertise-grid">
            <div className="expertise-card">
              <div className="expertise-icon">🧠</div>
              <h3>AI & Machine Learning</h3>
              <p>Develop intelligent systems that learn, adapt, and automate complex tasks.</p>
            </div>
            <div className="expertise-card">
              <div className="expertise-icon">🔗</div>
              <h3>Blockchain Solutions</h3>
              <p>Build secure, transparent, and decentralized applications for various industries.</p>
            </div>
            <div className="expertise-card">
              <div className="expertise-icon">📡</div>
              <h3>Internet of Things (IoT)</h3>
              <p>Connect devices, collect data, and create smart environments.</p>
            </div>
            <div className="expertise-card">
              <div className="expertise-icon">☁️</div>
              <h3>Cloud Computing</h3>
              <p>Utilize scalable and flexible cloud platforms for enhanced performance.</p>
            </div>
            <div className="expertise-card">
              <div className="expertise-icon">📊</div>
              <h3>Big Data Analytics</h3>
              <p>Extract valuable insights from large datasets to drive informed decisions.</p>
            </div>
            <div className="expertise-card">
              <div className="expertise-icon">🥽</div>
              <h3>AR/VR Solutions</h3>
              <p>Create immersive and interactive experiences for training, marketing, and more.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="category-cta">
        <div className="container">
          <h2>Ready to Leverage Emerging Technologies?</h2>
          <p>Let's discuss how our technology services can transform your business operations.</p>
          <Link to="/contact" className="btn btn-primary">Get Started</Link>
        </div>
      </section>
    </div>
  );
};

export default Technology;

