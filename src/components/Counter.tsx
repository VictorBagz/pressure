"use client";

import { useEffect, useRef, useState } from 'react';

interface CounterProps {
  target: number;
  duration?: number;
  className?: string;
  suffix?: string;
}

export default function Counter({ target, duration = 1500, className, suffix = '' }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const end = target;
          if (start === end) return;

          const totalFrames = Math.round(duration / (1000 / 60));
          const increment = end / totalFrames;

          let currentFrame = 0;
          const timer = setInterval(() => {
            currentFrame++;
            start += increment;
            setCount(Math.min(Math.ceil(start), end));
            
            if (currentFrame === totalFrames) {
              setCount(end);
              clearInterval(timer);
            }
          }, duration / totalFrames);
          
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if(currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [target, duration]);

  return (
    <div ref={ref} className={className}>
      {count}{suffix}
    </div>
  );
}
