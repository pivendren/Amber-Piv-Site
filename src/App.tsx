/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useState } from "react";
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
  // Row 1 (top edge, ~0-18%)
  { src: "photo-wildflowers.webp",   type: "photo", top: -2, left: -3, w: 22, h: 16, rotate: -5,  z: 2, depth: 0.4 },
  { src: "video-IMG_0172.mp4",       type: "video", top: 1,  left: 16, w: 18, h: 14, rotate: 3,   z: 4, depth: 0.6 },
  { src: "photo-museum.webp",        type: "photo", top: -1, left: 31, w: 20, h: 15, rotate: -2,  z: 1, depth: 0.3 },
  { src: "photo-ferris-wheel.webp",  type: "photo", top: 2,  left: 48, w: 19, h: 14, rotate: 4,   z: 3, depth: 0.7 },
  { src: "video-IMG_2373.mp4",       type: "video", top: -2, left: 64, w: 17, h: 20, rotate: -3,  z: 5, depth: 0.5 },
  { src: "photo-table-mountain.webp",type: "photo", top: 1,  left: 80, w: 23, h: 16, rotate: 2,   z: 2, depth: 0.4 },

  // Row 2 (~15-32%)
  { src: "video-IMG_0767.mp4",       type: "video", top: 15, left: -2, w: 17, h: 22, rotate: 4,   z: 6, depth: 0.8 },
  { src: "photo-fitness.webp",       type: "photo", top: 17, left: 13, w: 16, h: 20, rotate: -4,  z: 3, depth: 0.3 },
  { src: "photo-night1.webp",        type: "photo", top: 16, left: 27, w: 20, h: 15, rotate: 2,   z: 1, depth: 0.5 },
  { src: "photo-skydive.webp",       type: "photo", top: 18, left: 55, w: 19, h: 14, rotate: -3,  z: 2, depth: 0.6 },
  { src: "video-IMG_0906.mp4",       type: "video", top: 15, left: 70, w: 16, h: 21, rotate: 5,   z: 7, depth: 0.4 },
  { src: "photo-beach.webp",         type: "photo", top: 17, left: 84, w: 20, h: 15, rotate: -2,  z: 1, depth: 0.7 },

  // Row 3 (~32-48%) — flanks center card
  { src: "photo-night2.webp",        type: "photo", top: 33, left: -3, w: 21, h: 15, rotate: -3,  z: 2, depth: 0.5 },
  { src: "video-IMG_2382.mp4",       type: "video", top: 35, left: 14, w: 14, h: 18, rotate: 5,   z: 8, depth: 0.9 },
  { src: "photo-cape-town.webp",     type: "photo", top: 36, left: 68, w: 18, h: 13, rotate: -4,  z: 3, depth: 0.3 },
  { src: "photo-promenade.webp",     type: "photo", top: 33, left: 82, w: 15, h: 20, rotate: 3,   z: 4, depth: 0.6 },

  // Row 4 (~48-65%) — flanks center card
  { src: "video-IMG_1880.mp4",       type: "video", top: 50, left: -2, w: 18, h: 14, rotate: 3,   z: 5, depth: 0.4 },
  { src: "photo-building.webp",      type: "photo", top: 52, left: 13, w: 17, h: 13, rotate: -5,  z: 2, depth: 0.7 },
  { src: "video-IMG_3214.mp4",       type: "video", top: 50, left: 70, w: 15, h: 19, rotate: 4,   z: 6, depth: 0.5 },
  { src: "photo-city.webp",          type: "photo", top: 52, left: 83, w: 20, h: 14, rotate: -2,  z: 1, depth: 0.3 },

  // Row 5 (~62-78%)
  { src: "photo-dinosaurs.webp",     type: "photo", top: 64, left: -2, w: 19, h: 19, rotate: -4,  z: 3, depth: 0.6 },
  { src: "video-IMG_1275.mp4",       type: "video", top: 66, left: 15, w: 15, h: 19, rotate: 3,   z: 7, depth: 0.8 },
  { src: "photo-skyline.webp",       type: "photo", top: 65, left: 28, w: 20, h: 14, rotate: -2,  z: 1, depth: 0.4 },
  { src: "photo-concert.webp",       type: "photo", top: 63, left: 52, w: 19, h: 15, rotate: 5,   z: 2, depth: 0.5 },
  { src: "video-IMG_3070.mp4",       type: "video", top: 66, left: 68, w: 17, h: 13, rotate: -3,  z: 4, depth: 0.3 },
  { src: "photo-garden.webp",        type: "photo", top: 64, left: 83, w: 20, h: 16, rotate: 2,   z: 1, depth: 0.7 },

  // Row 6 (bottom edge, ~78-100%)
  { src: "photo-bougainvillea.webp", type: "photo", top: 80, left: -3, w: 22, h: 16, rotate: 3,   z: 2, depth: 0.5 },
  { src: "video-IMG_0797.mp4",       type: "video", top: 82, left: 17, w: 18, h: 14, rotate: -4,  z: 5, depth: 0.6 },
  { src: "photo-rocks.webp",         type: "photo", top: 81, left: 32, w: 15, h: 20, rotate: 2,   z: 3, depth: 0.4 },
  { src: "photo-cafe.webp",          type: "photo", top: 83, left: 48, w: 19, h: 14, rotate: -3,  z: 1, depth: 0.8 },
  { src: "photo-tree.webp",          type: "photo", top: 80, left: 65, w: 21, h: 16, rotate: 5,   z: 2, depth: 0.3 },
  { src: "video-IMG_3432.mp4",       type: "video", top: 82, left: 83, w: 20, h: 16, rotate: -2,  z: 4, depth: 0.7 },
];

