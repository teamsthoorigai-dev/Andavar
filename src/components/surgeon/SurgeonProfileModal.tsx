"use client";

import { useEffect, type ReactNode } from "react";
import styles from "./SurgeonProfileModal.module.css";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

// Renders both languages; globals.css shows the one matching html[data-lang].
function T({ en, ta }: { en: ReactNode; ta: ReactNode }) {
  return (
    <>
      <span className="en">{en}</span>
      <span className="ta" lang="ta">{ta}</span>
    </>
  );
}

const BIOGRAPHY = [
  {
    en: "Completed his MBBS at Madras Medical College from 1985 to 1990.",
    ta: "1985 முதல் 1990 வரை மெட்ராஸ் மருத்துவக் கல்லூரியில் MBBS படிப்பை முடித்தார்.",
  },
  {
    en: "Successfully cleared the United States Medical Licensing Examination (USMLE) in 1994.",
    ta: "1994-ல் அமெரிக்க மருத்துவ உரிமத் தேர்வில் (USMLE) வெற்றிகரமாகத் தேர்ச்சி பெற்றார்.",
  },
  {
    en: "Pursued his Diploma in Ophthalmology (D.O.) at the Regional Institute of Ophthalmology and Government Ophthalmic Hospital (RIO-GOH), Chennai (1996 - 1998).",
    ta: "சென்னை மண்டல கண் மருத்துவ நிறுவனம் மற்றும் அரசு கண் மருத்துவமனையில் (RIO-GOH) கண் மருத்துவப் பட்டயப் படிப்பை (D.O.) மேற்கொண்டார் (1996 - 1998).",
  },
  {
    en: "Completed his DNB in Ophthalmology at Aravind Eye Hospital, Madurai (1998 - 2000).",
    ta: "மதுரை அரவிந்த் கண் மருத்துவமனையில் கண் மருத்துவத்தில் DNB படிப்பை முடித்தார் (1998 - 2000).",
  },
  {
    en: "Joined Aravind Eye Hospital, Coimbatore, as a Medical Officer in the Department of Vitreo-Retina in 2000.",
    ta: "2000-ல் கோயம்புத்தூர் அரவிந்த் கண் மருத்துவமனையின் விட்ரியோ-ரெட்டினா துறையில் மருத்துவ அலுவலராகச் சேர்ந்தார்.",
  },
  {
    en: "Cleared his FRCS (GLASG) in 2001.",
    ta: "2001-ல் FRCS (கிளாஸ்கோ) தேர்வில் தேர்ச்சி பெற்றார்.",
  },
  {
    en: "Became a consultant in the Department of Vitreo-Retina in 2003 at Aravind Eye Hospital, Coimbatore.",
    ta: "2003-ல் கோயம்புத்தூர் அரவிந்த் கண் மருத்துவமனையின் விட்ரியோ-ரெட்டினா துறையில் ஆலோசகர் மருத்துவரானார்.",
  },
  {
    en: "Visited the United Kingdom for observational training in 2003.",
    ta: "2003-ல் கண்காணிப்புப் பயிற்சிக்காக ஐக்கிய ராஜ்ஜியம் சென்றார்.",
  },
  {
    en: "Travelled to the United States for observation and advanced training at Johns Hopkins Hospital, Baltimore and macular consultants in New York under Professor Dr. Richard Spade and Professor Dr. Yanuzi (2005).",
    ta: "பால்டிமோர் ஜான்ஸ் ஹாப்கின்ஸ் மருத்துவமனையிலும், நியூயார்க்கில் பேராசிரியர் டாக்டர் ரிச்சர்ட் ஸ்பேட் மற்றும் பேராசிரியர் டாக்டர் யானுசி ஆகியோரின் கீழ் மாகுலர் ஆலோசகர்களிடமும் கண்காணிப்பு மற்றும் மேம்பட்ட பயிற்சிக்காக அமெரிக்கா சென்றார் (2005).",
  },
  {
    en: "Started his freelancing practice in Pollachi, Coimbatore, Erode, and Salem in 2008. Also joined PSG Hospital, Coimbatore, as a Visiting Consultant.",
    ta: "2008-ல் பொள்ளாச்சி, கோயம்புத்தூர், ஈரோடு மற்றும் சேலத்தில் தனது சுயாதீன மருத்துவப் பணியைத் தொடங்கினார். மேலும் கோயம்புத்தூர் PSG மருத்துவமனையில் வருகைதரு ஆலோசகராகவும் இணைந்தார்.",
  },
];

