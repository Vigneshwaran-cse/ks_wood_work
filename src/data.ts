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
    title: "கதவு பொருத்துதல்",
    description: "Reliable timber door installation for main entrances, bedroom doors, and service entries using locally sourced wood and solid fixtures.",
    details: [
      "Solid wood or seasoned hardwood door frames",
      "Sturdy hinges, locking systems, and weather sealing",
      "Precise on-site fitting for level and square alignment",
      "Finish options in natural wood stain or PU lacquer"
    ],
    image: new URL('./components/img/HomeEntrance.jpeg', import.meta.url).href,
    iconName: "DoorOpen"
  },
  {
    id: "service-windows",
    title: "ஜன்னல் பொருத்துதல்",
    description: "Fitted wooden window frames and shutters tailored for ventilation, privacy and a clean finish in traditional and modern home styles.",
    details: [
      "Custom-size wood window frames and sills",
      "Fine craftsmanship for tight-fitting shutters",
      "Weatherproof sealing and secure locking hardware",
      "Paint, polish or varnish finish to match interiors"
    ],
    image: "https://5.imimg.com/data5/SELLER/Default/2025/2/491361541/KR/VQ/JI/13072978/wooden-window-installation-services-500x500.jpg",
    iconName: "Window"
  },
  {
    id: "service-cupboards",
    title: "மர அலமாரி வேலை",
    description: "Custom fitted cupboards, wardrobes and storage units built to maximize room space and keep your home organized with strong wooden craftsmanship.",
    details: [
      "Floor-to-ceiling built-in wardrobe solutions",
      "Soft-close drawers and cupboard hinges",
      "Internal partitions for clothes, accessories and linens",
      "Durable plywood cores with premium finish veneers"
    ],
    image: "https://viswasinteriors.com/wp-content/uploads/2025/05/1000x1500-3.jpg",
    iconName: "Columns"
  },
  {
    id: "service-repairs",
    title: "பழுதுபார்க்கும் சேவை",
    description: "Repair and restoration for doors, chairs, tables, cabinets and damaged wood surfaces with careful joinery and matching finish work.",
    details: [
      "Repair loose joints and broken frame connections",
      "Replace damaged panels or rotten sections",
      "Refinish surfaces to conceal scratches and stains",
      "Strengthen hinges, runners and drawer slides"
    ],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV7OdrAPw07T1rj9hL5fmw7usgl1oElGv1sAqcOz8KGMZ2s4SSMEmhFG3T&s=10",
    iconName: "Tool"
  },
  {
    id: "service-fittings",
    title: "உள்துறை மர வேலை",
    description: "Practical interior fittings such as skirting boards, paneling, shelves, TV units and wooden trims built to complement your home design.",
    details: [
      "Custom shelf and cabinet installations",
      "Wall paneling, skirting and cornices",
      "TV units, shoe racks and storage niches",
      "Precise measurements for clean finish lines"
    ],
    image: "https://m.media-amazon.com/images/I/71owsSU3lfL._SX679_.jpg",
    iconName: "Layout"
  },
  {
    id: "service-carpentry",
    title: "வீட்டு மர வேலைகள்",
    description: "Complete home carpentry services including door frames, furniture, partitions and repairs to make your house function better and last longer.",
    details: [
      "Structural carpentry and wood framing",
      "Built-in wardrobes, kitchen cabinets, and shelves",
      "Door and window frame replacement",
      "On-site finishing and final adjustment work"
    ],
    image: new URL('./components/img/Shrine.jpeg', import.meta.url).href,
    iconName: "Home"
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Solid Teak Main Door",
    category: "doors",
    image: new URL('./components/img/HomeEntrance.jpeg', import.meta.url).href,
    description: "A sturdy entrance door installed with precise joinery and neat weather seals for lasting performance."
  },
  {
    id: "gal-2",
    title: "Fitted Window Shutters",
    category: "windows",
    image: new URL('./components/img/Window.jpeg', import.meta.url).href,
    description: "Custom wooden window shutters installed for light control and neat finishing around the frame."
  },
  {
    id: "gal-3",
    title: "Cupboard Wardrobe Unit",
    category: "cupboards",
    image: new URL('./components/img/Wardrobe.jpeg', import.meta.url).href,
    description: "A built-in wardrobe fitted flush to the wall with smooth doors and practical storage compartments."
  },
  {
    id: "gal-4",
    title: "Interior Wood Paneling",
    category: "interiors",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE244RCnTYKVPv_xCHZ8xQvkvJ63jcVw9VLkiOcL69uH4b-G91db4ZQ_Ov&s=10",
    description: "Wall paneling and wooden trims added to create a warm, finished interior look."
  },
  {
    id: "gal-5",
    title: "Small Repair Job",
    category: "repairs",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV7OdrAPw07T1rj9hL5fmw7usgl1oElGv1sAqcOz8KGMZ2s4SSMEmhFG3T&s=10",
    description: "Repair work on a wooden cabinet door, returned to smooth operation with matching finish."
  },
  {
    id: "gal-6",
    title: "Fitted Kitchen Storage",
    category: "cupboards",
    image: "https://www.harveyjones.com/wp-content/uploads/2025/02/Small-Harvey-Jones-Antoniou-Laura-Rupolo-13-2.jpg",
    description: "A custom kitchen storage unit built for efficient use of space and a durable finish."
  },
  {
    id: "gal-7",
    title: "Window Frame Replacement",
    category: "windows",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjaFPIqDoMJwsC5fG6Qe2osKYJdHrbYuQlF3Uv8HswP2bSiN742eroXso&s=10",
    description: "Window frame replacement with a strong wooden profile and clean installation."
  },
  {
    id: "gal-8",
    title: "Bedroom Closet Doors",
    category: "cupboards",
    image: "https://image.made-in-china.com/2f0j00wvpVCeUlnzGK/Wardrobe-Bi-Folding-Sliding-Door-System-for-Closet-2-or-4-Panel-Door-Bifold.jpg",
    description: "Matching wardrobe doors installed to fit the bedroom layout with polished hardware."
  },
  {
    id: "gal-9",
    title: "Door Repair & Refinish",
    category: "repairs",
    image: "https://content.jdmagicbox.com/comp/def_content_category/door-repair-and-services/a69485af4f-door-repair-and-services-3-953pa.jpg",
    description: "A repaired door with refreshed finish and restored strength at the hinges."
  },
  {
    id: "gal-10",
    title: "Home Entrance Fitting",
    category: "interiors",
    image: new URL('./components/img/HomeEntrance.jpeg', import.meta.url).href,
    description: "An entrance feature with wood trims and practical built-in storage around the door."
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
    question: "What types of premium wood does K.S WOOD WORK use?",
    answer: "We source premium seasoned woods. Our signature creations utilize A-Grade Nilambur Teakwood, Indian Rosewood (Eeti), premium Padauk, African Mahogany, and seasoned Jackwood (Palaa) which are known for striking natural grain profiles and heavy structural integrity."
  },
  {
    id: "faq-2",
    question: "Do you offer free on-site design consultation and site measurements?",
    answer: "Yes. For major custom woodworking and full home interior works, we conduct physical site visits to take hyper-accurate on-site measurements. We discuss the wood grades, styling, and design sketches directly with you and your architect."
  },
  {
    id: "faq-3",
    question: "Can you replicate design blueprints provided by our private interior designer?",
    answer: "Absolutely. We specialize in bespoke collaboration. We translate designer blueprints, CAD files, or 3D Max concepts into flawless physical items, adapting appropriate joinery systems to ensure structural longevity."
  },
  {
    id: "faq-4",
    question: "How does K.S WOOD WORK protect timber against termites and swelling?",
    answer: "All our timber undergoes a multi-layer protective process. We utilize seasoned, moisture-controlled kiln-dried wood, execute eco-friendly organic anti-termite chemical wood-infusions, and seal all grain pathways with premium marine-grade PU primers."
  },
  {
    id: "faq-5",
    question: "What is the typical timeline for manufacturing custom wardrobes or doors?",
    answer: "Each luxury item is hand-built with high care. Typically, custom entrance doors and pooja shrines take 3 to 4 weeks, while a full-house custom woodwork interior (wardrobes, modular paneling, dining set, beds) takes about 4 to 6 weeks from final blueprint approval."
  }
];
