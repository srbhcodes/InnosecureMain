import React, { useEffect, useRef, useState } from 'react';
import { heroStats, typingWords } from '../../data/homeData';

const HeroSection = () => {
  const dotsContainerRef = useRef(null);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const container = dotsContainerRef.current;
    if (!container) return;

    const numDots = 30; // Number of dots
    const dots = [];

    // Create dots
    for (let i = 0; i < numDots; i++) {
      const dot = document.createElement('div');
      dot.className = 'hero__dot';
      
      // Random initial position
      const size = Math.random() * 6 + 3; // Size between 3-9px
      const x = Math.random() * 100; // Percentage
      const y = Math.random() * 100; // Percentage
      
      dot.style.width = `${size}px`;
      dot.style.height = `${size}px`;
      dot.style.opacity = Math.random() * 0.5 + 0.3; // Opacity between 0.3-0.8
      
      // Random velocity (pixel-based for smoother animation) - Much faster speed
      const vx = (Math.random() - 0.5) * 3.0; // Speed between -1.5 to 1.5 pixels per frame
      const vy = (Math.random() - 0.5) * 3.0;
      
      dot.dataset.vx = vx;
      dot.dataset.vy = vy;
      
      container.appendChild(dot);
      dots.push({ element: dot, x, y, vx, vy, size });
    }

    // Get container dimensions for pixel-based positioning
    const getContainerDimensions = () => {
      return {
        width: container.offsetWidth,
        height: container.offsetHeight
      };
    };

    // Convert percentage to pixels for initial positions
    const dims = getContainerDimensions();
    dots.forEach((dot) => {
      dot.x = (dot.x / 100) * dims.width;
      dot.y = (dot.y / 100) * dims.height;
    });

    // Animation loop
    let animationId;
    const animate = () => {
      const dims = getContainerDimensions();
      
      dots.forEach((dot) => {
        // Update position
        dot.x += dot.vx;
        dot.y += dot.vy;

        // Bounce off edges
        if (dot.x <= 0 || dot.x >= dims.width) {
          dot.vx = -dot.vx;
          dot.x = Math.max(0, Math.min(dims.width, dot.x));
        }
        if (dot.y <= 0 || dot.y >= dims.height) {
          dot.vy = -dot.vy;
          dot.y = Math.max(0, Math.min(dims.height, dot.y));
        }

        // Apply position using transform for better performance
        dot.element.style.transform = `translate(${dot.x}px, ${dot.y}px) translate(-50%, -50%)`;

        // Occasionally add random direction change for more organic movement
        if (Math.random() < 0.01) {
          dot.vx += (Math.random() - 0.5) * 0.4;
          dot.vy += (Math.random() - 0.5) * 0.4;
          
          // Limit speed - Much faster max speed
          dot.vx = Math.max(-3.0, Math.min(3.0, dot.vx));
          dot.vy = Math.max(-3.0, Math.min(3.0, dot.vy));
        }
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      dots.forEach((dot) => {
        if (dot.element.parentNode) {
          dot.element.parentNode.removeChild(dot.element);
        }
      });
    };
  }, []);

  // Typing animation effect
  useEffect(() => {
    const currentWord = typingWords[currentWordIndex];
    const typeSpeed = isDeleting ? 50 : 100; // Faster when deleting, slower when typing
    
    const timeout = setTimeout(() => {
      if (!isDeleting && displayText === currentWord) {
        // Finished typing, wait then start deleting
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === '') {
        // Finished deleting, move to next word
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % typingWords.length);
      } else if (isDeleting) {
        // Deleting
        setDisplayText((prev) => prev.slice(0, -1));
      } else {
        // Typing
        setDisplayText((prev) => currentWord.slice(0, prev.length + 1));
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentWordIndex]);

  return (
    <section className="hero">
      <div className="hero__dots" ref={dotsContainerRef} />
      <div className="hero__grid-overlay hero__grid-overlay--title" />
      <div className="hero__container">
        <h1 className="hero__title">
          Global business consulting <span className="gradient-text italic">for a dynamic world!</span>
        </h1>
        <p className="hero__typing-text">
          We <span className="typing-word">{displayText || '\u00A0'}</span> project success
        </p>

        <div className="hero__stats">
          {heroStats.map((stat, index) => (
            <div key={index} className="stat">
              <span className="stat__number">{stat.number}</span>
              <span className="stat__label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