const SURGERIES = [
  { count: "30,000+", en: "cataract surgeries", ta: "கண்புரை அறுவை சிகிச்சைகள்" },
  { count: "10,000+", en: "anterior-segment surgeries", ta: "கண்ணின் முன்பகுதி (ஆன்டீரியர் செக்மென்ட்) அறுவை சிகிச்சைகள்" },
  {
    count: "30,000+",
    en: "Vitreo Retinal procedures, including laser photocoagulation, intravitreal injections, and vitreoretinal surgeries.",
    ta: "விட்ரியோ ரெட்டினல் சிகிச்சைகள் — லேசர் ஃபோட்டோகோயாகுலேஷன், கண்ணுக்குள் செலுத்தப்படும் ஊசிகள் மற்றும் விட்ரியோரெட்டினல் அறுவை சிகிச்சைகள் உட்பட.",
  },
];

const EDUCATION = [
  {
    year: "1990",
    en: "MBBS, Madras Medical College, Madras University, India.",
    ta: "MBBS, மெட்ராஸ் மருத்துவக் கல்லூரி, சென்னைப் பல்கலைக்கழகம், இந்தியா.",
  },
  {
    year: "1998",
    en: "Diploma in Ophthalmology (DO), Regional Institute of Ophthalmology & Government Ophthalmic Hospital, Chennai.",
    ta: "கண் மருத்துவப் பட்டயம் (DO), மண்டல கண் மருத்துவ நிறுவனம் & அரசு கண் மருத்துவமனை, சென்னை.",
  },
  {
    year: "2000",
    en: "Diplomate of National Board (Dip.N.B.), Aravind Eye Hospital, Madurai.",
    ta: "டிப்ளோமேட் ஆஃப் நேஷனல் போர்டு (Dip.N.B.), அரவிந்த் கண் மருத்துவமனை, மதுரை.",
  },
  {
    year: "2003",
    en: "FRCS, Royal College of Physicians and Surgeons, Glasgow, U.K.",
    ta: "FRCS, ராயல் காலேஜ் ஆஃப் பிசிஷியன்ஸ் அண்ட் சர்ஜன்ஸ், கிளாஸ்கோ, ஐக்கிய ராஜ்ஜியம்.",
  },
];

const WORK = [
  {
    periodEn: "2008 – Present",
    periodTa: "2008 – தற்போது வரை",
    en: "Chief Medical Officer – Shri Andavar Eye Care and Retina Centre, Pollachi.",
    ta: "தலைமை மருத்துவ அலுவலர் – ஸ்ரீ ஆண்டவர் ஐ கேர் அண்ட் ரெட்டினா சென்டர், பொள்ளாச்சி.",
  },
  {
    periodEn: "2003 – 2008",
    periodTa: "2003 – 2008",
    en: "Consultant Vitreo Retinal Surgeon and Assistant Professor of Ophthalmology, Aravind Eye Hospital, Coimbatore.",
    ta: "ஆலோசகர் விட்ரியோ ரெட்டினல் அறுவை சிகிச்சை நிபுணர் மற்றும் கண் மருத்துவ உதவிப் பேராசிரியர், அரவிந்த் கண் மருத்துவமனை, கோயம்புத்தூர்.",
  },
  {
    periodEn: "2000 – 2003",
    periodTa: "2000 – 2003",
    en: "Medical Officer, Department of Retina, Aravind Eye Hospital, Coimbatore.",
    ta: "மருத்துவ அலுவலர், விழித்திரைத் துறை, அரவிந்த் கண் மருத்துவமனை, கோயம்புத்தூர்.",
  },
];

const MEMBERSHIPS = [
  {
    en: "Tamilnadu Ophthalmic Association (TNOA) (Life Member)",
    ta: "தமிழ்நாடு கண் மருத்துவ சங்கம் (TNOA) (ஆயுள் உறுப்பினர்)",
  },
  {
    en: "Vitreo Retinal Society of India (VRSI) (Life Member)",
    ta: "இந்திய விட்ரியோ ரெட்டினல் சங்கம் (VRSI) (ஆயுள் உறுப்பினர்)",
  },
  {
    en: "All India Ophthalmic Society (AIOS) (Life Member)",
    ta: "அகில இந்திய கண் மருத்துவ சங்கம் (AIOS) (ஆயுள் உறுப்பினர்)",
  },
];

