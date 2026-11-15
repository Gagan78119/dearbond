import { Mail, MapPin, Heart, Clock } from 'lucide-react';
import Instagram from './icons/InstagramIcon';
import logoImg from '../assets/dearbondlogo.jpeg';
import { boutiqueConfig } from '../data/config';

export default function Footer({ onOpenPolicy, onOpenBooking }) {
  return (
    <footer id="contact" className="bg-[#FFF8FA] pt-20 pb-12 border-t border-[#F8DDE7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#F8DDE7]/80">
          
          {/* Column 1: Brand & Logo (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#B76E79]/40 shadow-sm">
                <img
                  src={logoImg}
                  alt="DearBond Hampers Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-serif-display text-xl font-bold text-[#49333D]">
                  DearBond <span className="font-editorial-luxury italic font-normal text-[#B76E79]">Hampers</span>
                </h3>
                <p className="text-xs text-[#927C85] tracking-wider uppercase font-medium">
                  {boutiqueConfig.subTagline}
                </p>
              </div>
            </div>

            <p className="font-sans-clean text-xs sm:text-sm text-[#927C85] max-w-sm leading-relaxed font-light">
              “{boutiqueConfig.tagline}” — We curate luxury gift hampers for life’s most precious celebrations. Handcrafted with romantic pastel styling, wax seals, and heartfelt personalisation.
            </p>

            {/* Social Connection */}
            <div className="pt-2">
              <a
                href={boutiqueConfig.instagram.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#F8DDE7] hover:border-[#B76E79] text-xs font-semibold text-[#49333D] hover:text-[#B76E79] shadow-xs transition-all duration-300"
              >
                <Instagram className="w-4 h-4 text-[#B76E79]" />
                <span>Follow on Instagram ({boutiqueConfig.instagram.handle})</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif-display font-bold text-sm text-[#49333D] tracking-wide uppercase">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs text-[#927C85]">
              <li>
                <a href="#home" className="hover:text-[#B76E79] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#collections" className="hover:text-[#B76E79] transition-colors">
                  Our Collections
                </a>
              </li>
              <li>
                <a href="#featured" className="hover:text-[#B76E79] transition-colors">
                  Featured Hampers
                </a>
              </li>
              <li>
                <a href="#custom-hampers" className="hover:text-[#B76E79] transition-colors">
                  Custom Hamper Studio
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-[#B76E79] transition-colors">
                  Why DearBond
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#B76E79] transition-colors">
                  FAQs & Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Boutique Policy & Trust (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif-display font-bold text-sm text-[#49333D] tracking-wide uppercase">
              Boutique Policies
            </h4>
            <ul className="space-y-2.5 text-xs text-[#927C85]">
              <li>
                <button
                  onClick={() => onOpenPolicy('shipping')}
                  className="hover:text-[#B76E79] transition-colors text-left cursor-pointer"
                >
                  Shipping & Delivery
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenPolicy('cancellation')}
                  className="hover:text-[#B76E79] transition-colors text-left cursor-pointer"
                >
                  Cancellation & Refund
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenPolicy('privacy')}
                  className="hover:text-[#B76E79] transition-colors text-left cursor-pointer"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenPolicy('terms')}
                  className="hover:text-[#B76E79] transition-colors text-left cursor-pointer"
                >
                  Terms & Conditions
                </button>
              </li>
              <li className="pt-2 text-[11px] text-[#B76E79] font-medium flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 shrink-0" />
                <span>30-Day Advance Rule</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Studio Info (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif-display font-bold text-sm text-[#49333D] tracking-wide uppercase">
              Concierge Contact
            </h4>
            <div className="space-y-3 text-xs text-[#927C85]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B76E79] shrink-0 mt-0.5" />
                <span>{boutiqueConfig.contact.location}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#B76E79] shrink-0" />
                <a
                  href={`mailto:${boutiqueConfig.contact.email}`}
                  className="hover:text-[#B76E79] transition-colors"
                >
                  {boutiqueConfig.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Instagram className="w-4 h-4 text-[#B76E79] shrink-0" />
                <a
                  href={boutiqueConfig.instagram.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#B76E79] transition-colors"
                >
                  DM us on {boutiqueConfig.instagram.handle}
                </a>
              </div>
              <div className="flex items-start gap-2.5 text-[11px] pt-1">
                <Clock className="w-4 h-4 text-[#B76E79] shrink-0 mt-0.5" />
                <span>{boutiqueConfig.contact.businessHours}</span>
              </div>
            </div>

            {/* Quick direct DM trigger */}
            <button
              onClick={() => onOpenBooking(null)}
              className="mt-2 w-full py-2.5 px-4 bg-white border border-[#B76E79]/40 hover:bg-[#F8DDE7] text-[#49333D] hover:text-[#B76E79] rounded-xl text-xs font-semibold transition-all cursor-pointer shadow-xs flex items-center justify-center gap-2"
            >
              <Heart className="w-3.5 h-3.5 text-[#B76E79]" />
              <span>Book via Instagram</span>
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#927C85] gap-4">
          <p>© {new Date().getFullYear()} DearBond Hampers. All rights reserved.</p>
          <p className="flex items-center gap-1.5 text-[11px]">
            <span>Handcrafted with</span>
            <Heart className="w-3 h-3 text-[#B76E79] fill-[#F8DDE7]" />
            <span>for heartfelt bonds across India</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
