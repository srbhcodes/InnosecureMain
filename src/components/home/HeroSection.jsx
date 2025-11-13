import React, { useState, useEffect, useRef } from 'react';
import { typingWords, heroStats } from '../../data/homeData';

const HeroSection = () => {
  const [typingWord, setTypingWord] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [dots, setDots] = useState([]);
  const heroRef = useRef(null);
  const mousePosRef = useRef({ x: -1000, y: -1000, active: false });

  // Initialize dots
  useEffect(() => {
    const dotCount = 50;
    const newDots = Array.from({ length: dotCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      speed: Math.random() * 0.5 + 0.3,
      direction: Math.random() * Math.PI * 2,
      baseSpeed: Math.random() * 0.5 + 0.3, // Store original speed
    }));
    setDots(newDots);
  }, []);

  // Combined animation loop - handles both continuous movement and mouse interaction
  useEffect(() => {
    if (dots.length === 0) return;

    let animationFrameId;
    let lastTime = performance.now();
    let smoothMousePos = { x: -1000, y: -1000 };

    const animate = (currentTime) => {
      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;
      
      // Normalize to ~60fps (16.67ms per frame)
      const normalizedDelta = Math.min(deltaTime / 16.67, 2);

      // Smooth mouse position interpolation
      smoothMousePos.x += (mousePosRef.current.x - smoothMousePos.x) * 0.1;
      smoothMousePos.y += (mousePosRef.current.y - smoothMousePos.y) * 0.1;

      setDots((prevDots) =>
        prevDots.map((dot) => {
          // Get base values
          const baseSpeed = dot.baseSpeed || 0.3;
          let currentSpeed = dot.speed || baseSpeed;
          let currentDirection = dot.direction;

          // Handle mouse interaction (direction and speed changes)
          const dx = dot.x - smoothMousePos.x;
          const dy = dot.y - smoothMousePos.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const influenceRadius = 30; // Slightly larger radius
          
          if (distance < influenceRadius && distance > 1 && mousePosRef.current.active) {
            // Mouse is near - push dots away
            const force = Math.min((influenceRadius - distance) / influenceRadius, 1);
            const angle = Math.atan2(dy, dx); // Angle away from mouse
            
            // Smooth direction change towards away from mouse
            const directionDiff = angle - currentDirection;
            let normalizedDiff = ((directionDiff % (Math.PI * 2)) + Math.PI * 3) % (Math.PI * 2) - Math.PI;
            
            // Apply smooth direction change (less aggressive)
            currentDirection = currentDirection + normalizedDiff * 0.1;
            
            // Increase speed when near mouse (push away effect)
            currentSpeed = Math.min(baseSpeed + force * 0.3, 1.2);
          } else {
            // No mouse influence - gradually return to base behavior
            currentSpeed = currentSpeed * 0.95 + baseSpeed * 0.05;
            
            // Add slight random direction drift for natural movement
            if (Math.random() < 0.02) {
              currentDirection += (Math.random() - 0.5) * 0.1;
            }
          }

          // Ensure minimum speed for continuous movement
          const effectiveSpeed = Math.max(currentSpeed, baseSpeed * 0.8);
          const moveDistance = effectiveSpeed * normalizedDelta * 0.6;
          
          // Calculate new position
          let newX = dot.x + Math.cos(currentDirection) * moveDistance;
          let newY = dot.y + Math.sin(currentDirection) * moveDistance;

          // Wrap around edges
          if (newX < 0) newX = 100;
          if (newX > 100) newX = 0;
          if (newY < 0) newY = 100;
          if (newY > 100) newY = 0;

          return { 
            ...dot, 
            x: newX, 
            y: newY, 
            direction: currentDirection, 
            speed: currentSpeed 
          };
        })
      );

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [dots.length]);

  // Handle mouse movement - only updates ref, doesn't call setDots
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        mousePosRef.current.x = ((e.clientX - rect.left) / rect.width) * 100;
        mousePosRef.current.y = ((e.clientY - rect.top) / rect.height) * 100;
        mousePosRef.current.active = true;
      }
    };

    const handleMouseLeave = () => {
      mousePosRef.current.active = false;
      mousePosRef.current.x = -1000;
      mousePosRef.current.y = -1000;
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
      heroElement.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (heroElement) {
        heroElement.removeEventListener('mousemove', handleMouseMove);
        heroElement.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  useEffect(() => {
    const currentWord = typingWords[currentIndex];
    let timeout;

    if (!isDeleting && typingWord === currentWord) {
      // Word is complete, wait then start deleting
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting && typingWord === '') {
      // Word is deleted, move to next word
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % typingWords.length);
    } else if (isDeleting) {
      // Deleting characters
      timeout = setTimeout(() => {
        setTypingWord((prev) => prev.slice(0, -1));
      }, 50);
    } else {
      // Typing characters
      timeout = setTimeout(() => {
        setTypingWord((prev) => currentWord.slice(0, prev.length + 1));
      }, 100);
    }

    return () => clearTimeout(timeout);
  }, [typingWord, currentIndex, isDeleting]);

  return (
    <section className="hero" ref={heroRef}>
      {/* Animated dots */}
      <div className="hero__dots">
        {dots.map((dot) => (
          <div
            key={dot.id}
            className="hero__dot"
            style={{
              left: `${dot.x}%`,
              top: `${dot.y}%`,
              width: `${dot.size}px`,
              height: `${dot.size}px`,
            }}
          />
        ))}
      </div>
      <div className="hero__grid-overlay hero__grid-overlay--title" />
      <div className="hero__container">
        <h1 className="hero__title">
          Global business consulting <span className="gradient-text italic">for a dynamic world!</span>
        </h1>
        <p className="hero__typing-text">
          We <span className="typing-word">{typingWord || '\u00a0'}</span> project success
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
