import React, { useState, useEffect, useRef } from 'react';
import '../styles/pages/about.css';

const About = () => {
  const [clientCount, setClientCount] = useState(0);
  const [projectCount, setProjectCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef(null);
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

  const [hoveredCountry, setHoveredCountry] = useState(null);

  // Count-up animation for stats
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            
            // Animate client count to 250
            const clientDuration = 2000;
            const clientSteps = 60;
            const clientIncrement = 250 / clientSteps;
            const clientStepDuration = clientDuration / clientSteps;
            let clientCurrent = 0;
            const clientTimer = setInterval(() => {
              clientCurrent += clientIncrement;
              if (clientCurrent >= 250) {
                clientCurrent = 250;
                clearInterval(clientTimer);
              }
              setClientCount(Math.floor(clientCurrent));
            }, clientStepDuration);

            // Animate project count to 1000
            const projectDuration = 2000;
            const projectSteps = 60;
            const projectIncrement = 1000 / projectSteps;
            const projectStepDuration = projectDuration / projectSteps;
            let projectCurrent = 0;
            const projectTimer = setInterval(() => {
              projectCurrent += projectIncrement;
              if (projectCurrent >= 1000) {
                projectCurrent = 1000;
                clearInterval(projectTimer);
              }
              setProjectCount(Math.floor(projectCurrent));
            }, projectStepDuration);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [hasAnimated]);

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

  const getCountryColor = (country) => {
    const colorMap = {
      'UK': 'linear-gradient(135deg, rgba(0, 20, 60, 0.2) 0%, rgba(0, 35, 102, 0.15) 100%)', // Dark blue gradient
      'USA': 'linear-gradient(135deg, rgba(173, 216, 230, 0.25) 0%, rgba(135, 206, 250, 0.2) 100%)', // Light blue gradient
      'India': 'linear-gradient(135deg, rgba(255, 140, 0, 0.25) 0%, rgba(255, 165, 0, 0.2) 100%)', // Orange gradient
      'UAE': 'linear-gradient(135deg, rgba(0, 100, 200, 0.25) 0%, rgba(0, 150, 255, 0.2) 100%)', // Blue gradient
      'Singapore': 'linear-gradient(135deg, rgba(138, 43, 226, 0.25) 0%, rgba(186, 85, 211, 0.2) 100%)', // Purple gradient
      'Canada': 'linear-gradient(135deg, rgba(0, 20, 60, 0.2) 0%, rgba(0, 35, 102, 0.15) 100%)' // Dark blue gradient
    };
    return colorMap[country] || 'rgba(124, 58, 237, 0.15)';
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
      <div className="page-header">
        <div className="container about-header-container">
          <h1 className="page-title">About Us</h1>
          <p className="page-subtitle">
            We Are Your Technology Partner
          </p>
          <div className="about-hero__stats" ref={statsRef}>
            <div className="hero-stat">
              <div className="hero-stat__icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <span className="hero-stat__number">{clientCount}+</span>
              <span className="hero-stat__label">Clients (global)</span>
            </div>
            <div className="hero-stat">
              <div className="hero-stat__icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                  <polyline points="2 17 12 22 22 17"></polyline>
                  <polyline points="2 12 12 17 22 12"></polyline>
                </svg>
              </div>
              <span className="hero-stat__number">{projectCount}+</span>
              <span className="hero-stat__label">Successful Projects (8 yrs)</span>
            </div>
          </div>
          <div className="about-hero__cta">
            <a href="/contact" className="btn-cta">See case studies</a>
          </div>
        </div>
      </div>

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
      <section 
        className="about-section global-presence-section"
        style={{
          '--hover-gradient': hoveredCountry ? getCountryColor(hoveredCountry) : 'transparent'
        }}
      >
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
                onMouseEnter={() => setHoveredCountry(location.country)}
                onMouseLeave={() => setHoveredCountry(null)}
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
