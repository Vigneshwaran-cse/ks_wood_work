/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BUSINESS_INFO, SERVICES_DATA } from "../data";
import { TEXT } from "../data/language";
import { 
  Phone, 
  MessageSquare, 
  ArrowUp, 
  Facebook, 
  Instagram, 
  Youtube, 
  MapPin, 
  Mail
} from "lucide-react";

export default function Footer() {
  const [showScrollElements, setShowScrollElements] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollElements(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const handleQuickLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
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

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-gold/10 pt-20 pb-8 relative overflow-hidden text-left">
      {/* Upper Subtle Border Glow line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-14 lg:gap-24 pb-16 border-b border-gold/10">
          
          {/* Brand Info (4 spans) */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#home" onClick={(e) => handleQuickLinkClick(e, "home")} className="flex flex-col select-none">
              <span className="font-serif text-xl font-bold tracking-[0.25em] text-white">
                {BUSINESS_INFO.name}
              </span>
              <span className="text-[10px] tracking-[0.4em] text-gold uppercase mt-0.5">
                {TEXT.footerBrandCaption}
              </span>
            </a>
            {/* Social Icons */}
          </div>

          {/* Quick Links (3 spans) */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="font-serif text-sm font-bold uppercase tracking-widest text-white border-b border-gold/10 pb-2">
              {TEXT.footerQuickLinksTitle}
            </h4>
            <ul className="space-y-3 font-sans text-xs uppercase tracking-widest text-secondary-text">
              {TEXT.navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleQuickLinkClick(e, link.href.substring(1))}
                    className="hover:text-gold transition-colors block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Services (3 spans) */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="font-serif text-sm font-bold uppercase tracking-widest text-white border-b border-gold/10 pb-2">
              {TEXT.servicesSectionTitle}
            </h4>
            <ul className="space-y-3 font-sans text-xs uppercase tracking-widest text-secondary-text">
              {SERVICES_DATA.map((srv) => (
                <li key={srv.id}>
                  <a
                    href="#services"
                    onClick={(e) => handleQuickLinkClick(e, "services")}
                    className="hover:text-gold transition-colors block"
                  >
                    {srv.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Office Desk (3 spans) */}
          <div className="lg:col-span-3 space-y-6 text-xs text-secondary-text font-light">
            <h4 className="font-serif text-sm font-bold uppercase tracking-widest text-white border-b border-gold/10 pb-2">
            
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-gold shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {BUSINESS_INFO.location}
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <Phone size={16} className="text-gold shrink-0 mt-0.5" />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-gold transition-colors">
                  {BUSINESS_INFO.phoneFormatted}
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Mail size={16} className="text-gold shrink-0 mt-0.5" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-gold transition-colors truncate">
                  {BUSINESS_INFO.email}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Lower Copyright Row */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-secondary-text/70 font-light space-y-4 md:space-y-0">
          <span>
            {TEXT.footerLegalText.replace("{year}", currentYear.toString())}
          </span>
          <div className="flex items-center space-x-4">
            <span>{TEXT.footerLocationText}</span>
          </div>
        </div>

      </div>

      {/* FLOATING ACTION PANELS FOR CELL PHONES & MOBILE DESKTOP */}
      <AnimatePresence>
        {showScrollElements && (
          <>
            {/* Floating Left: Direct Phone Call Button */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="fixed bottom-6 left-6 z-40 block"
            >
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center space-x-2 text-xs uppercase tracking-widest text-white bg-black/80 hover:bg-gold hover:text-black border border-gold/30 hover:border-gold px-5 py-3.5 rounded-[2px] shadow-2xl backdrop-blur-md transition-all duration-300"
                aria-label={TEXT.footerCallNowAriaLabel}
              >
                <Phone size={13} fill="currentColor" />
                <span className="hidden sm:inline font-bold">{TEXT.footerCallNowLabel}</span>
              </a>
            </motion.div>

            {/* Floating Right Combo: Back To Top Above WhatsApp */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.4 }}
              className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3 items-end"
            >
              {/* Back To Top Button */}
              <button
                onClick={handleBackToTop}
                className="p-3 bg-card border border-gold/25 text-gold hover:bg-gold hover:text-black rounded-[2px] shadow-xl shadow-black/40 transition-all duration-300 hover:-translate-y-1 focus:outline-none"
                aria-label={TEXT.footerBackToTopAriaLabel}
              >
                <ArrowUp size={16} />
              </button>

              {/* Large Floating WhatsApp Button */}
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-xs uppercase tracking-widest text-black bg-gold hover:bg-gold-light px-5 py-3.5 rounded-[2px] shadow-2xl shadow-gold/20 font-bold transition-all duration-300 hover:-translate-y-1"
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
