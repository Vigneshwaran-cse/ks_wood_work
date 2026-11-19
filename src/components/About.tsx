/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { BUSINESS_INFO } from "../data";
import { TEXT } from "../data/language";
import { Phone, MessageSquare, Award, Clock, Wrench } from "lucide-react";

const ABOUT_SERVICES = TEXT.aboutServicePoints;

const credentialBadges = [
  { icon: Award, label: "Quality Materials" },
  { icon: Clock, label: "On-Time Delivery" },
  { icon: Wrench, label: "Precise Fitting" },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-24 md:py-32 relative overflow-hidden"
      style={{ background: "var(--color-surface)" }}
    >
      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(197,151,58,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-20">

          {/* ── LEFT: Founder portrait ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-[42%] flex flex-col justify-center"
          >
            <div className="relative group">
              {/* Corner accents */}
              <div
                className="absolute -top-4 -left-4 w-10 h-10 pointer-events-none"
                style={{
                  borderTop: "2px solid rgba(197,151,58,0.4)",
                  borderLeft: "2px solid rgba(197,151,58,0.4)",
                }}
              />
              <div
                className="absolute -bottom-4 -right-4 w-10 h-10 pointer-events-none"
                style={{
                  borderBottom: "2px solid rgba(197,151,58,0.4)",
                  borderRight: "2px solid rgba(197,151,58,0.4)",
                }}
              />

              <div
                className="rounded-sm overflow-hidden aspect-[3/4] relative shadow-2xl"
                style={{ background: "var(--color-card)" }}
              >
                <img
                  src={new URL("./img/avator.jpeg", import.meta.url).href}
                  alt="Portrait of Kandhasamy, master woodworker and founder of K.S. Wood Work"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 select-none"
                />
                {/* Warm overlay */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to bottom, transparent 50%, rgba(15,12,9,0.85) 100%)",
                  }}
                />

                {/* Identity card */}
                <div
                  className="absolute bottom-6 left-6 right-6 p-5 rounded-sm backdrop-blur-sm border"
                  style={{
                    background: "rgba(15,12,9,0.88)",
                    borderColor: "rgba(197,151,58,0.25)",
                  }}
                >
                  <h4
                    className="font-serif text-lg font-bold tracking-wide"
                    style={{ color: "var(--color-ivory)" }}
                  >
                    {BUSINESS_INFO.founder}
                  </h4>
                  <p
                    className="text-xs uppercase tracking-widest font-semibold mt-0.5 font-sans"
                    style={{ color: "var(--color-gold)" }}
                  >
                    {TEXT.aboutFounderRole}
                  </p>
                  <div className="flex gap-3 mt-3">
                    {credentialBadges.map(({ icon: Icon, label }) => (
                      <div key={label} className="flex items-center gap-1.5">
                        <Icon size={11} style={{ color: "var(--color-gold)" }} />
                        <span
                          className="text-[9px] font-sans"
                          style={{ color: "var(--color-secondary-text)" }}
                        >
                          {label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT: Text content ── */}
          <div className="w-full lg:w-[58%] flex flex-col justify-between text-left space-y-8 lg:py-4">
            <div className="space-y-4">
              <span
                className="text-[10px] md:text-xs uppercase font-sans tracking-[0.4em] font-semibold"
                style={{ color: "var(--color-gold)" }}
              >
                {TEXT.aboutSectionLabel}
              </span>
              <h2
                className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight"
                style={{ color: "var(--color-ivory)" }}
              >
                {TEXT.aboutHeading}
              </h2>
              <div
                className="w-12 h-[1px]"
                style={{
                  background:
                    "linear-gradient(90deg, var(--color-gold), transparent)",
                }}
              />
            </div>

            <div className="space-y-5">
              <p
                className="font-sans text-sm md:text-base font-light leading-relaxed"
                style={{ color: "var(--color-secondary-text)" }}
              >
                {TEXT.aboutDescription}
              </p>

              {/* Service points grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {ABOUT_SERVICES.map((service) => (
                  <div key={service} className="flex items-start gap-3 text-sm">
                    <span
                      className="mt-1.5 h-2 w-2 rounded-full shrink-0"
                      style={{ background: "var(--color-gold)" }}
                    />
                    <span style={{ color: "var(--color-ivory)" }}>{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center justify-center space-x-2 text-xs uppercase tracking-widest font-bold py-4 px-8 rounded-sm transition-all duration-300 font-sans"
                style={{
                  color: "var(--color-bg)",
                  background: "var(--color-gold)",
                  boxShadow: "0 8px 24px rgba(197,151,58,0.2)",
                }}
              >
                <Phone size={13} fill="currentColor" />
                <span>{TEXT.aboutCallLabel}</span>
              </a>
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 text-xs uppercase tracking-widest font-semibold py-4 px-8 rounded-sm transition-all duration-300 border font-sans"
                style={{
                  color: "var(--color-ivory)",
                  borderColor: "rgba(197,151,58,0.3)",
                  background: "rgba(31,24,17,0.5)",
                }}
              >
                <MessageSquare size={13} style={{ color: "var(--color-gold)" }} fill="currentColor" />
                <span>{TEXT.aboutWhatsAppLabel}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