const NAV_ITEMS = ["Schedule", "Travel", "Packing"];

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
}) => (
  <motion.div
    initial={{ opacity: 0, y, x }}
    whileInView={{ opacity: 1, y: 0, x: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
  >
    {children}
  </motion.div>
);

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

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "circOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-cream/80 backdrop-blur-md border-b border-black/5"
    >
      <div className="px-6 py-4 flex justify-between items-center">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="font-display font-bold text-xl tracking-tight text-wedding-brown"
        >
          WEDDING CAMP
        </a>
        <div className="hidden md:flex gap-8 text-xs font-semibold uppercase tracking-widest text-neutral-600">
          {NAV_ITEMS.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-wedding-brown transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-wedding-brown transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-wedding-brown p-1"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden border-t border-black/5 bg-cream/95 backdrop-blur-md"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-semibold uppercase tracking-widest text-neutral-600 hover:text-wedding-brown transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

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

const InfoGrid = () => (
  <section id="info" className="bg-golden py-12 relative">
    <SectionDivider fromColor="#f8f8f8" toColor="#d4c3a3" flip />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col gap-4 relative z-10">
      <FadeInWhenVisible>
        <motion.a
          href="#travel"
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="group block bg-golden-light p-12 flex flex-col md:flex-row items-center justify-between min-h-[350px] rounded-lg shadow-sm hover:shadow-lg transition-shadow relative overflow-hidden"
        >
          <div className="relative z-10 max-w-md">
            <h2 className="font-display text-4xl md:text-6xl font-bold text-olive uppercase tracking-tight mb-4">
              LOCATION & LODGING
            </h2>
            <p className="text-olive/80 text-lg font-medium">
              Join us in the beautiful Western Cape. Explore the rugged
              coastline and find your perfect stay.
            </p>
          </div>

          <div className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
            <LocationLodgingIllustration className="w-full h-full object-cover" />
          </div>
        </motion.a>
      </FadeInWhenVisible>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FadeInWhenVisible>
          <motion.a
            href="#schedule"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="group block relative overflow-hidden h-[450px] rounded-lg shadow-sm hover:shadow-lg transition-shadow"
          >
            <ScheduleIllustration className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40 flex flex-col items-center justify-start p-8 text-center text-golden-light transition-colors duration-500 group-hover:bg-black/20">
              <h2 className="font-display text-3xl font-black uppercase tracking-widest">
                Schedule
              </h2>
            </div>
          </motion.a>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.1}>
          <motion.a
            href="#packing"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="group block bg-slate text-golden-light p-8 flex flex-col items-start h-[450px] rounded-lg shadow-sm hover:shadow-lg transition-shadow relative overflow-hidden"
          >
            <h2 className="font-display text-3xl font-black uppercase tracking-widest mb-8 relative z-10">
              PACKING LIST
            </h2>
            <div className="flex-1 w-full relative transition-transform duration-700 group-hover:scale-110 group-hover:-translate-y-4">
              <PackingListIllustration className="absolute inset-0 w-full h-full object-contain" />
            </div>
          </motion.a>
        </FadeInWhenVisible>
      </div>
    </div>
    <SectionDivider fromColor="#d4c3a3" toColor="#f5f2ed" />
  </section>
);

const TimelineDot = () => (
  <motion.div
    initial={{ scale: 0 }}
    whileInView={{ scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, ease: "backOut" }}
    className="absolute left-1/2 -translate-x-1/2 z-20"
  >
    <div className="relative">
      <div className="w-6 h-6 rounded-full bg-forest border-4 border-cream shadow-lg"></div>
      <motion.div
        animate={{ scale: [1, 1.8, 1], opacity: [0.4, 0, 0.4] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 w-6 h-6 rounded-full bg-forest/30"
      ></motion.div>
    </div>
  </motion.div>
);

const ScheduleTimeline = () => (
  <section
    id="schedule"
    className="bg-cream py-32 topo-bg relative overflow-hidden"
  >
    <div className="max-w-5xl mx-auto px-6">
      <FadeInWhenVisible>
        <div className="text-center mb-24">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-forest/30 mb-6"
          >
            <Heart className="w-8 h-8 text-forest fill-forest/10" />
          </motion.div>
          <h2 className="font-serif text-6xl md:text-7xl font-bold text-neutral-800 tracking-tight">
            Schedule
          </h2>
        </div>
      </FadeInWhenVisible>

      <div className="relative">
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="absolute left-1/2 top-0 w-px bg-forest/20 -translate-x-1/2 hidden md:block"
        ></motion.div>

        <div className="space-y-32">
          {[
            {
              year: "Fri 19 - Sat 20 June",
              title: "Arrival in Cape Town",
              Illustration: MeetingIllustration,
              side: "left",
              text: "Folks begin arriving in the Mother City. Take some time to settle in and enjoy the sea air.",
            },
            {
              year: "Saturday 08:00",
              title: "Green Point Parkrun",
              Illustration: HikingIllustration,
              side: "right",
              text: "A 5km dash (or stroll) through Green Point Park. A great chance to stretch the legs before the drive.",
            },
            {
              year: "Saturday 14:00",
              title: "Check-in at Wolfkop",
              Illustration: RoadTripIllustration,
              side: "left",
              text: "Supply run in CPT, then hitting the N7 north. Check-in opens at 14:00 at Wolfkop Nature Reserve.",
            },
            {
              year: "Sunday 13:00",
              title: "The Community Lunch",
              Illustration: ScheduleIllustration,
              side: "right",
              text: "A large, lazy Sunday lunch at 'basecamp'. Relaxation and mountain views are the order of the day.",
            },
            {
              year: "Monday 16:00",
              title: "The Sunset Wedding",
              Illustration: WeddingIllustration,
              side: "left",
              text: "The main event. A sunset ceremony followed by photos, then a celebratory braai for the rest of the eve.",
            },
            {
              year: "Tuesday 10:00",
              title: "Walk & Farewell",
              Illustration: ProposalIllustration,
              side: "right",
              text: "One last mountain walk in the morning before checking out and heading home.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`relative flex flex-col md:flex-row items-center gap-12 ${item.side === "right" ? "md:flex-row-reverse" : ""}`}
            >
              <div className="md:w-1/2 flex justify-center">
                <FadeInWhenVisible x={item.side === "left" ? -50 : 50}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="relative group"
                  >
                    <div className="absolute inset-0 bg-rust/10 rounded-2xl blur-2xl group-hover:bg-rust/20 transition-all"></div>
                    <item.Illustration className="relative rounded-2xl shadow-2xl w-full max-w-md z-10" />
                  </motion.div>
                </FadeInWhenVisible>
              </div>

              <div className="hidden md:block">
                <TimelineDot />
              </div>

              <div
                className={`md:w-1/2 text-left ${item.side === "left" ? "md:text-left" : "md:text-right"}`}
              >
                <FadeInWhenVisible x={item.side === "left" ? 50 : -50}>
                  <span className="text-rust font-bold tracking-[0.3em] text-xs mb-2 block">
                    {item.year}
                  </span>
                  <h3 className="font-serif text-3xl md:text-4xl font-bold text-forest mb-4">
                    {item.title}
                  </h3>
                  <p className="text-base text-neutral-600 leading-relaxed font-light">
                    {item.text}
                  </p>
                </FadeInWhenVisible>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const TravelDetails = () => (
  <section id="travel" className="bg-white py-32">
    <div className="max-w-7xl mx-auto px-6">
      <FadeInWhenVisible>
        <div className="text-center mb-20">
          <h2 className="font-serif text-3xl md:text-6xl font-bold text-forest mb-6 tracking-tight uppercase">
            GETTING THERE
          </h2>
          <div className="w-24 h-1 bg-rust/20 mx-auto rounded-full"></div>
        </div>
      </FadeInWhenVisible>

      <div className="max-w-4xl mx-auto mb-32">
        <FadeInWhenVisible>
          <div className="bg-sand/20 p-10 md:p-16 rounded-3xl border border-forest/5 shadow-sm overflow-hidden relative group">
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
                <div>
                  <h3 className="font-serif text-4xl font-bold text-forest mb-2">
                    Cape Town to Citrusdal
                  </h3>
                  <p className="text-rust font-bold tracking-widest text-xs uppercase">
                    Fly in. Drive out.
                  </p>
                </div>
                <Car className="w-16 h-16 text-rust stroke-[0.5]" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="prose prose-neutral max-w-none">
                  <h4 className="font-serif text-2xl font-bold text-forest mb-4">
                    Flights
                  </h4>
                  <p className="text-sm text-neutral-700 leading-relaxed font-light mb-6">
                    Most guests are flying into{" "}
                    <strong>Cape Town International Airport (CPT)</strong>{" "}
                    between Friday and Saturday before the main event on 22
                    June.
                  </p>

                  <h4 className="font-serif text-2xl font-bold text-forest mb-4">
                    The Scenic Drive
                  </h4>
                  <p className="text-sm text-neutral-700 leading-relaxed font-light mb-4">
                    Citrusdal is a comfortable 2-hour drive (170km) north from
                    Cape Town on the N7 highway.
                  </p>
                  <ul className="text-sm text-neutral-600 font-light space-y-2 mb-8 list-none italic">
                    <li className="flex gap-2">
                      <span className="text-rust">•</span> Take the{" "}
                      <strong>N7 North</strong> towards Malmesbury.
                    </li>
                    <li className="flex gap-2">
                      <span className="text-rust">•</span> Continue through
                      Moorreesburg and Piketberg.
                    </li>
                    <li className="flex gap-2">
                      <span className="text-rust">•</span> Ascend the beautiful{" "}
                      <strong>Piekenierskloof Pass</strong>.
                    </li>
                    <li className="flex gap-2">
                      <span className="text-rust">•</span> Descending into the
                      valley, take the Citrusdal turnoff.
                    </li>
                  </ul>

                  <div className="flex gap-4 p-4 bg-forest/5 rounded-2xl border border-forest/10 items-center">
                    <Plane className="w-8 h-8 text-rust" />
                    <p className="text-xs text-neutral-500 font-light">
                      We recommend hiring a car at the airport for the weekend's
                      flexibility.
                    </p>
                  </div>
                </div>

                <div className="relative h-[400px] md:h-auto min-h-[400px] bg-sand/10 rounded-2xl border border-forest/5 overflow-hidden">
                  <WesternCapeMapIllustration className="absolute inset-0 w-full h-full p-4" />
                </div>
              </div>
            </div>
          </div>
        </FadeInWhenVisible>
      </div>

      <FadeInWhenVisible>
        <div className="text-center mb-20">
          <h2 className="font-serif text-3xl md:text-6xl font-bold text-forest mb-6 tracking-tight uppercase">
            STAYING IN THE MOUNTAINS
          </h2>
          <div className="w-24 h-1 bg-rust/20 mx-auto rounded-full"></div>
        </div>
      </FadeInWhenVisible>

      <div className="max-w-4xl mx-auto">
        <FadeInWhenVisible>
          <div className="bg-sand/20 p-10 md:p-16 rounded-3xl border border-forest/5 shadow-sm overflow-hidden relative group">
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
                <div>
                  <h3 className="font-serif text-4xl font-bold text-forest mb-2">
                    Wolfkop Nature Reserve
                  </h3>
                  <p className="text-rust font-bold tracking-widest text-xs uppercase">
                    Our Wedding Venue & Basecamp
                  </p>
                </div>
                <Home className="w-16 h-16 text-rust stroke-[0.5]" />
              </div>

              <div className="prose prose-neutral max-w-none mb-12">
                <p className="text-lg text-neutral-700 leading-relaxed font-light mb-6">
                  Nestled in the golden rock formations of the Citrusdal valley,
                  Wolfkop offers an extraordinary mountain retreat. We've chosen
                  this sanctuary for its rugged beauty and serene atmosphere.
                </p>
                <p className="text-base text-neutral-600 leading-relaxed font-light mb-8">
                  We have booked for all guests and allocated cottages to
                  groups. Check in for your specific house upon arrival.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-4">
                {[
                  {
                    title: "Relaxation",
                    desc: "Wood-fired hot tubs and private plunge pools at most houses.",
                  },
                  {
                    title: "Comfort",
                    desc: "Luxury king-size beds, en-suite bathrooms, and indoor fireplaces.",
                  },
                  {
                    title: "Adventure",
                    desc: "Private hiking trails, MTB tracks, and spectacular valley views.",
                  },
                  {
                    title: "Loadshedding Free",
                    desc: "Many houses are equipped with solar power for an uninterrupted stay.",
                  },
                ].map((feature, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-1 h-full bg-rust/30 rounded-full" />
                    <div>
                      <h4 className="font-bold text-xs uppercase tracking-widest text-forest mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-neutral-500 font-light">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute inset-0 opacity-[0.2] pointer-events-none -z-0">
              <CitrusdalIllustration className="w-full h-full object-cover" />
            </div>
          </div>
        </FadeInWhenVisible>
      </div>
    </div>
  </section>
);

const PackingList = () => (
  <section id="packing" className="bg-white py-32">
    <div className="max-w-7xl mx-auto px-6">
      <FadeInWhenVisible>
        <div className="text-center mb-20">
          <h2 className="font-serif text-3xl md:text-6xl font-bold text-forest mb-6 tracking-tight uppercase">
            PACKING LIST
          </h2>
          <div className="w-24 h-1 bg-rust/20 mx-auto rounded-full"></div>
        </div>
      </FadeInWhenVisible>

      <div className="max-w-4xl mx-auto">
        <FadeInWhenVisible>
          <div className="bg-sand/20 p-10 md:p-16 rounded-3xl border border-forest/5 shadow-sm overflow-hidden relative group">
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
                <div>
                  <h3 className="font-serif text-4xl font-bold text-forest mb-2">
                    Mountain Essentials
                  </h3>
                  <p className="text-rust font-bold tracking-widest text-xs uppercase">
                    Early Winter & Active Days
                  </p>
                </div>
                <Shirt className="w-16 h-16 text-rust stroke-[0.5]" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-10">
                  {[
                    {
                      title: "The Active Gear",
                      items: [
                        "Walking/Hiking Shoes (expect mud!)",
                        "Workout / Gym Gear",
                        "Spare Socks",
                      ],
                    },
                    {
                      title: "Stay Warm",
                      items: [
                        "Thick Puffer / Winter Jacket",
                        "Beanie & Scarf",
                        "Thermal Layers",
                      ],
                    },
                    {
                      title: "Mountain Comfort",
                      items: [
                        "Comfy Loungewear",
                        "Warm Pajamas",
                        "Indoor Slippers",
                      ],
                    },
                  ].map((category, i) => (
                    <div key={i}>
                      <h4 className="font-serif text-xl font-bold text-forest mb-4 border-b border-forest/10 pb-2">
                        {category.title}
                      </h4>
                      <ul className="text-sm text-neutral-600 font-light space-y-3">
                        {category.items.map((item, j) => (
                          <li key={j} className="flex items-center gap-3">
                            <div className="w-1 h-1 bg-rust rounded-full" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="relative h-full min-h-[400px] flex items-center justify-center bg-sand/10 rounded-2xl border border-forest/5 overflow-hidden">
                  <PackingListIllustration className="w-full h-full p-8" />
                </div>
              </div>
            </div>
          </div>
        </FadeInWhenVisible>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-sand py-20 relative overflow-hidden">
    <div className="absolute bottom-0 left-0 w-full h-64 opacity-[0.07] pointer-events-none">
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
        <circle cx="200" cy="80" r="30" fill="#a64d32" opacity="0.3" />
        <circle cx="800" cy="60" r="20" fill="#9a3324" opacity="0.2" />
        <path
          d="M100 300 L100 240 L110 220 L120 240 L120 300 Z"
          fill="#1c2b1e"
          opacity="0.4"
        />
        <circle cx="110" cy="210" r="25" fill="#3a5a40" opacity="0.5" />
        <path
          d="M1050 300 L1050 230 L1060 210 L1070 230 L1070 300 Z"
          fill="#1c2b1e"
          opacity="0.4"
        />
        <circle cx="1060" cy="200" r="20" fill="#3a5a40" opacity="0.5" />
      </svg>
    </div>

    <div className="max-w-7xl mx-auto px-6 flex flex-col items-center relative z-10">
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="group cursor-pointer mb-2"
        aria-label="Back to top"
      >
        <ChevronUp className="w-5 h-5 text-wedding-brown/40 group-hover:text-wedding-brown transition-colors mx-auto mb-1" />
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="font-display text-4xl font-black tracking-tighter text-wedding-brown uppercase"
        >
          A&P
        </motion.div>
      </button>

      <div className="flex flex-wrap justify-center gap-10 text-[11px] font-bold uppercase tracking-[0.3em] text-wedding-brown/60 mb-12 mt-8">
        {NAV_ITEMS.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="hover:text-wedding-brown transition-colors"
          >
            {item}
          </a>
        ))}
      </div>
      <div className="w-full h-px bg-wedding-brown/10 mb-10"></div>
      <div className="text-[10px] text-wedding-brown/40 uppercase tracking-[0.4em] font-medium">
        &copy; 2026 Piv & Amber — Made with Love
      </div>
    </div>
  </footer>
);

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
