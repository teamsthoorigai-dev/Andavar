import { Metadata } from "next";
import VisionSlider from "@/components/cataract/VisionSlider";
import CataractEducation from "@/components/cataract/CataractEducation";
import PremiumLenses from "@/components/cataract/PremiumLenses";
import VisitSection from "@/components/home/VisitSection";

export const metadata: Metadata = {
  title: "Cataract Surgery in Pollachi | Shri Andavar Eye Care",
  description:
    "Micro-incision cataract surgery with standard and premium IOL options at Shri Andavar Eye Care, Palladam Road, Pollachi. Consultations Monday to Saturday.",
  alternates: { canonical: "/cataract-surgery/" },
};

export default function CataractSurgeryPage() {
  return (
    <>
      <VisionSlider />
      <CataractEducation />
      <PremiumLenses />
      <VisitSection />
    </>
  );
}
