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
      {["Story", "Travel", "Packing", "Schedule"].map((item) => (
        <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-rust transition-colors relative group">
          {item}
          <span className="absolute -bottom-1 left-0 w-0 h-px bg-rust transition-all duration-300 group-hover:w-full"></span>
        </a>
      ))}
    </div>
    <div className="w-[100px]"></div> {/* Spacer to balance logo if needed, or just remove button */}
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
              COAST CAMP
            </h1>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="font-serif text-4xl md:text-6xl text-rust font-black uppercase tracking-tight mb-8"
            >
              WITH NICK & ALLISON
            </motion.h2>
          </motion.div>
          
          <FadeInWhenVisible delay={0.8}>
            <p className="text-xl md:text-2xl text-neutral-800 mb-10 font-medium tracking-tight">
              Join us as we celebrate our marriage
            </p>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={1}>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 text-sm font-bold uppercase tracking-[0.2em] text-neutral-900">
              <div>SEPTEMBER 1-4, 2022</div>
              <div className="hidden md:block w-1.5 h-1.5 bg-neutral-900 rounded-full"></div>
              <div>ELK, CALIFORNIA</div>
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
  <section className="bg-white py-12">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Our Story */}
      <FadeInWhenVisible>
        <motion.div 
          whileHover={{ y: -5 }}
          id="story" className="relative group overflow-hidden min-h-[600px] rounded-sm shadow-sm"
        >
          <img src="https://picsum.photos/seed/story-cover/800/1000" alt="Our Story" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-end p-12 text-center text-white">
            <h2 className="font-serif text-5xl font-black mb-2 uppercase tracking-tight">OUR STORY</h2>
            <p className="text-base opacity-90 font-medium tracking-tight">From the first hike to the biggest adventure.</p>
          </div>
        </motion.div>
      </FadeInWhenVisible>

      {/* Location */}
      <FadeInWhenVisible delay={0.2}>
        <motion.div 
          whileHover={{ y: -5 }}
          className="bg-sand p-12 flex flex-col items-center text-center justify-between min-h-[600px] rounded-sm topo-bg border border-black/5"
        >
          <div className="w-full flex flex-col items-center pt-12">
            <div className="flex gap-4 mb-8">
              <div className="w-20 h-20 border-2 border-forest/20 rounded-sm flex items-center justify-center">
                <Navigation className="w-10 h-10 text-forest stroke-[1.5]" />
              </div>
              <div className="w-20 h-20 border-2 border-forest/20 rounded-sm flex items-center justify-center">
                <MapPin className="w-10 h-10 text-forest stroke-[1.5]" />
              </div>
            </div>
            <h2 className="font-serif text-4xl font-black text-forest mb-6 uppercase leading-none tracking-tighter">LOCATION & LODGING</h2>
            <p className="text-base text-neutral-800 leading-relaxed max-w-[280px] font-medium tracking-tight">
              Locate snore your coastal the venue at the Olis, californ, and nearmore momwhere of your uncer coastal cliff loya.
            </p>
          </div>
          <div className="w-full mt-8 opacity-40">
            <div className="h-32 w-full border-t-2 border-forest/30 relative overflow-hidden">
               <div className="absolute bottom-0 left-0 w-full h-16 bg-forest/5 skew-y-3"></div>
               <div className="absolute bottom-4 right-10 w-12 h-12 border-2 border-forest/20 rotate-45"></div>
            </div>
          </div>
        </motion.div>
      </FadeInWhenVisible>

      {/* Packing List */}
      <FadeInWhenVisible>
        <motion.div 
          whileHover={{ y: -5 }}
          id="packing" className="bg-forest text-white p-12 flex flex-col items-center text-center justify-center min-h-[500px] rounded-sm"
        >
          <div className="grid grid-cols-2 gap-8 mb-12">
            <Package className="w-16 h-16 text-sand/40 stroke-[1]" />
            <div className="w-16 h-16 border-2 border-sand/20 rounded-sm"></div>
            <div className="w-16 h-16 border-2 border-sand/20 rounded-sm"></div>
            <ClipboardList className="w-16 h-16 text-sand/40 stroke-[1]" />
          </div>
          <h2 className="font-serif text-5xl font-black mb-6 uppercase tracking-tight">PACKING LIST</h2>
          <p className="text-base leading-relaxed opacity-90 max-w-[280px] font-medium tracking-tight">
            Keep some rorotorioovse:tlire essentials to packets, and jackts, boots, and more.
          </p>
        </motion.div>
      </FadeInWhenVisible>

      {/* Schedule */}
      <FadeInWhenVisible delay={0.2}>
        <motion.div 
          whileHover={{ y: -5 }}
          id="schedule" className="bg-rust text-white p-12 flex flex-col items-center text-center justify-center min-h-[500px] rounded-sm"
        >
          <h2 className="font-serif text-6xl font-black mb-10 uppercase tracking-tight">SCHEDULE</h2>
          <div className="space-y-8 text-sm font-bold uppercase tracking-[0.1em]">
            {[
              { day: "Monday", time: "6:00 am — 8:30 pm" },
              { day: "Tuesday", time: "2:30 am — 2:30 pm" },
              { day: "Wednesday", time: "3:30 am — 2:30 pm" },
              { day: "Thursday", time: "3:00 am — 3:30 pm" }
            ].map((item, i) => (
              <div key={i}>
                <p className="text-white/60 mb-1 text-[10px] tracking-[0.2em]">{item.day}</p>
                <p className="text-xl font-black">{item.time}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </FadeInWhenVisible>
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
        COAST CAMP
      </motion.div>
      <div className="flex flex-wrap justify-center gap-10 text-[11px] font-bold uppercase tracking-[0.3em] text-forest/60 mb-12">
        {["Story", "Travel", "Packing", "Schedule"].map((item) => (
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

