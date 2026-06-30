/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { STATS_DATA } from "../data";

// Custom high-performance Animated Counter Sub-Component
function Counter({ targetValue, duration = 2000 }: { targetValue: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const counterRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTime: number | null = null;

          const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            
            // Easing out quadratic
            const easeProgress = progress * (2 - progress);
            const currentValue = Math.floor(easeProgress * targetValue);
            
            setCount(currentValue);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(targetValue);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [targetValue, duration]);

  return (
    <span ref={counterRef} className="tabular-nums">
      {count.toLocaleString()}
    </span>
  );
}

export default function Statistics() {
  return (
    <section id="statistics" className="py-20 bg-surface border-y border-gold/10 relative overflow-hidden">
      {/* Visual background accents */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,155,60,0.02),transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 text-center divide-y divide-gold/15 lg:divide-y-0 lg:divide-x lg:divide-gold/15 border-y border-gold/15 lg:border-x lg:border-y-0">
          {STATS_DATA.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
              className="flex flex-col items-center justify-center space-y-3 p-8 group"
            >
              {/* Animated counter number display */}
              <div className="font-serif text-4xl sm:text-5xl md:text-6xl font-black text-gold select-none flex items-center justify-center">
                <Counter targetValue={stat.value} />
                <span className="text-white group-hover:text-gold transition-colors duration-300">
                  {stat.suffix}
                </span>
              </div>

              {/* Stat labels */}
              <div className="space-y-1">
                <h4 className="font-serif text-xs sm:text-sm font-bold uppercase tracking-widest text-white">
                  {stat.label}
                </h4>
                <p className="font-sans text-[11px] sm:text-xs text-secondary-text font-light leading-relaxed max-w-[200px] mx-auto">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
