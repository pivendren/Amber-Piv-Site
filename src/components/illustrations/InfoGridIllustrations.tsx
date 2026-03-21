import React from "react";

const colors = {
  rust: "#a64d32",
  forest: "#3a5a40",
  sand: "#e5e0d8",
  cream: "#f5f2ed",
  brown: "#9a3324",
  dark: "#1c2b1e",
};

export const LocationLodgingIllustration = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 1200 400" className={`w-full h-full ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="1200" height="400" fill={colors.cream} opacity="0.05" />
    
    {/* Background Rugged Skyline (Table Mountain & Peaks) */}
    <g opacity="0.9">
      {/* Devil's Peak (The Sharp Left Peak) */}
      <path 
        d="M 0 400 L 120 320 L 220 220 L 280 200 L 330 250 L 360 300" 
        fill={colors.forest} 
        stroke={colors.forest} 
        strokeWidth="2" 
        strokeLinejoin="round"
      />
      {/* Table Mountain (The Famous Long Flat Plateau) */}
      <path 
        d="M 330 300 L 350 230 L 380 140 L 400 135 L 780 135 L 820 150 L 850 250 L 880 320 L 900 400 Z" 
        fill={colors.forest} 
        stroke={colors.forest} 
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {/* Lion's Head (The Distinct Iconic Peak to the Right) */}
      <path 
        d="M 900 400 L 930 320 L 960 210 L 985 190 L 1010 210 L 1040 330 L 1080 400 Z" 
        fill={colors.forest} 
        stroke={colors.forest} 
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {/* Signal Hill (The Lower Sloping Ridge connecting to Lion's Head) */}
      <path 
        d="M 1040 330 L 1100 300 L 1200 330 L 1200 400 Z" 
        fill={colors.forest} 
        opacity="0.7"
      />
    </g>

    {/* Cable Car Line (More accurate placement) */}
    <path d="M 400 135 L 500 50" stroke={colors.rust} strokeWidth="1" strokeDasharray="6 4" opacity="0.3" />
    <rect x="440" y="85" width="12" height="10" rx="2" fill={colors.brown} />

    {/* Ocean/Harbor Foreground */}
    <path d="M 0 400 L 0 370 Q 300 395 600 375 T 1200 380 L 1200 400 Z" fill={colors.sand} />
    <path d="M 0 400 L 0 385 Q 300 400 600 390 T 1200 395 L 1200 400 Z" fill={colors.dark} opacity="0.1" />

    {/* King Proteas (Fynbos) */}
    <g transform="translate(150, 420) scale(0.6)">
      <path d="M 0 0 L 0 -180" stroke={colors.forest} strokeWidth="12" strokeLinecap="round" />
      <circle cx="0" cy="-180" r="35" fill={colors.rust} />
      <path d="M -30 -210 L 0 -160 L 30 -210" stroke={colors.sand} strokeWidth="4" fill="none" />
      <path d="M -5 -180 L -35 -250 L 0 -220 L 35 -250 L 5 -180 Z" fill={colors.sand} opacity="0.8" />
    </g>
    <g transform="translate(1050, 420) scale(0.5)">
      <path d="M 0 0 L 0 -210" stroke={colors.forest} strokeWidth="12" strokeLinecap="round" />
      <circle cx="0" cy="-210" r="40" fill={colors.brown} />
      <path d="M -10 -210 L -45 -280 L 0 -250 L 45 -280 L 10 -210 Z" fill={colors.rust} />
    </g>
  </svg>
);

