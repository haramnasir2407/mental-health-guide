import { HeroSection } from "@/components/home/hero-section";
import { MovingBanner } from "@/components/home/moving-banner";
import { WellbeingStatsSection } from "@/components/home/wellbeing-stats-section";
import { PlaybookSection } from "@/components/home/playbook-section";
import { ResourcesShowcase } from "@/components/home/resources-showcase";
import { ExpertGuidanceSection } from "@/components/home/expert-guidance-section";
import { CTASection } from "@/components/home/cta-section";
import { FooterSection } from "@/components/home/footer-section";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Moving Banner */}
      <MovingBanner />

      {/* Why Mental Wellbeing Matters */}
      <WellbeingStatsSection />

      {/* What You Will Find in this Playbook */}
      <PlaybookSection />

      {/* Resources Showcase */}
      <ResourcesShowcase />

      {/* Expert Guidance */}
      <ExpertGuidanceSection />

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <FooterSection />
    </>
  );
}
