/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FAQ_DATA } from "../data";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("faq-1"); // Default open first FAQ item

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-24 md:py-32 bg-surface relative overflow-hidden">
      {/* Background visual beams */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-gold/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-left">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-[10px] md:text-xs uppercase font-sans tracking-[0.4em] text-gold font-semibold">
            Common Inquiries
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-[1px] bg-gold mx-auto my-2" />
          <p className="font-sans text-secondary-text text-sm md:text-base font-light leading-relaxed">
            Everything you need to know about our premium timber curation, custom designs, warranties, and delivery workflows.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_DATA.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`glass-panel rounded-[2px] overflow-hidden transition-all duration-300 ${
                  isOpen ? "border-gold/35 bg-card" : "hover:border-gold/25"
                }`}
              >
                {/* Accordion Title Header */}
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full py-6 px-6 sm:px-8 flex items-center justify-between text-left focus:outline-none group"
                >
                  <h3 className="font-serif text-sm sm:text-base font-bold text-white tracking-wide group-hover:text-gold transition-colors duration-300 pr-4">
                    {item.question}
                  </h3>
                  <div
                    className={`p-2.5 rounded-[2px] border border-white/5 bg-surface text-secondary-text group-hover:text-gold group-hover:border-gold/30 transition-all duration-300 shrink-0 ${
                      isOpen ? "rotate-180 border-gold/30 text-gold" : ""
                    }`}
                  >
                    <ChevronDown size={14} className="transition-transform duration-300" />
                  </div>
                </button>

                {/* Expanded Answer Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 sm:px-8 pb-6 border-t border-gold/10 pt-4">
                        <p className="font-sans text-xs sm:text-sm text-secondary-text font-light leading-relaxed">
                          {item.answer}
                        </p>
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
