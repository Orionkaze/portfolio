"use client";

import { TECH_STACK } from "@/lib/constants";

export default function Ticker() {
  const items = [...TECH_STACK, ...TECH_STACK]; // Duplicate for seamless loop

  return (
    <div className="w-full overflow-hidden border-t border-b border-gold-dim/20 py-3 bg-black/50 backdrop-blur-sm">
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className="font-mono text-[0.65rem] text-muted tracking-[0.15em] uppercase mx-6"
          >
            {tech}
            <span className="text-gold-dim mx-4">·</span>
          </span>
        ))}
        {items.map((tech, i) => (
          <span
            key={`${tech}-dup-${i}`}
            className="font-mono text-[0.65rem] text-muted tracking-[0.15em] uppercase mx-6"
          >
            {tech}
            <span className="text-gold-dim mx-4">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
