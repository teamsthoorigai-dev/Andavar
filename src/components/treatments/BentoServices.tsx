"use client";

import React from "react";
import Reveal from "@/components/Reveal";
import styles from "./BentoServices.module.css";

const Icons = {
  Eye: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
  ),
  Sun: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
  ),
  Droplet: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/></svg>
  ),
  ScanFace: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><path d="M9 9h.01"/><path d="M15 9h.01"/></svg>
  ),
  Gauge: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>
  ),
  Baby: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M9 12h.01"/><path d="M15 12h.01"/><path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"/><path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 1.5-2 1.5c-.8 0-1.5-.4-1.5-1"/></svg>
  ),
  Activity: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
  ),
  Users: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
  ),
  Glasses: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="6" cy="15" r="4"/><circle cx="18" cy="15" r="4"/><path d="M14 14.5a2 2 0 0 0-4 0"/><path d="M2 15h2"/><path d="M20 15h2"/><path d="M10 10.5 8 13"/><path d="M14 10.5 16 13"/></svg>
  ),
  Pill: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"/><path d="m8.5 8.5 7 7"/></svg>
  ),
  ShieldCheck: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M20 13c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5l8-3 8 3v5"/><path d="m9 12 2 2 4-4"/></svg>
  ),
  ChevronRight: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m9 18 6-6-6-6"/></svg>
  ),
};

const SERVICES = [
  {
    id: "cataract",
    titleEn: "Cataract & IOL Services",
    titleTa: "கண்புரை மற்றும் ஐ.ஓ.எல் (IOL) சேவைகள்",
    icon: Icons.Sun,
    descEn: "Advanced micro-incision cataract surgery with premium intraocular lens (IOL) implantation. We restore clear, vibrant vision through a painless, day-care procedure.",
    descTa: "உயர்ரக உள்விழி வில்லை (IOL) பொருத்துதலுடன் கூடிய மேம்பட்ட நுண்-துளை கண்புரை அறுவை சிகிச்சை. வலியற்ற, நாள்-பராமரிப்பு செயல்முறையின் மூலம் தெளிவான பார்வையை மீட்டெடுக்கிறோம்.",
    featured: true,
  },
  {
    id: "retina",
    titleEn: "Retina Clinic",
    titleTa: "விழித்திரை சிகிச்சை மையம்",
    icon: Icons.ScanFace,
    descEn: "Expert diagnosis and management of retinal disorders like diabetic retinopathy and macular degeneration, performed by our specialized surgeon.",
    descTa: "நீரிழிவு விழித்திரை நோய் மற்றும் மாகுலர் சிதைவு போன்ற விழித்திரை கோளாறுகளை நிபுணத்துவத்துடன் கண்டறிந்து சிகிச்சையளித்தல்.",
    featured: true,
    subItemsEn: [
      "Retina laser treatments",
      "Intravitreal injections",
      "Vitreo retinal surgery",
    ],
    subItemsTa: [
      "விழித்திரை லேசர் சிகிச்சைகள்",
      "விழிக்குள் ஊசி மூலம் மருந்து செலுத்துதல்",
      "விட்ரியோ ரெட்டினல் அறுவை சிகிச்சை",
    ],
  },
  {
    id: "general",
    titleEn: "General Ophthalmology",
    titleTa: "பொது கண் மருத்துவம்",
    icon: Icons.Eye,
    descEn: "Comprehensive eye examinations and baseline screening.",
    descTa: "முழுமையான கண் பரிசோதனைகள் மற்றும் அடிப்படை பரிசோதனை.",
  },
  {
    id: "dryeye",
    titleEn: "Dry Eye Clinic",
    titleTa: "கண் வறட்சி சிகிச்சை மையம்",
    icon: Icons.Droplet,
    descEn: "Targeted therapies to relieve burning, gritty, and tired eyes.",
    descTa: "எரிச்சல், உறுத்தல் மற்றும் சோர்வடைந்த கண்களுக்கு நிவாரணம் அளிக்க இலக்கு வைக்கப்பட்ட சிகிச்சைகள்.",
  },
  {
    id: "glaucoma",
    titleEn: "Glaucoma Clinic",
    titleTa: "குளுக்கோமா (கண் நீர் அழுத்த நோய்) மையம்",
    icon: Icons.Gauge,
    descEn: "Early detection and visual field testing to prevent silent vision loss.",
    descTa: "அமைதியான பார்வை இழப்பைத் தடுக்க ஆரம்பத்திலேயே கண்டறிதல் மற்றும் காட்சிப் புலப் பரிசோதனை.",
  },
  {
    id: "paediatric",
    titleEn: "Paediatric Eye Care",
    titleTa: "குழந்தைகளுக்கான கண் பராமரிப்பு",
    icon: Icons.Baby,
    descEn: "Gentle, specialized care for children's eyes and visual development.",
    descTa: "குழந்தைகளின் கண்கள் மற்றும் பார்வை வளர்ச்சிக்கு மென்மையான, சிறப்புப் பராமரிப்பு.",
  },
  {
    id: "contactlens",
    titleEn: "Contact Lens Services",
    titleTa: "காண்டாக்ட் லென்ஸ் சேவைகள்",
    icon: Icons.Eye,
    descEn: "Professional fitting and dispensing of contact lenses tailored to your lifestyle. We offer a variety of options including normal wear, daily disposables, and cosmetic lenses for maximum all-day comfort.",
    descTa: "உங்கள் வாழ்க்கை முறைக்கு ஏற்றவாறு காண்டாக்ட் லென்ஸ்கள் தொழில்முறை முறையில் பொருத்துதல் மற்றும் வழங்குதல். நாள் முழுவதும் அதிகபட்ச வசதிக்காக சாதாரண லென்ஸ்கள், தினசரி டிஸ்போசபிள் மற்றும் அழகு சாதன லென்ஸ்களை நாங்கள் வழங்குகிறோம்.",
    subItemsEn: [
      "Normal & Disposable lenses",
      "Cosmetic lenses",
    ],
    subItemsTa: [
      "சாதாரண மற்றும் டிஸ்போசபிள் லென்ஸ்கள்",
      "அழகு சாதன லென்ஸ்கள்",
    ],
    featured: true,
  },

  {
    id: "master",
    titleEn: "Master Health Checkup",
    titleTa: "முழுமையான உடல்/கண் பரிசோதனை",
    icon: Icons.Activity,
    descEn: "Thorough ocular health evaluation to catch symptomless diseases.",
    descTa: "அறிகுறியற்ற நோய்களைக் கண்டறிய முழுமையான கண் ஆரோக்கிய மதிப்பீடு.",
  },
  {
    id: "community",
    titleEn: "Community Ophthalmology",
    titleTa: "சமூக கண் மருத்துவம்",
    icon: Icons.Users,
    descEn: "Outreach camps and awareness programs to eradicate blindness.",
    descTa: "பார்வையின்மையை ஒழிக்க சிறப்பு முகாம்கள் மற்றும் விழிப்புணர்வு நிகழ்ச்சிகள்.",
  },
  {
    id: "optical",
    titleEn: "Advanced Optical Shop",
    titleTa: "மேம்பட்ட ஆப்டிகல் ஷாப்",
    icon: Icons.Glasses,
    descEn: "Wide selection of premium frames and precision lenses.",
    descTa: "பிரீமியம் பிரேம்கள் மற்றும் துல்லியமான லென்ஸ்களின் பரந்த தேர்வு.",
  },
  {
    id: "pharmacy",
    titleEn: "Dispensing Pharmacy",
    titleTa: "மருந்தகம்",
    icon: Icons.Pill,
    descEn: "In-house pharmacy for authentic ophthalmic medications.",
    descTa: "உண்மையான கண் மருந்துகளுக்கான மருத்துவமனை மருந்தகம்.",
  },
  {
    id: "insurance",
    titleEn: "Insurance & Claims",
    titleTa: "காப்பீடு மற்றும் உரிமைகோரல்கள்",
    icon: Icons.ShieldCheck,
    descEn: "Hassle-free financial processing for your treatments. We support major health schemes and provide dedicated assistance for cashless claims and reimbursements.",
    descTa: "உங்கள் சிகிச்சைகளுக்கான தொந்தரவு இல்லாத நிதிச் செயலாக்கம். முக்கிய சுகாதாரத் திட்டங்களை நாங்கள் ஆதரிக்கிறோம் மற்றும் ரொக்கமில்லா கோரிக்கைகள் மற்றும் பணத்தைத் திரும்பப் பெறுவதற்கு பிரத்யேக உதவியை வழங்குகிறோம்.",
    featured: true,
  },
];

