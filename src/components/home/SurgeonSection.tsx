"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import MagneticButton from "@/components/MagneticButton";
import SurgeonProfileModal from "@/components/surgeon/SurgeonProfileModal";
import styles from "./SurgeonSection.module.css";

const QUALIFICATIONS = [
  {
    titleEn: "MBBS, DO",
    titleTa: "MBBS, DO",
    bodyEn: "Medical degree, diploma in ophthalmology.",
    bodyTa: "மருத்துவப் பட்டம், கண் மருத்துவத்தில் பட்டயம்.",
  },
  {
    titleEn: "DNB (Ophthalmology)",
    titleTa: "DNB (கண் மருத்துவம்)",
    bodyEn: "The national board qualification for eye specialists in India.",
    bodyTa: "இந்தியாவில் கண் சிறப்பு மருத்துவர்களுக்கான தேசிய வாரியத் தகுதி.",
  },
  {
    titleEn: "FICO (United Kingdom)",
    titleTa: "FICO (ஐக்கிய ராஜ்ஜியம்)",
    bodyEn: "Fellowship of the International Council of Ophthalmology.",
    bodyTa: "சர்வதேச கண் மருத்துவ கவுன்சிலின் பெல்லோஷிப்.",
  },
  {
    titleEn: "FRCS (Glasgow)",
    titleTa: "FRCS (கிளாஸ்கோ)",
    bodyEn: "A surgical fellowship of the Royal College of Surgeons — unusual in a town this size.",
    bodyTa: "ராயல் காலேஜ் ஆஃப் சர்ஜன்ஸ் வழங்கும் அறுவை சிகிச்சை பெல்லோஷிப் — இந்த அளவிலான ஒரு நகரத்தில் இது அரிதானது.",
  },
];

export default function SurgeonSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className={styles.section}>
      <img src="/images/surgeon-performing-microscopic-eye-surgery.webp" alt="" className={styles.bgImage} aria-hidden="true" />
      <div className={`container ${styles.grid}`}>
        <Reveal targets=":scope > *" stagger={0.09}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/doctor-detailed-slit-lamp-examination.webp"
              alt="Slit lamp examination"
              fill
              className={styles.image}
            />
          </div>
          <h1 className={`eyebrow ${styles.pageTitle}`}>
            <span className="en">Our Eye Specialists in Pollachi</span> <span className="ta" lang="ta">பொள்ளாச்சியில் எங்கள் கண் சிறப்பு மருத்துவர்கள்</span>
          </h1>
          <h2 className={styles.h2}>
            <span className="en">Dr. A. Raghuram</span> <span className="ta" lang="ta">டாக்டர் ஏ. ரகுராம்</span>
          </h2>
        </Reveal>

        <Reveal className={styles.card} stagger={0.07}>
          <div className={styles.cardLabel}>
            <span className="en">Qualifications, in plain words</span> <span className="ta" lang="ta">எளிய வார்த்தைகளில் தகுதிகள்</span>
          </div>
          {QUALIFICATIONS.map((q) => (
            <div key={q.titleEn} className={styles.row}>
              <div className={styles.rowTitle}>
                <span className="en">{q.titleEn}</span> <span className="ta" lang="ta">{q.titleTa}</span>
              </div>
              <div className={styles.rowBody}>
                <span className="en">{q.bodyEn}</span> <span className="ta" lang="ta">{q.bodyTa}</span>
              </div>
            </div>
          ))}
          
          <div style={{ marginTop: "30px" }}>
            <button 
              onClick={() => setIsModalOpen(true)}
              style={{
                background: "var(--accent)",
                color: "var(--card)",
                border: "none",
                padding: "12px 24px",
                borderRadius: "30px",
                fontWeight: "600",
                cursor: "pointer",
                fontSize: "0.9rem",
                letterSpacing: "0.02em",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                transition: "transform 0.3s var(--ease), background 0.3s var(--ease)",
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.02)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
              <span className="en">View Full Profile</span>
              <span className="ta" lang="ta">முழு விவரங்களைக் காண்க</span>
            </button>
          </div>
        </Reveal>
      </div>

      <SurgeonProfileModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
