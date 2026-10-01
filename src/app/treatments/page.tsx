import { Metadata } from "next";
import TreatmentsHero from "@/components/treatments/TreatmentsHero";
import BentoServices from "@/components/treatments/BentoServices";
import VisitSection from "@/components/home/VisitSection";

export const metadata: Metadata = {
  title: "Eye Treatments & Services in Pollachi | Shri Andavar Eye Care",
  description:
    "Comprehensive eye care from general ophthalmology to advanced vitreo-retinal surgery and cataract operations in Pollachi.",
  alternates: { canonical: "/treatments/" },
};

export default function TreatmentsPage() {
  return (
    <>
      <TreatmentsHero />
      <BentoServices />
      <VisitSection />
    </>
  );
}
