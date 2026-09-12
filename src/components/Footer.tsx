import Image from "next/image";
import { person } from "@/resources/content";

export default function Footer() {
  return (
    <footer className="mx-auto mt-6 flex max-w-[1380px] flex-wrap items-center justify-between gap-4 px-2 pb-4 text-sm font-medium text-ink/70">
      <p>&copy; {new Date().getFullYear()} {person.name} — le CodeurFortune</p>
      <p className="flex items-center gap-2">
        Codé avec
        <Image
          src="/favicon.ico"
          alt="Fortune logo"
          width={16}
          height={16}
          className="size-4"
        />
      </p>
      <a href="#top" className="inline-flex items-center gap-1.5 hover:text-ink">
        Retour en haut
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-3.5 -rotate-45">
          <path d="M5 12h14M12 5l7 7" />
        </svg>
      </a>
    </footer>
  );
}
