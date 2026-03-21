import React from "react";

const colors = {
  rust: "#a64d32",
  forest: "#3a5a40",
  sand: "#e5e0d8",
  cream: "#f5f2ed",
  brown: "#9a3324",
  dark: "#1c2b1e",
};

export const MeetingIllustration = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 800 600"
    className={`w-full h-full ${className}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Sky / Background */}
    <rect width="800" height="600" fill={colors.cream} />
    {/* Sun */}
    <circle cx="200" cy="200" r="80" fill={colors.sand} />
    
    {/* Table Mountain Silhouette */}
    <path
      d="M0 600 L0 450 L150 400 L250 350 L550 350 L650 400 L800 480 L800 600 Z"
      fill={colors.forest}
      opacity="0.2"
    />
    <path
      d="M0 600 L0 500 L200 450 L300 380 L600 380 L700 450 L800 520 L800 600 Z"
      fill={colors.forest}
      opacity="0.3"
    />

    {/* Urban / Cafe foreground abstract */}
    <rect x="-50" y="500" width="900" height="100" fill={colors.forest} />
    
    {/* Stylized Coffee Cup and Protea/Fynbos */}
    <g transform="translate(350, 420)">
      {/* Table arc */}
      <path d="M-150 80 Q50 60 250 80 L250 180 L-150 180 Z" fill={colors.dark} />
      {/* Cup base */}
      <path d="M0 80 Q0 0 50 0 L50 80 Z" fill={colors.sand} />
      {/* Cup handle */}
      <path d="M50 20 Q80 20 80 50 Q80 70 50 70" stroke={colors.sand} strokeWidth="8" fill="none" />
      {/* Coffee steam */}
      <path d="M20 -10 Q10 -30 30 -50" stroke={colors.rust} strokeWidth="4" strokeLinecap="round" fill="none" />
      <path d="M40 -10 Q30 -30 50 -50" stroke={colors.rust} strokeWidth="4" strokeLinecap="round" fill="none" />
    </g>

    {/* Stylized Fynbos / Protea */}
    <g transform="translate(150, 600)">
      <path d="M0 0 L0 -150" stroke={colors.rust} strokeWidth="6" strokeLinecap="round" />
      <path d="M0 -50 Q50 -80 30 -120" stroke={colors.forest} strokeWidth="6" strokeLinecap="round" fill="none" />
      <path d="M0 -80 Q-50 -100 -30 -140" stroke={colors.forest} strokeWidth="6" strokeLinecap="round" fill="none" />
      <circle cx="0" cy="-150" r="15" fill={colors.brown} />
      <path d="M-15 -150 L-30 -180 L0 -160 L30 -180 L15 -150 Z" fill={colors.rust} />
      <path d="M-10 -155 L-20 -190 L0 -170 L20 -190 L10 -155 Z" fill={colors.sand} />
    </g>
  </svg>
);

export const RoadTripIllustration = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 800 600"
    className={`w-full h-full ${className}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="800" height="600" fill={colors.cream} />
    
    {/* Ocean & Coastline Background */}
    <rect y="300" width="800" height="300" fill={colors.sand} opacity="0.4" />
    <path d="M 0 320 Q 200 350 400 300 T 800 310 L 800 600 L 0 600 Z" fill={colors.dark} opacity="0.1" />
    <path d="M 0 350 Q 300 400 500 320 T 800 360 L 800 600 L 0 600 Z" fill={colors.forest} opacity="0.2" />

    {/* The Road */}
    <path d="M -100 600 Q 150 450 400 350 Q 550 300 700 280 L 720 280 Q 550 310 400 370 Q 150 470 -50 600 Z" fill={colors.sand} />
    
    {/* Car / Van */}
    <g transform="translate(180, 480)">
      <rect x="-40" y="-30" width="80" height="40" rx="10" fill={colors.rust} />
      <rect x="-25" y="-20" width="20" height="15" rx="3" fill={colors.cream} />
      <rect x="5" y="-20" width="20" height="15" rx="3" fill={colors.cream} />
      <circle cx="-20" cy="15" r="12" fill={colors.dark} />
      <circle cx="-20" cy="15" r="4" fill={colors.sand} />
      <circle cx="20" cy="15" r="12" fill={colors.dark} />
      <circle cx="20" cy="15" r="4" fill={colors.sand} />
      {/* Surfboard on top */}
      <path d="M -50 -35 L 50 -35 L 45 -40 L -45 -40 Z" fill={colors.sand} />
    </g>

    {/* Fynbos Silhouette */}
    <g transform="translate(650, 600)">
      <path d="M0 0 L-20 -150 Q-80 -200 0 -250" stroke={colors.forest} strokeWidth="8" strokeLinecap="round" fill="none" />
      <circle cx="-10" cy="-200" r="12" fill={colors.brown} />
      <path d="M -10 -200 L -30 -230 L -5 -215 L 20 -230 L 0 -205 Z" fill={colors.rust} />
    </g>
  </svg>
);

