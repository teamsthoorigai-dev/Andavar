import Link from "next/link";
import Reveal from "@/components/Reveal";
import MagneticButton from "@/components/MagneticButton";
import styles from "./SurgeonStatsCTA.module.css";

const STATS = [
  { value: "15,000+", labelEn: "Cataract Surgeries", labelTa: "கண்புரை அறுவை சிகிச்சைகள்" },
  { value: "1,000+", labelEn: "Vitrectomy Surgeries", labelTa: "விழித்திரை அறுவை சிகிச்சைகள்" },
  { value: "99.4%", labelEn: "Complication-Free", labelTa: "சிக்கலற்ற சிகிச்சைகள்" },
  { value: "20+ Years", valueTa: "20+ ஆண்டுகள்", labelEn: "Clinical Leadership", labelTa: "மருத்துவத் தலைமை" },
];

export default function SurgeonStatsCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.radialGlow} />
      
      <div className={`container ${styles.container}`}>
        <Reveal stagger={0.1}>
          <div className={styles.eyebrow}><span className="en">Excellence in Eye Care</span> <span className="ta" lang="ta">கண் பராமரிப்பில் சிறந்து விளங்குதல்</span></div>
          
          <h2 className={styles.title}>
            <span className="en">Mastery in Every Incision. <br />
            <em>Restoring Vision </em>with Precision.</span> <span className="ta" lang="ta">ஒவ்வொரு அறுவை சிகிச்சையிலும் நிபுணத்துவம். <br />
            <em>துல்லியமாக </em>பார்வையை மீட்டமைத்தல்.</span>
          </h2>
          
          <p className={styles.subtitle}>
            <span className="en">Combining over two decades of surgical leadership with state-of-the-art 
            micro-surgical technology to redefine cataract and complex reconstructive outcomes.</span> <span className="ta" lang="ta">கண்புரை மற்றும் சிக்கலான மறுசீரமைப்பு சிகிச்சை முடிவுகளை சிறப்பாக வழங்க, அதிநவீன நுண்-அறுவை சிகிச்சை தொழில்நுட்பத்துடன் இரண்டு தசாப்தங்களுக்கும் மேலான அறுவை சிகிச்சை நிபுணத்துவத்தை ஒருங்கிணைக்கிறோம்.</span>
          </p>
        </Reveal>

        <Reveal delay={0.2} stagger={0.1}>
          <div className={styles.statsRow}>
            {STATS.map((stat) => (
              <div key={stat.labelEn} className={styles.statCard}>
                <div className={styles.statNumber}>
                  {stat.valueTa ? (
                    <>
                      <span className="en">{stat.value}</span>
                      <span className="ta" lang="ta">{stat.valueTa}</span>
                    </>
                  ) : (
                    stat.value
                  )}
                </div>
                <div className={styles.statLabel}>
                  <span className="en">{stat.labelEn}</span> <span className="ta" lang="ta">{stat.labelTa}</span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <div className={styles.actions}>
            <MagneticButton href="/about#getting-here" className={styles.btnPrimary}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              <span className="en">Schedule Consultation</span> <span className="ta" lang="ta">ஆலோசனைக்கு முன்பதிவு செய்யவும்</span>
            </MagneticButton>
            
            <MagneticButton href="/treatments" className={styles.btnSecondary}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
              <span className="en">Explore Our Treatments</span> <span className="ta" lang="ta">எங்கள் சிகிச்சைகளை ஆராயுங்கள்</span>
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
