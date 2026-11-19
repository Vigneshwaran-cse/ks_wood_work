/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import WorkingProcess from "./components/WorkingProcess";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div
      className="relative min-h-screen overflow-x-hidden"
      style={{ background: "var(--color-bg)", color: "var(--color-ivory)" }}
    >
      {/* Grain overlay for tactile depth */}
      <div
        className="fixed inset-0 z-[999] pointer-events-none opacity-[0.025] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
          backgroundSize: "256px 256px",
        }}
        aria-hidden="true"
      />

      {/* 1. Navigation */}
      <Navbar />

      <main>
        {/* 2. Hero — 3D wood centerpiece */}
        <Hero />

        {/* 3. About — founder + craft intro */}
        <About />

        {/* 4. Services — dimensional tilt cards */}
        <Services />

        {/* 5. Gallery — filterable project portfolio */}
        <Gallery />

        {/* 6. Process — consultation to installation */}
        <WorkingProcess />

        {/* 7. Why Choose Us — credibility */}
        <WhyChooseUs />

        {/* 8. Testimonials — client feedback carousel */}
        <Testimonials />

        {/* 9. FAQ — accordion */}
        <FAQ />

        {/* 10. Contact — cards + map */}
        <Contact />
      </main>

      {/* 11. Footer */}
      <Footer />
    </div>
  );
}
