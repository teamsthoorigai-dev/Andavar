import { Metadata } from "next";
import TreatmentHero from "@/components/treatments/TreatmentHero";
import DiabeticEducation from "@/components/diabetic/DiabeticEducation";
import VisitSection from "@/components/home/VisitSection";

export const metadata: Metadata = {
  title: "Diabetic Eye Screening & Care in Pollachi | Shri Andavar Eye Care",
  description:
    "Regular diabetic eye screening and treatment in Pollachi to catch diabetes-related damage to the retina early. Shri Andavar Eye Care, Palladam Road.",
  alternates: { canonical: "/diabetic-eye-care/" },
};

export default function DiabeticEyeCarePage() {
  return (
    <>
      <TreatmentHero
        bgImage="/images/technician-performing-oct-eye-scan.webp"
        eyebrowEn="Specialized Care"
        eyebrowTa="சிறப்பு சிகிச்சை"
        titleEn="Diabetic Eye Screening and Care in Pollachi"
        titleTa="பொள்ளாச்சியில் நீரிழிவு கண் பரிசோதனை மற்றும் பராமரிப்பு"
        descriptionEn="Comprehensive screening and management to protect your vision from diabetes-related complications."
        descriptionTa="நீரிழிவு நோயால் ஏற்படும் கண் பாதிப்புகளில் இருந்து உங்கள் பார்வையைப் பாதுகாக்க முழுமையான பரிசோதனை மற்றும் சிகிச்சை."
      />
      <DiabeticEducation />
      <VisitSection />
    </>
  );
}
