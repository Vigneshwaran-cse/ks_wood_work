/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BUSINESS_INFO } from "../data";
import { TEXT } from "../data/language";
import { MessageSquare, Phone, Mail, MapPin } from "lucide-react";

const contactCards = [
  {
    iconName: "phone",
    title: TEXT.contactCardLabels.phone,
    value: BUSINESS_INFO.phoneFormatted,
    href: `tel:${BUSINESS_INFO.phone}`,
    label: TEXT.contactActionLabels.callNow,
  },
  {
    iconName: "whatsapp",
    title: TEXT.contactCardLabels.whatsapp,
    value: "Chat for a quote",
    href: BUSINESS_INFO.whatsappUrl,
    label: TEXT.contactActionLabels.message,
  },
  {
    iconName: "mail",
    title: TEXT.contactCardLabels.email,
    value: BUSINESS_INFO.email,
    href: `mailto:${BUSINESS_INFO.email}`,
    label: TEXT.contactActionLabels.sendMail,
  },
  {
    iconName: "location",
    title: TEXT.contactCardLabels.location,
    value: BUSINESS_INFO.location,
    href: BUSINESS_INFO.googleMapLink,
    label: TEXT.contactCardLabels.viewMap,
  },
];

function ContactIcon({ iconName }: { iconName: string }) {
  const style = { color: "var(--color-gold)" };
  if (iconName === "phone") return <Phone style={style} size={18} />;
  if (iconName === "whatsapp") return <MessageSquare style={style} size={18} fill="currentColor" />;
  if (iconName === "mail") return <Mail style={style} size={18} />;
  return <MapPin style={style} size={18} />;
}

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 md:py-32 relative overflow-hidden"
      style={{ background: "var(--color-surface)" }}
    >
      <div
        className="absolute bottom-0 left-0 w-96 h-96 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(197,151,58,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20 space-y-4">
          <span
            className="text-[10px] md:text-xs uppercase font-sans tracking-[0.4em] font-semibold"
            style={{ color: "var(--color-gold)" }}
          >
            {TEXT.contactSectionLabel}
          </span>
          <h2
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight"
            style={{ color: "var(--color-ivory)" }}
          >
            {TEXT.contactSectionTitle}
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
            {TEXT.contactSectionDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Contact cards */}
          <div className="lg:col-span-5 space-y-7">
            <div className="grid grid-cols-1 gap-3.5">
              {contactCards.map((card, idx) => (
                <a
                  key={idx}
                  href={card.href}
                  target={card.href.startsWith("http") ? "_blank" : undefined}
                  rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="rounded-sm p-5 flex items-center space-x-4 transition-all duration-300 group border"
                  style={{
                    background: "rgba(31,24,17,0.75)",
                    backdropFilter: "blur(14px)",
                    borderColor: "rgba(197,151,58,0.1)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(197,151,58,0.3)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(197,151,58,0.1)";
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-sm flex items-center justify-center shrink-0 border transition-all duration-500"
                    style={{
                      background: "rgba(197,151,58,0.08)",
                      borderColor: "rgba(197,151,58,0.2)",
                    }}
                  >
                    <ContactIcon iconName={card.iconName} />
                  </div>
                  <div className="text-left space-y-0.5 min-w-0">
                    <span
                      className="text-[10px] uppercase font-medium tracking-wide font-sans"
                      style={{ color: "var(--color-secondary-text)" }}
                    >
                      {card.title}
                    </span>
                    <h4
                      className="text-xs sm:text-sm font-bold font-serif truncate"
                      style={{ color: "var(--color-ivory)" }}
                    >
                      {card.value}
                    </h4>
                    <span
                      className="text-[9px] uppercase tracking-widest font-semibold block pt-0.5 font-sans group-hover:underline"
                      style={{ color: "var(--color-gold)" }}
                    >
                      {card.label} →
                    </span>
                  </div>
                </a>
              ))}
            </div>

            {/* Service area note */}
            <div
              className="rounded-sm p-7 border text-sm font-light leading-relaxed"
              style={{
                background: "rgba(31,24,17,0.75)",
                backdropFilter: "blur(14px)",
                borderColor: "rgba(197,151,58,0.12)",
                color: "var(--color-secondary-text)",
              }}
            >
              <p
                className="font-semibold mb-3 font-serif"
                style={{ color: "var(--color-ivory)" }}
              >
                {TEXT.footerServiceAreaTitle}
              </p>
              <p className="font-sans">{TEXT.footerServiceAreaDescription}</p>
            </div>
          </div>

          {/* Map */}
          <div className="lg:col-span-7">
            <div
              className="rounded-sm overflow-hidden shadow-xl border"
              style={{
                height: "400px",
                borderColor: "rgba(197,151,58,0.15)",
                background: "rgba(31,24,17,0.75)",
                backdropFilter: "blur(14px)",
              }}
            >
              <iframe
                title={TEXT.contactMapTitle}
                src={BUSINESS_INFO.googleMapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(1) invert(0.9) contrast(1.1) sepia(0.3)" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
