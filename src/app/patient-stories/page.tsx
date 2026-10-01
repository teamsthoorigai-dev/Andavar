import type { Metadata } from "next";
import StoriesHero from "@/components/patient-stories/StoriesHero";
import StoriesGrid from "@/components/patient-stories/StoriesGrid";
import AskReviewSection from "@/components/patient-stories/AskReviewSection";

export const metadata: Metadata = {
  title: "Patient Stories | Shri Andavar Eye Care",
  description: "Read what people say afterwards. Collected from patients and families who agreed to have their words published.",
  alternates: { canonical: "/patient-stories/" },
};

export default function PatientStoriesPage() {
  return (
    <>
      <StoriesHero />
      <StoriesGrid />
      <AskReviewSection />
    </>
  );
}
