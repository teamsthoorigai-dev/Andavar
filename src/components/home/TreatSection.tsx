import Link from "next/link";
import Reveal from "@/components/Reveal";
import styles from "./TreatSection.module.css";

const CARDS = [
  {
    symptomEn: "Things look cloudy, faded or washed out",
    symptomTa: "பார்வை மங்கலாக அல்லது வெளிறியதாக இருத்தல்",
    titleEn: "Cataract Surgery",
    titleTa: "கண்புரை அறுவை சிகிச்சை",
    bodyEn: "The lens inside your eye has clouded. It is replaced with a clear artificial one in a day-care procedure.",
    bodyTa: "உங்கள் கண்ணின் உள்ளே உள்ள லென்ஸ் மங்கலாகிவிட்டது. இது ஒரு நாள் சிகிச்சையில் தெளிவான செயற்கை லென்ஸால் மாற்றப்படுகிறது.",
    href: "/cataract-surgery",
  },
  {
    symptomEn: "A shadow, floaters or sudden blurring",
    symptomTa: "பார்வையில் நிழல், மிதக்கும் துகள்கள் அல்லது திடீர் மங்கல்",
    titleEn: "Retina Care",
    titleTa: "விழித்திரை சிகிச்சை",
    bodyEn: "Retinal detachment, macular disease and laser treatment for the eye's most delicate layer.",
    bodyTa: "விழித்திரை விலகல், மேக்குலர் நோய் மற்றும் கண்ணின் மிக நுண்ணிய அடுக்கான விழித்திரைக்கு லேசர் சிகிச்சை.",
    href: "/treatments",
  },
  {
    symptomEn: "You have diabetes and have not had your eyes checked",
    symptomTa: "உங்களுக்கு நீரிழிவு நோய் உள்ளது மற்றும் உங்கள் கண்களை பரிசோதிக்கவில்லை",
    titleEn: "Diabetic Eye Care",
    titleTa: "நீரிழிவு கண் பராமரிப்பு",
    bodyEn: "A yearly screening catches damage at the back of the eye long before you would notice it.",
    bodyTa: "ஆண்டுதோறும் செய்யப்படும் பரிசோதனை, நீங்கள் உணர்வதற்கு நீண்ட காலத்திற்கு முன்பே கண்ணின் பின்புறத்தில் ஏற்படும் பாதிப்பைக் கண்டறிகிறது.",
    href: "/treatments",
  },
  {
    symptomEn: "Headaches, or glaucoma in the family",
    symptomTa: "தலைவலி, அல்லது குடும்பத்தில் குளுக்கோமா (கண் நீர் அழுத்த நோய்) இருத்தல்",
    titleEn: "Glaucoma & Check-ups",
    titleTa: "குளுக்கோமா மற்றும் பரிசோதனைகள்",
    bodyEn: "Pressure testing and long-term monitoring for a condition that takes sight quietly.",
    bodyTa: "பார்வையை அமைதியாகப் பறிக்கும் இந்த நிலைக்கு, கண் அழுத்தப் பரிசோதனை மற்றும் நீண்ட கால கண்காணிப்பு.",
    href: "/treatments",
  },
];

export default function TreatSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <Reveal className={styles.head}>
          <span className="eyebrow">
            <span className="en">What we treat</span> <span className="ta" lang="ta">நாங்கள் அளிக்கும் சிகிச்சைகள்</span>
          </span>
          <h2 className={styles.h2}>
            <span className="en">Eye Conditions and Treatments</span> <span className="ta" lang="ta">கண் பாதிப்புகளும் சிகிச்சைகளும்</span>
          </h2>
        </Reveal>

        <Reveal className={styles.grid} stagger={0.08}>
          {CARDS.map((c) => (
            <div key={c.titleEn} className={styles.card}>
              <span aria-hidden="true" className={styles.corner} />
              <div className={styles.symptom}>
                <span className="en">{c.symptomEn}</span> <span className="ta" lang="ta">{c.symptomTa}</span>
              </div>
              <h3 className={styles.title}>
                <span className="en">{c.titleEn}</span> <span className="ta" lang="ta">{c.titleTa}</span>
              </h3>
              <p className={styles.body}>
                <span className="en">{c.bodyEn}</span> <span className="ta" lang="ta">{c.bodyTa}</span>
              </p>
              <Link href={c.href} className={styles.link}>
                <span className="en">Read more →</span> <span className="ta" lang="ta">மேலும் படிக்க →</span>
              </Link>
            </div>
          ))}
        </Reveal>

        <div className={styles.more}>
          <Link href="/treatments">
            <span className="en">See everything we treat →</span> <span className="ta" lang="ta">அனைத்து சிகிச்சைகளையும் பார்க்க →</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
