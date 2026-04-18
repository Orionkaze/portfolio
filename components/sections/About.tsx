"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { EXPERIENCE } from "@/lib/constants";
import { useAnimateIn } from "@/lib/useAnimateIn";

export default function About() {
  const { ref, isVisible } = useAnimateIn(0.2);

  return (
    <section id="about" ref={ref} className="relative z-10 section-padding">
      <div className="max-w-4xl mx-auto">
        <div
          className={`flex items-center gap-4 mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <FontAwesomeIcon icon={faLayerGroup} className="w-4 h-4 text-gold-dim" />
          <h2 className="section-title">
            <span className="text-white">RACE </span>
            <span className="text-gold">RECORD</span>
          </h2>
        </div>

        <div className="relative border-l border-gold-dim/20 ml-3 md:ml-6">
          {EXPERIENCE.map((exp, i) => (
            <div
              key={`${exp.title}-${i}`}
              className={`relative pl-8 md:pl-12 pb-12 last:pb-0 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Timeline dot */}
              <div className="absolute top-1.5 -left-[5px] w-2.5 h-2.5 rounded-full bg-black border-2 border-gold-dim shadow-[0_0_10px_rgba(201,168,76,0.3)]" />
              
              <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 mb-3">
                <span className="font-mono text-[0.65rem] text-gold tracking-widest uppercase shrink-0">
                  {exp.year}
                </span>
                <h3 className="font-display text-2xl md:text-3xl text-white tracking-wide">
                  {exp.title}
                </h3>
              </div>
              
              <h4 className="font-mono text-[0.75rem] text-text/80 tracking-wider mb-4">
                @ {exp.org}
              </h4>
              
              <p className="font-mono text-[0.7rem] text-muted leading-relaxed max-w-2xl">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
