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

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observers = NAV_LINKS.map((link) => {
      const id = link.href.substring(1);
      const element = document.getElementById(id);
      if (!element) return null;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: "-30% 0px -60% 0px" }
      );
      observer.observe(element);
      return { observer, element };
    });
    return () => observers.forEach((obs) => obs && obs.observer.unobserve(obs.element));
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const id = href.substring(1);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.scrollY - 80,
        behavior: "smooth",
      });
    }
  };

  const navBg = isScrolled
    ? "rgba(15,12,9,0.95)"
    : "rgba(15,12,9,0.85)";
  const borderColor = isScrolled
    ? "rgba(197,151,58,0.18)"
    : "rgba(197,151,58,0.08)";

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        padding: isScrolled ? "10px 0" : "18px 0",
        background: navBg,
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: `1px solid ${borderColor}`,
        boxShadow: isScrolled ? "0 4px 24px rgba(0,0,0,0.5)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, "#home")}
          className="flex flex-col select-none group"
        >
          <span
            className="font-serif text-lg md:text-xl font-bold tracking-[0.2em] transition-colors duration-300"
            style={{ color: "var(--color-ivory)" }}
          >
            {BUSINESS_INFO.name}
          </span>
          <span
            className="text-[9px] md:text-[10px] tracking-[0.4em] uppercase -mt-0.5 font-sans"
            style={{ color: "var(--color-gold)" }}
          >
            {TEXT.navbarBrandTagline}
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center space-x-8">
          {NAV_LINKS.map((link) => {
            const id = link.href.substring(1);
            const isActive = activeSection === id;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="font-sans text-xs uppercase tracking-widest transition-all duration-300 relative py-1"
                style={{ color: isActive ? "var(--color-gold)" : "var(--color-secondary-text)" }}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[1px]"
                    style={{ background: "var(--color-gold)" }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden sm:flex items-center space-x-3">
          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="flex items-center space-x-2 text-[11px] uppercase tracking-wider font-semibold px-4 py-2.5 rounded-sm border transition-all duration-300 font-sans"
            style={{
              color: "var(--color-gold)",
              borderColor: "rgba(197,151,58,0.35)",
            }}
            aria-label={TEXT.navbarCallAriaLabel}
          >
            <Phone size={13} />
            <span>{TEXT.navbarCallLabel}</span>
          </a>
          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-[11px] uppercase tracking-wider font-semibold px-4 py-2.5 rounded-sm transition-all duration-300 font-sans"
            style={{
              color: "var(--color-bg)",
              background: "var(--color-gold)",
              boxShadow: "0 4px 16px rgba(197,151,58,0.2)",
            }}
            aria-label={TEXT.navbarWhatsappAriaLabel}
          >
            <MessageSquare size={13} fill="currentColor" />
            <span>{TEXT.navbarWhatsappLabel}</span>
          </a>
        </div>

        {/* Mobile icons + hamburger */}
        <div className="flex items-center space-x-3 lg:hidden">
          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="p-2 border rounded-full sm:hidden"
            style={{
              color: "var(--color-gold)",
              borderColor: "rgba(197,151,58,0.25)",
              background: "rgba(31,24,17,0.5)",
            }}
            aria-label={TEXT.navbarMobileCallAriaLabel}
          >
            <Phone size={16} />
          </a>
          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full sm:hidden shadow-md"
            style={{
              color: "var(--color-bg)",
              background: "var(--color-gold)",
              boxShadow: "0 2px 8px rgba(197,151,58,0.3)",
            }}
            aria-label={TEXT.navbarMobileWhatsappAriaLabel}
          >
            <MessageSquare size={16} fill="currentColor" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 transition-colors"
            style={{ color: "var(--color-ivory)" }}
            aria-label={TEXT.navbarToggleMenuAriaLabel}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden overflow-hidden absolute top-full left-0 right-0 shadow-2xl"
            style={{
              background: "rgba(23,18,13,0.98)",
              backdropFilter: "blur(16px)",
              borderBottom: "1px solid rgba(197,151,58,0.15)",
            }}
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
                    className="font-sans text-sm uppercase tracking-widest py-1 block border-l-2 pl-3 transition-all duration-200"
                    style={{
                      color: isActive ? "var(--color-gold)" : "var(--color-secondary-text)",
                      borderColor: isActive ? "var(--color-gold)" : "transparent",
                      fontWeight: isActive ? 600 : 400,
                    }}
                  >
                    {link.label}
                  </a>
                );
              })}
              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="flex items-center justify-center space-x-2 text-[11px] uppercase tracking-widest font-semibold py-3.5 rounded-sm w-full border font-sans"
                  style={{
                    color: "var(--color-gold)",
                    borderColor: "rgba(197,151,58,0.4)",
                  }}
                  aria-label={TEXT.navbarMobileCallAriaLabel}
                >
                  <Phone size={14} />
                  <span>{TEXT.navbarMobileCallLabel}</span>
                </a>
                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 text-[11px] uppercase tracking-widest font-semibold py-3.5 rounded-sm w-full font-sans"
                  style={{
                    color: "var(--color-bg)",
                    background: "var(--color-gold)",
                  }}
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
