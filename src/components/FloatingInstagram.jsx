import { Sparkles } from 'lucide-react';
import Instagram from './icons/InstagramIcon';

export default function FloatingInstagram({ onOpenBooking }) {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      {/* Tooltip speech bubble */}
      <div className="hidden sm:flex items-center gap-2 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#F8DDE7] shadow-md text-xs text-[#49333D] font-medium animate-bounce">
        <Sparkles className="w-3.5 h-3.5 text-[#B76E79]" />
        <span>Enquire on Instagram</span>
      </div>

      {/* Floating Action Button */}
      <button
        onClick={() => onOpenBooking(null)}
        className="group relative flex items-center gap-2.5 bg-gradient-to-r from-[#B76E79] to-[#9A525D] hover:from-[#9A525D] hover:to-[#B76E79] text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-xl shadow-[#B76E79]/40 hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
        aria-label="Enquire on Instagram"
      >
        {/* Glowing pulse ring */}
        <span className="absolute -inset-1 rounded-full bg-[#B76E79] opacity-40 group-hover:opacity-60 blur-xs animate-ping pointer-events-none" />

        <Instagram className="w-5 h-5 relative z-10" />
        <span className="hidden sm:inline-block font-semibold text-xs sm:text-sm tracking-wide relative z-10">
          Book on Instagram
        </span>
      </button>
    </div>
  );
}