export const ScheduleIllustration = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 600 800" className={`w-full h-full ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="600" height="800" fill={colors.dark} />
    
    {/* Large Peaceful Mountain Sunset */}
    <circle cx="300" cy="350" r="220" fill={colors.rust} opacity="0.1" />
    <circle cx="300" cy="350" r="160" fill={colors.rust} opacity="0.2" />
    <circle cx="300" cy="350" r="100" fill={colors.rust} opacity="0.5" />

    {/* Distant Mountains */}
    <path d="M 0 600 L 150 450 L 300 550 L 500 400 L 600 500 L 600 600 Z" fill={colors.forest} opacity="0.4" />
    
    {/* Cozy Rustic Cabin Silhouette */}
    <g transform="translate(150, 480)">
      <path d="M 0 100 L 0 20 L 100 0 L 200 20 L 200 100 Z" fill={colors.brown} />
      <path d="M -20 30 L 100 -10 L 220 30 Z" fill={colors.dark} />
      <rect x="160" y="-30" width="20" height="50" fill={colors.dark} />
      {/* Smoke */}
      <path d="M 170 -40 Q 180 -60 160 -80 T 170 -120" stroke={colors.sand} strokeWidth="4" opacity="0.4" strokeLinecap="round" />
      {/* Window Glow */}
      <rect x="40" y="40" width="30" height="30" fill={colors.cream} opacity="0.6" />
      <rect x="130" y="40" width="30" height="30" fill={colors.cream} opacity="0.6" />
    </g>

    {/* Steaming Mug (Relaxation) */}
    <g transform="translate(400, 680)">
      <path d="M 0 0 Q 0 80 50 80 L 100 80 Q 150 80 150 0 L 150 -60 L 0 -60 Z" fill={colors.sand} />
      <path d="M 150 -30 Q 180 -30 180 0 Q 180 30 150 30" stroke={colors.sand} strokeWidth="8" fill="none" />
      {/* Steam */}
      <path d="M 40 -80 Q 30 -110 50 -140" stroke={colors.rust} strokeWidth="4" strokeLinecap="round" />
      <path d="M 80 -80 Q 70 -110 90 -140" stroke={colors.rust} strokeWidth="4" strokeLinecap="round" />
    </g>

    {/* Stars */}
    <circle cx="100" cy="100" r="2" fill={colors.cream} />
    <circle cx="450" cy="150" r="3" fill={colors.sand} />
    <circle cx="550" cy="80" r="2" fill={colors.cream} />
  </svg>
);

export const PackingListIllustration = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 600 800" className={`w-full h-full ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="600" height="800" fill={colors.sand} opacity="0.1" />

    {/* Big Puffer/Winter Jacket (WINTER) */}
    <g transform="translate(300, 300)">
      {/* Core Body */}
      <rect x="-140" y="-120" width="280" height="350" rx="40" fill={colors.forest} />
      {/* Puffer lines */}
      {[...Array(5)].map((_, i) => (
        <line key={i} x1="-135" y1={-60 + i * 60} x2="135" y2={-60 + i * 60} stroke={colors.dark} strokeWidth="2" opacity="0.3" />
      ))}
      {/* Arms */}
      <path d="M -140 -80 L -220 150 L -160 180 L -120 0 Z" fill={colors.forest} stroke={colors.dark} strokeWidth="1" />
      <path d="M 140 -80 L 220 150 L 160 180 L 120 0 Z" fill={colors.forest} stroke={colors.dark} strokeWidth="1" />
      {/* Zipper */}
      <line x1="0" y1="-120" x2="0" y2="230" stroke={colors.dark} strokeWidth="4" />
      <rect x="-5" y="0" width="10" height="20" rx="2" fill={colors.rust} />
      {/* Hood */}
      <path d="M -80 -120 Q 0 -220 80 -120" fill={colors.dark} />
    </g>

    {/* Hiking Boots (STURDY/ACTIVE) */}
    <g transform="translate(180, 650) rotate(-10)">
      <path d="M 0 0 L 25 -70 L 100 -70 L 120 20 L 15 35 Z" fill={colors.rust} />
      <rect x="-10" y="25" width="140" height="25" rx="5" fill={colors.dark} />
      {/* Laces */}
      <path d="M 30 -60 L 60 -40 M 35 -40 L 65 -20" stroke={colors.sand} strokeWidth="3" />
    </g>
    <g transform="translate(350, 620) rotate(15)">
      <path d="M 0 0 L 25 -70 L 100 -70 L 120 20 L 15 35 Z" fill={colors.brown} />
      <rect x="-10" y="25" width="140" height="25" rx="5" fill={colors.dark} />
      <path d="M 30 -60 L 60 -40 M 35 -40 L 65 -20" stroke={colors.sand} strokeWidth="3" />
    </g>

    {/* Warm Beanie */}
    <g transform="translate(480, 150) rotate(10)">
      <path d="M -50 0 Q 0 -80 50 0 Z" fill={colors.rust} />
      <rect x="-60" y="0" width="120" height="30" rx="5" fill={colors.rust} />
      <circle cx="0" cy="-75" r="15" fill={colors.sand} />
    </g>

    {/* Fynbos branch */}
    <g transform="translate(50, 100) rotate(-45)">
      <path d="M 0 0 Q 30 100 0 200" stroke={colors.forest} strokeWidth="6" strokeLinecap="round" fill="none" />
      <circle cx="20" cy="150" r="18" fill={colors.rust} />
    </g>
  </svg>
);
