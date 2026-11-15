import { useState } from 'react';
import { ArrowRight, Sparkles, Check } from 'lucide-react';
import Instagram from './icons/InstagramIcon';
import { boutiqueConfig } from '../data/config';

export default function CommunityBanner({ onOpenBooking }) {
  const [handleInput, setHandleInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleJoin = (e) => {
    e.preventDefault();
    if (!handleInput.trim()) return;
    setSubscribed(true);
    setTimeout(() => {
      window.open(boutiqueConfig.instagram.profileUrl, '_blank', 'noopener,noreferrer');
    }, 1200);
  };

  return (
    <section className="py-20 sm:py-28 bg-[#FFF8FA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* High-Contrast Community Box (Direct Reference Video 00:19 - 00:21) */}
        <div className="bg-[#49333D] text-white rounded-[2.5rem] p-8 sm:p-14 lg:p-16 relative overflow-hidden shadow-2xl">
          
          {/* Ambient Glow in background */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#B76E79]/20 blur-3xl pointer-events-none rounded-full" />

          {/* Video-Style Rotating Badge Sticker in Top-Right */}
          <div className="absolute top-6 right-6 sm:top-10 sm:right-10 hidden sm:flex items-center justify-center">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24">
              <svg
                className="w-full h-full animate-spin-slow text-[#F8DDE7]"
                viewBox="0 0 100 100"
              >
                <path
                  id="communityPath"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="none"
                />
                <text className="text-[9.5px] uppercase tracking-[0.16em] fill-current font-semibold">
                  <textPath href="#communityPath">
                    DearBond Hampers • With Love •
                  </textPath>
                </text>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-[#F3C6D6]" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Headline & Subtext */}
            <div className="lg:col-span-7 space-y-4">
              <h2 className="font-serif-display text-3xl sm:text-5xl font-bold tracking-tight text-white leading-[1.15]">
                Join our gifting community!
              </h2>

              <p className="font-sans-clean text-xs sm:text-sm md:text-base text-[#F8DDE7]/80 max-w-xl font-light leading-relaxed">
                Be the first to discover our seasonal limited-edition collections, holiday calendar slots, and behind-the-scenes bespoke crafting.
              </p>

              {/* Instagram community link */}
              <div className="pt-2 flex items-center gap-2 text-xs text-[#F3C6D6]">
                <Instagram className="w-4 h-4" />
                <span>Join 10.2k+ followers on Instagram ({boutiqueConfig.instagram.handle})</span>
              </div>
            </div>

            {/* Right Interactive Form (Direct Video Reference Style 00:20) */}
            <div className="lg:col-span-5">
              <form onSubmit={handleJoin} className="space-y-3">
                <div className="relative flex items-center">
                  <input
                    type="text"
                    placeholder="Your Instagram Handle or E-mail..."
                    value={handleInput}
                    onChange={(e) => setHandleInput(e.target.value)}
                    className="w-full pl-5 pr-14 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 text-xs sm:text-sm focus:outline-none focus:border-[#F3C6D6] backdrop-blur-xs transition-colors"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 w-10 h-10 rounded-full bg-white text-[#49333D] hover:bg-[#F3C6D6] flex items-center justify-center transition-all duration-300 shadow-md cursor-pointer hover:scale-105"
                    aria-label="Submit"
                  >
                    {subscribed ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <ArrowRight className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {subscribed && (
                  <p className="text-xs text-[#F8DDE7] animate-pulse">
                    ✨ Thank you! Opening our Instagram page to connect...
                  </p>
                )}

                <p className="text-[11px] text-white/50 pl-3">
                  Prefer direct bookings?{' '}
                  <button
                    type="button"
                    onClick={() => onOpenBooking(null)}
                    className="text-[#F3C6D6] underline hover:text-white cursor-pointer ml-1"
                  >
                    Enquire now
                  </button>
                </p>
              </form>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
