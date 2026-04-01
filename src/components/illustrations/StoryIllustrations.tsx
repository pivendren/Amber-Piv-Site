import React from "react";

// Palette matched to the hand-drawn illustration assets
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

// Shared protea flower element
const Protea = ({ x, y, scale = 1, flip = false }: { x: number; y: number; scale?: number; flip?: boolean }) => (
  <g transform={`translate(${x}, ${y}) scale(${flip ? -scale : scale}, ${scale})`}>
    {/* Stem */}
    <path d={`M0 0 L0 -40`} stroke={c.olive} strokeWidth="3" strokeLinecap="round" />
    <path d={`M0 -15 Q15 -25 20 -18`} stroke={c.sage} strokeWidth="2.5" strokeLinecap="round" fill="none" />
    <path d={`M0 -25 Q-12 -32 -18 -26`} stroke={c.sage} strokeWidth="2.5" strokeLinecap="round" fill="none" />
    {/* Flower head */}
    <ellipse cx="0" cy="-48" rx="12" ry="14" fill={c.dustyRose} stroke={c.outline} strokeWidth="1.2" />
    {/* Petals */}
    <path d="M-8 -52 Q-16 -68 -4 -62" fill={c.rust} stroke={c.outline} strokeWidth="0.8" />
    <path d="M0 -54 Q0 -72 6 -64" fill={c.brick} stroke={c.outline} strokeWidth="0.8" />
    <path d="M8 -52 Q16 -68 4 -62" fill={c.rust} stroke={c.outline} strokeWidth="0.8" />
    {/* Center detail */}
    <ellipse cx="0" cy="-48" rx="5" ry="6" fill={c.tan} stroke={c.outline} strokeWidth="0.6" />
  </g>
);

