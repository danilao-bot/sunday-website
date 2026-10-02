"use client";

import React, { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

export default function SpeakingPage() {
  const [statusMsg, setStatusMsg] = useState<{
    text: string;
    type: "error" | "success";
  } | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
    const route = (form.elements.namedItem("route") as HTMLSelectElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim();

    if (!name || !email || !message) {
      setStatusMsg({ text: "Please fill in all required fields.", type: "error" });
      return;
    }

    const subject = encodeURIComponent(`[${route || "Enquiry"}] Message from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nRoute: ${route}\n\n${message}`
    );
    setStatusMsg({
      text: "Opening your email client to send message...",
      type: "success",
    });

    setTimeout(() => {
      window.location.href = `mailto:TODO_CONTACT_EMAIL?subject=${subject}&body=${body}`;
    }, 600);
  };

  const topics = [
    "Motivation and personal development",
    "Entrepreneurship and business",
    "Marketing and sales",
    "Personal branding",
    "Resilience and optimism",
    "Leadership and relationships",
    "Family and values",
    "Faith and purpose",
    "The lessons of everyday life",
  ];

  return (
    <div className="bg-chalk text-ink pt-[96px] pb-24" data-ground="chalk">
      {/* Header */}
      <section className="py-12 md:py-20 border-b border-[rgba(15,26,36,0.1)]">
        <div className="max-w-[840px] mx-auto px-4 sm:px-8">
          <ScrollReveal>
            <h1 className="font-display text-[clamp(2.5rem,7vw,5.5rem)] text-ink font-normal leading-tight">
              Speaking
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="font-display text-2xl italic text-ink mt-3">
              &ldquo;Words that encourage. Experiences that teach.&rdquo;
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Topics & Philosophy */}
      <section className="py-16 md:py-24 border-b border-[rgba(15,26,36,0.1)]">
        <div className="max-w-[840px] mx-auto px-4 sm:px-8">
          <ScrollReveal>
            <h2 className="font-display text-2xl sm:text-3xl text-ink font-normal mb-8">
              Speaking Topics
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <ul className="flex flex-col divide-y divide-[rgba(15,26,36,0.1)] border-y border-[rgba(15,26,36,0.1)] list-none p-0 mb-10">
              {topics.map((t, idx) => (
                <li key={idx} className="py-4 text-lg font-medium text-ink">
                  {t}
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className="text-base sm:text-lg text-ink-soft mb-12">
              Practical, personal and deeply optimistic.
            </p>
          </ScrollReveal>

          {/* Speaking Philosophy Callout */}
          <ScrollReveal delay={0.2}>
            <div className="border-l-4 border-amber pl-6 sm:pl-8 py-2">
              <span className="text-xs font-bold uppercase tracking-wider text-amber block mb-2">
                Speaking Philosophy
              </span>
              <p className="font-display text-xl sm:text-2xl md:text-3xl text-ink leading-snug">
                No situation should be allowed to permanently keep a person down.
                <br />
                Life will present challenges.
                <br />
                <strong>But challenges do not have to become conclusions.</strong>
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Connect Form Section */}
      <section className="py-16 md:py-24 bg-chalk" id="connect">
        <div className="max-w-[840px] mx-auto px-4 sm:px-8">
          <ScrollReveal>
            <h2 className="font-display text-3xl sm:text-4xl text-ink font-normal mb-4">
              Connect
            </h2>
            <p className="text-base sm:text-lg text-ink-soft mb-10 leading-relaxed">
              Whether you would like to invite him to speak, discuss his poetry, explore a professional opportunity, connect around business and personal branding, or simply share a conversation, he would be pleased to hear from you.
            </p>
          </ScrollReveal>

          {/* Form */}
          <ScrollReveal delay={0.15}>
            <div className="bg-[#FFFFFF] p-6 sm:p-10 border border-[rgba(15,26,36,0.15)] rounded-2xl shadow-sm">
              {statusMsg && (
                <div
                  className={`p-4 mb-6 rounded-sm text-sm font-medium ${
                    statusMsg.type === "error"
                      ? "bg-red-50 text-red-800"
                      : "bg-emerald-50 text-emerald-800"
                  }`}
                  role="alert"
                >
                  {statusMsg.text}
                </div>
              )}

              <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-semibold text-ink">
                    Your Name <span className="text-amber">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    autoComplete="name"
                    className="w-full px-4 py-3 bg-chalk border border-[rgba(15,26,36,0.2)] rounded-lg focus:border-amber focus:bg-white focus:outline-none text-ink text-base"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-semibold text-ink">
                    Email Address <span className="text-amber">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    autoComplete="email"
                    className="w-full px-4 py-3 bg-chalk border border-[rgba(15,26,36,0.2)] rounded-lg focus:border-amber focus:bg-white focus:outline-none text-ink text-base"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="route" className="text-sm font-semibold text-ink">
                    Area of Enquiry <span className="text-amber">*</span>
                  </label>
                  <select
                    id="route"
                    name="route"
                    required
                    defaultValue=""
                    className="w-full px-4 py-3 bg-chalk border border-[rgba(15,26,36,0.2)] rounded-lg focus:border-amber focus:bg-white focus:outline-none text-ink text-base"
                  >
                    <option value="" disabled>
                      Select an area
                    </option>
                    <option value="Speaking & Events">Speaking &amp; Events</option>
                    <option value="Business & Professional Enquiries">
                      Business &amp; Professional Enquiries
                    </option>
                    <option value="Poetry & Book Enquiries">
                      Poetry &amp; Book Enquiries
                    </option>
                    <option value="Mentorship & Collaboration">
                      Mentorship &amp; Collaboration
                    </option>
                    <option value="General Conversation">General Conversation</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-semibold text-ink">
                    Message <span className="text-amber">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 bg-chalk border border-[rgba(15,26,36,0.2)] rounded-lg focus:border-amber focus:bg-white focus:outline-none text-ink text-base resize-y"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full min-h-[48px] px-8 text-sm font-bold bg-ink text-chalk rounded-full hover:bg-amber hover:text-ink transition-colors mt-2"
                >
                  Send Message
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
