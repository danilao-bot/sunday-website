"use client";

import React, { useRef, useState, useEffect } from "react";

export default function StackedWords() {
  const words = [
    { text: "OPTIMISM", isAmber: false },
    { text: "HARD WORK", isAmber: false },
    { text: "GENEROSITY", isAmber: false },
    { text: "RESILIENCE", isAmber: false },
    { text: "CURIOSITY", isAmber: false },
    { text: "POSSIBILITY", isAmber: true },
  ];

  return (
    <div className="w-full overflow-hidden py-12 sm:py-20 md:py-28 flex items-center justify-center select-none" aria-label="Core values and philosophy poster">
      <div className="relative transform -rotate-[28deg] skew-x-[28deg] transition-transform duration-300">
        <ul className="flex flex-col items-start p-0 m-0 list-none leading-[0.78]">
          {words.map(({ text, isAmber }, idx) => (
            <li
              key={idx}
              className={`font-sans font-black italic tracking-tighter text-[clamp(2.25rem,7.8vw,6.5rem)] uppercase transition-all duration-200 block whitespace-nowrap ${
                isAmber
                  ? "bg-amber text-ink px-3 py-1 shadow-sm"
                  : "text-ink hover:text-amber"
              }`}
              style={{
                lineHeight: 0.82,
                marginBottom: "-0.04em",
              }}
            >
              {text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
