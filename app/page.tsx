import { FinSightHero } from "@/components/finsight-hero"
import { FinSightHowItWorks } from "@/components/finsight-how-it-works"
import { FinSightCTA } from "@/components/finsight-cta"
import { FinSightFooter } from "@/components/finsight-footer"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <FinSightHero />
      <FinSightHowItWorks />
      <FinSightCTA />
      <FinSightFooter />
    </div>
  )
}
