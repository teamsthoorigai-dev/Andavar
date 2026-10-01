import Link from "next/link";
import Reveal from "@/components/Reveal";
import styles from "./CostSection.module.css";

const TICKS = [
  {
    titleEn: "Chief Minister's Comprehensive Health Insurance Scheme",
    titleTa: "முதலமைச்சரின் விரிவான மருத்துவக் காப்பீட்டுத் திட்டம்",
    bodyEn: "CMCHIS — bring your scheme card and Aadhaar.",
    bodyTa: "CMCHIS — உங்கள் திட்ட அட்டை மற்றும் ஆதாரைக் கொண்டு வாருங்கள்.",
  },
  {
    titleEn: "Pensioners Health Scheme",
    titleTa: "ஓய்வூதியதாரர்கள் மருத்துவக் காப்பீட்டுத் திட்டம்",
    bodyEn: "For retired government employees and their dependants.",
    bodyTa: "ஓய்வு பெற்ற அரசு ஊழியர்கள் மற்றும் அவர்களைச் சார்ந்தவர்களுக்கானது.",
  },
  {
    titleEn: "Other Private Insurances",
    titleTa: "பிற தனியார் காப்பீடுகள்",
    bodyEn: "Cashless, subject to your policy terms.",
    bodyTa: "உங்கள் பாலிசி விதிகளுக்கு உட்பட்டு, பணமில்லாச் சிகிச்சை.",
  },
];

export default function CostSection() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.grid}`}>
        <Reveal targets=":scope > *" stagger={0.09}>
          <span className="eyebrow">
            <span className="en">Cost</span> <span className="ta" lang="ta">செலவு</span>
          </span>
          <h2 className={styles.h2}>
            <span className="en">Insurance, Government Schemes and Treatment Costs</span> <span className="ta" lang="ta">காப்பீடு, அரசுத் திட்டங்கள் மற்றும் சிகிச்சைச் செலவுகள்</span>
          </h2>
          <p className={styles.lede}>
            <span className="en">
              Cost is the question people are most embarrassed to ask and most
              worried about. Here are the schemes we accept, stated plainly.
            </span>
            {" "}
            <span className="ta" lang="ta">
              செலவு என்பது மக்கள் கேட்க மிகவும் தயங்கும் மற்றும் அதிகம் கவலைப்படும் கேள்வியாகும். நாங்கள் ஏற்கும் காப்பீட்டுத் திட்டங்கள் இங்கே தெளிவாகக் கொடுக்கப்பட்டுள்ளன.
            </span>
          </p>
          <Link href="/schemes" className={styles.btnGhost}>
            <span className="en">Schemes &amp; insurance</span> <span className="ta" lang="ta">திட்டங்கள் &amp; காப்பீடு</span>
          </Link>
        </Reveal>

        <Reveal className={styles.card} stagger={0.08}>
          {TICKS.map((t) => (
            <div key={t.titleEn} className={styles.tick}>
              <span className={styles.tickIcon} aria-hidden="true">
                ✓
              </span>
              <div>
                <div className={styles.tickTitle}>
                  <span className="en">{t.titleEn}</span> <span className="ta" lang="ta">{t.titleTa}</span>
                </div>
                <div className={styles.tickBody}>
                  <span className="en">{t.bodyEn}</span> <span className="ta" lang="ta">{t.bodyTa}</span>
                </div>
              </div>
            </div>
          ))}
          <p className={styles.caption}>
            <span className="en">
              We accept 22 different schemes. Not sure whether yours is covered? Call and ask — it takes a
              minute and costs nothing.
            </span>
            {" "}
            <span className="ta" lang="ta">
              நாங்கள் 22 மருத்துவத் திட்டங்களை ஏற்கிறோம். உங்கள் காப்பீடு ஏற்கப்படுமா எனத் தெரியவில்லையா? அழைத்து கேளுங்கள் — இதற்கு ஒரு நிமிடம் மட்டுமே ஆகும், செலவு ஏதுமில்லை.
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
