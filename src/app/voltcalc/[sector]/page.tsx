"use client";

import React from "react";
import { VoltCalcResidential } from "@/components/VoltCalcResidential";
import { VoltCalcCommercial } from "@/components/VoltCalcCommercial";
import { VoltCalcAgricultural } from "@/components/VoltCalcAgricultural";
import { VoltCalcIndustrial } from "@/components/VoltCalcIndustrial";
import { VoltCalcDashboard } from "@/components/VoltCalcDashboard";
import { VoltCalcCaptureForm } from "@/components/VoltCalcCaptureForm";
import { VoltCalcFooter } from "@/components/VoltCalcFooter";
import { useSolarCalculator } from "@/hooks/useSolarCalculator";

// ============================================================================
// Dynamic Sector Route Handler
// Serves tailored solution pages based on sector parameter
// ============================================================================

interface SectorPageProps {
  params: Promise<{
    sector: string;
  }>;
}

export default function SectorPage({ params }: SectorPageProps) {
  const { sector: rawSector } = React.use(params);
  const calculator = useSolarCalculator();
  const sector = rawSector.toLowerCase();

  // ========================================================================
  // Sector Component Mapper
  // ========================================================================

  const renderSectorHero = () => {
    switch (sector) {
      case "residential":
        return <VoltCalcResidential />;
      case "commercial":
        return <VoltCalcCommercial />;
      case "agricultural":
        return <VoltCalcAgricultural />;
      case "industrial":
        return <VoltCalcIndustrial />;
      default:
        return <VoltCalcResidential />; // Default fallback
    }
  };

  // ========================================================================
  // Render Full Page
  // ========================================================================

  return (
    <>
      {/* Sector-Specific Hero & Features */}
      {renderSectorHero()}

      {/* Main Calculator Dashboard */}
      <div id="voltcalc-dashboard">
        <VoltCalcDashboard />
      </div>

      {/* Lead Capture Form - Only show when user has entered a bill amount */}
      {calculator.monthlyBill > 0 && (
        <VoltCalcCaptureForm
          panelCount={calculator.panelCount}
          estimatedSystemCost={calculator.estimatedSystemCost}
          requiredKwp={calculator.requiredKwp}
          batteryCapacityKwh={calculator.batteryCapacityKwh}
          paybackPeriodYears={calculator.paybackPeriodYears}
        />
      )}

      {/* Footer */}
      <VoltCalcFooter />
    </>
  );
}
