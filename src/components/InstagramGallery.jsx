import { ExternalLink } from 'lucide-react';
import Instagram from './icons/InstagramIcon';
import { boutiqueConfig } from '../data/config';

export default function InstagramGallery() {
  const galleryItems = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=600&q=80',
      caption: 'Hand-tying blush pink double-faced satin bows for today’s anniversary suites. 🎀',
      tag: '#AnniversaryHamper',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=600&q=80',
      caption: 'Wax seals and calligraphy parchment notes being prepared with love. ✨',
      tag: '#WaxSealElegance',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=600&q=80',
      caption: 'Single-origin dark chocolate pralines tucked inside our signature velvet chests.',
      tag: '#ArtisanChocolates',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=600&q=80',
      caption: 'Bridesmaid proposal trunk packed for a romantic destination wedding in Udaipur.',
      tag: '#BridesmaidSuite',
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&w=600&q=80',
      caption: 'Couples celebration keepsakes ready for their safe journey across India.',
      tag: '#CoupleKeepsake',
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&w=600&q=80',
      caption: 'Festive radiance with hand-carved pure brass diyas and gourmet mithai.',
      tag: '#FestiveBespoke',
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#FFF8FA] relative border-t border-[#F8DDE7]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#B76E79]/30 text-[#B76E79] text-xs font-semibold tracking-wider uppercase shadow-xs">
            <Instagram className="w-3.5 h-3.5" />
            <span>{boutiqueConfig.instagram.handle}</span>
          </div>

          <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#49333D] tracking-tight">
            A Little Peek Into Our World
          </h2>

          <p className="font-sans-clean text-[#927C85] text-base sm:text-lg font-light leading-relaxed">
            Follow our studio diary on Instagram for behind-the-scenes packaging, new hamper reveals, and daily gifting inspiration.
          </p>
        </div>

        {/* 6 Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {galleryItems.map((item) => (
            <a
              key={item.id}
              href={boutiqueConfig.instagram.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-2xl overflow-hidden bg-[#F8DDE7]/50 border border-[#F8DDE7] shadow-xs hover:shadow-lg transition-all duration-300 block"
            >
              <img
                src={item.image}
                alt="DearBond Hamper Moment"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                loading="lazy"
              />

              {/* Instagram Hover Overlay */}
              <div className="absolute inset-0 bg-[#49333D]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3 flex flex-col justify-between text-white">
                <div className="flex justify-end">
                  <Instagram className="w-4 h-4 text-[#F3C6D6]" />
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] text-[#F8DDE7] font-semibold line-clamp-2">
                    {item.caption}
                  </p>
                  <span className="text-[9px] text-[#F3C6D6] uppercase tracking-wider block">
                    {item.tag}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Prominent Follow Button */}
        <div className="mt-12 text-center">
          <a
            href={boutiqueConfig.instagram.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-gradient-to-r from-[#B76E79] to-[#9A525D] hover:from-[#9A525D] hover:to-[#B76E79] text-white font-medium text-xs sm:text-sm px-8 py-3.5 rounded-full shadow-lg shadow-[#B76E79]/20 hover:shadow-xl transition-all duration-300 active:scale-95"
          >
            <Instagram className="w-4 h-4" />
            <span>Follow Us on Instagram ({boutiqueConfig.instagram.handle})</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-70" />
          </a>
        </div>

      </div>
    </section>
  );
}