// Fynbos bush cluster
const Fynbos = ({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) => (
  <g transform={`translate(${x}, ${y}) scale(${scale})`}>
    <ellipse cx="0" cy="-10" rx="22" ry="16" fill={c.sage} stroke={c.outline} strokeWidth="1" />
    <ellipse cx="-12" cy="-8" rx="14" ry="12" fill={c.olive} stroke={c.outline} strokeWidth="0.8" />
    <ellipse cx="14" cy="-6" rx="12" ry="10" fill={c.forest} stroke={c.outline} strokeWidth="0.8" opacity="0.8" />
    {/* Small leaf details */}
    <path d="M-6 -18 Q-2 -26 2 -20" stroke={c.darkGreen} strokeWidth="1.2" fill="none" strokeLinecap="round" />
    <path d="M8 -16 Q12 -24 14 -18" stroke={c.darkGreen} strokeWidth="1.2" fill="none" strokeLinecap="round" />
  </g>
);

// Small standing figure
const Person = ({ x, y, color1, color2, scale = 1 }: { x: number; y: number; color1: string; color2: string; scale?: number }) => (
  <g transform={`translate(${x}, ${y}) scale(${scale})`}>
    <circle cx="0" cy="-28" r="5" fill={color1} stroke={c.outline} strokeWidth="0.8" />
    <path d="M-5 -22 L-7 0 L7 0 L5 -22 Z" fill={color2} stroke={c.outline} strokeWidth="0.8" />
    <path d="M-7 0 L-9 16 M7 0 L9 16" stroke={c.outline} strokeWidth="1.5" strokeLinecap="round" />
  </g>
);

// Layered Cederberg-style mountains
const Mountains = ({ y = 0, opacity = 1 }: { y?: number; opacity?: number }) => (
  <g opacity={opacity}>
    <path d={`M0 ${380 + y} L80 ${280 + y} L160 ${320 + y} L260 ${220 + y} L340 ${260 + y} L440 ${180 + y} L520 ${240 + y} L620 ${200 + y} L700 ${260 + y} L800 ${300 + y} L800 ${400 + y} L0 ${400 + y} Z`}
      fill={c.sage} stroke={c.outline} strokeWidth="1" opacity="0.5" />
    <path d={`M0 ${400 + y} L60 ${340 + y} L180 ${300 + y} L280 ${260 + y} L380 ${300 + y} L500 ${250 + y} L600 ${280 + y} L700 ${320 + y} L800 ${350 + y} L800 ${420 + y} L0 ${420 + y} Z`}
      fill={c.olive} stroke={c.outline} strokeWidth="1.2" opacity="0.7" />
    <path d={`M0 ${440 + y} L100 ${380 + y} L200 ${340 + y} L350 ${320 + y} L500 ${340 + y} L650 ${360 + y} L800 ${400 + y} L800 ${460 + y} L0 ${460 + y} Z`}
      fill={c.forest} stroke={c.outline} strokeWidth="1.2" />
  </g>
);

/* ─── 1. Meeting / Arrival in Cape Town ──────────────────────────────── */

export const MeetingIllustration = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 800 600" className={`w-full h-full ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="600" fill={c.paper} />

    {/* Sun */}
    <circle cx="600" cy="140" r="60" fill={c.tan} opacity="0.5" />
    <circle cx="600" cy="140" r="40" fill={c.cream} opacity="0.6" />

    {/* Table Mountain silhouette */}
    <path d="M0 600 L0 380 L80 340 L160 280 L200 260 L220 250 L240 250 L580 250 L620 260 L660 300 L700 340 L730 360"
      fill="none" stroke={c.outline} strokeWidth="1.5" />
    <path d="M0 600 L0 380 L80 340 L160 280 L200 260 L220 250 L240 250 L580 250 L620 260 L660 300 L700 340 L730 360 L730 600 Z"
      fill={c.forest} opacity="0.25" />
    {/* Lion's Head */}
    <path d="M730 360 L760 310 L790 280 L810 290 L830 360 L830 600 L730 600 Z" fill={c.forest} opacity="0.3" />
    <path d="M730 360 L760 310 L790 280 L810 290 L830 360"
      fill="none" stroke={c.outline} strokeWidth="1.5" />

    {/* Foreground - ground plane */}
    <path d="M0 480 Q200 460 400 470 T800 460 L800 600 L0 600 Z" fill={c.khaki} stroke={c.outline} strokeWidth="1" />

    {/* Road/path */}
    <path d="M100 600 Q200 520 350 500 Q500 480 650 520" stroke={c.tan} strokeWidth="14" strokeLinecap="round" fill="none" />
    <path d="M100 600 Q200 520 350 500 Q500 480 650 520" stroke={c.outline} strokeWidth="1" strokeDasharray="8 6" fill="none" opacity="0.3" />

    {/* People arriving with luggage */}
    <Person x={220} y={490} color1={c.tan} color2={c.olive} scale={1.1} />
    <rect x="230" y="480" width="10" height="12" rx="2" fill={c.brown} stroke={c.outline} strokeWidth="0.8" />
    <Person x={260} y={494} color1={c.dustyRose} color2={c.khaki} scale={1} />
    <Person x={420} y={486} color1={c.brown} color2={c.rust} scale={1.1} />
    <rect x="430" y="474" width="12" height="14" rx="2" fill={c.tan} stroke={c.outline} strokeWidth="0.8" />
    <Person x={450} y={490} color1={c.tan} color2={c.sage} scale={0.95} />

    {/* Proteas */}
    <Protea x={60} y={560} scale={1.2} />
    <Protea x={740} y={550} scale={1} flip />
    <Fynbos x={680} y={560} scale={1.1} />
    <Fynbos x={130} y={570} scale={0.9} />

    {/* Foreground grass strokes */}
    <path d="M0 580 Q10 560 5 540" stroke={c.sage} strokeWidth="1.5" fill="none" strokeLinecap="round" />
    <path d="M15 585 Q20 565 18 548" stroke={c.olive} strokeWidth="1.2" fill="none" strokeLinecap="round" />
    <path d="M780 575 Q785 555 790 540" stroke={c.sage} strokeWidth="1.5" fill="none" strokeLinecap="round" />
  </svg>
);

/* ─── 2. Road Trip / Check-in at Wolfkop ─────────────────────────────── */

