"use client";

import Image from "next/image";
import { stack } from "@/resources/content";

export default function Marquee() {
  return (
    <div className="relative my-10 -rotate-[1.2deg] overflow-hidden bg-ink py-4 text-white shadow-2xl md:my-16 md:py-5">
      <div className="flex w-max animate-marquee [--marquee-duration:45s] hover:[animation-play-state:paused]">
        {/* Group 1 */}
        <div className="flex shrink-0 items-center">
          {stack.map((item, i) => (
            <span key={`g1-${i}`} className="flex items-center gap-8 px-4 font-display text-2xl font-semibold uppercase tracking-tight md:text-4xl">
              {item}
              <Image
                src="/favicon.ico"
                alt="Fortune logo"
                width={24}
                height={24}
                className="size-6 md:size-7"
              />
            </span>
          ))}
        </div>
        {/* Group 2 (duplicate for seamless loop) */}
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {stack.map((item, i) => (
            <span key={`g2-${i}`} className="flex items-center gap-8 px-4 font-display text-2xl font-semibold uppercase tracking-tight md:text-4xl">
              {item}
              <Image
                src="/favicon.ico"
                alt="Fortune logo"
                width={24}
                height={24}
                className="size-6 md:size-7"
              />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
