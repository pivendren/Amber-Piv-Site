/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "motion/react";
import {
  Heart,
  Car,
  Plane,
  Home,
  ChevronDown,
  ChevronUp,
  Shirt,
  Menu,
  X,
  MapPin,
  Calendar,
  ArrowRight,
  Sun,
  Mountain,
  Flame,
  Zap,
} from "lucide-react";
import Floating, { FloatingElement } from "./components/ui/parallax-floating";
import {
  MeetingIllustration,
  RoadTripIllustration,
  ProposalIllustration,
  WeddingIllustration,
} from "./components/illustrations/StoryIllustrations";
import {
  HikingIllustration,
} from "./components/illustrations/HeroIllustrations";
import {
  LocationLodgingIllustration,
  ScheduleIllustration,
  PackingListIllustration,
  CitrusdalIllustration,
  WesternCapeMapIllustration,
} from "./components/illustrations/InfoGridIllustrations";
import { cn } from "./lib/utils";
import locationLodgingImg from "./assets/Location and lodging.webp";
import scheduleImg from "./assets/Schedule.webp";
import packingImg from "./assets/Packing.webp";
import mapImg from "./assets/Map.webp";

const MEDIA_BASE = import.meta.env.BASE_URL + "media/";

// All 32 polaroids — tightly packed, scattered, overlapping
// top/left in %, w/h in vw units, rotate in deg, z for stacking
type Polaroid = {
  src: string;
  type: "photo" | "video";
  top: number; left: number;
  w: number; h: number;
  rotate: number;
  z: number;
  depth: number;
};

