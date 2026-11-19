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

  const filteredItems = GALLERY_DATA.filter((item) =>
    activeFilter === "all" ? true : item.category === activeFilter
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, filteredItems]);

  const handleNext = () =>
    setLightboxIndex((prev) =>
      prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0
    );
  const handlePrev = () =>
    setLightboxIndex((prev) =>
      prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1
    );

  const currentItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;
  const filters: { label: string; value: CategoryFilter }[] = TEXT.galleryFilters as { label: string; value: CategoryFilter }[];

  return (
    <section
      id="gallery"
      className="py-24 md:py-32 relative overflow-hidden"
      style={{ background: "var(--color-surface)" }}
    >
      {/* Glow */}
      <div
        className="absolute top-1/4 right-1/4 w-80 h-80 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(197,151,58,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Heading */}
        <div className="flex flex-col items-center text-center space-y-4 max-w-2xl mx-auto mb-16">
          <span
            className="text-[10px] md:text-xs uppercase font-sans tracking-[0.4em] font-semibold"
            style={{ color: "var(--color-gold)" }}
          >
            Portfolio
          </span>
          <h2
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight"
            style={{ color: "var(--color-ivory)" }}
          >
            {TEXT.gallerySectionTitle}
          </h2>
          <div
            className="w-12 h-[1px]"
            style={{
              background: "linear-gradient(90deg, transparent, var(--color-gold), transparent)",
            }}
          />
          <p
            className="font-sans text-sm md:text-base font-light leading-relaxed"
            style={{ color: "var(--color-secondary-text)" }}
          >
            {TEXT.gallerySectionDescription}
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 max-w-3xl mx-auto">
          {filters.map((tab) => {
            const isActive = activeFilter === tab.value;
            return (
              <button
                key={tab.value}
                onClick={() => setActiveFilter(tab.value)}
                className="text-xs uppercase font-medium tracking-widest px-5 py-3 rounded-sm border transition-all duration-300 font-sans"
                style={
                  isActive
                    ? {
                        color: "var(--color-bg)",
                        background: "var(--color-gold)",
                        borderColor: "var(--color-gold)",
                        boxShadow: "0 4px 14px rgba(197,151,58,0.2)",
                      }
                    : {
                        color: "var(--color-secondary-text)",
                        borderColor: "rgba(255,255,255,0.08)",
                        background: "rgba(31,24,17,0.3)",
                      }
                }
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Gallery grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setLightboxIndex(index)}
                className="group relative h-72 md:h-80 rounded-sm overflow-hidden cursor-pointer border"
                style={{
                  borderColor: "rgba(197,151,58,0.08)",
                  background: "var(--color-card)",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 select-none group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Hover overlay */}
                <div
                  className="absolute inset-0 opacity-20 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(15,12,9,0.95) 0%, rgba(15,12,9,0.3) 60%, transparent 100%)",
                  }}
                />

                {/* Warm border on hover */}
                <div
                  className="absolute inset-3 border opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-sm"
                  style={{ borderColor: "rgba(197,151,58,0.2)" }}
                />

                {/* Maximize icon */}
                <div
                  className="absolute top-5 right-5 p-2 rounded-sm border backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: "rgba(0,0,0,0.5)",
                    borderColor: "rgba(255,255,255,0.1)",
                    color: "var(--color-ivory)",
                  }}
                >
                  <Maximize2 size={12} />
                </div>

                {/* Caption */}
                <div
                  className="absolute bottom-5 left-5 right-5 text-left space-y-1 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500"
                >
                  <span
                    className="text-[9px] font-sans uppercase tracking-widest font-bold"
                    style={{ color: "var(--color-gold)" }}
                  >
                    {TEXT.galleryCategoryNames[item.category] || item.category}
                  </span>
                  <h3
                    className="font-serif text-lg font-bold tracking-wide"
                    style={{ color: "var(--color-ivory)" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="font-sans text-[11px] font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-2 leading-relaxed pt-0.5"
                    style={{ color: "var(--color-secondary-text)" }}
                  >
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && currentItem && (
          <div className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxIndex(null)}
              className="absolute inset-0"
              style={{ background: "rgba(0,0,0,0.95)", backdropFilter: "blur(12px)" }}
            />

            {/* Prev/Next */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-4 border rounded-sm transition-colors hidden md:block"
              style={{
                borderColor: "rgba(255,255,255,0.1)",
                color: "var(--color-ivory)",
                background: "rgba(0,0,0,0.5)",
              }}
              aria-label={TEXT.galleryPreviousAriaLabel}
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-4 border rounded-sm transition-colors hidden md:block"
              style={{
                borderColor: "rgba(255,255,255,0.1)",
                color: "var(--color-ivory)",
                background: "rgba(0,0,0,0.5)",
              }}
              aria-label={TEXT.galleryNextAriaLabel}
            >
              <ChevronRight size={22} />
            </button>

            {/* Lightbox card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35 }}
              className="relative max-w-4xl w-full flex flex-col items-center z-10"
            >
              <button
                onClick={() => setLightboxIndex(null)}
                className="absolute -top-11 right-0 flex items-center space-x-1 uppercase text-[10px] tracking-widest px-4 py-2 rounded-sm border font-sans"
                style={{
                  color: "var(--color-secondary-text)",
                  borderColor: "rgba(255,255,255,0.1)",
                  background: "rgba(255,255,255,0.05)",
                }}
                aria-label={TEXT.galleryCloseLightboxAriaLabel}
              >
                <X size={13} />
                <span>{TEXT.galleryCloseButtonLabel}</span>
              </button>

              <div
                className="rounded-sm overflow-hidden shadow-2xl w-full border"
                style={{
                  background: "var(--color-card)",
                  borderColor: "rgba(197,151,58,0.2)",
                }}
              >
                <div className="relative aspect-video max-h-[60vh] md:max-h-none overflow-hidden bg-black flex items-center justify-center">
                  <img
                    src={currentItem.image}
                    alt={currentItem.title}
                    className="max-h-full max-w-full object-contain select-none"
                    referrerPolicy="no-referrer"
                  />
                  {/* Mobile nav */}
                  <div className="absolute inset-x-0 bottom-4 flex justify-between px-5 md:hidden">
                    <button
                      onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                      className="p-3 rounded-sm border"
                      style={{ background: "rgba(0,0,0,0.8)", color: "var(--color-ivory)", borderColor: "rgba(255,255,255,0.1)" }}
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); handleNext(); }}
                      className="p-3 rounded-sm border"
                      style={{ background: "rgba(0,0,0,0.8)", color: "var(--color-ivory)", borderColor: "rgba(255,255,255,0.1)" }}
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>

                <div
                  className="p-7 text-left border-t space-y-2"
                  style={{
                    background: "var(--color-surface)",
                    borderColor: "rgba(197,151,58,0.12)",
                  }}
                >
                  <div className="flex items-center space-x-3">
                    <span
                      className="text-[10px] uppercase tracking-widest font-bold bg-opacity-10 px-3 py-1 rounded-sm border font-sans"
                      style={{
                        color: "var(--color-gold)",
                        background: "rgba(197,151,58,0.08)",
                        borderColor: "rgba(197,151,58,0.2)",
                      }}
                    >
                      {currentItem.category.toUpperCase()}
                    </span>
                    <span
                      className="text-xs font-sans"
                      style={{ color: "var(--color-secondary-text)" }}
                    >
                      {lightboxIndex + 1} of {filteredItems.length}
                    </span>
                  </div>
                  <h4
                    className="font-serif text-xl md:text-2xl font-bold tracking-wide"
                    style={{ color: "var(--color-ivory)" }}
                  >
                    {currentItem.title}
                  </h4>
                  <p
                    className="font-sans text-xs md:text-sm font-light leading-relaxed max-w-3xl"
                    style={{ color: "var(--color-secondary-text)" }}
                  >
                    {currentItem.description}
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
