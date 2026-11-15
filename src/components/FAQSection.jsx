import { useState } from 'react';
import { ChevronDown, HelpCircle, Send } from 'lucide-react';
import { faqsData } from '../data/faqs';

export default function FAQSection({ onOpenBooking }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#FFF8FA] relative border-t border-[#F8DDE7]/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#B76E79]/30 text-[#B76E79] text-xs font-semibold tracking-wider uppercase shadow-xs">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>

          <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#49333D] tracking-tight">
            Frequently Asked Questions
          </h2>

          <p className="font-sans-clean text-[#927C85] text-base sm:text-lg font-light leading-relaxed">
            Everything you need to know about our 30-day advance booking policy, customisations, and shipping.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqsData.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#F8DDE7] overflow-hidden shadow-xs transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FFF8FA] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif-display font-bold text-base sm:text-lg text-[#49333D]">
                    {faq.question}
                  </span>
                  <span
                    className={`w-7 h-7 rounded-full bg-[#F8DDE7] text-[#B76E79] flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#B76E79] text-white' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-xs sm:text-sm text-[#927C85] leading-relaxed border-t border-[#F8DDE7]/40 pt-4 font-light">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help Callout */}
        <div className="mt-12 bg-white rounded-2xl p-6 border border-[#F8DDE7] text-center sm:flex items-center justify-between gap-6 shadow-xs">
          <div className="text-left space-y-1 mb-4 sm:mb-0">
            <h4 className="font-serif-display font-bold text-base text-[#49333D]">
              Have a question not listed here?
            </h4>
            <p className="text-xs text-[#927C85]">
              Our concierge is ready to assist you one-on-one on Instagram.
            </p>
          </div>

          <button
            onClick={() => onOpenBooking(null)}
            className="inline-flex items-center gap-2 bg-[#B76E79] hover:bg-[#9A525D] text-white text-xs font-semibold px-5 py-2.5 rounded-full transition-colors cursor-pointer"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Ask Us on Instagram</span>
          </button>
        </div>

      </div>
    </section>
  );
}
