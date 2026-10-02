"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "@/components/Icons";

export default function HeroEditorial() {
  const imageRef = useRef<HTMLDivElement>(null);
  const sunRef = useRef<HTMLDivElement>(null);

  // Subtle ambient parallax on natural scroll
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY < 1000) {
        if (imageRef.current) {
          imageRef.current.style.transform = `translateY(${scrollY * 0.06}px)`;
        }
        if (sunRef.current) {
          sunRef.current.style.transform = `translate(-50%, -50%) translateY(${scrollY * 0.03}px)`;
        }
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(handleScroll);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      className="relative w-full min-h-[88svh] lg:min-h-[92svh] bg-amber text-ink pt-24 pb-12 lg:pt-28 lg:pb-16 flex items-center overflow-hidden"
      data-ground="amber"
      aria-labelledby="hero-title"
    >
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* LEFT COLUMN: Animated Entrance Typography (Order 2 on mobile/iPad, Order 1 on Desktop) */}
          <div className="order-2 lg:order-1 lg:col-span-7 flex flex-col items-start z-10">
            
            {/* Monumental Headline */}
            <motion.h1
              id="hero-title"
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-[clamp(3rem,6.8vw,6.5rem)] font-normal text-ink leading-[1.03] tracking-tight mb-5"
            >
              Sunday Ojima <br className="hidden sm:inline" />
              <span className="italic">Onalo</span>
            </motion.h1>

            {/* Editorial Lead Copy */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg lg:text-xl text-ink/85 max-w-[46ch] leading-relaxed mb-8 font-normal"
            >
              Nigerian businessman, poet, motivational speaker and mentor with over two decades in marketing, insurance leadership, and youth empowerment.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-4 sm:gap-5 w-full sm:w-auto"
            >
              <Link
                href="/story"
                className="inline-flex items-center justify-center min-h-[48px] px-8 text-sm font-bold bg-ink text-chalk rounded-full hover:bg-chalk hover:text-ink transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
              >
                Read his story
              </Link>
              <Link
                href="/poetry"
                className="inline-flex items-center justify-center gap-2 min-h-[48px] px-7 text-sm font-semibold border-2 border-ink text-ink rounded-full hover:bg-ink hover:text-chalk transition-all duration-300 active:translate-y-0"
              >
                <span>The poetry collection</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>

            {/* Editorial Meta Ticker */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 pt-6 border-t border-ink/15 w-full grid grid-cols-2 sm:grid-cols-3 gap-6 text-xs text-ink/75"
            >
              <div>
                <span className="block font-bold text-ink text-sm sm:text-base font-display">Commerce &amp; Sales</span>
                <span className="text-[11px] uppercase tracking-wider opacity-80">Marketing Leadership</span>
              </div>
              <div>
                <span className="block font-bold text-ink text-sm sm:text-base font-display">IPMAN</span>
                <span className="text-[11px] uppercase tracking-wider opacity-80">Fellow</span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="block font-bold text-ink text-sm sm:text-base font-display">Author</span>
                <span className="text-[11px] uppercase tracking-wider opacity-80">Amazon Poetry</span>
              </div>
            </motion.div>

          </div>

          {/* RIGHT COLUMN: Architectural Arch Portrait (Order 1 on mobile/iPad, Order 2 on Desktop) */}
          <div className="order-1 lg:order-2 lg:col-span-5 flex justify-center lg:justify-end relative">
            
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[380px] sm:max-w-[420px] lg:max-w-[440px]"
            >
              
              {/* Sun Disc Glow (Behind the arch) */}
              <div
                ref={sunRef}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[400px] h-[320px] sm:h-[400px] rounded-full bg-[#E29304] pointer-events-none z-0 transition-transform duration-75 will-change-transform opacity-75"
                aria-hidden="true"
              />

              {/* Architectural Arch Frame */}
              <div
                ref={imageRef}
                className="relative z-10 w-full aspect-[4/5] rounded-t-[200px] sm:rounded-t-[220px] rounded-b-2xl overflow-hidden bg-ink shadow-[0_20px_50px_rgba(15,26,36,0.2)] border-[3px] border-ink/20 transition-transform duration-75 will-change-transform"
              >
                <Image
                  src="/images/portrait.jpg"
                  alt="Sunday Ojima Onalo holding a microphone"
                  width={1024}
                  height={1024}
                  priority
                  className="w-full h-full object-cover select-none"
                  style={{
                    objectPosition: "50% 36%",
                  }}
                />

                {/* Subtle vignette gradient at the bottom for richness */}
                <div
                  className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink/60 via-ink/20 to-transparent pointer-events-none"
                  aria-hidden="true"
                />

                {/* Quiet frame stamp */}
                <div className="absolute bottom-3.5 left-5 right-5 flex items-center justify-between text-chalk text-[11px] font-medium tracking-wide uppercase opacity-85 z-20">
                  <span>Sunny Ojima Onalo</span>
                  <span className="inline-flex items-center gap-1.5 text-amber">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber" />
                    <span>Keynote</span>
                  </span>
                </div>
              </div>

            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
