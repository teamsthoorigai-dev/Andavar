"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import MagneticButton from "@/components/MagneticButton";
import Reveal from "@/components/Reveal";
import { getClinicStatus, ClinicStatus } from "@/lib/clinicHours";
import styles from "./Hero.module.css";

export default function Hero() {
  const [status, setStatus] = useState<ClinicStatus | null>(null);

  useEffect(() => {
    const update = () => setStatus(getClinicStatus());
    update();
    const id = window.setInterval(update, 60_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className={styles.section}>
      <img src="/images/hospital-reception-and-waiting-area.webp" alt="" className={styles.bgImage} aria-hidden="true" />
      <div aria-hidden="true" className={styles.glowA} />
      <div aria-hidden="true" className={styles.glowB} />
      <div className={`container ${styles.grid}`}>
        <Reveal className={styles.copy} targets=":scope > *" stagger={0.09}>
          <div className={styles.pill}>
            <span
              className={`${styles.dot} ${status && !status.isOpen ? styles.closed : ""}`}
              aria-hidden="true"
            />
            {status ? (
              <>
                <span className="en">{status.pillLabelEn}</span>
                <span className="ta" lang="ta">{status.pillLabelTa}</span>
              </>
            ) : (
              <>
                <span className="en">Checking today's hours…</span>
                <span className="ta" lang="ta">இன்றைய நேரங்களைச் சரிபார்க்கிறது...</span>
              </>
            )}
          </div>

          <h1 className={styles.h1}>
            <span className="en">Trusted Eye Hospital in Pollachi Since 2013.</span>
            <span className="ta" lang="ta">2013 முதல் பொள்ளாச்சியின் நம்பிக்கையான கண் மருத்துவமனை</span>
          </h1>

          <p className={styles.lede}>
            <span className="en">
              Shri Andavar Eye Care has been caring for the eyes of Pollachi and surrounding communities since 2013, with dedicated expertise in cataract and retina care.
            </span>
            <span className="ta" lang="ta">
              2013 முதல் பொள்ளாச்சி மற்றும் சுற்றுவட்டார மக்களுக்கு கண்புரை மற்றும் விழித்திரை சிகிச்சையை அக்கறையுடன் வழங்கி வருகிறது ஸ்ரீ ஆண்டவர் கண் மருத்துவமனை.
            </span>
          </p>

          <div className={styles.actions}>
            <MagneticButton href="tel:+914259221000" className={styles.btnPrimary}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              04259 221 000
            </MagneticButton>
            <MagneticButton
              href="https://maps.google.com/?q=Shri+Andavar+Eye+Care+and+Retina+Centre+Palladam+Road+Pollachi"
              external
              className={styles.btnSecondary}
            >
              ◎ <span className="en">Get directions</span><span className="ta" lang="ta">வழி காட்டி</span>
            </MagneticButton>
          </div>

        </Reveal>

        <Reveal delay={0.1}>
          <div className={styles.visual} aria-hidden="true">
              <div className={styles.imageWrapper}>
                <Image 
                  src="/images/shri-andavar-eye-hospital-building-exterior.webp" 
                  alt="Hospital Facility" 
                  fill 
                  priority
                className={styles.image} 
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
