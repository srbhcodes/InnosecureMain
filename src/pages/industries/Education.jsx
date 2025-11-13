import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/pages/industry-detail.css';
import education1 from '../../components/industries/images/education1.png';
import education2 from '../../components/industries/images/education2.png';
import education3 from '../../components/industries/images/education3.png';

const Education = () => {
  return (
    <div className="industry-detail">
      {/* Hero Section */}
      <section className="industry-hero">
        <div className="industry-hero__content">
          <h1 className="industry-hero__title">
            Revolutionizing Education with Digital Learning Platforms, Interactive Content, and Personalized Learning Experiences
          </h1>
        </div>
      </section>

      {/* First Section */}
      <section className="industry-section">
        <div className="industry-section__content">
          <div className="industry-section__text">
            <h2 className="industry-section__title">Digital Learning Platform</h2>
            <p className="industry-section__description">
              Creating comprehensive digital learning environments that combine interactive content, real-time collaboration tools, and personalized learning paths. Our platform enables educators to deliver engaging lessons and students to learn at their own pace with adaptive content and assessments.
            </p>
          </div>
          <div className="industry-section__image">
            <img src={education1} alt="Digital Learning Platform" />
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section className="industry-section alt">
        <div className="industry-section__content reverse">
          <div className="industry-section__text">
            <h2 className="industry-section__title">Virtual Classroom Solutions</h2>
            <p className="industry-section__description">
              Developing immersive virtual classroom experiences with real-time video conferencing, interactive whiteboards, and collaborative tools. Our solutions enable seamless remote learning while maintaining engagement and interaction between students and educators.
            </p>
          </div>
          <div className="industry-section__image">
            <img src={education2} alt="Virtual Classroom Solutions" />
          </div>
        </div>
      </section>

      {/* Third Section */}
      <section className="industry-section">
        <div className="industry-section__content">
          <div className="industry-section__text">
            <h2 className="industry-section__title">Learning Analytics</h2>
            <p className="industry-section__description">
              Implementing advanced analytics to track student progress, identify learning patterns, and provide personalized recommendations. Our analytics solutions help educators optimize teaching strategies and support student success through data-driven insights.
            </p>
          </div>
          <div className="industry-section__image">
            <img src={education3} alt="Learning Analytics" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="industry-cta">
        <div className="container">
          <h2>Ready to Transform Your Education Operations?</h2>
          <p>Let's discuss how our education solutions can drive innovation in your organization.</p>
          <Link to="/contact" className="btn btn-primary">Get Started</Link>
        </div>
      </section>
    </div>
  );
};

export default Education;

