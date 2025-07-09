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

  // Pad the current count with leading zeros to match the target's length
  const numDigits = String(target).length;
  const digits = String(count).padStart(numDigits, '0').split('').map(Number);

  return (
    <div ref={ref} className={cn('flex items-baseline justify-center', className)} aria-label={`${target}${suffix || ''}`}>
      {/* The animated digits */}
      <div className="flex" aria-hidden="true">
        {digits.map((digit, index) => (
          <Digit key={index} digit={digit} duration={duration} />
        ))}
      </div>
      {/* The optional suffix */}
      {suffix && <span>{suffix}</span>}
    </div>
  );
}
