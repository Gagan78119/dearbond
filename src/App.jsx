import { useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TaglineReveal from './components/TaglineReveal';
import Collections from './components/Collections';
import SpotlightStory from './components/SpotlightStory';
import FeaturedHampers from './components/FeaturedHampers';
import CustomHamperSection from './components/CustomHamperSection';
import WhyDearBond from './components/WhyDearBond';
import InstagramGallery from './components/InstagramGallery';
import FAQSection from './components/FAQSection';
import CommunityBanner from './components/CommunityBanner';
import Footer from './components/Footer';
import FloatingInstagram from './components/FloatingInstagram';
import ProductDetailModal from './components/ProductDetailModal';
import PolicyModal from './components/PolicyModal';
import { productsData } from './data/products';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalView, setModalView] = useState('details'); // 'details' | 'book'
  const [selectedCategory, setSelectedCategory] = useState('all');

  const [policyKey, setPolicyKey] = useState(null);
  const [isPolicyOpen, setIsPolicyOpen] = useState(false);

  // Initialize Lenis Smooth Scroll and connect to GSAP ScrollTrigger
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const updateTicker = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  // Trigger Booking Modal
  const handleOpenBooking = (product = null) => {
    setSelectedProduct(product || productsData[0]);
    setModalView('book');
    setIsModalOpen(true);
  };

  // Trigger Product Details View
  const handleViewProduct = (product) => {
    setSelectedProduct(product);
    setModalView('details');
    setIsModalOpen(true);
  };

  // Trigger Custom Hamper Booking
  const handleOpenCustomBooking = (customHamperObj) => {
    setSelectedProduct(customHamperObj);
    setModalView('book');
    setIsModalOpen(true);
  };

  // Policy Modal
  const handleOpenPolicy = (key) => {
    setPolicyKey(key);
    setIsPolicyOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF8FA] text-[#49333D] selection:bg-[#F3C6D6] selection:text-[#49333D]">
      {/* 0. Video-Inspired Preloader Reveal */}
      {!isLoaded && <Preloader onComplete={() => setIsLoaded(true)} />}

      {/* 1. Header & Navigation */}
      <Navbar onOpenBooking={() => handleOpenBooking(null)} />

      <main className="flex-grow">
        {/* 2. Hero Section (Video-Inspired Collage & GSAP Stagger) */}
        <Hero onOpenBooking={() => handleOpenBooking(null)} isLoaded={isLoaded} />

        {/* 3. Tagline Reveal Editorial Moment */}
        <TaglineReveal />

        {/* 4. Collections Stepped Cards (Video Reference 00:07-00:10) */}
        <Collections onSelectCategory={(catId) => setSelectedCategory(catId)} />

        {/* 5. Spotlight Split Story with Social Proof Avatars (Video Reference 00:11-00:15) */}
        <SpotlightStory onOpenBooking={() => handleOpenBooking(null)} />

        {/* 6. Featured Hampers Gallery with Favorites & Scroll Stagger (Video Reference 00:16-00:18) */}
        <FeaturedHampers
          selectedCategory={selectedCategory}
          onSelectCategory={(catId) => setSelectedCategory(catId)}
          onViewProduct={handleViewProduct}
          onBookProduct={handleOpenBooking}
        />

        {/* 7. Custom Hampers Studio */}
        <CustomHamperSection onOpenCustomBooking={handleOpenCustomBooking} />

        {/* 8. Why DearBond Hampers */}
        <WhyDearBond />

        {/* 9. Instagram World Showcase */}
        <InstagramGallery />

        {/* 10. Frequently Asked Questions */}
        <FAQSection onOpenBooking={() => handleOpenBooking(null)} />

        {/* 11. High-Contrast Community Box with Spinning Badge (Video Reference 00:19-00:21) */}
        <CommunityBanner onOpenBooking={() => handleOpenBooking(null)} />
      </main>

      {/* 12. Contact & Footer */}
      <Footer
        onOpenPolicy={handleOpenPolicy}
        onOpenBooking={() => handleOpenBooking(null)}
      />

      {/* Floating Instagram Action Button */}
      <FloatingInstagram onOpenBooking={() => handleOpenBooking(null)} />

      {/* Interactive Product & Booking Modal */}
      <ProductDetailModal
        key={`${selectedProduct?.id || 'none'}-${modalView}-${isModalOpen ? 'open' : 'closed'}`}
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialView={modalView}
      />

      {/* Legal & Boutique Policies Modal */}
      <PolicyModal
        policyKey={policyKey}
        isOpen={isPolicyOpen}
        onClose={() => setIsPolicyOpen(false)}
      />
    </div>
  );
}
