import { Hero } from "@/components/home/hero";
import { PopularExamsSection } from "@/components/home/popular-exams-section";
import { RealExamSimulationSection } from "@/components/home/real-exam-simulation-section";
import { HowLearningWorks } from "@/components/home/how-learning-works";
import { PlatformFeatures } from "@/components/home/platform-features";
import { PerformanceAnalyticsPreview } from "@/components/home/performance-analytics-preview";
import { TrustSection } from "@/components/home/trust-section";

import { ExamCategoryGrid } from "@/components/home/exam-category-grid";
import { FinalCTA } from "@/components/home/final-cta";
import { BackgroundDecor } from "@/components/ui/background-decor";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative">
      <BackgroundDecor />
      <Hero />
      <TrustSection />
        <ExamCategoryGrid />
      <PopularExamsSection />
      <RealExamSimulationSection />
      <HowLearningWorks />
      <PlatformFeatures />
      <PerformanceAnalyticsPreview />
  
    
      <FinalCTA />
    </div>
  );
}
