"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "@/components/Icons";
import { TextHoverEffect } from "@/components/TextHoverEffect";

export default function Footer() {
  return (
    <footer className="bg-ink text-chalk pt-16 pb-12 overflow-hidden border-t border-[rgba(251,247,236,0.1)]" data-ground="ink" role="contentinfo">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Giant Outlined SUNNY Flourish */}
        <div className="mb-12">
          <TextHoverEffect text="SUNNY" />
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-[rgba(251,247,236,0.1)]">
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-6 sm:gap-10 list-none">
              <li>
                <Link href="/story" className="text-sm text-chalk opacity-85 hover:opacity-100 hover:text-amber transition-colors">
                  Story
                </Link>
              </li>
              <li>
                <Link href="/poetry" className="text-sm text-chalk opacity-85 hover:opacity-100 hover:text-amber transition-colors">
                  Poetry
                </Link>
              </li>
              <li>
                <Link href="/speaking" className="text-sm text-chalk opacity-85 hover:opacity-100 hover:text-amber transition-colors">
                  Speaking
                </Link>
              </li>
              <li>
                <Link href="/mentorship" className="text-sm text-chalk opacity-85 hover:opacity-100 hover:text-amber transition-colors">
                  Mentorship
                </Link>
              </li>
            </ul>
          </nav>

          <Link
            href="/speaking#connect"
            className="inline-flex items-center text-sm font-semibold text-amber hover:underline gap-1.5"
          >
            <span>Get in touch</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Legal & Copyright Line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-chalk opacity-60">
          <p>© 2026 Sunday Ojima Onalo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
