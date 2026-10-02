"use client";

import React, { useState } from "react";
import { ArrowUpRight } from "@/components/Icons";

interface LensItem {
  id: string;
  title: string;
  poem: string;
  reflection: string;
}

const LENSES: LensItem[] = [
  {
    id: "people",
    title: "Seeing people.",
    poem: "Behind every quiet face in a crowded room is a story of silent endurance. To look is ordinary; to truly see is an act of love.",
    reflection: "Understanding people and their hidden battles is where true connection begins.",
  },
  {
    id: "pain",
    title: "Seeing pain.",
    poem: "We find our strength not in the things we hold, but in the faith that turns the gray to gold. No storm outlives the promise of the sun; no race is lost until the fight is done.",
    reflection: "Pain is real, but it does not have the final say. It teaches grit.",
  },
  {
    id: "beauty",
    title: "Seeing beauty.",
    poem: "When morning breaks upon the quiet road, and footsteps carry more than just the load—there is a quiet majesty in simply being alive.",
    reflection: "A reminder to pause and cherish the gift of ordinary moments.",
  },
  {
    id: "possibility",
    title: "Seeing possibility.",
    poem: "A conclusion is a brick wall with a full stop. A challenge is an open doorway. Every horizon remains unwritten until we take the step.",
    reflection: "No situation should ever be allowed to permanently keep a person down.",
  },
  {
    id: "god",
    title: "Seeing God.",
    poem: "Achievement without purpose is incomplete. His presence is the anchor that keeps the heart grateful in triumph and steadfast in the storm.",
    reflection: "Faith shapes character, humility, and the enduring responsibility to lift others.",
  },
];

export default function SeeingLenses() {
  const [activeIdx, setActiveIdx] = useState(0);
  const currentLens = LENSES[activeIdx];

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-[1.1fr_1.4fr] gap-8 lg:gap-12 items-start my-6">
      {/* Left Column: 5 Interactive Lens Triggers */}
      <div className="flex flex-col gap-2" role="tablist" aria-label="Poetic lenses">
        {LENSES.map((item, idx) => {
          const isActive = idx === activeIdx;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveIdx(idx)}
              className={`text-left py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-between group ${
                isActive
                  ? "bg-white/10 border-l-4 border-amber text-amber font-semibold shadow-sm"
                  : "border-l-4 border-transparent text-chalk/50 hover:text-chalk/90 hover:bg-white/5"
              }`}
            >
              <span className="font-display text-xl sm:text-2xl md:text-3xl italic tracking-tight">
                {item.title}
              </span>
              <span
                className={`text-xs uppercase tracking-widest transition-opacity duration-300 inline-flex items-center gap-1 ${
                  isActive ? "opacity-100 text-amber font-bold" : "opacity-0 group-hover:opacity-60 text-chalk"
                }`}
              >
                <span>Read</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </button>
          );
        })}
      </div>

      {/* Right Column: Dynamic Verse & Reflection Card */}
      <div className="bg-[#0A121A] border border-[rgba(242,162,12,0.3)] rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-2xl min-h-[220px] flex flex-col justify-between">
        {/* Subtle ambient amber disc in corner */}
        <div
          className="absolute -top-12 -right-12 w-36 h-36 rounded-full bg-amber/10 blur-2xl pointer-events-none"
          aria-hidden="true"
        />

        <div>
          <span className="text-[11px] font-bold uppercase tracking-widest text-amber block mb-3">
            {currentLens.title} · Verse Excerpt
          </span>
          <p className="font-display text-lg sm:text-xl italic text-chalk leading-relaxed transition-opacity duration-300">
            &ldquo;{currentLens.poem}&rdquo;
          </p>
        </div>

        <div className="mt-6 pt-4 border-t border-chalk/10 flex items-center justify-between text-xs text-chalk/60">
          <span className="italic max-w-[85%]">{currentLens.reflection}</span>
          <span className="text-amber font-medium">SO</span>
        </div>
      </div>
    </div>
  );
}
