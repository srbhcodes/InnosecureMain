import React, { lazy, Suspense, useEffect, useRef, useState } from 'react';

/**
 * LazySection - Lazy loads a component when it enters the viewport
 * Uses IntersectionObserver for efficient loading
 */
const LazySection = ({ children, fallback = null, threshold = 0.1 }) => {
  const [shouldLoad, setShouldLoad] = useState(false);
  const observerRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (shouldLoad) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            if (observerRef.current && containerRef.current) {
              observerRef.current.unobserve(containerRef.current);
            }
          }
        });
      },
      {
        threshold,
        rootMargin: '100px', // Start loading 100px before entering viewport
      }
    );

    observerRef.current = observer;

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (observerRef.current && containerRef.current) {
        observerRef.current.unobserve(containerRef.current);
      }
    };
  }, [shouldLoad, threshold]);

  return (
    <div ref={containerRef}>
      {shouldLoad ? (
        <Suspense fallback={fallback}>{children}</Suspense>
      ) : (
        <div style={{ minHeight: '200px' }}>{fallback}</div>
      )}
    </div>
  );
};

export default LazySection;

