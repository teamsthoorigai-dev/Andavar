import { SESSIONS } from "@/lib/clinicHours";
import { HOSPITAL_MAP_URL, HOSPITAL_NAME, HOSPITAL_PHONE, SITE_URL } from "@/lib/site";

const toClock = (minutesOfDay: number) =>
  `${String(Math.floor(minutesOfDay / 60)).padStart(2, "0")}:${String(minutesOfDay % 60).padStart(2, "0")}`;

// Name, address, phone and hours mirror what the site shows (VisitSection, clinicHours.ts).
// Keep them identical to the Google Business Profile listing.
const hospital = {
  "@context": "https://schema.org",
  "@type": "Hospital",
  "@id": `${SITE_URL}/#hospital`,
  name: HOSPITAL_NAME,
  alternateName: "Shri Andavar Eye Care",
  description:
    "Eye hospital in Pollachi offering cataract surgery, retina care, glaucoma care and diabetic eye screening since 2013.",
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/logo_v3.png`,
  image: `${SITE_URL}/images/shri-andavar-eye-hospital-building-exterior.webp`,
  telephone: HOSPITAL_PHONE,
  foundingDate: "2013",
  address: {
    "@type": "PostalAddress",
    streetAddress: "No. 73, T. Kottampatti Bus Stop, Palladam Road, Opposite LMHSS School, T. Kottampatti",
    addressLocality: "Pollachi",
    addressRegion: "Tamil Nadu",
    postalCode: "642002",
    addressCountry: "IN",
  },
  hasMap: HOSPITAL_MAP_URL,
  areaServed: "Pollachi",
  openingHoursSpecification: SESSIONS.map((s) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: toClock(s.start),
    closes: toClock(s.end),
  })),
};

export default function HospitalJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(hospital).replace(/</g, "\\u003c") }}
    />
  );
}
