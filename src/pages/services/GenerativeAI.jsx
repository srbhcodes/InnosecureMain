import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/pages/service-detail.css';

const GenerativeAI = () => {
  return (
    <div className="service-detail">
      {/* Hero Section */}
      <section className="service-hero">
        <div className="container">
          <div className="service-hero__content">
            <h1 className="service-hero__title">Generative AI</h1>
            <p className="service-hero__subtitle">
              Secure implementation of AI models with protection against data poisoning and prompt injection attacks.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="service-overview">
        <div className="container">
          <div className="service-overview__content">
            <div className="service-overview__text">
              <h2>AI & Machine Learning Solutions</h2>
              <p>
                We empower businesses to embrace the future with cutting-edge AI technologies and strategic consulting. 
                Our comprehensive AI services are designed to automate operations, drive digital transformation, and 
                enhance your return on investment (ROI).
              </p>
              <p>
                Develop intelligent systems that learn, adapt, and automate complex tasks. Our Generative AI solutions 
                help you leverage the power of advanced machine learning models while ensuring robust security measures 
                are in place to protect against emerging threats.
              </p>
            </div>
            <div className="service-overview__image">
              <div className="service-icon-large">🤖</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="service-features">
        <div className="container">
          <h2 className="section-title">Our Generative AI Services</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">✨</div>
              <h3>Generative AI</h3>
              <p>Create intelligent content generation systems powered by advanced language models and neural networks.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💬</div>
              <h3>Chatbot and AI Assistant</h3>
              <p>Build conversational AI solutions that provide intelligent customer support and automate interactions.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>AI/ML Strategy Consulting</h3>
              <p>Strategic guidance on implementing AI solutions that align with your business objectives and goals.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔌</div>
              <h3>AI Integration and Deployment</h3>
              <p>Seamlessly integrate AI capabilities into your existing systems with secure deployment practices.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>AI Security</h3>
              <p>Protect your AI systems against data poisoning, prompt injection attacks, and other security vulnerabilities.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h3>AI Design</h3>
              <p>Design user-friendly AI interfaces and experiences that enhance user engagement and satisfaction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="service-benefits">
        <div className="container">
          <h2 className="section-title">How We Help You With AI</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-icon">💡</div>
              <h3>Strategy & Consulting</h3>
              <p>Identify opportunities and create a roadmap for adopting relevant AI technologies that drive business value.</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">⚙️</div>
              <h3>Custom Development</h3>
              <p>Design, build, and deploy tailored AI solutions using the latest machine learning frameworks and tools.</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">🛡️</div>
              <h3>Security & Compliance</h3>
              <p>Implement robust security measures to protect AI models from adversarial attacks and ensure data privacy.</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">🔧</div>
              <h3>Support & Maintenance</h3>
              <p>Provide ongoing support to ensure optimal performance, scalability, and continuous improvement of AI systems.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="service-cta">
        <div className="container">
          <h2>Ready to Transform Your Business with AI?</h2>
          <p>Let's discuss how Generative AI can drive innovation and growth for your organization.</p>
          <Link to="/contact" className="btn btn-primary">Get Started</Link>
        </div>
      </section>
    </div>
  );
};

export default GenerativeAI;

