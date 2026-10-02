"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import "./scroll-expand-media.css";

export default function HeroScrollExpand() {
  const trackRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    const track = trackRef.current;
    const stage = stageRef.current;
    const media = mediaRef.current;
    if (!track || !stage || !media) return;

    let ticking = false;

    const update = () => {
      const rect = track.getBoundingClientRect();
      const trackScrollable = track.offsetHeight - window.innerHeight;

      if (trackScrollable > 0) {
        const scrolled = -rect.top;
        const p = Math.min(Math.max(scrolled / trackScrollable, 0), 1);
        const q = Math.min(1, p / 0.7);

        const vw = window.innerWidth;
        const vh = window.innerHeight;

        const w0 = Math.min(vw * 0.62, 300);
        const h0 = w0 * 1.25;
        const w1 = Math.min(vw * 0.92, 1100);
        const h1 = Math.min(vh * 0.82, 750);

        const currentW = w0 + (w1 - w0) * p;
        const currentH = h0 + (h1 - h0) * p;

        // Arch radius: w0/2 at start, flattening towards 12px
        const rTop = Math.max((w0 / 2) * (1 - p * 1.5), 12);

        media.style.width = `${currentW}px`;
        media.style.height = `${currentH}px`;
        media.style.borderRadius = `${rTop}px ${rTop}px 12px 12px`;

        stage.style.setProperty("--p", p.toFixed(4));
        stage.style.setProperty("--q", q.toFixed(4));
        stage.style.setProperty("--w0", `${w0}px`);
        stage.style.setProperty("--h0", `${h0}px`);

        if (p >= 0.85) {
          stage.setAttribute("data-revealed", "true");
        } else {
          stage.removeAttribute("data-revealed");
        }
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div ref={trackRef} className="sme-track" data-ground="amber">
      <section ref={stageRef} className="sme-stage" aria-labelledby="hero-main-title">
        {/* Geometric Sun Disc */}
        <div className="sme-sun" aria-hidden="true" />

        {/* H1: Name split into two halves reserving the center hole */}
        <h1 id="hero-main-title" className="sme-title">
          <span className="sme-half sme-half-first">Sunday</span>
          <span className="sme-half sme-half-second">
            <span>Ojima</span>
            <br className="hidden md:inline" />
            <span> Onalo</span>
          </span>
        </h1>

        {/* Photo Container (.sme-media): Centered in the hole */}
        <div ref={mediaRef} className="sme-media">
          <Image
            src="/images/portrait.jpg"
            alt="Portrait of Sunday Ojima Onalo speaking into a microphone"
            width={1024}
            height={1024}
            priority
          />

          <div className="sme-overlay" />

          {/* Lower third content: revealed at p >= 0.85 */}
          <div className="sme-content">
            <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-amber mb-2">
              Known creatively as Sunny.
            </p>
            <p className="font-display text-xl sm:text-2xl lg:text-3xl italic font-normal max-w-[36ch] leading-snug mb-5 text-chalk">
              &ldquo;A life of purpose, possibility and positive impact.&rdquo;
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/story"
                className="inline-flex items-center justify-center min-h-[44px] px-6 text-sm font-bold bg-amber text-ink rounded-full hover:bg-chalk transition-colors shadow-sm"
              >
                Read his story
              </Link>
              <Link
                href="/poetry"
                className="inline-flex items-center justify-center min-h-[44px] px-6 text-sm font-semibold border border-chalk text-chalk rounded-full hover:bg-chalk hover:text-ink transition-colors"
              >
                The poetry
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
