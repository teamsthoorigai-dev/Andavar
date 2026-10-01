"use client";

import Reveal from "@/components/Reveal";
import styles from "./TreatmentsHero.module.css";

export default function TreatmentsHero() {
  return (
    <section className={styles.section}>
      {/* Background Image Placeholder */}
      <img 
        src="/images/patient-eye-examination-autorefractor.webp" 
        alt="" 
        className={styles.bgImage} 
        aria-hidden="true" 
      />
      <div aria-hidden="true" className={styles.glowA} />
      <div aria-hidden="true" className={styles.glowB} />
      <div className={`container ${styles.inner}`}>
        <Reveal targets=":scope > *" stagger={0.09}>
          <div className={styles.eyebrow}>
            <span className={styles.dot} aria-hidden="true" />
            <span className="en">Our Services</span> <span className="ta" lang="ta">எங்கள் சேவைகள்</span>
          </div>

          <h1 className={styles.h1}>
            <span className="en">Eye Treatments and Services <span>in Pollachi</span></span> <span className="ta" lang="ta">பொள்ளாச்சியில் <span>கண் சிகிச்சைகள் மற்றும் சேவைகள்</span></span>
          </h1>

          <p className={styles.lede}>
            <span className="en">From routine optical dispensing to advanced vitreo-retinal surgery, 
            Shri Andavar Eye Care provides complete ophthalmic care using 
            state-of-the-art technology, backed by decades of trusted experience.</span> <span className="ta" lang="ta">வழக்கமான கண்ணாடிகள் வழங்குதல் முதல் மேம்பட்ட விட்ரியோ-ரெட்டினல் அறுவை சிகிச்சை வரை, ஸ்ரீ ஆண்டவர் கண் மருத்துவமனை பல தசாப்த கால அனுபவத்துடன், அதிநவீன தொழில்நுட்பத்தை பயன்படுத்தி முழுமையான கண் மருத்துவ சேவைகளை வழங்குகிறது.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