export default function BentoServices() {
  return (
    <section className={styles.section}>
      <div className="container">
        <Reveal className={styles.head}>
          <span className="eyebrow">
            <span className="en">Under one roof</span> <span className="ta" lang="ta">ஒரே கூரையின் கீழ்</span>
          </span>
          <h2 className={styles.h2}>
            <span className="en">Our Eye Care Services</span> <span className="ta" lang="ta">எங்கள் கண் மருத்துவ சேவைகள்</span>
          </h2>
        </Reveal>

        <Reveal className={styles.grid} stagger={0.05}>
          {SERVICES.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.id}
                className={`${styles.card} ${s.featured ? styles.cardFeatured : ""}`}
              >
                <div className={styles.icon}>
                  <Icon />
                </div>
                <h3 className={styles.title}>
                  <span className="en">{s.titleEn}</span> <span className="ta" lang="ta">{s.titleTa}</span>
                </h3>
                
                <div className={styles.contentWrapper}>
                  <p className={`${styles.description} ${s.subItemsEn ? styles.hasSub : ""}`}>
                    <span className="en">{s.descEn}</span> <span className="ta" lang="ta">{s.descTa}</span>
                  </p>
                  
                  {s.subItemsEn && s.subItemsTa && (
                    <div className={styles.subItemsOverlay}>
                      {s.subItemsEn.map((sub, idx) => (
                        <div key={idx} className={styles.subItem}>
                          <Icons.ChevronRight className={styles.subIcon} width={16} height={16} />
                          <span className="en">{sub}</span> <span className="ta" lang="ta">{s.subItemsTa?.[idx]}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
