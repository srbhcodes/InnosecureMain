import React from 'react';
import '../../styles/pages/service-detail.css';
import { ServiceHero, ServiceOverview, ServiceFeatures, ServiceBenefits, ServiceCTA } from '../../components/services';
import { getServiceData } from '../../data/serviceDetailData';

const AppDevelopment = () => {
  const data = getServiceData('app-development');

  if (!data) {
    return <div>Service data not found</div>;
  }

  return (
    <div className="service-detail">
      <ServiceHero title={data.hero.title} subtitle={data.hero.subtitle} />
      <ServiceOverview
        title={data.overview.title}
        paragraphs={data.overview.paragraphs}
        icon={data.overview.icon}
      />
      <ServiceFeatures
        title={data.features.title}
        features={data.features.items}
      />
      <ServiceBenefits
        title={data.benefits.title}
        benefits={data.benefits.items}
      />
      <ServiceCTA
        title={data.cta.title}
        description={data.cta.description}
        buttonText={data.cta.buttonText}
        buttonLink={data.cta.buttonLink}
      />
    </div>
  );
};

export default AppDevelopment;
