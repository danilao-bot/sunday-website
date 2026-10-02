"use client";

import React from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight } from "@/components/Icons";

export default function MentorshipPage() {
  return (
    <div className="bg-chalk text-ink pt-[96px] pb-24" data-ground="chalk">
      {/* Header */}
      <section className="py-12 md:py-20 border-b border-ink/10">
        <div className="max-w-[840px] mx-auto px-4 sm:px-8">
          <ScrollReveal>
            <h1 className="font-display text-[clamp(2.5rem,7vw,5.5rem)] text-ink font-normal leading-tight">
              Mentorship
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="font-display text-xl sm:text-2xl italic text-ink/70 mt-3">
              &ldquo;Investing in people. Opening doors.&rdquo;
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-28">
        <div className="max-w-[840px] mx-auto px-4 sm:px-8 flex flex-col gap-8">
          <ScrollReveal>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-ink font-normal leading-snug">
              Success becomes more meaningful when it creates opportunities for others.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="flex flex-col gap-5 text-lg sm:text-xl text-ink-soft leading-relaxed">
              <p>
                He has a particular interest in supporting young people facing difficult circumstances and helping them pursue education and a better future, including identifying children who may need support with school fees and other educational needs.
              </p>
              <p>
                He believes in creating pathways where others can walk, and in using his experience to guide the next generation in character, business, and purpose.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <div className="pt-4">
              <Link
                href="/speaking#connect"
                className="inline-flex items-center justify-center gap-2 min-h-[48px] px-8 text-sm font-bold bg-ink text-chalk rounded-full hover:bg-amber hover:text-ink transition-all duration-300 shadow-sm"
              >
                <span>Collaborate on mentorship</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
