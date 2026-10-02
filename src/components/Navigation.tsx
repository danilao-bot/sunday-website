"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Navigation() {
  const pathname = usePathname();
  const isInitialDark = pathname === "/poetry";
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(isInitialDark);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    let ticking = false;

    const checkScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);

      // On Poetry page near top, always keep dark
      if (pathname === "/poetry" && scrollY < 120) {
        setIsDark(true);
        ticking = false;
        return;
      }

      // Check if current ground section under navbar is dark
      const darkSections = document.querySelectorAll<HTMLElement>(
        "section[data-ground='ink'], section[data-ground='royal'], div[data-ground='ink'], div[data-ground='royal'], footer[data-ground='ink']"
      );

      let overDark = false;
      const headerLine = 60;

      darkSections.forEach((sec) => {
        const rect = sec.getBoundingClientRect();
        if (rect.top <= headerLine && rect.bottom >= headerLine) {
          overDark = true;
        }
      });

      setIsDark(overDark);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(checkScroll);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    checkScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [drawerOpen]);

  const navLinks = [
    { href: "/story", label: "Story" },
    { href: "/poetry", label: "Poetry" },
    { href: "/speaking", label: "Speaking" },
    { href: "/mentorship", label: "Mentorship" },
  ];

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-[1000] flex justify-center pointer-events-none px-4 sm:px-6"
        role="banner"
      >
        <div
          data-scrolled={isScrolled ? "true" : "false"}
          className={cn(
            "pointer-events-auto flex items-center justify-between",
            "transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
            // Unscrolled: Full-width top bar, spacious and flat
            !isScrolled && [
              "w-full max-w-[1400px] h-[80px] sm:h-[88px] px-2 sm:px-4 mt-0",
              "rounded-none bg-transparent border border-transparent shadow-none",
              isDark ? "text-[#FBF7EC]" : "text-[#0F1A24]",
            ],
            // Scrolled: Fluidly morphs into a floating frosted glass pill capsule
            isScrolled && [
              "w-full max-w-[760px] h-[58px] sm:h-[62px] px-4 sm:px-6 mt-3 sm:mt-4",
              "rounded-full border backdrop-blur-xl shadow-[0_14px_40px_rgba(0,0,0,0.16)]",
              isDark
                ? "bg-[#0F1A24]/90 border-white/20 text-[#FBF7EC]"
                : "bg-[#FBF7EC]/90 border-black/10 text-[#0F1A24]",
            ]
          )}
        >
          {/* Monogram Brand Mark */}
          <Link
            href="/"
            className={cn(
              "flex items-center justify-center rounded-full border transition-all duration-300 hover:scale-105",
              isScrolled
                ? "w-9 h-9 sm:w-10 sm:h-10 text-xs sm:text-sm font-medium"
                : "w-10 h-10 sm:w-11 sm:h-11 text-sm font-semibold",
              isDark
                ? "border-white/30 text-[#FBF7EC] hover:border-amber hover:text-amber bg-white/5"
                : "border-[#0F1A24]/30 text-[#0F1A24] hover:border-amber-600 hover:text-amber-700 bg-black/5"
            )}
            aria-label="Sunday Ojima Onalo, home"
          >
            <span className="font-display tracking-tight">SO</span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 sm:gap-2 list-none m-0 p-0" aria-label="Primary navigation">
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    "relative rounded-full text-xs sm:text-sm font-medium transition-all duration-300 inline-flex items-center gap-1.5",
                    isScrolled ? "px-3.5 py-1.5" : "px-4 py-2",
                    isActive
                      ? isDark
                        ? "bg-white/15 text-amber font-semibold"
                        : "bg-black/10 text-[#0F1A24] font-semibold"
                      : isDark
                      ? "text-chalk/80 hover:text-white hover:bg-white/10"
                      : "text-ink/80 hover:text-ink hover:bg-black/5"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-amber inline-block" aria-hidden="true" />
                  )}
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* Connect CTA Pill */}
          <div className="flex items-center gap-3">
            <Link
              href={pathname === "/" ? "#connect" : "/speaking#connect"}
              className={cn(
                "inline-flex items-center justify-center rounded-full text-xs sm:text-sm font-bold transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm",
                isScrolled
                  ? "h-[38px] sm:h-[42px] px-4 sm:px-6"
                  : "h-[42px] sm:h-[46px] px-5 sm:px-7",
                isDark
                  ? "bg-amber text-[#0F1A24] hover:bg-white hover:text-black"
                  : "bg-[#0F1A24] text-[#FBF7EC] hover:bg-amber hover:text-black"
              )}
            >
              Connect
            </Link>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className={cn(
                "md:hidden flex items-center justify-center rounded-full text-xs font-bold uppercase transition-all duration-300",
                isScrolled ? "w-9 h-9" : "w-10 h-10",
                isDark ? "bg-white/10 text-chalk" : "bg-black/5 text-ink"
              )}
              onClick={() => setDrawerOpen(true)}
              aria-expanded={drawerOpen}
              aria-controls="mobileDrawer"
              aria-label="Toggle menu"
            >
              <svg className="w-4 h-4 stroke-current stroke-2 fill-none" viewBox="0 0 24 24">
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Drawer Overlay */}
      <div
        id="mobileDrawer"
        className={cn(
          "fixed inset-0 bg-chalk text-ink z-[1100] flex flex-col justify-between p-6 sm:p-10 transition-all duration-300",
          drawerOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div className="flex items-center justify-between h-[64px]">
          <Link
            href="/"
            onClick={() => setDrawerOpen(false)}
            className="flex items-center justify-center w-10 h-10 rounded-full border-[1.5px] border-ink"
            aria-label="Sunday Ojima Onalo, home"
          >
            <span className="font-display text-sm font-medium">SO</span>
          </Link>

          <button
            type="button"
            className="min-h-[44px] min-w-[44px] text-xs font-bold uppercase tracking-wider text-ink"
            onClick={() => setDrawerOpen(false)}
            aria-label="Close menu"
          >
            Close
          </button>
        </div>

        <nav aria-label="Mobile navigation" className="my-auto">
          <ul className="flex flex-col gap-6 list-none p-0 m-0">
            <li>
              <Link
                href="/"
                onClick={() => setDrawerOpen(false)}
                className="font-display text-3xl sm:text-4xl text-ink hover:text-amber transition-colors inline-flex items-center gap-3"
              >
                Home
              </Link>
            </li>
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setDrawerOpen(false)}
                    className="font-display text-3xl sm:text-4xl text-ink hover:text-amber transition-colors inline-flex items-center gap-3"
                    aria-current={isActive ? "page" : undefined}
                  >
                    {label}
                    {isActive && <span className="w-2 h-2 rounded-full bg-amber inline-block" />}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="pt-6 border-t border-[rgba(15,26,36,0.1)] flex flex-col gap-4">
          <Link
            href={pathname === "/" ? "#connect" : "/speaking#connect"}
            onClick={() => setDrawerOpen(false)}
            className="w-full min-h-[48px] flex items-center justify-center bg-ink text-chalk font-semibold text-base rounded-full hover:bg-amber hover:text-ink transition-colors"
          >
            Connect
          </Link>
          <p className="text-xs text-center text-ink-soft">
            God. Family. Work. Service. Purpose.
          </p>
        </div>
      </div>
    </>
  );
}
