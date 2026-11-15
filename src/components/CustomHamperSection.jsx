import { useState } from 'react';
import { Sparkles, Heart, Gift, Palette, Check, ArrowRight } from 'lucide-react';

export default function CustomHamperSection({ onOpenCustomBooking }) {
  const [selectedTheme, setSelectedTheme] = useState('Romantic Anniversary');
  const [selectedPackaging, setSelectedPackaging] = useState('Velvet Keepsake Chest');
  const [selectedAddons, setSelectedAddons] = useState(['Artisan Belgian Chocolates', 'Botanical Scented Candle']);

  const themes = [
    'Romantic Anniversary',
    'Milestone Birthday',
    'Bridesmaid Proposal',
    'Couple Celebration',
    'Festive Occasion',
    'Corporate Luxury',
  ];

  const packagingStyles = [
    { name: 'Velvet Keepsake Chest', desc: 'Lined in blush velvet with gold foil' },
    { name: 'Magnetic Rigid Box', desc: 'Modern pastel pink with satin ribbon' },
    { name: 'Monogrammed Leatherette Trunk', desc: 'Heirloom suitcase with brass clasp' },
    { name: 'Artisanal Wooden Keepsake', desc: 'Natural pine with laser engraving' },
  ];

  const goodieOptions = [
    'Artisan Belgian Chocolates',
    'Botanical Scented Candle',
    'Mulberry Silk Eye Mask',
    'Laser Engraved Keepsake / Frame',
    'Gourmet Roasted Brittle & Nuts',
    'Organic Chamomile or Floral Tea',
    'Embroidered Satin Robe / Towels',
    'Fresh/Dried Preserved Florals',
  ];

  const toggleAddon = (item) => {
    if (selectedAddons.includes(item)) {
      setSelectedAddons(selectedAddons.filter((i) => i !== item));
    } else {
      setSelectedAddons([...selectedAddons, item]);
    }
  };

  const handleLaunchCustomBooking = () => {
    const customSummary = {
      name: `Custom Hamper: ${selectedTheme} (${selectedPackaging})`,
      category: 'customized',
      price: 'Price on Request',
      shortDesc: `Custom arrangement featuring ${selectedAddons.join(', ')}.`,
      fullDesc: `Personalized bespoke hamper built with ${selectedTheme} theme, ${selectedPackaging} box, and includes: ${selectedAddons.join(', ')}.`,
      images: [
        'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=1000&q=80',
      ],
      includes: selectedAddons,
      customisable: true,
      personalisationOptions: 'Fully bespoke according to your preferences.',
      prepTimeDays: '30-40 Days Advance Notice',
    };

    onOpenCustomBooking(customSummary);
  };

  return (
    <section id="custom-hampers" className="py-20 sm:py-28 bg-gradient-to-b from-[#FFF8FA] via-[#F8DDE7]/20 to-[#FFF8FA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#B76E79]/30 text-[#B76E79] text-xs font-semibold tracking-wider uppercase shadow-xs">
            <Heart className="w-3.5 h-3.5 fill-[#F8DDE7]" />
            <span>Bespoke Studio</span>
          </div>

          <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#49333D] tracking-tight">
            A Little More Personal,{' '}
            <span className="font-editorial-luxury italic font-normal text-[#B76E79]">
              A Lot More Special.
            </span>
          </h2>

          <p className="font-sans-clean text-[#927C85] text-base sm:text-lg font-light leading-relaxed">
            Have something special in mind? Let us bring your imagination to life with customised hampers made especially for your loved ones. Choose your elements below or design together with us.
          </p>
        </div>

        {/* Custom Hamper Interactive Studio Card */}
        <div className="bg-white rounded-3xl border border-[#F8DDE7] shadow-xl p-6 sm:p-10 max-w-5xl mx-auto">
          <div className="space-y-10">

            {/* STEP 1: CHOOSE THEME */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 font-serif-display font-bold text-base sm:text-lg text-[#49333D]">
                <Sparkles className="w-5 h-5 text-[#B76E79]" />
                <span>1. Choose Your Hamper Theme</span>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {themes.map((theme) => (
                  <button
                    key={theme}
                    onClick={() => setSelectedTheme(theme)}
                    className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                      selectedTheme === theme
                        ? 'bg-[#B76E79] text-white shadow-xs'
                        : 'bg-[#FFF8FA] text-[#49333D] border border-[#F8DDE7] hover:bg-[#F8DDE7]/50'
                    }`}
                  >
                    {theme}
                  </button>
                ))}
              </div>
            </div>

            {/* STEP 2: CHOOSE PACKAGING */}
            <div className="space-y-3 pt-6 border-t border-[#F8DDE7]/60">
              <div className="flex items-center gap-2 font-serif-display font-bold text-base sm:text-lg text-[#49333D]">
                <Palette className="w-5 h-5 text-[#B76E79]" />
                <span>2. Choose Packaging Style & Colours</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {packagingStyles.map((pkg) => (
                  <div
                    key={pkg.name}
                    onClick={() => setSelectedPackaging(pkg.name)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                      selectedPackaging === pkg.name
                        ? 'border-[#B76E79] bg-[#FFF8FA] shadow-xs'
                        : 'border-[#F8DDE7] bg-white hover:border-[#B76E79]/50'
                    }`}
                  >
                    <div>
                      <h4 className="font-serif-display font-bold text-xs sm:text-sm text-[#49333D]">
                        {pkg.name}
                      </h4>
                      <p className="text-[11px] text-[#927C85] mt-1">{pkg.desc}</p>
                    </div>
                    <div className="mt-3 flex justify-end">
                      <span
                        className={`w-4 h-4 rounded-full border flex items-center justify-center text-[10px] ${
                          selectedPackaging === pkg.name
                            ? 'bg-[#B76E79] border-[#B76E79] text-white'
                            : 'border-[#F8DDE7]'
                        }`}
                      >
                        {selectedPackaging === pkg.name && <Check className="w-3 h-3" />}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* STEP 3: SELECT GOODIES & CHOCOLATES */}
            <div className="space-y-3 pt-6 border-t border-[#F8DDE7]/60">
              <div className="flex items-center gap-2 font-serif-display font-bold text-base sm:text-lg text-[#49333D]">
                <Gift className="w-5 h-5 text-[#B76E79]" />
                <span>3. Select Products, Chocolates & Treats</span>
              </div>
              <p className="text-xs text-[#927C85]">
                Tap to include items you’d love inside your custom hamper:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {goodieOptions.map((item) => {
                  const isChecked = selectedAddons.includes(item);
                  return (
                    <button
                      key={item}
                      type="button"
                      onClick={() => toggleAddon(item)}
                      className={`text-left p-3 rounded-xl border transition-all text-xs flex items-center justify-between cursor-pointer ${
                        isChecked
                          ? 'border-[#B76E79] bg-[#F8DDE7]/40 text-[#49333D] font-medium'
                          : 'border-[#F8DDE7] bg-white text-[#927C85] hover:bg-[#FFF8FA]'
                      }`}
                    >
                      <span className="pr-2">{item}</span>
                      <span
                        className={`w-4 h-4 rounded-md border flex items-center justify-center text-[10px] shrink-0 ${
                          isChecked
                            ? 'bg-[#B76E79] border-[#B76E79] text-white'
                            : 'border-[#F8DDE7] bg-white'
                        }`}
                      >
                        {isChecked && <Check className="w-3 h-3" />}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* STEP 4: CALLIGRAPHY & DESIGN REQUEST */}
            <div className="pt-6 border-t border-[#F8DDE7]/60 bg-[#FFF8FA] p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-1 text-center sm:text-left">
                <h4 className="font-serif-display font-bold text-base text-[#49333D]">
                  Ready to Craft Your Custom Creation?
                </h4>
                <p className="text-xs text-[#927C85] font-light">
                  Selected: {selectedTheme} • {selectedPackaging} • {selectedAddons.length} goodies chosen
                </p>
              </div>

              <button
                onClick={handleLaunchCustomBooking}
                className="inline-flex items-center gap-2 bg-[#B76E79] hover:bg-[#9A525D] text-white font-semibold text-xs sm:text-sm px-7 py-3.5 rounded-full shadow-lg shadow-[#B76E79]/20 hover:shadow-xl transition-all cursor-pointer active:scale-95 whitespace-nowrap"
              >
                <span>Create Your Custom Hamper</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
