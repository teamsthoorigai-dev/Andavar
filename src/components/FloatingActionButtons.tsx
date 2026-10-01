"use client";

import styles from "./FloatingActionButtons.module.css";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export default function FloatingActionButtons() {
  const [isCallMenuOpen, setIsCallMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsCallMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={styles.container}>
      {/* Mobile Call Button */}
      <a
        href="tel:+914259221000"
        className={`${styles.fab} ${styles.mobileOnly}`}
      >
        <span className="sr-only"><span className="en">Call the hospital</span><span className="ta" lang="ta">மருத்துவமனையை அழைக்க</span></span>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      </a>

      {/* Desktop Call Button with Menu */}
      <div className={styles.desktopOnly} ref={menuRef}>
        <button
          onClick={() => setIsCallMenuOpen(!isCallMenuOpen)}
          className={styles.fab}
          aria-expanded={isCallMenuOpen}
        >
          <span className="sr-only"><span className="en">Call options</span><span className="ta" lang="ta">அழைப்பு விருப்பங்கள்</span></span>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
        </button>
        {isCallMenuOpen && (
          <div className={styles.callMenu}>
            <div className={styles.menuHeader}>
              <span className="en">Contact Us</span>
              <span className="ta" lang="ta">தொடர்புக்கு</span>
            </div>
            <a href="tel:+914259221000" className={styles.menuItem}>
              <span className={styles.menuLabel}>
                <span className="en">Primary</span>
                <span className="ta" lang="ta">முதன்மை</span>
              </span>
              <span className={styles.menuNumber}>04259 221 000</span>
            </a>
            <a href="tel:+919442056767" className={styles.menuItem}>
              <span className={styles.menuLabel}>
                <span className="en">Mobile</span>
                <span className="ta" lang="ta">மொபைல்</span>
              </span>
              <span className={styles.menuNumber}>+91 94420 56767</span>
            </a>
          </div>
        )}
      </div>

      {/* Google Maps Button */}
      <Link
        href="https://maps.google.com/?q=Shri+Andavar+Eye+Care+and+Retina+Centre+Palladam+Road+Pollachi"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.fab}
      >
        <span className="sr-only"><span className="en">Open in Google Maps</span><span className="ta" lang="ta">கூகுள் மேப்ஸில் திறக்க</span></span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      </Link>
    </div>
  );
}
