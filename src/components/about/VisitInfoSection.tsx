import Reveal from "@/components/Reveal";
import MagneticButton from "@/components/MagneticButton";
import styles from "./VisitInfoSection.module.css";

export default function VisitInfoSection() {
  return (
    <section id="getting-here" className={styles.section}>
      <div className={`container ${styles.grid}`}>
        <Reveal className={styles.card} stagger={0.08} targets=":scope > *">
          <div className={styles.fact}>
            <span className="eyebrow">
              <span className="en">Address</span>
              <span className="ta" lang="ta">முகவரி</span>
            </span>
            <div className={styles.val}>
              <span className="en">
                No. 73, T. Kottampatti Bus Stop, Palladam Road, <br />
                Opposite LMHSS School, <br />
                T. Kottampatti, Pollachi – 642002
              </span>
              <span className="ta" lang="ta">
                எண். 73, டி. கொட்டாம்பட்டி பேருந்து நிறுத்தம், பல்லடம் சாலை, <br />
                LMHSS பள்ளிக்கு எதிரில், <br />
                டி. கொட்டாம்பட்டி, பொள்ளாச்சி – 642002
              </span>
            </div>
            <div className={styles.caption}>
              <span className="en">Located directly opposite LMHSS School, a familiar landmark in Pollachi.</span>
              <span className="ta" lang="ta">பொள்ளாச்சியில் நன்கு அறியப்பட்ட அடையாளமான LMHSS பள்ளிக்கு நேர் எதிரே அமைந்துள்ளது.</span>
            </div>
          </div>
          
          <div className={styles.fact}>
            <span className="eyebrow">
              <span className="en">Consulting Hours</span>
              <span className="ta" lang="ta">ஆலோசனை நேரங்கள்</span>
            </span>
            <div className={styles.val}>
              <span className="en">
                Monday to Saturday <br />
                Morning: 10:00 AM – 2:00 PM <br />
                Evening: 5:00 PM – 7:00 PM <br />
                Sunday: Closed
              </span>
              <span className="ta" lang="ta">
                திங்கள் முதல் சனிக்கிழமை வரை <br />
                காலை 10:00 – மதியம் 2:00 <br />
                மாலை 5:00 – 7:00 <br />
                ஞாயிறு விடுமுறை
              </span>
            </div>
          </div>
          
          <div className={styles.fact}>
            <span className="eyebrow">
              <span className="en">Contact</span>
              <span className="ta" lang="ta">தொடர்புக்கு</span>
            </span>
            <div className={styles.val}>
              04259 221 000 <br />
              94420 56767
            </div>
            <div className={styles.caption}>
              <span className="en">Call us during consulting hours for appointments and enquiries.</span>
              <span className="ta" lang="ta">முன்பதிவுகள் மற்றும் விசாரணைகளுக்கு ஆலோசனை நேரங்களில் எங்களை அழைக்கவும்.</span>
            </div>
          </div>
        </Reveal>

        <Reveal className={styles.gettingHere} stagger={0.08} targets=":scope > *">
          <h2 className={styles.h2}>
            <span className="en">Getting here</span>
            <span className="ta" lang="ta">எங்களை எளிதாக வந்தடையலாம்</span>
          </h2>
          <p className={styles.p}>
            <span className="en">We are at the T. Kottampatti bus stop on Palladam Road, directly opposite LMHSS School. The centre is easily accessible by local transport, with parking available for two-wheelers and cars.</span>
            <span className="ta" lang="ta">பல்லடம் சாலையில், டி. கொட்டாம்பட்டி பேருந்து நிறுத்தத்தில், LMHSS பள்ளிக்கு நேராக எதிரில் எங்கள் மருத்துவமனை அமைந்துள்ளது. பல்லடம் சாலை வழியாகச் செல்லும் நகரப் பேருந்துகளில் வந்து, எளிதாக நடந்து மருத்துவமனையை அடையலாம். இருசக்கர வாகனங்கள் மற்றும் கார்களை நிறுத்துவதற்கும் இடவசதி உள்ளது.</span>
          </p>
          <div className={styles.actions}>
            <MagneticButton href="https://maps.google.com/?q=Shri+Andavar+Eye+Care+and+Retina+Centre+Palladam+Road+Pollachi" external className={styles.btnPrimary}>
              <span className="en">◎ Open in Maps</span>
              <span className="ta" lang="ta">◎ வரைபடத்தில் பார்க்க (Maps)</span>
            </MagneticButton>
          </div>
          <p className={styles.caption}>
            <span className="en">No appointment is needed. If you would prefer a set time, call ahead.</span>
            <span className="ta" lang="ta">முன்பதிவு தேவையில்லை. ஒரு குறிப்பிட்ட நேரத்தில் வர விரும்பினால், முன்கூட்டியே அழைக்கவும்.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
