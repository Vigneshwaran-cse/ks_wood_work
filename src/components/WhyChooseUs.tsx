/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { WHY_CHOOSE_US_DATA } from "../data";
import { TEXT } from "../data/language";
import Icon from "./Icon";

export default function WhyChooseUs() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section id="why-us" className="py-24 md:py-32 bg-bg relative overflow-hidden">
      {/* Background ambient gold lights */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20">
          <div className="max-w-xl space-y-4">
            <span className="text-[10px] md:text-xs uppercase font-sans tracking-[0.4em] text-gold font-semibold">
              {TEXT.aboutServicesTitle}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.2]">
              {TEXT.whyChooseSectionTitle}
            </h2>
          </div>
          <div className="max-w-md mt-6 md:mt-0">
            <p className="font-sans text-secondary-text text-sm md:text-base font-light leading-relaxed">
              {TEXT.whyChooseSectionDescription}
            </p>
          </div>
        </div>

        {/* 4 Premium Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {WHY_CHOOSE_US_DATA.map((item, index) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              className="glass-panel rounded-[2px] p-8 flex flex-col items-start space-y-6 hover:shadow-2xl hover:shadow-gold/5 group relative overflow-hidden transition-all duration-300"
            >
              {/* Subtle light background sheen for premium visual texture */}
              <div className="absolute top-0 left-0 right-0 h-[100px] bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />

              {/* Icon Container with elegant frame */}
              <div className="relative">
                <div className="absolute inset-0 bg-gold/10 rounded-[2px] blur-md scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="w-14 h-14 rounded-[2px] bg-surface border border-gold/15 flex items-center justify-center text-gold group-hover:text-black group-hover:bg-gold transition-all duration-500 relative z-10">
                  <Icon name={item.iconName} size={22} className="transition-transform duration-500 group-hover:rotate-12" />
                </div>
              </div>

              {/* Title & Description */}
              <div className="space-y-3 relative z-10">
                <h3 className="font-serif text-lg md:text-xl font-bold text-white tracking-wide group-hover:text-gold transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="font-sans text-secondary-text text-xs sm:text-sm font-light leading-relaxed group-hover:text-white transition-colors duration-300">
                  {item.description}
                </p>
              </div>

              {/* Corner indicator accent for high-end look */}
              <div className="absolute bottom-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute bottom-3 right-3 w-1.5 h-1.5 bg-gold rounded-full" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
