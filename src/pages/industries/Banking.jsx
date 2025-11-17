import React from 'react';
import '../../styles/pages/industry-detail.css';
import { IndustryHero, IndustrySection, IndustryCTA } from '../../components/industries';
import { getIndustryData } from '../../data/industryDetailData';

const Banking = () => {
  const data = getIndustryData('banking');

  if (!data) {
    return <div>Industry data not found</div>;
  }

  return (
    <div className="industry-detail">
      <IndustryHero title={data.hero.title} subtitle={data.hero.subtitle} />
      
      {data.sections.map((section, index) => (
        <IndustrySection
          key={index}
          title={section.title}
          description={section.description}
          image={section.image}
          imageAlt={section.imageAlt}
          reverse={section.reverse}
          alt={section.alt}
          placeholder={section.placeholder}
        />
      ))}
      
      <IndustryCTA
        title={data.cta.title}
        description={data.cta.description}
        buttonText={data.cta.buttonText}
        buttonLink={data.cta.buttonLink}
      />
    </div>
  );
};

export default Banking;

