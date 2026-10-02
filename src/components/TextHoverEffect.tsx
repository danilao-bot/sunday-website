"use client";

import React, { useRef, useEffect } from "react";

interface TextHoverEffectProps {
  text?: string;
  className?: string;
}

export function TextHoverEffect({
  text = "SUNNY",
  className = "",
}: TextHoverEffectProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const gradRef = useRef<SVGRadialGradientElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    const grad = gradRef.current;
    const wrap = wrapRef.current;
    if (!svg || !grad || !wrap) return;

    // Check reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      grad.setAttribute("cx", "150");
      grad.setAttribute("cy", "50");
      grad.setAttribute("r", "300");
      return;
    }

    const isTouch = window.matchMedia("(hover: none)").matches || "ontouchstart" in window;

    let targetX = 150;
    let targetY = 50;
    let currentX = 150;
    let currentY = 50;
    let currentR = 90;
    let isHovering = false;
    let isVisible = true;
    let sweepProgress = 0;
    let animId = 0;

    const onMouseMove = (e: MouseEvent) => {
      const rect = svg.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;
      targetX = ((e.clientX - rect.left) / rect.width) * 300;
      targetY = ((e.clientY - rect.top) / rect.height) * 100;
      isHovering = true;
    };

    const onMouseLeave = () => {
      isHovering = false;
      targetX = 150;
      targetY = 50;
    };

    svg.addEventListener("mousemove", onMouseMove);
    svg.addEventListener("mouseleave", onMouseLeave);

    const animate = () => {
      if (!isVisible) return;

      if (isTouch && !isHovering) {
        // Automatic sine sweep for touch devices
        sweepProgress += 0.015;
        targetX = ((Math.sin(sweepProgress) + 1) / 2) * 260 + 20;
        targetY = 50;
      }

      const ease = 0.14;
      currentX += (targetX - currentX) * ease;
      currentY += (targetY - currentY) * ease;

      grad.setAttribute("cx", currentX.toFixed(2));
      grad.setAttribute("cy", currentY.toFixed(2));
      grad.setAttribute("r", currentR.toString());

      animId = requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible) {
          animId = requestAnimationFrame(animate);
        } else {
          cancelAnimationFrame(animId);
        }
      },
      { threshold: 0.05 }
    );

    observer.observe(wrap);
    animId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animId);
      observer.disconnect();
      svg.removeEventListener("mousemove", onMouseMove);
      svg.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      className={`w-full max-w-[1400px] mx-auto select-none overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <svg
        ref={svgRef}
        viewBox="0 0 300 100"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto block cursor-default"
      >
        <defs>
          <style>{`
            @keyframes drawSunnyStroke {
              from { stroke-dashoffset: 800; }
              to { stroke-dashoffset: 0; }
            }
            .sunny-stroke-anim {
              stroke-dasharray: 800;
              stroke-dashoffset: 0;
              animation: drawSunnyStroke 3.2s ease-out forwards;
            }
          `}</style>

          <radialGradient
            ref={gradRef}
            id="sunnySpotlight"
            cx="150"
            cy="50"
            r="90"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="65%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#000000" />
          </radialGradient>

          <mask id="sunnyMask">
            <rect x="0" y="0" width="300" height="100" fill="url(#sunnySpotlight)" />
          </mask>
        </defs>

        {/* 1. Base Layer: faint 6% fill + self-drawing stroke animation */}
        <text
          x="150"
          y="52%"
          textAnchor="middle"
          dominantBaseline="central"
          textLength="280"
          lengthAdjust="spacingAndGlyphs"
          fontSize="80"
          fontWeight="900"
          fill="rgba(251, 247, 236, 0.06)"
          stroke="rgba(251, 247, 236, 0.2)"
          strokeWidth="0.8"
          className="sunny-stroke-anim"
          style={{
            fontFamily: "var(--font-archivo), system-ui, sans-serif",
            textTransform: "uppercase",
          }}
        >
          {text}
        </text>

        {/* 2. Lit Layer: Solid Amber Outline Masked by Spotlight */}
        <text
          x="150"
          y="52%"
          textAnchor="middle"
          dominantBaseline="central"
          textLength="280"
          lengthAdjust="spacingAndGlyphs"
          fontSize="80"
          fontWeight="900"
          fill="none"
          stroke="#F2A20C"
          strokeWidth="1.6"
          mask="url(#sunnyMask)"
          style={{
            fontFamily: "var(--font-archivo), system-ui, sans-serif",
            textTransform: "uppercase",
          }}
        >
          {text}
        </text>
      </svg>
    </div>
  );
}
