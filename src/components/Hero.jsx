import { useEffect, useRef } from 'react';
import { ArrowUpRight, ArrowDown, Sparkles, Play } from 'lucide-react';
import gsap from 'gsap';
import logoImg from '../assets/dearbondlogo.jpeg';

export default function Hero({ onOpenBooking, isLoaded }) {
  const heroRef = useRef(null);
  const headlineRef = useRef(null);
  const leftColRef = useRef(null);
  const centerColRef = useRef(null);
  const rightColRef = useRef(null);

  useEffect(() => {
    if (!isLoaded) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Staggered reveal for headline and swirl
      tl.fromTo(
        '.hero-title-line',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, stagger: 0.15 }
      )
        .fromTo(
          '.hero-swirl-doodle',
          { scale: 0.7, opacity: 0, rotate: -20 },
          { scale: 1, opacity: 1, rotate: 0, duration: 0.8 },
          '-=0.5'
        )
        // Staggered entry for 3 collage columns
        .fromTo(
          [leftColRef.current, centerColRef.current, rightColRef.current],
          { y: 45, opacity: 0, scale: 0.97 },
          { y: 0, opacity: 1, scale: 1, duration: 0.95, stagger: 0.12 },
          '-=0.6'
        );
    }, heroRef);

    return () => ctx.revert();
  }, [isLoaded]);

  const scrollToCollections = () => {
    const el = document.getElementById('collections');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative pt-28 sm:pt-36 pb-20 sm:pb-28 bg-[#FFF8FA] overflow-hidden"
    >
      {/* Background ambient blush glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] lg:w-[1100px] h-[550px] bg-gradient-to-b from-[#F8DDE7]/50 via-[#F3C6D6]/20 to-transparent blur-3xl -z-10 pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ======================================================== */}
        {/* 1. HEADLINE (Direct Reference Image Composition)        */}
        {/* ======================================================== */}
        <div ref={headlineRef} className="relative mb-12 sm:mb-16">
          <div className="relative inline-block max-w-5xl">
            <h1 className="font-serif-display text-4xl sm:text-6xl md:text-7xl lg:text-[5.2rem] font-bold text-[#49333D] tracking-tight leading-[1.04]">
              <span className="hero-title-line block">
                Make every moment
              </span>
              <span className="hero-title-line block font-editorial-luxury italic font-normal text-[#B76E79]">
                you’ve always cherished
              </span>
            </h1>

            {/* Delicate curved line / swirl doodle on the right (matching reference image) */}
            <svg
              className="hero-swirl-doodle absolute -right-14 sm:-right-24 top-6 sm:top-10 w-20 sm:w-28 h-20 sm:h-28 text-[#B76E79]/50 pointer-events-none hidden md:block"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 65 C 30 10, 70 15, 85 45 C 95 65, 80 90, 60 85 C 40 80, 45 55, 65 50 C 85 45, 95 65, 90 75"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* ======================================================== */}
        {/* 2. THREE-COLUMN HERO COLLAGE (Direct Reference Layout)  */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          
          {/* ------------------------------------------------------ */}
          {/* COLUMN 1 (LEFT ~28%): Rotating Stamp + Status Card     */}
          {/* ------------------------------------------------------ */}
          <div ref={leftColRef} className="md:col-span-4 lg:col-span-3 space-y-8">
            
            {/* Rotating circular badge + text */}
            <div className="space-y-3">
              <div className="relative w-18 h-18 sm:w-20 sm:h-20 flex items-center justify-center">
                <svg
                  className="w-full h-full animate-spin-slow text-[#B76E79]"
                  viewBox="0 0 100 100"
                >
                  <path
                    id="heroLeftCirclePath"
                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    fill="none"
                  />
                  <text className="text-[9.5px] uppercase tracking-[0.16em] fill-current font-bold">
                    <textPath href="#heroLeftCirclePath">
                      DEARBOND HAMPERS • WITH LOVE •
                    </textPath>
                  </text>
                </svg>

                {/* Center floral/heart mark */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full overflow-hidden border border-[#B76E79]/30 shadow-xs">
                    <img src={logoImg} alt="DearBond" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>

              {/* Text underneath badge */}
              <p className="font-sans-clean text-xs sm:text-sm text-[#49333D] font-medium leading-snug">
                Browse our<br />
                collection of luxury<br />
                hamper ideas!
              </p>
            </div>

            {/* Dark status card (Leaves/Ribbon with 100% Bespoke metric) */}
            <div className="relative rounded-3xl overflow-hidden bg-[#49333D] text-white p-3 shadow-lg border border-[#F8DDE7] group">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-black/20">
                <img
                  src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=600&q=80"
                  alt="DearBond ribbons and floral keepsakes"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Bottom status bar (like the video soil moisture bar) */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-[#F3C6D6]" />
                    </div>
                    <div>
                      <p className="text-[10px] text-white/70 leading-none">Curated</p>
                      <p className="text-xs font-bold text-white leading-tight">Purity 100%</p>
                    </div>
                  </div>

                  <span className="text-[9px] bg-white/20 backdrop-blur-xs px-2 py-0.5 rounded-full text-[#F8DDE7] font-medium">
                    Min 30-Day
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* ------------------------------------------------------ */}
          {/* COLUMN 2 (CENTER ~44%): Tall Upright Hero Focal Card   */}
          {/* ------------------------------------------------------ */}
          <div ref={centerColRef} className="md:col-span-5 lg:col-span-5">
            <div className="relative rounded-[2rem] overflow-hidden bg-[#F3C6D6] p-3 sm:p-4 shadow-xl border border-[#F8DDE7] group">
              <div className="relative aspect-[3/4] sm:aspect-[4/5] rounded-[1.6rem] overflow-hidden bg-[#F8DDE7]">
                <img
                  src="https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=1000&q=85"
                  alt="DearBond Luxury Hero Hamper"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Subtle soft gradient scrim at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60" />

                {/* Bottom-left double circular action buttons (Direct Reference Image Style) */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2 z-10">
                  {/* Button 1: Star emblem circle */}
                  <div className="w-11 h-11 rounded-full bg-white/40 backdrop-blur-md text-[#49333D] flex items-center justify-center border border-white/50 shadow-xs">
                    <Sparkles className="w-5 h-5 text-[#49333D]" />
                  </div>

                  {/* Button 2: White circular arrow button */}
                  <button
                    type="button"
                    onClick={() => onOpenBooking(null)}
                    className="w-11 h-11 rounded-full bg-white hover:bg-[#B76E79] text-[#49333D] hover:text-white flex items-center justify-center shadow-lg transition-all duration-300 cursor-pointer hover:rotate-45 active:scale-95"
                    aria-label="Enquire about this hamper"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* ------------------------------------------------------ */}
          {/* COLUMN 3 (RIGHT ~28%): Crescent Preview, Stats & Arrow */}
          {/* ------------------------------------------------------ */}
          <div ref={rightColRef} className="md:col-span-3 lg:col-span-4 space-y-8">
            
            {/* Top: Crescent / Arch Video Preview Card (Exact Reference Image Style) */}
            <div className="space-y-3">
              <div className="relative flex items-center">
                {/* Crescent / Arch double circle mask */}
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden bg-[#F8DDE7] border-2 border-white shadow-md shrink-0 group">
                  <img
                    src="https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=400&q=80"
                    alt="DearBond chocolate unboxing"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Floating Play Video / Watch Pill in center */}
                  <button
                    type="button"
                    onClick={() => onOpenBooking(null)}
                    className="absolute inset-0 m-auto w-max h-max bg-black/40 hover:bg-black/60 backdrop-blur-xs text-white text-[11px] font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 transition-colors shadow-sm"
                  >
                    <Play className="w-3 h-3 fill-white" />
                    <span>Watch Reel</span>
                  </button>
                </div>

                {/* Overlapping secondary decorative circle */}
                <div className="w-20 h-20 -ml-8 rounded-full overflow-hidden border-2 border-white shadow-sm bg-[#FFF8FA] opacity-90 hidden sm:block">
                  <img
                    src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=300&q=80"
                    alt="Packaging craft"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Supporting tagline below preview */}
              <p className="font-sans-clean text-xs sm:text-sm text-[#927C85] leading-snug font-light">
                Gifts crafted for heartfelt<br />
                celebrations & cherished bonds.
              </p>
            </div>

            {/* Middle: Stats row (250+ / 10.2k+ matching reference image) */}
            <div className="flex items-start gap-8 sm:gap-10 pt-2 border-t border-[#F8DDE7]/80">
              <div>
                <span className="font-serif-display text-3xl sm:text-4xl font-bold text-[#49333D] block">
                  250+
                </span>
                <span className="text-[10px] sm:text-[11px] text-[#927C85] uppercase tracking-wider font-semibold block mt-0.5">
                  Bespoke Hampers
                </span>
              </div>

              <div>
                <span className="font-serif-display text-3xl sm:text-4xl font-bold text-[#B76E79] block">
                  10.2k+
                </span>
                <span className="text-[10px] sm:text-[11px] text-[#927C85] uppercase tracking-wider font-semibold block mt-0.5">
                  Cherished Bonds
                </span>
              </div>
            </div>

            {/* Bottom: White vertical scroll-down pill (Exact Reference Image Style) */}
            <div className="flex justify-end pt-2">
              <button
                type="button"
                onClick={scrollToCollections}
                className="w-12 h-20 rounded-full bg-white hover:bg-[#F8DDE7] border border-[#F8DDE7] text-[#49333D] hover:text-[#B76E79] flex flex-col items-center justify-center gap-1.5 shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-1 cursor-pointer"
                aria-label="Scroll down to collections"
              >
                <ArrowDown className="w-5 h-5 animate-bounce" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
