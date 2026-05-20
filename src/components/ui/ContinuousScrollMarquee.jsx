import React, { useEffect, useRef, useState } from 'react';

// Lightweight marquee that pauses on hover and disables on reduced motion.
export const ContinuousScrollMarquee = ({
  items = [],
  speed = 35, // seconds for full cycle-ish (lower = faster)
  className = '',
  itemClassName = '',
  ariaLabel = 'Scrolling highlights',
}) => {
  const trackRef = useRef(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia?.('(prefers-reduced-motion: reduce)');
    if (!mq) return;
    const onChange = () => setReducedMotion(mq.matches);
    onChange();
    mq.addEventListener?.('change', onChange);
    return () => mq.removeEventListener?.('change', onChange);
  }, []);

  const loopItems = [...items, ...items];


  return (
    <div className={`marquee ${className}`} aria-label={ariaLabel} role="region">
      <div
        ref={trackRef}
        className={`marquee-track ${reducedMotion ? 'paused' : ''}`}
        style={{
          // Force reflow-friendly transform start (helps some browsers)
          transform: 'translateX(0px)',
          // Use CSS variable so animation duration can be tuned.
          ['--marquee-speed']: `${speed}s`,
        }}
      >
        {loopItems.map((text, idx) => (
          <div key={`${text}-${idx}`} className={`marquee-item ${itemClassName}`}>
            {text}
          </div>
        ))}
      </div>
    </div>
  );
};