const POLAROIDS: Polaroid[] = [
  // Videos always z:10+ so they sit on top when overlapping.
  // Paired video+photo are separated by 2+ rows.
  // Vertical offsets staggered within rows to reduce face-on-face overlap.

  // Row 1 (top edge, ~0-18%)
  { src: "photo-wildflowers.webp", type: "photo", top: 0, left: -5, w: 22, h: 16, rotate: -5, z: 2, depth: 0.4 },
  { src: "video-IMG_0172.mp4",       type: "video", top: 5,  left: 16, w: 18, h: 14, rotate: 3,   z: 1, depth: 0.6 },
  { src: "photo-ferris-wheel.webp", type: "photo", top: 4, left: 48, w: 19, h: 14, rotate: 4, z: 3, depth: 0.7 },
  { src: "photo-museum.webp",        type: "photo", top: 4, left: 30, w: 20, h: 15, rotate: -2,  z: 10, depth: 0.3 },
  { src: "video-IMG_2373.mp4",       type: "video", top: -2, left: 64, w: 17, h: 20, rotate: -3,  z: 11, depth: 0.5 },
  // tree (pair of 2373) is in row 5 — well separated
  { src: "photo-beach.webp",       type: "photo", top: 1,  left: 80, w: 20, h: 20, rotate: 2,   z: 2, depth: 0.4 },
  // skyline (pair of 0906) moved here from row 2 — 0906 is in row 4

  // Row 2 (~16-34%)
  { src: "video-IMG_0767.mp4",       type: "video", top: 17, left: -2, w: 17, h: 22, rotate: 4,   z: 12, depth: 0.8 },
  // building (pair of 0767) is in row 5 — well separated
  { src: "photo-fitness.webp",       type: "photo", top: 20, left: 13, w: 16, h: 20, rotate: -4,  z: 3, depth: 0.3 },
  { src: "photo-night1.webp",        type: "photo", top: 17, left: 27, w: 20, h: 15, rotate: 2,   z: 1, depth: 0.5 },
  { src: "photo-table-mountain.webp",type: "photo", top: 19, left: 44, w: 16, h: 22, rotate: -3,  z: 2, depth: 0.6 },
  { src: "photo-skydive.webp",       type: "photo", top: 17, left: 58, w: 15, h: 20, rotate: 3,   z: 4, depth: 0.4 },
  // skydive (pair of 0797) — 0797 is in row 6 — well separated
  { src: "photo-skyline.webp",         type: "photo", top: 20, left: 73, w: 20, h: 15, rotate: -2,  z: 1, depth: 0.7 },
  { src: "photo-cape-town.webp",     type: "photo", top: 17, left: 87, w: 23, h: 20, rotate: 2,   z: 2, depth: 0.3 },
  // cape-town (pair of 3070) — 3070 is in row 5 — separated

  // Row 3 (~34-50%) — flanks center card, left + right edges only
  { src: "photo-night2.webp",        type: "photo", top: 35, left: -3, w: 21, h: 15, rotate: -3,  z: 2, depth: 0.5 },
  { src: "video-IMG_2382.mp4",       type: "video", top: 37, left: 14, w: 14, h: 18, rotate: 5,   z: 13, depth: 0.9 },
  // bougainvillea (pair of 2382) is in row 6 — well separated
  { src: "video-IMG_3214.mp4", type: "video", top: 49, left: 71, w: 16, h: 21, rotate: 4, z: 15, depth: 0.4 },
  { src: "photo-promenade.webp", type: "photo", top: 35, left: 70, w: 15, h: 20, rotate: -4, z: 3, depth: 0.6 },
  { src: "video-IMG_0906.mp4",       type: "video", top: 37, left: 84, w: 15, h: 19, rotate: 3,   z: 14, depth: 0.5 },
  // city (pair of 3214) moved to row 6 — well separated

  // Row 4 (~50-66%) — flanks center card, left + right edges only
  { src: "video-IMG_1880.mp4",       type: "video", top: 52, left: -2, w: 18, h: 14, rotate: 3,   z: 11, depth: 0.4 },
  // garden (pair of 1880) is in row 6 — well separated
  { src: "photo-dinosaurs.webp",     type: "photo", top: 54, left: 13, w: 16, h: 16, rotate: -5,  z: 2, depth: 0.7 },
  // skyline (pair of 0906) is in row 1 — well separated
  { src: "photo-concert.webp",       type: "photo", top: 54, left: 84, w: 19, h: 15, rotate: -2,  z: 3, depth: 0.5 },
  // concert (pair of 3432) — 3432 is in row 6 — separated

  // Row 5 (~65-80%)
  { src: "photo-building.webp",      type: "photo", top: 66, left: -2, w: 14, h: 18, rotate: -4,  z: 3, depth: 0.6 },
  // building (pair of 0767) — 0767 is in row 2 — well separated
  { src: "video-IMG_1275.mp4",       type: "video", top: 68, left: 11, w: 15, h: 19, rotate: 3,   z: 12, depth: 0.8 },
  // cafe (pair of 1275) moved to row 1 area — but let me put it here far apart
  { src: "photo-rocks.webp",         type: "photo", top: 66, left: 24, w: 14, h: 22, rotate: -2,  z: 1, depth: 0.4 },
  { src: "photo-tree.webp",          type: "photo", top: 68, left: 38, w: 15, h: 20, rotate: 5,   z: 4, depth: 0.5 },
  // tree (pair of 2373) — 2373 is in row 1 — well separated
  { src: "video-IMG_3070.mp4",       type: "video", top: 66, left: 52, w: 17, h: 13, rotate: -3,  z: 10, depth: 0.3 },
  // cape-town (pair of 3070) is in row 2 — well separated
  { src: "photo-cafe.webp",          type: "photo", top: 68, left: 67, w: 15, h: 20, rotate: 2,   z: 2, depth: 0.4 },
  // cafe (pair of 1275) — 1275 is left:11 in this row but 56vw apart — ok
  { src: "photo-garden.webp",        type: "photo", top: 66, left: 80, w: 20, h: 15, rotate: -3,  z: 1, depth: 0.7 },
  // garden (pair of 1880) — 1880 is in row 4 — separated

  // Row 6 (bottom edge, ~80-100%)
  { src: "photo-bougainvillea.webp", type: "photo", top: 82, left: -1, w: 15, h: 21, rotate: -3,   z: 2, depth: 0.5 },
  // bougainvillea (pair of 2382) — 2382 is in row 3 — well separated
  { src: "video-IMG_0797.mp4",       type: "video", top: 84, left: 12, w: 18, h: 14, rotate: -4,  z: 11, depth: 0.6 },
  // skydive (pair of 0797) is in row 2 — well separated
  { src: "photo-city.webp",          type: "photo", top: 82, left: 28, w: 15, h: 20, rotate: 2,   z: 3, depth: 0.3 },
  // city (pair of 3214) — 3214 is in row 3 — well separated
  { src: "photo-wildflowers.webp",   type: "photo", top: 84, left: 42, w: 20, h: 15, rotate: -5,  z: 1, depth: 0.8 },
  { src: "video-IMG_3432.mp4",       type: "video", top: 82, left: 63, w: 18, h: 14, rotate: 4,   z: 10, depth: 0.7 },
  // concert (pair of 3432) is in row 4 — well separated
  { src: "photo-ferris-wheel.webp", type: "photo", top: 80, left: 79, w: 20, h: 15, rotate: -2, z: 1, depth: 0.3 },
];

