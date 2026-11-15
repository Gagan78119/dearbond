import { useState, useEffect } from 'react';
import { Menu, X, Send } from 'lucide-react';
import Instagram from './icons/InstagramIcon';
import logoImg from '../assets/dearbondlogo.jpeg';
import { boutiqueConfig } from '../data/config';

export default function Navbar({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Collections', href: '#collections' },
    { name: 'Hampers', href: '#featured' },
    { name: 'Custom Studio', href: '#custom-hampers' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-[#F8DDE7]/80 h-18 sm:h-20'
            : 'bg-[#FFF8FA]/90 backdrop-blur-md border-b border-[#F8DDE7]/50 h-20 sm:h-22'
        }`}
      >
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8">
          <div className="h-full flex items-center justify-between gap-4">
            
            {/* Logo & Brand Name (Left) */}
            <a
              href="#home"
              className="flex items-center gap-3 shrink-0 group focus:outline-none"
            >
              <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-[#B76E79]/30 shadow-xs transition-transform duration-300 group-hover:scale-105 shrink-0 bg-white">
                <img
                  src={logoImg}
                  alt="DearBond Hampers Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif-display text-lg sm:text-xl font-bold tracking-tight text-[#49333D] group-hover:text-[#B76E79] transition-colors leading-tight whitespace-nowrap">
                  DearBond
                  <span className="font-editorial-luxury italic font-normal ml-1.5 text-[#B76E79]">
                    Hampers
                  </span>
                </span>
                <span className="text-[10px] text-[#927C85] tracking-wider uppercase font-medium leading-normal whitespace-nowrap">
                  {boutiqueConfig.subTagline}
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links (Center) - Guaranteed Single Line */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8 mx-auto">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs xl:text-sm font-medium text-[#49333D] hover:text-[#B76E79] transition-colors whitespace-nowrap relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#B76E79] hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right Action Controls (Right) */}
            <div className="hidden sm:flex items-center gap-3 shrink-0">
              {/* Instagram Profile Quick Trigger */}
              <a
                href={boutiqueConfig.instagram.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white hover:bg-[#F8DDE7]/50 border border-[#F8DDE7] text-[#B76E79] hover:text-[#9A525D] flex items-center justify-center transition-all duration-300 shadow-xs shrink-0"
                title={`Follow ${boutiqueConfig.instagram.handle} on Instagram`}
                aria-label="Instagram profile"
              >
                <Instagram className="w-4 h-4" />
              </a>

              {/* Primary CTA: Enquire on Instagram - Strictly Single Line */}
              <button
                type="button"
                onClick={() => onOpenBooking(null)}
                className="inline-flex items-center justify-center gap-2 bg-[#B76E79] hover:bg-[#9A525D] text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-full shadow-md shadow-[#B76E79]/20 hover:shadow-lg hover:shadow-[#B76E79]/30 transition-all duration-300 active:scale-95 cursor-pointer whitespace-nowrap shrink-0"
              >
                <Send className="w-3.5 h-3.5 shrink-0" />
                <span>Enquire on Instagram</span>
              </button>
            </div>

            {/* Mobile Menu Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl text-[#49333D] hover:bg-[#F8DDE7]/60 transition-colors focus:outline-none shrink-0"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Panel */}
          <div className="fixed top-0 right-0 bottom-0 w-5/6 max-w-sm bg-[#FFF8FA] shadow-2xl p-6 flex flex-col justify-between z-10 border-l border-[#F8DDE7]">
            <div>
              {/* Header inside drawer */}
              <div className="flex items-center justify-between pb-6 border-b border-[#F8DDE7]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-[#B76E79]/30">
                    <img
                      src={logoImg}
                      alt="DearBond Logo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-serif-display font-bold text-sm text-[#49333D]">
                      DearBond Hampers
                    </h3>
                    <p className="text-[10px] text-[#927C85]">{boutiqueConfig.subTagline}</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-full hover:bg-[#F8DDE7] text-[#49333D]"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation links */}
              <nav className="mt-6 flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base font-medium text-[#49333D] hover:text-[#B76E79] transition-colors py-2 flex items-center justify-between border-b border-[#F8DDE7]/30"
                  >
                    <span>{link.name}</span>
                    <span className="text-[#B76E79]">›</span>
                  </a>
                ))}
              </nav>
            </div>

            {/* Bottom Actions inside drawer */}
            <div className="pt-6 border-t border-[#F8DDE7] space-y-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking(null);
                }}
                className="w-full flex items-center justify-center gap-2 bg-[#B76E79] hover:bg-[#9A525D] text-white font-medium py-3 rounded-full shadow-md text-sm cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Enquire via Instagram</span>
              </button>

              <a
                href={boutiqueConfig.instagram.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 border border-[#B76E79]/40 text-[#49333D] hover:bg-[#F8DDE7]/30 font-medium py-2.5 rounded-full text-xs transition-colors"
              >
                <Instagram className="w-4 h-4 text-[#B76E79]" />
                <span>Follow {boutiqueConfig.instagram.handle}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
