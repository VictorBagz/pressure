"use client";

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface CounterProps {
  target: number;
  duration?: number;
  className?: string;
  suffix?: string;
}

const Digit = ({ digit, duration }: { digit: number; duration: number }) => {
  const style: React.CSSProperties = {
    // Using a cubic-bezier for a nice "ease-out" effect
    transition: `transform ${duration}ms cubic-bezier(0.19, 1, 0.22, 1)`,
    // This moves the column of numbers up to the correct digit
    transform: `translateY(-${digit * 10}%)`,
  };

  return (
    // This container clips the content to show only one digit
    <div className="h-[1em] overflow-y-hidden" aria-hidden="true">
      {/* This is the column of digits 0-9 */}
      <div style={style} className="flex flex-col">
        {Array.from({ length: 10 }).map((_, i) => (
          <span key={i} className="h-[1em] leading-[1em]">
            {i}
          </span>
        ))}
      </div>
    </div>
  );
};

export default function Counter({ target, duration = 1500, className, suffix = '' }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          // Set count to target to trigger the animation
          setCount(target);
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
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [target]);

  // Format the number with commas and split into characters
  const targetString = target.toLocaleString('en-US');
  let countString = count.toLocaleString('en-US');

  // To keep the layout stable during animation, we pad the count string
  // with invisible placeholders to match the target string's length.
  if (countString.length < targetString.length) {
      countString = countString.padStart(targetString.length, ' ');
  }
  
  const displayChars = countString.split('');

  return (
    <div ref={ref} className={cn('flex items-baseline justify-center', className)} aria-label={`${target.toLocaleString('en-US')}${suffix || ''}`}>
      <div className="flex" aria-hidden="true">
        {displayChars.map((char, index) => {
          if (char === ',' || char === '.') {
            // Render commas and decimal points directly
            return <span key={index}>{char}</span>;
          }
          if (char === ' ') {
            // Render placeholders as invisible to not affect layout
            return <span key={index} className="opacity-0">0</span>;
          }
          if (!isNaN(parseInt(char, 10))) {
            // Render digits with the animation component
            return <Digit key={index} digit={Number(char)} duration={duration} />;
          }
          return null;
        })}
      </div>
      {/* The optional suffix */}
      {suffix && <span>{suffix}</span>}
    </div>
  );
}
