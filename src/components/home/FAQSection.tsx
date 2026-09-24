"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import styles from "./FAQSection.module.css";

const FAQS = [
  {
    qEn: "When should I visit an eye hospital?",
    qTa: "நான் எப்போது கண் மருத்துவமனைக்குச் செல்ல வேண்டும்?",
    aEn: "If you notice blurred vision, eye pain, frequent headaches, or any sudden change in your sight, get it checked without delay. Even without symptoms, a regular eye check-up every year or two is worth keeping.",
    aTa: "மங்கலான பார்வை, கண் வலி, அடிக்கடி தலைவலி அல்லது உங்கள் பார்வையில் திடீர் மாற்றம் ஏற்பட்டால், தாமதிக்காமல் பரிசோதனை செய்துகொள்ளுங்கள். எந்த அறிகுறியும் இல்லாவிட்டாலும், ஒவ்வொரு ஓரிரு ஆண்டுக்கும் ஒரு முறை வழக்கமான கண் பரிசோதனை செய்துகொள்வது நல்லது.",
  },
  {
    qEn: "How long does cataract surgery take, and is it safe?",
    qTa: "கண்புரை அறுவை சிகிச்சைக்கு எவ்வளவு நேரம் ஆகும், அது பாதுகாப்பானதா?",
    aEn: "Cataract surgery typically takes 15–30 minutes and is done as a day-care procedure, so most patients go home the same day. With proper pre-operative evaluation, it is one of the safest and most commonly performed surgeries in the world.",
    aTa: "கண்புரை அறுவை சிகிச்சை பொதுவாக 15–30 நிமிடங்கள் ஆகும், மேலும் இது ஒரு நாள் சிகிச்சையாகவே செய்யப்படுகிறது — பெரும்பாலான நோயாளிகள் அன்றே வீடு திரும்புவார்கள். சரியான முன் பரிசோதனையுடன் செய்யப்படும்போது, இது உலகின் மிகவும் பாதுகாப்பான, அதிகம் செய்யப்படும் அறுவை சிகிச்சைகளில் ஒன்று.",
  },
  {
    qEn: "What are the early signs of glaucoma?",
    qTa: "கண்ணாடி நோயின் (குளூக்கோமா) ஆரம்ப அறிகுறிகள் என்ன?",
    aEn: "Glaucoma often develops without any noticeable symptoms until vision is already lost, which is why it is called the 'silent thief of sight'. Regular eye pressure testing is the only reliable way to catch it early, before permanent damage occurs.",
    aTa: "குளூக்கோமா பெரும்பாலும் எந்த குறிப்பிடத்தக்க அறிகுறியும் இல்லாமல் உருவாகும், பார்வை ஏற்கனவே பாதிக்கப்பட்ட பிறகே தெரியவரும் — இதனால்தான் இது 'பார்வையின் மௌன திருடன்' என்று அழைக்கப்படுகிறது. நிரந்தர பாதிப்பு ஏற்படுவதற்கு முன் இதை ஆரம்பத்திலேயே கண்டறிய, வழக்கமான கண் அழுத்தப் பரிசோதனையே நம்பகமான வழி.",
  },
  {
    qEn: "I have diabetes — how often should I get my eyes checked?",
    qTa: "எனக்கு நீரிழிவு உள்ளது — எவ்வளவு அடிக்கடி கண் பரிசோதனை செய்துகொள்ள வேண்டும்?",
    aEn: "Diabetics should have a dilated retina check-up at least once a year, even without symptoms, since diabetic retinopathy can silently damage the retina. If any changes are found, your doctor may recommend more frequent visits.",
    aTa: "நீரிழிவு நோயாளர்கள் அறிகுறி இல்லாவிட்டாலும் ஆண்டுக்கு ஒரு முறையாவது விழித்திரையை விரிவாக்கிப் பரிசோதிக்க வேண்டும், ஏனெனில் நீரிழிவு விழித்திரை நோய் (diabetic retinopathy) மௌனமாக விழித்திரையைப் பாதிக்கக்கூடும். ஏதேனும் மாற்றம் கண்டறியப்பட்டால், உங்கள் மருத்துவர் அடிக்கடி பரிசோதனைக்கு வரச் சொல்லலாம்.",
  },
  {
    qEn: "What lens options are available after cataract removal?",
    qTa: "கண்புரை அகற்றிய பின் என்னென்ன லென்ஸ் தேர்வுகள் உள்ளன?",
    aEn: "Once the clouded natural lens is removed, it is replaced with an intraocular lens (IOL). Standard monofocal lenses correct distance vision, while premium options can also reduce your dependence on glasses for near and intermediate vision.",
    aTa: "மங்கலான இயற்கை லென்ஸ் அகற்றப்பட்ட பிறகு, அதற்குப் பதிலாக ஒரு செயற்கை லென்ஸ் (IOL) பொருத்தப்படும். சாதாரண மோனோஃபோகல் லென்ஸ்கள் தொலைவுப் பார்வையைச் சரிசெய்யும், அதே சமயம் பிரீமியம் லென்ஸ் தேர்வுகள் அருகிலும் நடுத்தர தூரத்திலும் கண்ணாடி தேவையைக் குறைக்க உதவும்.",
  },
  {
    qEn: "Will my insurance or government scheme cover the surgery cost?",
    qTa: "எனது காப்பீடு அல்லது அரசு திட்டம் அறுவை சிகிச்சைச் செலவை ஈடுசெய்யுமா?",
    aEn: "Many of our patients use schemes such as CMCHIS, CGHS, and other empanelled insurance covers. What the visit costs, what the procedure costs, and what your scheme covers is explained to you clearly before you commit to anything.",
    aTa: "எங்கள் நோயாளர்களில் பலர் CMCHIS, CGHS போன்ற திட்டங்கள் மற்றும் பிற அங்கீகரிக்கப்பட்ட காப்பீட்டு வசதிகளைப் பயன்படுத்துகின்றனர். பரிசோதனைக்கான கட்டணம், சிகிச்சைக்கான கட்டணம் மற்றும் உங்கள் திட்டத்தில் என்னென்ன அடங்கும் என்பது, நீங்கள் முடிவெடுப்பதற்கு முன்பே தெளிவாக விளக்கப்படும்.",
  },
  {
    qEn: "How soon can I return to normal activity after eye surgery?",
    qTa: "கண் அறுவை சிகிச்சைக்குப் பின் எவ்வளவு விரைவில் வழக்கமான வேலைகளைத் தொடங்கலாம்?",
    aEn: "Most patients resume light daily activity within a day or two, with clearer vision noticeable within a few days. Your surgeon will give you specific guidance on eye drops, protective wear, and when it is safe to resume driving or strenuous work.",
    aTa: "பெரும்பாலான நோயாளர்கள் ஓரிரு நாட்களுக்குள் இலகுவான தினசரி வேலைகளைத் தொடங்கலாம், சில நாட்களுக்குள் பார்வை தெளிவாகத் தொடங்கும். கண் சொட்டு மருந்துகள், பாதுகாப்பு அணிகலன்கள் மற்றும் வாகனம் ஓட்டுதல் அல்லது கடின வேலைகளை எப்போது தொடங்கலாம் என்பது குறித்து உங்கள் அறுவை சிகிச்சை நிபுணர் தெளிவான வழிகாட்டுதல் தருவார்.",
  },
  {
    qEn: "Why are routine eye check-ups important even with good vision?",
    qTa: "பார்வை நன்றாக இருந்தாலும் வழக்கமான கண் பரிசோதனை ஏன் முக்கியம்?",
    aEn: "Conditions like glaucoma, cataracts, and diabetic retinopathy can develop silently, without early symptoms. Routine check-ups catch these changes early — when they are easiest to treat and vision loss is still preventable.",
    aTa: "குளூக்கோமா, கண்புரை, நீரிழிவு விழித்திரை நோய் போன்றவை ஆரம்ப அறிகுறிகள் இல்லாமல் மௌனமாக உருவாகக்கூடும். வழக்கமான பரிசோதனைகள் இந்த மாற்றங்களை ஆரம்பத்திலேயே கண்டறியும் — அப்போதுதான் சிகிச்சை எளிதாகவும், பார்வையிழப்பைத் தடுக்கவும் முடியும்.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className={styles.section} id="faq">
      <div className="container">
        <Reveal className={styles.head}>
          <span className={styles.eyebrow}>
            <span className="en">FAQ</span> <span className="ta" lang="ta">கேள்வி-பதில்</span>
          </span>
          <h2 className={styles.title}>
            <span className="en">Frequently Asked Questions</span> <span className="ta" lang="ta">அடிக்கடி கேட்கப்படும் கேள்விகள்</span>
          </h2>
        </Reveal>

        <Reveal className={styles.list} stagger={0.06}>
          <div className={styles.accordion}>
            {FAQS.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={i} className={styles.item}>
                  <button
                    type="button"
                    className={styles.question}
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <span className={styles.questionText}>
                      <span className="en">{faq.qEn}</span> <span className="ta" lang="ta">{faq.qTa}</span>
                    </span>
                    <span className={`${styles.icon} ${isOpen ? styles.iconOpen : ""}`}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </span>
                  </button>
                  <div className={`${styles.answer} ${isOpen ? styles.answerOpen : ""}`}>
                    <div className={styles.answerInner}>
                      <span className="en">{faq.aEn}</span> <span className="ta" lang="ta">{faq.aTa}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
