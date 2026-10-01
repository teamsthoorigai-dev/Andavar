import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import StorySection from "@/components/about/StorySection";
import SurgeonProfileTop from "@/components/surgeon/SurgeonProfileTop";
import TreatSection from "@/components/home/TreatSection";
import CostSection from "@/components/home/CostSection";
import FactStrip from "@/components/home/FactStrip";
import QuoteSection from "@/components/home/QuoteSection";
import BeforeYouComeSection from "@/components/about/BeforeYouComeSection";
import VisitSection from "@/components/home/VisitSection";
import FAQSection from "@/components/home/FAQSection";

export const metadata: Metadata = {
  title: "Eye Hospital in Pollachi | Shri Andavar Eye Care and Retina Centre",
  description:
    "Eye hospital in Pollachi since 2013 for cataract surgery, retina care, glaucoma and diabetic eye screening. Palladam Road, opposite LMHSS School. Call 04259 221 000.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <FactStrip />
      <StorySection />
      <SurgeonProfileTop />
      <TreatSection />
      <CostSection />
      <QuoteSection />
      <BeforeYouComeSection />
      <VisitSection />
      <FAQSection />
    </>
  );
}
