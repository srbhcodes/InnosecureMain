import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { insights } from '../../data/insightsData';

const FeaturedInsightsSection = () => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -400,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 400,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="insights-section">
      <div className="container">
        <h2 className="section-title">Featured Insights</h2>
        <div className="insights-carousel-wrapper">
          <button 
            className="insights-nav-btn insights-nav-left" 
            onClick={scrollLeft}
            aria-label="Scroll left"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>
          <div className="insights-carousel" ref={scrollContainerRef}>
            {insights.map((insight) => (
              <Link 
                key={insight.id} 
                to={`/insights/${insight.id}`} 
                className="insight-card"
              >
                <div className="insight-image">{insight.icon}</div>
                <h3>{insight.title}</h3>
                <p>{insight.description}</p>
              </Link>
            ))}
          </div>
          <button 
            className="insights-nav-btn insights-nav-right" 
            onClick={scrollRight}
            aria-label="Scroll right"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedInsightsSection;


