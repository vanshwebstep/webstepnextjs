import DynamicServiceLanding from "@/components/DynamicServiceLanding";
import { hireDevelopersPage } from "@/lib/servicePageFallbacks";

export default function HireFullTimeDevelopersPage() {
  return <DynamicServiceLanding slug="hire-full-time-developers" fallback={hireDevelopersPage} />;
}
