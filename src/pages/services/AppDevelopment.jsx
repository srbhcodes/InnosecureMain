import React from 'react';
import '../../styles/pages/service-detail.css';

const AppDevelopment = () => {
  return (
    <div className="service-detail">
      {/* Hero Section */}
      <section className="service-hero">
        <div className="container">
          <div className="service-hero__content">
            <h1 className="service-hero__title">App Development</h1>
            <p className="service-hero__subtitle">
              Developing secure applications with built-in protection against the latest threats and vulnerabilities.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="service-overview">
        <div className="container">
          <div className="service-overview__content">
            <div className="service-overview__text">
              <h2>Web & Mobile Development</h2>
              <p>
                Create powerful, scalable, and user-friendly web and mobile applications that drive business growth. 
                Our development team combines technical expertise with creative design to deliver exceptional digital experiences.
              </p>
              <p>
                We constantly work to provide our clients with top-notch app development services. We provide the most 
                cutting-edge and scalable enterprise-grade solutions available, from full-stack development to consulting. 
                Our applications are built with security as a core principle, protecting against the latest threats and vulnerabilities.
              </p>
            </div>
            <div className="service-overview__image">
              <div className="service-icon-large">📱</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="service-features">
        <div className="container">
          <h2 className="section-title">Our Development Solutions</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Mobile App Development</h3>
              <p>Native and cross-platform mobile applications for iOS and Android with modern frameworks and best practices.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌐</div>
              <h3>Web Design & Development</h3>
              <p>Responsive web applications using next-generation technologies to develop breakthroughs that help businesses stand out.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h3>UI & UX Design</h3>
              <p>User-friendly and growth-oriented UI/UX designs that analyze industry trends and incorporate cutting-edge user interfaces.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🛒</div>
              <h3>E-commerce Solutions</h3>
              <p>Scalable and engaging e-commerce experiences to empower customer retention and digital business growth.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🏢</div>
              <h3>Enterprise Solutions</h3>
              <p>Robust and tailored software systems that focus on outcomes and return on investment for enterprise clients.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">✅</div>
              <h3>QA & Testing</h3>
              <p>Rigorous testing ensures reliable and high-performance software with guidance on best quality assurance procedures.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="service-benefits">
        <div className="container">
          <h2 className="section-title">How We Transform Your Ideas into Reality</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-icon">⚙️</div>
              <h3>Automation</h3>
              <p>Implement new software to automate tasks and improve operational efficiency.</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">🚀</div>
              <h3>Latest Technologies</h3>
              <p>Work with cutting-edge technologies and frameworks to deliver innovative solutions.</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">💡</div>
              <h3>Strategic Solutions</h3>
              <p>Unique strategies to improve your bottom line and drive business growth.</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">🔒</div>
              <h3>Security First</h3>
              <p>Built-in protection against the latest threats and vulnerabilities from day one.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="service-cta">
        <div className="container">
          <h2>Ready to Build Your Next Application?</h2>
          <p>Let's discuss how we can develop secure, scalable applications that drive your business forward.</p>
          <a href="/contact" className="btn btn-primary">Get Started</a>
        </div>
      </section>
    </div>
  );
};

export default AppDevelopment;

