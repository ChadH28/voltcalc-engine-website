"use client";

import React from "react";
import { motion } from "framer-motion";

// ============================================================================
// Component: VoltCalcResidential
// Premium residential solar solution page for Cape Town homeowners
// ============================================================================

export const VoltCalcResidential: React.FC = () => {
  // ========================================================================
  // Animation Variants
  // ========================================================================

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // ========================================================================
  // Render
  // ========================================================================

  return (
    <div className="bg-gradient-to-br from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a] text-white overflow-hidden">
      {/* Ambient background effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-[#2b59c3] to-transparent opacity-10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-[#00b300] to-transparent opacity-10 rounded-full blur-3xl" />
      </div>

      {/* Hero Section */}
      <motion.section
        className="relative z-10 min-h-screen flex items-center py-20 lg:py-32"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-tight">
              Take Your Home{" "}
              <span className="bg-gradient-to-r from-[#2b59c3] to-[#00b300] bg-clip-text text-transparent">
                Completely Off-Grid
              </span>
              . Lock in Lifelong Tariff Immunity.
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Engineered for premium Cape Town metro homeowners. Protect your
              lifestyle against municipal tariff escalations while gaining a
              measurable property asset.
            </p>
          </motion.div>

          {/* Financial Pain Point */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-md border border-white/10 rounded-2xl p-8 lg:p-12 mb-16 max-w-3xl mx-auto"
          >
            <h2 className="text-2xl font-bold mb-6 text-white">
              Why Cape Town Homeowners Are Switching Now
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                <span className="font-bold text-[#2b59c3]">
                  2026/2027 Reality:
                </span>{" "}
                City of Cape Town residential tariffs are climbing 10–15%
                annually. A typical metro household paying R1,500/month today
                faces R2,000+ monthly bills within 5 years.
              </p>
              <p>
                <span className="font-bold text-[#00b300]">
                  The Compound Effect:
                </span>{" "}
                A 540W solar array paired with a 5–10 kWh battery bank
                neutralizes 60–80% of daily consumption while providing backup
                during loadshedding—your power cost remains fixed while grid
                rates soar.
              </p>
            </div>
          </motion.div>

          {/* Solution Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {[
              {
                title: "Smart-Phased Backup",
                description:
                  "Seamlessly separates essential loads (WiFi, refrigeration, lighting) from heavy appliances, extending battery runtime during extended loadshedding windows.",
                icon: "🔌",
              },
              {
                title: "Battery Lifespan Optimization",
                description:
                  "Calculates dynamic overnight discharge bounds to ensure lithium-ion cells safely last a full decade without degradation stress.",
                icon: "🔋",
              },
              {
                title: "Home Asset Appreciation",
                description:
                  "Models how a certified, compliant hybrid inverter setup immediately scales property resale valuation in competitive metro markets.",
                icon: "🏡",
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#2b59c3]/50 hover:shadow-xl hover:shadow-[#2b59c3]/20 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -4 }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#2b59c3] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
            <a
              href="/#voltcalc-dashboard"
              className="inline-flex items-center px-8 py-4 rounded-full font-bold text-lg uppercase tracking-wider bg-gradient-to-r from-[#2b59c3] to-[#00b300] text-white hover:shadow-2xl hover:shadow-[#2b59c3]/30 transition-all duration-300"
            >
              Calculate Your Home System
              <svg
                className="w-5 h-5 ml-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};
