import React, { useState, useEffect } from 'react';
import { typingWords, heroStats } from '../../data/homeData';

const HeroSection = () => {
  const [typingWord, setTypingWord] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

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
    <section className="hero">
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

