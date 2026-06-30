/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GALLERY_DATA } from "../data";
import { GalleryItem } from "../types";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { TEXT } from "../data/language";

type CategoryFilter = "all" | "doors" | "windows" | "cupboards" | "interiors" | "repairs";

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filter items matching active Category Filter
  const filteredItems = GALLERY_DATA.filter((item) => {
    if (activeFilter === "all") return true;
    return item.category === activeFilter;
  });

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex]);

  const handleNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0));
  };

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1));
  };

  const currentLightboxItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  const filters: { label: string; value: CategoryFilter }[] = TEXT.galleryFilters;

  return (
    <section id="gallery" className="py-24 md:py-32 bg-bg relative overflow-hidden">
      {/* Glow graphics */}
      <div className="absolute top-1/4 right-1/4 -translate-y-1/2 w-80 h-80 bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Heading Section */}
        <div className="flex flex-col items-center text-center space-y-4 max-w-2xl mx-auto mb-16">
          <span className="text-[10px] md:text-xs uppercase font-sans tracking-[0.4em] text-gold font-semibold">
            {TEXT.gallerySectionTitle}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            {TEXT.gallerySectionTitle}
          </h2>
          <div className="w-16 h-[1px] bg-gold my-2" />
          <p className="font-sans text-secondary-text text-sm md:text-base font-light leading-relaxed">
            {TEXT.gallerySectionDescription}
          </p>
        </div>

        {/* Categories Filtering Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 max-w-3xl mx-auto">
          {filters.map((tab) => {
            const isActive = activeFilter === tab.value;
            return (
              <button
                key={tab.value}
                onClick={() => setActiveFilter(tab.value)}
                className={`text-xs uppercase font-medium tracking-widest px-6 py-3.5 rounded-[2px] border transition-all duration-300 ${
                  isActive
                    ? "text-black bg-gold border-gold font-bold shadow-lg shadow-gold/15"
                    : "text-secondary-text border-white/10 hover:border-gold/30 hover:text-white bg-surface/30"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid with Stagger & Layout Animation */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => {
              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => setLightboxIndex(index)}
                  className="group relative h-80 md:h-96 rounded-[2px] overflow-hidden border border-white/5 hover:border-gold/30 bg-card cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  {/* Gallery Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 select-none"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Elegant hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none" />
                  
                  {/* Subtle golden corner boundary highlight */}
                  <div className="absolute inset-4 border border-gold/0 group-hover:border-gold/15 rounded-[2px] transition-all duration-500 pointer-events-none" />

                  {/* Maximise icon indicator */}
                  <div className="absolute top-6 right-6 p-2 rounded-[2px] bg-black/40 backdrop-blur-sm border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Maximize2 size={13} />
                  </div>

                  {/* Details Overlay text */}
                  <div className="absolute bottom-6 left-6 right-6 text-left space-y-1 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-[9px] font-sans uppercase tracking-widest text-gold font-bold">
                      {TEXT.galleryCategoryNames[item.category] || item.category}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-white tracking-wide">
                      {item.title}
                    </h3>
                    <p className="font-sans text-[11px] text-secondary-text font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-2 leading-relaxed pt-1">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Luxury Fullscreen Lightbox Overlay */}
      <AnimatePresence>
        {lightboxIndex !== null && currentLightboxItem && (
          <div className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4">
            {/* Blurry Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxIndex(null)}
              className="absolute inset-0 bg-black/95 backdrop-blur-md"
            />

            {/* Navigation buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-6 top-1/2 -translate-y-1/2 z-10 p-4 border border-white/10 rounded-[2px] hover:border-gold hover:text-gold text-white bg-black/50 transition-colors hidden md:block"
              aria-label={TEXT.galleryPreviousAriaLabel}
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-6 top-1/2 -translate-y-1/2 z-10 p-4 border border-white/10 rounded-[2px] hover:border-gold hover:text-gold text-white bg-black/50 transition-colors hidden md:block"
              aria-label={TEXT.galleryNextAriaLabel}
            >
              <ChevronRight size={24} />
            </button>

            {/* Lightbox Content Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="relative max-w-4xl w-full flex flex-col items-center z-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setLightboxIndex(null)}
                className="absolute -top-12 right-0 p-2 text-secondary-text hover:text-white flex items-center space-x-1 uppercase text-[10px] tracking-widest bg-white/5 border border-white/10 px-4 py-2 rounded-[2px]"
                aria-label={TEXT.galleryCloseLightboxAriaLabel}
              >
                <X size={14} />
                <span>{TEXT.galleryCloseButtonLabel}</span>
              </button>

              {/* Large Image Showcase Card */}
              <div className="bg-card border border-gold/25 rounded-[2px] overflow-hidden shadow-2xl w-full">
                <div className="relative aspect-video max-h-[60vh] md:max-h-none overflow-hidden bg-black flex items-center justify-center">
                  <img
                    src={currentLightboxItem.image}
                    alt={currentLightboxItem.title}
                    className="max-h-full max-w-full object-contain select-none"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Small mobile swipers */}
                  <div className="absolute inset-x-0 bottom-4 flex justify-between px-6 md:hidden">
                    <button
                      onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                      className="p-3 bg-black/80 text-white rounded-[2px] border border-white/10"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); handleNext(); }}
                      className="p-3 bg-black/80 text-white rounded-[2px] border border-white/10"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>

                {/* Sub-Card Image descriptions */}
                <div className="p-8 text-left bg-surface border-t border-gold/15 space-y-2">
                  <div className="flex items-center space-x-3">
                    <span className="text-[10px] uppercase tracking-widest text-gold font-bold bg-gold/10 px-3 py-1 rounded-[2px] border border-gold/20">
                      {currentLightboxItem.category.toUpperCase()}
                    </span>
                    <span className="text-xs text-secondary-text">
                      Item {lightboxIndex + 1} of {filteredItems.length}
                    </span>
                  </div>
                  <h4 className="font-serif text-xl md:text-2xl font-bold text-white tracking-wide">
                    {currentLightboxItem.title}
                  </h4>
                  <p className="font-sans text-secondary-text text-xs md:text-sm font-light leading-relaxed max-w-3xl">
                    {currentLightboxItem.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
