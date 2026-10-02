"use client";

import React from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight } from "@/components/Icons";

export default function StoryPage() {
  return (
    <div className="bg-chalk text-ink pt-[96px] pb-24" data-ground="chalk">
      {/* Header */}
      <section className="py-12 md:py-20 border-b border-[rgba(15,26,36,0.1)]">
        <div className="max-w-[840px] mx-auto px-4 sm:px-8">
          <ScrollReveal>
            <h1 className="font-display text-[clamp(2.5rem,7vw,5.5rem)] text-ink font-normal leading-tight">
              Story
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="font-display text-xl sm:text-2xl italic text-ink/70 mt-3">
              &ldquo;A life shaped by hard work, faith, and people.&rdquo;
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Chapter 1: The Journey */}
      <article className="py-16 md:py-24 border-b border-[rgba(15,26,36,0.1)]">
        <div className="max-w-[840px] mx-auto px-4 sm:px-8">
          <ScrollReveal>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl italic text-ink mb-6 leading-snug">
              &ldquo;Life is shaped by an enduring belief in the beauty and possibilities of life.&rdquo;
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="flex flex-col gap-5 text-base sm:text-lg text-ink leading-relaxed">
              <p>
                A Nigerian businessman, poet, motivational speaker and experienced marketing professional whose life has been shaped by an enduring belief in the beauty and possibilities of life.
              </p>
              <p>
                With more than two decades in marketing and sales, he has built a career around understanding people, creating relationships and helping businesses and individuals see opportunities where others may see limitations.
              </p>
              <p>
                He is an experienced insurance executive and an IPMAN Fellow, and is pursuing a Doctorate in Commerce. Beyond professional accomplishments, he considers his greatest responsibilities to be human ones: family, mentorship, generosity and helping people find their footing.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </article>

      {/* Chapter 2: Faith */}
      <article className="py-16 md:py-24 border-b border-[rgba(15,26,36,0.1)]">
        <div className="max-w-[840px] mx-auto px-4 sm:px-8">
          <ScrollReveal>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl italic text-ink mb-6 leading-snug">
              &ldquo;Achievement without purpose is incomplete, and success carries a responsibility to others.&rdquo;
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="flex flex-col gap-5 text-base sm:text-lg text-ink leading-relaxed">
              <p>
                His relationship with God shapes how he approaches life, family, work and service.
              </p>
              <p>
                He believes achievement without purpose is incomplete, and success carries a responsibility to others. His faith keeps him grateful, hopeful and committed to doing good.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </article>

      {/* Chapter 3: Family */}
      <article className="py-16 md:py-24 border-b border-[rgba(15,26,36,0.1)]">
        <div className="max-w-[840px] mx-auto px-4 sm:px-8">
          <ScrollReveal>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl italic text-ink mb-6 leading-snug">
              &ldquo;Relationships, responsibility, love and togetherness are among life&apos;s greatest treasures.&rdquo;
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="flex flex-col gap-5 text-base sm:text-lg text-ink leading-relaxed">
              <p>
                Family is at the centre of his life, both nuclear and extended.
              </p>
              <p>
                He considers family relationships and mutual support to be life&apos;s greatest anchor.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </article>

      {/* Chapter 4: Curiosity */}
      <article className="py-16 md:py-24 border-b border-[rgba(15,26,36,0.1)]">
        <div className="max-w-[840px] mx-auto px-4 sm:px-8">
          <ScrollReveal>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl italic text-ink mb-6 leading-snug">
              &ldquo;There is always something to learn, and there is always something to share.&rdquo;
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="flex flex-col gap-5 text-base sm:text-lg text-ink leading-relaxed">
              <p>
                Those who know him describe an extraordinary appetite for knowledge across business, marketing, insurance, sports, poetry, people, society, history and everyday life.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </article>

      {/* Chapter 5: Personal Branding */}
      <article className="py-16 md:py-24">
        <div className="max-w-[840px] mx-auto px-4 sm:px-8">
          <ScrollReveal>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl italic text-ink mb-6 leading-snug">
              &ldquo;Every individual has a story, values and experiences that can be developed into a meaningful identity.&rdquo;
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="flex flex-col gap-5 text-base sm:text-lg text-ink leading-relaxed">
              <p>
                His own journey blends business, communication, relationships, service, faith and personal development.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.25}>
            <div className="mt-10">
              <Link
                href="/speaking#connect"
                className="inline-flex items-center justify-center gap-2 min-h-[48px] px-8 text-sm font-bold bg-ink text-chalk rounded-full hover:bg-amber hover:text-ink transition-colors shadow-sm"
              >
                <span>Get in touch</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </article>
    </div>
  );
}
