"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { person, socials } from "@/resources/content";

const heroBw = (person as Record<string, unknown>).heroImageBw as string | undefined;

export default function Hero() {
  const [clipPath, setClipPath] = useState("circle(0% at 50% 30%)");
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const firstName = "FORTUNE".split("");
  const lastName = "DJIRE".split("");

  return (
    <>
    <section id="top" className="relative px-3 pt-3 md:px-6 md:pt-6">
      <div className="frame relative mx-auto flex h-[calc(100svh-24px)] max-w-[1440px] flex-col overflow-hidden bg-paper md:h-[calc(100svh-48px)]">

        {/* ── Nav ── */}
        <nav className="relative z-40 flex items-center justify-between gap-4 px-5 pt-5 md:px-12 md:pt-9">
          <div className="flex items-center gap-4">
            <span className="pill !hidden px-3.5 py-2 text-[13px] font-medium md:!inline-flex md:text-sm" style={{ opacity: isLoaded ? 1 : 0, transition: "opacity 0.6s 1.6s" }}>
              <span className="size-2.5 rounded-full animate-pulse-dot bg-ok" />
              {person.availabilityLabel}
            </span>
            <span className="pill !inline-flex px-3.5 py-2 text-[13px] font-medium md:!hidden" style={{ opacity: isLoaded ? 1 : 0, transition: "opacity 0.6s 1.6s" }}>
              <span className="size-2.5 rounded-full animate-pulse-dot bg-ok" />
              Disponible
            </span>
          </div>
          <ul className="hidden items-center gap-8 lg:flex xl:gap-14">
            <li><a href="#projets" className="group relative text-[15px] font-medium text-ink">Projets<span className="ml-1.5 text-xs text-muted/70">[3]</span><span className="absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-current transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:origin-left group-hover:scale-x-100" /></a></li>
            <li><a href="#competences" className="group relative text-[15px] font-medium text-ink">Compétences<span className="ml-1.5 text-xs text-muted/70">[4]</span><span className="absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-current transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:origin-left group-hover:scale-x-100" /></a></li>
            <li><a href="#experience" className="group relative text-[15px] font-medium text-ink">Expérience<span className="ml-1.5 text-xs text-muted/70">[4]</span><span className="absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-current transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:origin-left group-hover:scale-x-100" /></a></li>
            <li><a href="#contact" className="group relative text-[15px] font-medium text-ink">Contact<span className="absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-current transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:origin-left group-hover:scale-x-100" /></a></li>
          </ul>
          <a href="#rdv" className="btn-dark !hidden px-5 py-3 text-[15px] font-medium transition-transform hover:-translate-y-0.5 lg:!inline-flex">
            Parlons-en
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="size-4"><path d="M7 17 17 7M8 7h9v9" /></svg>
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="btn-dark size-11 justify-center md:!hidden"
            aria-label="Menu"
          >
            {!menuOpen ? (
              <span className="flex flex-col items-center justify-center gap-[5px]">
                <span className="block h-0.5 w-4 bg-white" />
                <span className="block h-0.5 w-4 bg-white" />
              </span>
            ) : (
              <span className="flex items-center justify-center text-white text-2xl leading-none">×</span>
            )}
          </button>
        </nav>

        {/* ── Mobile layout: name top, portrait center, desc bottom ── */}
        <div className="md:hidden">
          {/* Name */}
          <h1
            className="relative z-10 mt-4 flex justify-center select-none whitespace-nowrap px-2 font-display font-bold leading-[0.88] tracking-[-0.01em]"
            style={{ fontSize: "clamp(2.5rem, 14vw, 5rem)" }}
            aria-label="FORTUNE DJIRE"
          >
            <span className="text-outline">
              {firstName.map((l, i) => (
                <span key={`f-${i}`} className="inline-block overflow-hidden align-bottom">
                  <span className="inline-block" style={{ transform: isLoaded ? "translateY(0)" : "translateY(105%)", transition: `transform 0.6s cubic-bezier(0.16,1,0.3,1) ${0.3 + i * 0.04}s` }}>{l}</span>
                </span>
              ))}
            </span>
            <span className="inline-block w-[0.4em]" />
            <span className="text-ink">
              {lastName.map((l, i) => (
                <span key={`l-${i}`} className="inline-block overflow-hidden align-bottom">
                  <span className="inline-block" style={{ transform: isLoaded ? "translateY(0)" : "translateY(105%)", transition: `transform 0.6s cubic-bezier(0.16,1,0.3,1) ${0.3 + (firstName.length + i) * 0.04}s` }}>{l}</span>
                </span>
              ))}
            </span>
          </h1>

          {/* Portrait centered */}
          <div
            className="relative z-10 mx-auto mt-2 h-[55vh] w-[min(70vw,280px)]"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.8s cubic-bezier(0.16,1,0.3,1) 0.6s",
            }}
          >
            <Image src={heroBw || person.heroImage} alt={`Portrait de ${person.name}`} fill className="object-contain object-top" sizes="280px" priority />
            <div className="absolute inset-0 transition-[clip-path] duration-700 ease-out" style={{ clipPath }}>
              <Image src={person.heroImage} alt="" fill className="object-contain object-top" sizes="280px" priority />
            </div>
          </div>

          {/* Title at bottom */}
          <div
            className="absolute bottom-20 left-5 right-5 z-30"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.8s cubic-bezier(0.16,1,0.3,1) 1.2s",
            }}
          >
            <h2 className="text-[1.1rem] font-bold leading-tight tracking-tight">
              {person.role}
            </h2>
          </div>
        </div>

        {/* ── Desktop layout: name centered, portrait right, desc bottom-left ── */}
        <div className="hidden md:block">
          {/* Name centered */}
          <h1
            className="absolute inset-0 z-10 flex items-center justify-center select-none whitespace-nowrap px-2 font-display font-bold leading-[0.88] tracking-[-0.01em]"
            style={{ fontSize: "clamp(3rem, 11vw, 10rem)" }}
            aria-label="FORTUNE DJIRE"
          >
            <span className="text-outline">
              {firstName.map((l, i) => (
                <span key={`f-${i}`} className="inline-block overflow-hidden align-bottom">
                  <span className="inline-block" style={{ transform: isLoaded ? "translateY(0)" : "translateY(105%)", transition: `transform 0.6s cubic-bezier(0.16,1,0.3,1) ${0.3 + i * 0.04}s` }}>{l}</span>
                </span>
              ))}
            </span>
            <span className="inline-block w-[0.6em]" />
            <span className="text-ink">
              {lastName.map((l, i) => (
                <span key={`l-${i}`} className="inline-block overflow-hidden align-bottom">
                  <span className="inline-block" style={{ transform: isLoaded ? "translateY(0)" : "translateY(105%)", transition: `transform 0.6s cubic-bezier(0.16,1,0.3,1) ${0.3 + (firstName.length + i) * 0.04}s` }}>{l}</span>
                </span>
              ))}
            </span>
          </h1>

          {/* Portrait */}
          <div
            className="pointer-events-none absolute z-20 md:pointer-events-auto"
            style={{
              left: "61%",
              top: "calc(50% - 5vw)",
              width: "min(38vw, 320px)",
              height: "85vh",
              transform: isLoaded
                ? `translateX(-50%) ${isHovered ? `translate(${mousePos.x * 15}px, ${mousePos.y * 15 - 12}px)` : ""}`
                : "translateX(-50%) translateY(100vh)",
              transition: isHovered ? "transform 0.15s ease-out" : "transform 1s cubic-bezier(0.16,1,0.3,1) 0.8s",
            }}
            onMouseEnter={() => {
              setClipPath("circle(100% at 50% 30%)");
              setIsHovered(true);
            }}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = (e.clientX - rect.left) / rect.width - 0.5;
              const y = (e.clientY - rect.top) / rect.height - 0.5;
              setMousePos({ x, y });
            }}
            onMouseLeave={() => {
              setClipPath("circle(0% at 50% 30%)");
              setIsHovered(false);
              setMousePos({ x: 0, y: 0 });
            }}
          >
            <div className="relative h-full w-[min(22vw,210px)] mx-auto">
              <Image src={heroBw || person.heroImage} alt={`Portrait de ${person.name}`} fill className="object-contain object-top" sizes="210px" priority />
              <div className="absolute inset-0 transition-[clip-path] duration-700 ease-out" style={{ clipPath }}>
                <Image src={person.heroImage} alt="" fill className="object-contain object-top" sizes="210px" priority />
              </div>
            </div>
          </div>

          {/* Description bottom-left */}
          <div
            className="absolute bottom-2 left-5 z-30 w-[min(55%,520px)] md:left-12 lg:left-24"
            style={{
              top: "calc(50% + 4vw)",
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.8s cubic-bezier(0.16,1,0.3,1) 1.2s",
            }}
          >
            <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-muted">
              D.A.F le CodeurFortune
            </p>
            <h2 className="text-[1.1rem] font-bold leading-tight tracking-tight md:text-[1.5rem]">
              {person.role}
            </h2>
            <p className="mt-3 text-[14px] leading-relaxed text-ink/70 md:text-[15px]">
              {person.description}
            </p>
            <div className="mt-5 md:mt-6">
              <a href="#contact" className="btn-dark px-6 py-3.5 text-[15px] font-medium">
                Collaborons
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="size-4"><path d="M7 17 17 7M8 7h9v9" /></svg>
              </a>
            </div>
          </div>

          {/* Social links bottom-right */}
          <div className="absolute bottom-4 right-5 z-30 flex flex-col items-end gap-3 md:right-12 lg:right-24 lg:gap-5">
            {socials.filter((s) => s.showInHero).map((social, i) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="pill group px-3.5 py-2.5 text-sm font-semibold transition-colors hover:border-ink hover:bg-ink hover:text-white md:px-5 md:py-3 md:text-[15px]"
                style={{ opacity: isLoaded ? 1 : 0, transform: isLoaded ? "translateX(0)" : "translateX(40px)", transition: `all 0.6s cubic-bezier(0.16,1,0.3,1) ${1.4 + i * 0.1}s` }}
              >
                <SocialIcon platform={social.platform} />
                {social.label}
              </a>
            ))}
          </div>
        </div>

        {/* ── Mobile social bar — bottom ── */}
        <div className="absolute bottom-4 left-0 right-0 z-30 flex items-center justify-center gap-2 md:hidden">
          <a href="#contact" className="btn-dark px-5 py-3 text-sm font-medium">
            Collaborons
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="size-3.5"><path d="M7 17 17 7M8 7h9v9" /></svg>
          </a>
          {socials.filter((s) => s.showInHero).map((social) => (
            <a key={social.platform} href={social.url} target="_blank" rel="noreferrer" className="pill size-11 justify-center">
              <SocialIcon platform={social.platform} />
            </a>
          ))}
        </div>

        {/* ── Mobile menu overlay — card inside frame ── */}
        {menuOpen && (
          <div className="absolute left-3 right-3 z-[100] flex flex-col rounded-3xl bg-ink/95 px-5 py-6 backdrop-blur-md md:hidden" style={{ top: "25%", height: "45%" }}>
            <div className="flex flex-1 flex-col justify-center gap-5">
              {[
                { label: "Projets", href: "#projets", count: "[3]" },
                { label: "Compétences", href: "#competences", count: "[4]" },
                { label: "Expérience", href: "#experience", count: "[4]" },
                { label: "Contact", href: "#contact" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between text-xl font-bold text-white transition-colors hover:text-white/70"
                >
                  <span>{item.label}</span>
                  {item.count && <span className="text-sm text-white/40">{item.count}</span>}
                </a>
              ))}
            </div>
            <div className="mt-4">
              <a
                href="#rdv"
                onClick={() => setMenuOpen(false)}
                className="block rounded-full bg-white px-6 py-3.5 text-center text-base font-semibold text-ink transition-transform hover:-translate-y-0.5"
              >
                Réserver un appel
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="ml-2 inline-block size-4"><path d="M7 17 17 7M8 7h9v9" /></svg>
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
    </>
  );
}

function SocialIcon({ platform }: { platform: string }) {
  switch (platform) {
    case "github":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="size-4 transition-transform duration-500 group-hover:rotate-[-10deg] group-hover:scale-110">
          <path d="M12 .5a11.5 11.5 0 0 0-3.6 22.4c.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.6A11.5 11.5 0 0 0 12 .5Z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="size-4 transition-transform duration-500 group-hover:rotate-[-10deg] group-hover:scale-110">
          <path d="M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.3V9h3.4v1.6h.1c.5-.9 1.6-1.8 3.4-1.8 3.6 0 4.3 2.4 4.3 5.5v6.2ZM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2Zm1.8 13.1H3.5V9h3.6v11.5ZM22.2 0H1.8C.8 0 0 .8 0 1.7v20.6c0 .9.8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V1.7C24 .8 23.2 0 22.2 0Z" />
        </svg>
      );
    case "email":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4 transition-transform duration-500 group-hover:rotate-[-10deg] group-hover:scale-110">
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      );
    default:
      return null;
  }
}
