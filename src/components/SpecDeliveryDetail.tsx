"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

// ============================================================================
// Component: SpecDeliveryDetail
// Programmatic specification and BOM delivery breakdown
// ============================================================================

export const SpecDeliveryDetail: React.FC = () => {
  const [showSpec, setShowSpec] = useState(false);

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

  // Sample BOM payload
  const bomSpec = {
    project_id: "VC-2024-001847",
    generated_date: "2024-06-08T14:32:00Z",
    property_address: "27 Constantia Nek Road, Constantia, Cape Town",
    bill_of_materials: {
      solar_panels: {
        type: "Tier-1 Monocrystalline",
        wattage: "540W",
        quantity: 16,
        unit_price: 2200,
        total: 35200,
        supplier: "Local Installer Network",
      },
      inverter: {
        type: "Hybrid Grid-Tie String Inverter",
        capacity: "5kW AC / 8kW Peak Surge",
        battery_management: "Integrated BMS",
        unit_price: 15000,
        total: 15000,
        supplier: "Certified South African Distributor",
      },
      battery_bank: {
        type: "LiFePO4 Lithium-Ion",
        capacity: "10kWh",
        chemistry: "LiFePO4",
        dod_limit: "80%",
        cycles_rated: "6000+",
        unit_price: 22000,
        quantity: 2,
        total: 44000,
        supplier: "Approved Battery Supplier",
      },
      mounting_hardware: {
        roof_mount_rails: 16,
        ballast_blocks: 32,
        dc_cabling: "500m of 6mm²",
        ac_cabling: "150m of 10mm²",
        total: 8500,
      },
      installation_labor: {
        structural_assessment: 2500,
        electrical_design: 3000,
        installation_labor: 12000,
        testing_commissioning: 4000,
        total: 21500,
      },
    },
    total_system_cost: 124200,
    compliance_certifications: [
      "SABS Approval Pending",
      "Municipal License Required",
      "NRS 097-2-1 Compliant",
    ],
  };

  return (
    <div className="bg-gradient-to-br from-[#0a0a0a] via-[#050505] to-[#0a0a0a] text-white min-h-screen">
      {/* Minimal ambient background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-[#2b59c3] to-transparent opacity-5 rounded-full blur-3xl" />
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
            Instant Engineering Blueprints:
            <span className="bg-gradient-to-r from-[#2b59c3] to-[#00b300] bg-clip-text text-transparent block">
              From Simulation to Procurement Manifest
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Generate production-ready specifications instantly. No delays. No
            manual data entry. Direct to contractors.
          </p>
        </motion.div>

        {/* Section 1: BOM Compilation */}
        <motion.section className="mb-12" variants={itemVariants}>
          <h2 className="text-3xl font-bold mb-6 text-white">
            Bill of Materials (BOM) Compilation
          </h2>
          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-8 mb-6">
            <p className="text-gray-300 leading-relaxed mb-4">
              Once you finalize your system parameters, VoltCalc automatically
              compiles exact structural components:
            </p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-[#2b59c3] mr-3 font-bold">→</span>
                <span>
                  <span className="font-bold">Tier-1 Solar Panels:</span> Exact
                  quantity, wattage, and manufacturer codes
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#00b300] mr-3 font-bold">→</span>
                <span>
                  <span className="font-bold">Hybrid Inverter Models:</span>{" "}
                  Matched to your system size with surge ratings
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#7029a3] mr-3 font-bold">→</span>
                <span>
                  <span className="font-bold">
                    Battery Bank Configurations:
                  </span>{" "}
                  LiFePO4 chemistry, capacity, and mounting specifications
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-3 font-bold">→</span>
                <span>
                  <span className="font-bold">
                    Mounting Ballast Architecture:
                  </span>{" "}
                  Structural load calculations and roof compatibility checks
                </span>
              </li>
            </ul>
          </div>
        </motion.section>

        {/* Section 2: Compliance */}
        <motion.section className="mb-12" variants={itemVariants}>
          <h2 className="text-3xl font-bold mb-6 text-white">
            Compliance & SABS Standards Check
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "SABS Approval",
                description:
                  "System design validated against SA Bureau of Standards electrical safety codes",
                icon: "✓",
              },
              {
                title: "Municipal License",
                description:
                  "System registered with local municipality for grid connection permits",
                icon: "✓",
              },
              {
                title: "NRS 097-2-1",
                description:
                  "Embedded Generation standard compliance for safe grid integration",
                icon: "✓",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-xl p-6"
              >
                <div className="text-3xl font-black text-[#00b300] mb-3">
                  {item.icon}
                </div>
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Section 3: Single-Click Export */}
        <motion.section className="mb-12" variants={itemVariants}>
          <h2 className="text-3xl font-bold mb-6 text-white">
            Single-Click Contractor Export
          </h2>

          {/* Interactive Export Panel */}
          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-8 mb-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <p className="text-gray-300 mb-2">
                  Generated Specification Document
                </p>
                <p className="text-sm text-gray-500">
                  Project ID: VC-2024-001847 • Generated: 2024-06-08 14:32 UTC
                </p>
              </div>
              <motion.button
                onClick={() => setShowSpec(!showSpec)}
                className="relative group px-8 py-3 rounded-lg font-bold text-lg uppercase tracking-wider overflow-hidden whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#2b59c3] to-[#00b300] opacity-100 group-hover:opacity-110 transition-opacity" />
                <span className="relative z-10 text-white">
                  {showSpec ? "Hide Spec" : "View Full Spec"}
                </span>
              </motion.button>
            </div>
          </div>

          {/* Expandable Spec Preview */}
          {showSpec && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-black/40 border border-[#2b59c3]/30 rounded-lg p-6 font-mono text-xs overflow-x-auto mb-6"
            >
              <pre className="text-[#2b59c3]">
                {JSON.stringify(bomSpec, null, 2)}
              </pre>
            </motion.div>
          )}

          {/* Download Options */}
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                format: "PDF Manifest",
                icon: "📄",
                desc: "Professional spec sheet for contractors",
              },
              {
                format: "Excel BOM",
                icon: "📊",
                desc: "Spreadsheet for procurement tracking",
              },
              {
                format: "JSON Schema",
                icon: "⚙️",
                desc: "Raw data for ERP integration",
              },
            ].map((option, idx) => (
              <motion.button
                key={idx}
                className="p-4 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-lg hover:border-[#00b300]/50 transition-all duration-300 text-left"
                whileHover={{ y: -2 }}
              >
                <div className="text-2xl mb-2">{option.icon}</div>
                <p className="font-bold text-white text-sm">{option.format}</p>
                <p className="text-xs text-gray-500 mt-1">{option.desc}</p>
              </motion.button>
            ))}
          </div>
        </motion.section>

        {/* Dashboard Mimicry */}
        <motion.section variants={itemVariants}>
          <h2 className="text-3xl font-bold mb-6 text-white">
            System Performance Dashboard
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                metric: "Total System Cost",
                value: "R124,200",
                subtext: "All-in with labor & compliance",
              },
              {
                metric: "Monthly Savings (Year 1)",
                value: "R1,840",
                subtext: "80% of typical metro bill offset",
              },
              {
                metric: "Payback Period",
                value: "5.2 Years",
                subtext: "With 12% tariff compounding",
              },
              {
                metric: "Battery Autonomy",
                value: "8 Hours",
                subtext: "Essential loads @ 80% DoD",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-lg p-6"
              >
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                  {item.metric}
                </p>
                <p className="text-3xl font-black bg-gradient-to-r from-[#2b59c3] to-[#00b300] bg-clip-text text-transparent mb-1">
                  {item.value}
                </p>
                <p className="text-xs text-gray-500">{item.subtext}</p>
              </div>
            ))}
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
