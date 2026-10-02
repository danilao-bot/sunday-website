"use client";

import React from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight } from "@/components/Icons";
import SeeingLenses from "@/components/SeeingLenses";

export default function PoetryPage() {
  return (
    <div className="bg-ink text-chalk pt-[96px] pb-24" data-ground="ink">
      {/* Header */}
      <section className="py-12 md:py-20 border-b border-[rgba(251,247,236,0.1)]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12">
          <ScrollReveal>
            <h1 className="font-display text-[clamp(2.5rem,7vw,5.5rem)] text-chalk font-normal leading-tight">
              Poetry
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="font-display text-xl sm:text-2xl italic text-amber mt-2">
              Poems by Sunny Ojima Onalo · Words from a life fully lived.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Book Presentation Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-20 items-center">
            {/* Book Cover */}
            <ScrollReveal direction="left">
              <div className="relative flex items-center justify-center py-6">
                <div
                  className="absolute w-[280px] sm:w-[360px] h-[280px] sm:h-[360px] rounded-full bg-amber opacity-10 pointer-events-none"
                  aria-hidden="true"
                />

                {/* Book Presentation */}
                <div className="relative z-10 w-full max-w-[300px] aspect-[2/3] bg-[#0A121A] border border-[rgba(242,162,12,0.3)] p-8 flex flex-col justify-between shadow-2xl">
                  <div className="w-16 h-8 rounded-t-full bg-amber" aria-hidden="true" />
                  <div>
                    <h2 className="font-display text-2xl text-chalk font-normal">Poems</h2>
                    <p className="text-xs font-bold uppercase tracking-wider text-amber mt-1">
                      Sunny Ojima Onalo
                    </p>
                  </div>
                  <p className="text-[10px] text-chalk opacity-50 uppercase tracking-widest">
                    Available on Amazon
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Description */}
            <ScrollReveal direction="right" delay={0.15}>
              <div className="flex flex-col gap-6 text-base sm:text-lg text-chalk opacity-95 leading-relaxed">
                <p>
                  <em>Poems by Sunny Ojima Onalo</em> is a collection shaped by reflection, experience, emotion, faith, humanity and the world around him.
                </p>
                <p>
                  The poems explore joy and sorrow, people and places, loss and hope, society and personal experience. They invite the reader to pause. To think. To feel. And sometimes, simply to remember the beauty of being alive.
                </p>
                <p>
                  For Sunny, poetry is not merely about beautiful words. It is about seeing.
                </p>

                <div className="pt-2">
                  <a
                    href="https://TODO_AMAZON_URL"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 min-h-[46px] px-8 text-sm font-bold bg-amber text-ink rounded-full hover:bg-chalk transition-colors shadow-sm"
                  >
                    <span>Buy the book on Amazon</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Seeing Fragments */}
          <div className="max-w-[840px] mx-auto mt-20 md:mt-28">
            <ScrollReveal>
              <h2 className="font-display text-2xl sm:text-3xl text-amber font-normal mb-4">
                Why This Book?
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="flex flex-col gap-3 my-6 border-l-2 border-amber pl-6">
                <p className="font-display text-2xl sm:text-3xl italic text-chalk">Seeing people.</p>
                <p className="font-display text-2xl sm:text-3xl italic text-chalk">Seeing pain.</p>
                <p className="font-display text-2xl sm:text-3xl italic text-chalk">Seeing beauty.</p>
                <p className="font-display text-2xl sm:text-3xl italic text-chalk">Seeing possibility.</p>
                <p className="font-display text-2xl sm:text-3xl italic text-chalk">Seeing God.</p>
              </div>
            </ScrollReveal>

            {/* Poem Excerpt Slot */}
            <ScrollReveal delay={0.2}>
              <div className="bg-[#0A121A] border border-[rgba(242,162,12,0.3)] p-8 sm:p-12 my-12 rounded-sm shadow-xl">
                <span className="text-xs font-bold uppercase tracking-widest text-amber block mb-4">
                  Selected Poem Excerpt
                </span>
                <div className="font-display text-lg sm:text-xl italic text-chalk leading-loose space-y-2">
                  <p>When morning breaks upon the quiet road,</p>
                  <p>And footsteps carry more than just the load,</p>
                  <p>We find the strength not in the things we hold,</p>
                  <p>But in the faith that turns the gray to gold.</p>
                  <br />
                  <p>No storm outlives the promise of the sun,</p>
                  <p>No race is lost until the fight is done.</p>
                </div>
                <p className="text-xs text-amber mt-6">
                  — From <em>Poems by Sunny Ojima Onalo</em>
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <div className="text-center mt-12">
                <a
                  href="https://TODO_AMAZON_URL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center min-h-[48px] px-8 text-sm font-bold bg-amber text-ink rounded-full hover:bg-chalk transition-colors shadow-sm"
                >
                  Buy the book on Amazon
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
