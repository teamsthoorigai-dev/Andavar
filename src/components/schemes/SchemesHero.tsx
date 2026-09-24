"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Reveal from "@/components/Reveal";
import styles from "./SchemesHero.module.css";

export default function SchemesHero() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Subtle parallax effect on the background glow
    const ctx = gsap.context(() => {
      if (glowRef.current) {
        gsap.to(glowRef.current, {
          y: 150,
          ease: "none",
          scrollTrigger: {
            trigger: glowRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          }
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.section}>
      <img src="/images/hospital-reception-and-waiting-area.webp" alt="" className={styles.bgImage} aria-hidden="true" />
      <div ref={glowRef} aria-hidden="true" className={styles.glow} />
      <div className="container">
        <Reveal className={styles.copy} targets=":scope > *" stagger={0.1}>
          <div className={styles.breadcrumb}>
            <span className="en">Home / Schemes &amp; insurance</span>
            <span className="ta" lang="ta">முகப்பு / திட்டங்கள் மற்றும் காப்பீடு</span>
          </div>

          <h1 className={styles.h1}>
            <span className="en">Schemes and Insurance</span>
            <span className="ta" lang="ta">திட்டங்கள் மற்றும் காப்பீடு</span>
          </h1>

          <p className={styles.lede}>
            <span className="en">
              The question people are most embarrassed to ask and most worried about. 
              So here it is in plain language, before you have to ask anyone.
            </span>
            <span className="ta" lang="ta">
              மக்கள் கேட்க மிகவும் தயங்கும் மற்றும் அதிகம் கவலைப்படும் கேள்வி. 
              எனவே, நீங்கள் யாரிடமாவது கேட்பதற்கு முன், இங்கே எளிய மொழியில் கொடுக்கப்பட்டுள்ளது.
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
