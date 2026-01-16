import { HeroSection } from "@/components/home/hero-section";
import { MovingBanner } from "@/components/home/moving-banner";
import { WellbeingStatsSection } from "@/components/home/wellbeing-stats-section";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Moving Banner */}
      <MovingBanner />

      {/* Why Mental Wellbeing Matters */}
      <WellbeingStatsSection />
    </>
  );
}
