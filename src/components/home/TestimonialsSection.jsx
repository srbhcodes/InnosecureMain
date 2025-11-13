import React from 'react';
import { testimonials } from '../../data/homeData';

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section">
      <div className="container">
        <h2 className="section-title">CLIENT TESTIMONIALS</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <strong>– {testimonial.author}</strong>, {testimonial.role}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

