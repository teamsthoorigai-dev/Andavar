import Reveal from "@/components/Reveal";
import styles from "./AboutHero.module.css";

export default function AboutHero() {
  return (
    <section className={styles.section}>
      <img src="/images/shri-andavar-eye-hospital-building-exterior.webp" alt="" className={styles.bgImage} aria-hidden="true" />
      <div className={styles.glow} aria-hidden="true" />
      <div className={`container ${styles.grid}`}>
        <Reveal targets=":scope > *" stagger={0.1}>
          <h1 className={styles.h1}>
            <span className="en">Eye Care Rooted in Pollachi Since 2013.</span>
            <span className="ta" lang="ta">2013 முதல் பொள்ளாச்சியில் நம்பிக்கையான கண் சிகிச்சை</span>
          </h1>
          <p className={styles.lede}>
            <span className="en">Shri Andavar Eye Care and Retina Centre has been caring for patients on Palladam Road since 2013, led by the surgeon who founded the centre.</span>
            <span className="ta" lang="ta">ஸ்ரீ ஆண்டவர் கண் மருத்துவமனை 2013 முதல் பல்லடம் சாலையில் செயல்பட்டு வருகிறது. மருத்துவமனையை நிறுவிய டாக்டர் ஏ. ரகுராம் அவர்களின் தலைமையில், பொள்ளாச்சி மற்றும் சுற்றுவட்டார மக்களுக்கு தொடர்ந்து தனிப்பட்ட கவனத்துடன் கண் சிகிச்சை வழங்கி வருகிறோம்.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
