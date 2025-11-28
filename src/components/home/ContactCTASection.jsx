import React, { memo } from 'react';
import { Link } from 'react-router-dom';

const ContactCTASection = memo(() => {
  return (
    <section className="contact-cta">
      <div className="container">
        <div className="contact-cta__content">
          <h2>Get in Touch With Us</h2>
          <p>Transformation never plays solo. Team up with a full-stack technology partner.</p>
          <Link to="/contact" className="btn btn-primary">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
});

ContactCTASection.displayName = 'ContactCTASection';

export default ContactCTASection;