// Tamil citations transliterate author names too; the English list keeps the published form.
const PUBLICATIONS = [
  {
    en: "Raghuram A, Saravanan VR, Narendren V. Intracameral injection of bevacizumab (Avastin) to treat anterior chamber neovascular membrane in a painful blind eye. Indian J Ophthalmol 2007;55;460",
    ta: "ரகுராம் ஏ, சரவணன் வி.ஆர், நரேந்திரன் வி. வலிமிகுந்த பார்வையற்ற கண்ணில் முன்னறை நியோவாஸ்குலர் சவ்வுக்குச் சிகிச்சையளிக்க பெவாசிசுமாப் (அவாஸ்டின்) மருந்தை முன்னறைக்குள் செலுத்துதல். இந்தியன் ஜர்னல் ஆஃப் ஆப்தால்மாலஜி, 2007; 55: 460.",
  },
  {
    en: "\"Diabetic Retinopathy among self reported diabetics in south India – a population based assessment\" BJO Vol : 86(9)2002 Sep p1014 – 1018. Narendran V, John RK, Raghuram A, Ravindran R.D., Nimalan P.K., Thulasiraj R.D.",
    ta: "\"தென்னிந்தியாவில் நீரிழிவு உள்ளதாகத் தாங்களே தெரிவித்தவர்களிடையே நீரிழிவு விழித்திரை நோய் – மக்கள்தொகை அடிப்படையிலான மதிப்பீடு\". பிரிட்டிஷ் ஜர்னல் ஆஃப் ஆப்தால்மாலஜி (BJO), தொகுதி 86(9), செப்டம்பர் 2002, பக்கம் 1014 – 1018. நரேந்திரன் வி, ஜான் ஆர்.கே, ரகுராம் ஏ, ரவீந்திரன் ஆர்.டி, நிமலன் பி.கே, துளசிராஜ் ஆர்.டி.",
  },
  {
    en: "Fulminate retinopathy of prematurity – Clinical characteristics and laser outcome. Shah Parag K, Narendran V, Saravanan VR, Raghuram A, Chattopadhyay Abhijit, Kashyap Maithreyi, Morris Rodney J, Vijay N, Raghuraman V, Shah Virna. Indian Journal of Ophthalmology, Year 2005, Volume 53, Issue 4",
    ta: "குறைப்பிரசவக் குழந்தைகளின் தீவிர விழித்திரை நோய் – மருத்துவப் பண்புகளும் லேசர் சிகிச்சை முடிவுகளும். ஷா பராக் கே, நரேந்திரன் வி, சரவணன் வி.ஆர், ரகுராம் ஏ, சட்டோபாத்யாய் அபிஜித், காஷ்யப் மைத்ரேயி, மோரிஸ் ராட்னி ஜே, விஜய் என், ரகுராமன் வி, ஷா விர்னா. இந்தியன் ஜர்னல் ஆஃப் ஆப்தால்மாலஜி, 2005, தொகுதி 53, இதழ் 4.",
  },
  {
    en: "Screening for retinopathy of prematurity – a comparison between binocular indirect ophthalmology and Retcam 120. Shah Parag K, Narendran V, Saravanan VR, Raghuram A, Chattopadhyay Abhijit, Kashyap Maithreyi. Indian Journal of Ophthalmology, Year 2006, Volume 54, Issue 1",
    ta: "குறைப்பிரசவக் குழந்தைகளின் விழித்திரை நோய்க்கான பரிசோதனை – பைனாகுலர் இன்டைரக்ட் ஆப்தால்மாஸ்கோபி மற்றும் ரெட்கேம் 120 இடையேயான ஒப்பீடு. ஷா பராக் கே, நரேந்திரன் வி, சரவணன் வி.ஆர், ரகுராம் ஏ, சட்டோபாத்யாய் அபிஜித், காஷ்யப் மைத்ரேயி. இந்தியன் ஜர்னல் ஆஃப் ஆப்தால்மாலஜி, 2006, தொகுதி 54, இதழ் 1.",
  },
  {
    en: "Fulminate type of retinopathy of prematurity. Shah Parag K, Narendran V, Saravanan VR, Raghuram A, Chattopadhyay Abhijit, Kashyap Maithreyi, Devraj Sasikumar. Indian Journal of Ophathalmology, Year 2004, Volume 52, Issue 4",
    ta: "குறைப்பிரசவக் குழந்தைகளின் விழித்திரை நோயின் தீவிர வகை. ஷா பராக் கே, நரேந்திரன் வி, சரவணன் வி.ஆர், ரகுராம் ஏ, சட்டோபாத்யாய் அபிஜித், காஷ்யப் மைத்ரேயி, தேவராஜ் சசிகுமார். இந்தியன் ஜர்னல் ஆஃப் ஆப்தால்மாலஜி, 2004, தொகுதி 52, இதழ் 4.",
  },
  {
    en: "Intravitreal bevacizumab (Avastin) for post laser anterior segment ischemia in aggressive posterior retinopathy of prematurity. Shah Parag K, Narendran V, Tawansy Khaled A, Raghuram A, Narendran Kalpana. Indian Journal of Ophthalmology, Year 2007, Volume 55, Issue 1",
    ta: "குறைப்பிரசவக் குழந்தைகளின் தீவிர பின்பகுதி விழித்திரை நோயில், லேசர் சிகிச்சைக்குப் பின் கண்ணின் முன்பகுதியில் ஏற்படும் இரத்த ஓட்டக் குறைபாட்டுக்கு (இஸ்கீமியா) கண்ணுக்குள் பெவாசிசுமாப் (அவாஸ்டின்) செலுத்துதல். ஷா பராக் கே, நரேந்திரன் வி, தவான்சி காலித் ஏ, ரகுராம் ஏ, நரேந்திரன் கல்பனா. இந்தியன் ஜர்னல் ஆஃப் ஆப்தால்மாலஜி, 2007, தொகுதி 55, இதழ் 1.",
  },
  {
    en: "Manikandan P, Bhaskar M, Manohar Babu B, Raghuram A, Narendran V. Outbreak of Ocular Toxoplamosis in Coimbatore, India. Indian Journal Ophthalmology. 2006;54;129 – 131",
    ta: "மணிகண்டன் பி, பாஸ்கர் எம், மனோகர் பாபு பி, ரகுராம் ஏ, நரேந்திரன் வி. இந்தியாவின் கோயம்புத்தூரில் கண் டாக்சோபிளாஸ்மோசிஸ் நோய்ப் பரவல். இந்தியன் ஜர்னல் ஆஃப் ஆப்தால்மாலஜி, 2006; 54: 129 – 131.",
  },
];

