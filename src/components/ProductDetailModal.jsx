import { useState } from 'react';
import {
  X,
  Check,
  AlertCircle,
  Copy,
  ExternalLink,
  Sparkles,
  Package,
  Clock,
  ShieldCheck,
  Send,
  ChevronRight
} from 'lucide-react';
import { boutiqueConfig } from '../data/config';
import { productsData } from '../data/products';

export default function ProductDetailModal({ product, isOpen, onClose, initialView = 'details' }) {
  const [activeTab, setActiveTab] = useState(initialView); // 'details' | 'book' | 'success'
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Booking Form State
  const [formData, setFormData] = useState({
    customerName: '',
    customerContact: '', // Instagram handle or mobile
    selectedHamper: product?.name || '',
    quantity: 1,
    customisation: '',
    cardMessage: '',
    deliveryDate: '',
    deliveryAddress: '',
    additionalNotes: '',
  });

  const [dateWarning, setDateWarning] = useState(false);
  const [copied, setCopied] = useState(false);
  const [generatedMessage, setGeneratedMessage] = useState('');

  if (!isOpen) return null;

  // Calculate 30-day date boundary
  const today = new Date();
  const minDateObj = new Date();
  minDateObj.setDate(today.getDate() + boutiqueConfig.bookingPolicy.minAdvanceDays);
  const minDateString = minDateObj.toISOString().split('T')[0];

  const handleDateChange = (e) => {
    const selected = e.target.value;
    setFormData({ ...formData, deliveryDate: selected });

    if (selected) {
      const chosen = new Date(selected);
      const diffTime = chosen - today;
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setDateWarning(diffDays < boutiqueConfig.bookingPolicy.minAdvanceDays);
    } else {
      setDateWarning(false);
    }
  };

  const generateInstagramText = () => {
    const isEmergency = dateWarning;
    return `Hello DearBond Hampers! 🎀

I would like to enquire about booking a handcrafted gift hamper.

🎁 Product: ${formData.selectedHamper || (product ? product.name : 'Bespoke Custom Hamper')}
💰 Price: ${product ? product.price : 'Custom Curation'}
📦 Quantity: ${formData.quantity}
✨ Customisation Details: ${formData.customisation || 'Standard boutique arrangement'}
💌 Personalised Card Message: ${formData.cardMessage || 'Please include blank wax-sealed card'}
📅 Preferred Delivery Date: ${formData.deliveryDate || 'Not specified'} ${isEmergency ? '(Note: Emergency/Short notice request)' : ''}
📍 Delivery Location / Address: ${formData.deliveryAddress || 'To be shared'}

👤 Customer Name: ${formData.customerName || 'Dear Customer'}
📱 Instagram Handle / Contact: ${formData.customerContact || 'N/A'}
📝 Additional Notes: ${formData.additionalNotes || 'None'}

Please confirm product availability, delivery slot verification, and advance payment details.

Thank you!`;
  };

  const handleSubmitEnquiry = (e) => {
    e.preventDefault();
    const msg = generateInstagramText();
    setGeneratedMessage(msg);

    // Copy to clipboard
    navigator.clipboard.writeText(msg).then(() => {
      setCopied(true);
    }).catch(() => {
      // Fallback
      setCopied(false);
    });

    setActiveTab('success');
  };

  const handleOpenInstagramDirect = () => {
    // Open Instagram DM or profile URL
    window.open(boutiqueConfig.instagram.directMessageUrl, '_blank', 'noopener,noreferrer');
  };

  const handleCopyAgain = () => {
    navigator.clipboard.writeText(generatedMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // Safe fallback if opened without product
  const activeProduct = product || productsData[0];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="flex min-h-full items-center justify-center p-3 sm:p-6">
        <div
          className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-[#F8DDE7] overflow-hidden my-8 transform transition-all"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-white/90 hover:bg-[#F8DDE7] text-[#49333D] transition-colors shadow-xs cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header Tabs */}
          <div className="flex items-center border-b border-[#F8DDE7] bg-[#FFF8FA] px-6 pt-5 pb-3 gap-6">
            <button
              onClick={() => setActiveTab('details')}
              className={`font-serif-display text-sm sm:text-base font-bold pb-2 border-b-2 transition-all cursor-pointer ${
                activeTab === 'details'
                  ? 'border-[#B76E79] text-[#B76E79]'
                  : 'border-transparent text-[#927C85] hover:text-[#49333D]'
              }`}
            >
              Hamper Overview
            </button>
            <button
              onClick={() => setActiveTab('book')}
              className={`font-serif-display text-sm sm:text-base font-bold pb-2 border-b-2 transition-all cursor-pointer ${
                activeTab === 'book' || activeTab === 'success'
                  ? 'border-[#B76E79] text-[#B76E79]'
                  : 'border-transparent text-[#927C85] hover:text-[#49333D]'
              }`}
            >
              Book & Enquire
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
            {/* VIEW 1: DETAILS */}
            {activeTab === 'details' && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                {/* Images Column */}
                <div className="md:col-span-6 space-y-3">
                  <div className="relative aspect-[4/3] sm:aspect-square rounded-2xl overflow-hidden bg-[#FFF8FA] border border-[#F8DDE7]">
                    <img
                      src={activeProduct.images[activeImageIndex] || activeProduct.images[0]}
                      alt={activeProduct.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-white/90 px-3 py-1 rounded-full text-xs font-bold text-[#B76E79] shadow-xs">
                      {activeProduct.price}
                    </div>
                  </div>

                  {/* Thumbnail Row */}
                  {activeProduct.images.length > 1 && (
                    <div className="flex items-center gap-2 overflow-x-auto pb-1">
                      {activeProduct.images.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() => setActiveImageIndex(idx)}
                          className={`w-16 h-16 rounded-xl overflow-hidden border-2 transition-all shrink-0 cursor-pointer ${
                            activeImageIndex === idx
                              ? 'border-[#B76E79] scale-105 shadow-xs'
                              : 'border-transparent opacity-70 hover:opacity-100'
                          }`}
                        >
                          <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                  )}

                  {/* 30-Day Policy Alert Box */}
                  <div className="p-4 rounded-2xl bg-[#FFF8FA] border border-[#F8DDE7] text-xs text-[#927C85] space-y-1.5">
                    <div className="flex items-center gap-2 font-semibold text-[#49333D]">
                      <Clock className="w-4 h-4 text-[#B76E79]" />
                      <span>Estimated Preparation Time</span>
                    </div>
                    <p>{activeProduct.prepTimeDays}</p>
                    <p className="text-[11px] text-[#B76E79]">
                      Minimum 30 days advance booking required. Advance payment mandatory to confirm.
                    </p>
                  </div>
                </div>

                {/* Details Content Column */}
                <div className="md:col-span-6 space-y-5">
                  <div>
                    <span className="text-xs uppercase tracking-wider font-semibold text-[#B76E79]">
                      {activeProduct.category}
                    </span>
                    <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#49333D] mt-1">
                      {activeProduct.name}
                    </h2>
                    <p className="text-xl font-bold text-[#B76E79] mt-2 font-serif-display">
                      {activeProduct.price}
                    </p>
                  </div>

                  <p className="text-sm text-[#927C85] leading-relaxed font-light">
                    {activeProduct.fullDesc}
                  </p>

                  {/* What's Included */}
                  <div className="space-y-2.5 pt-2 border-t border-[#F8DDE7]/60">
                    <h4 className="font-serif-display font-bold text-sm text-[#49333D] flex items-center gap-2">
                      <Package className="w-4 h-4 text-[#B76E79]" />
                      <span>What's Included in This Hamper</span>
                    </h4>
                    <ul className="space-y-1.5 text-xs text-[#49333D]">
                      {activeProduct.includes.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-[#B76E79] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Customisation Options */}
                  <div className="space-y-1.5 pt-2 border-t border-[#F8DDE7]/60">
                    <h4 className="font-serif-display font-bold text-sm text-[#49333D] flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#B76E79]" />
                      <span>Customisation & Personalisation</span>
                    </h4>
                    <p className="text-xs text-[#927C85] leading-relaxed">
                      {activeProduct.personalisationOptions}
                    </p>
                  </div>

                  {/* Book Button */}
                  <div className="pt-4">
                    <button
                      onClick={() => setActiveTab('book')}
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#B76E79] hover:bg-[#9A525D] text-white font-semibold text-sm py-3.5 px-6 rounded-full shadow-lg shadow-[#B76E79]/20 hover:shadow-xl transition-all cursor-pointer active:scale-98"
                    >
                      <span>Book This Hamper</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* VIEW 2: BOOKING FORM */}
            {activeTab === 'book' && (
              <form onSubmit={handleSubmitEnquiry} className="space-y-6">
                <div>
                  <h3 className="font-serif-display text-2xl font-bold text-[#49333D]">
                    Enquire for {formData.selectedHamper || activeProduct.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#927C85] mt-1 font-light">
                    Complete your preferred gift preferences. Your details will be formatted for instant Instagram Direct Message dispatch.
                  </p>
                </div>

                {/* 3-Stage Booking Notice */}
                <div className="bg-[#FFF8FA] p-4 rounded-2xl border border-[#F8DDE7] text-xs space-y-2">
                  <div className="flex items-center gap-2 font-semibold text-[#49333D]">
                    <ShieldCheck className="w-4 h-4 text-[#B76E79]" />
                    <span>How Booking Works (Transparent 3-Stage Process)</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1 text-[11px] text-[#927C85]">
                    <div className="p-2 bg-white rounded-lg border border-[#F8DDE7]">
                      <strong className="text-[#49333D] block">1. Enquiry Sent</strong>
                      Share details on Instagram
                    </div>
                    <div className="p-2 bg-white rounded-lg border border-[#F8DDE7]">
                      <strong className="text-[#49333D] block">2. Slot Verification</strong>
                      We check studio availability
                    </div>
                    <div className="p-2 bg-white rounded-lg border border-[#F8DDE7]">
                      <strong className="text-[#49333D] block">3. Advance Payment</strong>
                      Order confirmed on payment
                    </div>
                  </div>
                </div>

                {/* Input Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="font-semibold text-[#49333D]">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ananya Sharma"
                      value={formData.customerName}
                      onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#F8DDE7] bg-white focus:outline-none focus:border-[#B76E79] text-xs text-[#49333D]"
                    />
                  </div>

                  {/* Instagram handle or phone */}
                  <div className="space-y-1.5">
                    <label className="font-semibold text-[#49333D]">Instagram Handle or Phone *</label>
                    <input
                      type="text"
                      required
                      placeholder="@ananya_s or +91 98765 43210"
                      value={formData.customerContact}
                      onChange={(e) => setFormData({ ...formData, customerContact: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#F8DDE7] bg-white focus:outline-none focus:border-[#B76E79] text-xs text-[#49333D]"
                    />
                  </div>

                  {/* Quantity */}
                  <div className="space-y-1.5">
                    <label className="font-semibold text-[#49333D]">Quantity</label>
                    <input
                      type="number"
                      min="1"
                      max="100"
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: parseInt(e.target.value) || 1 })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#F8DDE7] bg-white focus:outline-none focus:border-[#B76E79] text-xs text-[#49333D]"
                    />
                  </div>

                  {/* Exact Delivery Date */}
                  <div className="space-y-1.5">
                    <label className="font-semibold text-[#49333D] flex items-center justify-between">
                      <span>Exact Preferred Delivery Date *</span>
                      <span className="text-[10px] text-[#B76E79] font-normal">Min. 30 Days Ahead</span>
                    </label>
                    <input
                      type="date"
                      required
                      min={minDateString}
                      value={formData.deliveryDate}
                      onChange={handleDateChange}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#F8DDE7] bg-white focus:outline-none focus:border-[#B76E79] text-xs text-[#49333D]"
                    />
                  </div>
                </div>

                {/* 30-Day Advance Warning Alert */}
                {dateWarning && (
                  <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-xl text-amber-800 text-xs flex items-start gap-2.5">
                    <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block font-semibold">Advance Notice Notice</strong>
                      Standard hampers require 30 days advance booking. Your requested date is less than 30 days away. You may still send your enquiry, and our team will check if an emergency rush slot is open!
                    </div>
                  </div>
                )}

                {/* Customisation Requirements */}
                <div className="space-y-1.5 text-xs">
                  <label className="font-semibold text-[#49333D]">
                    Customisation Requirements (Colours, initials, ribbon shade)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Initial 'A & R' on wooden chest, blush pink ribbon"
                    value={formData.customisation}
                    onChange={(e) => setFormData({ ...formData, customisation: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#F8DDE7] bg-white focus:outline-none focus:border-[#B76E79] text-xs text-[#49333D]"
                  />
                </div>

                {/* Personalised Card Note */}
                <div className="space-y-1.5 text-xs">
                  <label className="font-semibold text-[#49333D]">
                    Personalised Card Message / Wax-Sealed Note
                  </label>
                  <textarea
                    rows="2"
                    placeholder="Write the heartfelt message you would like calligraphed inside the wax-sealed card..."
                    value={formData.cardMessage}
                    onChange={(e) => setFormData({ ...formData, cardMessage: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#F8DDE7] bg-white focus:outline-none focus:border-[#B76E79] text-xs text-[#49333D]"
                  />
                </div>

                {/* Delivery Address */}
                <div className="space-y-1.5 text-xs">
                  <label className="font-semibold text-[#49333D]">Delivery Address & City *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Bandra West, Mumbai, Maharashtra - 400050"
                    value={formData.deliveryAddress}
                    onChange={(e) => setFormData({ ...formData, deliveryAddress: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#F8DDE7] bg-white focus:outline-none focus:border-[#B76E79] text-xs text-[#49333D]"
                  />
                </div>

                {/* Additional Instructions */}
                <div className="space-y-1.5 text-xs">
                  <label className="font-semibold text-[#49333D]">Additional Instructions (Optional)</label>
                  <input
                    type="text"
                    placeholder="e.g. Please do not include receipt with gift, surprise delivery"
                    value={formData.additionalNotes}
                    onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#F8DDE7] bg-white focus:outline-none focus:border-[#B76E79] text-xs text-[#49333D]"
                  />
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setActiveTab('details')}
                    className="w-full sm:w-auto px-6 py-3 border border-[#F8DDE7] rounded-full text-xs font-semibold text-[#49333D] hover:bg-[#FFF8FA] cursor-pointer"
                  >
                    Back to Details
                  </button>

                  <button
                    type="submit"
                    className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 bg-[#B76E79] hover:bg-[#9A525D] text-white font-semibold text-xs sm:text-sm py-3.5 px-6 rounded-full shadow-lg shadow-[#B76E79]/20 hover:shadow-xl transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Generate & Send Enquiry to Instagram</span>
                  </button>
                </div>
              </form>
            )}

            {/* VIEW 3: SUCCESS / DISPATCH TO INSTAGRAM */}
            {activeTab === 'success' && (
              <div className="text-center py-6 sm:py-8 space-y-6 max-w-xl mx-auto">
                <div className="w-16 h-16 rounded-full bg-[#F8DDE7] text-[#B76E79] flex items-center justify-center mx-auto shadow-sm">
                  <Sparkles className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#49333D]">
                    Enquiry Formatted & Copied!
                  </h3>
                  <p className="text-xs sm:text-sm text-[#927C85] font-light">
                    Your complete booking details have been copied to your clipboard. Simply open Instagram Direct Message and paste your enquiry directly to DearBond Hampers.
                  </p>
                </div>

                {/* Preview Box */}
                <div className="text-left bg-[#FFF8FA] p-4 rounded-2xl border border-[#F8DDE7] text-xs text-[#49333D] font-mono whitespace-pre-wrap max-h-48 overflow-y-auto">
                  {generatedMessage}
                </div>

                {/* Buttons */}
                <div className="space-y-3 pt-2">
                  <button
                    onClick={handleOpenInstagramDirect}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#B76E79] hover:bg-[#9A525D] text-white font-semibold text-sm py-3.5 px-6 rounded-full shadow-lg shadow-[#B76E79]/30 hover:shadow-xl transition-all cursor-pointer"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Open Instagram Direct Message (@dearbondhampers)</span>
                  </button>

                  <button
                    onClick={handleCopyAgain}
                    className="w-full inline-flex items-center justify-center gap-2 border border-[#B76E79]/40 bg-white hover:bg-[#FFF8FA] text-[#49333D] font-semibold text-xs py-3 px-6 rounded-full transition-colors cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-600" />
                        <span className="text-emerald-700">Message Copied to Clipboard!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-[#B76E79]" />
                        <span>Copy Message Again</span>
                      </>
                    )}
                  </button>
                </div>

                <p className="text-[11px] text-[#927C85] pt-2">
                  Please remember: submitting this enquiry does not confirm the order. Our team will verify date availability and advance payment on Instagram.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
