import Reveal from "@/components/Reveal";
import styles from "./EmpaneledList.module.css";

const EMPANELED_LIST = [
  "MEDI ASSIST TPA",
  "MEDI ASSIST TPA (GOVT and PENSIONERS)",
  "MDIndia Health Insurance TPA Pvt",
  "MD INDIA TPA (GOVT and PENSIONERS)",
  "Vidal Health Insurance TPA Services",
  "STAR HEALTH INSURANCE",
  "TATA AIG General Insurance",
  "ICICI Lombard Health Insurance",
  "SBI General Insurance",
  "GO DIGIT HEALTH INSURANCE",
  "Niva Bupa (formerly Max Bupa)",
  "VIPUL MED CORP INSURANCE",
  "Galaxy Health Insurance",
  "Aditya Birla Health Insurance",
  "Care Health Insurance (formerly Religare Health Insurance)",
  "HERRITAGE HEALTH TPA",
  "Cholamandalam MS General Insurance",
  "HDFC ERGO GENERAL INSURANCE",
  "FAMILY HEALTH PLAN",
  "NATIONAL INSURANCE COMPANY",
  "UNITED INDIA INSURANCE COMPANY",
  "THE NEW INDIA ASSURANCE COMPANY",
];

// Insurer names stay in English; only the descriptive qualifiers are translated.
const toTamil = (partner: string) =>
  partner
    .replace("(GOVT and PENSIONERS)", "(அரசு ஊழியர்கள் மற்றும் ஓய்வூதியதாரர்கள்)")
    .replace("(formerly ", "(முன்பு ");

export default function EmpaneledList() {
  return (
    <section className={styles.section}>
      <div className="container">
        <Reveal>
          <div className={styles.header}>
            <h2 className={styles.title}>
              <span className="en">Empaneled Insurance Partners</span>
              <span className="ta" lang="ta">அங்கீகரிக்கப்பட்ட காப்பீட்டு நிறுவனங்கள்</span>
            </h2>
            <p className={styles.subtitle}>
              <span className="en">We are proudly empaneled with the following TPAs and insurance providers.</span>
              <span className="ta" lang="ta">நாங்கள் பின்வரும் காப்பீட்டு நிறுவனங்களுடன் அங்கீகரிக்கப்பட்டுள்ளோம்.</span>
            </p>
          </div>
        </Reveal>

        <Reveal className={styles.grid} stagger={0.03}>
          {EMPANELED_LIST.map((partner, index) => (
             <div key={index} className={styles.card}>
               <span className="en">{partner}</span>
               <span className="ta" lang="ta">{toTamil(partner)}</span>
             </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
