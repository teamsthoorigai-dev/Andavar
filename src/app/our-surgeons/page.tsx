import { Metadata } from "next";
import SurgeonSection from "@/components/home/SurgeonSection";
import SurgeonStatsCTA from "@/components/surgeon/SurgeonStatsCTA";
import VisitingSpecialists from "@/components/surgeon/VisitingSpecialists";

export const metadata: Metadata = {
  title: "Our Eye Specialists in Pollachi | Shri Andavar Eye Care",
  description:
    "Meet Dr. A. Raghuram, Chief Eye Surgeon at Shri Andavar Eye Care, bringing decades of surgical expertise and international benchmarks to Pollachi.",
  alternates: { canonical: "/our-surgeons/" },
};

export default function OurSurgeonPage() {
  return (
    <>
      <SurgeonSection />
      <VisitingSpecialists />
      <SurgeonStatsCTA />
    </>
  );
}
