// ═══════════════════════════════════════════════
// Color Palette — PRD §10
// ═══════════════════════════════════════════════
export const COLORS = {
  black: "#0A0A0A",
  dark: "#111111",
  panel: "#161616",
  gold: "#C9A84C",
  goldBright: "#F0C040",
  goldDim: "#7A6128",
  text: "#E8E0CC",
  muted: "#6B6355",
  white: "#FFFFFF",
} as const;

// ═══════════════════════════════════════════════
// 3D Scene — Track Geometry Parameters — PRD §9.3
// ═══════════════════════════════════════════════
export const TRACK = {
  roadWidth: 20,
  roadLength: 200,
  roadColor: "#1a1a1a",
  roadRoughness: 0.9,
  roadMetalness: 0.1,

  laneMarkingColor: "#FFFFFF",
  laneMarkingOpacity: 0.7,
  laneMarkingSpacing: 8,

  kerbWidth: 0.5,
  kerbHeight: 0.1,
  kerbRed: "#CC0000",
  kerbWhite: "#FFFFFF",

  armcoColor: "#C0C0C0",
  armcoMetalness: 0.8,
  armcoRoughness: 0.3,
  armcoWidth: 0.4,
  armcoHeight: 1,

  poleColor: "#888888",
  poleHeight: 12,
  polesPerSide: 8,
} as const;

// ═══════════════════════════════════════════════
// 3D Scene — Lighting — PRD §9.2
// ═══════════════════════════════════════════════
export const LIGHTING = {
  ambient: { intensity: 0.5, color: "#0a0a0a" },
  hemisphere: { skyColor: "#1a1a2e", groundColor: "#0a0a0a", intensity: 1.0 },
  spotKey: { color: "#FFD700", intensity: 500, angle: 0.3, penumbra: 0.5 },
  spotRim: { color: "#4466FF", intensity: 400 },
  pointFront: { color: "#FF8800", intensity: 200 },
  floodlight: { color: "#FFF5E0", intensity: 800 },
} as const;

// ═══════════════════════════════════════════════
// 3D Scene — Camera — PRD §9.1
// ═══════════════════════════════════════════════
export const CAMERA = {
  fov: 60,
  initialPosition: [0, 2.5, 8] as [number, number, number],
  lookAt: [0, 1, 0] as [number, number, number],
  scrollZRange: [8, -5] as [number, number],
  driftAmplitude: 0.3,
} as const;

// ═══════════════════════════════════════════════
// Car Scroll Behavior — PRD §9.5
// ═══════════════════════════════════════════════
export const CAR_SCROLL = {
  zStart: 0,
  zEnd: 120,
  rotXStart: 0,
  rotXEnd: -0.04,
  introFrom: -80,
  introTo: -20,
  introDuration: 2,
  idleSwayAmplitude: 0.02,
  idleSwayPeriod: 2,
} as const;

// ═══════════════════════════════════════════════
// Post-Processing — PRD §9.4
// ═══════════════════════════════════════════════
export const POST_PROCESSING = {
  bloom: {
    luminanceThreshold: 0.2,
    intensityStart: 0.8,
    intensityEnd: 1.4,
  },
  vignette: { offset: 0.3, darkness: 0.8 },
  chromaticAberration: { offset: [0.001, 0.001] as [number, number] },
} as const;

// ═══════════════════════════════════════════════
// Fog — PRD §9.3
// ═══════════════════════════════════════════════
export const FOG = {
  color: "#0a0a0a",
  density: 0.015,
} as const;

// ═══════════════════════════════════════════════
// Content Data — PRD §8
// ═══════════════════════════════════════════════

export const STATS = [
  { value: 2, suffix: "+", label: "Years on Track" },
  { value: 3, suffix: "+", label: "Projects Shipped" },
  { value: 500, suffix: "+", label: "Students Reached" },
  { value: 99, suffix: "%", label: "Uptime" },
] as const;

export const PROJECTS = [
  {
    number: "01",
    name: "LoyaltyPro",
    description:
      "Dual-interface customer retention web app. Cross-browser, mobile-first, SEO optimized.",
    stack: ["Next.js", "Tailwind", "HTML5"],
  },
  {
    number: "02",
    name: "Regret Engine",
    description:
      "Dark-humor decision simulator with interactive outcome timelines and dynamic mood graphs.",
    stack: ["HTML5", "CSS3", "JS", "GA4"],
  },
  {
    number: "03",
    name: "Frontend UI AI Generator",
    description:
      "Generative AI tool: NL prompts → reusable React components. 15+ components, 25% faster prototyping.",
    stack: ["React", "AI/ML", "TypeScript"],
  },
  {
    number: "04",
    name: "Arcavon Platform",
    description:
      "Game-tech platform with thousands of monthly visits, ~99% uptime, modular frontend architecture.",
    stack: ["React", "Node.js", "Git", "Firebase"],
  },
] as const;

export const SKILLS = [
  { name: "React / Next.js", percent: 92 },
  { name: "JavaScript / TypeScript", percent: 90 },
  { name: "HTML5 / CSS3 / Tailwind", percent: 95 },
  { name: "Node.js / Express", percent: 78 },
  { name: "Python", percent: 75 },
  { name: "Firebase / REST APIs", percent: 80 },
  { name: "Git / GitHub", percent: 88 },
  { name: "Figma / UI Design", percent: 72 },
] as const;

export const EXPERIENCE = [
  {
    year: "2026–Now",
    title: "GeeksforGeeks Campus Mantri",
    org: "SDGI Global University",
    description:
      "Leading community of 500+ students, organizing hackathons & coding contests",
  },
  {
    year: "2025–Now",
    title: "CTO & Full-Stack Dev",
    org: "Arcavon (Student Startup)",
    description:
      "Leading technical vision, deployed production platform, ~99% uptime",
  },
  {
    year: "2025",
    title: "Google Student Ambassador",
    org: "SDGI",
    description:
      "Organized 5+ workshops, Cloud Study Jams for 500+ students",
  },
  {
    year: "2024–Now",
    title: "B.Tech (Hons), CS - AI/ML",
    org: "SDGI Global University",
    description: "DSA, ML, DBMS, Web Architecture",
  },
] as const;

export const SOCIAL_LINKS = {
  email: "akshitshukla.knp@gmail.com",
  linkedin: "https://linkedin.com/in/akshit-shukla-529707324",
  github: "https://github.com/Orionkaze",
  website: "https://www.arcavon.in",
} as const;

export const TECH_STACK = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Python",
  "Firebase",
  "AWS",
  "Tailwind",
  "Figma",
] as const;

// ═══════════════════════════════════════════════
// Navigation
// ═══════════════════════════════════════════════
export const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;
