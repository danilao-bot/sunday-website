"use client";

import React, { useState } from "react";

interface Phase {
  id: string;
  era: string;
  label: string;
  detail: string;
}

const PHASES: Phase[] = [
  {
    id: "foundations",
    era: "Early 2000s",
    label: "Foundations",
    detail:
      "Starting on the ground floor of sales and marketing — learning that business is fundamentally about understanding human trust, one relationship at a time.",
  },
  {
    id: "insurance",
    era: "2010s",
    label: "Insurance & Risk",
    detail:
      "Two decades navigating corporate insurance and complex relationship management. Building resilience through market cycles and learning that risk, managed well, becomes opportunity.",
  },
  {
    id: "ipman",
    era: "Mid Journey",
    label: "IPMAN Fellowship",
    detail:
      "Recognised as a Fellow of the Independent Petroleum Marketers Association of Nigeria — helping shape industry dialogue and representing practitioners at the highest level.",
  },
  {
    id: "doctorate",
    era: "Present",
    label: "Commerce Doctorate",
    detail:
      "Pursuing terminal academic mastery in Commerce while mentoring the next generation — opening doors for underrepresented young scholars and cementing a legacy of service.",
  },
];

export default function MilestoneJourney() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const active = activeIdx !== null ? PHASES[activeIdx] : null;

  return (
    <div className="w-full mt-10">
      {/* Rail */}
      <div className="relative flex items-start justify-between gap-0">
        {/* Connecting line underneath nodes */}
        <div
          className="absolute top-[18px] left-0 right-0 h-[2px] bg-gradient-to-r from-amber/20 via-amber/60 to-amber/20 pointer-events-none"
          aria-hidden="true"
        />

        {PHASES.map((phase, idx) => {
          const isActive = activeIdx === idx;
          return (
            <button
              key={phase.id}
              type="button"
              onClick={() => setActiveIdx(isActive ? null : idx)}
              className="relative flex flex-col items-center flex-1 group focus:outline-none"
              aria-pressed={isActive}
            >
              {/* Node */}
              <span
                className={`relative z-10 flex items-center justify-center w-9 h-9 rounded-full border-2 transition-all duration-300 ${
                  isActive
                    ? "bg-amber border-amber shadow-[0_0_16px_4px_rgba(242,162,12,0.35)]"
                    : "bg-ink border-chalk/20 group-hover:border-amber/60 group-hover:bg-amber/10"
                }`}
              >
                <span
                  className={`text-xs font-bold transition-colors duration-300 ${
                    isActive ? "text-ink" : "text-chalk/50 group-hover:text-amber"
                  }`}
                >
                  {idx + 1}
                </span>
              </span>

              {/* Era */}
              <span
                className={`mt-3 text-[10px] font-bold uppercase tracking-widest transition-colors duration-300 ${
                  isActive ? "text-amber" : "text-chalk/30 group-hover:text-chalk/60"
                }`}
              >
                {phase.era}
              </span>

              {/* Label */}
              <span
                className={`mt-1 font-display text-sm sm:text-base italic text-center leading-tight transition-colors duration-300 ${
                  isActive ? "text-amber" : "text-chalk/60 group-hover:text-chalk/90"
                }`}
              >
                {phase.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Detail Card */}
      <div
        className={`overflow-hidden transition-all duration-500 ${
          active ? "max-h-64 opacity-100 mt-8" : "max-h-0 opacity-0 mt-0"
        }`}
      >
        {active && (
          <div className="bg-[#0A121A] border border-[rgba(242,162,12,0.25)] rounded-xl p-6 sm:p-8 relative overflow-hidden">
            <div
              className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-amber/10 blur-2xl pointer-events-none"
              aria-hidden="true"
            />
            <span className="text-[10px] font-bold uppercase tracking-widest text-amber block mb-3">
              {active.era} · {active.label}
            </span>
            <p className="font-display text-lg sm:text-xl italic text-chalk leading-relaxed">
              {active.detail}
            </p>
          </div>
        )}
      </div>

      {!active && (
        <p className="text-[11px] text-chalk/30 text-center mt-6 uppercase tracking-widest">
          Select a phase to read more
        </p>
      )}
    </div>
  );
}
