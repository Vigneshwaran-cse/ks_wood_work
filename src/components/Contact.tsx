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
    label: TEXT.contactActionLabels.callNow
  },
  {
    iconName: "whatsapp",
    title: TEXT.contactCardLabels.whatsapp,
    value: "Chat for estimates",
    href: BUSINESS_INFO.whatsappUrl,
    label: TEXT.contactActionLabels.message
  },
  {
    iconName: "mail",
    title: TEXT.contactCardLabels.email,
    value: BUSINESS_INFO.email,
    href: `mailto:${BUSINESS_INFO.email}`,
    label: TEXT.contactActionLabels.sendMail
  },
  {
    iconName: "location",
    title: TEXT.contactCardLabels.location,
    value: BUSINESS_INFO.location,
    href: BUSINESS_INFO.googleMapLink,
    label: TEXT.contactCardLabels.viewMap
  }
];

function Icon({ iconName }: { iconName: string }) {
  if (iconName === "phone") return <Phone className="text-gold" size={18} />;
  if (iconName === "whatsapp") return <MessageSquare className="text-gold" size={18} fill="currentColor" />;
  if (iconName === "mail") return <Mail className="text-gold" size={18} />;
  return <MapPin className="text-gold" size={18} />;
}

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-bg relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20 space-y-4">
          <span className="text-[10px] md:text-xs uppercase font-sans tracking-[0.4em] text-gold font-semibold">
            {TEXT.contactSectionLabel}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            
          </h2>
          <div className="w-16 h-[1px] bg-gold mx-auto my-2" />
          <p className="font-sans text-secondary-text text-sm md:text-base font-light leading-relaxed">
            {TEXT.contactSectionDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 space-y-8">
            <div className="grid grid-cols-1 gap-4">
              {contactCards.map((card, idx) => (
                <a
                  key={idx}
                  href={card.href}
                  target={card.href.startsWith("http") ? "_blank" : undefined}
                  rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="glass-panel p-6 rounded-[2px] flex items-center space-x-4 hover:border-gold/30 hover:bg-card/40 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-[2px] bg-gold/5 border border-gold/20 flex items-center justify-center group-hover:bg-gold group-hover:text-black transition-all duration-500 shrink-0">
                    <Icon iconName={card.iconName} />
                  </div>
                  <div className="text-left space-y-0.5 min-w-0">
                    <span className="text-[10px] uppercase text-secondary-text font-medium tracking-wide">
                      {card.title}
                    </span>
                    <h4 className="text-xs sm:text-sm font-bold text-white font-serif truncate">
                      {card.value}
                    </h4>
                    <span className="text-[9px] text-gold uppercase tracking-widest font-semibold block pt-0.5 group-hover:underline">
                      {card.label} →
                    </span>
                  </div>
                </a>
              ))}
            </div>

            <div className="glass-panel rounded-[2px] p-8 bg-card/40 border border-gold/15 text-sm text-secondary-text leading-relaxed">
              <p className="text-white font-semibold mb-4">{TEXT.footerServiceAreaTitle}</p>
              <p>
                {TEXT.footerServiceAreaDescription}
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="glass-panel rounded-[2px] overflow-hidden shadow-xl aspect-video w-full h-80 md:h-[420px]">
              <iframe
                title={TEXT.contactMapTitle}
                src={BUSINESS_INFO.googleMapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(1) invert(0.9) contrast(1.2)" }}
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
