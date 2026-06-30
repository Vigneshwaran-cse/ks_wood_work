/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone, MessageSquare } from "lucide-react";
import { BUSINESS_INFO } from "../data";
import { TEXT } from "../data/language";

const NAV_LINKS = TEXT.navLinks;

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Handle shrink on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Tracking active section with IntersectionObserver
  useEffect(() => {
    const observers = NAV_LINKS.map(link => {
      const id = link.href.substring(1);
      const element = document.getElementById(id);
      if (!element) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: "-30% 0px -60% 0px" } // Focused on central viewport
      );

      observer.observe(element);
      return { observer, element };
    });

    return () => {
      observers.forEach(obs => {
        if (obs) {
          obs.observer.unobserve(obs.element);
        }
      });
    };
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const id = href.substring(1);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Navbar height offset
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "py-3 bg-bg/90 backdrop-blur-xl border-b border-gold/15 shadow-lg shadow-black/40"
          : "py-6 bg-bg/95 backdrop-blur-xl border-b border-gold/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleLinkClick(e, "#home")}
          className="flex flex-col select-none group"
        >
          <span className="font-serif text-lg md:text-xl font-bold tracking-[0.25em] text-white group-hover:text-gold transition-colors duration-300">
            {BUSINESS_INFO.name}
          </span>
          <span className="text-[9px] md:text-[10px] tracking-[0.4em] text-gold uppercase -mt-0.5">
            {TEXT.navbarBrandTagline}
          </span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center space-x-8">
          {NAV_LINKS.map((link) => {
            const id = link.href.substring(1);
            const isActive = activeSection === id;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`font-sans text-xs uppercase tracking-widest transition-all duration-300 relative py-1 ${
                  isActive ? "text-gold font-semibold" : "text-secondary-text hover:text-white"
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[1px] bg-gold"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* CTA Contact Buttons */}
        <div className="hidden sm:flex items-center space-x-4">
          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="flex items-center space-x-2 text-[11px] uppercase tracking-wider text-gold hover:text-white border border-gold hover:border-gold-light px-5 py-2.5 rounded-[2px] transition-all duration-300 bg-transparent hover:bg-gold/5 font-semibold"
            aria-label={TEXT.navbarCallAriaLabel}
          >
            <Phone size={13} />
            <span>{TEXT.navbarCallLabel}</span>
          </a>
          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-[11px] uppercase tracking-wider text-black bg-gold hover:bg-gold-light px-5 py-2.5 rounded-[2px] transition-all duration-300 shadow-lg shadow-gold/15 font-semibold"
            aria-label={TEXT.navbarWhatsappAriaLabel}
          >
            <MessageSquare size={13} fill="currentColor" />
            <span>{TEXT.navbarWhatsappLabel}</span>
          </a>
        </div>

        {/* Mobile Hamburger & Dynamic CTA Icons for phones */}
        <div className="flex items-center space-x-3 lg:hidden">
          {/* Direct call icon for phone devices */}
          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="p-2 border border-gold/20 rounded-full text-gold bg-surface/50 sm:hidden"
            aria-label={TEXT.navbarMobileCallIconAriaLabel}
          >
            <Phone size={16} />
          </a>
          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-gold text-black rounded-full sm:hidden shadow-md shadow-gold/20"
            aria-label={TEXT.navbarMobileWhatsappIconAriaLabel}
          >
            <MessageSquare size={16} fill="currentColor" />
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white hover:text-gold transition-colors focus:outline-none"
            aria-label={TEXT.navbarToggleMenuAriaLabel}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden w-full bg-surface border-b border-gold/15 overflow-hidden absolute top-full left-0 right-0 shadow-2xl"
          >
            <div className="px-6 py-8 flex flex-col space-y-5">
              {NAV_LINKS.map((link) => {
                const id = link.href.substring(1);
                const isActive = activeSection === id;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`font-sans text-sm uppercase tracking-widest py-1 block ${
                      isActive ? "text-gold font-bold border-l-2 border-gold pl-3" : "text-secondary-text hover:text-white pl-3"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
              
              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="flex items-center justify-center space-x-2 text-[11px] uppercase tracking-widest text-gold border border-gold py-3.5 rounded-[2px] w-full hover:bg-gold/5 font-semibold"
                  aria-label={TEXT.navbarMobileCallAriaLabel}
                >
                  <Phone size={14} className="text-gold" />
                  <span>{TEXT.navbarMobileCallLabel}</span>
                </a>
                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 text-[11px] uppercase tracking-widest text-black bg-gold font-semibold py-3.5 rounded-[2px] w-full hover:bg-gold-light"
                  aria-label={TEXT.navbarMobileWhatsappAriaLabel}
                >
                  <MessageSquare size={14} fill="currentColor" />
                  <span>{TEXT.navbarMobileWhatsappLabel}</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
