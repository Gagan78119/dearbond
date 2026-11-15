import { Heart } from 'lucide-react';

export default function TaglineReveal() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-transparent via-[#F8DDE7]/30 to-transparent relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        {/* Decorative Floral / Heart Ribbon Icon */}
        <div className="inline-flex items-center justify-center gap-3">
          <span className="w-12 sm:w-20 h-[1px] bg-gradient-to-r from-transparent to-[#B76E79]/40" />
          <Heart className="w-5 h-5 text-[#B76E79] fill-[#F8DDE7]" />
          <span className="w-12 sm:w-20 h-[1px] bg-gradient-to-l from-transparent to-[#B76E79]/40" />
        </div>

        {/* Large Editorial Statement */}
        <blockquote className="font-editorial-luxury text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#49333D] font-normal italic tracking-wide leading-tight max-w-4xl mx-auto">
          “Gifts That Speak From the Heart.”
        </blockquote>

        <p className="font-sans-clean text-sm sm:text-base md:text-lg text-[#927C85] max-w-2xl mx-auto font-light leading-relaxed">
          Because real connection isn’t bought from an assembly line. Every ribbon is hand-tied, every keepsake is individually calligraphed, and every parcel is crafted to create a moment of genuine wonder.
        </p>

        {/* Delicate divider with 3 dots */}
        <div className="flex items-center justify-center gap-2 pt-2 text-[#B76E79]/40">
          <span className="w-1.5 h-1.5 rounded-full bg-[#B76E79]/40" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#B76E79]" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#B76E79]/40" />
        </div>

      </div>
    </section>
  );
}
