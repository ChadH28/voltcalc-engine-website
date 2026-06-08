"use client";

import React from "react";
import { motion } from "framer-motion";

// ============================================================================
// Component: SizingArrayDetail
// Technical breakdown of solar hardware sizing calculations
// ============================================================================

export const SizingArrayDetail: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-gradient-to-br from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a] text-white min-h-screen">
      {/* Ambient background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-[#2b59c3] to-transparent opacity-10 rounded-full blur-3xl" />
      </div>

      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero */}
        <motion.div className="mb-16" variants={itemVariants}>
          <h1 className="text-5xl lg:text-6xl font-black mb-4">
            The Science of Spatial Yield:
            <span className="bg-gradient-to-r from-[#2b59c3] to-[#00b300] bg-clip-text text-transparent block">
              Eliminating Hardware Over-Indexing
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Precision PV engineering using localized solar irradiance data, not
            theoretical maximums.
          </p>
        </motion.div>

        {/* Section 1: Irradiance Mapping */}
        <motion.section className="mb-12" variants={itemVariants}>
          <h2 className="text-3xl font-bold mb-6 text-white">
            Irradiance Mapping
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-8">
              <p className="text-gray-300 leading-relaxed mb-4">
                Our platform utilizes localized historical solar irradiance maps
                for specific South African coordinates, averaging{" "}
                <span className="font-bold text-[#2b59c3]">
                  5.5 peak sun hours (PSH) per day
                </span>{" "}
                across Western Cape regions.
              </p>
              <p className="text-gray-400 text-sm">
                Rather than using theoretical irradiance maximums, we pull
                real-world data from 20+ years of SODA (Solar Irradiance Data
                Analysis) records specific to your property's
                latitude/longitude, roof pitch, and seasonal cloud cover
                patterns.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#2b59c3]/10 to-transparent border border-[#2b59c3]/20 rounded-2xl p-8">
              <div className="font-mono text-sm text-[#2b59c3] bg-black/30 p-4 rounded-lg overflow-x-auto">
                <pre>{`{
  "irradiance_model": "SODA",
  "psh_annual_avg": 5.5,
  "seasonal_variance": ±0.8,
  "cloud_factor": 0.91,
  "latitude": -33.927,
  "longitude": 18.414
}`}</pre>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section 2: Inverter Clipping */}
        <motion.section className="mb-12" variants={itemVariants}>
          <h2 className="text-3xl font-bold mb-6 text-white">
            Inverter Clipping Optimization
          </h2>
          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-8 mb-6">
            <p className="text-gray-300 leading-relaxed mb-4">
              The system matches DC panel capacity against AC inverter output
              thresholds to minimize power clipping during peak midday
              generation windows. A 5kW inverter can only output 5kW
              maximum—excess DC generation is wasted.
            </p>
            <p className="text-gray-400 text-sm">
              Our algorithm calculates the optimal DC-to-AC ratio (typically
              1.1–1.3:1) ensuring that 95%+ of daily generation flows through
              the inverter during peak hours while maintaining efficiency during
              shoulder periods.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { label: "Panel Capacity", value: "8.64 kWp", color: "#2b59c3" },
              { label: "Inverter Rating", value: "5 kW AC", color: "#00b300" },
              { label: "DC/AC Ratio", value: "1.73:1", color: "#7029a3" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-lg p-4"
              >
                <p className="text-xs text-gray-500 mb-2">{stat.label}</p>
                <p
                  className="text-2xl font-black"
                  style={{ color: stat.color }}
                >
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Section 3: String Topology */}
        <motion.section variants={itemVariants}>
          <h2 className="text-3xl font-bold mb-6 text-white">
            String Inverter Topology
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4 text-[#2b59c3]">
                String Inverters
              </h3>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="text-[#00b300] mr-3">✓</span>
                  <span>Cost-effective for unshaded roofs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#00b300] mr-3">✓</span>
                  <span>Handles string mismatch via MPPT algorithms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#00b300] mr-3">✓</span>
                  <span>Ideal for residential (≤10kW)</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4 text-[#7029a3]">
                Micro-Inverters
              </h3>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="text-[#00b300] mr-3">✓</span>
                  <span>Optimal for complex shading profiles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#00b300] mr-3">✓</span>
                  <span>Per-panel MPPT maximizes yield</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#00b300] mr-3">✓</span>
                  <span>Higher upfront cost, better resilience</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.div className="mt-16 text-center" variants={itemVariants}>
          <a
            href="/#voltcalc-dashboard"
            className="inline-flex items-center px-8 py-4 rounded-full font-bold text-lg uppercase tracking-wider bg-gradient-to-r from-[#2b59c3] to-[#00b300] text-white hover:shadow-2xl transition-all duration-300"
          >
            Back to Calculator
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
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};
