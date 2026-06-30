/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-bg min-h-screen relative text-white selection:bg-gold selection:text-black">
      {/* Dynamic luxury noise overlay for expensive visual depth */}
      <div 
        className="absolute inset-0 z-40 pointer-events-none opacity-[0.015] bg-[repeat] mix-blend-overlay"
        style={{
          backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.8\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\"/%3E%3C/svg%3E')"
        }}
      />

      {/* 1. Navigation Sticky Bar */}
      <Navbar />

      {/* Main Single-Screen Scrollable Wrapper */}
      <main>
        {/* 2. Fullscreen Hero Section */}
        <Hero />

        {/* 3. Concise Founder & About Section */}
        <About />

        {/* 4. Services Grid Section */}
        <Services />

        {/* 5. Filterable Portfolio Gallery */}
        <Gallery />

        {/* 6. Why Choose Us Section */}
        <WhyChooseUs />

        {/* 7. Contact Section */}
        <Contact />
      </main>

      {/* 12. Footer with Floating CTA Controls */}
      <Footer />
    </div>
  );
}
