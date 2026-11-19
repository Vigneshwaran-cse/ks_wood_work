/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { WORKING_PROCESS_DATA } from "../data";
import { TEXT } from "../data/language";
import Icon from "./Icon";

export default function WorkingProcess() {
  return (
    <section
      id="process"
      className="py-24 md:py-32 relative overflow-hidden"
      style={{ background: "var(--color-bg)" }}
    >
      {/* Warm center glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(197,151,58,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20 space-y-4">
          <span
            className="text-[10px] md:text-xs uppercase font-sans tracking-[0.4em] font-semibold"
            style={{ color: "var(--color-gold)" }}
          >
            How It Works
          </span>
          <h2
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight"
            style={{ color: "var(--color-ivory)" }}
          >
            {TEXT.processTitle}
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
            {TEXT.processDescription}
          </p>
        </div>

        {/* Steps — horizontal on desktop, vertical on mobile */}
        <div className="relative">
          {/* Horizontal connector line (desktop) */}
          <div
            className="absolute top-10 left-[12%] right-[12%] h-[1px] hidden lg:block pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(197,151,58,0.3) 20%, rgba(197,151,58,0.5) 50%, rgba(197,151,58,0.3) 80%, transparent)",
            }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-6">
            {WORKING_PROCESS_DATA.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                  delay: index * 0.12,
                }}
                className="flex flex-col items-center text-center group"
              >
                {/* Step icon node */}
                <div className="relative mb-7">
                  {/* Outer ring */}
                  <div
                    className="absolute inset-0 rounded-full scale-125 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: "rgba(197,151,58,0.07)" }}
                  />
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center border-2 relative z-10 transition-all duration-500 group-hover:scale-105"
                    style={{
                      background: "var(--color-surface)",
                      borderColor: "rgba(197,151,58,0.3)",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
                    }}
                  >
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center border"
                      style={{
                        background: "linear-gradient(135deg, rgba(197,151,58,0.15) 0%, rgba(197,151,58,0.05) 100%)",
                        borderColor: "rgba(197,151,58,0.2)",
                        color: "var(--color-gold)",
                      }}
                    >
                      <Icon name={step.iconName} size={22} />
                    </div>
                  </div>

                  {/* Step number badge */}
                  <div
                    className="absolute -top-1 -right-1 w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold font-serif z-20 border"
                    style={{
                      background: "var(--color-gold)",
                      color: "var(--color-bg)",
                      borderColor: "var(--color-bg)",
                    }}
                  >
                    {index + 1}
                  </div>
                </div>

                {/* Text */}
                <div className="space-y-2.5">
                  <h3
                    className="font-serif text-lg font-bold tracking-wide"
                    style={{ color: "var(--color-ivory)" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="font-sans text-sm font-light leading-relaxed max-w-xs mx-auto"
                    style={{ color: "var(--color-secondary-text)" }}
                  >
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
