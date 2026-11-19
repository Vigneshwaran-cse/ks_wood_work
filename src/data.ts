/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  WhyChooseUsItem, 
  ServiceItem, 
  GalleryItem, 
  WorkingStep, 
  StatisticItem, 
  TestimonialItem, 
  FAQItem 
} from "./types";

export const BUSINESS_INFO = {
  name: "K.S WOOD WORK",
  shortName: "K.S WOOD",
  founder: "Kandhasamy",
  founderExperience: "25+ Years of Woodworking Legacy",
  location: "Minnathur, Tamil Nadu, India",
  phone: "+91 8098066816",
  phoneFormatted: "+91 8098066816",
  email: "kandhasamy7619@gmail.com",
  whatsappText: "Hello K.S Wood Work, I would like to get a premium quote for custom woodworking.",
  whatsappUrl: "https://wa.me/919360443422?text=Hello%20K.S%20Wood%20Work%2C%20I%20am%20interested%20in%20your%20premium%20custom%20woodworking%20services.%20Please%20share%20your%20latest%20designs.",
  googleMapEmbedUrl: "https://maps.google.com/maps?width=600&height=400&hl=en&q=minnathur&t=&z=15&ie=UTF8&iwloc=B&output=embed", // Centered near Minnathur/Kanchipuram area
  googleMapLink: "https://maps.app.goo.gl/STcJghkmCQjRUECJ9"
};

