import React from "react";

const colors = {
  rust: "#a64d32",
  forest: "#3a5a40",
  sand: "#e5e0d8",
  cream: "#f5f2ed",
  brown: "#9a3324",
  dark: "#1c2b1e",
};

// 1. Hiking (Vertical)
export const HikingIllustration = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 600 800" className={`w-full h-full ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="600" height="800" fill={colors.cream} />
    {/* Sun/Sky */}
    <circle cx="300" cy="400" r="180" fill={colors.sand} opacity="0.5" />
    <circle cx="300" cy="400" r="120" fill={colors.rust} opacity="0.2" />
    
    {/* Mountains (Cederberg style) */}
    <path d="M 0 800 L 0 500 L 150 400 L 300 550 L 450 350 L 600 480 L 600 800 Z" fill={colors.forest} opacity="0.3" />
    <path d="M 0 800 L 0 600 L 250 450 L 400 550 L 550 400 L 600 450 L 600 800 Z" fill={colors.forest} opacity="0.6" />
    <path d="M 0 800 L 0 700 L 300 550 L 600 650 L 600 800 Z" fill={colors.dark} />

    {/* Hikers Silhouettes */}
    <g transform="translate(350, 520)">
      <path d="M 0 30 L -15 0 L 0 -20 L 10 0 Z" fill={colors.rust} /> {/* Body 1 */}
      <circle cx="0" cy="-28" r="8" fill={colors.rust} />
      <path d="M 30 40 L 15 10 L 25 -10 L 40 10 Z" fill={colors.sand} /> {/* Body 2 */}
      <circle cx="28" cy="-18" r="7" fill={colors.sand} />
      <path d="M -5 0 L -25 30" stroke={colors.sand} strokeWidth="2" strokeLinecap="round" /> {/* Hiking stick */}
    </g>

    {/* Foreground Fynbos */}
    <path d="M -50 800 Q 100 600 250 800 Z" fill={colors.brown} opacity="0.8" />
    <circle cx="100" cy="700" r="15" fill={colors.rust} />
    <circle cx="180" cy="750" r="12" fill={colors.rust} />
  </svg>
);

// 2. Coast View (Horizontal)
export const CoastViewIllustration = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 800 600" className={`w-full h-full ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="600" fill={colors.sand} opacity="0.3" />
    {/* Ocean */}
    <rect y="350" width="800" height="250" fill={colors.forest} opacity="0.2" />
    <path d="M 0 380 Q 200 400 400 380 T 800 380" stroke={colors.cream} strokeWidth="4" fill="none" opacity="0.5" />
    <path d="M 0 420 Q 200 440 400 420 T 800 420" stroke={colors.cream} strokeWidth="4" fill="none" opacity="0.3" />

    {/* Rocky cliffs / mountains meeting sea */}
    <path d="M 0 600 L 0 150 L 150 250 L 250 180 L 400 350 L 250 600 Z" fill={colors.dark} />
    <path d="M -50 600 L -50 300 L 150 400 L 200 600 Z" fill={colors.brown} />
    
    {/* Sun setting over ocean */}
    <circle cx="600" cy="300" r="60" fill={colors.rust} opacity="0.8" />
  </svg>
);

// 3. Campfire (Horizontal)
export const CampfireIllustration = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 800 600" className={`w-full h-full ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="600" fill={colors.dark} />
    {/* Stars */}
    <circle cx="150" cy="150" r="2" fill={colors.cream} />
    <circle cx="350" cy="80" r="3" fill={colors.sand} />
    <circle cx="650" cy="200" r="2" fill={colors.cream} />
    <circle cx="750" cy="100" r="1.5" fill={colors.cream} />
    
    {/* Mountains at night */}
    <path d="M 0 600 L 0 300 L 200 400 L 450 250 L 650 350 L 800 280 L 800 600 Z" fill={colors.forest} opacity="0.4" />
    <path d="M 0 600 L 0 450 L 300 350 L 500 450 L 800 380 L 800 600 Z" fill={colors.brown} opacity="0.3" />

    {/* Fire glow */}
    <circle cx="400" cy="500" r="100" fill={colors.rust} opacity="0.15" />
    <circle cx="400" cy="500" r="60" fill={colors.rust} opacity="0.3" />
    
    {/* Campfire */}
    <path d="M 370 550 L 430 550 L 400 520 Z" fill={colors.sand} /> {/* Logs */}
    <path d="M 380 540 Q 400 450 420 540 Z" fill={colors.rust} /> {/* Flame 1 */}
    <path d="M 390 540 Q 400 480 410 540 Z" fill={colors.cream} /> {/* Flame 2 */}

    {/* Spark */}
    <circle cx="410" cy="460" r="3" fill={colors.rust} />
    <circle cx="390" cy="440" r="2" fill={colors.sand} />
  </svg>
);

