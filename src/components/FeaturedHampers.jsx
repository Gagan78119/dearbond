import { useState, useMemo, useEffect, useRef } from 'react';
import { Eye, Send, Sparkles, CheckCircle2, Heart, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { productsData } from '../data/products';
import { collectionsData } from '../data/collections';

gsap.registerPlugin(ScrollTrigger);

export default function FeaturedHampers({ selectedCategory = 'all', onSelectCategory, onViewProduct, onBookProduct }) {
  const activeFilter = selectedCategory || 'all';
  const [favorites, setFavorites] = useState({});
  const sectionRef = useRef(null);

  // Filter products based on selected tab
  const filteredProducts = useMemo(() => {
    if (!activeFilter || activeFilter === 'all') {
      return productsData;
    }
    return productsData.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  // GSAP animation when filtered list changes or on scroll
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.product-card-anim',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [filteredProducts]);

  const handleFilterClick = (catId) => {
    onSelectCategory(catId);
  };

  const toggleFavorite = (productId, e) => {
    e.stopPropagation();
    setFavorites((prev) => ({
      ...prev,
      [productId]: !prev[productId],
    }));
  };

  return (
    <section
      ref={sectionRef}
      id="featured"
      className="py-20 sm:py-32 bg-[#FFF8FA] relative border-t border-[#F8DDE7]/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Video-Style Floral Clover Motif */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#B76E79]/30 text-[#B76E79] text-xs font-semibold tracking-wider uppercase shadow-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Artisan Showcase</span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-5xl font-bold text-[#49333D] tracking-tight">
              Featured Gift Hampers
            </h2>
          </div>

          {/* 4-Petal Floral Clover Motif from Video */}
          <div className="hidden sm:flex items-center gap-4 text-[#B76E79]">
            <span className="text-xs uppercase tracking-wider text-[#927C85]">
              {filteredProducts.length} Hampers Available
            </span>
            <svg
              className="w-8 h-8 text-[#B76E79] fill-current animate-pulse"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C10.5 4.5 10.5 7.5 12 10C13.5 7.5 13.5 4.5 12 2ZM22 12C19.5 10.5 16.5 10.5 14 12C16.5 13.5 19.5 13.5 22 12ZM12 22C13.5 19.5 13.5 16.5 12 14C10.5 16.5 10.5 19.5 12 22ZM2 12C4.5 13.5 7.5 13.5 10 12C7.5 10.5 4.5 10.5 2 12Z" />
            </svg>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-12 gap-2 sm:gap-2.5 scrollbar-none px-2">
          <button
            onClick={() => handleFilterClick('all')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap cursor-pointer ${
              activeFilter === 'all'
                ? 'bg-[#B76E79] text-white shadow-md shadow-[#B76E79]/20'
                : 'bg-white text-[#49333D] hover:bg-[#F8DDE7]/50 border border-[#F8DDE7]'
            }`}
          >
            All Hampers ({productsData.length})
          </button>

          {collectionsData.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleFilterClick(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap cursor-pointer ${
                activeFilter === cat.id
                  ? 'bg-[#B76E79] text-white shadow-md shadow-[#B76E79]/20'
                  : 'bg-white text-[#49333D] hover:bg-[#F8DDE7]/50 border border-[#F8DDE7]'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => {
            const isFav = !!favorites[product.id];

            return (
              <div
                key={product.id}
                className="product-card-anim group bg-white rounded-3xl overflow-hidden border border-[#F8DDE7] shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between"
              >
                {/* Product Image Area */}
                <div className="relative aspect-[4/3] sm:aspect-square overflow-hidden bg-[#FFF8FA] p-3">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />

                    {/* Badge top-left */}
                    {product.badge && (
                      <div className="absolute top-3 left-3 bg-[#49333D]/90 backdrop-blur-xs text-white text-[10px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                        {product.badge}
                      </div>
                    )}

                    {/* Heart Favorite Toggle (Direct Reference Video Feature 00:17) */}
                    <button
                      type="button"
                      onClick={(e) => toggleFavorite(product.id, e)}
                      className={`absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 shadow-md cursor-pointer ${
                        isFav
                          ? 'bg-[#B76E79] text-white scale-110'
                          : 'bg-white/90 text-[#49333D] hover:bg-white hover:text-[#B76E79]'
                      }`}
                      aria-label="Save to favorites"
                    >
                      <Heart className={`w-4 h-4 ${isFav ? 'fill-white' : ''}`} />
                    </button>

                    {/* Price Tag bottom-left */}
                    <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-xs text-[#B76E79] border border-[#F8DDE7] text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                      {product.price}
                    </div>
                  </div>
                </div>

                {/* Product Content */}
                <div className="p-6 pt-3 flex flex-col flex-grow justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase tracking-wider text-[#927C85] font-semibold">
                        {product.category}
                      </span>
                      {product.customisable && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-medium text-[#B76E79] bg-[#F8DDE7]/50 px-2 py-0.5 rounded-full">
                          <CheckCircle2 className="w-3 h-3" />
                          Customisable
                        </span>
                      )}
                    </div>

                    <h3 className="font-serif-display text-lg sm:text-xl font-bold text-[#49333D] group-hover:text-[#B76E79] transition-colors line-clamp-1">
                      {product.name}
                    </h3>

                    <p className="text-xs text-[#927C85] leading-relaxed line-clamp-2 font-light">
                      {product.shortDesc}
                    </p>
                  </div>

                  {/* Buttons Action Group with Circular Arrow Icon */}
                  <div className="pt-3 border-t border-[#F8DDE7]/60 flex items-center gap-2">
                    <button
                      onClick={() => onViewProduct(product)}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 border border-[#F3C6D6] hover:border-[#B76E79] bg-[#FFF8FA] hover:bg-white text-[#49333D] text-xs font-semibold py-2.5 px-3 rounded-full transition-colors cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5 text-[#B76E79]" />
                      <span>Details</span>
                    </button>

                    <button
                      onClick={() => onBookProduct(product)}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 bg-[#49333D] hover:bg-[#B76E79] text-white text-xs font-semibold py-2.5 px-3 rounded-full shadow-xs hover:shadow-md transition-all cursor-pointer active:scale-95 group/btn"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Enquire</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </button>
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
