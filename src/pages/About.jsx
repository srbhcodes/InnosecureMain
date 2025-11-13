import React from 'react';
import '../styles/pages/about.css';

const About = () => {
  const coreAdvantages = [
    {
      title: 'Reliable Delivery Schedules',
      description: 'Count on us for timely project completion. Our efficient workflows ensure your solutions are ready when you need them, minimizing delays and maximizing your strategic advantage.',
      icon: '⏱️'
    },
    {
      title: 'Expert & Agile Teams',
      description: 'Leverage our pool of seasoned professionals and tech enthusiasts. We bring deep domain knowledge and cutting-edge skills to tackle complex challenges and deliver innovative results.',
      icon: '👥'
    },
    {
      title: 'Continuous Client Support',
      description: 'Your operations are paramount. Our dedicated support channels are available around the clock to provide swift assistance and ensure uninterrupted performance.',
      icon: '🔧'
    },
    {
      title: 'Commitment to Quality',
      description: 'We deliver excellence. Our focus on high-quality, scalable IT solutions helps strengthen your operations and provides a solid foundation for future expansion.',
      icon: '⭐'
    }
  ];

  const coreValues = [
    'Customer Experience Focus',
    'Aspiration to Be a Leading Tech Consultancy',
    'Respect and Results Oriented',
    'Execution with Excellence'
  ];

  const getCountryImage = (country) => {
    const imageMap = {
      'UK': 'uk.jpg',
      'USA': 'us.jpg',
      'India': 'india.jpg',
      'UAE': 'uae.jpg',
      'Singapore': 'singapore.jpg',
      'Canada': 'canada.jpg'
    };
    return `/img/${imageMap[country] || 'us.jpg'}`;
  };

  const globalPresence = [
    { country: 'UK', city: 'London' },
    { country: 'USA', city: 'Wyoming' },
    { country: 'India', city: 'Indore' },
    { country: 'UAE', city: 'Dubai' },
    { country: 'Singapore', city: 'Singapore' },
    { country: 'Canada', city: 'Toronto' }
  ];

  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1 className="about-hero__title">ABOUT</h1>
          <h2 className="about-hero__subtitle">We Are Your Technology Partner</h2>
          <div className="about-hero__stats">
            <div className="hero-stat">
              <span className="hero-stat__label">2016 – Innovating Since</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat__number">250+</span>
              <span className="hero-stat__label">Clients</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat__number">1K+</span>
              <span className="hero-stat__label">Successful Projects</span>
            </div>
          </div>
          <p className="about-hero__tagline">Milestones and Beyond!</p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="about-section">
        <div className="container">
          <h2 className="section-title">WHO WE ARE</h2>
          <div className="about-content">
            <p>
              Founded with a vision for technological excellence in <strong>2007</strong>, <strong>InnoSecure</strong> stands as a dynamic, publicly traded digital engineering force.
            </p>
            <p>
              We specialize in crafting agile solutions and ensuring timely, impactful deployments that consistently enrich digital ecosystems with tangible value.
            </p>
            <p>
              Our strength lies in balancing large-scale project capabilities with the personalized dedication of a boutique agency. This ensures every client receives focused attention and builds lasting loyalty.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="about-section bg-light">
        <div className="container">
          <h2 className="section-title">WHAT WE DO</h2>
          <p className="section-intro">
            We translate complex business needs into powerful digital realities. Our services encompass:
          </p>
          <ul className="services-list">
            <li>Custom Software Development</li>
            <li>Cloud & DevOps Engineering</li>
            <li>Data Analytics & AI</li>
            <li>Mobile Application Development</li>
            <li>Blockchain Solutions</li>
          </ul>
        </div>
      </section>

      {/* Core Advantages */}
      <section className="about-section">
        <div className="container">
          <h2 className="section-title">Our Core Advantages</h2>
          <p className="section-intro">
            We blend expertise with dedication to provide solutions that truly empower your business growth and operational efficiency.
          </p>
          <div className="advantages-grid">
            {coreAdvantages.map((advantage, index) => (
              <div key={index} className="advantage-card">
                <div className="advantage-icon">{advantage.icon}</div>
                <h3>{advantage.title}</h3>
                <p>{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="about-section bg-light">
        <div className="container">
          <h2 className="section-title">Our Core Values</h2>
          <div className="values-list">
            {coreValues.map((value, index) => (
              <div key={index} className="value-item">
                <div className="value-icon">✓</div>
                <span>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="about-section">
        <div className="container">
          <h2 className="section-title">Our Global Presence</h2>
          <div className="global-presence-grid">
            {globalPresence.map((location, index) => (
              <div 
                key={index} 
                className="presence-card"
                style={{
                  '--country-image': `url(${getCountryImage(location.country)})`
                }}
              >
                <h3>{location.country}</h3>
                <p>{location.city}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
