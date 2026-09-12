"use client";

import { experiences } from "@/resources/content";

export default function Experience() {
  return (
    <section id="experience" className="relative px-3 md:px-6">
      <div className="frame relative mx-auto max-w-[1280px] overflow-hidden bg-ink-soft px-5 pb-16 pt-16 text-white md:px-16 md:pb-24 md:pt-24">
        {/* Ghost title */}
        <p aria-hidden="true" className="ghost-title absolute left-6 top-8 text-[clamp(4rem,14vw,11.5rem)] text-white/[0.035] md:left-16">
          Expérience
        </p>

        {/* Header */}
        <div className="relative flex flex-wrap items-end justify-between gap-4">
          <h2 className="section-title text-[clamp(2.4rem,6.5vw,5rem)]">
            <span className="inline-block overflow-hidden pb-[0.08em] align-bottom">
              <span className="inline-block">/EXPÉRIENCE</span>
            </span>
          </h2>
          <p className="text-lg text-white/80 md:text-2xl">Étudiant</p>
        </div>

        {/* Experience list */}
        <ul className="relative mt-12 md:mt-16">
          {experiences.map((exp, i) => (
            <li
              key={i}
              className="group flex flex-col gap-2 border-b border-white/10 px-2 py-7 transition-colors duration-500 hover:bg-white/[0.03] md:flex-row md:items-center md:justify-between md:px-4 md:py-9"
            >
              <div className="transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:translate-x-3">
                <p className="text-xl font-medium md:text-2xl">{exp.company}</p>
                <p className="mt-1.5 text-lg text-white/55 md:text-xl">{exp.role}</p>
                {exp.description && (
                  <p className="mt-1 text-sm text-white/40">{exp.description}</p>
                )}
              </div>
              <p className="text-base text-white/55 transition-colors group-hover:text-white md:text-xl">
                {exp.period}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
