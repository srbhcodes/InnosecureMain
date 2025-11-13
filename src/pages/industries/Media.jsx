import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/pages/industry-detail.css';
import media1 from '../../components/industries/images/media1.png';
import media2 from '../../components/industries/images/media2.png';
import media3 from '../../components/industries/images/media3.png';

const Media = () => {
  return (
    <div className="industry-detail">
      {/* Hero Section */}
      <section className="industry-hero">
        <div className="industry-hero__content">
          <h1 className="industry-hero__title">
            Transforming Media with Virtual Production, AI Content Creation, and Immersive Entertainment Experiences
          </h1>
        </div>
      </section>

      {/* First Section */}
      <section className="industry-section">
        <div className="industry-section__content">
          <div className="industry-section__text">
            <h2 className="industry-section__title">Virtual Production Technology</h2>
            <p className="industry-section__description">
              Implementing cutting-edge virtual production solutions that revolutionize content creation. Our technologies enable real-time rendering, virtual sets, and motion capture systems that transform how films, TV shows, and digital content are produced.
            </p>
          </div>
          <div className="industry-section__image">
            <img src={media1} alt="Virtual Production Technology" />
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section className="industry-section alt">
        <div className="industry-section__content reverse">
          <div className="industry-section__text">
            <h2 className="industry-section__title">AI Content Creation</h2>
            <p className="industry-section__description">
              Developing AI-powered tools for content generation and enhancement. Our solutions include automated video editing, AI-assisted script writing, and intelligent content personalization that streamline production workflows and enhance creative possibilities.
            </p>
          </div>
          <div className="industry-section__image">
            <img src={media2} alt="AI Content Creation" />
          </div>
        </div>
      </section>

      {/* Third Section */}
      <section className="industry-section">
        <div className="industry-section__content">
          <div className="industry-section__text">
            <h2 className="industry-section__title">Immersive Entertainment</h2>
            <p className="industry-section__description">
              Creating next-generation entertainment experiences through augmented and virtual reality. Our solutions deliver interactive storytelling, 360-degree video experiences, and immersive gaming environments that engage audiences in new and exciting ways.
            </p>
          </div>
          <div className="industry-section__image">
            <img src={media3} alt="Immersive Entertainment" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="industry-cta">
        <div className="container">
          <h2>Ready to Transform Your Media Operations?</h2>
          <p>Let's discuss how our media solutions can drive innovation in your organization.</p>
          <Link to="/contact" className="btn btn-primary">Get Started</Link>
        </div>
      </section>
    </div>
  );
};

export default Media;

