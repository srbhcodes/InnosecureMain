import React, { useState, useEffect, useRef } from 'react';
import { statsSectionData } from '../../data/homeData';

const StatsSection = () => {
  const [counters, setCounters] = useState(statsSectionData.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);
  const timersRef = useRef([]);

  useEffect(() => {
    const animateCounters = () => {
      // Don't animate if already animating or completed
      if (hasAnimated) return;
      
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
      
      setHasAnimated(true);
    };

    // Improved visibility check that works for both scroll directions
    const checkVisibility = () => {
      if (!sectionRef.current) return false;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      
      // Check if section is in viewport - works for both scroll directions
      // Section is visible if any part of it is in the viewport
      const isVisible = rect.top < windowHeight && rect.bottom > 0;
      
      // More specific: section should be at least partially in viewport
      // and not completely above or below
      const isInViewport = rect.top < windowHeight * 0.9 && rect.bottom > windowHeight * 0.1;
      
      if (isInViewport && !hasAnimated) {
        animateCounters();
        return true;
      }
      return false;
    };

    // IntersectionObserver with better configuration for both directions
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            // Small delay to ensure smooth animation start
            setTimeout(() => {
              if (!hasAnimated) {
                animateCounters();
              }
            }, 50);
          }
        });
      },
      {
        threshold: [0, 0.1, 0.2], // Multiple thresholds for better detection
        rootMargin: '50px 0px 50px 0px', // Trigger earlier for both directions
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
      
      // Initial check - important for when page loads with section visible
      const initialCheck = () => {
        if (!hasAnimated) {
          checkVisibility();
        }
      };
      
      initialCheck();
      
      // Multiple delayed checks to catch different scroll scenarios
      const timeout1 = setTimeout(initialCheck, 100);
      const timeout2 = setTimeout(initialCheck, 300);
      const timeout3 = setTimeout(initialCheck, 600);
      const timeout4 = setTimeout(initialCheck, 1000);
      
      // Scroll event listener - works for both directions
      let scrollTimeout;
      const throttledScroll = () => {
        if (scrollTimeout) return;
        scrollTimeout = setTimeout(() => {
          if (!hasAnimated) {
            checkVisibility();
          }
          scrollTimeout = null;
        }, 150);
      };
      
      // Use both scroll and touchmove for better mobile support
      window.addEventListener('scroll', throttledScroll, { passive: true });
      window.addEventListener('touchmove', throttledScroll, { passive: true });
      window.addEventListener('wheel', throttledScroll, { passive: true });
      
      return () => {
        clearTimeout(timeout1);
        clearTimeout(timeout2);
        clearTimeout(timeout3);
        clearTimeout(timeout4);
        clearTimeout(scrollTimeout);
        window.removeEventListener('scroll', throttledScroll);
        window.removeEventListener('touchmove', throttledScroll);
        window.removeEventListener('wheel', throttledScroll);
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

