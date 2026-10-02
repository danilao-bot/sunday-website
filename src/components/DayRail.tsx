"use client";

import React, { useEffect, useState } from "react";

export default function DayRail() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const p = docHeight > 0 ? Math.min(Math.max(scrollY / docHeight, 0), 1) : 0;
      setScrollProgress(p);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(handleScroll);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Mobile Top Progress Line */}
      <div
        className="day-progress-bar"
        style={{ width: `${scrollProgress * 100}%` }}
        aria-hidden="true"
      />

      {/* Desktop Right-Edge Rail */}
      <div className="day-rail" aria-hidden="true">
        <div
          className="day-rail-dot"
          style={{
            top: `calc(${scrollProgress * 100}% - 5px)`,
          }}
        />
      </div>
    </>
  );
}
