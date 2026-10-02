"use client";

import React, { useEffect, useRef, useState } from "react";

interface SlidingDigitProps {
  digit: string;
}

function SlidingDigit({ digit }: SlidingDigitProps) {
  const num = parseInt(digit, 10);
  if (isNaN(num)) {
    return <span className="inline-block">{digit}</span>;
  }

  return (
    <span className="relative inline-flex h-[1em] overflow-hidden leading-none select-none tabular-nums align-top">
      {/* Invisible placeholder gives this container the exact font width of the active digit */}
      <span className="invisible select-none pointer-events-none" aria-hidden="true">
        {digit}
      </span>
      <span
        className="absolute inset-0 w-full flex flex-col items-center transition-transform duration-200 ease-out"
        style={{ transform: `translateY(-${num * 10}%)` }}
        aria-hidden="true"
      >
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
          <span
            key={n}
            className="flex h-[1em] w-full shrink-0 items-center justify-center"
          >
            {n}
          </span>
        ))}
      </span>
    </span>
  );
}

export function InViewSlidingNumber({
  target = 20,
  suffix = "+",
  className = "",
}: {
  target?: number;
  suffix?: string;
  className?: string;
}) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);
  const animatedRef = useRef(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const runCountAnimation = () => {
      if (animatedRef.current) return;
      animatedRef.current = true;

      const duration = 1400; // 1.4 seconds total animation
      let startTime: number | null = null;
      let frameId: number;

      const tick = (now: number) => {
        if (!startTime) startTime = now;
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Cubic ease out: quick launch, graceful deceleration to 20
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const nextValue = Math.min(target, Math.round(easeOut * target));

        setCount(nextValue);

        if (progress < 1) {
          frameId = requestAnimationFrame(tick);
        } else {
          setCount(target);
        }
      };

      frameId = requestAnimationFrame(tick);
    };

    // 1. Check if already visible on mount
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      runCountAnimation();
      return;
    }

    // 2. IntersectionObserver trigger on scroll
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0]?.isIntersecting) {
            runCountAnimation();
            observer.disconnect();
          }
        },
        { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
      );

      observer.observe(el);
      return () => observer.disconnect();
    } else {
      runCountAnimation();
    }
  }, [target]);

  const digits = count.toString().split("");

  return (
    <span
      ref={containerRef}
      className={`inline-flex items-baseline select-none ${className}`}
      aria-label={`${target}${suffix}`}
    >
      <span className="inline-flex">
        {digits.map((d, idx) => (
          <SlidingDigit key={`${digits.length}-${idx}`} digit={d} />
        ))}
      </span>
      {suffix && (
        <span className="inline-block ml-0.5">
          {suffix}
        </span>
      )}
    </span>
  );
}

export default InViewSlidingNumber;