// 4. Beach Walk (Vertical)
export const BeachWalkIllustration = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 600 800" className={`w-full h-full ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="600" height="800" fill={colors.sand} opacity="0.5" />
    {/* Waves washing in from top */}
    <path d="M 0 0 L 600 0 L 600 400 Q 450 450 300 400 T 0 350 Z" fill={colors.cream} />
    <path d="M 0 0 L 600 0 L 600 380 Q 450 430 300 380 T 0 330 Z" fill={colors.forest} opacity="0.1" />

    {/* Footprints */}
    <g transform="translate(300, 500) rotate(-20)">
      <ellipse cx="-20" cy="0" rx="8" ry="15" fill={colors.rust} opacity="0.4" />
      <ellipse cx="20" cy="40" rx="8" ry="15" fill={colors.rust} opacity="0.4" />
      <ellipse cx="-20" cy="80" rx="8" ry="15" fill={colors.rust} opacity="0.4" />
      <ellipse cx="20" cy="120" rx="8" ry="15" fill={colors.rust} opacity="0.4" />
      <ellipse cx="-20" cy="160" rx="8" ry="15" fill={colors.rust} opacity="0.4" />
    </g>
  </svg>
);

// 5. Ocean Couple (Vertical)
export const OceanCoupleIllustration = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 600 800" className={`w-full h-full ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="600" height="800" fill={colors.cream} />
    {/* Ocean horizon */}
    <rect y="400" width="600" height="400" fill={colors.forest} opacity="0.3" />
    <path d="M 0 450 Q 150 470 300 450 T 600 450" stroke={colors.sand} strokeWidth="4" fill="none" opacity="0.5" />

    {/* Cliff side */}
    <path d="M 600 800 L 600 500 L 400 550 L 300 650 L 150 800 Z" fill={colors.brown} />

    {/* Couple silhouette standing on cliff */}
    <g transform="translate(420, 510)">
      <rect x="-10" y="0" width="10" height="40" fill={colors.dark} />
      <circle cx="-5" cy="-8" r="8" fill={colors.dark} />
      <rect x="5" y="10" width="8" height="30" fill={colors.forest} />
      <circle cx="9" cy="0" r="7" fill={colors.forest} />
    </g>
  </svg>
);

// 6. Fire Beach (Horizontal)
export const FireBeachIllustration = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 800 600" className={`w-full h-full ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="600" fill={colors.brown} />
    {/* Ocean in background */}
    <rect y="300" width="800" height="300" fill={colors.dark} opacity="0.6" />
    <path d="M 0 350 Q 200 370 400 350 T 800 350" stroke={colors.forest} strokeWidth="3" fill="none" />

    {/* Beach slope */}
    <path d="M 0 600 L 0 500 Q 400 450 800 550 L 800 600 Z" fill={colors.sand} opacity="0.4" />

    {/* Large Beach Bonfire */}
    <circle cx="300" cy="500" r="120" fill={colors.rust} opacity="0.2" />
    <path d="M 270 530 L 330 530 L 300 480 Z" fill={colors.dark} />
    <path d="M 280 520 Q 300 400 320 520 Z" fill={colors.rust} />
    <path d="M 290 520 Q 300 430 310 520 Z" fill={colors.cream} />

    <circle cx="320" cy="420" r="4" fill={colors.rust} />
    <circle cx="280" cy="400" r="3" fill={colors.sand} />
  </svg>
);

// 7. Cliffs (Horizontal)
export const CliffsIllustration = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 800 600" className={`w-full h-full ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="600" fill={colors.sand} />
    
    {/* Sky gradients / sun */}
    <circle cx="650" cy="200" r="250" fill={colors.cream} opacity="0.5" />
    <circle cx="650" cy="200" r="100" fill={colors.cream} />
    
    {/* Massive jagged cliffs overlapping */}
    <path d="M 0 600 L 0 100 L 150 300 L 250 200 L 450 450 L 550 400 L 800 600 Z" fill={colors.brown} opacity="0.7" />
    <path d="M -50 600 L -50 300 L 100 450 L 300 350 L 450 500 L 600 600 Z" fill={colors.forest} opacity="0.8" />
    <path d="M 0 600 L 0 500 L 250 600 Z" fill={colors.dark} />

    {/* Fynbos accent */}
    <path d="M 600 600 Q 650 450 700 600 Z" fill={colors.rust} opacity="0.9" />
  </svg>
);

// 8. Forest Couple (Vertical)
export const ForestCoupleIllustration = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 600 800" className={`w-full h-full ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="600" height="800" fill={colors.dark} />
    
    {/* Light shining through trees */}
    <path d="M 300 -100 L 600 800 L 0 800 Z" fill={colors.cream} opacity="0.1" />

    {/* Tall Trees */}
    <rect x="100" y="200" width="40" height="600" fill={colors.brown} />
    <rect x="450" y="100" width="60" height="700" fill={colors.brown} opacity="0.8" />
    <rect x="250" y="300" width="30" height="500" fill={colors.forest} opacity="0.6" />

    {/* Leaves/Canopy */}
    <circle cx="120" cy="200" r="150" fill={colors.forest} opacity="0.4" />
    <circle cx="480" cy="150" r="200" fill={colors.forest} opacity="0.3" />
    <circle cx="300" cy="100" r="250" fill={colors.forest} opacity="0.2" />

    {/* Couple walking */}
    <g transform="translate(300, 650)">
      <path d="M -15 0 L -25 -40 L -5 -40 L 5 0 Z" fill={colors.rust} />
      <circle cx="-15" cy="-50" r="10" fill={colors.rust} />
      <path d="M 15 0 L 5 -35 L 25 -35 L 35 0 Z" fill={colors.sand} />
      <circle cx="15" cy="-45" r="9" fill={colors.sand} />
    </g>
  </svg>
);
