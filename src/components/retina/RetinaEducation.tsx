import Reveal from "@/components/Reveal";
import styles from "./RetinaEducation.module.css";

const CONDITIONS = [
  { en: "Diabetic Retinopathy", ta: "சர்க்கரை நோய் விழித்திரை பாதிப்பு" },
  { en: "Age-Related Macular Degeneration (ARMD)", ta: "வயது முதிர்வால் ஏற்படும் விழித்திரை சிதைவு" },
  { en: "Retinal Tears and Detachments", ta: "விழித்திரை கிழிசல் மற்றும் விலகல்" },
  { en: "Hypertensive Retinopathy", ta: "உயர் இரத்த அழுத்தத்தால் ஏற்படும் விழித்திரை பாதிப்பு" },
];

export default function RetinaEducation() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.grid}`}>
        <Reveal>
          <div>
            <span className={styles.eyebrow}>
              <span className="en">Understanding the Retina</span> <span className="ta" lang="ta">விழித்திரையைப் புரிந்துகொள்ளுதல்</span>
            </span>
            <h2 className={styles.title}>
              <span className="en">What is happening to your vision?</span> <span className="ta" lang="ta">உங்கள் பார்வைக்கு என்ன நடக்கிறது?</span>
            </h2>
            <p className={styles.body}>
              <span className="en">
                Think of the retina as the film in a camera. It is the light-sensitive tissue at the back of your eye that captures images and sends them to your brain. If the retina is damaged, the image sent to the brain will be blurry or distorted, regardless of how clear the front of the eye is.
              </span>
              {" "}
              <span className="ta" lang="ta">
                விழித்திரையை ஒரு கேமராவின் பிலிம் (film) போல நினைத்துக் கொள்ளுங்கள். இது உங்கள் கண்ணின் பின்பகுதியில் உள்ள ஒளியை உணரும் திசுவாகும், இது படங்களை படம்பிடித்து உங்கள் மூளைக்கு அனுப்புகிறது. விழித்திரை பாதிக்கப்பட்டால், கண்ணின் முன்பகுதி எவ்வளவு தெளிவாக இருந்தாலும், மூளைக்கு அனுப்பப்படும் படம் மங்கலாகவோ அல்லது சிதைந்தோ இருக்கும்.
              </span>
            </p>
            <h3 style={{ fontSize: '20px', marginBottom: '16px', color: 'var(--ink)' }}>
              <span className="en">Common Retinal Conditions</span>
              <span className="ta" lang="ta">பொதுவான விழித்திரை குறைபாடுகள்</span>
            </h3>
            <ul className={styles.symptomList}>
              {CONDITIONS.map((condition, i) => (
                <li key={i} className={styles.symptomItem}>
                  <svg className={styles.checkIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="en">{condition.en}</span> <span className="ta" lang="ta">{condition.ta}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className={styles.imageCard}>
            <h3>
              <span className="en">Advanced Diagnostics & Treatment</span> <span className="ta" lang="ta">மேம்பட்ட நோயறிதல் மற்றும் சிகிச்சை</span>
            </h3>
            <p>
              <span className="en">
                Early detection is crucial for treating retinal conditions. At Shri Andavar Eye Care, we use state-of-the-art imaging technology to view the retina in microscopic detail, allowing us to catch and treat issues early.
              </span>
              {" "}
              <span className="ta" lang="ta">
                விழித்திரை குறைபாடுகளுக்கு ஆரம்பத்திலேயே சிகிச்சை அளிப்பது மிகவும் முக்கியம். ஸ்ரீ ஆண்டவர் கண் மருத்துவமனையில், விழித்திரையை நுண்ணிய அளவில் பரிசோதிக்க அதிநவீன ஸ்கேன் தொழில்நுட்பங்களைப் பயன்படுத்துகிறோம். இதன்மூலம் கண் சார்ந்த பிரச்சனைகளை ஆரம்ப நிலையிலேயே கண்டறிந்து சிகிச்சை அளிக்க முடியும்.
              </span>
            </p>
            
            <div className={styles.techList}>
              <div className={styles.techItem}>
                <div className={styles.techIconBox}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 12h4l3-9 5 18 3-9h5"/>
                  </svg>
                </div>
                <div className={styles.techContent}>
                  <h4>
                    <span className="en">OCT Scans</span> <span className="ta" lang="ta">OCT ஸ்கேன்</span>
                  </h4>
                  <p>
                    <span className="en">Optical Coherence Tomography (OCT) provides highly detailed, cross-sectional 3D images of the retina to spot early signs of damage.</span> <span className="ta" lang="ta">ஆப்டிகல் கோஹரன்ஸ் டோமோகிராபி (OCT) ஆனது விழித்திரையின் மிகத் துல்லியமான, 3D குறுக்குவெட்டுப் படங்களை வழங்கி, விழித்திரை பாதிப்புகளை ஆரம்பத்திலேயே கண்டறிய உதவுகிறது.</span>
                  </p>
                </div>
              </div>

              <div className={styles.techItem}>
                <div className={styles.techIconBox}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <circle cx="12" cy="12" r="4"></circle>
                    <line x1="21.17" y1="8" x2="12" y2="8"></line>
                    <line x1="3.95" y1="6.06" x2="8.54" y2="14"></line>
                    <line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>
                  </svg>
                </div>
                <div className={styles.techContent}>
                  <h4>
                    <span className="en">Specialized Laser Treatments</span> <span className="ta" lang="ta">சிறப்பு லேசர் சிகிச்சைகள்</span>
                  </h4>
                  <p>
                    <span className="en">We utilize precision retinal lasers (photocoagulation) to treat retinal tears, diabetic retinopathy, and protect long-term vision.</span> <span className="ta" lang="ta">விழித்திரை கிழிசல்கள், சர்க்கரை நோய் விழித்திரை பாதிப்பு ஆகியவற்றிற்குச் சிகிச்சை அளிக்கவும், நீண்டகாலப் பார்வையைப் பாதுகாக்கவும், துல்லியமான விழித்திரை லேசர் (photocoagulation) சிகிச்சைகளைப் பயன்படுத்துகிறோம்.</span>
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
