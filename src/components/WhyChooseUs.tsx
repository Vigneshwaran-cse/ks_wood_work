/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { WHY_CHOOSE_US_DATA } from "../data";
import { TEXT } from "../data/language";
import Icon from "./Icon";

export default function WhyChooseUs() {
  const containerVariants: any = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.14 } },
  };

  const cardVariants: any = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="why-us"
      className="py-24 md:py-32 relative overflow-hidden"
      style={{ background: "var(--color-bg)" }}
    >
      {/* Ambient glows */}
      <div
        className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(197,151,58,0.05) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(139,94,60,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-6">
          <div className="max-w-xl space-y-4">
            <span
              className="text-[10px] md:text-xs uppercase font-sans tracking-[0.4em] font-semibold"
              style={{ color: "var(--color-gold)" }}
            >
              {TEXT.aboutServicesTitle}
            </span>
            <h2
              className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.2]"
              style={{ color: "var(--color-ivory)" }}
            >
              {TEXT.whyChooseSectionTitle}
            </h2>
          </div>
          <div className="max-w-md">
            <p
              className="font-sans text-sm md:text-base font-light leading-relaxed"
              style={{ color: "var(--color-secondary-text)" }}
            >
              {TEXT.whyChooseSectionDescription}
            </p>
          </div>
        </div>

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6"
        >
          {WHY_CHOOSE_US_DATA.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              className="rounded-sm p-7 flex flex-col items-start space-y-5 group relative overflow-hidden transition-all duration-300 border"
              style={{
                background: "rgba(31,24,17,0.75)",
                backdropFilter: "blur(14px)",
                borderColor: "rgba(197,151,58,0.1)",
              }}
              whileHover={{
                borderColor: "rgba(197,151,58,0.3)",
                y: -4,
                boxShadow: "0 16px 48px rgba(0,0,0,0.5), 0 4px 16px rgba(197,151,58,0.08)",
              }}
            >
              {/* Top sheen */}
              <div
                className="absolute top-0 left-0 right-0 h-20 pointer-events-none"
                style={{
                  background: "linear-gradient(to bottom, rgba(255,255,255,0.02), transparent)",
                }}
              />

              {/* Wood grain accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, var(--color-gold), transparent)",
                }}
              />

              {/* Icon */}
              <div className="relative">
                <div
                  className="absolute inset-0 rounded-sm blur-md scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "rgba(197,151,58,0.12)" }}
                />
                <div
                  className="w-13 h-13 rounded-sm flex items-center justify-center transition-all duration-500 relative z-10 border"
                  style={{
                    width: "52px",
                    height: "52px",
                    background: "var(--color-surface)",
                    borderColor: "rgba(197,151,58,0.15)",
                    color: "var(--color-gold)",
                  }}
                >
                  <Icon
                    name={item.iconName}
                    size={21}
                    className="transition-transform duration-500 group-hover:rotate-12"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-2.5 relative z-10">
                <h3
                  className="font-serif text-lg md:text-xl font-bold tracking-wide transition-colors duration-300"
                  style={{ color: "var(--color-ivory)" }}
                >
                  {item.title}
                </h3>
                <p
                  className="font-sans text-xs sm:text-sm font-light leading-relaxed"
                  style={{ color: "var(--color-secondary-text)" }}
                >
                  {item.description}
                </p>
              </div>

              {/* Corner dot */}
              <div
                className="absolute bottom-4 right-4 w-1.5 h-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "var(--color-gold)" }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