export const RoadTripIllustration = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 800 600" className={`w-full h-full ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="600" fill={c.paper} />

    {/* Sky warmth */}
    <circle cx="650" cy="120" r="50" fill={c.tan} opacity="0.4" />

    {/* Cederberg mountains - jagged rocky peaks */}
    <path d="M0 600 L0 320 L50 280 L120 240 L180 300 L250 200 L320 260 L380 180 L440 220 L520 160 L580 230 L660 190 L720 250 L800 280 L800 600 Z"
      fill={c.sage} opacity="0.3" stroke={c.outline} strokeWidth="1" />
    <path d="M0 600 L0 380 L100 320 L200 360 L300 280 L400 320 L480 260 L560 300 L660 280 L740 340 L800 360 L800 600 Z"
      fill={c.olive} opacity="0.5" stroke={c.outline} strokeWidth="1.2" />
    <path d="M0 600 L0 440 L150 380 L300 400 L450 360 L600 380 L750 420 L800 440 L800 600 Z"
      fill={c.forest} opacity="0.7" stroke={c.outline} strokeWidth="1.2" />

    {/* Road winding through */}
    <path d="M-20 600 Q100 500 250 480 Q400 460 500 440 Q650 420 800 380"
      stroke={c.khaki} strokeWidth="20" strokeLinecap="round" fill="none" />
    <path d="M-20 600 Q100 500 250 480 Q400 460 500 440 Q650 420 800 380"
      stroke={c.outline} strokeWidth="1" strokeDasharray="10 8" fill="none" opacity="0.3" />

    {/* Car */}
    <g transform="translate(320, 465) rotate(-5)">
      <rect x="-28" y="-18" width="56" height="26" rx="8" fill={c.rust} stroke={c.outline} strokeWidth="1.2" />
      <rect x="-18" y="-14" width="14" height="10" rx="2" fill={c.cream} stroke={c.outline} strokeWidth="0.6" />
      <rect x="4" y="-14" width="14" height="10" rx="2" fill={c.cream} stroke={c.outline} strokeWidth="0.6" />
      <circle cx="-14" cy="10" r="7" fill={c.darkBrown} stroke={c.outline} strokeWidth="1" />
      <circle cx="-14" cy="10" r="3" fill={c.khaki} />
      <circle cx="14" cy="10" r="7" fill={c.darkBrown} stroke={c.outline} strokeWidth="1" />
      <circle cx="14" cy="10" r="3" fill={c.khaki} />
      {/* Luggage on top */}
      <rect x="-12" y="-24" width="24" height="6" rx="2" fill={c.tan} stroke={c.outline} strokeWidth="0.8" />
    </g>

    {/* Citrus trees along road */}
    <g transform="translate(560, 410)">
      <rect x="-3" y="-20" width="6" height="20" fill={c.brown} stroke={c.outline} strokeWidth="0.8" />
      <circle cx="0" cy="-30" r="16" fill={c.olive} stroke={c.outline} strokeWidth="1" />
      <circle cx="-6" cy="-28" r="3" fill={c.tan} stroke={c.outline} strokeWidth="0.5" />
      <circle cx="8" cy="-32" r="2.5" fill={c.tan} stroke={c.outline} strokeWidth="0.5" />
    </g>
    <g transform="translate(630, 400) scale(0.8)">
      <rect x="-3" y="-20" width="6" height="20" fill={c.brown} stroke={c.outline} strokeWidth="0.8" />
      <circle cx="0" cy="-30" r="16" fill={c.sage} stroke={c.outline} strokeWidth="1" />
      <circle cx="5" cy="-26" r="3" fill={c.tan} stroke={c.outline} strokeWidth="0.5" />
    </g>

    {/* Proteas & fynbos */}
    <Protea x={80} y={570} scale={1.1} />
    <Fynbos x={720} y={560} />
    <Protea x={750} y={565} scale={0.8} flip />

    {/* Road sign */}
    <g transform="translate(180, 470)">
      <rect x="-2" y="-30" width="4" height="30" fill={c.brown} stroke={c.outline} strokeWidth="0.6" />
      <rect x="-16" y="-42" width="32" height="14" rx="2" fill={c.cream} stroke={c.outline} strokeWidth="0.8" />
      <text x="0" y="-32" textAnchor="middle" fontSize="7" fill={c.outline} fontWeight="bold" fontFamily="sans-serif">N7</text>
    </g>
  </svg>
);

/* ─── 3. Proposal/Walk & Farewell ────────────────────────────────────── */

