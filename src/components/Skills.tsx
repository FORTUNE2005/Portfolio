"use client";

import { useState } from "react";
import { skills } from "@/resources/content";

export default function Skills() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="competences" className="relative mx-auto max-w-[1280px] px-5 py-24 md:px-16 md:py-36">
      {/* Section title */}
      <h2 className="section-title text-[clamp(2.4rem,6.5vw,5rem)] drop-shadow-[0_2px_20px_rgb(255_255_255/0.6)]">
        <span className="inline-block overflow-hidden pb-[0.08em] align-bottom">
          <span className="inline-block">/COMPÉTENCES</span>
        </span>
      </h2>

      {/* Accordion items */}
      <div className="mt-12 space-y-4 md:mt-20">
        {skills.map((category, index) => (
          <div key={category.category} className="relative cursor-pointer" onClick={() => setOpenIndex(openIndex === index ? null : index)}>
            {openIndex === index ? (
              <div className="relative rounded-lg bg-ink-soft px-5 py-9 text-white shadow-[0_30px_60px_-25px_rgb(0_0_0/0.6)] md:px-7 md:py-14">
                <div className="flex items-center justify-between gap-6">
                  <div className="min-w-0">
                    <h3 className="section-title text-[clamp(1.9rem,5.4vw,4.2rem)] lg:max-w-[56%]">
                      {category.category}
                    </h3>
                    <div className="overflow-hidden pt-5">
                      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {category.items.map((skill) => (
                          <div key={skill.name} className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2">
                            <span className="text-sm font-medium">{skill.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <span className="shrink-0">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="size-9 md:size-11">
                      <path d="M12 4v16M4 12h16" />
                    </svg>
                  </span>
                </div>
              </div>
            ) : (
              <div className="relative border-b border-ink/15 px-5 py-8 md:px-7 md:py-11">
                <div className="flex items-center justify-between gap-6">
                  <div className="min-w-0">
                    <h3 className="section-title text-[clamp(1.9rem,5.4vw,4.2rem)]">
                      {category.category}
                    </h3>
                  </div>
                  <span className="shrink-0">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="size-9 md:size-11">
                      <path d="M5 12h14" />
                    </svg>
                  </span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
