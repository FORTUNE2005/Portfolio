"use client";

import Image from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  category: string;
  image: string;
  link: string;
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noreferrer"
      className="block group"
    >
      <div className="relative aspect-[3/2] overflow-hidden rounded-xl bg-ink">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.06]"
          sizes="(max-width: 768px) 100vw, 600px"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-ink">
          {project.category === "real" ? "Projet réel" : "Exploration"}
        </span>
      </div>
      <div className="px-2 pb-3 pt-5">
        <h3 className="text-xl font-medium leading-snug tracking-tight md:text-[1.6rem]">
          {project.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-[15px] text-muted">
          {project.description}
        </p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-ink/5 px-2.5 py-1 text-xs font-medium text-ink/70"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}
