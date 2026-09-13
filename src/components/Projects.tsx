"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { projects } from "@/resources/content";

type Filter = "all" | "real" | "exploration";

export default function Projects() {
  const [filter, setFilter] = useState<Filter>("all");

  // Écouter les changements de hash dans l'URL pour filtrer automatiquement
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === "#projets-exploration") {
        setFilter("exploration");
        // Faire défiler vers la section projets
        setTimeout(() => {
          document.getElementById("projets")?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else if (hash === "#projets-real") {
        setFilter("real");
        setTimeout(() => {
          document.getElementById("projets")?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    };

    // Vérifier le hash au chargement
    handleHashChange();
    
    // Écouter les changements de hash
    window.addEventListener("hashchange", handleHashChange);
    
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const filteredProjects = projects.filter((p) => {
    if (filter === "all") return true;
    return p.category === filter;
  });

  return (
    <section id="projets" className="relative px-3 md:px-6">
      <div className="frame relative mx-auto max-w-[1280px] overflow-hidden bg-paper px-5 pb-16 pt-14 md:px-16 md:pb-24 md:pt-20">
        {/* Ghost title */}
        <p aria-hidden="true" className="ghost-title absolute inset-x-0 -top-4 text-center text-[clamp(4rem,15vw,12rem)] text-ink/[0.045] md:-top-10">
          Portfolio
        </p>

        {/* Section title */}
        <h2 className="section-title relative text-[clamp(2.4rem,6.5vw,5rem)]">
          <span className="inline-block overflow-hidden pb-[0.08em] align-bottom">
            <span className="inline-block">/PROJETS&nbsp;</span>
          </span>
          <span className="inline-block overflow-hidden pb-[0.08em] align-bottom">
            <span className="inline-block">CHOISIS</span>
          </span>
        </h2>

        {/* Filters */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 md:mt-20">
          <div className="flex gap-1 rounded-full bg-mist p-1">
            {[
              { key: "all", label: "Tous" },
              { key: "real", label: "Projets réels" },
              { key: "exploration", label: "Explorations" },
            ].map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key as Filter)}
                className={`relative rounded-full px-4 py-2 text-sm font-semibold transition-colors md:text-[15px] ${
                  filter === f.key
                    ? "text-white"
                    : "text-ink/70 hover:text-ink"
                }`}
              >
                {filter === f.key && (
                  <span className="absolute inset-0 rounded-full bg-ink" />
                )}
                <span className="relative">{f.label}</span>
              </button>
            ))}
          </div>
          <button className="pill px-5 py-3 text-[15px] font-semibold transition hover:bg-ink hover:text-white">
            Voir tout ({projects.length})
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="size-4 transition-transform">
              <path d="M7 17 17 7M8 7h9v9" />
            </svg>
          </button>
        </div>

        {/* Grid */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 md:gap-10">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group rounded-2xl bg-mist/60 p-2.5 shadow-[0_20px_50px_-30px_rgb(0_0_0/0.3)] md:p-3"
            >
              <a 
                href={project.link} 
                target={project.category === "real" ? "_blank" : "_self"} 
                rel={project.category === "real" ? "noreferrer" : undefined}
                onClick={project.category !== "real" ? (e) => { e.preventDefault(); document.querySelector("#projets")?.scrollIntoView({ behavior: "smooth" }); } : undefined}
                className="block"
              >
                <div className="relative aspect-[3/2] overflow-hidden rounded-xl bg-ink">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    quality={100}
                    className="object-cover transition-transform duration-[1.2s] ease-[var(--ease-out-expo)] group-hover:scale-[1.06]"
                    sizes="(max-width: 768px) 100vw, 600px"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-ink">
                    {project.category === "real" ? "Projet réel" : "Exploration"}
                  </span>
                  <span className="absolute left-1/2 top-1/2 grid size-16 -translate-x-1/2 -translate-y-1/2 scale-0 place-items-center rounded-full bg-white text-ink shadow-xl transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:scale-100 md:hidden">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="size-6">
                      <path d="M7 17 17 7M8 7h9v9" />
                    </svg>
                  </span>
                </div>
                <div className="px-2 pb-3 pt-5 md:px-3">
                  <h3 className="text-xl font-medium leading-snug tracking-tight md:text-[1.6rem]">
                    {project.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-[15px] text-muted">
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="pill px-4 py-1.5 text-sm font-medium text-ink/80">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
