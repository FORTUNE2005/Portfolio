"use client";

import Image from "next/image";
import { person, socials, contactTitle, contactText } from "@/resources/content";
import SocialIcon from "./SocialIcon";

export default function Contact() {
  return (
    <section id="contact" className="relative px-3 pb-6 pt-10 md:px-6">
      <div className="mx-auto max-w-[1380px] rounded-[14px] border border-white/50 bg-white/55 px-5 py-20 text-center shadow-[0_40px_100px_-40px_rgb(0_0_0/0.35)] backdrop-blur-xl md:px-16 md:py-32">
        {/* Availability badge */}
        <span className="pill px-3.5 py-2 text-[13px] font-medium md:text-sm">
          <span className="size-2.5 rounded-full animate-pulse-dot bg-ok" />
          <span className="max-sm:hidden">{person.availabilityLabel}</span>
          <span className="sm:hidden">Disponible</span>
        </span>

        {/* Title */}
        <h2 className="mx-auto mt-8 max-w-4xl text-[clamp(2.4rem,7vw,5.5rem)] font-bold uppercase leading-[0.95] tracking-[-0.04em]">
          {contactTitle}
        </h2>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink/70 md:text-xl">
          {contactText}
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a href={`mailto:${person.email}`} className="btn-dark px-7 py-4 text-base font-semibold">
            Me contacter
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="size-4">
              <path d="M7 17 17 7M8 7h9v9" />
            </svg>
          </a>
          <a href="#rdv" className="pill px-7 py-4 text-base font-semibold transition hover:bg-ink hover:text-white">
            Réserver un appel
          </a>
        </div>

        {/* Social links */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-3 md:mt-24 md:gap-8">
          {/* Avatar badge */}
          <span className="inline-flex items-center gap-3 rounded-full bg-ink py-1.5 pl-1.5 pr-5 text-[15px] font-semibold text-white shadow-xl">
            <span className="relative size-9 overflow-hidden rounded-full">
              <Image src={person.avatar} alt={person.name} fill className="object-cover" sizes="36px" />
            </span>
            {person.name}
          </span>

          {/* Social pills */}
          {socials.map((social) => (
            <a
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              className="pill group px-5 py-3 text-[15px] font-semibold transition hover:-translate-y-1 hover:border-ink"
            >
              <SocialIcon platform={social.platform} />
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
