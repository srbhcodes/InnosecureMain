import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/pages/industries.css';

const Industries = () => {
  const industries = [
    {
      icon: '✈️',
      title: 'Aerospace and Defense',
      description: 'Supporting the world\'s leading private and public sector aerospace organizations with cutting-edge security solutions.',
      link: '/industries/aerospace'
    },
    {
      icon: '🚗',
      title: 'Automotive',
      description: 'Our mission is to design and co-create secure products for the next generation of connected vehicles.',
      link: '/industries/automotive'
    },
    {
      icon: '🏦',
      title: 'Banking',
      description: 'Assisting you in meeting compliance requirements and business goals with robust security infrastructure.',
      link: '/industries/banking'
    },
    {
      icon: '🎓',
      title: 'Education',
      description: 'Maximizing the security of learning solutions and protecting sensitive student data.',
      link: '/industries/education'
    },
    {
      icon: '❤️',
      title: 'Healthcare',
      description: 'Using technology, we are redefining patient care with security at the forefront.',
      link: '/industries/healthcare'
    },
    {
      icon: '💻',
      title: 'High Tech',
      description: 'Creating enterprise solutions that enable unrivalled speed and agility without compromising security.',
      link: '/industries/high-tech'
    },
    {
      icon: '🏨',
      title: 'Hospitality',
      description: 'Creating cloud-based efficiency for hospitality assets with strong security protocols.',
      link: '/industries/hospitality'
    },
    {
      icon: '🛡️',
      title: 'Insurance',
      description: 'Utilizing next-generation analytics and security measures to enhance risk assessment.',
      link: '/industries/insurance'
    },
    {
      icon: '🎥',
      title: 'Media & Entertainment',
      description: 'Increasing your engagement while ensuring content protection and secure delivery.',
      link: '/industries/media'
    },
    {
      icon: '🛍️',
      title: 'Retail',
      description: 'Providing personalized outcomes with enterprise-grade security for customer data.',
      link: '/industries/retail'
    },
    {
      icon: '✈️',
      title: 'Tour & Travel',
      description: 'Engaging your guests with personalized recommendations while maintaining privacy and security.',
      link: '/industries/tour-travel'
    },
    {
      icon: '🚚',
      title: 'Logistics',
      description: 'Optimizing supply chains with secure tracking and monitoring systems.',
      link: '/industries/logistics'
    }
  ];

  return (
    <div className="industries">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Our Industry Solutions</h1>
          <p className="page-subtitle">
            Tailored expertise across multiple sectors
          </p>
        </div>
      </div>

      <section className="industries-section">
        <div className="container">
          <div className="industries-grid">
            {industries.map((industry, index) => (
              <Link to={industry.link} key={index} className="industry-card">
                <div className="industry-icon">{industry.icon}</div>
                <h3>{industry.title}</h3>
                <p>{industry.description}</p>
                <span className="industry-link">Learn More →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;

