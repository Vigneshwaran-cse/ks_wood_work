/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { MessageSquare, ChevronRight } from "lucide-react";
import { BUSINESS_INFO } from "../data";
import { TEXT } from "../data/language";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-start justify-center overflow-hidden bg-[radial-gradient(circle_at_center,_#1a1a1a_0%,_#090909_100%)] pt-1 sm:pt-3 lg:pt-5 pb-24"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1512486130939-2c4f7997b59d?auto=format&fit=crop&w=1920&q=80"
          alt="Woodworking tools and wooden panels in a workshop"
          className="w-full h-full object-cover object-center scale-105 select-none"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-bg/40" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-bg to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full text-left pt-24 sm:pt-28 lg:pt-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl flex flex-col items-start gap-8"
        >
          <motion.div variants={itemVariants} className="flex items-center space-x-3">
            <span className="h-[1px] w-12 bg-gold/50" />
            <span className="text-[10px] md:text-xs uppercase font-sans tracking-[0.4em] text-gold font-medium">
              {TEXT.heroSubtitle}
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-white leading-[1.05] max-w-3xl"
          >
            {TEXT.heroHeading}
            <br />
            <span className="text-gold block mt-4">{TEXT.heroSubheading}</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="font-sans text-secondary-text text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-xl mt-2"
          >
            {TEXT.heroSubtitle}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-6"
          >
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 text-[12px] uppercase tracking-[2px] text-black bg-gold hover:bg-gold-light font-semibold px-10 py-4.5 rounded-[2px] transition-all duration-300 shadow-xl shadow-gold/10"
            >
              <MessageSquare size={14} className="text-gold" fill="currentColor" />
              <span>{TEXT.heroPrimaryCta}</span>
            </a>

            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center justify-center space-x-2 text-[12px] uppercase tracking-[2px] text-gold border border-gold/30 hover:border-gold px-10 py-4.5 rounded-[2px] transition-all duration-300 bg-surface/30 hover:bg-gold/5 font-semibold"
            >
              <span>{TEXT.heroSecondaryCta}</span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden md:block">
        <button
          onClick={() => handleScrollToSection("why-us")}
          className="flex flex-col items-center space-y-2 group text-secondary-text hover:text-gold transition-colors"
          aria-label={TEXT.heroScrollAriaLabel}
        >
          <span className="text-[10px] uppercase tracking-[0.3em] font-light">
            {TEXT.heroScrollLabel}
          </span>
          <div className="w-[20px] h-[36px] border-2 border-gold/30 group-hover:border-gold rounded-full flex justify-center p-1 transition-colors duration-300">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 bg-gold rounded-full"
            />
          </div>
        </button>
      </div>
    </section>
  );
}
