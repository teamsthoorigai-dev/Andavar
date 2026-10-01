"use client";

import { useRef } from "react";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import styles from "./CampCarousel.module.css";

interface CampCarouselProps {
  titleEn: string;
  titleTa: string;
  dateEn: string;
  dateTa: string;
  descriptionEn: string;
  descriptionTa: string;
  images: string[];
  reverse?: boolean;
}

export default function CampCarousel({
  titleEn,
  titleTa,
  dateEn,
  dateTa,
  descriptionEn,
  descriptionTa,
  images,
  reverse = false,
}: CampCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -scrollRef.current.offsetWidth, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: scrollRef.current.offsetWidth, behavior: "smooth" });
    }
  };

  return (
    <section className={`${styles.section} ${reverse ? styles.reverse : ""}`}>
      <div className={`container ${styles.grid}`}>
        
        {/* Text Content */}
        <Reveal className={styles.content} stagger={0.1}>
          <div className={styles.date}>
            <span className="en">{dateEn}</span>
            <span className="ta" lang="ta">{dateTa}</span>
          </div>
          <h2 className={styles.title}>
            <span className="en">{titleEn}</span>
            <span className="ta" lang="ta">{titleTa}</span>
          </h2>
          <p className={styles.description}>
            <span className="en">{descriptionEn}</span>
            <span className="ta" lang="ta">{descriptionTa}</span>
          </p>
        </Reveal>

        {/* Carousel */}
        <Reveal className={styles.carouselWrapper} stagger={0.2}>
          <div className={styles.carousel} ref={scrollRef}>
            {images.map((img, idx) => (
              <div key={idx} className={styles.slide}>
                <Image
                  src={img}
                  alt={`${titleEn} photo ${idx + 1}`}
                  fill
                  className={styles.image}
                />
              </div>
            ))}
          </div>
          
          {/* Controls */}
          {images.length > 1 && (
            <div className={styles.controls}>
              <button className={styles.arrowBtn} onClick={scrollLeft}>
                <span className="sr-only"><span className="en">Previous image</span><span className="ta" lang="ta">முந்தைய படம்</span></span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
              </button>
              <button className={styles.arrowBtn} onClick={scrollRight}>
                <span className="sr-only"><span className="en">Next image</span><span className="ta" lang="ta">அடுத்த படம்</span></span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </button>
            </div>
          )}
        </Reveal>

      </div>
    </section>
  );
}
