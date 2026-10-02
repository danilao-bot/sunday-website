import React from "react";

interface WaveDividerProps {
  fill: string;       // Color of the NEXT section (fills the bottom curve)
  bgColor: string;    // Color of the PREVIOUS section (fills the top above the curve)
  flip?: boolean;
  className?: string;
}

export default function WaveDivider({ fill, bgColor, flip = false, className = "" }: WaveDividerProps) {
  return (
    <div
      className={`w-full overflow-hidden leading-none block select-none pointer-events-none -my-0.5 ${className}`}
      aria-hidden="true"
      style={{
        transform: flip ? "rotate(180deg)" : "none",
        backgroundColor: bgColor,
      }}
    >
      <svg
        className="block w-full"
        style={{ height: "clamp(2.5rem, 6vw, 5rem)" }}
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Preceding section background rectangle fills entire area so no white gaps ever appear */}
        <rect x="0" y="0" width="1200" height="120" fill={bgColor} />
        {/* Next section wave curve */}
        <path
          d="M0,35 C160,85 360,10 520,50 C680,90 920,20 1200,60 L1200,120 L0,120 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
