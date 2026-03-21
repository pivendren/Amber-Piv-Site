/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { MapPin, Calendar, Heart, Navigation, Package, ClipboardList, Gift, Car, Plane, Home, ChevronDown } from "lucide-react";

const FadeInWhenVisible = ({ children, delay = 0, y = 20, x = 0 }: { children: React.ReactNode, delay?: number, y?: number, x?: number }) => (
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
    <div className="font-serif font-bold text-xl tracking-tight text-forest">COAST CAMP</div>
    <div className="hidden md:flex gap-8 text-xs font-semibold uppercase tracking-widest text-neutral-600">
      {["RSVP", "Story", "Travel", "Packing", "Schedule", "Registry"].map((item) => (
        <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-rust transition-colors relative group">
          {item}
          <span className="absolute -bottom-1 left-0 w-0 h-px bg-rust transition-all duration-300 group-hover:w-full"></span>
        </a>
      ))}
    </div>
    <motion.button 
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-rust text-white px-6 py-2 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-rust/90 transition-colors shadow-lg shadow-rust/20"
    >
      RSVP
    </motion.button>
  </motion.nav>
);

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 5]);

  return (
    <section ref={containerRef} className="relative pt-32 pb-24 overflow-hidden min-h-screen flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Animated Photo Collage */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          <motion.div style={{ y: y1 }} className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl transform -rotate-3">
            <img src="https://picsum.photos/seed/wedding1/600/800" alt="Coast" className="w-full h-full object-cover scale-110" referrerPolicy="no-referrer" />
          </motion.div>
          <motion.div style={{ y: y2 }} className="aspect-[4/3] rounded-xl overflow-hidden shadow-2xl transform rotate-6 mt-12">
            <img src="https://picsum.photos/seed/wedding2/800/600" alt="Couple" className="w-full h-full object-cover scale-110" referrerPolicy="no-referrer" />
          </motion.div>
          <motion.div style={{ y: y1, rotate }} className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl transform -rotate-2">
            <img src="https://picsum.photos/seed/wedding3/600/800" alt="Forest" className="w-full h-full object-cover scale-110" referrerPolicy="no-referrer" />
          </motion.div>
          <motion.div style={{ y: y2 }} className="aspect-[4/3] rounded-xl overflow-hidden shadow-2xl transform rotate-3 mt-6">
            <img src="https://picsum.photos/seed/wedding4/800/600" alt="Beach" className="w-full h-full object-cover scale-110" referrerPolicy="no-referrer" />
          </motion.div>
        </div>

        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="font-serif text-7xl md:text-[120px] font-black text-rust mb-2 leading-[0.8] tracking-tighter uppercase">
              Wedding Camp
            </h1>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="font-serif text-4xl md:text-6xl text-rust font-black uppercase tracking-tight mb-8"
            >
              Amber and Piv
            </motion.h2>
          </motion.div>
          
          <FadeInWhenVisible delay={0.8}>
            <p className="text-xl md:text-2xl text-neutral-800 mb-10 font-medium tracking-tight">
              Join us as we celebrate our marriage
            </p>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={1}>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 text-sm font-bold uppercase tracking-[0.2em] text-neutral-900">
              <div>22 June, 2026</div>
              <div className="hidden md:block w-1.5 h-1.5 bg-neutral-900 rounded-full"></div>
              <div>Wolfkop</div>
            </div>
          </FadeInWhenVisible>
        </div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-neutral-300"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.div>
    </section>
  );
};

