import { X, Shield } from 'lucide-react';
import { policiesData } from '../data/policies';

export default function PolicyModal({ policyKey, isOpen, onClose }) {
  if (!isOpen || !policyKey) return null;

  const policy = policiesData[policyKey] || policiesData.shipping;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="flex min-h-full items-center justify-center p-4 sm:p-6">
        <div
          className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-[#F8DDE7] overflow-hidden p-6 sm:p-8"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-[#F8DDE7] text-[#49333D] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="flex items-center gap-3 pb-4 border-b border-[#F8DDE7]">
            <div className="w-10 h-10 rounded-full bg-[#F8DDE7] text-[#B76E79] flex items-center justify-center">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif-display text-xl font-bold text-[#49333D]">
                {policy.title}
              </h3>
              <p className="text-[11px] text-[#927C85]">DearBond Hampers Official Terms</p>
            </div>
          </div>

          {/* Policy Sections */}
          <div className="mt-6 space-y-6 max-h-[60vh] overflow-y-auto pr-2">
            {policy.sections.map((section, idx) => (
              <div key={idx} className="space-y-1.5">
                <h4 className="font-serif-display font-bold text-sm text-[#49333D]">
                  {section.heading}
                </h4>
                <p className="text-xs text-[#927C85] leading-relaxed font-light">
                  {section.text}
                </p>
              </div>
            ))}
          </div>

          {/* Footer Close */}
          <div className="mt-8 pt-4 border-t border-[#F8DDE7] flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2.5 bg-[#B76E79] hover:bg-[#9A525D] text-white text-xs font-semibold rounded-full transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
