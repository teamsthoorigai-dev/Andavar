import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import StorySection from "@/components/about/StorySection";
import HowWeWorkSection from "@/components/about/HowWeWorkSection";
import VisitInfoSection from "@/components/about/VisitInfoSection";
import BeforeYouComeSection from "@/components/about/BeforeYouComeSection";

export const metadata: Metadata = {
  title: "About Us & Visit Information | Shri Andavar Eye Care",
  description: "A small hospital that has stayed in one place. Learn about our story, how we work, and how to reach us on Palladam Road, Pollachi.",
  alternates: { canonical: "/about/" },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <StorySection />
      <HowWeWorkSection />
      <VisitInfoSection />
      <BeforeYouComeSection />
    </>
  );
}
