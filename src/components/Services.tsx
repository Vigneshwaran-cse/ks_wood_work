/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SERVICES_DATA, BUSINESS_INFO } from "../data";
import { TEXT } from "../data/language";
import { ServiceItem } from "../types";
import { X, ArrowRight, Check, MessageSquare, Phone } from "lucide-react";
import Icon from "./Icon";

export default function Services() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  // Mouse tilt variables for card hover
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, cardId: string) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left - box.width / 2;
    const y = e.clientY - box.top - box.height / 2;
    
    // Max tilt angles: 10 degrees
    const rX = -(y / (box.height / 2)) * 10;
    const rY = (x / (box.width / 2)) * 10;
    
    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setHoveredCardId(null);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <section id="services" className="py-24 md:py-32 bg-surface relative overflow-hidden">
      {/* Background visual graphics */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-gold/[0.03] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24 space-y-4">
          <span className="text-[10px] md:text-xs uppercase font-sans tracking-[0.4em] text-gold font-semibold">
            {TEXT.aboutServicesTitle}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            {TEXT.servicesSectionTitle}
          </h2>
          <div className="w-16 h-[1px] bg-gold mx-auto my-4" />
          <p className="font-sans text-secondary-text text-sm md:text-base font-light leading-relaxed">
            {TEXT.servicesSectionDescription}
          </p>
        </div>

        {/* Services Grid with 3D Interaction */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => {
            const isHovered = hoveredCardId === service.id;
            
            return (
              <div
                key={service.id}
                onMouseMove={(e) => {
                  setHoveredCardId(service.id);
                  handleMouseMove(e, service.id);
                }}
                onMouseLeave={handleMouseLeave}
                style={{ perspective: 1000 }}
                className="relative"
              >
                <motion.div
                  style={{
                    transformStyle: "preserve-3d",
                    rotateX: isHovered ? rotateX : 0,
                    rotateY: isHovered ? rotateY : 0,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20, mass: 0.5 }}
                  className="bg-card border border-gold/15 hover:border-gold/40 rounded-[2px] overflow-hidden group flex flex-col h-full shadow-lg hover:shadow-2xl hover:shadow-gold/5 transition-colors duration-300"
                >
                  {/* Service Image Header with subtle golden screen */}
                  <div className="h-56 relative overflow-hidden z-0">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 select-none"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                    <div className="absolute inset-0 bg-gold/2 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
                    
                    {/* Float-badge icon */}
                    <div className="absolute top-6 left-6 w-11 h-11 rounded-[2px] bg-bg/95 backdrop-blur border border-gold/25 flex items-center justify-center text-gold z-10">
                      <Icon name={service.iconName} size={18} />
                    </div>
                  </div>

                  {/* Service Details Body */}
                  <div className="p-8 flex flex-col flex-grow space-y-4 justify-between" style={{ transform: "translateZ(30px)" }}>
                    <div className="space-y-3">
                      <h3 className="font-serif text-xl font-bold text-white tracking-wide group-hover:text-gold transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="font-sans text-secondary-text text-sm font-light leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    <div className="pt-4 flex items-center justify-between border-t border-gold/10">
                      <button
                        onClick={() => setSelectedService(service)}
                        className="group flex items-center space-x-2 text-[10px] md:text-xs font-sans uppercase font-semibold tracking-widest text-gold hover:text-white transition-colors duration-300"
                        aria-label={`${TEXT.servicesViewDetailsAriaLabel} ${service.title}`}
                      >
                        <span>{TEXT.servicesViewDetailsLabel}</span>
                        <ArrowRight size={13} className="group-hover:translate-x-1.5 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox / Details Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Dark blur backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", stiffness: 350, damping: 30 }}
              className="relative w-full max-w-4xl bg-card border border-gold/30 rounded-[2px] overflow-hidden shadow-2xl shadow-black max-h-[90vh] flex flex-col lg:flex-row z-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 z-20 p-2.5 rounded-[2px] bg-black/50 text-white hover:text-gold border border-white/10 hover:border-gold/30 transition-colors"
                aria-label={TEXT.servicesCloseDetailsLabel}
              >
                <X size={18} />
              </button>

              {/* Left Side: Rich Graphic Panel */}
              <div className="w-full lg:w-1/2 h-64 lg:h-auto relative">
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-card via-card/10 to-transparent" />
                <div className="absolute bottom-6 left-6 lg:bottom-8 lg:left-8 flex flex-col space-y-1 text-left">
                  <span className="text-[10px] uppercase tracking-widest text-gold font-bold">
                    {TEXT.servicesSignatureQualityLabel}
                  </span>
                  <h4 className="font-serif text-2xl lg:text-3xl font-extrabold text-white">
                    {selectedService.title}
                  </h4>
                </div>
              </div>

              {/* Right Side: Technical Specs & Call To Actions */}
              <div className="w-full lg:w-1/2 p-8 lg:p-10 flex flex-col justify-between overflow-y-auto max-h-[50vh] lg:max-h-none">
                <div className="space-y-6 text-left">
                  <div className="space-y-3">
                    <span className="text-[10px] uppercase font-sans tracking-[0.2em] text-gold/85 font-medium">
                      {TEXT.servicesConstructionTitle}
                    </span>
                    <p className="font-sans text-secondary-text text-sm font-light leading-relaxed">
                      Every order undergoes rigorous validation. {BUSINESS_INFO.founder} oversees the initial timber log inspection at our local Minnathur woodworking facility to guarantee structurally sound grain configurations.
                    </p>
                  </div>

                  {/* Bullet Spec Checklist */}
                  <div className="space-y-3.5">
                    <h5 className="text-[11px] uppercase tracking-widest font-semibold text-white">
                      {TEXT.servicesTechnicalBenchmarksLabel}
                    </h5>
                    <ul className="space-y-2.5">
                      {selectedService.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start space-x-3 text-xs text-secondary-text">
                          <span className="p-0.5 rounded-[2px] bg-gold/10 border border-gold/30 text-gold mt-0.5 shrink-0">
                            <Check size={10} />
                          </span>
                          <span className="font-light leading-relaxed">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Booking & Enquiries Quick Links */}
                <div className="pt-8 border-t border-gold/10 mt-8 flex flex-col sm:flex-row gap-3">
                  <a
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="flex items-center justify-center space-x-2 text-xs uppercase tracking-widest text-white border border-gold/30 hover:bg-gold/5 py-4 px-6 rounded-[2px] w-full text-center transition-all duration-300"
                  >
                    <Phone size={13} className="text-gold" />
                    <span>{TEXT.servicesDirectCallLabel}</span>
                  </a>
                  <a
                    href={BUSINESS_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 text-xs uppercase tracking-widest text-black bg-gold hover:bg-gold-light font-bold py-4 px-6 rounded-[2px] w-full text-center transition-all duration-300 shadow-lg shadow-gold/20"
                  >
                    <MessageSquare size={13} fill="currentColor" />
                    <span>{TEXT.servicesQuoteLabel}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
