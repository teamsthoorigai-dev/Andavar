import CampCarousel from "./CampCarousel";

const CAMPS = [
  {
    id: "kanjampatti",
    titleEn: "Free Medical Camp at Kanjampatti",
    titleTa: "கஞ்சம்பட்டியில் இலவச மருத்துவ முகாம்",
    dateEn: "23 Jan 2026",
    dateTa: "23 ஜனவரி 2026",
    descriptionEn: "We organized a comprehensive free medical and eye screening camp in Kanjampatti to bring essential healthcare services closer to the rural population. Over 200 residents received thorough eye examinations. In association with Indian Medical Association.",
    descriptionTa: "கிராமப்புற மக்களுக்கு தேவையான மருத்துவ சேவைகளை கொண்டு சேர்க்கும் நோக்கில் கஞ்சம்பட்டியில் இலவச மருத்துவ மற்றும் கண் பரிசோதனை முகாம் ஒன்றை நடத்தினோம். இந்திய மருத்துவ சங்கத்துடன் இணைந்து.",
    images: [
      "/images/camps/camp-kanjampatti-jan-2026-1.jpg",
      "/images/camps/camp-kanjampatti-jan-2026-2.jpg",
      "/images/camps/camp-kanjampatti-jan-2026-3.jpg",
      "/images/camps/camp-kanjampatti-jan-2026-4.jpg",
      "/images/camps/camp-kanjampatti-jan-2026-5.jpg",
    ],
    reverse: false,
  },
  {
    id: "free-med",
    titleEn: "Free Medical Camp",
    titleTa: "இலவச மருத்துவ முகாம்",
    dateEn: "19 Feb 2026",
    dateTa: "19 பிப்ரவரி 2026",
    descriptionEn: "Our team set up specialized screening stations to detect early signs of cataracts and diabetic retinopathy. Patients requiring advanced care were directed to our main facility for subsidized treatments. In association with Indian Medical Association.",
    descriptionTa: "கண்புரை மற்றும் நீரிழிவு விழித்திரை நோயின் ஆரம்ப அறிகுறிகளைக் கண்டறிய எங்கள் குழு சிறப்பு பரிசோதனை மையங்களை அமைத்தது. இந்திய மருத்துவ சங்கத்துடன் இணைந்து.",
    images: [
      "/images/camps/camp-free-medical-feb-2026-1.jpg",
      "/images/camps/camp-free-medical-feb-2026-2.jpg",
      "/images/camps/camp-free-medical-feb-2026-3.jpg",
      "/images/camps/camp-free-medical-feb-2026-4.jpg",
    ],
    reverse: true, // Details on right, images on left
  },
  {
    id: "rto",
    titleEn: "General Medical Camp at RTO Premises",
    titleTa: "வட்டாரப் போக்குவரத்து அலுவலக வளாகத்தில் பொது மருத்துவ முகாம்",
    dateEn: "19 Aug 2026",
    dateTa: "19 ஆகஸ்ட் 2026",
    descriptionEn: "In partnership with local authorities, we hosted a massive general and vision health camp at the RTO premises. The initiative successfully raised awareness about road safety and clear vision for drivers. In association with Indian Medical Association.",
    descriptionTa: "உள்ளூர் அதிகாரிகளுடன் இணைந்து, வட்டார போக்குவரத்து அலுவலக வளாகத்தில் மாபெரும் பொது மற்றும் கண் சுகாதார முகாமை நடத்தினோம். இந்திய மருத்துவ சங்கத்துடன் இணைந்து.",
    images: [
      "/images/camps/camp-rto-premises-aug-2026-1.jpg",
      "/images/camps/camp-rto-premises-aug-2026-2.jpg",
      "/images/camps/camp-rto-premises-aug-2026-3.jpg",
    ],
    reverse: false,
  }
];

export default function CommunityCamps() {
  return (
    <div>
      {CAMPS.map((camp) => (
        <CampCarousel key={camp.id} {...camp} />
      ))}
    </div>
  );
}
