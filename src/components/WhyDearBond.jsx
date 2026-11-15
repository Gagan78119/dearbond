import { Heart, Sparkles, Package, Smile, Award } from 'lucide-react';

export default function WhyDearBond() {
  const features = [
    {
      icon: Heart,
      title: 'Made With Love',
      subtitle: 'Artisanal Care in Every Box',
      description:
        'Every single hamper is arranged by hand with deep devotion. From crisp ribbons to meticulously aligned treats, we treat each gift as if it were for our own family.',
    },
    {
      icon: Sparkles,
      title: 'Personalised Touch',
      subtitle: 'Tailored Just For Them',
      description:
        'From custom laser-engraved names to wax-sealed handwritten calligraphy cards, your recipient will know without doubt this gift was crafted solely for them.',
    },
    {
      icon: Package,
      title: 'Beautiful Packaging',
      subtitle: 'Heirloom Keepsake Quality',
      description:
        'We never use flimsy cartons. Our rigid boxes, velvet chests, and double-faced satin ribbons are designed to be treasured as memory boxes for years.',
    },
    {
      icon: Smile,
      title: 'Special Moments',
      subtitle: 'Memories That Linger',
      description:
        'Whether it’s a golden anniversary, a nervous bridesmaid proposal, or a festive milestone, our hampers turn everyday moments into cherished lifelong memories.',
    },
  ];

  return (
    <section id="why-us" className="py-20 sm:py-28 bg-[#FFF8FA] relative border-t border-[#F8DDE7]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#B76E79]/30 text-[#B76E79] text-xs font-semibold tracking-wider uppercase shadow-xs">
            <Award className="w-3.5 h-3.5" />
            <span>The Boutique Promise</span>
          </div>

          <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#49333D] tracking-tight">
            Why DearBond Hampers?
          </h2>

          <p className="font-sans-clean text-[#927C85] text-base sm:text-lg font-light leading-relaxed">
            In a world of mass-produced gifts, we believe in slow, thoughtful, romantic craftsmanship.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-7 border border-[#F8DDE7] shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#F8DDE7] text-[#B76E79] flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#B76E79] group-hover:text-white">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div>
                    <h3 className="font-serif-display font-bold text-lg text-[#49333D] group-hover:text-[#B76E79] transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-[11px] font-semibold text-[#B76E79] tracking-wider uppercase mt-0.5">
                      {feature.subtitle}
                    </p>
                  </div>

                  <p className="font-sans-clean text-xs sm:text-sm text-[#927C85] leading-relaxed font-light">
                    {feature.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#F8DDE7]/40 flex items-center gap-1.5 text-[11px] text-[#B76E79] font-medium">
                  <Heart className="w-3 h-3 fill-[#F8DDE7]" />
                  <span>DearBond Craftsmanship</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
