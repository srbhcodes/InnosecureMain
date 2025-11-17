import React from 'react';
import '../../styles/pages/industry-detail.css';

const IndustrySection = ({ title, description, image, imageAlt, reverse = false, alt = false, placeholder }) => {
  return (
    <section className={`industry-section ${alt ? 'alt' : ''}`}>
      <div className={`industry-section__content ${reverse ? 'reverse' : ''}`}>
        <div className="industry-section__text">
          <h2 className="industry-section__title">{title}</h2>
          <p className="industry-section__description">{description}</p>
        </div>
        <div className="industry-section__image">
          {image ? (
            <img src={image} alt={imageAlt || title} />
          ) : placeholder ? (
            <div className="industry-section__image-placeholder">{placeholder}</div>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default IndustrySection;

