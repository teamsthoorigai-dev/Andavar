import { Metadata } from "next";
import TreatmentHero from "@/components/treatments/TreatmentHero";
import GlaucomaEducation from "@/components/glaucoma/GlaucomaEducation";
import VisitSection from "@/components/home/VisitSection";

export const metadata: Metadata = {
  title: "Glaucoma Screening & Treatment in Pollachi | Shri Andavar Eye Care",
  description:
    "Early glaucoma detection and long-term management to protect the optic nerve and preserve vision. Shri Andavar Eye Care, Palladam Road, Pollachi.",
  alternates: { canonical: "/glaucoma/" },
};

export default function GlaucomaPage() {
  return (
    <>
      <TreatmentHero
        bgImage="/images/patient-glaucoma-screening-machine.webp"
        eyebrowEn="Specialized Care"
        eyebrowTa="சிறப்பு சிகிச்சை"
        titleEn="Glaucoma Screening and Treatment in Pollachi"
        titleTa="பொள்ளாச்சியில் குளுக்கோமா பரிசோதனை மற்றும் சிகிச்சை"
        descriptionEn="Early detection and continuous management to protect your optic nerve and preserve your vision."
        descriptionTa="உங்கள் பார்வை நரம்பைப் பாதுகாக்கவும், கண் பார்வையைத் தக்கவைக்கவும் ஆரம்பகால நோயறிதல் மற்றும் தொடர் கண்காணிப்பு."
      />
      <GlaucomaEducation />
      <VisitSection />
    </>
  );
}
