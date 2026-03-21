/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import {
  MapPin,
  Calendar,
  Heart,
  Navigation,
  Package,
  ClipboardList,
  Gift,
  Car,
  Plane,
  Home,
  ChevronDown,
} from "lucide-react";
import Floating, { FloatingElement } from "./components/ui/parallax-floating";

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

const Navbar = () => (
  <motion.nav
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    transition={{ duration: 0.8, ease: "circOut" }}
    className="fixed top-0 left-0 right-0 z-50 bg-cream/80 backdrop-blur-md border-b border-black/5 px-6 py-4 flex justify-between items-center"
  >
    <div className="font-display font-bold text-xl tracking-tight text-wedding-brown">
      WEDDING CAMP
    </div>
    <div className="hidden md:flex gap-8 text-xs font-semibold uppercase tracking-widest text-neutral-600">
      {["Story", "Travel", "Packing"].map((item) => (
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

    <div className="hidden md:flex gap-8 text-xs font-semibold uppercase tracking-widest text-neutral-600"></div>
  </motion.nav>
);

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <section
      ref={containerRef}
      className="relative pt-32 pb-24 overflow-hidden min-h-screen flex flex-col justify-center bg-[#f8f8f8]"
    >
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-white/50"></div>
      </div>

      <Floating sensitivity={-0.5} className="overflow-hidden z-0">
        {/* 1. Top Left - Vertical */}
        <FloatingElement
          depth={0.4}
          className="top-[5%] left-[2%] md:left-[4%]"
        >
          <motion.div
            style={{ y: y1 }}
            className="w-36 h-52 md:w-56 md:h-80 rounded-sm overflow-hidden shadow-xl"
          >
            <img
              src="https://picsum.photos/seed/hiking-couple/600/800"
              alt="Hiking"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </FloatingElement>

        {/* 2. Top Center - Horizontal */}
        <FloatingElement
          depth={0.6}
          className="top-[2%] left-[35%] md:left-[38%]"
        >
          <motion.div
            style={{ y: y2 }}
            className="w-48 h-32 md:w-72 md:h-48 rounded-sm overflow-hidden shadow-xl"
          >
            <img
              src="https://picsum.photos/seed/coast-view/800/600"
              alt="Coast"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </FloatingElement>

        {/* 3. Top Right - Horizontal */}
        <FloatingElement
          depth={0.3}
          className="top-[8%] right-[2%] md:right-[6%]"
        >
          <motion.div
            style={{ y: y1 }}
            className="w-44 h-32 md:w-64 md:h-44 rounded-sm overflow-hidden shadow-xl"
          >
            <img
              src="https://picsum.photos/seed/campfire-night/800/600"
              alt="Campfire"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </FloatingElement>

        {/* 4. Middle Left - Vertical */}
        <FloatingElement
          depth={0.7}
          className="top-[45%] left-[-2%] md:left-[1%]"
        >
          <motion.div
            style={{ y: y2 }}
            className="w-32 h-48 md:w-52 md:h-72 rounded-sm overflow-hidden shadow-xl"
          >
            <img
              src="https://picsum.photos/seed/beach-walk/600/800"
              alt="Beach"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </FloatingElement>

        {/* 5. Middle Right - Vertical */}
        <FloatingElement
          depth={0.5}
          className="top-[48%] right-[-2%] md:right-[1%]"
        >
          <motion.div
            style={{ y: y1 }}
            className="w-32 h-48 md:w-52 md:h-72 rounded-sm overflow-hidden shadow-xl"
          >
            <img
              src="https://picsum.photos/seed/ocean-couple/600/800"
              alt="Ocean"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </FloatingElement>

        {/* 6. Bottom Left - Horizontal */}
        <FloatingElement
          depth={0.8}
          className="bottom-[5%] left-[5%] md:left-[8%]"
        >
          <motion.div
            style={{ y: y2 }}
            className="w-48 h-36 md:w-72 md:h-52 rounded-sm overflow-hidden shadow-xl"
          >
            <img
              src="https://picsum.photos/seed/fire-beach/800/600"
              alt="Fire"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </FloatingElement>

        {/* 7. Bottom Center - Horizontal */}
        <FloatingElement
          depth={0.4}
          className="bottom-[2%] left-[38%] md:left-[40%]"
        >
          <motion.div
            style={{ y: y1 }}
            className="w-48 h-32 md:w-72 md:h-44 rounded-sm overflow-hidden shadow-xl"
          >
            <img
              src="https://picsum.photos/seed/cliffs/800/600"
              alt="Cliffs"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </FloatingElement>

        {/* 8. Bottom Right - Vertical */}
        <FloatingElement
          depth={0.9}
          className="bottom-[8%] right-[5%] md:right-[8%]"
        >
          <motion.div
            style={{ y: y2 }}
            className="w-36 h-52 md:w-56 md:h-80 rounded-sm overflow-hidden shadow-xl"
          >
            <img
              src="https://picsum.photos/seed/forest-couple/600/800"
              alt="Forest"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </FloatingElement>
      </Floating>

      <div className="max-w-7xl mx-auto px-6 relative z-10 pointer-events-none">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <h1 className="font-display text-6xl md:text-8xl font-bold text-wedding-brown mb-0 leading-tight uppercase tracking-tight">
              WEDDING CAMP
            </h1>
            <h2 className="font-display text-4xl md:text-6xl text-wedding-brown font-bold uppercase tracking-tight mb-8">
              Amber & Piv
            </h2>

            <p className="text-xl md:text-2xl text-neutral-800 mb-4 font-normal tracking-tight">
              Join us as we celebrate our marriage
            </p>

            <div className="text-sm md:text-base font-bold uppercase tracking-widest text-neutral-900">
              22 June 2026 | Wolfkop, Cape Town
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-neutral-400"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.div>
    </section>
  );
};

const InfoGrid = () => (
  <section id="packing" className="bg-[#d4c3a3] py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col gap-4">
      {/* Location & Lodging - Full Width */}
      <FadeInWhenVisible>
        <motion.a
          href="#travel"
          whileHover={{ scale: 0.99 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="group block bg-[#e3d3a4] p-12 flex flex-col md:flex-row items-center justify-between min-h-[350px] rounded-lg shadow-sm relative overflow-hidden"
        >
          <div className="relative z-10 max-w-md">
            <h2 className="font-display text-4xl md:text-6xl font-bold text-[#5a6045] uppercase tracking-tight mb-4">
              LOCATION & LODGING
            </h2>
            <p className="text-[#5a6045]/80 text-lg font-medium">
              Join us in the beautiful Western Cape. Explore the rugged
              coastline and find your perfect stay.
            </p>
          </div>

          {/* Subtle SVG Background Overlay */}
          <div className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
            <svg
              viewBox="0 0 400 200"
              className="w-full h-full stroke-[#5a6045] fill-none stroke-[1]"
              preserveAspectRatio="xMidYMax slice"
            >
              <path d="M 0 180 Q 50 190 100 180 T 200 180 T 300 180 T 400 180" />
              <path d="M 20 190 Q 70 200 120 190 T 220 190 T 320 190 T 400 190" />
            </svg>
          </div>
        </motion.a>
      </FadeInWhenVisible>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Our Story */}
        <FadeInWhenVisible>
          <motion.a
            href="#story"
            whileHover={{ scale: 0.97 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="group block relative overflow-hidden h-[450px] rounded-lg shadow-sm"
          >
            <img
              src="https://picsum.photos/seed/wolfkop/800/1000"
              alt="Our Story"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40 flex flex-col items-center justify-start p-8 text-center text-[#e3d3a4] transition-colors duration-500 group-hover:bg-black/20">
              <h2 className="font-display text-3xl font-black uppercase tracking-widest">
                Schedule
              </h2>
            </div>
          </motion.a>
        </FadeInWhenVisible>

        {/* Packing List */}
        <FadeInWhenVisible delay={0.1}>
          <motion.a
            href="#packing"
            whileHover={{ scale: 0.97 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="group block bg-[#455860] text-[#e3d3a4] p-8 flex flex-col items-start h-[450px] rounded-lg shadow-sm relative overflow-hidden"
          >
            <h2 className="font-display text-3xl font-black uppercase tracking-widest mb-8 relative z-10">
              PACKING LIST
            </h2>
            <div className="flex-1 w-full relative transition-transform duration-700 group-hover:scale-110 group-hover:-translate-y-4">
              <svg
                viewBox="0 0 200 200"
                className="absolute inset-0 w-full h-full stroke-[#e3d3a4] fill-none stroke-[2]"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <g transform="translate(10, 20)">
                  <rect x="10" y="20" width="40" height="50" rx="10" />
                  <path d="M 15 20 Q 30 0 45 20" />
                  <rect x="15" y="40" width="30" height="25" rx="5" />
                  <line x1="25" y1="45" x2="35" y2="45" />
                  <path d="M 10 30 Q 0 40 5 60" />
                  <path d="M 50 30 Q 60 40 55 60" />
                </g>
                <g transform="translate(80, 10)">
                  <path d="M 30 10 Q 40 0 50 10 L 70 20 Q 80 30 75 50 L 70 70 Q 60 80 50 75 L 50 80 Q 40 85 30 80 L 30 75 Q 20 80 10 70 L 5 50 Q 0 30 10 20 Z" />
                  <line x1="40" y1="10" x2="40" y2="82" />
                  <path d="M 10 20 Q 20 30 30 30 M 10 40 Q 20 50 30 50 M 10 60 Q 20 70 30 70" />
                  <path d="M 70 20 Q 60 30 50 30 M 70 40 Q 60 50 50 50 M 70 60 Q 60 70 50 70" />
                  <path d="M 30 30 Q 40 35 50 30 M 30 50 Q 40 55 50 50 M 30 70 Q 40 75 50 70" />
                </g>
                <g transform="translate(30, 110)">
                  <path d="M 40 10 L 50 30 L 70 35 L 80 50 L 80 60 L 10 60 L 5 50 L 10 40 L 20 40 L 30 20 Z" />
                  <path d="M 10 60 L 10 65 Q 45 70 80 65 L 80 60" />
                  <path d="M 40 10 Q 50 20 60 15 M 45 15 Q 55 25 65 20 M 50 20 Q 60 30 70 25" />
                  <path d="M 30 20 L 40 40" />
                </g>
              </svg>
            </div>
          </motion.a>
        </FadeInWhenVisible>
      </div>
    </div>
  </section>
);

const StoryTimeline = () => (
  <section
    id="story"
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
            Our Story
          </h2>
        </div>
      </FadeInWhenVisible>

      <div className="relative">
        {/* Center Line */}
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="absolute left-1/2 top-0 w-px bg-forest/20 -translate-x-1/2"
        ></motion.div>

        <div className="space-y-32">
          {[
            {
              year: "2018",
              title: "Meeting in the City",
              img: "city-coffee",
              side: "left",
              text: "We met at a small coffee shop. A shared love for adventure and nature sparked an immediate connection.",
            },
            {
              year: "2020",
              title: "West Coast Road Trip",
              img: "coast-road",
              side: "right",
              text: "Our first big road trip up the West Coast. From the rugged cliffs to the serene beaches, we knew this was it.",
            },
            {
              year: "2021",
              title: "The Proposal",
              img: "proposal-elk",
              side: "left",
              text: "During a weekend getaway in Elk, Piv proposed at sunset overlooking the Pacific. It was pure magic.",
            },
            {
              year: "2022",
              title: "The Wedding",
              img: "celebration-wedding",
              side: "right",
              text: "We are so excited to begin our married life together, surrounded by our loved ones at WEDDING CAMP.",
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
                    <img
                      src={`https://picsum.photos/seed/${item.img}/600/450`}
                      alt={item.year}
                      className="relative rounded-2xl shadow-2xl w-full max-w-md z-10"
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                </FadeInWhenVisible>
              </div>

              <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-forest border-4 border-cream z-20 shadow-lg"></div>

              <div
                className={`md:w-1/2 ${item.side === "left" ? "text-left" : "text-right"}`}
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
          <h2 className="font-serif text-6xl font-bold text-forest mb-6 tracking-tight">
            GETTING THERE
          </h2>
          <div className="w-24 h-1 bg-rust/20 mx-auto rounded-full"></div>
        </div>
      </FadeInWhenVisible>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-32">
        <FadeInWhenVisible>
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-cream p-16 rounded-3xl border border-forest/5 flex flex-col items-center text-center shadow-sm"
          >
            <Car className="w-24 h-24 text-rust mb-10 stroke-[0.5]" />
            <h3 className="font-serif text-4xl font-bold text-forest mb-6">
              DRIVING
            </h3>
            <p className="text-base text-neutral-600 leading-relaxed font-light max-w-md">
              From Cape Town: Take the N7 North for about 2 hours towards
              Citrusdal. The scenic route through the Piekenierskloof Pass is
              beautiful.
            </p>
          </motion.div>
        </FadeInWhenVisible>
        <FadeInWhenVisible delay={0.2}>
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-cream p-16 rounded-3xl border border-forest/5 flex flex-col items-center text-center shadow-sm"
          >
            <Plane className="w-24 h-24 text-rust mb-10 stroke-[0.5]" />
            <h3 className="font-serif text-4xl font-bold text-forest mb-6">
              FLYING
            </h3>
            <p className="text-base text-neutral-600 leading-relaxed font-light max-w-md">
              Nearest airport: Cape Town International (CPT). Rent a car and
              enjoy the scenic drive up the West Coast.
            </p>
          </motion.div>
        </FadeInWhenVisible>
      </div>

      <FadeInWhenVisible>
        <div className="text-center mb-20">
          <h2 className="font-serif text-6xl font-bold text-forest mb-6 tracking-tight">
            WHERE TO STAY
          </h2>
          <div className="w-24 h-1 bg-rust/20 mx-auto rounded-full"></div>
        </div>
      </FadeInWhenVisible>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {[
          {
            name: "Wolfkop Camping Villages",
            desc: "Luxury canvas tents on the Olifants River.",
            icon: Home,
          },
          {
            name: "Citrusdal Country Lodge",
            desc: "Comfortable rooms in the heart of town.",
            icon: Navigation,
          },
          {
            name: "Cederberg Ridge",
            desc: "Wilderness lodge for a premium stay.",
            icon: Home,
          },
        ].map((place, i) => (
          <div key={i}>
            <FadeInWhenVisible delay={i * 0.1}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-sand/20 p-10 rounded-2xl border border-forest/5 flex flex-col items-center text-center group"
              >
                <place.icon className="w-16 h-16 text-rust mb-8 stroke-[0.5] group-hover:scale-110 transition-transform" />
                <h4 className="font-serif text-2xl font-bold text-forest mb-3">
                  {place.name}
                </h4>
                <p className="text-sm text-neutral-500 font-light">
                  {place.desc}
                </p>
              </motion.div>
            </FadeInWhenVisible>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-sand py-20 relative overflow-hidden">
    {/* Forest line art background */}
    <div className="absolute bottom-0 left-0 w-full h-48 opacity-10 pointer-events-none">
      <div className="flex justify-around items-end h-full">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="w-12 h-32 border-l-2 border-forest/40 rounded-t-full transform rotate-12"
          ></div>
        ))}
      </div>
    </div>

    <div className="max-w-7xl mx-auto px-6 flex flex-col items-center relative z-10">
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="font-display text-4xl font-black mb-10 tracking-tighter cursor-default text-wedding-brown uppercase"
      >
        A&P
      </motion.div>
      <div className="flex flex-wrap justify-center gap-10 text-[11px] font-bold uppercase tracking-[0.3em] text-wedding-brown/60 mb-12">
        {["Story", "Travel", "Packing"].map((item) => (
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
        © 2026 Piv & Amber — Made with Love
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-rust selection:text-white">
      <Navbar />
      <Hero />
      <InfoGrid />
      <StoryTimeline />
      <TravelDetails />
      <Footer />
    </div>
  );
}