export const WHY_CHOOSE_US_DATA: WhyChooseUsItem[] = [
  {
    id: "wc-1",
    title: "Master Craftsmanship",
    description: "Led by Kandhasamy, our artisans bring over 25 years of hand-carving expertise, blending traditional joinery with precise modern geometry.",
    iconName: "Hammer"
  },
  {
    id: "wc-2",
    title: "A-Grade Timber Selection",
    description: "We work exclusively with hand-selected, kiln-seasoned timber including Nilambur Teakwood, Indian Rosewood, rich Padauk, and Mahogany.",
    iconName: "FlameKindling"
  },
  {
    id: "wc-3",
    title: "Bespoke 3D Engineering",
    description: "Every piece is designed specifically for your space. We provide customized sketches and layouts to guarantee a flawless architectural fit.",
    iconName: "Compass"
  },
  {
    id: "wc-4",
    title: "Multi-Generation Durability",
    description: "Using advanced anti-termite treatment and elite moisture-sealing PU finishes, our woodwork is crafted to endure beautifully for generations.",
    iconName: "ShieldCheck"
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "service-doors",
    title: "Door Fitting & Installation",
    tamilTitle: "கதவு பொருத்துதல்",
    description: "Reliable timber door installation for main entrances, bedroom doors, and service entries using solid wood and durable fixtures.",
    details: [
      "Solid wood and seasoned hardwood door frames",
      "Sturdy brass or stainless steel hinges and locking hardware",
      "Precise on-site plumb and square alignment",
      "Natural wood polish, teak stain, or protective PU finish"
    ],
    image: new URL('./components/img/HomeEntrance.jpeg', import.meta.url).href,
    iconName: "DoorOpen"
  },
  {
    id: "service-windows",
    title: "Window Fitting & Frames",
    tamilTitle: "ஜன்னல் பொருத்துதல்",
    description: "Fitted wooden window frames and shutters tailored for ventilation, privacy, and lasting weather resistance in modern and traditional homes.",
    details: [
      "Custom-sized wood window frames and sills",
      "Tight-fitting weather-sealed shutters",
      "Durable latching hardware and safety grilles integration",
      "Protective varnish or polish matching interior decor"
    ],
    image: new URL('./components/img/Window.jpeg', import.meta.url).href,
    iconName: "Window"
  },
  {
    id: "service-cupboards",
    title: "Custom Wardrobes & Cupboards",
    tamilTitle: "மர அலமாரி வேலை",
    description: "Fitted bedroom wardrobes, storage cupboards, and shelving units built to maximize room space with strong, durable wooden joinery.",
    details: [
      "Built-in wardrobe units customized to room dimensions",
      "Smooth sliding or hinged shutters with quality hardware",
      "Internal partitions for clothing, linens, and accessories",
      "Seasoned wood and durable commercial plywood construction"
    ],
    image: new URL('./components/img/Wardrobe.jpeg', import.meta.url).href,
    iconName: "Columns"
  },
  {
    id: "service-repairs",
    title: "Wood Repair & Restoration",
    tamilTitle: "பழுதுபார்க்கும் சேவை",
    description: "Careful repair and restoration for loose doors, sticking windows, damaged cupboards, chairs, tables, and worn wooden surfaces.",
    details: [
      "Fix loose mortise-tenon joints and broken frames",
      "Replace decayed or damaged timber sections",
      "Plane and re-align sticky doors and window shutters",
      "Re-tighten and upgrade worn hinges, latches, and drawer slides"
    ],
    image: "https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?auto=format&fit=crop&w=800&q=80",
    iconName: "Tool"
  },
  {
    id: "service-fittings",
    title: "Interior Wood Paneling & Trim",
    tamilTitle: "உள்துறை மர வேலை",
    description: "Architectural interior details including wall paneling, skirting boards, TV units, display ledges, and custom wooden trim work.",
    details: [
      "Custom TV wall units, display cabinets, and shelving",
      "Wooden skirting boards and ceiling trims",
      "Handcrafted dining tables and custom wooden furniture",
      "Clean bevels and neat joint detailing for seamless walls"
    ],
    image: new URL('./components/img/Table Chairs.jpeg', import.meta.url).href,
    iconName: "Layout"
  },
  {
    id: "service-carpentry",
    title: "Complete Home Carpentry",
    tamilTitle: "வீட்டு மர வேலைகள்",
    description: "Full residential carpentry services for renovations and new constructions — from framing to custom shrines and finish fittings.",
    details: [
      "Custom Pooja shrines (மண்டபம்) and decorative woodwork",
      "Complete timber framing and structural woodwork",
      "Comprehensive room-by-room wood fittings",
      "On-site finishing, sanding, and final quality inspection"
    ],
    image: new URL('./components/img/Shrine.jpeg', import.meta.url).href,
    iconName: "Home"
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Solid Teak Main Entrance Door",
    category: "doors",
    image: new URL('./components/img/HomeEntrance.jpeg', import.meta.url).href,
    description: "Sturdy front entrance door installed with hand-fitted brass hardware and durable weather sealing."
  },
  {
    id: "gal-2",
    title: "Fitted Wooden Window Shutters",
    category: "windows",
    image: new URL('./components/img/Window.jpeg', import.meta.url).href,
    description: "Custom wooden window frames and glazed shutters built for natural ventilation and clean sightlines."
  },
  {
    id: "gal-3",
    title: "Floor-to-Ceiling Wardrobe Unit",
    category: "cupboards",
    image: new URL('./components/img/Wardrobe.jpeg', import.meta.url).href,
    description: "Built-in bedroom storage with polished timber finish, internal clothing sections, and smooth hinges."
  },
  {
    id: "gal-4",
    title: "Handcrafted Traditional Pooja Mandir",
    category: "interiors",
    image: new URL('./components/img/Shrine.jpeg', import.meta.url).href,
    description: "Detailed custom timber shrine with ornamental carving, storage drawer, and rich natural polish."
  },
  {
    id: "gal-5",
    title: "Furniture Repair & Surface Restoration",
    category: "repairs",
    image: "https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?auto=format&fit=crop&w=800&q=80",
    description: "Precision joinery repair, loose dowel reinforcement, and surface refinishing for wooden furniture."
  },
  {
    id: "gal-6",
    title: "Solid Timber Dining Table & Chairs",
    category: "interiors",
    image: new URL('./components/img/Table Chairs.jpeg', import.meta.url).href,
    description: "Handmade solid wood dining set with mortise and tenon joinery, comfortable seating, and satin luster."
  },
  {
    id: "gal-7",
    title: "Hardwood Window Frame Replacement",
    category: "windows",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    description: "Structural window frame renewal with treated hardwood, neat reveals, and clean exterior sealant."
  },
  {
    id: "gal-8",
    title: "Modular Bedroom Closet Storage",
    category: "cupboards",
    image: new URL('./components/img/Wardrobe.jpeg', import.meta.url).href,
    description: "Tailored wardrobe compartments and wooden drawers built to maximize storage space."
  },
  {
    id: "gal-9",
    title: "Handcrafted Teak Accent Chair",
    category: "interiors",
    image: new URL('./components/img/chair.jpeg', import.meta.url).href,
    description: "Custom wooden accent chair with ergonomic curved backrest, clean joinery, and durable frame."
  },
  {
    id: "gal-10",
    title: "Entrance Door Architrave & Frame",
    category: "doors",
    image: new URL('./components/img/HomeEntrance.jpeg', import.meta.url).href,
    description: "Complete entrance carpentry including solid frame installation, architrave molding, and heavy-duty locks."
  }
];



