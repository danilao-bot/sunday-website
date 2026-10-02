import React from "react";
import Link from "next/link";
import { ArrowRight } from "@/components/Icons";

export default function SixRoles() {
  const roles = [
    {
      title: "Businessman",
      desc: "Over two decades in marketing and sales.",
      href: "/story",
      mark: (
        <svg className="w-8 h-8 stroke-ink stroke-2 fill-none" viewBox="0 0 24 24" aria-hidden="true">
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="4" y1="12" x2="16" y2="12" />
          <line x1="4" y1="18" x2="20" y2="18" />
        </svg>
      ),
    },
    {
      title: "Poet",
      desc: "Reflections on life, people, faith and hope.",
      href: "/poetry",
      mark: (
        <svg className="w-8 h-8 stroke-ink stroke-2 fill-none" viewBox="0 0 24 24" aria-hidden="true">
          <line x1="4" y1="7" x2="18" y2="7" />
          <line x1="4" y1="12" x2="22" y2="12" />
          <line x1="4" y1="17" x2="14" y2="17" />
        </svg>
      ),
    },
    {
      title: "Speaker",
      desc: "Motivation, business and resilience, from lived experience.",
      href: "/speaking",
      mark: (
        <svg className="w-8 h-8 stroke-ink stroke-2 fill-none" viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="3" />
          <path d="M7.8 7.8a6 6 0 0 0 0 8.4" />
          <path d="M16.2 7.8a6 6 0 0 1 0 8.4" />
        </svg>
      ),
    },
    {
      title: "Mentor",
      desc: "Helping young people toward education and a better future.",
      href: "/mentorship",
      mark: (
        <svg className="w-8 h-8 stroke-ink stroke-2 fill-none" viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="8" cy="12" r="3" />
          <circle cx="16" cy="12" r="5" />
        </svg>
      ),
    },
    {
      title: "Sportsman",
      desc: "Discipline, competition and the lessons of persistence.",
      href: "/story",
      mark: (
        <svg className="w-8 h-8 stroke-ink stroke-2 fill-none" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 18 C 10 6, 14 6, 20 18" />
          <path d="M7 18 C 11 10, 13 10, 17 18" />
        </svg>
      ),
    },
    {
      title: "Family man",
      desc: "Family is at the centre of his life.",
      href: "/story",
      mark: (
        <svg className="w-8 h-8 stroke-ink stroke-2 fill-none" viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="10" cy="12" r="6" />
          <circle cx="15" cy="12" r="6" />
        </svg>
      ),
    },
  ];

  return (
    <div className="border-t border-[rgba(15,26,36,0.15)]" aria-label="Roles and Pursuits">
      {roles.map(({ title, desc, href, mark }, i) => (
        <details
          key={i}
          className="group border-b border-[rgba(15,26,36,0.15)] relative transition-all"
        >
          <summary className="list-none cursor-pointer py-5 sm:py-6 flex flex-col md:grid md:grid-cols-[48px_1.5fr_2fr_auto] items-start md:items-center gap-3 md:gap-6 group-hover:pl-3 transition-all duration-200">
            <div className="shrink-0">{mark}</div>
            <h4 className="font-display text-2xl sm:text-3xl text-ink font-normal">{title}</h4>
            <p className="text-base text-ink-soft">{desc}</p>
            <Link
              href={href}
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber mt-2 md:mt-0 hover:underline"
            >
              <span>Explore</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </summary>
        </details>
      ))}
    </div>
  );
}
