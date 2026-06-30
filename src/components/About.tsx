/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { BUSINESS_INFO } from "../data";
import { TEXT } from "../data/language";
import { Phone, MessageSquare } from "lucide-react";

const ABOUT_SERVICES = TEXT.aboutServicePoints;

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-surface relative overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-gold/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-[45%] flex flex-col justify-center"
          >
            <div className="relative group">
              <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-gold/40 rounded-tl-none pointer-events-none" />
              <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-gold/40 rounded-br-none pointer-events-none" />
              <div className="absolute inset-0 rounded-[2px] border border-gold/20 scale-102 group-hover:scale-104 transition-transform duration-500 pointer-events-none" />
              <div className="rounded-[2px] overflow-hidden bg-card aspect-[3/4] relative shadow-2xl">
                <img
                  src={new URL("./img/avator.jpeg", import.meta.url).href}
                  alt="Portrait of a master woodworker in his workshop"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 select-none"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-6 left-6 right-6 p-6 rounded-[2px] bg-bg/90 backdrop-blur border border-gold/25 text-left">
                  <h4 className="font-serif text-lg font-bold text-white tracking-wide">
                    {BUSINESS_INFO.founder}
                  </h4>
                  <p className="text-xs text-gold uppercase tracking-widest font-semibold mt-0.5">
                    {TEXT.aboutFounderRole}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="w-full lg:w-[55%] flex flex-col justify-between text-left space-y-8 lg:py-4">
            <div className="space-y-4">
              <span className="text-[10px] md:text-xs uppercase font-sans tracking-[0.4em] text-gold font-semibold">
                {TEXT.aboutSectionLabel}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                {TEXT.aboutHeading}
              </h2>
              <div className="w-16 h-[1px] bg-gold" />
            </div>

            <div className="space-y-6 text-secondary-text text-sm md:text-base leading-relaxed">
              <p>
                {TEXT.aboutDescription}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {ABOUT_SERVICES.map((service) => (
                  <div key={service} className="flex items-start gap-3 text-sm text-white">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-gold" />
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center justify-center space-x-2 text-xs uppercase tracking-widest text-black bg-gold hover:bg-gold-light font-bold py-4.5 px-8 rounded-[2px] transition-all duration-300 shadow-lg shadow-gold/20"
              >
                <Phone size={13} fill="currentColor" />
                <span>{TEXT.aboutCallLabel}</span>
              </a>
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 text-xs uppercase tracking-widest text-white border border-gold/30 hover:border-gold py-4.5 px-8 rounded-[2px] bg-bg/50 hover:bg-gold/5 transition-all duration-300"
              >
                <MessageSquare size={13} className="text-gold" fill="currentColor" />
                <span>{TEXT.aboutWhatsAppLabel}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
