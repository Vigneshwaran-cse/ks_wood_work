/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { TESTIMONIALS_DATA } from "../data";
import { TEXT } from "../data/language";
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoplay = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
    }, 6000);
  };

  const stopAutoplay = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, []);

  const handlePrev = () => {
    stopAutoplay();
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
    startAutoplay();
  };

  const handleNext = () => {
    stopAutoplay();
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
    startAutoplay();
  };

  const current = TESTIMONIALS_DATA[activeIndex];

  return (
    <section
      id="testimonials"
      className="py-24 md:py-32 relative overflow-hidden"
      style={{ background: "var(--color-surface)" }}
    >
      <div
        className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(197,151,58,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
        {/* Heading */}
        <div className="max-w-2xl mx-auto mb-16 space-y-4">
          <span
            className="text-[10px] md:text-xs uppercase font-sans tracking-[0.4em] font-semibold"
            style={{ color: "var(--color-gold)" }}
          >
            {TEXT.testimonialsSubtitle}
          </span>
          <h2
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight"
            style={{ color: "var(--color-ivory)" }}
          >
            {TEXT.testimonialsTitle}
          </h2>
          <div
            className="w-12 h-[1px] mx-auto"
            style={{
              background: "linear-gradient(90deg, transparent, var(--color-gold), transparent)",
            }}
          />
          <p
            className="font-sans text-sm md:text-base font-light leading-relaxed"
            style={{ color: "var(--color-secondary-text)" }}
          >
            {TEXT.testimonialsDescription}
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto min-h-[340px] sm:min-h-[300px] flex items-center justify-center px-4 md:px-14">
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3.5 border rounded-sm transition-all duration-300 hover:scale-105 hidden sm:block"
            style={{
              borderColor: "rgba(255,255,255,0.1)",
              color: "var(--color-ivory)",
              background: "rgba(31,24,17,0.5)",
            }}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3.5 border rounded-sm transition-all duration-300 hover:scale-105 hidden sm:block"
            style={{
              borderColor: "rgba(255,255,255,0.1)",
              color: "var(--color-ivory)",
              background: "rgba(31,24,17,0.5)",
            }}
            aria-label="Next testimonial"
          >
            <ChevronRight size={18} />
          </button>

          <div className="w-full overflow-hidden">
            <motion.div
              key={activeIndex}
              initial={{ x: direction > 0 ? 80 : -80, opacity: 0, scale: 0.97 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              exit={{ x: direction < 0 ? 80 : -80, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="rounded-sm p-8 md:p-12 text-left relative overflow-hidden border"
              style={{
                background: "rgba(31,24,17,0.75)",
                backdropFilter: "blur(14px)",
                borderColor: "rgba(197,151,58,0.14)",
              }}
            >
              <Quote
                className="absolute right-10 top-8 pointer-events-none"
                style={{ color: "rgba(197,151,58,0.05)", width: "80px", height: "80px" }}
              />

              {/* Stars */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-1">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} size={14} style={{ color: "var(--color-gold)" }} fill="currentColor" />
                  ))}
                </div>
                <Quote size={18} style={{ color: "rgba(197,151,58,0.4)" }} />
              </div>

              <p
                className="font-sans text-sm sm:text-base md:text-lg font-light leading-relaxed relative z-10"
                style={{ color: "var(--color-ivory)" }}
              >
                "{current.content}"
              </p>

              <div
                className="border-t mt-6 pt-6"
                style={{ borderColor: "rgba(197,151,58,0.1)" }}
              >
                <h4
                  className="font-serif text-sm sm:text-base font-bold tracking-wide"
                  style={{ color: "var(--color-ivory)" }}
                >
                  {current.name}
                </h4>
                <p
                  className="text-[11px] sm:text-xs font-sans font-light mt-0.5"
                  style={{ color: "var(--color-secondary-text)" }}
                >
                  {current.role}
                  {current.location && (
                    <span style={{ color: "rgba(197,151,58,0.7)" }}> · {current.location}</span>
                  )}
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center space-x-3 mt-8">
          {TESTIMONIALS_DATA.map((_, idx) => (
            <button
              key={idx}
              onClick={() => { stopAutoplay(); setDirection(idx > activeIndex ? 1 : -1); setActiveIndex(idx); startAutoplay(); }}
              className="h-1.5 transition-all duration-300 rounded-sm"
              style={{
                width: idx === activeIndex ? "32px" : "6px",
                background: idx === activeIndex ? "var(--color-gold)" : "rgba(255,255,255,0.15)",
              }}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
