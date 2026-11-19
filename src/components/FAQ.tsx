/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FAQ_DATA } from "../data";
import { TEXT } from "../data/language";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section
      id="faq"
      className="py-24 md:py-32 relative overflow-hidden"
      style={{ background: "var(--color-bg)" }}
    >
      <div
        className="absolute top-1/2 right-1/4 w-80 h-80 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(197,151,58,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-3xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-14 space-y-4">
          <span
            className="text-[10px] md:text-xs uppercase font-sans tracking-[0.4em] font-semibold"
            style={{ color: "var(--color-gold)" }}
          >
            {TEXT.faqSubtitle}
          </span>
          <h2
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight"
            style={{ color: "var(--color-ivory)" }}
          >
            {TEXT.faqTitle}
          </h2>
          <div
            className="w-12 h-[1px] mx-auto"
            style={{
              background: "linear-gradient(90deg, transparent, var(--color-gold), transparent)",
            }}
          />
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {FAQ_DATA.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="rounded-sm border overflow-hidden transition-colors duration-300"
                style={{
                  background: "var(--color-card)",
                  borderColor: isOpen ? "rgba(197,151,58,0.3)" : "rgba(197,151,58,0.1)",
                }}
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  className="w-full flex items-center justify-between px-7 py-5 text-left gap-4"
                  aria-expanded={isOpen}
                >
                  <span
                    className="font-serif text-base md:text-lg font-semibold leading-snug"
                    style={{ color: isOpen ? "var(--color-gold)" : "var(--color-ivory)" }}
                  >
                    {item.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0"
                    style={{ color: "var(--color-gold)" }}
                  >
                    <ChevronDown size={18} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div
                        className="px-7 pb-6 font-sans text-sm font-light leading-relaxed border-t pt-4"
                        style={{
                          color: "var(--color-secondary-text)",
                          borderColor: "rgba(197,151,58,0.1)",
                        }}
                      >
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
