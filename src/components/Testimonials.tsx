/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { TESTIMONIALS_DATA } from "../data";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoplay = () => {
    stopAutoplay();
    timerRef.current = setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
    }, 6000);
  };

  const stopAutoplay = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
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

  const handleDotClick = (idx: number) => {
    stopAutoplay();
    setDirection(idx > activeIndex ? 1 : -1);
    setActiveIndex(idx);
    startAutoplay();
  };

  const current = TESTIMONIALS_DATA[activeIndex];

  // Animation variants for premium carousel transition
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 }
      }
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 }
      }
    })
  };

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-bg relative overflow-hidden">
      {/* Background glow flares */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold/[0.02] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-gold/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
        {/* Heading Section */}
        <div className="max-w-2xl mx-auto mb-16 md:mb-20 space-y-4">
          <span className="text-[10px] md:text-xs uppercase font-sans tracking-[0.4em] text-gold font-semibold">
            Testimonials of Prestige
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            What Our Clients Say
          </h2>
          <div className="w-16 h-[1px] bg-gold mx-auto my-2" />
          <p className="font-sans text-secondary-text text-sm md:text-base font-light leading-relaxed">
            We measure our success by the absolute satisfaction of the families, builders, and designers who trust us with their architectural woodwork.
          </p>
        </div>

        {/* Carousel Slider */}
        <div className="relative max-w-4xl mx-auto min-h-[380px] sm:min-h-[320px] flex items-center justify-center px-4 md:px-12">
          
          {/* Left arrow trigger */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3.5 border border-white/10 rounded-[2px] hover:border-gold hover:text-gold text-white bg-surface/50 transition-all duration-300 hover:scale-105 hidden sm:block"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Right arrow trigger */}
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3.5 border border-white/10 rounded-[2px] hover:border-gold hover:text-gold text-white bg-surface/50 transition-all duration-300 hover:scale-105 hidden sm:block"
            aria-label="Next testimonial"
          >
            <ChevronRight size={18} />
          </button>

          {/* Testimonial Active Card Wrapper */}
          <div className="w-full overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="glass-panel rounded-[2px] p-8 md:p-12 text-left relative overflow-hidden flex flex-col justify-between space-y-6 md:space-y-8"
              >
                {/* Quote large watermark background */}
                <Quote className="absolute right-12 top-8 text-gold/[0.04] w-24 h-24 pointer-events-none" />

                {/* Rating Stars and Quote Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    {[...Array(current.rating)].map((_, i) => (
                      <Star key={i} size={15} className="text-gold fill-gold" />
                    ))}
                  </div>
                  <Quote size={20} className="text-gold/45" />
                </div>

                {/* Testimonial Review Content Text */}
                <p className="font-sans text-white text-sm sm:text-base md:text-lg font-light leading-relaxed relative z-10">
                  "{current.content}"
                </p>

                {/* Author Info block */}
                <div className="border-t border-gold/10 pt-6">
                  <div className="text-left">
                    <h4 className="font-serif text-sm sm:text-base font-bold text-white tracking-wide">
                      {current.name}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-secondary-text font-light">
                      {current.role} • <span className="text-gold/80">{current.location}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Carousel Pagination Indicator Dots */}
        <div className="flex items-center justify-center space-x-3.5 mt-10">
          {TESTIMONIALS_DATA.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleDotClick(idx)}
              className={`h-1.5 transition-all duration-300 rounded-[2px] ${
                idx === activeIndex ? "w-8 bg-gold" : "w-1.5 bg-white/20 hover:bg-gold/40"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