export const STATS_DATA: StatisticItem[] = [
  {
    id: "stat-1",
    value: 25,
    suffix: "+",
    label: "Years of Master Legacy",
    description: "Delivering bespoke high-end carpentry since 2001."
  },
  {
    id: "stat-2",
    value: 1200,
    suffix: "+",
    label: "Bespoke Projects Completed",
    description: "Luxury villas, premium residences, and commercial venues."
  },
  {
    id: "stat-3",
    value: 50,
    suffix: "+",
    label: "Artisans & Craftsmen",
    description: "Highly skilled traditional wood carvers and builders."
  },
  {
    id: "stat-4",
    value: 100,
    suffix: "%",
    label: "Custom Tailored Fit",
    description: "Zero pre-fabricated modules. Fully unique custom designs."
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "t-1",
    name: "Mr. Rajesh Kuruvilla",
    role: "Luxury Villa Owner",
    content: "Kandhasamy and his team are true artists. They hand-carved our massive teak double main door. It is a striking masterpiece that becomes the immediate talking point for anyone visiting our home. The quality of wood and precision are unparalleled.",
    rating: 5,
    location: "Pudukkottai, TN",
    avatar: "RK"
  },
  {
    id: "t-2",
    name: "Architect Priya Sharma",
    role: "Lead Interior Designer",
    content: "For all my high-end villa projects in Chennai and Minnathur, K.S WOOD WORK is my exclusive carpentry partner. Their attention to structural joinery detail, beautiful natural staining, and absolute promptness in delivery is highly commendable.",
    rating: 5,
    location: "Chennai, India",
    avatar: "PS"
  },
  {
    id: "t-3",
    name: "Mr. Anandhan Gopalan",
    role: "New House Owner",
    content: "We ordered our entire home's interior woodwork—doors, premium walk-in wardrobes, a backlit traditional Pooja Mandir, and a grand dining table. The wood finish is ultra-luxurious, and they executed everything perfectly matching our style.",
    rating: 5,
    location: "Minnathur, India",
    avatar: "AG"
  },
  {
    id: "t-4",
    name: "Mrs. Shalini Reddy",
    role: "Renovation Customer",
    content: "The live-edge solid block dining table they custom-crafted is the center of attention in our dining hall. The gloss-retardant high-end finish resists warm cups perfectly. The team is professional, extremely skilled, and courteous.",
    rating: 5,
    location: "Vellore, India",
    avatar: "SR"
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: "faq-1",
    question: "What types of wood do you use?",
    answer: "We work with well-seasoned, locally sourced timber suited to the job — solid teak and hardwood for door frames and main doors, good-quality plywood cores for wardrobes, and treated timber for window frames. The specific wood selected depends on your requirements and budget."
  },
  {
    id: "faq-2",
    question: "Do you visit the site before starting work?",
    answer: "Yes. For door fitting, wardrobe builds, and other larger jobs, Kandhasamy or his team will visit the site to take accurate measurements and understand the space before any work begins. Contact us by phone or WhatsApp to arrange a visit."
  },
  {
    id: "faq-3",
    question: "Can you match an existing design or follow a plan?",
    answer: "Yes. If you have a design in mind, a photo reference, or a plan from an architect or interior designer, share it with us and we will work to match it as closely as possible in the actual timber."
  },
  {
    id: "faq-4",
    question: "How do you protect woodwork against termites and moisture?",
    answer: "We use seasoned timber and apply appropriate anti-termite treatment and sealant finishes as standard practice. The specific treatment depends on the type of work and the materials used."
  },
  {
    id: "faq-5",
    question: "How long does the work typically take?",
    answer: "A single door fitting or repair is usually completed in one visit. Custom wardrobes or a set of windows generally take one to two weeks depending on complexity and materials. Full interior woodwork for a home is discussed and scheduled individually."
  }
];

export const WORKING_PROCESS_DATA: WorkingStep[] = [
  {
    id: "step-1",
    stepNumber: "01",
    title: "Contact & Enquiry",
    description: "Call or send a WhatsApp message describing what you need — a door fitting, new wardrobe, window repair, or full home carpentry. We will confirm availability and arrange a visit.",
    iconName: "MessageSquare"
  },
  {
    id: "step-2",
    stepNumber: "02",
    title: "Site Visit & Measurement",
    description: "Kandhasamy or his team visits your home to take accurate on-site measurements, understand the space, and agree on materials, design, and a fair quote.",
    iconName: "Ruler"
  },
  {
    id: "step-3",
    stepNumber: "03",
    title: "Material Selection & Fabrication",
    description: "Good-quality seasoned timber and hardware are selected for the job. The carpentry work is crafted carefully — whether in the workshop or on-site.",
    iconName: "Hammer"
  },
  {
    id: "step-4",
    stepNumber: "04",
    title: "Installation & Final Finish",
    description: "Everything is fitted precisely on-site, checked for level and alignment, and finished to a clean standard. We tidy up and hand over work ready to use.",
    iconName: "Home"
  }
];
