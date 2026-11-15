import { useEffect, useRef } from 'react';
import { ArrowUpRight, Star } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SpotlightStory({ onOpenBooking }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.spotlight-anim',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-20 sm:py-28 bg-[#F8DDE7]/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Split Container (Exact Reference Video 00:11-00:15) */}
        <div className="bg-[#FFF8FA] rounded-[2.5rem] p-6 sm:p-12 lg:p-16 border border-[#F8DDE7] shadow-xl relative overflow-hidden">
          
          {/* Subtle Decorative Floral Motif in corner (from video) */}
          <div className="absolute bottom-6 right-6 text-[#B76E79]/20 hidden sm:block pointer-events-none">
            <svg className="w-16 h-16 fill-current" viewBox="0 0 24 24">
              <path d="M12 2C10.5 4.5 10.5 7.5 12 10C13.5 7.5 13.5 4.5 12 2ZM22 12C19.5 10.5 16.5 10.5 14 12C16.5 13.5 19.5 13.5 22 12ZM12 22C13.5 19.5 13.5 16.5 12 14C10.5 16.5 10.5 19.5 12 22ZM2 12C4.5 13.5 7.5 13.5 10 12C7.5 10.5 4.5 10.5 2 12Z" />
            </svg>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Portrait Photography with rounded inner crop */}
            <div className="lg:col-span-5 spotlight-anim relative">
              <div className="relative mx-auto max-w-sm lg:max-w-none aspect-[4/5] rounded-[2rem] overflow-hidden bg-white shadow-lg border border-[#F8DDE7]">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
                  alt="Patron holding flowers and celebration gift"
                  className="w-full h-full object-cover"
                />

                {/* Floating Social Proof Avatar Pill (Direct Reference Video Style 00:14) */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-[#F8DDE7] flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    {/* Overlapping Avatars */}
                    <div className="flex -space-x-2">
                      <img
                        className="w-8 h-8 rounded-full border-2 border-white object-cover"
                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80"
                        alt="Customer"
                      />
                      <img
                        className="w-8 h-8 rounded-full border-2 border-white object-cover"
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
                        alt="Customer"
                      />
                      <img
                        className="w-8 h-8 rounded-full border-2 border-white object-cover"
                        src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80"
                        alt="Customer"
                      />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-[#49333D] leading-none">
                        Our Happy Patrons
                      </p>
                      <div className="flex items-center gap-1 mt-0.5">
                        <div className="flex text-amber-500">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-2.5 h-2.5 fill-current" />
                          ))}
                        </div>
                        <span className="text-[10px] text-[#927C85] font-semibold">5.0 (1.2k+ Reviews)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Editorial Headline & Actions */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="spotlight-anim text-xs uppercase font-semibold text-[#B76E79] tracking-widest block">
                The DearBond Difference
              </span>

              <h2 className="spotlight-anim font-serif-display text-3xl sm:text-5xl font-bold text-[#49333D] tracking-tight leading-[1.12]">
                Identify the perfect hamper with a single touch.
              </h2>

              <p className="spotlight-anim font-sans-clean text-base sm:text-lg text-[#927C85] font-light leading-relaxed max-w-xl">
                Find the perfect arrangement for your loved ones, anniversary milestones, or bridesmaids. From wax-sealed handwritten notes to curated Belgian truffles, we bring heartfelt emotion back to giving.
              </p>

              {/* Action row with circular arrow button */}
              <div className="spotlight-anim flex flex-wrap items-center gap-5 pt-3">
                <button
                  onClick={() => onOpenBooking(null)}
                  className="inline-flex items-center gap-3 bg-[#49333D] hover:bg-[#B76E79] text-white font-medium text-sm sm:text-base px-8 py-3.5 rounded-full shadow-lg transition-all duration-300 group cursor-pointer active:scale-95"
                >
                  <span>Book via Instagram</span>
                  <div className="w-7 h-7 rounded-full bg-white/20 group-hover:bg-white text-white group-hover:text-[#49333D] flex items-center justify-center transition-all duration-300 group-hover:rotate-45">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </button>

                <div className="text-xs text-[#927C85]">
                  <strong className="text-[#49333D] block font-semibold">Need 30 Days Advance?</strong>
                  Orders handcrafted on custom schedule
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
