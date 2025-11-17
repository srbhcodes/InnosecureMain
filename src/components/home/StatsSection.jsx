import React, { useState, useEffect, useRef } from 'react';
import { statsSectionData } from '../../data/homeData';

const StatsSection = () => {
  const [counters, setCounters] = useState(statsSectionData.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);
  const timersRef = useRef([]);

  useEffect(() => {
    const animateCounters = () => {
      // Clear any existing timers
      timersRef.current.forEach((timer) => clearInterval(timer));
      timersRef.current = [];

      statsSectionData.forEach((stat, index) => {
        const target = parseInt(stat.number.replace(/[^0-9]/g, ''), 10);
        if (isNaN(target)) return;

        const duration = 2000; // 2 seconds
        const steps = 60;
        const increment = target / steps;
        const stepDuration = duration / steps;

        let current = 0;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
            // Remove from timers array
            timersRef.current = timersRef.current.filter((t) => t !== timer);
          }
          setCounters((prev) => {
            const newCounters = [...prev];
            newCounters[index] = Math.floor(current);
            return newCounters;
          });
        }, stepDuration);
        
        timersRef.current.push(timer);
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounters();
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
      
      // Check if section is already visible (fallback for fast scroll or initial load)
      const checkVisibility = () => {
        if (sectionRef.current && !hasAnimated) {
          const rect = sectionRef.current.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
          if (isVisible) {
            setHasAnimated(true);
            animateCounters();
          }
        }
      };
      
      // Check immediately and also after a short delay
      checkVisibility();
      const visibilityTimeout = setTimeout(checkVisibility, 300);
      
      return () => {
        clearTimeout(visibilityTimeout);
        if (sectionRef.current) {
          observer.unobserve(sectionRef.current);
        }
        // Cleanup timers
        timersRef.current.forEach((timer) => clearInterval(timer));
        timersRef.current = [];
      };
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      // Cleanup timers
      timersRef.current.forEach((timer) => clearInterval(timer));
      timersRef.current = [];
    };
  }, [hasAnimated]);

  const renderDigitalNumber = (number) => {
    const numberStr = number.toString();
    return (
      <div className="digital-display">
        {numberStr.split('').map((digit, idx) => (
          <span key={idx} className="digital-digit">
            {digit}
          </span>
        ))}
      </div>
    );
  };

  return (
    <section className="stats-section" ref={sectionRef}>
      <div className="container">
        <h2 className="stats-section__title">IT'S OUR PEOPLE WHO MAKES THE DIFFERENCE</h2>
        <div className="stats-grid">
          {statsSectionData.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-card__number-wrapper">
                {renderDigitalNumber(counters[index])}
              </div>
              <span className="stat-card__label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

