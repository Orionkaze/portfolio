"use client";

import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faTerminal } from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);
  const tagRef = useRef<HTMLDivElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const speedLinesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Name reveal — staggered letter animation
      const firstNameLetters = nameRef.current?.querySelectorAll(".letter-first");
      const lastNameLetters = nameRef.current?.querySelectorAll(".letter-last");

      if (firstNameLetters) {
        gsap.fromTo(
          firstNameLetters,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.05,
            delay: 0.5,
          }
        );
      }

      if (lastNameLetters) {
        gsap.fromTo(
          lastNameLetters,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.05,
            delay: 0.9,
          }
        );
      }

      // Tag line — typewriter
      if (tagRef.current) {
        gsap.fromTo(
          tagRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, delay: 1.6 }
        );
      }

      // Subtext
      if (subtextRef.current) {
        gsap.fromTo(
          subtextRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, delay: 2.0 }
        );
      }

      // CTA buttons
      if (ctaRef.current) {
        gsap.fromTo(
          ctaRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, delay: 2.3 }
        );
      }

      // Speed lines
      const lines = speedLinesRef.current?.querySelectorAll(".speed-line-el");
      if (lines) {
        gsap.fromTo(
          lines,
          { width: "0%", opacity: 0 },
          {
            width: "100%",
            opacity: 0.6,
            duration: 0.8,
            ease: "power2.out",
            stagger: 0.1,
            delay: 1.2,
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleScrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  // Magnetic hover effect
  const handleMagneticMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const distance = Math.sqrt(x * x + y * y);
    const maxDist = 40;

    if (distance < maxDist) {
      gsap.to(btn, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  const handleMagneticLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    gsap.to(e.currentTarget, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "elastic.out(1, 0.3)",
    });
  };

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Speed lines */}
      <div
        ref={speedLinesRef}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 hidden md:flex flex-col gap-6 pointer-events-none"
      >
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="speed-line-el h-px bg-gradient-to-l from-gold/60 to-transparent"
            style={{ width: "0%", opacity: 0 }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 md:py-0">
        {/* Top tag */}
        <div
          ref={tagRef}
          className="flex items-center gap-3 mb-8 opacity-0"
        >
          <FontAwesomeIcon
            icon={faTerminal}
            className="w-3 h-3 text-gold"
          />
          <span className="font-mono text-[0.65rem] text-muted tracking-[0.2em] uppercase">
            Full-Stack Engineer & CTO — Est. 2024
          </span>
        </div>

        {/* Name */}
        <div ref={nameRef} className="mb-8">
          <div className="hero-name text-white overflow-hidden">
            {"AKSHIT".split("").map((letter, i) => (
              <span
                key={`first-${i}`}
                className="letter-first inline-block opacity-0"
              >
                {letter}
              </span>
            ))}
          </div>
          <div className="hero-name text-gold overflow-hidden">
            {"SHUKLA".split("").map((letter, i) => (
              <span
                key={`last-${i}`}
                className="letter-last inline-block opacity-0"
              >
                {letter}
              </span>
            ))}
          </div>
        </div>

        {/* Subtext */}
        <p
          ref={subtextRef}
          className="font-mono text-sm text-text/80 max-w-lg leading-relaxed tracking-wide mb-10 opacity-0"
        >
          Building systems that move fast, hold under pressure, and look like
          nothing else on the grid.
        </p>

        {/* CTAs */}
        <div ref={ctaRef} className="flex flex-wrap gap-4 opacity-0">
          <button
            onClick={() => handleScrollTo("#work")}
            onMouseMove={handleMagneticMove}
            onMouseLeave={handleMagneticLeave}
            className="px-8 py-3 bg-gold text-black font-nav text-xs uppercase tracking-[0.2em] hover:bg-gold-bright transition-colors duration-300"
          >
            View Work →
          </button>
          <button
            onClick={() => handleScrollTo("#contact")}
            onMouseMove={handleMagneticMove}
            onMouseLeave={handleMagneticLeave}
            className="px-8 py-3 border border-gold-dim text-gold font-nav text-xs uppercase tracking-[0.2em] hover:border-gold hover:bg-gold/5 transition-all duration-300"
          >
            Get in Touch →
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-mono text-[0.5rem] text-muted/60 tracking-[0.3em] uppercase">
          Scroll
        </span>
        <FontAwesomeIcon
          icon={faChevronDown}
          className="w-3 h-3 text-gold/60 animate-bounce-down"
        />
      </div>
    </section>
  );
}
