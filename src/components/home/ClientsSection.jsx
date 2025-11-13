import React, { useRef, useEffect } from 'react';
import { clients } from '../../data/homeData';

const ClientsSection = () => {
  const topRowRef = useRef(null);
  const bottomRowRef = useRef(null);

  // Split clients into two groups
  const midPoint = Math.ceil(clients.length / 2);
  const topClients = clients.slice(0, midPoint);
  const bottomClients = clients.slice(midPoint);

  // Auto-scroll function - continuous, never stops
  const useAutoScroll = (containerRef, direction = 'left') => {
    useEffect(() => {
      const container = containerRef.current;
      if (!container) return;

      let animationId = null;
      let scrollPosition = 0;
      const scrollSpeed = 1; // pixels per frame
      
      // Prevent user-initiated scroll interference (wheel, touch)
      const preventUserScroll = (e) => {
        e.preventDefault();
        e.stopPropagation();
        return false;
      };

      // Block user scroll events - only prevent wheel and touch, not programmatic scrolls
      container.addEventListener('wheel', preventUserScroll, { passive: false });
      container.addEventListener('touchmove', preventUserScroll, { passive: false });
      
      const scroll = () => {
        if (!container) {
          if (animationId) {
            cancelAnimationFrame(animationId);
          }
          return;
        }

        // Continuous scrolling - never stops, always updates
        const maxScroll = container.scrollWidth / 2;
        
        if (direction === 'left') {
          scrollPosition += scrollSpeed;
          if (scrollPosition >= maxScroll) {
            scrollPosition = 0;
            container.scrollLeft = 0;
          } else {
            container.scrollLeft = scrollPosition;
          }
        } else {
          // Right direction - scroll backwards
          scrollPosition -= scrollSpeed;
          if (scrollPosition <= -maxScroll) {
            scrollPosition = 0;
            container.scrollLeft = maxScroll;
          } else {
            container.scrollLeft = maxScroll + scrollPosition;
          }
        }
        
        // Always continue the animation loop
        animationId = requestAnimationFrame(scroll);
      };

      // Wait for container to be ready
      const startAnimation = () => {
        // Check if content is wider than container
        if (container.scrollWidth > container.clientWidth) {
          const maxScroll = container.scrollWidth / 2;
          if (direction === 'right') {
            // Start from middle for right direction
            container.scrollLeft = maxScroll;
            scrollPosition = 0;
          } else {
            container.scrollLeft = 0;
            scrollPosition = 0;
          }
          // Start the animation loop - it will never stop
          animationId = requestAnimationFrame(scroll);
        } else {
          // Retry if container isn't ready yet
          setTimeout(startAnimation, 200);
        }
      };

      // Start after a delay to ensure DOM is ready
      const timeoutId = setTimeout(startAnimation, 500);

      return () => {
        clearTimeout(timeoutId);
        if (animationId) {
          cancelAnimationFrame(animationId);
        }
        // Clean up event listeners
        container.removeEventListener('wheel', preventUserScroll);
        container.removeEventListener('touchmove', preventUserScroll);
      };
    }, [direction]);
  };

  useAutoScroll(topRowRef, 'left');
  useAutoScroll(bottomRowRef, 'right');

  return (
    <section className="clients-section">
      <div className="container">
        <h2 className="section-title">Our Clients</h2>
        <p className="section-subtitle">
          Trusted by leading organizations worldwide
        </p>
        <div className="clients-carousel-wrapper">
          {/* Top Row - Moving Left */}
          <div className="clients-carousel clients-carousel-top" ref={topRowRef}>
            {[...topClients, ...topClients].map((client, index) => (
              <div key={`top-${client.alt}-${index}`} className="client-logo">
                <img src={client.image} alt={client.alt} />
              </div>
            ))}
          </div>

          {/* Bottom Row - Moving Right */}
          <div className="clients-carousel clients-carousel-bottom" ref={bottomRowRef}>
            {[...bottomClients, ...bottomClients].map((client, index) => (
              <div key={`bottom-${client.alt}-${index}`} className="client-logo">
                <img src={client.image} alt={client.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;




