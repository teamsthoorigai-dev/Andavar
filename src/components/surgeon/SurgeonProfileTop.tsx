import Image from "next/image";
import Reveal from "@/components/Reveal";
import MagneticButton from "@/components/MagneticButton";
import styles from "./SurgeonProfileTop.module.css";

const QUALIFICATIONS = [
  {
    titleEn: "MBBS, DO",
    titleTa: "MBBS, DO",
    bodyEn: "Medical degree, diploma in ophthalmology.",
    bodyTa: "மருத்துவப் பட்டம், கண் மருத்துவத்தில் பட்டயம்.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    titleEn: "DNB (Ophthalmology)",
    titleTa: "DNB (கண் மருத்துவம்)",
    bodyEn: "The national board qualification for eye specialists in India.",
    bodyTa: "இந்தியாவில் கண் சிறப்பு மருத்துவர்களுக்கான தேசிய வாரியத் தகுதி.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
  {
    titleEn: "FICO (United Kingdom)",
    titleTa: "FICO (ஐக்கிய இராச்சியம்)",
    bodyEn: "Fellowship of the International Council of Ophthalmology.",
    bodyTa: "சர்வதேச கண் மருத்துவக் கழகத்தின் ஃபெலோஷிப்.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        <path d="M2 12h20" />
      </svg>
    ),
  },
  {
    titleEn: "FRCS (Glasgow)",
    titleTa: "FRCS (கிளாஸ்கோ)",
    bodyEn: "A surgical fellowship of the Royal College of Surgeons — unusual in a town this size.",
    bodyTa: "ராயல் காலேஜ் ஆஃப் சர்ஜன்ஸ்-ன் அறுவை சிகிச்சை ஃபெலோஷிப் — இவ்வளவு சிறிய ஊரில் காணக் கிடைப்பது அரிது.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="7" />
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
      </svg>
    ),
  },
];

export default function SurgeonProfileTop() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.grid}`}>
        {/* Left Side: Portrait */}
        <Reveal className={styles.imageReveal}>
          <div className={styles.imageCol}>
            <Image
              src="/images/chief-surgeon-portrait-desk-plants-white-background.webp"
              alt="Dr. A. Raghuram"
              fill
              className={styles.image}
              priority
            />
            <div className={styles.badgeStack}>
              <div className={styles.badge}>
                <span className={styles.dot}></span>
                <span className="en">Chief Surgeon</span> <span className="ta" lang="ta">தலைமை அறுவை சிகிச்சை நிபுணர்</span>
              </div>
              <div className={styles.badge}>
                <span className="en">FRCS (Glasgow)</span> <span className="ta" lang="ta">FRCS (கிளாஸ்கோ)</span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Right Side: Content */}
        <div className={styles.contentCol}>
          <Reveal stagger={0.05}>
            <span className={styles.eyebrow}><span className="en">Ophthalmology Leadership</span> <span className="ta" lang="ta">கண் மருத்துவத் தலைமை</span></span>
            <h2 className={styles.title}><span className="en">Dr. A. Raghuram</span> <span className="ta" lang="ta">டாக்டர் ஏ. ரகுராம்</span></h2>
            <div className={styles.bio}>
              <p>
                <strong><span className="en">At a large chain you are seen by whoever is on duty that day.</span> <span className="ta" lang="ta">ஒரு பெரிய மருத்துவமனை சங்கிலியில், அந்த நாளில் பணியில் இருக்கும் யாரோ ஒருவரால் நீங்கள் பார்க்கப்படுவீர்கள்.</span></strong>
              </p>
              <p>
                <span className="en">Dr. Raghuram combines decades of specialized surgical expertise with a deeply personal approach to patient care. A distinguished ophthalmologist in Pollachi with expertise spanning both advanced Retina Care and Cataract Surgery, providing comprehensive management of retinal conditions alongside specialized cataract care.</span> <span className="ta" lang="ta">டாக்டர் ரகுராம், பல தசாப்த கால சிறப்பு அறுவை சிகிச்சை நிபுணத்துவத்துடன், நோயாளிகளின் பராமரிப்பில் ஆழ்ந்த தனிப்பட்ட அணுகுமுறையை ஒருங்கிணைக்கிறார். மேம்பட்ட விழித்திரை சிகிச்சை மற்றும் கண்புரை அறுவை சிகிச்சை ஆகிய இரண்டிலும் நிபுணத்துவம் பெற்ற பொள்ளாச்சியின் புகழ்பெற்ற கண் மருத்துவரான இவர், விழித்திரை நோய்களுக்கான முழுமையான சிகிச்சையுடன் சிறப்பு கண்புரை சிகிச்சையையும் வழங்கி வருகிறார்.</span>
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2} stagger={0.05}>
            <div className={styles.specsGrid}>
              {QUALIFICATIONS.map((q) => (
                <div key={q.titleEn} className={styles.specCard}>
                  <div className={styles.specTitle}>
                    <span className={styles.specIcon}>{q.icon}</span>
                    <span className="en">{q.titleEn}</span> <span className="ta" lang="ta">{q.titleTa}</span>
                  </div>
                  <div className={styles.specBody}>
                    <span className="en">{q.bodyEn}</span> <span className="ta" lang="ta">{q.bodyTa}</span>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className={styles.actions}>
              <MagneticButton href="/our-surgeons" className={styles.btnPrimary}>
                <span className="en">Meet our surgeons</span> <span className="ta" lang="ta">எங்கள் மருத்துவர்களைச் சந்திக்க</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
