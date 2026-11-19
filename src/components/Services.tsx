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
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, id: string) => {
    const box = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - box.left - box.width / 2;
    const y = e.clientY - box.top - box.height / 2;
    setRotateX(-(y / (box.height / 2)) * 9);
    setRotateY((x / (box.width / 2)) * 9);
  };

  const handleMouseLeave = () => {
    setHoveredId(null);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <section
      id="services"
      className="py-24 md:py-32 relative overflow-hidden"
      style={{ background: "var(--color-bg)" }}
    >
      {/* Warm glow */}
      <div
        className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(197,151,58,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24 space-y-4">
          <span
            className="text-[10px] md:text-xs uppercase font-sans tracking-[0.4em] font-semibold"
            style={{ color: "var(--color-gold)" }}
          >
            {TEXT.aboutServicesTitle}
          </span>
          <h2
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight"
            style={{ color: "var(--color-ivory)" }}
          >
            {TEXT.servicesSectionTitle}
          </h2>
          <div
            className="w-12 h-[1px] mx-auto"
            style={{
              background: "linear-gradient(90deg, transparent, var(--color-gold), transparent)",
            }}
          />
          <p
            className="font-sans text-sm md:text-base font-light leading-relaxed"
            style={{ color: "var(--color-secondary-text)" }}
          >
            {TEXT.servicesSectionDescription}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {SERVICES_DATA.map((service) => {
            const isHov = hoveredId === service.id;
            return (
              <div
                key={service.id}
                onMouseMove={(e) => { setHoveredId(service.id); handleMouseMove(e, service.id); }}
                onMouseLeave={handleMouseLeave}
                style={{ perspective: 1000 }}
                className="relative"
              >
                <motion.div
                  style={{
                    transformStyle: "preserve-3d",
                    rotateX: isHov ? rotateX : 0,
                    rotateY: isHov ? rotateY : 0,
                    background: "var(--color-card)",
                    borderColor: isHov ? "rgba(197,151,58,0.4)" : "rgba(197,151,58,0.1)",
                    boxShadow: isHov
                      ? "0 20px 60px rgba(0,0,0,0.5), 0 4px 16px rgba(197,151,58,0.08)"
                      : "0 4px 16px rgba(0,0,0,0.3)",
                  }}
                  transition={{ type: "spring", stiffness: 280, damping: 22, mass: 0.5 }}
                  className="rounded-sm overflow-hidden group flex flex-col h-full border transition-colors duration-300"
                >
                  {/* Image */}
                  <div className="h-52 relative overflow-hidden z-0">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 select-none"
                      style={{ transform: isHov ? "scale(1.08)" : "scale(1)" }}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(31,24,17,0.9) 0%, rgba(31,24,17,0.2) 60%, transparent 100%)",
                      }}
                    />
                    {/* Wood grain overlay */}
                    <div
                      className="absolute inset-0 opacity-10 pointer-events-none wood-texture"
                    />

                    {/* Icon badge */}
                    <div
                      className="absolute top-5 left-5 w-10 h-10 rounded-sm flex items-center justify-center z-10 border backdrop-blur-sm"
                      style={{
                        background: "rgba(15,12,9,0.9)",
                        borderColor: "rgba(197,151,58,0.3)",
                        color: "var(--color-gold)",
                      }}
                    >
                      <Icon name={service.iconName} size={17} />
                    </div>
                  </div>

                  {/* Body */}
                  <div
                    className="p-7 flex flex-col flex-grow space-y-4 justify-between"
                    style={{ transform: "translateZ(28px)" }}
                  >
                    <div className="space-y-2.5">
                      {service.tamilTitle && (
                        <span
                          className="text-[11px] font-sans font-medium px-2.5 py-1 rounded-sm border inline-block"
                          style={{
                            color: "var(--color-gold)",
                            borderColor: "rgba(197,151,58,0.2)",
                            background: "rgba(197,151,58,0.06)",
                          }}
                        >
                          {service.tamilTitle}
                        </span>
                      )}
                      <h3
                        className="font-serif text-xl font-bold tracking-wide transition-colors duration-300"
                        style={{ color: isHov ? "var(--color-gold)" : "var(--color-ivory)" }}
                      >
                        {service.title}
                      </h3>
                      <p
                        className="font-sans text-sm font-light leading-relaxed"
                        style={{ color: "var(--color-secondary-text)" }}
                      >
                        {service.description}
                      </p>
                    </div>

                    <div
                      className="pt-4 flex items-center justify-between border-t"
                      style={{ borderColor: "rgba(197,151,58,0.1)" }}
                    >
                      <button
                        onClick={() => setSelectedService(service)}
                        className="group flex items-center space-x-2 text-[10px] md:text-xs font-sans uppercase font-semibold tracking-widest transition-colors duration-300"
                        style={{ color: "var(--color-gold)" }}
                        aria-label={`${TEXT.servicesViewDetailsAriaLabel} ${service.title}`}
                      >
                        <span>{TEXT.servicesViewDetailsLabel}</span>
                        <ArrowRight
                          size={12}
                          className="group-hover:translate-x-1.5 transition-transform duration-300"
                        />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Service detail modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0"
              style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(12px)" }}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", stiffness: 350, damping: 30 }}
              className="relative w-full max-w-4xl rounded-sm overflow-hidden shadow-2xl max-h-[90vh] flex flex-col lg:flex-row z-10 border"
              style={{
                background: "var(--color-card)",
                borderColor: "rgba(197,151,58,0.25)",
              }}
            >
              {/* Close */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-5 right-5 z-20 p-2.5 rounded-sm border transition-colors"
                style={{
                  background: "rgba(0,0,0,0.5)",
                  color: "var(--color-ivory)",
                  borderColor: "rgba(255,255,255,0.1)",
                }}
                aria-label={TEXT.servicesCloseDetailsLabel}
              >
                <X size={18} />
              </button>

              {/* Image panel */}
              <div className="w-full lg:w-1/2 h-64 lg:h-auto relative">
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(31,24,17,0.9) 0%, transparent 60%)",
                  }}
                />
                <div className="absolute bottom-6 left-6 lg:bottom-8 lg:left-8 flex flex-col space-y-1.5 text-left">
                  <div className="flex items-center gap-2">
                    <span
                      className="text-[10px] uppercase tracking-widest font-bold font-sans"
                      style={{ color: "var(--color-gold)" }}
                    >
                      {TEXT.servicesSignatureQualityLabel}
                    </span>
                    {selectedService.tamilTitle && (
                      <span
                        className="text-[10px] font-sans px-2 py-0.5 rounded-sm border"
                        style={{
                          color: "var(--color-gold)",
                          borderColor: "rgba(197,151,58,0.3)",
                          background: "rgba(15,12,9,0.8)",
                        }}
                      >
                        {selectedService.tamilTitle}
                      </span>
                    )}
                  </div>
                  <h4
                    className="font-serif text-2xl lg:text-3xl font-extrabold"
                    style={{ color: "var(--color-ivory)" }}
                  >
                    {selectedService.title}
                  </h4>
                </div>
              </div>

              {/* Detail panel */}
              <div className="w-full lg:w-1/2 p-8 lg:p-10 flex flex-col justify-between overflow-y-auto max-h-[50vh] lg:max-h-none">
                <div className="space-y-6 text-left">
                  <div className="space-y-3">
                    <span
                      className="text-[10px] uppercase font-sans tracking-[0.2em] font-medium"
                      style={{ color: "rgba(197,151,58,0.8)" }}
                    >
                      {TEXT.servicesConstructionTitle}
                    </span>
                    <p
                      className="font-sans text-sm font-light leading-relaxed"
                      style={{ color: "var(--color-secondary-text)" }}
                    >
                      {selectedService.description}
                    </p>
                  </div>

                  <div className="space-y-3.5">
                    <h5
                      className="text-[11px] uppercase tracking-widest font-semibold font-sans"
                      style={{ color: "var(--color-ivory)" }}
                    >
                      {TEXT.servicesTechnicalBenchmarksLabel}
                    </h5>
                    <ul className="space-y-2.5">
                      {selectedService.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start space-x-3 text-xs font-sans">
                          <span
                            className="p-0.5 rounded-sm border mt-0.5 shrink-0"
                            style={{
                              background: "rgba(197,151,58,0.1)",
                              borderColor: "rgba(197,151,58,0.3)",
                              color: "var(--color-gold)",
                            }}
                          >
                            <Check size={10} />
                          </span>
                          <span
                            className="font-light leading-relaxed"
                            style={{ color: "var(--color-secondary-text)" }}
                          >
                            {detail}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div
                  className="pt-8 border-t mt-8 flex flex-col sm:flex-row gap-3"
                  style={{ borderColor: "rgba(197,151,58,0.1)" }}
                >
                  <a
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="flex items-center justify-center space-x-2 text-xs uppercase tracking-widest py-4 px-6 rounded-sm w-full text-center transition-all duration-300 border font-sans font-semibold"
                    style={{
                      color: "var(--color-ivory)",
                      borderColor: "rgba(197,151,58,0.3)",
                    }}
                  >
                    <Phone size={13} style={{ color: "var(--color-gold)" }} />
                    <span>{TEXT.servicesDirectCallLabel}</span>
                  </a>
                  <a
                    href={BUSINESS_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 text-xs uppercase tracking-widest font-bold py-4 px-6 rounded-sm w-full text-center transition-all duration-300 font-sans"
                    style={{
                      color: "var(--color-bg)",
                      background: "var(--color-gold)",
                      boxShadow: "0 4px 16px rgba(197,151,58,0.25)",
                    }}
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
