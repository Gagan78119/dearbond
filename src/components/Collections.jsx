import { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { collectionsData } from '../data/collections';

gsap.registerPlugin(ScrollTrigger);

export default function Collections({ onSelectCategory }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.collection-stepped-card',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleExplore = (categoryId) => {
    onSelectCategory(categoryId);
    const element = document.getElementById('featured');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="collections"
      className="py-20 sm:py-32 bg-[#FFF8FA] relative border-t border-[#F8DDE7]/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Video-Inspired Four-Petal Flower Emblem */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs uppercase font-semibold text-[#B76E79] tracking-widest block">
              Curated Gift Categories
            </span>
            <h2 className="font-serif-display text-3xl sm:text-5xl font-bold text-[#49333D] tracking-tight">
              Signature Collections & Floral Boxes
            </h2>
          </div>

          {/* 4-Petal Floral Clover Motif from Video 00:07 */}
          <div className="hidden sm:flex items-center gap-4 text-[#B76E79]">
            <span className="text-xs uppercase tracking-wider text-[#927C85]">8 Curations</span>
            <svg
              className="w-8 h-8 text-[#B76E79] fill-current animate-pulse"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C10.5 4.5 10.5 7.5 12 10C13.5 7.5 13.5 4.5 12 2ZM22 12C19.5 10.5 16.5 10.5 14 12C16.5 13.5 19.5 13.5 22 12ZM12 22C13.5 19.5 13.5 16.5 12 14C10.5 16.5 10.5 19.5 12 22ZM2 12C4.5 13.5 7.5 13.5 10 12C7.5 10.5 4.5 10.5 2 12Z" />
            </svg>
          </div>
        </div>

        {/* Stepped Cards Grid (From Video Reference) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 items-start">
          {collectionsData.map((category, idx) => {
            // Apply slight vertical step/offset like in the reference video
            const stepOffset = idx % 2 === 1 ? 'sm:mt-8' : '';

            return (
              <div
                key={category.id}
                onClick={() => handleExplore(category.id)}
                className={`collection-stepped-card group bg-white rounded-3xl p-4 border border-[#F8DDE7] shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-pointer flex flex-col justify-between ${stepOffset}`}
              >
                {/* Image */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#FFF8FA] mb-4">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-full text-[10px] font-semibold text-[#B76E79] tracking-wider uppercase">
                    {category.itemCount}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-2 px-1">
                  <h3 className="font-serif-display text-lg sm:text-xl font-bold text-[#49333D] group-hover:text-[#B76E79] transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-xs text-[#927C85] leading-relaxed line-clamp-2 font-light">
                    {category.description}
                  </p>
                </div>

                {/* Bottom Circular Arrow Button (Reference Video Style) */}
                <div className="pt-4 mt-3 border-t border-[#F8DDE7]/60 flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#B76E79] group-hover:text-[#49333D] transition-colors">
                    Explore
                  </span>
                  <div className="w-9 h-9 rounded-full bg-[#49333D] group-hover:bg-[#B76E79] text-white flex items-center justify-center transition-all duration-300 shadow-xs group-hover:rotate-45">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
