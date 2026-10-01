import MagneticButton from "@/components/MagneticButton";
import Reveal from "@/components/Reveal";
import styles from "./VisitSection.module.css";

export default function VisitSection() {
  return (
    <section className={styles.section}>
      <div aria-hidden="true" className={styles.glow} />
      <div className={`container ${styles.grid}`}>
        <Reveal targets=":scope > *" stagger={0.09}>
          <span className={`eyebrow ${styles.eyebrow}`}>
            <span className="en">Find Us in Pollachi</span> <span className="ta" lang="ta">எங்களை வந்து சந்தியுங்கள்</span>
          </span>
          <h2 className={styles.h2}>
            <span className="en">Hospital Location and Consultation Hours</span> <span className="ta" lang="ta">மருத்துவமனை முகவரி மற்றும் ஆலோசனை நேரங்கள்</span>
          </h2>
          <p className={styles.lede}>
            <span className="en">
              A familiar landmark makes us easy to find. If you know LMHSS School, you’ll know exactly where we are.
              <br /><br />
              Visit us for your eye care needs.
            </span>
            {" "}
            <span className="ta" lang="ta">
              LMHSS பள்ளி பொள்ளாச்சியில் அனைவருக்கும் தெரிந்த ஒரு முக்கிய அடையாளம். பள்ளிக்கு நேராக எதிரிலேயே எங்கள் மருத்துவமனை அமைந்துள்ளது.
              <br /><br />
              உங்கள் கண் சிகிச்சைத் தேவைகளுக்கு எங்களை அணுகவும்.
            </span>
          </p>
          <div className={styles.actions}>
            <MagneticButton
              href="https://maps.google.com/?q=Shri+Andavar+Eye+Care+and+Retina+Centre+Palladam+Road+Pollachi"
              external
              className={styles.btnPrimary}
            >
              <span className="en">◎ Open in Maps</span> <span className="ta" lang="ta">◎ வரைபடத்தில் பார்க்க (Maps)</span>
            </MagneticButton>
            <MagneticButton href="/about" className={styles.btnSecondary}>
              <span className="en">Visiting details</span> <span className="ta" lang="ta">வருகை விவரங்கள்</span>
            </MagneticButton>
          </div>
        </Reveal>

        <Reveal className={styles.panel} stagger={0.08}>
          <div className={styles.row}>
            <div className={styles.rowLabel}>
              <span className="en">Address</span> <span className="ta" lang="ta">முகவரி</span>
            </div>
            <div className={styles.rowValue}>
              <span className="en">
                No. 73, T. Kottampatti Bus Stop, Palladam Road,<br />
                Opposite LMHSS School,<br />
                T. Kottampatti, Pollachi – 642002
              </span>
              <span className="ta" lang="ta">
                எண். 73, டி. கொட்டாம்பட்டி பேருந்து நிறுத்தம், பல்லடம் சாலை,<br />
                LMHSS பள்ளிக்கு எதிரில்,<br />
                டி. கொட்டாம்பட்டி, பொள்ளாச்சி – 642002
              </span>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.rowLabel}>
              <span className="en">Consulting hours</span> <span className="ta" lang="ta">ஆலோசனை நேரங்கள்</span>
            </div>
            <div className={styles.rowValue}>
              <span className="en">
                Mon–Sat · 10:00 AM – 2:00 PM and 5:00 – 7:00 PM
                <br />
                Sunday closed
              </span>
              <span className="ta" lang="ta">
                திங்கள்–சனி · காலை 10:00 – மதியம் 2:00 மற்றும் மாலை 5:00 – 7:00
                <br />
                ஞாயிறு விடுமுறை
              </span>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.rowLabel}>
              <span className="en">Telephone</span> <span className="ta" lang="ta">தொலைபேசி</span>
            </div>
            <div className={styles.rowValue}>04259 221 000</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
