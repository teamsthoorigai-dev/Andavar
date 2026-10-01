import MagneticButton from "@/components/MagneticButton";
import styles from "./not-found.module.css";

// Rendered for every unmatched URL; the static export writes it to out/404.html.
export default function NotFound() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <span className="eyebrow">404</span>
        <h1 className={styles.h1}>
          <span className="en">This page could not be found.</span>
          <span className="ta" lang="ta">இந்தப் பக்கம் கிடைக்கவில்லை.</span>
        </h1>
        <p className={styles.lede}>
          <span className="en">The link may be out of date or mistyped.</span>
          <span className="ta" lang="ta">இணைப்பு பழையதாகவோ தவறாகத் தட்டச்சு செய்யப்பட்டதாகவோ இருக்கலாம்.</span>
        </p>
        <MagneticButton href="/" className={styles.btn}>
          <span className="en">Back to the home page</span>
          <span className="ta" lang="ta">முகப்புப் பக்கத்துக்குத் திரும்பு</span>
        </MagneticButton>
      </div>
    </section>
  );
}