const RURAL_WORK = [
  {
    en: "Dr. A. Raghuram runs Shri Andavar Eye Care and Retina Centre in Pollachi, situated in the rural area of Coimbatore District.",
    ta: "கோயம்புத்தூர் மாவட்டத்தின் கிராமப்புறப் பகுதியான பொள்ளாச்சியில் அமைந்துள்ள ஸ்ரீ ஆண்டவர் ஐ கேர் அண்ட் ரெட்டினா சென்டரை டாக்டர் ஏ. ரகுராம் நடத்தி வருகிறார்.",
  },
  {
    en: "The hospital regularly conducts free eye camps in the remote rural areas of Coimbatore district under the Tamilnadu Chief Minister’s Comprehensive Health Insurance Scheme (CMCHIS) & Pradhan Mantri Ayushman Bharath Arogya Yojana scheme (AB-PMJAY).",
    ta: "தமிழ்நாடு முதலமைச்சரின் விரிவான மருத்துவக் காப்பீட்டுத் திட்டம் (CMCHIS) மற்றும் பிரதம மந்திரி ஆயுஷ்மான் பாரத் ஆரோக்கிய யோஜனா (AB-PMJAY) திட்டங்களின் கீழ், கோயம்புத்தூர் மாவட்டத்தின் தொலைதூரக் கிராமப்புறங்களில் இம்மருத்துவமனை தொடர்ந்து இலவசக் கண் பரிசோதனை முகாம்களை நடத்தி வருகிறது.",
  },
  {
    en: "In these free eye camps, people are screened for Diabetic Retinopathy, Glaucoma, refractive errors, and cataract, picking up early cases and providing timely treatment.",
    ta: "இந்த இலவச முகாம்களில் நீரிழிவு விழித்திரை நோய், குளுக்கோமா (கண் அழுத்த நோய்), பார்வைக் குறைபாடுகள் மற்றும் கண்புரை ஆகியவற்றுக்கு மக்கள் பரிசோதிக்கப்படுகின்றனர்; நோய்கள் ஆரம்ப நிலையிலேயே கண்டறியப்பட்டு உரிய நேரத்தில் சிகிச்சை அளிக்கப்படுகிறது.",
  },
  {
    en: "For these efforts, the hospital was awarded a Certificate of Appreciation for quality adherence under the CMCHIS and AB-PMJAY schemes at the 2021 Republic Day function in Coimbatore by the District Collector.",
    ta: "இம்முயற்சிகளுக்காக, CMCHIS மற்றும் AB-PMJAY திட்டங்களின் கீழ் தரத்தைக் கடைப்பிடித்ததற்கான பாராட்டுச் சான்றிதழ், 2021 குடியரசு தின விழாவில் கோயம்புத்தூர் மாவட்ட ஆட்சியரால் இம்மருத்துவமனைக்கு வழங்கப்பட்டது.",
  },
];

