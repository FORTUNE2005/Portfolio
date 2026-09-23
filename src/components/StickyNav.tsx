"use client";

import { useEffect, useState } from "react";

export default function StickyNav() {
  const [visible, setVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = ["projets", "competences", "experience", "contact"];
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { threshold: 0.3, rootMargin: "-80px 0px 0px 0px" }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const navItems = [
    { label: "Projets", href: "#projets", id: "projets" },
    { label: "Competences", href: "#competences", id: "competences" },
    { label: "Experience", href: "#experience", id: "experience" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <div
      className="fixed top-4 left-1/2 z-50 transition-all duration-500"
      style={{
        opacity: visible ? 1 : 0,
        transform: `translateX(-50%) translateY(${visible ? "0" : "-20px"})`,
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <nav className="flex items-center gap-1 rounded-full bg-ink px-3 py-2 shadow-lg">
        <a href="#top" className="flex items-center justify-center size-9 rounded-full bg-ink-soft transition-colors hover:bg-ink-soft/80">
          <svg viewBox="0 0 24 24" fill="none" className="size-4 text-accent">
            <path d="M12 2L2 12h3v8h6v-6h2v6h6v-8h3L12 2z" fill="currentColor" />
          </svg>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? "bg-white/15 text-white"
                    : "text-white/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <ul className="flex items-center gap-1 md:hidden">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                  activeSection === item.id
                    ? "bg-white/15 text-white"
                    : "text-white/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#rdv"
          className="hidden rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5 md:inline-flex"
        >
          RDV
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 inline-block size-3.5">
            <path d="M7 17 17 7M8 7h9v9" />
          </svg>
        </a>
      </nav>
    </div>
  );
}
