"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const greetings = ["Olá", "Salut", "Hello", "Hola", "Bonjour", "Ciao"];

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const [greetIndex, setGreetIndex] = useState(0);

  useEffect(() => {
    const duration = 500;
    const interval = 16;
    const steps = duration / interval;
    const increment = 100 / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= 100) {
        current = 100;
        clearInterval(timer);
        setTimeout(() => setVisible(false), 400);
      }
      setProgress(Math.floor(current));
    }, interval);

    const greetTimer = setInterval(() => {
      setGreetIndex((i) => (i + 1) % greetings.length);
    }, 120);

    return () => {
      clearInterval(timer);
      clearInterval(greetTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#1a1a1a]"
      style={{
        opacity: progress >= 100 ? 0 : 1,
        transition: "opacity 0.6s ease-in-out",
      }}
    >
      {/* Centre content */}
      <div className="flex flex-col items-center">
        <Image
          src="/favicon.ico"
          alt="Logo"
          width={48}
          height={48}
          className="mb-4"
        />

        {/* Roulette container */}
        <div className="relative h-[44px] w-[160px] overflow-hidden">
          <div
            className="transition-transform duration-100 ease-out"
            style={{ transform: `translateY(-${greetIndex * 44}px)` }}
          >
            {greetings.map((g, i) => (
              <h1
                key={i}
                className="flex h-[44px] items-center justify-center text-3xl font-bold text-white md:text-4xl"
              >
                {g}
              </h1>
            ))}
          </div>
        </div>

        <p className="mt-2 text-sm text-white/40">Codeur</p>
      </div>

      {/* Compteur en bas à droite */}
      <span className="absolute bottom-4 right-8 font-mono text-[120px] font-bold leading-none text-white/[0.07] tabular-nums md:text-[180px]">
        {String(progress).padStart(3, "0")}
      </span>
    </div>
  );
}