export default function SurgeonProfileModal({ isOpen, onClose }: Props) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()} data-lenis-prevent>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close modal">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className={styles.content}>
          <h2 className={styles.title}>
            <T en="Dr. A. Raghuram" ta="டாக்டர் ஏ. ரகுராம்" />
          </h2>
          <p className={styles.subtitle}>
            <T en="Professional Biography & Full CV" ta="தொழில்முறை வாழ்க்கை வரலாறு & முழு விவரக்குறிப்பு" />
          </p>

          <div className={styles.section}>
            <h3><T en="Professional Biography" ta="தொழில்முறை வாழ்க்கை வரலாறு" /></h3>
            <ul className={styles.list}>
              {BIOGRAPHY.map((item) => (
                <li key={item.en}><T en={item.en} ta={item.ta} /></li>
              ))}
            </ul>
          </div>

          <div className={styles.section}>
            <h3><T en="Surgical Experience" ta="அறுவை சிகிச்சை அனுபவம்" /></h3>
            <p>
              <T
                en="Dr. A. Raghuram has extensive experience in ophthalmic surgery. He has performed:"
                ta="டாக்டர் ஏ. ரகுராம் கண் அறுவை சிகிச்சையில் விரிவான அனுபவம் பெற்றவர். அவர் செய்துள்ளவை:"
              />
            </p>
            <ul className={styles.list}>
              {SURGERIES.map((item) => (
                <li key={item.en}>
                  <strong>{item.count}</strong> <T en={item.en} ta={item.ta} />
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.section}>
            <h3><T en="Educational Qualifications" ta="கல்வித் தகுதிகள்" /></h3>
            <ul className={styles.timeline}>
              {EDUCATION.map((item) => (
                <li key={item.year}>
                  <strong>{item.year}</strong> <span><T en={item.en} ta={item.ta} /></span>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.section}>
            <h3><T en="Work Experience" ta="பணி அனுபவம்" /></h3>
            <ul className={styles.timeline}>
              {WORK.map((item) => (
                <li key={item.periodEn}>
                  <strong><T en={item.periodEn} ta={item.periodTa} /></strong> <span><T en={item.en} ta={item.ta} /></span>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.section}>
            <h3><T en="Memberships" ta="உறுப்பினர் பதவிகள்" /></h3>
            <ul className={styles.list}>
              {MEMBERSHIPS.map((item) => (
                <li key={item.en}><T en={item.en} ta={item.ta} /></li>
              ))}
            </ul>
          </div>

          <div className={styles.section}>
            <h3><T en="Publications" ta="ஆய்வு வெளியீடுகள்" /></h3>
            <ol className={styles.numberedList}>
              {PUBLICATIONS.map((item) => (
                <li key={item.en}><T en={item.en} ta={item.ta} /></li>
              ))}
            </ol>
          </div>

          <div className={styles.section}>
            <h3>
              <T
                en="Work in Rural Areas to Prevent Blindness"
                ta="பார்வையிழப்பைத் தடுக்க கிராமப்புறங்களில் ஆற்றும் பணி"
              />
            </h3>
            {RURAL_WORK.map((item) => (
              <p key={item.en}><T en={item.en} ta={item.ta} /></p>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
