"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useSolarCalculator } from "@/hooks/useSolarCalculator";

// ============================================================================
// Component: VoltCalcDashboard
// Premium dark-mode solar calculator dashboard with real-time ROI projections
// ============================================================================

export const VoltCalcDashboard: React.FC = () => {
  const calculator = useSolarCalculator();
  const [auditRequested, setAuditRequested] = useState(false);

  // ========================================================================
  // UI State Helpers
  // ========================================================================

  const isEmpty = calculator.monthlyBill === 0;
  const monthlyBillDisplay = calculator.monthlyBill.toFixed(2);
  const systemCostDisplay = calculator.estimatedSystemCost.toFixed(2);
  const paybackDisplay = calculator.paybackPeriodYears.toFixed(1);
  const monthlySavingsDisplay = calculator.yearOneMonthlySavings.toFixed(2);
  const panelCountDisplay = calculator.panelCount;
  const inverterKwDisplay = calculator.requiredKwp.toFixed(2);
  const batteryDisplay = calculator.batteryCapacityKwh.toFixed(2);

  // ========================================================================
  // Animation Variants
  // ========================================================================

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const badgeVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  // ========================================================================
  // Render: Layout Container
  // ========================================================================

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a] text-white font-sans overflow-hidden">
      {/* Ambient gradient background effect */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-[#2b59c3] to-transparent opacity-5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-[#00b300] to-transparent opacity-5 rounded-full blur-3xl" />
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Header Section */}
        <motion.div className="mb-12" variants={itemVariants}>
          <h1 className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-[#2b59c3] to-[#00b300] bg-clip-text text-transparent mb-3">
            Solar System Architect
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Precision-engineered solar solutions for South African homes.
            Real-time ROI modeling with 12% annual tariff inflation projections.
          </p>
        </motion.div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* ================================================================
              LEFT COLUMN: Input Controls
              ================================================================ */}
          <motion.div variants={itemVariants} className="space-y-6">
            {/* Glassmorphic Card: Inputs Container */}
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-2xl">
              <h2 className="text-2xl font-bold mb-8 text-white">
                System Parameters
              </h2>

              {/* Monthly Bill Slider */}
              <motion.div className="space-y-3 mb-8" variants={itemVariants}>
                <div className="flex justify-between items-center">
                  <label className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
                    Current Monthly Bill
                  </label>
                  <span className="text-xl font-bold bg-gradient-to-r from-[#2b59c3] to-[#00b300] bg-clip-text text-transparent">
                    R{monthlyBillDisplay}
                  </span>
                </div>
                <input
                  type="range"
                  min="1000"
                  max="25000"
                  step="100"
                  value={calculator.monthlyBill}
                  onChange={(e) =>
                    calculator.setMonthlyBill(Number(e.target.value))
                  }
                  className="w-full h-2 bg-gradient-to-r from-[#2b59c3] to-[#00b300] rounded-lg appearance-none cursor-pointer slider accent-white"
                  style={{
                    background: `linear-gradient(to right, #2b59c3, #00b300)`,
                  }}
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>R1,000</span>
                  <span>R25,000</span>
                </div>
              </motion.div>

              {/* Target Offset Percentage Slider */}
              <motion.div className="space-y-3 mb-8" variants={itemVariants}>
                <div className="flex justify-between items-center">
                  <label className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
                    Target Utility Offset
                  </label>
                  <span className="text-xl font-bold bg-gradient-to-r from-[#2b59c3] to-[#00b300] bg-clip-text text-transparent">
                    {calculator.targetSavingsPercentage}%
                  </span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="100"
                  step="5"
                  value={calculator.targetSavingsPercentage}
                  onChange={(e) =>
                    calculator.setTargetSavingsPercentage(
                      Number(e.target.value),
                    )
                  }
                  className="w-full h-2 bg-gradient-to-r from-[#2b59c3] to-[#00b300] rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>20%</span>
                  <span>100%</span>
                </div>
              </motion.div>

              {/* Battery Autonomy Toggle Group */}
              <motion.div className="space-y-3" variants={itemVariants}>
                <label className="text-sm font-semibold text-gray-300 uppercase tracking-wider block">
                  Required Battery Autonomy
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    {
                      hours: 4,
                      label: "Standard Loadshedding",
                      description: "4 Hours",
                    },
                    {
                      hours: 8,
                      label: "Extended Overnight",
                      description: "8 Hours",
                    },
                  ].map((option) => (
                    <motion.button
                      key={option.hours}
                      onClick={() =>
                        calculator.setBatteryAutonomyHours(option.hours)
                      }
                      className={`relative px-4 py-4 rounded-xl border-2 transition-all duration-300 overflow-hidden group ${
                        calculator.batteryAutonomyHours === option.hours
                          ? "border-[#00b300] bg-gradient-to-br from-[#00b300]/20 to-[#2b59c3]/10"
                          : "border-white/10 bg-white/5 hover:border-white/20"
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="relative z-10">
                        <div className="font-bold text-sm mb-1">
                          {option.description}
                        </div>
                        <div className="text-xs text-gray-400">
                          {option.label}
                        </div>
                      </div>
                      {calculator.batteryAutonomyHours === option.hours && (
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-[#2b59c3] to-[#00b300] opacity-10"
                          layoutId="activeButton"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 0.1 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* ================================================================
              RIGHT COLUMN: System Outputs Display
              ================================================================ */}
          <motion.div variants={itemVariants} className="space-y-6">
            {isEmpty ? (
              // Empty State
              <motion.div
                className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-md border border-white/10 rounded-2xl p-12 shadow-2xl flex items-center justify-center min-h-96"
                variants={badgeVariants}
              >
                <div className="text-center">
                  <div className="text-6xl mb-4 opacity-20">☀️</div>
                  <p className="text-gray-400 text-lg mb-2">
                    Enter your monthly bill to begin
                  </p>
                  <p className="text-gray-500 text-sm">
                    Adjust the slider above to see real-time system
                    specifications
                  </p>
                </div>
              </motion.div>
            ) : (
              <>
                {/* Hardware Profile Card */}
                <motion.div
                  className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-2xl"
                  variants={badgeVariants}
                >
                  <h3 className="text-lg font-bold mb-6 text-gray-200 uppercase tracking-wide">
                    Hardware Profile
                  </h3>

                  <div className="space-y-4">
                    {/* Panel Count Metric */}
                    <motion.div
                      className="flex items-center justify-between p-4 bg-gradient-to-r from-[#2b59c3]/10 to-transparent rounded-xl border border-[#2b59c3]/20"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div>
                        <p className="text-gray-400 text-sm font-medium">
                          540W Solar Panels
                        </p>
                        <p className="text-gray-500 text-xs mt-1">
                          Quantity Required
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-3xl font-black bg-gradient-to-r from-[#2b59c3] to-white bg-clip-text text-transparent">
                          {panelCountDisplay}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">units</p>
                      </div>
                    </motion.div>

                    {/* Inverter Capacity Metric */}
                    <motion.div
                      className="flex items-center justify-between p-4 bg-gradient-to-r from-[#00b300]/10 to-transparent rounded-xl border border-[#00b300]/20"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div>
                        <p className="text-gray-400 text-sm font-medium">
                          Hybrid Inverter
                        </p>
                        <p className="text-gray-500 text-xs mt-1">
                          Capacity Required
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-3xl font-black bg-gradient-to-r from-[#00b300] to-white bg-clip-text text-transparent">
                          {inverterKwDisplay}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">kW</p>
                      </div>
                    </motion.div>

                    {/* Battery Storage Metric */}
                    <motion.div
                      className="flex items-center justify-between p-4 bg-gradient-to-r from-white/5 to-transparent rounded-xl border border-white/10"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div>
                        <p className="text-gray-400 text-sm font-medium">
                          Lithium-Ion Battery
                        </p>
                        <p className="text-gray-500 text-xs mt-1">
                          Storage Capacity
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-3xl font-black text-white">
                          {batteryDisplay}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">kWh</p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Financial Dashboard Card */}
                <motion.div
                  className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-2xl"
                  variants={badgeVariants}
                >
                  <h3 className="text-lg font-bold mb-6 text-gray-200 uppercase tracking-wide">
                    Financial Dashboard
                  </h3>

                  <div className="space-y-4">
                    {/* System Cost Metric */}
                    <motion.div
                      className="p-6 bg-gradient-to-br from-[#2b59c3]/20 to-[#00b300]/10 rounded-xl border border-[#2b59c3]/30"
                      whileHover={{ scale: 1.02 }}
                    >
                      <p className="text-gray-400 text-sm font-medium mb-3">
                        Total System Cost
                      </p>
                      <p className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-[#2b59c3] to-[#00b300] bg-clip-text text-transparent">
                        R{systemCostDisplay}
                      </p>
                      <p className="text-gray-500 text-xs mt-3">
                        Panels + Inverter + Battery + Installation
                      </p>
                    </motion.div>

                    {/* Payback Period & Monthly Savings Row */}
                    <div className="grid grid-cols-2 gap-4">
                      {/* Payback Period */}
                      <motion.div
                        className="p-4 bg-gradient-to-br from-[#00b300]/20 to-transparent rounded-xl border-2 border-[#00b300]/30"
                        whileHover={{ scale: 1.02 }}
                      >
                        <p className="text-gray-400 text-xs font-medium uppercase tracking-wider mb-2">
                          Payback Period
                        </p>
                        <p className="text-3xl font-black text-[#00b300] mb-1">
                          {paybackDisplay}
                        </p>
                        <p className="text-gray-500 text-xs">
                          years to break even
                        </p>
                      </motion.div>

                      {/* Year One Monthly Savings */}
                      <motion.div
                        className="p-4 bg-gradient-to-br from-white/5 to-transparent rounded-xl border border-white/10"
                        whileHover={{ scale: 1.02 }}
                      >
                        <p className="text-gray-400 text-xs font-medium uppercase tracking-wider mb-2">
                          Month One Savings
                        </p>
                        <p className="text-3xl font-black text-white mb-1">
                          R{monthlySavingsDisplay}
                        </p>
                        <p className="text-gray-500 text-xs">monthly offset</p>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </>
            )}
          </motion.div>
        </div>

        {/* Call-to-Action Section */}
        {!isEmpty && (
          <motion.div
            className="mt-12 flex flex-col sm:flex-row gap-4"
            variants={itemVariants}
          >
            <motion.button
              onClick={() => setAuditRequested(true)}
              className="flex-1 relative group px-8 py-4 rounded-xl font-bold text-lg uppercase tracking-wider overflow-hidden transition-all duration-300 shadow-2xl"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#2b59c3] to-[#00b300] opacity-100 group-hover:opacity-110 transition-opacity" />

              {/* Glowing Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#2b59c3] to-[#00b300] opacity-0 group-hover:opacity-30 blur-lg transition-opacity" />

              {/* Text Content */}
              <span className="relative z-10 text-white">
                Lock In This System Architecture
              </span>
            </motion.button>

            <motion.button
              onClick={() => setAuditRequested(true)}
              className="flex-1 px-8 py-4 rounded-xl font-bold text-lg uppercase tracking-wider bg-white/5 border-2 border-white/20 text-white hover:border-[#00b300]/50 hover:bg-white/10 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Request Certified Technical Audit
            </motion.button>
          </motion.div>
        )}

        {/* Audit Confirmation Toast */}
        {auditRequested && (
          <motion.div
            className="fixed bottom-4 right-4 bg-gradient-to-r from-[#2b59c3] to-[#00b300] text-white px-6 py-4 rounded-xl shadow-2xl font-semibold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            onAnimationComplete={() => {
              setTimeout(() => setAuditRequested(false), 3000);
            }}
          >
            ✓ Audit request submitted. We'll contact you within 24 hours.
          </motion.div>
        )}
      </motion.div>

      {/* CSS for custom slider styling */}
      <style jsx global>{`
        input[type="range"].slider {
          -webkit-appearance: none;
          appearance: none;
          background: transparent;
        }

        input[type="range"].slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: linear-gradient(135deg, #2b59c3, #00b300);
          cursor: pointer;
          box-shadow:
            0 0 20px rgba(43, 89, 195, 0.5),
            0 0 40px rgba(0, 179, 0, 0.3);
          border: 2px solid rgba(255, 255, 255, 0.5);
          transition: all 0.2s ease;
        }

        input[type="range"].slider::-webkit-slider-thumb:hover {
          box-shadow:
            0 0 30px rgba(43, 89, 195, 0.7),
            0 0 60px rgba(0, 179, 0, 0.5);
          transform: scale(1.1);
        }

        input[type="range"].slider::-moz-range-thumb {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: linear-gradient(135deg, #2b59c3, #00b300);
          cursor: pointer;
          box-shadow:
            0 0 20px rgba(43, 89, 195, 0.5),
            0 0 40px rgba(0, 179, 0, 0.3);
          border: 2px solid rgba(255, 255, 255, 0.5);
          transition: all 0.2s ease;
        }

        input[type="range"].slider::-moz-range-track {
          background: transparent;
          border: none;
        }
      `}</style>
    </div>
  );
};