export const ProposalIllustration = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 800 600"
    className={`w-full h-full ${className}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="800" height="600" fill={colors.rust} opacity="0.1" />
    
    {/* Giant Setting Sun */}
    <circle cx="400" cy="350" r="180" fill={colors.rust} opacity="0.2" />
    <circle cx="400" cy="350" r="140" fill={colors.rust} opacity="0.4" />
    <circle cx="400" cy="350" r="100" fill={colors.rust} opacity="0.8" />

    {/* Cederberg/Elk Mountains */}
    <path d="M 0 600 L 0 350 L 100 280 L 250 400 L 400 320 L 550 450 L 700 250 L 800 380 L 800 600 Z" fill={colors.brown} opacity="0.5" />
    <path d="M 0 600 L 0 450 L 150 350 L 300 480 L 500 380 L 650 500 L 800 400 L 800 600 Z" fill={colors.forest} />

    {/* Engagement Ring Abstract / Sun Reflection */}
    <path d="M 400 450 Q 800 430 400 580 Q 0 430 400 450 Z" fill={colors.sand} opacity="0.3" />

    {/* Couple Silhouettes (Hiking) */}
    <g transform="translate(480, 360)">
      <path d="M 0 20 L -10 0 L -5 -15 L 5 0 Z" fill={colors.dark} />
      <circle cx="-2" cy="-22" r="6" fill={colors.dark} />
      {/* Proposing person */}
      <path d="M -20 20 L -25 5 L -15 -10 L -10 5 Z" fill={colors.dark} />
      <circle cx="-12" cy="-18" r="6" fill={colors.dark} />
    </g>
  </svg>
);

export const WeddingIllustration = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 800 600"
    className={`w-full h-full ${className}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="800" height="600" fill={colors.cream} />
    
    {/* Wolfkop Mountains */}
    <path d="M 0 600 L 0 250 L 200 150 L 450 300 L 600 200 L 800 350 L 800 600 Z" fill={colors.forest} opacity="0.1" />
    <path d="M 0 600 L 0 350 L 250 250 L 500 400 L 700 300 L 800 450 L 800 600 Z" fill={colors.forest} opacity="0.2" />

    {/* The Tent / Camp */}
    <g transform="translate(400, 480)">
      {/* Main Tent */}
      <path d="M 0 -150 L -120 0 L 120 0 Z" fill={colors.sand} />
      <path d="M 0 -150 L 0 0 L 120 0 Z" fill={colors.dark} opacity="0.1" />
      {/* Tent opening */}
      <path d="M 0 -80 L -30 0 L 30 0 Z" fill={colors.dark} />
      {/* Flags / Bunting */}
      <path d="M -120 0 Q -150 -50 -200 -80" stroke={colors.rust} strokeWidth="2" fill="none" />
      <path d="M 120 0 Q 150 -50 200 -80" stroke={colors.rust} strokeWidth="2" fill="none" />
      <circle cx="-160" cy="-40" r="4" fill={colors.brown} />
      <circle cx="-180" cy="-60" r="4" fill={colors.forest} />
      <circle cx="160" cy="-40" r="4" fill={colors.brown} />
      <circle cx="180" cy="-60" r="4" fill={colors.forest} />
    </g>

    {/* Foreground Fynbos Elements */}
    <g transform="translate(100, 600)">
      <path d="M 0 0 L 20 -150 Q 80 -180 120 -150" stroke={colors.rust} strokeWidth="6" strokeLinecap="round" fill="none" />
      <path d="M 20 -150 Q -20 -180 -60 -150" stroke={colors.rust} strokeWidth="6" strokeLinecap="round" fill="none" />
      <circle cx="20" cy="-150" r="18" fill={colors.brown} />
      <path d="M 5 -150 L -15 -190 L 20 -170 L 55 -190 L 35 -150 Z" fill={colors.sand} />
    </g>
    <g transform="translate(680, 600) scale(0.8)">
      <path d="M 0 0 L -20 -150 Q -80 -180 -120 -150" stroke={colors.forest} strokeWidth="6" strokeLinecap="round" fill="none" />
      <path d="M -20 -150 Q 20 -180 60 -150" stroke={colors.forest} strokeWidth="6" strokeLinecap="round" fill="none" />
      <circle cx="-20" cy="-150" r="18" fill={colors.brown} />
      <path d="M -5 -150 L 15 -190 L -20 -170 L -55 -190 L -35 -150 Z" fill={colors.rust} />
    </g>

    {/* Stars / Magic */}
    <circle cx="200" cy="150" r="3" fill={colors.rust} />
    <circle cx="500" cy="80" r="2" fill={colors.sand} />
    <circle cx="650" cy="180" r="4" fill={colors.brown} />
  </svg>
);
