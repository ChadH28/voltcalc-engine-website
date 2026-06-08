"use client";

import React from "react";
import { SizingArrayDetail } from "@/components/SizingArrayDetail";
import { TariffForecastingDetail } from "@/components/TariffForecastingDetail";
import { BatteryAutonomyDetail } from "@/components/BatteryAutonomyDetail";
import { SpecDeliveryDetail } from "@/components/SpecDeliveryDetail";
import { VoltCalcFooter } from "@/components/VoltCalcFooter";

// ============================================================================
// Dynamic Learning Detail Route Handler
// Serves technical education pages based on feature parameter
// ============================================================================

interface LearnPageProps {
  params: Promise<{
    feature: string;
  }>;
}

export default function LearnPage({ params }: LearnPageProps) {
  const { feature: rawFeature } = React.use(params);
  const feature = rawFeature.toLowerCase();

  // ========================================================================
  // Feature Component Mapper
  // ========================================================================

  const renderFeatureDetail = () => {
    switch (feature) {
      case "sizing-array":
        return <SizingArrayDetail />;
      case "tariff-forecasting":
        return <TariffForecastingDetail />;
      case "battery-autonomy":
        return <BatteryAutonomyDetail />;
      case "spec-delivery":
        return <SpecDeliveryDetail />;
      default:
        return <SizingArrayDetail />; // Default fallback
    }
  };

  // ========================================================================
  // Render Full Page
  // ========================================================================

  return (
    <>
      {/* Feature-Specific Detail Page */}
      {renderFeatureDetail()}

      {/* Footer */}
      <VoltCalcFooter />
    </>
  );
}
