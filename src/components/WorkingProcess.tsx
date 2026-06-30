/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { WORKING_PROCESS_DATA } from "../data";
import Icon from "./Icon";

export default function WorkingProcess() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const stepVariantsLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const stepVariantsRight = {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section id="process" className="py-24 md:py-32 bg-bg relative overflow-hidden">
      {/* Background radial soft gold gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/[0.02] rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <span className="text-[10px] md:text-xs uppercase font-sans tracking-[0.4em] text-gold font-semibold">
            Methodical Precision
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            Our Custom Carpentry Process
          </h2>
          <div className="w-16 h-[1px] bg-gold mx-auto my-2" />
          <p className="font-sans text-secondary-text text-sm md:text-base font-light leading-relaxed">
            From the initial conceptual pencil drawings to the immaculate final installation, we maintain absolute structural and aesthetic control over every phase.
          </p>
        </div>

        {/* Timeline Component */}
        <div className="relative">
          {/* Central Vertical Connector Line for Desktop */}
          <div className="absolute left-[50%] -translate-x-1/2 top-10 bottom-10 w-[1px] bg-gradient-to-b from-gold/10 via-gold/30 to-gold/10 hidden lg:block" />

          {/* Staggered Timeline Rows */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-12 lg:space-y-24"
          >
            {WORKING_PROCESS_DATA.map((step, index) => {
              const isEven = index % 2 === 0;
              const sideVariants = isEven ? stepVariantsLeft : stepVariantsRight;

              return (
                <div
                  key={step.id}
                  className={`flex flex-col lg:flex-row items-stretch justify-between ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Text Side Content Card */}
                  <motion.div
                    variants={sideVariants}
                    className="w-full lg:w-[45%] text-left"
                  >
                    <div className="glass-panel hover:border-gold/35 rounded-[2px] p-8 md:p-10 space-y-4 shadow-lg hover:shadow-gold/5 transition-all duration-300 relative group overflow-hidden">
                      {/* Back-shadow number indicator */}
                      <span className="absolute right-8 top-6 font-serif text-6xl md:text-7xl font-black text-white/[0.02] group-hover:text-gold/[0.04] transition-colors duration-500">
                        {step.stepNumber}
                      </span>
                      
                      {/* Header with step number badge */}
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-[2px] bg-gold/10 border border-gold/30 text-gold font-serif flex items-center justify-center font-bold text-sm">
                          {step.stepNumber}
                        </div>
                        <h3 className="font-serif text-lg md:text-xl font-bold text-white tracking-wide">
                          {step.title}
                        </h3>
                      </div>
                      
                      {/* Description body */}
                      <p className="font-sans text-secondary-text text-xs sm:text-sm font-light leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>

                  {/* Central Node Visual for Desktop */}
                  <div className="relative w-full lg:w-[10%] flex items-center justify-center my-6 lg:my-0">
                    <div className="w-14 h-14 rounded-[2px] bg-surface border border-gold/30 flex items-center justify-center text-gold shadow-xl z-10 transition-transform duration-500 hover:scale-110">
                      <Icon name={step.iconName} size={18} />
                    </div>
                  </div>

                  {/* Empty Side for balancing layout on Desktop */}
                  <div className="hidden lg:block w-[45%]" />
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
