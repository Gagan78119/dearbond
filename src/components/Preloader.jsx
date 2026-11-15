import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import logoImg from '../assets/dearbondlogo.jpeg';

export default function Preloader({ onComplete }) {
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const textRef = useRef(null);
  const subtextRef = useRef(null);

  useEffect(() => {
    // Check reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      onComplete();
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          if (onComplete) onComplete();
        },
      });

      tl.fromTo(
        logoRef.current,
        { scale: 0.8, opacity: 0, rotate: -15 },
        { scale: 1, opacity: 1, rotate: 0, duration: 0.8, ease: 'power3.out' }
      )
        .fromTo(
          textRef.current,
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' },
          '-=0.4'
        )
        .fromTo(
          subtextRef.current,
          { opacity: 0, letterSpacing: '0.1em' },
          { opacity: 1, letterSpacing: '0.25em', duration: 0.5, ease: 'power2.out' },
          '-=0.2'
        )
        .to(containerRef.current, {
          yPercent: -100,
          duration: 0.65,
          ease: 'power3.inOut',
          delay: 0.2,
          onStart: () => {
            if (containerRef.current) {
              containerRef.current.style.pointerEvents = 'none';
            }
          },
        });
    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#F8DDE7] text-[#49333D] overflow-hidden select-none"
    >
      <div className="flex flex-col items-center space-y-4 text-center px-4">
        {/* Brand Logo in Seal */}
        <div
          ref={logoRef}
          className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-[#B76E79] shadow-xl bg-white p-1"
        >
          <img
            src={logoImg}
            alt="DearBond Hampers"
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        {/* Brand Name */}
        <h1
          ref={textRef}
          className="font-serif-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#49333D]"
        >
          DearBond <span className="font-editorial-luxury italic font-normal text-[#B76E79]">Hampers.</span>
        </h1>

        {/* Subtitle */}
        <p
          ref={subtextRef}
          className="text-xs uppercase text-[#9A525D] font-medium tracking-widest"
        >
          Happiness in Every Gift
        </p>
      </div>
    </div>
  );
}