const InfoGrid = () => (
  <section className="bg-[#d4c3a3] py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-4">
      
      {/* Column 1 */}
      <div className="flex flex-col gap-4">
        {/* RSVP */}
        <FadeInWhenVisible>
          <motion.div whileHover={{ y: -5 }} id="rsvp" className="bg-[#9a3324] text-[#e3d3a4] p-8 flex flex-col items-center justify-center h-[200px] rounded-lg shadow-sm">
            <h2 className="font-serif text-5xl font-black mb-4 uppercase tracking-widest text-transparent" style={{ WebkitTextStroke: '1px #e3d3a4' }}>RSVP</h2>
            <p className="text-xs leading-relaxed text-center font-medium">
              Please let us know if you can or cannot come ASAP.<br/>The deadline is <strong>June 3rd</strong>.
            </p>
          </motion.div>
        </FadeInWhenVisible>

        {/* Our Story */}
        <FadeInWhenVisible delay={0.1}>
          <motion.div whileHover={{ y: -5 }} id="story" className="relative group overflow-hidden h-[500px] rounded-lg shadow-sm">
            <img src="https://picsum.photos/seed/story-cover/800/1000" alt="Our Story" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40 flex flex-col items-center justify-start p-8 text-center text-[#e3d3a4]">
              <h2 className="font-sans text-3xl font-black uppercase tracking-widest">OUR STORY</h2>
            </div>
          </motion.div>
        </FadeInWhenVisible>
      </div>

      {/* Columns 2 & 3 */}
      <div className="md:col-span-2 flex flex-col gap-4">
        {/* Location & Lodging */}
        <FadeInWhenVisible delay={0.2}>
          <motion.div whileHover={{ y: -5 }} className="bg-[#e3d3a4] p-8 flex flex-col h-[250px] rounded-lg shadow-sm relative overflow-hidden">
            <h2 className="font-sans text-3xl font-black text-[#5a6045] uppercase tracking-widest relative z-10">LOCATION & LODGING</h2>
            {/* SVG Background */}
            <div className="absolute inset-0 w-full h-full pointer-events-none">
              <svg viewBox="0 0 400 200" className="w-full h-full stroke-[#5a6045] fill-none stroke-[1.5] opacity-80" preserveAspectRatio="xMidYMax slice">
                {/* Dots/Stars */}
                <g fill="#5a6045" stroke="none">
                  <circle cx="20" cy="40" r="1" /> <circle cx="50" cy="80" r="1" /> <circle cx="80" cy="30" r="1" />
                  <circle cx="120" cy="60" r="1" /> <circle cx="150" cy="20" r="1" /> <circle cx="180" cy="90" r="1" />
                  <circle cx="220" cy="40" r="1" /> <circle cx="250" cy="70" r="1" /> <circle cx="280" cy="30" r="1" />
                  <circle cx="320" cy="80" r="1" /> <circle cx="350" cy="20" r="1" /> <circle cx="380" cy="60" r="1" />
                  <circle cx="10" cy="120" r="1" /> <circle cx="40" cy="160" r="1" /> <circle cx="70" cy="110" r="1" />
                  <circle cx="110" cy="140" r="1" /> <circle cx="140" cy="180" r="1" /> <circle cx="170" cy="130" r="1" />
                  <circle cx="210" cy="170" r="1" /> <circle cx="240" cy="120" r="1" /> <circle cx="270" cy="160" r="1" />
                </g>
                {/* Clouds */}
                <path d="M 10 30 L 40 30 Q 50 30 50 40 L 20 40" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M 220 50 L 280 50 Q 290 50 290 60 L 240 60" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M 320 20 L 380 20 Q 390 20 390 30 L 340 30" strokeLinecap="round" strokeLinejoin="round" />
                {/* Cliff */}
                <path d="M 230 200 L 240 120 Q 245 100 260 100 L 400 100" />
                <path d="M 230 200 L 235 120" />
                {/* Tent */}
                <path d="M 260 100 L 280 60 L 300 100 Z" />
                <path d="M 280 60 L 280 100" />
                <path d="M 270 100 L 280 80 L 290 100" />
                {/* Trees */}
                <path d="M 310 100 L 310 50 M 300 90 L 310 70 L 320 90 M 305 70 L 310 50 L 315 70 M 300 100 L 310 80 L 320 100" />
                <path d="M 340 100 L 340 40 M 330 90 L 340 60 L 350 90 M 335 60 L 340 40 L 345 60 M 330 100 L 340 70 L 350 100" />
                <path d="M 370 100 L 370 50 M 360 90 L 370 70 L 380 90 M 365 70 L 370 50 L 375 70 M 360 100 L 370 80 L 380 100" />
                {/* Water Lines */}
                <path d="M 0 120 Q 20 125 40 120 T 80 120 T 120 120 T 160 120 T 200 120 T 235 120" />
                <path d="M 10 150 Q 30 155 50 150 T 90 150 T 130 150 T 170 150 T 210 150 T 232 150" />
                <path d="M 0 180 Q 20 185 40 180 T 80 180 T 120 180 T 160 180 T 200 180 T 230 180" />
              </svg>
            </div>
          </motion.div>
        </FadeInWhenVisible>

        {/* Bottom Row of Col 2 & 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
          {/* Packing List */}
          <FadeInWhenVisible delay={0.3}>
            <motion.div whileHover={{ y: -5 }} id="packing" className="bg-[#455860] text-[#e3d3a4] p-8 flex flex-col items-start h-[450px] rounded-lg shadow-sm relative overflow-hidden">
              <h2 className="font-sans text-3xl font-black uppercase tracking-widest mb-8 relative z-10">PACKING LIST</h2>
              {/* SVGs */}
              <div className="flex-1 w-full relative">
                <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full stroke-[#e3d3a4] fill-none stroke-[2]" strokeLinecap="round" strokeLinejoin="round">
                  {/* Backpack */}
                  <g transform="translate(10, 20)">
                    <rect x="10" y="20" width="40" height="50" rx="10" />
                    <path d="M 15 20 Q 30 0 45 20" />
                    <rect x="15" y="40" width="30" height="25" rx="5" />
                    <line x1="25" y1="45" x2="35" y2="45" />
                    <path d="M 10 30 Q 0 40 5 60" />
                    <path d="M 50 30 Q 60 40 55 60" />
                  </g>
                  {/* Puffer Jacket */}
                  <g transform="translate(80, 10)">
                    <path d="M 30 10 Q 40 0 50 10 L 70 20 Q 80 30 75 50 L 70 70 Q 60 80 50 75 L 50 80 Q 40 85 30 80 L 30 75 Q 20 80 10 70 L 5 50 Q 0 30 10 20 Z" />
                    <line x1="40" y1="10" x2="40" y2="82" />
                    <path d="M 10 20 Q 20 30 30 30 M 10 40 Q 20 50 30 50 M 10 60 Q 20 70 30 70" />
                    <path d="M 70 20 Q 60 30 50 30 M 70 40 Q 60 50 50 50 M 70 60 Q 60 70 50 70" />
                    <path d="M 30 30 Q 40 35 50 30 M 30 50 Q 40 55 50 50 M 30 70 Q 40 75 50 70" />
                  </g>
                  {/* Boot */}
                  <g transform="translate(30, 110)">
                    <path d="M 40 10 L 50 30 L 70 35 L 80 50 L 80 60 L 10 60 L 5 50 L 10 40 L 20 40 L 30 20 Z" />
                    <path d="M 10 60 L 10 65 Q 45 70 80 65 L 80 60" />
                    <path d="M 40 10 Q 50 20 60 15 M 45 15 Q 55 25 65 20 M 50 20 Q 60 30 70 25" />
                    <path d="M 30 20 L 40 40" />
                  </g>
                </svg>
              </div>
            </motion.div>
          </FadeInWhenVisible>

          {/* Schedule & Registry */}
          <div className="flex flex-col gap-4">
            {/* Schedule */}
            <FadeInWhenVisible delay={0.4}>
              <motion.div whileHover={{ y: -5 }} id="schedule" className="bg-[#9a3324] text-[#e3d3a4] p-8 flex flex-col items-center justify-center h-[217px] rounded-lg shadow-sm">
                <h2 className="font-serif text-4xl font-black uppercase tracking-widest text-transparent" style={{ WebkitTextStroke: '1px #e3d3a4' }}>SCHEDULE</h2>
              </motion.div>
            </FadeInWhenVisible>

            {/* Registry */}
            <FadeInWhenVisible delay={0.5}>
              <motion.div whileHover={{ y: -5 }} id="registry" className="bg-[#73734f] text-[#e3d3a4] p-8 flex flex-col items-center justify-center h-[217px] rounded-lg shadow-sm">
                <h2 className="font-serif text-4xl font-black uppercase tracking-widest text-transparent" style={{ WebkitTextStroke: '1px #e3d3a4' }}>REGISTRY</h2>
              </motion.div>
            </FadeInWhenVisible>
          </div>
        </div>
      </div>

    </div>
  </section>
);

const StoryTimeline = () => (
  <section className="bg-cream py-32 topo-bg relative overflow-hidden">
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
          <h2 className="font-serif text-6xl md:text-7xl font-bold text-neutral-800 tracking-tight">Our Story</h2>
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
            { year: "2015", title: "The Adventure Begins", img: "story1", side: "left", text: "We met on a group hike in Elk, CA. Nick offered Allison a snack, and we ended up talking the whole way down. We discovered our shared love for exploration." },
            { year: "2017", title: "First Road Trip", img: "story2", side: "right", text: "Our first cross-country road trip solidified our bond. From national parks to hidden beaches, we explored together." },
            { year: "2020", title: "The Proposal", img: "story3", side: "left", text: "On a surprise trip back to Elk, Nick proposed at sunset on our favorite coastal trail. It was a perfect moment." },
            { year: "2022", title: "Our Greatest Adventure", img: "story4", side: "right", text: "We are so excited to begin our married life together, surrounded by our loved ones, back where it all started." }
          ].map((item, i) => (
            <div key={i} className={`relative flex flex-col md:flex-row items-center gap-12 ${item.side === 'right' ? 'md:flex-row-reverse' : ''}`}>
              <div className="md:w-1/2 flex justify-center">
                <FadeInWhenVisible x={item.side === 'left' ? -50 : 50}>
                  <motion.div whileHover={{ scale: 1.02 }} className="relative group">
                    <div className="absolute inset-0 bg-rust/10 rounded-2xl blur-2xl group-hover:bg-rust/20 transition-all"></div>
                    <img src={`https://picsum.photos/seed/${item.img}/600/450`} alt={item.year} className="relative rounded-2xl shadow-2xl w-full max-w-md z-10" referrerPolicy="no-referrer" />
                  </motion.div>
                </FadeInWhenVisible>
              </div>
              
              <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-forest border-4 border-cream z-20 shadow-lg"></div>
              
              <div className={`md:w-1/2 ${item.side === 'left' ? 'text-left' : 'text-right'}`}>
                <FadeInWhenVisible x={item.side === 'left' ? 50 : -50}>
                  <span className="text-rust font-bold tracking-[0.3em] text-xs mb-2 block">{item.year}</span>
                  <h3 className="font-serif text-3xl md:text-4xl font-bold text-forest mb-4">{item.title}</h3>
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
          <h2 className="font-serif text-6xl font-bold text-forest mb-6 tracking-tight">GETTING THERE</h2>
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
            <h3 className="font-serif text-4xl font-bold text-forest mb-6">DRIVING</h3>
            <p className="text-base text-neutral-600 leading-relaxed font-light max-w-md">
              From SF/Oakland: Approx. 3-4 hours north on Highway 1. Enjoy the scenic route!
            </p>
          </motion.div>
        </FadeInWhenVisible>
        <FadeInWhenVisible delay={0.2}>
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-cream p-16 rounded-3xl border border-forest/5 flex flex-col items-center text-center shadow-sm"
          >
            <Plane className="w-24 h-24 text-rust mb-10 stroke-[0.5]" />
            <h3 className="font-serif text-4xl font-bold text-forest mb-6">FLYING</h3>
            <p className="text-base text-neutral-600 leading-relaxed font-light max-w-md">
              Nearest airports: SFO or OAK. Rent a car for the final leg.
            </p>
          </motion.div>
        </FadeInWhenVisible>
      </div>

      <FadeInWhenVisible>
        <div className="text-center mb-20">
          <h2 className="font-serif text-6xl font-bold text-forest mb-6 tracking-tight">WHERE TO STAY</h2>
          <div className="w-24 h-1 bg-rust/20 mx-auto rounded-full"></div>
        </div>
      </FadeInWhenVisible>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {[
          { name: "Elk Cove Inn", desc: "Charming inn with ocean views.", icon: Home },
          { name: "Manchester State Park", desc: "Beachside camping spots available.", icon: Navigation },
          { name: "The Harbor House Inn", desc: "Luxury accommodation nearby.", icon: Home }
        ].map((place, i) => (
          <div key={i}>
            <FadeInWhenVisible delay={i * 0.1}>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-sand/20 p-10 rounded-2xl border border-forest/5 flex flex-col items-center text-center group"
              >
                <place.icon className="w-16 h-16 text-rust mb-8 stroke-[0.5] group-hover:scale-110 transition-transform" />
                <h4 className="font-serif text-2xl font-bold text-forest mb-3">{place.name}</h4>
                <p className="text-sm text-neutral-500 font-light">{place.desc}</p>
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
            <div key={i} className="w-12 h-32 border-l-2 border-forest/40 rounded-t-full transform rotate-12"></div>
          ))}
       </div>
    </div>
    
    <div className="max-w-7xl mx-auto px-6 flex flex-col items-center relative z-10">
      <motion.div 
        whileHover={{ scale: 1.05 }}
        className="font-serif text-4xl font-black mb-10 tracking-tighter cursor-default text-forest uppercase"
      >
        A&P
      </motion.div>
      <div className="flex flex-wrap justify-center gap-10 text-[11px] font-bold uppercase tracking-[0.3em] text-forest/60 mb-12">
        {["RSVP", "Story", "Travel", "Packing", "Schedule", "Registry"].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-forest transition-colors">
            {item}
          </a>
        ))}
      </div>
      <div className="w-full h-px bg-forest/10 mb-10"></div>
      <div className="text-[10px] text-forest/40 uppercase tracking-[0.4em] font-medium">
        © 2022 Nick & Allison — Made with Love
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

