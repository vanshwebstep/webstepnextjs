import DynamicServiceLanding from "@/components/DynamicServiceLanding";
import { industrialTrainingPage } from "@/lib/servicePageFallbacks";

export default function IndustrialTrainingPage() {
  return <DynamicServiceLanding slug="industrial-training" fallback={industrialTrainingPage} />;
}
