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

export const CitrusdalIllustration = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 1200 600" className={ `w-full h-full ${className}` } fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="1200" height="600" fill={colors.cream} opacity="0.03" />

    {/* Rugged Cederberg Mountains */}
    <path 
      d="M 0 450 L 100 350 L 250 200 L 400 380 L 550 250 L 700 420 L 850 300 L 1000 450 L 1200 300 L 1200 600 L 0 600 Z" 
      fill={colors.forest} 
      opacity="0.08" 
    />

    {/* Olifants River Winding through valley */}
    <path 
      d="M 0 520 Q 300 480 600 520 T 1200 500 L 1200 600 L 0 600 Z" 
      fill={colors.sand} 
      opacity="0.1" 
    />

    {/* Citrus Groves (Orchard pattern) */}
    <g opacity="0.15">
      {[...Array(8)].map((_, i) => (
        <g key={i} transform={ `translate(${100 + i * 140}, 500)` }>
          {/* Tree trunk */}
          <rect x="-2" y="0" width="4" height="20" fill={colors.brown} />
          {/* Tree canopy */}
          <circle cx="0" cy="-20" r="30" fill={colors.forest} />
          {/* Oranges */}
          <circle cx="-10" cy="-25" r="4" fill={colors.rust} />
          <circle cx="15" cy="-15" r="4" fill={colors.rust} />
          <circle cx="5" cy="-35" r="4" fill={colors.rust} />
        </g>
      ))}
      {[...Array(7)].map((_, i) => (
        <g key={i} transform={ `translate(${170 + i * 140}, 560)` }>
          <rect x="-2" y="0" width="4" height="20" fill={colors.brown} />
          <circle cx="0" cy="-20" r="25" fill={colors.forest} />
          <circle cx="-8" cy="-20" r="3" fill={colors.rust} />
          <circle cx="10" cy="-10" r="3" fill={colors.rust} />
        </g>
      ))}
    </g>

    {/* Fynbos Accents (King Protea) */}
    <g transform="translate(1050, 600) scale(0.8)" opacity="0.2">
      <path d="M 0 0 L 0 -220" stroke={colors.forest} strokeWidth="12" strokeLinecap="round" />
      <circle cx="0" cy="-220" r="40" fill={colors.rust} />
      <path d="M -15 -210 L -45 -290 L 0 -250 L 45 -290 L 15 -210 Z" fill={colors.sand} />
    </g>
  </svg>
);