const NAV_ITEMS = ["Schedule", "Travel", "Packing"];

// Respect reduced-motion preference
const usePrefersReducedMotion = () => {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return reduced;
};

const FadeInWhenVisible = ({
  children,
  delay = 0,
  y = 20,
  x = 0,
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  x?: number;
}) => {
  const reduced = usePrefersReducedMotion();
  if (reduced) return <>{children}</>;
  return (
    <motion.div
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
};

const SectionDivider = ({
  fromColor,
  toColor,
  flip = false,
}: {
  fromColor: string;
  toColor: string;
  flip?: boolean;
}) => (
  <div
    className="relative w-full overflow-hidden -mb-px -mt-px"
    style={{ height: "80px" }}
  >
    <svg
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      className="absolute inset-0 w-full h-full"
      style={{ transform: flip ? "scaleY(-1)" : undefined }}
    >
      <path d="M0,0 L1440,0 L1440,80 L0,80 Z" fill={fromColor} />
      <path
        d="M0,40 C360,80 720,0 1080,50 C1260,70 1380,60 1440,40 L1440,80 L0,80 Z"
        fill={toColor}
      />
    </svg>
  </div>
);

/* ─── Navbar ─────────────────────────────────────────────────────────── */

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const threshold = window.innerHeight * 0.7;
    const onScroll = () => setVisible(window.scrollY > threshold);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.04)]"
        >
          <div className="max-w-7xl mx-auto px-6 py-3.5 flex justify-between items-center">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="font-display font-bold text-lg tracking-tight text-wedding-brown"
            >
              WEDDING CAMP
            </a>
            <div className="hidden md:flex gap-10 text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-500">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-wedding-brown transition-colors duration-300 relative group py-1"
                >
                  {item}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-[1.5px] bg-wedding-brown/60 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-wedding-brown p-2 -mr-2"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="md:hidden overflow-hidden bg-cream/95 backdrop-blur-xl border-t border-black/[0.03]"
              >
                <div className="flex flex-col px-6 py-4 gap-4">
                  {NAV_ITEMS.map((item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      onClick={() => setMobileOpen(false)}
                      className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-600 hover:text-wedding-brown transition-colors"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

/* ─── Hero (untouched) ───────────────────────────────────────────────── */

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -120]);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden min-h-screen bg-cream"
    >
      {/* Scattered polaroid stack — single layer, all 32 items */}
      <Floating sensitivity={-0.3} className="overflow-hidden z-0">
        {POLAROIDS.map((p, i) => (
          <FloatingElement
            key={p.src}
            depth={p.depth}
            className="absolute"
          >
            <motion.div
              style={{
                top: `${p.top}vh`,
                left: `${p.left}vw`,
                width: `${p.w}vw`,
                height: `${p.h}vh`,
                zIndex: p.z,
                position: "absolute",
              }}
              initial={{ opacity: 0, scale: 0.92, rotate: p.rotate }}
              animate={
                p.type === "video"
                  ? {
                      opacity: 1,
                      scale: [1.2, 1.22, 1.2],
                      rotate: p.rotate,
                    }
                  : { opacity: 1, scale: 1, rotate: p.rotate }
              }
              transition={
                p.type === "video"
                  ? {
                      opacity: { duration: 0.6, delay: i * 0.04 },
                      scale: {
                        duration: 8 + p.depth * 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }
                  : { opacity: { duration: 0.6, delay: i * 0.04 } }
              }
              className="bg-white p-[3px] md:p-[5px] rounded-sm shadow-[0_2px_15px_rgba(0,0,0,0.2)] hover:z-50 transition-[z-index]"
            >
              {p.type === "photo" ? (
                <img
                  src={MEDIA_BASE + p.src}
                  alt=""
                  loading={i < 12 ? undefined : "lazy"}
                  className="w-full h-full object-cover rounded-[1px]"
                />
              ) : (
                <video
                  src={MEDIA_BASE + p.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload={i < 6 ? "auto" : "none"}
                  className="w-full h-full object-cover rounded-[1px]"
                />
              )}
            </motion.div>
          </FloatingElement>
        ))}
      </Floating>

      {/* Center card — sits above the polaroid scatter */}
      <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
        <motion.div
          style={{ y: parallaxY }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="bg-white/80 backdrop-blur-xl rounded-2xl px-8 py-10 md:px-14 md:py-14 shadow-2xl shadow-black/15 ring-1 ring-white/60 mx-4 max-w-2xl text-center"
        >
          <h1 className="font-display text-5xl md:text-8xl font-bold text-wedding-brown mb-0 leading-tight uppercase tracking-tight">
            WEDDING CAMP
          </h1>
          <h2 className="font-display text-3xl md:text-6xl text-wedding-brown font-bold uppercase tracking-tight mb-6">
            Amber & Piv
          </h2>
          <p className="text-lg md:text-2xl text-neutral-800 mb-3 font-normal tracking-tight">
            Join us as we celebrate our marriage
          </p>
          <div className="text-xs md:text-base font-bold uppercase tracking-widest text-neutral-900">
            22 June 2026 | Wolfkop Nature Reserve, Citrusdal
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 z-30 drop-shadow-md"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.div>
    </section>
  );
};

/* ─── Info Grid ──────────────────────────────────────────────────────── */

const InfoGrid = () => (
  <section id="info" className="relative">
    <SectionDivider fromColor="#f8f8f8" toColor="#d4c3a3" flip />
    <div className="bg-golden py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <FadeInWhenVisible>
          <div className="text-center mb-12">
            <p className="text-olive/60 text-xs font-bold uppercase tracking-[0.3em] mb-3">
              Everything you need to know
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-olive tracking-tight">
              At a Glance
            </h2>
          </div>
        </FadeInWhenVisible>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Location — spans full width */}
          {/* Location & Lodging — full width, image bottom-aligned */}
          <div className="md:col-span-2">
          <FadeInWhenVisible>
            <motion.a
              href="#travel"
              whileHover={{ y: -3 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="group block rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute inset-0 pointer-events-none">
                <img
                  src={locationLodgingImg}
                  alt="Wolfkop Nature Reserve landscape"
                  loading="lazy"
                  className="w-full h-full object-cover object-bottom rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent rounded-2xl" />
              </div>
              <div className="relative z-10 flex flex-col justify-end h-full min-h-[320px] md:min-h-[380px] p-8 md:p-10">
                <div className="max-w-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-white/15 backdrop-blur-sm flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/60">
                      Venue & Stay
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight drop-shadow-sm">
                    Location & Lodging
                  </h3>
                  <p className="text-sm text-white/75 leading-relaxed mb-5 max-w-md">
                    Wolfkop Nature Reserve in the Western Cape. Rugged mountains,
                    golden rock formations, and cottages nestled in the valley.
                  </p>
                  <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-golden-light group-hover:gap-3 transition-all duration-300">
                    Explore
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </motion.a>
          </FadeInWhenVisible>
          </div>

          {/* Schedule — vertical image */}
          <FadeInWhenVisible delay={0.1}>
            <motion.a
              href="#schedule"
              whileHover={{ y: -3 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="group block rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 relative overflow-hidden h-full"
            >
              <div className="absolute inset-0 pointer-events-none">
                <img
                  src={scheduleImg}
                  alt="Wedding weekend schedule illustration"
                  loading="lazy"
                  className="w-full h-full object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent rounded-2xl" />
              </div>
              <div className="relative z-10 flex flex-col justify-end h-full min-h-[480px] md:min-h-[520px] p-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-white/15 backdrop-blur-sm flex items-center justify-center">
                    <Calendar className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/60">
                    4 Days
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-white mb-2 tracking-tight drop-shadow-sm">
                  Schedule
                </h3>
                <p className="text-sm text-white/70 leading-relaxed mb-4">
                  From Cape Town arrival to the sunset ceremony and beyond.
                </p>
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-golden-light group-hover:gap-3 transition-all duration-300">
                  View timeline
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </motion.a>
          </FadeInWhenVisible>

          {/* Packing — vertical image */}
          <FadeInWhenVisible delay={0.15}>
            <motion.a
              href="#packing"
              whileHover={{ y: -3 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="group block rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 relative overflow-hidden h-full"
            >
              <div className="absolute inset-0 pointer-events-none">
                <img
                  src={packingImg}
                  alt="Packing list illustration"
                  loading="lazy"
                  className="w-full h-full object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent rounded-2xl" />
              </div>
              <div className="relative z-10 flex flex-col justify-end h-full min-h-[480px] md:min-h-[520px] p-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-white/15 backdrop-blur-sm flex items-center justify-center">
                    <Shirt className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/60">
                    Winter Essentials
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-white mb-2 tracking-tight drop-shadow-sm">
                  Packing List
                </h3>
                <p className="text-sm text-white/70 leading-relaxed mb-4">
                  Mountain mornings are cold. Here's what to bring.
                </p>
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-golden-light group-hover:gap-3 transition-all duration-300">
                  See the list
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </motion.a>
          </FadeInWhenVisible>
        </div>
      </div>
    </div>
    <SectionDivider fromColor="#d4c3a3" toColor="#f5f2ed" />
  </section>
);

/* ─── Schedule Timeline ──────────────────────────────────────────────── */

const TIMELINE_EVENTS = [
  {
    date: "Fri 19 – Sat 20 June",
    title: "Arrival in Cape Town",
    Illustration: MeetingIllustration,
    side: "left" as const,
    text: "Folks begin arriving in the Mother City. Take some time to settle in and enjoy the sea air.",
  },
  {
    date: "Saturday 08:00",
    title: "Green Point Parkrun",
    Illustration: HikingIllustration,
    side: "right" as const,
    text: "A 5km dash (or stroll) through Green Point Park. A great chance to stretch the legs before the drive.",
  },
  {
    date: "Saturday 14:00",
    title: "Check-in at Wolfkop",
    Illustration: RoadTripIllustration,
    side: "left" as const,
    text: "Supply run in CPT, then hitting the N7 north. Check-in opens at 14:00 at Wolfkop Nature Reserve.",
  },
  {
    date: "Sunday 13:00",
    title: "The Community Lunch",
    Illustration: ScheduleIllustration,
    side: "right" as const,
    text: "A large, lazy Sunday lunch at 'basecamp'. Relaxation and mountain views are the order of the day.",
  },
  {
    date: "Monday 16:00",
    title: "The Sunset Wedding",
    Illustration: WeddingIllustration,
    side: "left" as const,
    text: "The main event. A sunset ceremony followed by photos, then a celebratory braai for the rest of the eve.",
    highlight: true,
  },
  {
    date: "Tuesday 10:00",
    title: "Walk & Farewell",
    Illustration: ProposalIllustration,
    side: "right" as const,
    text: "One last mountain walk in the morning before checking out and heading home.",
  },
];

const TimelineDot = ({ highlight = false }: { highlight?: boolean }) => (
  <motion.div
    initial={{ scale: 0 }}
    whileInView={{ scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, ease: "backOut" }}
    className="absolute left-1/2 -translate-x-1/2 z-20"
  >
    <div className="relative">
      <div
        className={cn(
          "w-5 h-5 rounded-full border-[3px] border-cream shadow-md",
          highlight ? "bg-rust" : "bg-forest"
        )}
      />
      <motion.div
        animate={{ scale: [1, 2, 1], opacity: [0.3, 0, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className={cn(
          "absolute inset-0 w-5 h-5 rounded-full",
          highlight ? "bg-rust/30" : "bg-forest/20"
        )}
      />
    </div>
  </motion.div>
);

const ScheduleTimeline = () => (
  <section
    id="schedule"
    className="bg-cream py-28 md:py-36 topo-bg relative overflow-hidden"
  >
    <div className="max-w-5xl mx-auto px-6">
      <FadeInWhenVisible>
        <div className="text-center mb-20 md:mb-28">
          <motion.div
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-forest/5 mb-6"
          >
            <Heart className="w-6 h-6 text-forest" />
          </motion.div>
          <h2 className="font-serif text-5xl md:text-7xl font-bold text-neutral-800 tracking-tight mb-4">
            Schedule
          </h2>
          <p className="text-neutral-400 text-sm tracking-wide max-w-md mx-auto">
            Four days of adventure, connection, and celebration
          </p>
        </div>
      </FadeInWhenVisible>

      <div className="relative">
        {/* Timeline line */}
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
          className="absolute left-1/2 top-0 w-px bg-gradient-to-b from-forest/0 via-forest/15 to-forest/0 -translate-x-1/2 hidden md:block"
        />

        <div className="space-y-24 md:space-y-32">
          {TIMELINE_EVENTS.map((item, i) => (
            <div
              key={i}
              className={cn(
                "relative flex flex-col md:flex-row items-center gap-8 md:gap-14",
                item.side === "right" ? "md:flex-row-reverse" : ""
              )}
            >
              {/* Illustration side */}
              <div className="md:w-1/2 flex justify-center">
                <FadeInWhenVisible x={item.side === "left" ? -40 : 40}>
                  <motion.div
                    whileHover={{ scale: 1.015 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="relative group"
                  >
                    <div className="absolute -inset-3 bg-forest/5 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <item.Illustration className="relative rounded-2xl shadow-xl shadow-black/8 w-full max-w-sm z-10" />
                  </motion.div>
                </FadeInWhenVisible>
              </div>

              {/* Timeline dot */}
              <div className="hidden md:block">
                <TimelineDot highlight={item.highlight} />
              </div>

              {/* Text side */}
              <div
                className={cn(
                  "md:w-1/2",
                  item.side === "left" ? "md:text-left" : "md:text-right"
                )}
              >
                <FadeInWhenVisible x={item.side === "left" ? 40 : -40} delay={0.1}>
                  <div
                    className={cn(
                      "inline-block",
                      item.side === "right" && "md:float-right md:clear-right"
                    )}
                  >
                    {/* Date badge */}
                    <span
                      className={cn(
                        "inline-block text-[10px] font-bold uppercase tracking-[0.25em] px-3 py-1.5 rounded-full mb-4",
                        item.highlight
                          ? "bg-rust/10 text-rust"
                          : "bg-forest/5 text-forest/60"
                      )}
                    >
                      {item.date}
                    </span>
                    <h3
                      className={cn(
                        "font-serif text-2xl md:text-3xl font-bold mb-3 tracking-tight",
                        item.highlight ? "text-rust" : "text-forest"
                      )}
                    >
                      {item.title}
                    </h3>
                    <p className="text-[15px] text-neutral-500 leading-relaxed max-w-sm">
                      {item.text}
                    </p>
                  </div>
                </FadeInWhenVisible>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ─── Travel Details ─────────────────────────────────────────────────── */

const TravelDetails = () => (
  <section id="travel" className="bg-white py-28 md:py-36">
    <div className="max-w-5xl mx-auto px-6">
      {/* Getting There */}
      <FadeInWhenVisible>
        <div className="text-center mb-16">
          <p className="text-rust/50 text-xs font-bold uppercase tracking-[0.3em] mb-3">
            Fly in. Drive out.
          </p>
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-forest tracking-tight">
            Getting There
          </h2>
        </div>
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <div className="bg-cream/60 rounded-3xl border border-forest/[0.06] overflow-hidden mb-28 md:mb-36">
          <div className="grid grid-cols-1 md:grid-cols-5 min-h-[480px]">
            {/* Left — info */}
            <div className="md:col-span-3 p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-11 h-11 rounded-xl bg-rust/8 flex items-center justify-center">
                  <Car className="w-5 h-5 text-rust" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-forest tracking-tight">
                    Cape Town to Citrusdal
                  </h3>
                  <p className="text-xs text-neutral-400 font-medium">
                    170 km &middot; 2 hour drive via the N7
                  </p>
                </div>
              </div>

              <div className="space-y-8 mb-10">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-forest/50 mb-3">
                    Flights
                  </h4>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    Most guests are flying into{" "}
                    <strong className="text-neutral-800">Cape Town International (CPT)</strong>{" "}
                    between Friday and Saturday before the main event on 22 June.
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-forest/50 mb-3">
                    The Route
                  </h4>
                  <div className="space-y-2.5">
                    {[
                      "Take the N7 North towards Malmesbury",
                      "Continue through Moorreesburg and Piketberg",
                      "Ascend the beautiful Piekenierskloof Pass",
                      "Descending into the valley, take the Citrusdal turnoff",
                    ].map((step, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <span className="w-5 h-5 rounded-full bg-forest/8 flex items-center justify-center shrink-0 mt-0.5">
                          <span className="text-[10px] font-bold text-forest/60">{i + 1}</span>
                        </span>
                        <p className="text-sm text-neutral-500 leading-relaxed">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-3 p-4 bg-forest/[0.04] rounded-xl items-center">
                <Plane className="w-5 h-5 text-rust/60 shrink-0" />
                <p className="text-xs text-neutral-400">
                  We recommend hiring a car at the airport for the weekend's flexibility.
                </p>
              </div>
            </div>

            {/* Right — map image */}
            <div className="md:col-span-2 border-t md:border-t-0 md:border-l border-forest/[0.06] overflow-hidden">
              <img
                src={mapImg}
                alt="Map from Cape Town to Citrusdal"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </FadeInWhenVisible>

      {/* Staying */}
      <FadeInWhenVisible>
        <div className="text-center mb-16">
          <p className="text-rust/50 text-xs font-bold uppercase tracking-[0.3em] mb-3">
            Our Venue & Basecamp
          </p>
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-forest tracking-tight">
            Staying in the Mountains
          </h2>
        </div>
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <div className="bg-cream/60 rounded-3xl border border-forest/[0.06] overflow-hidden relative">
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
            <CitrusdalIllustration className="w-full h-full object-cover" />
          </div>

          <div className="relative z-10 p-8 md:p-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-11 h-11 rounded-xl bg-forest/8 flex items-center justify-center">
                <Home className="w-5 h-5 text-forest" />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-forest tracking-tight">
                  Wolfkop Nature Reserve
                </h3>
                <p className="text-xs text-neutral-400 font-medium">
                  Citrusdal Valley, Western Cape
                </p>
              </div>
            </div>

            <p className="text-base text-neutral-600 leading-relaxed mb-3 max-w-2xl">
              Nestled in the golden rock formations of the Citrusdal valley,
              Wolfkop offers an extraordinary mountain retreat. We've chosen
              this sanctuary for its rugged beauty and serene atmosphere.
            </p>
            <p className="text-sm text-neutral-400 leading-relaxed mb-10 max-w-2xl">
              We have booked for all guests and allocated cottages to groups.
              Check in for your specific house upon arrival.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: Sun, title: "Relaxation", desc: "Wood-fired hot tubs and private plunge pools." },
                { icon: Home, title: "Comfort", desc: "King beds, en-suite baths, and indoor fireplaces." },
                { icon: Mountain, title: "Adventure", desc: "Private hiking trails, MTB tracks, and valley views." },
                { icon: Zap, title: "Off-grid Power", desc: "Solar-equipped houses for an uninterrupted stay." },
              ].map((f, i) => (
                <div key={i}>
                  <FadeInWhenVisible delay={i * 0.08}>
                    <div className="bg-white/60 backdrop-blur-sm rounded-xl p-5 border border-white/80">
                      <f.icon className="w-5 h-5 text-rust/60 mb-3" />
                      <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-forest mb-1.5">
                        {f.title}
                      </h4>
                      <p className="text-[13px] text-neutral-400 leading-relaxed">
                        {f.desc}
                      </p>
                    </div>
                  </FadeInWhenVisible>
                </div>
              ))}
            </div>
          </div>
        </div>
      </FadeInWhenVisible>
    </div>
  </section>
);

/* ─── Packing List ───────────────────────────────────────────────────── */

const PACKING_CATEGORIES = [
  {
    title: "Active Gear",
    icon: Mountain,
    accent: "forest",
    items: [
      "Walking / Hiking Shoes (expect mud!)",
      "Workout / Gym Gear",
      "Spare Socks",
    ],
  },
  {
    title: "Stay Warm",
    icon: Flame,
    accent: "rust",
    items: [
      "Thick Puffer / Winter Jacket",
      "Beanie & Scarf",
      "Thermal Layers",
    ],
  },
  {
    title: "Mountain Comfort",
    icon: Home,
    accent: "olive",
    items: [
      "Comfy Loungewear",
      "Warm Pajamas",
      "Indoor Slippers",
    ],
  },
];

const PackingList = () => (
  <section id="packing" className="bg-white py-28 md:py-36">
    <div className="max-w-5xl mx-auto px-6">
      <FadeInWhenVisible>
        <div className="text-center mb-16">
          <p className="text-rust/50 text-xs font-bold uppercase tracking-[0.3em] mb-3">
            Early Winter & Active Days
          </p>
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-forest tracking-tight">
            Packing List
          </h2>
        </div>
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <div className="bg-cream/60 rounded-3xl border border-forest/[0.06] overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-5">
            {/* Left — categories */}
            <div className="md:col-span-3 p-8 md:p-12">
              <div className="flex items-center gap-3 mb-10">
                <div className="w-11 h-11 rounded-xl bg-rust/8 flex items-center justify-center">
                  <Shirt className="w-5 h-5 text-rust" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-forest tracking-tight">
                  Mountain Essentials
                </h3>
              </div>

              <div className="space-y-10">
                {PACKING_CATEGORIES.map((cat, ci) => (
                  <div key={ci}>
                  <FadeInWhenVisible delay={ci * 0.1}>
                    <div>
                      <div className="flex items-center gap-2.5 mb-4">
                        <cat.icon className={cn(
                          "w-4 h-4",
                          cat.accent === "forest" ? "text-forest/50" :
                          cat.accent === "rust" ? "text-rust/50" : "text-olive/50"
                        )} />
                        <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400">
                          {cat.title}
                        </h4>
                      </div>
                      <ul className="space-y-3 pl-0.5">
                        {cat.items.map((item, j) => (
                          <li key={j} className="flex items-center gap-3 group">
                            <div className={cn(
                              "w-5 h-5 rounded-md border flex items-center justify-center shrink-0 transition-colors duration-300",
                              cat.accent === "forest" ? "border-forest/15 group-hover:bg-forest/5" :
                              cat.accent === "rust" ? "border-rust/15 group-hover:bg-rust/5" :
                              "border-olive/15 group-hover:bg-olive/5"
                            )}>
                              <div className={cn(
                                "w-1.5 h-1.5 rounded-full",
                                cat.accent === "forest" ? "bg-forest/25" :
                                cat.accent === "rust" ? "bg-rust/25" : "bg-olive/25"
                              )} />
                            </div>
                            <span className="text-sm text-neutral-600 leading-relaxed">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </FadeInWhenVisible>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — packing image */}
            <div className="md:col-span-2 border-t md:border-t-0 md:border-l border-forest/[0.06] overflow-hidden">
              <img
                src={packingImg}
                alt="Packing essentials"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </FadeInWhenVisible>
    </div>
  </section>
);

/* ─── Footer ─────────────────────────────────────────────────────────── */

const Footer = () => (
  <footer className="bg-sand relative overflow-hidden">
    {/* Mountain silhouette */}
    <div className="absolute bottom-0 left-0 w-full h-56 opacity-[0.05] pointer-events-none">
      <svg
        viewBox="0 0 1200 300"
        preserveAspectRatio="none"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 300 L0 180 L60 150 L120 200 L200 120 L280 180 L360 100 L440 160 L520 80 L600 140 L680 60 L760 130 L840 90 L920 160 L1000 110 L1080 170 L1200 120 L1200 300 Z"
          fill="#3a5a40"
          opacity="0.6"
        />
        <path
          d="M0 300 L0 220 L80 190 L160 230 L240 170 L320 220 L400 150 L480 200 L560 130 L640 180 L720 120 L800 170 L880 140 L960 190 L1040 160 L1120 200 L1200 170 L1200 300 Z"
          fill="#3a5a40"
        />
      </svg>
    </div>

    <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col items-center relative z-10">
      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="group cursor-pointer mb-8"
        aria-label="Back to top"
      >
        <ChevronUp className="w-4 h-4 text-wedding-brown/30 group-hover:text-wedding-brown/60 transition-colors mx-auto mb-2" />
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="font-display text-3xl font-bold tracking-tight text-wedding-brown/80 uppercase group-hover:text-wedding-brown transition-colors duration-300"
        >
          A&P
        </motion.div>
      </button>

      {/* Nav links */}
      <div className="flex flex-wrap justify-center gap-10 text-[10px] font-bold uppercase tracking-[0.3em] text-wedding-brown/40 mb-10">
        {NAV_ITEMS.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="hover:text-wedding-brown/70 transition-colors duration-300"
          >
            {item}
          </a>
        ))}
      </div>

      {/* Divider */}
      <div className="w-16 h-px bg-wedding-brown/10 mb-8" />

      {/* Copyright */}
      <p className="text-[10px] text-wedding-brown/30 uppercase tracking-[0.35em] font-medium">
        &copy; 2026 Piv & Amber &mdash; Made with Love
      </p>
    </div>
  </footer>
);

/* ─── App ─────────────────────────────────────────────────────────────── */

export default function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen selection:bg-rust selection:text-white"
    >
      <Navbar />
      <Hero />
      <InfoGrid />
      <ScheduleTimeline />
      <TravelDetails />
      <PackingList />
      <Footer />
    </motion.div>
  );
}