export const ProposalIllustration = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 800 600" className={`w-full h-full ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="600" fill={c.paper} />

    {/* Morning sun rising */}
    <circle cx="400" cy="220" r="80" fill={c.tan} opacity="0.3" />
    <circle cx="400" cy="220" r="50" fill={c.cream} opacity="0.5" />
    {/* Sun rays */}
    <path d="M400 130 L400 110" stroke={c.tan} strokeWidth="2" strokeLinecap="round" opacity="0.4" />
    <path d="M340 150 L325 135" stroke={c.tan} strokeWidth="2" strokeLinecap="round" opacity="0.4" />
    <path d="M460 150 L475 135" stroke={c.tan} strokeWidth="2" strokeLinecap="round" opacity="0.4" />

    {/* Mountains */}
    <path d="M0 600 L0 340 L80 300 L180 250 L280 200 L350 240 L450 180 L540 220 L640 170 L720 230 L800 260 L800 600 Z"
      fill={c.sage} opacity="0.3" stroke={c.outline} strokeWidth="1" />
    <path d="M0 600 L0 400 L120 350 L260 310 L380 340 L500 290 L620 320 L740 350 L800 380 L800 600 Z"
      fill={c.olive} opacity="0.5" stroke={c.outline} strokeWidth="1.2" />
    <path d="M0 600 L0 460 L180 400 L350 380 L500 400 L650 420 L800 440 L800 600 Z"
      fill={c.forest} opacity="0.7" stroke={c.outline} strokeWidth="1.2" />

    {/* Hiking trail */}
    <path d="M200 600 Q300 520 400 480 Q500 440 580 420 Q680 400 800 370"
      stroke={c.khaki} strokeWidth="10" strokeLinecap="round" fill="none" />
    <path d="M200 600 Q300 520 400 480 Q500 440 580 420 Q680 400 800 370"
      stroke={c.outline} strokeWidth="0.8" strokeDasharray="6 5" fill="none" opacity="0.3" />

    {/* Couple hiking together */}
    <g transform="translate(440, 460)">
      {/* Person 1 */}
      <circle cx="-10" cy="-32" r="6" fill={c.tan} stroke={c.outline} strokeWidth="1" />
      <path d="M-16 -25 L-18 0 L-2 0 L-4 -25 Z" fill={c.rust} stroke={c.outline} strokeWidth="0.8" />
      <path d="M-18 0 L-20 18 M-2 0 L0 18" stroke={c.outline} strokeWidth="1.5" strokeLinecap="round" />
      {/* Backpack */}
      <rect x="-18" y="-22" width="8" height="10" rx="2" fill={c.brown} stroke={c.outline} strokeWidth="0.6" />
      {/* Person 2 */}
      <circle cx="16" cy="-30" r="5.5" fill={c.dustyRose} stroke={c.outline} strokeWidth="1" />
      <path d="M10 -24 L8 0 L24 0 L22 -24 Z" fill={c.olive} stroke={c.outline} strokeWidth="0.8" />
      <path d="M8 0 L6 16 M24 0 L26 16" stroke={c.outline} strokeWidth="1.5" strokeLinecap="round" />
      {/* Walking stick */}
      <path d="M28 -10 L36 20" stroke={c.brown} strokeWidth="1.5" strokeLinecap="round" />
    </g>

    {/* Proteas & fynbos */}
    <Protea x={100} y={560} scale={1.3} />
    <Protea x={160} y={570} scale={0.9} flip />
    <Fynbos x={650} y={560} scale={1.2} />
    <Fynbos x={50} y={580} />

    {/* Birds in the morning sky */}
    <path d="M300 120 Q305 115 310 120" stroke={c.outline} strokeWidth="1" fill="none" />
    <path d="M320 105 Q326 99 332 105" stroke={c.outline} strokeWidth="1" fill="none" />
    <path d="M500 95 Q506 89 512 95" stroke={c.outline} strokeWidth="1" fill="none" />
  </svg>
);

/* ─── 4. Wedding / Sunset Ceremony ───────────────────────────────────── */

