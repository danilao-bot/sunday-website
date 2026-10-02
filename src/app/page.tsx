"use client";

import React from "react";
import Link from "next/link";
import HeroEditorial from "@/components/HeroEditorial";
import ResilienceAscent from "@/components/ResilienceAscent";
import SixRoles from "@/components/SixRoles";
import WaveDivider from "@/components/WaveDivider";
import ScrollReveal from "@/components/ScrollReveal";
import MilestoneJourney from "@/components/MilestoneJourney";
import { ArrowRight } from "@/components/Icons";

export default function Home() {
  return (
    <>
      {/* 1. HERO (EDITORIAL SPREAD: HIGH-END PROFILE) */}
      <HeroEditorial />

      {/* WAVE: Amber -> Chalk */}
      <WaveDivider bgColor="#F2A20C" fill="#FBF7EC" />

      {/* 2. PHILOSOPHY & THE ASCENT GRID (MORNING: CHALK) */}
      <section className="section bg-chalk py-16 sm:py-20 md:py-24" data-ground="chalk" aria-labelledby="philosophy-title">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-8 lg:px-12">
          <ResilienceAscent />
        </div>
      </section>

      {/* 3. SIX ROLES (MORNING: CHALK INDEX LIST) */}
      <section className="section bg-chalk pb-16 sm:pb-20 md:pb-24 pt-0" data-ground="chalk">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="border-t border-ink/10 pt-10 sm:pt-14">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-ink/50 block mb-1">
                  Active Leadership
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-semibold text-ink">
                  The Six Life Pursuits
                </h3>
              </div>
              <span className="text-xs text-ink/60 hidden sm:inline-flex items-center gap-1">
                <span>Click any role to explore details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
            <SixRoles />
          </div>
        </div>
      </section>

      {/* WAVE: Chalk -> Ink */}
      <WaveDivider bgColor="#FBF7EC" fill="#0F1A24" />

      {/* 4. BUSINESS (MIDDAY: INK) */}
      <section className="section bg-ink text-chalk py-20 md:py-32" data-ground="ink" aria-labelledby="business-title">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start">
            <div>
              <span className="font-display text-[clamp(5rem,14vw,11rem)] text-amber font-normal leading-none block tracking-tighter">
                20+
              </span>
              <h2 id="business-title" className="font-display text-2xl sm:text-3xl md:text-4xl text-chalk font-normal mt-4">
                years in marketing and sales
              </h2>
            </div>

            <ScrollReveal direction="right" delay={0.15}>
              <div className="flex flex-col gap-8">
                {/* 20-Year Milestone Journey — Interactive 4-phase rail */}
                <MilestoneJourney />

                <p className="font-display text-xl sm:text-2xl text-chalk leading-relaxed opacity-95">
                  Marketing. <span className="text-amber">·</span> Personal branding. <span className="text-amber">·</span> Insurance. <span className="text-amber">·</span> Business development. <span className="text-amber">·</span> Relationship management. <span className="text-amber">·</span> Entrepreneurship.
                </p>

                <hr className="w-full h-[1px] bg-amber border-none opacity-80 my-2" aria-hidden="true" />

                <p className="font-display text-lg sm:text-xl italic text-chalk opacity-90 max-w-[48ch]">
                  &ldquo;Every person has a story, values and experiences that can become a meaningful personal identity.&rdquo;
                </p>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* WAVE: Ink -> Chalk (No more electric blue!) */}
      <WaveDivider bgColor="#0F1A24" fill="#FBF7EC" />

      {/* 5. MENTORSHIP (WARM CHALK GROUND WITH AMBER ACCENTS) */}
      <section className="section bg-chalk text-ink py-20 md:py-32" data-ground="chalk" aria-labelledby="mentorship-title">
        <div className="max-w-[900px] mx-auto px-4 sm:px-8 lg:px-12 flex flex-col gap-8">
          
          <ScrollReveal>
            <h2
              id="mentorship-title"
              className="font-display text-[clamp(2.25rem,6vw,4.5rem)] text-ink font-normal leading-[1.1] tracking-tight"
            >
              Success becomes more meaningful when it creates opportunities for others.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className="text-lg sm:text-xl text-ink-soft leading-relaxed max-w-[50ch]">
              He supports young people in difficult circumstances, including sponsoring children who need help with school fees, mentoring future professionals, and opening doors through education.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <div className="pt-2">
              <Link
                href="/mentorship"
                className="inline-flex items-center justify-center gap-2 min-h-[48px] px-8 text-sm font-bold bg-ink text-chalk rounded-full hover:bg-amber hover:text-ink transition-all duration-300 shadow-sm"
              >
                <span>Learn about his mentorship</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* WAVE: Chalk -> Ink */}
      <WaveDivider bgColor="#FBF7EC" fill="#0F1A24" />

      {/* 6. FAITH & PURPOSE (STILLNESS: INK) */}
      <section className="section bg-ink text-chalk py-20 md:py-28" data-ground="ink" aria-labelledby="faith-title">
        <div className="max-w-[900px] mx-auto px-4 sm:px-8 lg:px-12">
          
          <ScrollReveal>
            <h2
              id="faith-title"
              className="font-display text-[clamp(2.25rem,7vw,5.5rem)] text-chalk font-normal leading-tight tracking-tight mb-8"
            >
              God. Family. Work. Service. Purpose.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className="text-lg sm:text-xl text-chalk/80 max-w-[48ch] leading-relaxed">
              His faith keeps him grateful, hopeful and committed to doing good in every arena of life.
            </p>
          </ScrollReveal>

        </div>
      </section>

      {/* 7. POETRY (NIGHT, LAMP-LIT: INK) */}
      <section className="section bg-ink text-chalk pb-20 md:pb-32 pt-8 border-t border-chalk/10" data-ground="ink" aria-labelledby="poetry-title">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-20 items-center">
            
            {/* Typographic Book Cover Presentation */}
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
                    <h3 className="font-display text-2xl text-chalk font-normal">Poems</h3>
                    <p className="text-xs font-bold uppercase tracking-wider text-amber mt-1">Sunny Ojima Onalo</p>
                  </div>
                  <p className="text-[10px] text-chalk opacity-50 uppercase tracking-widest">Available on Amazon</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Content */}
            <ScrollReveal direction="right" delay={0.15}>
              <div className="flex flex-col gap-6">
                <div>
                  <h2 id="poetry-title" className="font-display text-3xl sm:text-4xl text-chalk font-normal">
                    Poems by Sunny Ojima Onalo
                  </h2>
                  <p className="font-display text-lg italic text-amber mt-1">
                    Words from a life fully lived.
                  </p>
                </div>

                {/* Seeing Fragments */}
                <div className="flex flex-col gap-2.5 my-2 border-l-2 border-amber pl-6">
                  <p className="font-display text-xl sm:text-2xl italic text-chalk">Seeing people.</p>
                  <p className="font-display text-xl sm:text-2xl italic text-chalk">Seeing pain.</p>
                  <p className="font-display text-xl sm:text-2xl italic text-chalk">Seeing beauty.</p>
                  <p className="font-display text-xl sm:text-2xl italic text-chalk">Seeing possibility.</p>
                  <p className="font-display text-xl sm:text-2xl italic text-chalk">Seeing God.</p>
                </div>

                <div className="flex flex-wrap gap-4 pt-2">
                  <a
                    href="https://TODO_AMAZON_URL"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center min-h-[46px] px-6 text-sm font-bold bg-amber text-ink rounded-full hover:bg-chalk transition-colors shadow-sm"
                  >
                    Buy the book on Amazon
                  </a>
                  <Link
                    href="/poetry"
                    className="inline-flex items-center justify-center min-h-[46px] px-6 text-sm font-semibold border border-chalk text-chalk rounded-full hover:bg-chalk hover:text-ink transition-colors"
                  >
                    About the book
                  </Link>
                </div>
              </div>
            </ScrollReveal>

          </div>

        </div>
      </section>

      {/* WAVE: Ink -> Amber */}
      <WaveDivider bgColor="#0F1A24" fill="#F2A20C" />

      {/* 8. CONNECT (NEW SUNRISE: AMBER) */}
      <section className="section bg-amber text-ink py-20 md:py-32" id="connect" data-ground="amber" aria-labelledby="connect-title">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12">
          
          <ScrollReveal>
            <h2
              id="connect-title"
              className="font-display text-[clamp(2.5rem,7vw,5.5rem)] text-ink font-normal leading-tight tracking-tight mb-10"
            >
              Let&apos;s connect.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="flex flex-col gap-5 sm:gap-6 mb-12">
              <Link href="/speaking#connect" className="font-display text-2xl sm:text-3xl lg:text-4xl text-ink hover:translate-x-3 transition-transform inline-flex items-center gap-3">
                <span>—</span> Speaking and events
              </Link>
              <Link href="/speaking#connect" className="font-display text-2xl sm:text-3xl lg:text-4xl text-ink hover:translate-x-3 transition-transform inline-flex items-center gap-3">
                <span>—</span> Business and professional enquiries
              </Link>
              <Link href="/poetry" className="font-display text-2xl sm:text-3xl lg:text-4xl text-ink hover:translate-x-3 transition-transform inline-flex items-center gap-3">
                <span>—</span> Poetry and book enquiries
              </Link>
              <Link href="/mentorship" className="font-display text-2xl sm:text-3xl lg:text-4xl text-ink hover:translate-x-3 transition-transform inline-flex items-center gap-3">
                <span>—</span> Mentorship and collaboration
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <Link
              href="/speaking#connect"
              className="inline-flex items-center justify-center min-h-[48px] px-8 text-sm font-bold bg-ink text-chalk rounded-full hover:bg-chalk hover:text-ink transition-colors shadow-sm"
            >
              Get in touch
            </Link>
          </ScrollReveal>

        </div>
      </section>

      {/* WAVE: Amber -> Footer Ink */}
      <WaveDivider bgColor="#F2A20C" fill="#0F1A24" />
    </>
  );
}
