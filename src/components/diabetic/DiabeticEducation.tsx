import Reveal from "@/components/Reveal";
import styles from "./DiabeticEducation.module.css";

const SYMPTOMS = [
  { en: "Blurred or fluctuating vision", ta: "மங்கலான அல்லது அடிக்கடி மாறும் பார்வை" },
  { en: "Spots or dark strings floating in your vision (floaters)", ta: "பார்வையில் மிதக்கும் கரும்புள்ளிகள் அல்லது கோடுகள்" },
  { en: "Impaired color vision", ta: "நிறங்களை வேறுபடுத்துவதில் சிரமம்" },
  { en: "Dark or empty areas in your vision", ta: "பார்வையில் இருண்ட அல்லது வெற்றிடமான பகுதிகள்" },
];

export default function DiabeticEducation() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.grid}`}>
        <Reveal>
          <div>
            <span className={styles.eyebrow}>
              <span className="en">Understanding Diabetic Retinopathy</span> <span className="ta" lang="ta">சர்க்கரை நோய் விழித்திரை பாதிப்பைப் புரிந்துகொள்ளுதல்</span>
            </span>
            <h2 className={styles.title}>
              <span className="en">How diabetes affects your eyes</span> <span className="ta" lang="ta">சர்க்கரை நோய் உங்கள் கண்களை எவ்வாறு பாதிக்கிறது?</span>
            </h2>
            <p className={styles.body}>
              <span className="en">
                Over time, high blood sugar levels can damage the tiny blood vessels in the retina. These vessels may leak fluid or bleed, distorting your vision. In advanced stages, new abnormal blood vessels may grow, leading to severe vision loss. Regular screening is essential because diabetic retinopathy often has no early warning signs.
              </span>
              {" "}
              <span className="ta" lang="ta">
                காலப்போக்கில், இரத்தத்தில் உள்ள அதிகப்படியான சர்க்கரை அளவு விழித்திரையில் உள்ள நுண்ணிய இரத்த நாளங்களை பாதிக்கலாம். இந்த நாளங்களில் இருந்து திரவம் அல்லது இரத்தம் கசிந்து, உங்கள் பார்வையை மங்கலாக்கலாம். முற்றிய நிலையில், புதிய அசாதாரண இரத்த நாளங்கள் உருவாகி, கடுமையான பார்வை இழப்புக்கு வழிவகுக்கும். ஆரம்ப நிலையில் எவ்வித அறிகுறிகளும் இருக்காது என்பதால், முறையான கண் பரிசோதனை மிகவும் அவசியம்.
              </span>
            </p>
            <h3 style={{ fontSize: '20px', marginBottom: '16px', color: 'var(--ink)' }}>
              <span className="en">Common Symptoms</span>
              <span className="ta" lang="ta">பொதுவான அறிகுறிகள்</span>
            </h3>
            <ul className={styles.symptomList}>
              {SYMPTOMS.map((symptom, i) => (
                <li key={i} className={styles.symptomItem}>
                  <svg className={styles.checkIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="en">{symptom.en}</span> <span className="ta" lang="ta">{symptom.ta}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className={styles.imageCard}>
            <h3>
              <span className="en">Our Approach to Care</span> <span className="ta" lang="ta">எங்கள் சிகிச்சை அணுகுமுறை</span>
            </h3>
            <p>
              <span className="en">
                The key to preventing vision loss is early detection and proactive management. At Shri Andavar Eye Care, we provide comprehensive diabetic eye exams and targeted treatments to protect your sight.
              </span>
              {" "}
              <span className="ta" lang="ta">
                ஆரம்பத்திலேயே கண்டறிந்து சிகிச்சை அளிப்பதே பார்வை இழப்பைத் தடுப்பதற்கான சிறந்த வழியாகும். ஸ்ரீ ஆண்டவர் கண் மருத்துவமனையில், உங்கள் பார்வையைப் பாதுகாக்க முழுமையான சர்க்கரை நோய் கண் பரிசோதனைகள் மற்றும் சிறப்பு சிகிச்சைகளை நாங்கள் வழங்குகிறோம்.
              </span>
            </p>
            
            <div className={styles.techList}>
              <div className={styles.techItem}>
                <div className={styles.techIconBox}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 3h6v6"></path>
                    <path d="M9 21H3v-6"></path>
                    <path d="M21 3l-7 7"></path>
                    <path d="M3 21l7-7"></path>
                  </svg>
                </div>
                <div className={styles.techContent}>
                  <h4>
                    <span className="en">Detailed Screenings</span> <span className="ta" lang="ta">விரிவான பரிசோதனைகள்</span>
                  </h4>
                  <p>
                    <span className="en">We recommend annual dilated eye exams and utilize advanced OCT imaging to monitor the health of your retina closely.</span> <span className="ta" lang="ta">வருடாந்திர முழுமையான கண் பரிசோதனைகளை நாங்கள் பரிந்துரைக்கிறோம், மேலும் உங்கள் விழித்திரையின் ஆரோக்கியத்தை கண்காணிக்க அதிநவீன OCT இமேஜிங் முறையைப் பயன்படுத்துகிறோம்.</span>
                  </p>
                </div>
              </div>

              <div className={styles.techItem}>
                <div className={styles.techIconBox}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <circle cx="12" cy="12" r="4"></circle>
                    <line x1="21.17" y1="8" x2="12" y2="8"></line>
                  </svg>
                </div>
                <div className={styles.techContent}>
                  <h4>
                    <span className="en">Laser Therapy & Injections</span> <span className="ta" lang="ta">லேசர் சிகிச்சை & ஊசிகள்</span>
                  </h4>
                  <p>
                    <span className="en">When needed, precision laser treatments and specialized intravitreal injections are used to stop leakage and preserve vision.</span> <span className="ta" lang="ta">தேவைப்படும்போது, விழித்திரை கசிவை நிறுத்தவும் பார்வையைப் பாதுகாக்கவும் துல்லியமான லேசர் சிகிச்சைகள் மற்றும் சிறப்பு ஊசிகள் (Intravitreal injections) பயன்படுத்தப்படுகின்றன.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
