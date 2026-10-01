"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import styles from "./VisionSlider.module.css";

export default function VisionSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const onMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const onTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const stopDragging = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", stopDragging);
      window.addEventListener("touchmove", onTouchMove, { passive: false });
      window.addEventListener("touchend", stopDragging);
    } else {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", stopDragging);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", stopDragging);
    }

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", stopDragging);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", stopDragging);
    };
  }, [isDragging]);

  return (
    <section className={styles.section}>
      <div className="container">
        <Reveal>
          <div className={styles.header}>
            <h1 className={styles.title}>
              <span className="en">Cataract Surgery in Pollachi</span>
              <span className="ta" lang="ta">பொள்ளாச்சியில் கண்புரை அறுவை சிகிச்சை</span>
            </h1>
            <p className={styles.subtitle}>
              <span className="en">See the difference clear vision makes. Drag the handle to compare before and after cataract surgery.</span>
              <span className="ta" lang="ta">தெளிவான பார்வை ஏற்படுத்தும் மாற்றத்தைக் காணுங்கள். கண்புரை அறுவை சிகிச்சைக்கு முன் மற்றும் பின் உள்ள பார்வையை ஒப்பிட கைப்பிடியை இழுக்கவும்.</span>
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div 
            className={styles.sliderContainer}
            ref={containerRef}
            onMouseDown={(e) => {
              setIsDragging(true);
              handleMove(e.clientX);
            }}
            onTouchStart={(e) => {
              setIsDragging(true);
              handleMove(e.touches[0].clientX);
            }}
          >
            <div className={styles.imageWrapper}>
              {/* Base Image (After Surgery - Clear) */}
              <Image
                src="https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=2000&auto=format&fit=crop"
                alt="Clear vision after surgery"
                fill
                className={styles.image}
                priority
              />
              <div className={`${styles.badge} ${styles.badgeRight}`}>
                <span className="en">After surgery</span><span className="ta" lang="ta">அறுவை சிகிச்சைக்குப் பின்</span>
              </div>

              {/* Overlay Image (With Cataract - Blurred) */}
              <div 
                className={styles.overlay} 
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=2000&auto=format&fit=crop"
                  alt="Vision with cataract"
                  fill
                  className={`${styles.image} ${styles.blurredImage}`}
                  priority
                />
                <div className={`${styles.badge} ${styles.badgeLeft}`}>
                  <span className="en">With cataract</span><span className="ta" lang="ta">கண்புரையுடன்</span>
                </div>
              </div>

              {/* Slider Handle */}
              <div 
                className={styles.handleLine}
                style={{ left: `${sliderPosition}%` }}
              >
                <div className={styles.handleButton}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </div>
              </div>
            </div>

            {/* Floating Info Card */}
            <div className={styles.infoCardWrapper}>
              <div className={styles.infoCard}>
                <p className={styles.infoTitle}>
                  <span className="en">A visual guide, not a medical result</span>
                  <span className="ta" lang="ta">இது ஒரு காட்சி வழிகாட்டி மட்டுமே, மருத்துவ முடிவு அல்ல</span>
                </p>
                <p>
                  <span className="en">An illustration of how cataract surgery can lift the cloudiness and yellowing that many patients describe.</span>
                  <span className="ta" lang="ta">நோயாளிகள் விவரிக்கும் மங்கலான மற்றும் மஞ்சள் நிறப் பார்வையை கண்புரை அறுவை சிகிச்சை எவ்வாறு தெளிவாக்குகிறது என்பதற்கான ஒரு எடுத்துக்காட்டு.</span>
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
