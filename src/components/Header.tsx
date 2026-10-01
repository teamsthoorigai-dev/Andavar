"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./Header.module.css";

const ChevronDown = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
);

const NAV = [
  { 
    labelEn: "Treatments", 
    labelTa: "சிகிச்சைகள்",
    items: [
      { href: "/treatments", labelEn: "All Treatments", labelTa: "அனைத்து சிகிச்சைகள்" },
      { href: "/cataract-surgery", labelEn: "Cataract Surgery", labelTa: "கண்புரை அறுவை சிகிச்சை" },
      { href: "/retina-care", labelEn: "Retina Care", labelTa: "விழித்திரை சிகிச்சை" },
      { href: "/diabetic-eye-care", labelEn: "Diabetic Eye Care", labelTa: "நீரிழிவு கண் பராமரிப்பு" },
      { href: "/glaucoma", labelEn: "Glaucoma", labelTa: "குளுக்கோமா" }
    ]
  },
  { href: "/our-surgeons", labelEn: "Our Surgeons", labelTa: "எங்கள் மருத்துவர்கள்" },
  { href: "/schemes", labelEn: "Schemes", labelTa: "திட்டங்கள்" },
  { 
    labelEn: "About", 
    labelTa: "எங்களைப் பற்றி",
    items: [
      { href: "/about", labelEn: "About Hospital", labelTa: "மருத்துவமனை பற்றி" },
      { href: "/gallery", labelEn: "Gallery", labelTa: "புகைப்படங்கள்" },
      { href: "/community", labelEn: "CSR", labelTa: "சமூகப் பணிகள் (CSR)" }
    ]
  },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState<"en" | "ta">("en");
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const stored = window.localStorage.getItem("sa-lang");
    if (stored === "ta" || stored === "en") {
      setLang(stored);
      document.documentElement.dataset.lang = stored;
    }
  }, []);

  useEffect(() => {
    if (!menuOpen) setExpandedIdx(null);
  }, [menuOpen]);

  function switchLang(next: "en" | "ta") {
    setLang(next);
    document.documentElement.dataset.lang = next;
    window.localStorage.setItem("sa-lang", next);
  }

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.bar}`}>
        <Link href="/" className={styles.brandLink}>
          <Image
            src="/logo_v3.png"
            alt="Shri Andavar Eye Care & Retina Centre"
            width={300}
            height={80}
            className={styles.logo}
            priority
          />
        </Link>

        <nav className={styles.nav} aria-label="Primary">
          {NAV.map((item, idx) => (
            item.items ? (
              <div key={idx} className={styles.navItemWrapper}>
                <button className={styles.navLink}>
                  <span className="en">{item.labelEn}</span> <span className="ta" lang="ta">{item.labelTa}</span>
                  <ChevronDown />
                </button>
                <div className={styles.dropdownMenu}>
                  {item.items.map((sub) => (
                    <Link 
                      key={sub.href} 
                      href={sub.href} 
                      className={`${styles.dropdownLink} ${pathname === sub.href ? styles.active : ""}`}
                    >
                      <span className="en">{sub.labelEn}</span> <span className="ta" lang="ta">{sub.labelTa}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href!}
                className={`${styles.navLink} ${
                  pathname === item.href ? styles.active : ""
                }`}
              >
                <span className="en">{item.labelEn}</span> <span className="ta" lang="ta">{item.labelTa}</span>
              </Link>
            )
          ))}
        </nav>

        <div className={styles.right}>
          <div className={styles.langToggle} role="group" aria-label="Language">
            <button
              type="button"
              className={lang === "en" ? styles.activeLang : ""}
              onClick={() => switchLang("en")}
            >
              EN
            </button>
            <button
              type="button"
              className={lang === "ta" ? styles.activeLang : ""}
              onClick={() => switchLang("ta")}
            >
              த
            </button>
          </div>
          <button
            type="button"
            className={`${styles.menuBtn} ${menuOpen ? styles.open : ""}`}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className={styles.bars} />
            <span className="sr-only"><span className="en">Menu</span><span className="ta" lang="ta">மெனு</span></span>
          </button>
        </div>
      </div>

      <div className={`${styles.mobilePanel} ${menuOpen ? styles.open : ""}`}>
        {NAV.map((item, idx) => (
          item.items ? (
            <div key={idx} className={styles.mobileAccordion}>
              <button 
                className={`${styles.mobileAccordionTrigger} ${expandedIdx === idx ? styles.active : ""}`}
                onClick={() => setExpandedIdx(expandedIdx === idx ? null : idx)}
              >
                <div>
                  <span className="en">{item.labelEn}</span> <span className="ta" lang="ta">{item.labelTa}</span>
                </div>
                <div className={`${styles.mobileChevron} ${expandedIdx === idx ? styles.rotated : ""}`}>
                  <ChevronDown />
                </div>
              </button>
              <div className={`${styles.mobileAccordionContent} ${expandedIdx === idx ? styles.open : ""}`}>
                {item.items.map((sub) => (
                  <Link key={sub.href} href={sub.href} onClick={() => setMenuOpen(false)}>
                    <span className="en">{sub.labelEn}</span> <span className="ta" lang="ta">{sub.labelTa}</span>
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <Link key={item.href} href={item.href!} onClick={() => setMenuOpen(false)}>
              <span className="en">{item.labelEn}</span> <span className="ta" lang="ta">{item.labelTa}</span>
            </Link>
          )
        ))}
      </div>
    </header>
  );
}
