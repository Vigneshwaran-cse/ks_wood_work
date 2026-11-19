/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BUSINESS_INFO, SERVICES_DATA } from "../data";
import { TEXT } from "../data/language";
import { Phone, MessageSquare, ArrowUp, MapPin, Mail } from "lucide-react";

export default function Footer() {
  const [showScrollElements, setShowScrollElements] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollElements(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBackToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.scrollY - 80,
        behavior: "smooth",
      });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="pt-20 pb-8 relative overflow-hidden text-left border-t"
      style={{
        background: "var(--color-surface)",
        borderColor: "rgba(197,151,58,0.1)",
      }}
    >
      {/* Top gold line */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px] pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(197,151,58,0.3) 30%, rgba(197,151,58,0.5) 50%, rgba(197,151,58,0.3) 70%, transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-20 pb-16 border-b"
          style={{ borderColor: "rgba(197,151,58,0.08)" }}
        >
          {/* Brand */}
          <div className="lg:col-span-4 space-y-5">
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, "home")}
              className="flex flex-col select-none"
            >
              <span
                className="font-serif text-xl font-bold tracking-[0.2em]"
                style={{ color: "var(--color-ivory)" }}
              >
                {BUSINESS_INFO.name}
              </span>
              <span
                className="text-[9px] tracking-[0.4em] uppercase mt-0.5 font-sans"
                style={{ color: "var(--color-gold)" }}
              >
                {TEXT.footerBrandCaption}
              </span>
            </a>
            <p
              className="font-sans text-xs font-light leading-relaxed max-w-xs"
              style={{ color: "var(--color-secondary-text)" }}
            >
              {TEXT.footerDescription}
            </p>
            {/* Wood grain decorative rule */}
            <div
              className="w-16 h-[1px]"
              style={{
                background: "linear-gradient(90deg, var(--color-gold), transparent)",
              }}
            />
          </div>

          {/* Quick links */}
          <div className="lg:col-span-3 space-y-5">
            <h4
              className="font-serif text-sm font-bold uppercase tracking-widest pb-2 border-b"
              style={{
                color: "var(--color-ivory)",
                borderColor: "rgba(197,151,58,0.1)",
              }}
            >
              {TEXT.footerQuickLinksTitle}
            </h4>
            <ul className="space-y-3 font-sans text-xs uppercase tracking-widest">
              {TEXT.navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href.substring(1))}
                    className="transition-colors block hover:translate-x-1 duration-200"
                    style={{ color: "var(--color-secondary-text)" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "var(--color-gold)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "var(--color-secondary-text)";
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3 space-y-5">
            <h4
              className="font-serif text-sm font-bold uppercase tracking-widest pb-2 border-b"
              style={{
                color: "var(--color-ivory)",
                borderColor: "rgba(197,151,58,0.1)",
              }}
            >
              {TEXT.servicesSectionTitle}
            </h4>
            <ul className="space-y-3 font-sans text-xs uppercase tracking-widest">
              {SERVICES_DATA.map((srv) => (
                <li key={srv.id}>
                  <a
                    href="#services"
                    onClick={(e) => handleLinkClick(e, "services")}
                    className="transition-colors block"
                    style={{ color: "var(--color-secondary-text)" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "var(--color-gold)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "var(--color-secondary-text)";
                    }}
                  >
                    {srv.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2 space-y-5">
            <h4
              className="font-serif text-sm font-bold uppercase tracking-widest pb-2 border-b"
              style={{
                color: "var(--color-ivory)",
                borderColor: "rgba(197,151,58,0.1)",
              }}
            >
              Contact
            </h4>
            <div className="space-y-4 text-xs font-light">
              <div className="flex items-start space-x-2.5">
                <MapPin size={14} className="shrink-0 mt-0.5" style={{ color: "var(--color-gold)" }} />
                <span style={{ color: "var(--color-secondary-text)" }} className="font-sans leading-relaxed">
                  {BUSINESS_INFO.location}
                </span>
              </div>
              <div className="flex items-start space-x-2.5">
                <Phone size={14} className="shrink-0 mt-0.5" style={{ color: "var(--color-gold)" }} />
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="transition-colors font-sans"
                  style={{ color: "var(--color-secondary-text)" }}
                >
                  {BUSINESS_INFO.phoneFormatted}
                </a>
              </div>
              <div className="flex items-start space-x-2.5">
                <Mail size={14} className="shrink-0 mt-0.5" style={{ color: "var(--color-gold)" }} />
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="transition-colors truncate font-sans"
                  style={{ color: "var(--color-secondary-text)" }}
                >
                  {BUSINESS_INFO.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 font-sans text-xs font-light"
          style={{ color: "rgba(168,152,128,0.6)" }}
        >
          <span>{TEXT.footerLegalText.replace("{year}", currentYear.toString())}</span>
          <span style={{ color: "rgba(168,152,128,0.4)" }}>{TEXT.footerLocationText}</span>
        </div>
      </div>

      {/* Floating action panel */}
      <AnimatePresence>
        {showScrollElements && (
          <>
            {/* Call button */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="fixed bottom-6 left-6 z-40"
            >
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center space-x-2 text-xs uppercase tracking-widest font-bold px-5 py-3.5 rounded-sm shadow-2xl border transition-all duration-300 font-sans"
                style={{
                  color: "var(--color-ivory)",
                  background: "rgba(15,12,9,0.9)",
                  backdropFilter: "blur(12px)",
                  borderColor: "rgba(197,151,58,0.3)",
                }}
                aria-label={TEXT.footerCallNowAriaLabel}
              >
                <Phone size={13} fill="currentColor" />
                <span className="hidden sm:inline">{TEXT.footerCallNowLabel}</span>
              </a>
            </motion.div>

            {/* Back to top + WhatsApp */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.4 }}
              className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3 items-end"
            >
              <button
                onClick={handleBackToTop}
                className="p-3 rounded-sm shadow-xl transition-all duration-300 hover:-translate-y-1 border"
                style={{
                  background: "var(--color-card)",
                  borderColor: "rgba(197,151,58,0.25)",
                  color: "var(--color-gold)",
                }}
                aria-label={TEXT.footerBackToTopAriaLabel}
              >
                <ArrowUp size={16} />
              </button>
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-xs uppercase tracking-widest font-bold px-5 py-3.5 rounded-sm shadow-2xl transition-all duration-300 hover:-translate-y-1 font-sans"
                style={{
                  color: "var(--color-bg)",
                  background: "var(--color-gold)",
                  boxShadow: "0 8px 24px rgba(197,151,58,0.3)",
                }}
                aria-label={TEXT.navbarWhatsappAriaLabel}
              >
                <MessageSquare size={14} fill="currentColor" />
                <span>{TEXT.footerWhatsappButtonLabel}</span>
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </footer>
  );
}
