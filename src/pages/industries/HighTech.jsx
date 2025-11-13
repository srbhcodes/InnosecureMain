import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/pages/industry-detail.css';

const HighTech = () => {
  return (
    <div className="industry-detail">
      {/* Hero Section */}
      <section className="industry-hero">
        <div className="industry-hero__content">
          <h1 className="industry-hero__title">
            Pioneering the Future with Quantum Computing, Advanced Robotics, and Next-Generation AI Systems
          </h1>
        </div>
      </section>

      {/* First Section */}
      <section className="industry-section">
        <div className="industry-section__content">
          <div className="industry-section__text">
            <h2 className="industry-section__title">Quantum Computing Solutions</h2>
            <p className="industry-section__description">
              Developing cutting-edge quantum computing systems that solve complex problems beyond classical computing capabilities. Our solutions enable breakthroughs in cryptography, optimization, and scientific research, opening new frontiers in computational power.
            </p>
          </div>
          <div className="industry-section__image">
            <img src="/img/high-tech.png" alt="Quantum Computing Solutions" />
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section className="industry-section alt">
        <div className="industry-section__content reverse">
          <div className="industry-section__text">
            <h2 className="industry-section__title">Advanced Robotics</h2>
            <p className="industry-section__description">
              Creating next-generation robotic systems with advanced AI and machine learning capabilities. Our solutions include autonomous robots, collaborative robotics, and intelligent automation systems that transform industries and enhance human capabilities.
            </p>
          </div>
          <div className="industry-section__image">
            <img src="/img/pic8.png" alt="Advanced Robotics" />
          </div>
        </div>
      </section>

      {/* Third Section */}
      <section className="industry-section">
        <div className="industry-section__content">
          <div className="industry-section__text">
            <h2 className="industry-section__title">Next-Generation AI Systems</h2>
            <p className="industry-section__description">
              Developing advanced AI systems that push the boundaries of machine intelligence. Our solutions include neural network architectures, deep learning frameworks, and cognitive computing systems that enable breakthroughs in natural language processing, computer vision, and predictive analytics.
            </p>
          </div>
          <div className="industry-section__image">
            <img src="/img/pic9.png" alt="Next-Generation AI Systems" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="industry-cta">
        <div className="container">
          <h2>Ready to Transform Your High Tech Operations?</h2>
          <p>Let's discuss how our high tech solutions can drive innovation in your organization.</p>
          <Link to="/contact" className="btn btn-primary">Get Started</Link>
        </div>
      </section>
    </div>
  );
};

export default HighTech;

