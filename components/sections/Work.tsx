"use client";

import { useRef } from "react";
import gsap from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faCode,
  faFlagCheckered,
} from "@fortawesome/free-solid-svg-icons";
import { PROJECTS } from "@/lib/constants";
import { useAnimateIn } from "@/lib/useAnimateIn";

function ProjectCard({
  project,
  index,
}: {
  project: (typeof PROJECTS)[number];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    gsap.to(cardRef.current, {
      rotateX: -y * 6,
      rotateY: x * 6,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    gsap.to(cardRef.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
      ease: "elastic.out(1, 0.5)",
    });
  };

  return (
    <div
      ref={cardRef}
      className="card-panel p-6 md:p-8 relative group"
      style={{
        perspective: "1000px",
        animationDelay: `${index * 150}ms`,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      data-hover
    >
      {/* Large dimmed number */}
      <span className="absolute top-4 right-6 font-display text-6xl md:text-8xl text-white/[0.03] leading-none select-none">
        {project.number}
      </span>

      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <h3 className="font-display text-2xl md:text-3xl text-white group-hover:text-gold transition-colors duration-300">
            {project.name}
          </h3>
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            className="w-3 h-3 text-muted group-hover:text-gold transition-colors duration-300 mt-2"
          />
        </div>

        <p className="font-mono text-[0.7rem] text-text/70 leading-relaxed tracking-wide mb-6">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="flex items-center gap-1.5 px-3 py-1 border border-gold-dim/30 font-mono text-[0.55rem] text-gold-dim tracking-wider uppercase hover:border-gold/50 hover:text-gold transition-all duration-300"
            >
              <FontAwesomeIcon icon={faCode} className="w-2 h-2" />
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Work() {
  const { ref, isVisible } = useAnimateIn(0.15);

  return (
    <section id="work" ref={ref} className="relative z-10 section-padding">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div
          className={`flex items-center gap-4 mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <FontAwesomeIcon
            icon={faFlagCheckered}
            className="w-4 h-4 text-gold-dim"
          />
          <h2 className="section-title">
            <span className="text-white">SELECTED </span>
            <span className="text-gold">WORK</span>
          </h2>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {PROJECTS.map((project, i) => (
            <div
              key={project.number}
              className={`transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <ProjectCard project={project} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