export const WesternCapeMapIllustration = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 500 700" className={`w-full h-full ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      {/* Paper Texture Filter */}
      <filter id="paperTexture" x="0%" y="0%" width="100%" height="100%">
        <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="5" result="noise" />
        <feDiffuseLighting in="noise" lightingColor="#f4e4bc" surfaceScale="2" result="diffuse">
          <feDistantLight azimuth="45" elevation="60" />
        </feDiffuseLighting>
      </filter>
      {/* Subtle Shadow for Folds */}
      <filter id="foldShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
        <feOffset dx="2" dy="2" result="offsetblur" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.3" />
        </feComponentTransfer>
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    {/* The Physical Paper Aspect */}
    <g filter="url(#foldShadow)">
      {/* Hand-cut/Burnt Edges Shape */}
      <path 
        d="M 20 20 Q 50 15 100 22 T 200 18 T 300 25 T 400 15 T 480 22 L 475 100 Q 485 200 478 350 T 482 550 T 475 680 L 400 675 Q 300 682 200 675 T 100 685 T 25 678 L 22 550 Q 15 350 22 200 T 18 20 Z" 
        fill="#f4e4bc" 
        stroke="#2c1a11" 
        strokeWidth="2" 
      />
      {/* Paper Texture Overlay */}
      <path 
        d="M 20 20 Q 50 15 100 22 T 200 18 T 300 25 T 400 15 T 480 22 L 475 100 Q 485 200 478 350 T 482 550 T 475 680 L 400 675 Q 300 682 200 675 T 100 685 T 25 678 L 22 550 Q 15 350 22 200 T 18 20 Z" 
        filter="url(#paperTexture)" 
        opacity="0.6" 
      />
      
      {/* Burnt/Charred Edge Depth */}
      <path 
        d="M 20 20 Q 50 15 100 22 T 200 18 T 300 25 T 400 15 T 480 22 L 475 100 Q 485 200 478 350 T 482 550 T 475 680 L 400 675 Q 300 682 200 675 T 100 685 T 25 678 L 22 550 Q 15 350 22 200 T 18 20 Z" 
        fill="none" 
        stroke="#4a3023" 
        strokeWidth="12" 
        opacity="0.1" 
        strokeLinejoin="round" 
      />

      {/* Realistic Folds/Creases */}
      <path d="M 20 230 Q 250 210 480 250" stroke="#ad8b60" strokeWidth="1" opacity="0.3" fill="none" />
      <path d="M 250 20 Q 230 350 270 680" stroke="#ad8b60" strokeWidth="1" opacity="0.3" fill="none" />
      <path d="M 20 460 Q 250 480 475 440" stroke="#ad8b60" strokeWidth="1" opacity="0.3" fill="none" />
    </g>

    {/* MAP CONTENT - INK STYLE */}
    <g transform="translate(10, 10) scale(0.95)" opacity="0.9">
      {/* Lattice/Grid Lines (Nautical/Pirate style) */}
      <g opacity="0.1" stroke={colors.brown}>
        {[...Array(6)].map((_, i) => (
          <line key={`v-${i}`} x1={i * 80 + 40} y1="40" x2={i * 80 + 40} y2="640" strokeWidth="0.5" />
        ))}
        {[...Array(8)].map((_, i) => (
          <line key={`h-${i}`} x1="40" y1={i * 80 + 40} x2="440" y2={i * 80 + 40} strokeWidth="0.5" />
        ))}
      </g>

      {/* The Main Voyage Path (Dashed/Dotted) */}
      <path 
        d="M 120 580 Q 200 520 180 400 T 220 250 T 180 120" 
        stroke={colors.rust} 
        strokeWidth="3" 
        strokeDasharray="8 6" 
        strokeLinecap="round" 
        filter="url(#foldShadow)"
      />

      {/* ORNATE COMPASS ROSE */}
      <g transform="translate(420, 120) scale(0.8)">
        <circle cx="0" cy="0" r="35" stroke={colors.brown} strokeWidth="0.5" strokeDasharray="2 2" />
        <path d="M 0 -60 L 12 0 L 0 60 L -12 0 Z" fill={colors.brown} />
        <path d="M -60 0 L 0 -12 L 60 0 L 0 12 Z" fill={colors.brown} />
        <path d="M -40 -40 L 40 40 M -40 40 L 40 -40" stroke={colors.brown} strokeWidth="1" />
        <text x="-8" y="-75" fill={colors.brown} className="font-serif font-black" fontSize="24">N</text>
      </g>

      {/* ANNOTATED ATTRACTIONS (Plain English) */}
      
      {/* 1. Cape Town (The Start) */}
      <g transform="translate(120, 580)">
        <path d="M -15 0 L 15 0 L 0 -25 Z" fill={colors.forest} stroke={colors.dark} strokeWidth="0.5" />
        <text x="25" y="5" fill={colors.dark} className="font-serif font-bold italic" fontSize="14">Cape Town / Airport</text>
        <path d="M 0 -35 L 5 -45 L -5 -45 Z" fill={colors.rust} opacity="0.6" /> {/* Small Plane icon */}
      </g>

      {/* 2. Durbanville Hills (Wine) */}
      <g transform="translate(200, 480)">
        <circle cx="0" cy="0" r="8" fill={colors.brown} />
        <path d="M -5 -8 L 5 -8 L 0 4 Z" fill={colors.rust} />
        <text x="15" y="5" fill={colors.dark} className="font-serif" fontSize="12">Durbanville Wine Area</text>
      </g>

      {/* 3. Malmesbury Wheat Fields */}
      <g transform="translate(150, 380)">
        <path d="M -5 10 Q 0 -15 5 10" stroke="#d4af37" strokeWidth="2" fill="none" />
        <path d="M -15 15 Q -10 -10 -5 15" stroke="#d4af37" strokeWidth="2" fill="none" />
        <text x="15" y="5" fill={colors.dark} className="font-serif" fontSize="12">Malmesbury Wheat Fields</text>
      </g>

      {/* 4. Piekenierskloof Pass (The Mountain Pass) */}
      <g transform="translate(230, 240)">
        <path d="M -20 -10 L 0 -40 L 25 -10 Z" fill={colors.forest} opacity="0.8" />
        <path d="M -15 0 Q 0 -15 15 0 T 45 0" stroke={colors.brown} strokeWidth="2" fill="none" />
        <text x="25" y="-45" fill={colors.dark} className="font-serif font-bold" fontSize="14">Mountain Pass</text>
      </g>

      {/* 5. Wolfkop (X marks the SPOT) */}
      <g transform="translate(180, 120)">
        <path 
          d="M -25 -25 L 25 25 M 25 -25 L -25 25" 
          stroke={colors.brown} 
          strokeWidth="10" 
          strokeLinecap="round" 
        />
        <path 
          d="M -25 -25 L 25 25 M 25 -25 L -25 25" 
          stroke={colors.rust} 
          strokeWidth="6" 
          strokeLinecap="round" 
        />
        <text x="40" y="5" fill={colors.rust} className="font-serif font-black uppercase tracking-widest" fontSize="20">Wolfkop</text>
        <rect x="40" y="15" width="80" height="2" fill={colors.rust} opacity="0.3" />
        
        {/* Hand-sketched Treasure Chest icon */}
        <g transform="translate(-10, 40) scale(0.6)">
          <rect x="0" y="0" width="40" height="25" fill={colors.brown} />
          <path d="M 0 0 C 0 -20 40 -20 40 0" fill={colors.brown} stroke={colors.dark} strokeWidth="1" />
          <rect x="18" y="2" width="4" height="6" fill="#f1c40f" />
        </g>
      </g>

      {/* SKETCHY DECORATIONS */}
      {/* Sea Monster (Olifants River serpent?) */}
      <g transform="translate(60, 280) scale(0.7)" opacity="0.15">
        <path d="M 0 0 Q 30 -60 60 0 T 120 0 T 180 -30" stroke={colors.forest} strokeWidth="8" strokeLinecap="round" fill="none" />
        <circle cx="170" cy="-35" r="5" fill={colors.dark} />
      </g>

      {/* Simple Boat */}
      <g transform="translate(80, 450) scale(0.5)" opacity="0.2">
        <path d="M -40 0 L 40 0 L 30 20 L -30 20 Z" fill={colors.brown} />
        <line x1="0" y1="0" x2="0" y2="-40" stroke={colors.dark} strokeWidth="2" />
        <path d="M 0 -40 L 20 -10 L 0 -10 Z" fill={colors.cream} />
      </g>

      {/* Lat/Long markers */}
      <text x="20" y="320" fill={colors.brown} opacity="0.4" fontSize="10" transform="rotate(-90 20 320)">32.4° S</text>
      <text x="240" y="660" fill={colors.brown} opacity="0.4" fontSize="10">18.9° E</text>
    </g>

    {/* Hand-drawn 'stain' effects */}
    <circle cx="380" cy="580" r="30" fill={colors.brown} opacity="0.05" />
    <circle cx="50" cy="120" r="40" fill={colors.brown} opacity="0.03" />
  </svg>
);
