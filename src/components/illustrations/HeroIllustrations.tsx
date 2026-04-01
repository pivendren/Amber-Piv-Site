import React from "react";

const c = {
  paper: "#e6dece",
  paperLight: "#f0ead8",
  olive: "#6b7a4a",
  sage: "#8a9a6a",
  forest: "#3a5a40",
  darkGreen: "#2a3a22",
  khaki: "#b5a882",
  tan: "#c8b890",
  brown: "#7a6a4a",
  darkBrown: "#4a3a2a",
  rust: "#a06050",
  brick: "#8a4030",
  dustyRose: "#b07060",
  cream: "#f5f0e0",
  water: "#7a9aaa",
  waterLight: "#a0bac4",
  outline: "#5a4a3a",
};

// Running / walking figure
const Runner = ({ x, y, color, scale = 1, lean = false }: { x: number; y: number; color: string; scale?: number; lean?: boolean }) => (
  <g transform={`translate(${x}, ${y}) scale(${scale})`}>
    <circle cx="0" cy="-30" r="5.5" fill={color} stroke={c.outline} strokeWidth="0.8" />
    <path d={lean ? "M-5 -24 L-8 -2 L6 -2 L3 -24 Z" : "M-5 -24 L-7 0 L7 0 L5 -24 Z"} fill={color} stroke={c.outline} strokeWidth="0.8" opacity="0.8" />
    {/* Legs in stride */}
    <path d={lean ? "M-6 -2 L-14 16 M4 -2 L12 14" : "M-7 0 L-12 18 M7 0 L12 18"} stroke={c.outline} strokeWidth="1.5" strokeLinecap="round" />
    {/* Arms */}
    <path d={lean ? "M-4 -18 L-14 -8 M3 -18 L10 -10" : "M-4 -18 L-12 -6 M4 -18 L12 -6"} stroke={c.outline} strokeWidth="1" strokeLinecap="round" />
  </g>
);

