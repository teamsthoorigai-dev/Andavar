import { Metadata } from "next";
import GalleryHero from "@/components/gallery/GalleryHero";
import GallerySection from "@/components/gallery/GallerySection";

export const metadata: Metadata = {
  title: "Hospital Gallery | Shri Andavar Eye Care, Pollachi",
  description:
    "Photos of the facilities, diagnostic and surgical equipment, and free community eye camps at Shri Andavar Eye Care, Pollachi.",
  alternates: { canonical: "/gallery/" },
};

const FACILITIES_IMAGES = [
  {
    src: "/images/shri-andavar-eye-hospital-building-exterior.webp",
    altEn: "Hospital Exterior",
    altTa: "மருத்துவமனை வெளிப்புறம்",
  },
  {
    src: "/images/hospital-reception-and-waiting-area.webp",
    altEn: "Reception & Waiting Area",
    altTa: "வரவேற்பு மற்றும் காத்திருப்பு பகுதி",
  },
  {
    src: "/images/doctor-patient-consultation-office.webp",
    altEn: "Consultation Office",
    altTa: "ஆலோசனை அறை",
  },
  {
    src: "/images/surgical-team-in-operating-room.webp",
    altEn: "Operation Theatre",
    altTa: "அறுவை சிகிச்சை அரங்கம்",
  },
  {
    src: "/images/optical-shop-eyewear-frames-display.webp",
    altEn: "Optical Shop",
    altTa: "கண்ணாடி கடை",
  },
  {
    src: "/images/elderly-patient-vision-testing-trial-frames-alt.webp",
    altEn: "Vision Testing Room",
    altTa: "பார்வை பரிசோதனை அறை",
  },
  {
    src: "/images/eye-surgery-procedure-in-progress.webp",
    altEn: "Surgical Suite",
    altTa: "அறுவை சிகிச்சை கூடம்",
  },
];

const TECHNOLOGY_IMAGES = [
  {
    src: "/images/advanced-operating-room-surgical-microscope.webp",
    altEn: "Advanced Surgical Microscope",
    altTa: "மேம்பட்ட அறுவை சிகிச்சை நுண்ணோக்கி",
  },
  {
    src: "/images/technician-performing-oct-eye-scan.webp",
    altEn: "A-Scan",
    altTa: "ஏ-ஸ்கேன்",
  },
  {
    src: "/images/patient-glaucoma-screening-machine.webp",
    altEn: "Glaucoma Screening Machine",
    altTa: "குளுக்கோமா பரிசோதனை இயந்திரம்",
  },
  {
    src: "/images/patient-eye-examination-autorefractor.webp",
    altEn: "Autorefractor",
    altTa: "தானியங்கி ஒளிவிலகல் கருவி",
  },
  {
    src: "/images/extreme-closeup-retina-examination.webp",
    altEn: "Retina Examination",
    altTa: "விழித்திரை பரிசோதனை",
  },
  {
    src: "/images/doctor-slit-lamp-eye-examination.webp",
    altEn: "YAG Laser Treatment",
    altTa: "யாக் லேசர் சிகிச்சை",
  },
  {
    src: "/images/elderly-patient-vision-testing-trial-frames.webp",
    altEn: "Comprehensive Eye Exam",
    altTa: "முழுமையான கண் பரிசோதனை",
  },
  {
    src: "/images/oct.webp",
    altEn: "OCT Scan",
    altTa: "ஓசிடி ஸ்கேன்",
  },
  {
    src: "/images/slit-lamp-examination.webp",
    altEn: "Slit Lamp Examination",
    altTa: "பிளவு விளக்கு பரிசோதனை",
  },
];

const COMMUNITY_IMAGES = [
  {
    src: "/images/camps/camp-kanjampatti-jan-2026-1.jpg",
    altEn: "Kanjampatti Eye Camp",
    altTa: "கஞ்சம்பட்டி கண் முகாம்",
  },
  {
    src: "/images/camps/camp-free-medical-feb-2026-1.jpg",
    altEn: "Free Medical Camp",
    altTa: "இலவச மருத்துவ முகாம்",
  },
  {
    src: "/images/camps/camp-rto-premises-aug-2026-1.jpg",
    altEn: "RTO Premises Camp",
    altTa: "RTO வளாக முகாம்",
  },
  {
    src: "/images/camps/camp-kanjampatti-jan-2026-5.jpg",
    altEn: "Patient Screening",
    altTa: "நோயாளிகள் பரிசோதனை",
  },
  {
    src: "/images/camps/camp-free-medical-feb-2026-3.jpg",
    altEn: "Vision Testing",
    altTa: "பார்வை பரிசோதனை",
  },
  {
    src: "/images/camps/camp-rto-premises-aug-2026-3.jpg",
    altEn: "Community Outreach",
    altTa: "சமூக சேவை",
  },
  {
    src: "/images/camps/camp-kanjampatti-jan-2026-3.jpg",
    altEn: "Eye Health Awareness",
    altTa: "கண் ஆரோக்கிய விழிப்புணர்வு",
  },
];

export default function GalleryPage() {
  return (
    <>
      <GalleryHero />
      
      <GallerySection
        eyebrowEn="01 / Infrastructure"
        eyebrowTa="01 / உள்கட்டமைப்பு"
        titleEn="Our Facilities"
        titleTa="எங்கள் வசதிகள்"
        descriptionEn="A pristine, comfortable environment designed around patient safety, hygiene, and stress-free recovery."
        descriptionTa="நோயாளிகளின் பாதுகாப்பு, சுகாதாரம் மற்றும் மன அழுத்தமில்லாத மீட்பு ஆகியவற்றை மையமாகக் கொண்டு வடிவமைக்கப்பட்ட தூய்மையான, வசதியான சூழல்."
        items={FACILITIES_IMAGES}
      />

      <GallerySection
        eyebrowEn="02 / Equipment"
        eyebrowTa="02 / உபகரணங்கள்"
        titleEn="Advanced Technology"
        titleTa="அதிநவீன தொழில்நுட்பம்"
        descriptionEn="We continually invest in world-class diagnostic and surgical technology to ensure the highest precision and the best possible outcomes."
        descriptionTa="மிக உயர்ந்த துல்லியம் மற்றும் சிறந்த முடிவுகளை உறுதி செய்வதற்காக, உலகத்தரம் வாய்ந்த கண்டறியும் மற்றும் அறுவை சிகிச்சை தொழில்நுட்பங்களில் நாங்கள் தொடர்ந்து முதலீடு செய்கிறோம்."
        items={TECHNOLOGY_IMAGES}
      />

      <GallerySection
        eyebrowEn="03 / Outreach"
        eyebrowTa="03 / மக்கள் தொடர்பு"
        titleEn="Community Camps"
        titleTa="சமூக முகாம்கள்"
        descriptionEn="Bringing quality eye care to those who need it most. Our ongoing commitment to eradicating preventable blindness in rural areas."
        descriptionTa="தேவைப்படுபவர்களுக்கு தரமான கண் மருத்துவத்தைக் கொண்டு சேர்த்தல். கிராமப்புறங்களில் தடுக்கக்கூடிய பார்வை இழப்பை ஒழிப்பதில் எங்களின் தொடர்ச்சியான அர்ப்பணிப்பு."
        items={COMMUNITY_IMAGES}
      />
    </>
  );
}
