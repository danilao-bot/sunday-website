"use client";

import React from "react";
import { ArrowUpRight } from "@/components/Icons";

export default function ResilienceAscent() {
  return (
    <div className="w-full space-y-10 sm:space-y-14">

      {/* 1. TYPOGRAPHIC REFRAMING DEVICE */}
      <div className="max-w-[850px] space-y-3">
        <h2 className="font-display text-[clamp(2.25rem,5vw,3.75rem)] text-ink font-normal leading-[1.1] tracking-tight">
          Challenges do not have to become{" "}
          <span className="relative inline-block text-ink/30 line-through decoration-amber decoration-[2px]">
            conclusions.
          </span>
        </h2>

        <p className="font-display text-lg sm:text-xl text-ink-soft leading-relaxed max-w-[40ch]">
          No situation should be allowed to{" "}
          <span className="relative inline-block font-semibold text-ink border-b border-amber pb-0.5">
            permanently keep a person down
            <span className="inline-flex items-center ml-1 text-amber align-middle" aria-hidden="true">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </span>
          .
        </p>
      </div>

      {/* 2. POETIC BENTO CARDS */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

        {/* CARD 1: OPTIMISM */}
        <div className="lg:col-span-5 bg-white rounded-3xl p-7 sm:p-9 border border-ink/10 flex flex-col justify-between hover:shadow-lg transition-all duration-300 group">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-ink/40 block mb-2">
              Pillar 01
            </span>
            <h3 className="font-display text-2xl sm:text-3xl text-ink font-normal tracking-tight">
              Optimism
            </h3>
            <p className="font-display italic text-sm sm:text-base text-ink-soft mt-2 leading-relaxed">
              &ldquo;The dawn never asks permission to break.&rdquo;
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-ink/5">
            <div className="w-full h-32 sm:h-36 rounded-2xl bg-[#FBF7EC] border border-ink/5 flex flex-col items-center justify-center p-4 relative overflow-hidden group-hover:border-amber/30 transition-colors">
              <div className="w-24 h-12 rounded-t-full border-t-2 border-x-2 border-amber/60 bg-amber/10 group-hover:scale-110 transition-transform duration-500" />
              <span className="text-[11px] uppercase tracking-wider text-ink/60 font-medium mt-3">
                First Light
              </span>
            </div>
          </div>
        </div>

        {/* CARD 2: HARD WORK & RESILIENCE */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-7 sm:p-9 border border-ink/10 flex flex-col justify-between hover:shadow-lg transition-all duration-300 group">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-ink/40 block mb-2">
              Pillar 02 &amp; 03
            </span>
            <h3 className="font-display text-2xl sm:text-3xl text-ink font-normal tracking-tight">
              Hard Work &amp; Resilience
            </h3>
            <p className="font-display italic text-sm sm:text-base text-ink-soft mt-2 leading-relaxed max-w-[40ch]">
              &ldquo;Discipline is quiet. Strength is forged in the hours no one applauds.&rdquo;
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-ink/5">
            <div className="w-full h-32 sm:h-36 rounded-2xl bg-ink text-chalk p-6 flex items-center justify-between relative overflow-hidden group-hover:bg-[#152330] transition-colors">
              <div className="space-y-1 z-10">
                <span className="font-display text-2xl sm:text-3xl font-normal text-amber block">
                  Unbroken Grit
                </span>
                <span className="text-xs text-chalk/70 uppercase tracking-widest">
                  Steadfast Leadership &amp; Character
                </span>
              </div>
              <div className="text-right z-10 hidden sm:block">
                <span className="text-[11px] text-chalk/50 uppercase tracking-wider block">
                  IPMAN Fellow
                </span>
                <span className="text-xs font-semibold text-chalk mt-0.5 block">
                  Marketing Leadership
                </span>
              </div>
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#F2A20C_1px,transparent_1px)] [background-size:16px_16px]" />
            </div>
          </div>
        </div>

        {/* CARD 3: GENEROSITY */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-7 sm:p-9 border border-ink/10 flex flex-col justify-between hover:shadow-lg transition-all duration-300 group">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-ink/40 block mb-2">
              Pillar 04
            </span>
            <h3 className="font-display text-2xl sm:text-3xl text-ink font-normal tracking-tight">
              Generosity
            </h3>
            <p className="font-display italic text-sm sm:text-base text-ink-soft mt-2 leading-relaxed max-w-[42ch]">
              &ldquo;A ladder has no meaning if no one climbs after you.&rdquo;
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-ink/5">
            <div className="w-full h-32 sm:h-36 rounded-2xl bg-[#FBF7EC] border border-ink/10 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 relative overflow-hidden group-hover:border-amber/40 transition-colors">
              <div className="space-y-0.5">
                <span className="text-xs font-bold uppercase tracking-wider text-ink block">
                  School Fees &amp; Youth Sponsorship
                </span>
                <p className="text-xs text-ink-soft max-w-[32ch]">
                  Opening classroom doors for children who have no other advocate.
                </p>
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-ink underline underline-offset-4 decoration-amber shrink-0">
                <span>Lifting Others</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-amber" />
              </span>
            </div>
          </div>
        </div>

        {/* CARD 4: POSSIBILITY */}
        <div className="lg:col-span-5 bg-white rounded-3xl p-7 sm:p-9 border border-ink/10 flex flex-col justify-between hover:shadow-lg transition-all duration-300 group">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-amber-800 block mb-2">
              Pillar 05 &amp; 06
            </span>
            <h3 className="font-display text-2xl sm:text-3xl text-ink font-normal tracking-tight">
              Possibility
            </h3>
            <p className="font-display italic text-sm sm:text-base text-ink-soft mt-2 leading-relaxed">
              &ldquo;Every horizon remains unwritten.&rdquo;
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-ink/5">
            <div className="w-full h-32 sm:h-36 rounded-2xl bg-amber text-ink p-6 flex items-center justify-between relative overflow-hidden shadow-sm group-hover:scale-[1.02] transition-transform duration-300">
              <div>
                <span className="font-display text-lg sm:text-xl font-bold block leading-tight">
                  The Open Horizon
                </span>
                <span className="text-xs text-ink/80 block mt-0.5">
                  Words, faith, and forward motion
                </span>
              </div>
              <div className="w-10 h-10 rounded-full bg-ink text-chalk flex items-center justify-center shrink-0">
                <ArrowUpRight className="w-4 h-4 text-chalk" />
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