// Fynbos bush
const Fynbos = ({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) => (
  <g transform={`translate(${x}, ${y}) scale(${scale})`}>
    <ellipse cx="0" cy="-10" rx="22" ry="16" fill={c.sage} stroke={c.outline} strokeWidth="1" />
    <ellipse cx="-12" cy="-8" rx="14" ry="12" fill={c.olive} stroke={c.outline} strokeWidth="0.8" />
    <ellipse cx="14" cy="-6" rx="12" ry="10" fill={c.forest} stroke={c.outline} strokeWidth="0.8" opacity="0.8" />
    <path d="M-6 -18 Q-2 -26 2 -20" stroke={c.darkGreen} strokeWidth="1.2" fill="none" strokeLinecap="round" />
    <path d="M8 -16 Q12 -24 14 -18" stroke={c.darkGreen} strokeWidth="1.2" fill="none" strokeLinecap="round" />
  </g>
);

// Protea flower
const Protea = ({ x, y, scale = 1, flip = false }: { x: number; y: number; scale?: number; flip?: boolean }) => (
  <g transform={`translate(${x}, ${y}) scale(${flip ? -scale : scale}, ${scale})`}>
    <path d="M0 0 L0 -40" stroke={c.olive} strokeWidth="3" strokeLinecap="round" />
    <path d="M0 -15 Q15 -25 20 -18" stroke={c.sage} strokeWidth="2.5" strokeLinecap="round" fill="none" />
    <path d="M0 -25 Q-12 -32 -18 -26" stroke={c.sage} strokeWidth="2.5" strokeLinecap="round" fill="none" />
    <ellipse cx="0" cy="-48" rx="12" ry="14" fill={c.dustyRose} stroke={c.outline} strokeWidth="1.2" />
    <path d="M-8 -52 Q-16 -68 -4 -62" fill={c.rust} stroke={c.outline} strokeWidth="0.8" />
    <path d="M0 -54 Q0 -72 6 -64" fill={c.brick} stroke={c.outline} strokeWidth="0.8" />
    <path d="M8 -52 Q16 -68 4 -62" fill={c.rust} stroke={c.outline} strokeWidth="0.8" />
    <ellipse cx="0" cy="-48" rx="5" ry="6" fill={c.tan} stroke={c.outline} strokeWidth="0.6" />
  </g>
);

/* ─── Hiking / Green Point Parkrun ───────────────────────────────────── */

export const HikingIllustration = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 600 800" className={`w-full h-full ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="600" height="800" fill={c.paper} />

    {/* Morning sky */}
    <circle cx="450" cy="180" r="50" fill={c.tan} opacity="0.4" />
    <circle cx="450" cy="180" r="30" fill={c.cream} opacity="0.5" />

    {/* Signal Hill / Lion's Head background */}
    <path d="M0 800 L0 400 L80 360 L180 320 L260 280 L340 300 L420 260 L500 290 L600 340 L600 800 Z"
      fill={c.sage} opacity="0.25" stroke={c.outline} strokeWidth="1" />
    <path d="M0 800 L0 460 L120 400 L240 430 L380 380 L500 410 L600 440 L600 800 Z"
      fill={c.olive} opacity="0.4" stroke={c.outline} strokeWidth="1" />

    {/* Park grounds */}
    <path d="M0 520 Q150 500 300 510 T600 500 L600 800 L0 800 Z" fill={c.sage} opacity="0.3" />
    <path d="M0 560 Q150 540 300 550 T600 540 L600 800 L0 800 Z" fill={c.khaki} stroke={c.outline} strokeWidth="1" />

    {/* Park path - winding */}
    <path d="M-20 800 Q80 700 200 660 Q320 620 380 580 Q440 540 520 520 Q580 500 620 480"
      stroke={c.tan} strokeWidth="16" strokeLinecap="round" fill="none" />
    <path d="M-20 800 Q80 700 200 660 Q320 620 380 580 Q440 540 520 520 Q580 500 620 480"
      stroke={c.outline} strokeWidth="0.8" strokeDasharray="8 6" fill="none" opacity="0.3" />

    {/* Trees in the park */}
    {/* Tree 1 */}
    <g transform="translate(100, 530)">
      <rect x="-4" y="-30" width="8" height="30" fill={c.brown} stroke={c.outline} strokeWidth="0.8" />
      <circle cx="0" cy="-46" r="22" fill={c.olive} stroke={c.outline} strokeWidth="1" />
      <circle cx="-14" cy="-40" r="14" fill={c.sage} stroke={c.outline} strokeWidth="0.8" />
      <circle cx="12" cy="-38" r="12" fill={c.forest} stroke={c.outline} strokeWidth="0.8" opacity="0.8" />
    </g>
    {/* Tree 2 */}
    <g transform="translate(480, 500) scale(0.85)">
      <rect x="-4" y="-30" width="8" height="30" fill={c.brown} stroke={c.outline} strokeWidth="0.8" />
      <circle cx="0" cy="-46" r="22" fill={c.sage} stroke={c.outline} strokeWidth="1" />
      <circle cx="-10" cy="-40" r="14" fill={c.olive} stroke={c.outline} strokeWidth="0.8" />
    </g>
    {/* Tree 3 - background */}
    <g transform="translate(340, 510) scale(0.7)">
      <rect x="-3" y="-25" width="6" height="25" fill={c.brown} stroke={c.outline} strokeWidth="0.8" />
      <circle cx="0" cy="-40" r="18" fill={c.forest} stroke={c.outline} strokeWidth="0.8" opacity="0.6" />
    </g>

    {/* Runners on the path */}
    <Runner x={250} y={640} color={c.rust} scale={1.2} lean />
    <Runner x={290} y={636} color={c.olive} scale={1.1} lean />
    <Runner x={320} y={642} color={c.tan} scale={1} lean />

    {/* Walkers further ahead */}
    <Runner x={420} y={568} color={c.khaki} scale={0.9} />
    <Runner x={445} y={564} color={c.dustyRose} scale={0.85} />

    {/* Parkrun banner/sign */}
    <g transform="translate(180, 680)">
      <rect x="-3" y="-40" width="4" height="40" fill={c.brown} stroke={c.outline} strokeWidth="0.6" />
      <rect x="43" y="-40" width="4" height="40" fill={c.brown} stroke={c.outline} strokeWidth="0.6" />
      <rect x="-3" y="-42" width="50" height="14" rx="2" fill={c.cream} stroke={c.outline} strokeWidth="0.8" />
      <text x="22" y="-32" textAnchor="middle" fontSize="7" fill={c.olive} fontWeight="bold" fontFamily="sans-serif">5K</text>
    </g>

    {/* Proteas & fynbos borders */}
    <Protea x={50} y={770} scale={1.3} />
    <Protea x={120} y={780} scale={0.9} flip />
    <Fynbos x={500} y={770} scale={1.2} />
    <Protea x={540} y={775} scale={1} flip />
    <Fynbos x={30} y={790} />

    {/* Grass details */}
    <path d="M0 790 Q8 770 5 755" stroke={c.sage} strokeWidth="1.5" fill="none" strokeLinecap="round" />
    <path d="M580 785 Q588 765 585 750" stroke={c.olive} strokeWidth="1.5" fill="none" strokeLinecap="round" />
    <path d="M595 790 Q600 775 598 760" stroke={c.sage} strokeWidth="1.2" fill="none" strokeLinecap="round" />
  </svg>
);

// Keep other exports for backwards compatibility
export const CoastViewIllustration = HikingIllustration;
export const CampfireIllustration = HikingIllustration;
export const BeachWalkIllustration = HikingIllustration;
export const OceanCoupleIllustration = HikingIllustration;
export const FireBeachIllustration = HikingIllustration;
export const CliffsIllustration = HikingIllustration;
export const ForestCoupleIllustration = HikingIllustration;
