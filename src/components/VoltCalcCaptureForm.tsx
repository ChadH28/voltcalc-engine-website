"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

// ============================================================================
// Type Definitions
// ============================================================================

interface CaptureFormProps {
  panelCount: number;
  estimatedSystemCost: number;
  requiredKwp: number;
  batteryCapacityKwh: number;
  paybackPeriodYears: number;
}

// ============================================================================
// Component: VoltCalcCaptureForm
// Lead capture form with system summary and conversion CTA
// ============================================================================

export const VoltCalcCaptureForm: React.FC<CaptureFormProps> = ({
  panelCount,
  estimatedSystemCost,
  requiredKwp,
  batteryCapacityKwh,
  paybackPeriodYears,
}) => {
  // ========================================================================
  // State Management
  // ========================================================================

  const [formData, setFormData] = useState({
    fullName: "",
    location: "western-cape-cape-town",
    email: "",
    phoneNumber: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // ========================================================================
  // Form Handlers
  // ========================================================================

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validation
    if (
      !formData.fullName.trim() ||
      !formData.email.trim() ||
      !formData.phoneNumber.trim()
    ) {
      alert("Please fill in all required fields");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      // Log payload to console
      const payload = {
        ...formData,
        timestamp: new Date().toISOString(),
        systemMetrics: {
          panelCount,
          estimatedSystemCost,
          requiredKwp,
          batteryCapacityKwh,
          paybackPeriodYears,
        },
      };

      console.log("Lead Capture Submission:", payload);

      // Show success state
      setIsSubmitting(false);
      setSubmitSuccess(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          fullName: "",
          location: "western-cape-cape-town",
          email: "",
          phoneNumber: "",
        });
        setSubmitSuccess(false);
      }, 3000);
    }, 800);
  };

  // ========================================================================
  // Animation Variants
  // ========================================================================

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
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
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a] text-white overflow-hidden">
      {/* Ambient background effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-gradient-to-l from-[#2b59c3] to-transparent opacity-5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-gradient-to-r from-[#00b300] to-transparent opacity-5 rounded-full blur-3xl" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-black mb-4 text-white">
            Get Your{" "}
            <span className="bg-gradient-to-r from-[#2b59c3] to-[#00b300] bg-clip-text text-transparent">
              Certified System Report
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Complete your contact details to receive a detailed technical
            specification and installer directory
          </p>
        </motion.div>

        {/* Two-Column Layout */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* ================================================================
              LEFT COLUMN: System Summary
              ================================================================ */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col justify-center"
          >
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold mb-8 text-white">
                Your System Summary
              </h3>

              {/* Summary Metrics */}
              <div className="space-y-6">
                {/* Panel Count */}
                <motion.div
                  className="flex items-center justify-between p-4 bg-gradient-to-r from-[#2b59c3]/10 to-transparent rounded-xl border border-[#2b59c3]/20"
                  whileHover={{ scale: 1.02 }}
                >
                  <span className="text-gray-400 font-medium">
                    Solar Panels (540W)
                  </span>
                  <span className="text-2xl font-black text-[#2b59c3]">
                    {panelCount}
                  </span>
                </motion.div>

                {/* System Cost */}
                <motion.div
                  className="flex items-center justify-between p-4 bg-gradient-to-r from-[#00b300]/10 to-transparent rounded-xl border border-[#00b300]/20"
                  whileHover={{ scale: 1.02 }}
                >
                  <span className="text-gray-400 font-medium">
                    Total System Cost
                  </span>
                  <span className="text-2xl font-black text-[#00b300]">
                    R{estimatedSystemCost.toFixed(0)}
                  </span>
                </motion.div>

                {/* Required kWp */}
                <motion.div
                  className="flex items-center justify-between p-4 bg-gradient-to-r from-white/5 to-transparent rounded-xl border border-white/10"
                  whileHover={{ scale: 1.02 }}
                >
                  <span className="text-gray-400 font-medium">
                    Array Size (kWp)
                  </span>
                  <span className="text-2xl font-black text-white">
                    {requiredKwp.toFixed(1)}
                  </span>
                </motion.div>

                {/* Battery Capacity */}
                <motion.div
                  className="flex items-center justify-between p-4 bg-gradient-to-r from-white/5 to-transparent rounded-xl border border-white/10"
                  whileHover={{ scale: 1.02 }}
                >
                  <span className="text-gray-400 font-medium">
                    Battery Capacity
                  </span>
                  <span className="text-2xl font-black text-white">
                    {batteryCapacityKwh.toFixed(1)} kWh
                  </span>
                </motion.div>

                {/* Payback Period */}
                <motion.div
                  className="flex items-center justify-between p-4 bg-gradient-to-br from-[#2b59c3]/20 to-[#00b300]/10 rounded-xl border-2 border-[#00b300]/40"
                  whileHover={{ scale: 1.02 }}
                >
                  <span className="text-gray-300 font-bold">
                    Payback Period
                  </span>
                  <span className="text-2xl font-black text-[#00b300]">
                    {paybackPeriodYears.toFixed(1)} yrs
                  </span>
                </motion.div>
              </div>

              {/* Disclaimer */}
              <p className="mt-8 text-xs text-gray-500 leading-relaxed">
                This calculation is based on your current energy usage and South
                African municipal tariff projections. Actual results may vary
                based on site-specific conditions and seasonal variations.
              </p>
            </div>
          </motion.div>

          {/* ================================================================
              RIGHT COLUMN: Capture Form
              ================================================================ */}
          <motion.div variants={itemVariants}>
            <form
              onSubmit={handleSubmit}
              className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-2xl"
            >
              {submitSuccess ? (
                // Success Message
                <motion.div
                  className="flex flex-col items-center justify-center h-96 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.div
                    className="w-20 h-20 rounded-full bg-gradient-to-r from-[#00b300] to-[#2b59c3] flex items-center justify-center mb-6"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 0.6 }}
                  >
                    <svg
                      className="w-10 h-10 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </motion.div>

                  <h3 className="text-2xl font-bold text-white mb-2">
                    Report Submitted!
                  </h3>
                  <p className="text-gray-400 mb-6">
                    Your certified system architecture report is being
                    generated. We'll contact you within 24 hours.
                  </p>

                  <motion.div
                    className="inline-block px-6 py-2 bg-gradient-to-r from-[#2b59c3] to-[#00b300] rounded-lg text-white font-semibold"
                    animate={{ opacity: [1, 0.7, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    ✓ Confirmed
                  </motion.div>
                </motion.div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold mb-6 text-white">
                    Your Details
                  </h3>

                  {/* Full Name */}
                  <motion.div className="mb-5" variants={itemVariants}>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#00b300]/50 focus:ring-2 focus:ring-[#00b300]/20 transition-all duration-300"
                      placeholder="e.g., Jane Smith"
                    />
                  </motion.div>

                  {/* Location Dropdown */}
                  <motion.div className="mb-5" variants={itemVariants}>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Location *
                    </label>
                    <select
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#00b300]/50 focus:ring-2 focus:ring-[#00b300]/20 transition-all duration-300"
                    >
                      <optgroup label="Western Cape">
                        <option value="western-cape-cape-town">
                          Cape Town
                        </option>
                        <option value="western-cape-stellenbosch">
                          Stellenbosch
                        </option>
                        <option value="western-cape-paarl">Paarl</option>
                        <option value="western-cape-other">Other</option>
                      </optgroup>
                      <optgroup label="Gauteng">
                        <option value="gauteng-johannesburg">
                          Johannesburg
                        </option>
                        <option value="gauteng-pretoria">Pretoria</option>
                        <option value="gauteng-other">Other</option>
                      </optgroup>
                      <optgroup label="KwaZulu-Natal">
                        <option value="kwazulu-natal-durban">Durban</option>
                        <option value="kwazulu-natal-other">Other</option>
                      </optgroup>
                      <optgroup label="Other Provinces">
                        <option value="other-province">Select Province</option>
                      </optgroup>
                    </select>
                  </motion.div>

                  {/* Email */}
                  <motion.div className="mb-5" variants={itemVariants}>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#00b300]/50 focus:ring-2 focus:ring-[#00b300]/20 transition-all duration-300"
                      placeholder="jane@example.com"
                    />
                  </motion.div>

                  {/* Phone Number */}
                  <motion.div className="mb-8" variants={itemVariants}>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#00b300]/50 focus:ring-2 focus:ring-[#00b300]/20 transition-all duration-300"
                      placeholder="+27 (0)21 123 4567"
                    />
                  </motion.div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-lg font-bold text-lg uppercase tracking-wider bg-[#00b300] text-black hover:bg-[#00cc00] disabled:bg-gray-600 transition-all duration-300 shadow-xl hover:shadow-2xl"
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            fill="none"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Generating Report...
                      </span>
                    ) : (
                      "Generate Certified System Architecture Report"
                    )}
                  </motion.button>

                  {/* Form Footer */}
                  <p className="text-xs text-gray-500 text-center mt-6">
                    We respect your privacy. Your data will be used only to
                    generate your system report and contact you with certified
                    installer recommendations.
                  </p>
                </>
              )}
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
