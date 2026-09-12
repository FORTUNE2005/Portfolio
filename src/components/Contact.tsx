"use client";

import Image from "next/image";
import { person, socials, contactTitle, contactText } from "@/resources/content";

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
          <a href="#top" className="pill px-7 py-4 text-base font-semibold transition hover:bg-ink hover:text-white">
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

function SocialIcon({ platform }: { platform: string }) {
  switch (platform) {
    case "github":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="size-4 transition-transform group-hover:scale-110">
          <path d="M12 .5a11.5 11.5 0 0 0-3.6 22.4c.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.6A11.5 11.5 0 0 0 12 .5Z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="size-4 transition-transform group-hover:scale-110">
          <path d="M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.3V9h3.4v1.6h.1c.5-.9 1.6-1.8 3.4-1.8 3.6 0 4.3 2.4 4.3 5.5v6.2ZM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2Zm1.8 13.1H3.5V9h3.6v11.5ZM22.2 0H1.8C.8 0 0 .8 0 1.7v20.6c0 .9.8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V1.7C24 .8 23.2 0 22.2 0Z" />
        </svg>
      );
    case "email":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4 transition-transform group-hover:scale-110">
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      );
    default:
      return null;
  }
}
