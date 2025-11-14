import React, { useState, useEffect, useRef } from 'react';
import { statsSectionData } from '../../data/homeData';

const StatsSection = () => {
  const [counters, setCounters] = useState(statsSectionData.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const timers = [];

    const animateCounters = () => {
      statsSectionData.forEach((stat, index) => {
        const target = parseInt(stat.number);
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
          }
          setCounters((prev) => {
            const newCounters = [...prev];
            newCounters[index] = Math.floor(current);
            return newCounters;
          });
        }, stepDuration);
        
        timers.push(timer);
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
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      // Cleanup timers
      timers.forEach((timer) => clearInterval(timer));
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