export const WeddingIllustration = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 800 600" className={`w-full h-full ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="600" fill={c.paper} />

    {/* Sunset sky */}
    <circle cx="400" cy="200" r="100" fill={c.tan} opacity="0.3" />
    <circle cx="400" cy="200" r="65" fill={c.dustyRose} opacity="0.25" />
    <circle cx="400" cy="200" r="40" fill={c.rust} opacity="0.3" />

    {/* Mountains silhouette */}
    <path d="M0 600 L0 300 L100 260 L200 220 L320 280 L440 200 L560 260 L680 220 L800 300 L800 600 Z"
      fill={c.olive} opacity="0.25" stroke={c.outline} strokeWidth="1" />
    <path d="M0 600 L0 380 L140 330 L280 360 L420 310 L560 350 L700 380 L800 400 L800 600 Z"
      fill={c.forest} opacity="0.4" stroke={c.outline} strokeWidth="1" />

    {/* Ground */}
    <path d="M0 460 Q200 440 400 450 T800 440 L800 600 L0 600 Z" fill={c.khaki} stroke={c.outline} strokeWidth="1" opacity="0.8" />

    {/* Floral wedding arch */}
    <g transform="translate(400, 420)">
      {/* Arch structure */}
      <path d="M-60 0 L-60 -100 Q-60 -150 0 -160 Q60 -150 60 -100 L60 0"
        stroke={c.brown} strokeWidth="4" fill="none" strokeLinecap="round" />
      {/* Floral decorations on arch */}
      <circle cx="-50" cy="-120" r="10" fill={c.dustyRose} stroke={c.outline} strokeWidth="0.8" />
      <circle cx="-35" cy="-140" r="8" fill={c.rust} stroke={c.outline} strokeWidth="0.8" />
      <circle cx="-15" cy="-155" r="9" fill={c.dustyRose} stroke={c.outline} strokeWidth="0.8" />
      <circle cx="10" cy="-158" r="7" fill={c.brick} stroke={c.outline} strokeWidth="0.8" />
      <circle cx="35" cy="-145" r="9" fill={c.dustyRose} stroke={c.outline} strokeWidth="0.8" />
      <circle cx="50" cy="-125" r="8" fill={c.rust} stroke={c.outline} strokeWidth="0.8" />
      {/* Leaves on arch */}
      <path d="M-55 -110 Q-70 -115 -65 -130" stroke={c.olive} strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M-40 -135 Q-55 -140 -50 -155" stroke={c.sage} strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M40 -140 Q55 -145 50 -155" stroke={c.olive} strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M55 -115 Q70 -120 65 -130" stroke={c.sage} strokeWidth="2" fill="none" strokeLinecap="round" />

      {/* Couple under arch */}
      {/* Person 1 - formal */}
      <circle cx="-12" cy="-38" r="6" fill={c.tan} stroke={c.outline} strokeWidth="1" />
      <path d="M-18 -32 L-20 -2 L-4 -2 L-6 -32 Z" fill={c.darkBrown} stroke={c.outline} strokeWidth="0.8" />
      <path d="M-20 -2 L-22 20 M-4 -2 L-2 20" stroke={c.outline} strokeWidth="1.5" strokeLinecap="round" />
      {/* Person 2 - dress */}
      <circle cx="12" cy="-38" r="6" fill={c.dustyRose} stroke={c.outline} strokeWidth="1" />
      <path d="M6 -32 L0 20 L24 20 L18 -32 Z" fill={c.cream} stroke={c.outline} strokeWidth="0.8" />
    </g>

    {/* Seated guests (small) */}
    {[
      { x: 240, y: 470 }, { x: 260, y: 468 }, { x: 280, y: 472 },
      { x: 520, y: 470 }, { x: 540, y: 468 }, { x: 560, y: 472 },
    ].map((g, i) => (
      <g key={i} transform={`translate(${g.x}, ${g.y})`}>
        <circle cx="0" cy="-10" r="4" fill={i % 2 === 0 ? c.tan : c.khaki} stroke={c.outline} strokeWidth="0.6" />
        <rect x="-5" y="-6" width="10" height="10" rx="1" fill={i % 3 === 0 ? c.olive : i % 3 === 1 ? c.sage : c.rust} stroke={c.outline} strokeWidth="0.6" />
      </g>
    ))}
    {/* Chairs */}
    <rect x="230" y="472" width="60" height="3" rx="1" fill={c.brown} stroke={c.outline} strokeWidth="0.5" />
    <rect x="510" y="472" width="60" height="3" rx="1" fill={c.brown} stroke={c.outline} strokeWidth="0.5" />

    {/* Proteas & fynbos */}
    <Protea x={80} y={560} scale={1.4} />
    <Protea x={150} y={570} scale={1} flip />
    <Protea x={660} y={565} scale={1.2} />
    <Protea x={720} y={555} scale={0.9} flip />
    <Fynbos x={40} y={580} scale={1.1} />
    <Fynbos x={760} y={580} />

    {/* Fairy lights / sparkles */}
    <circle cx="350" cy="300" r="2" fill={c.tan} opacity="0.6" />
    <circle cx="450" cy="280" r="1.5" fill={c.cream} opacity="0.7" />
    <circle cx="380" cy="260" r="2" fill={c.tan} opacity="0.5" />
    <circle cx="420" cy="310" r="1.5" fill={c.cream} opacity="0.6" />
  </svg>
);
