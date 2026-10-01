import Reveal from "@/components/Reveal";
import styles from "./StoriesGrid.module.css";

const REVIEWS = [
  {
    treatmentEn: "Cataract Surgery, Both Eyes",
    treatmentTa: "கண்புரை அறுவை சிகிச்சை, இரண்டு கண்களும்",
    quoteEn: "I had both my eyes operated for cataract by Dr. Raghuram. The whole process was smooth and painless. Being able to see clearly again has changed my life. I highly recommend his clinic for anyone needing eye surgery.",
    quoteTa: "டாக்டர் ரகுராம் அவர்களிடம் எனது இரண்டு கண்களுக்கும் கண்புரை அறுவை சிகிச்சை செய்து கொண்டேன். முழு செயல்முறையும் சீராகவும் வலியின்றியும் இருந்தது. மீண்டும் தெளிவாகப் பார்க்க முடிவது என் வாழ்க்கையை மாற்றியுள்ளது. கண் அறுவை சிகிச்சை தேவைப்படும் எவருக்கும் இந்த மருத்துவமனையை நான் உறுதியாகப் பரிந்துரைக்கிறேன்.",
    authorEn: "R. Manickam, Pollachi",
    authorTa: "ஆர். மாணிக்கம், பொள்ளாச்சி"
  },
  {
    treatmentEn: "Diabetic Eye Screening",
    treatmentTa: "சர்க்கரை நோய் கண் பரிசோதனை",
    quoteEn: "I have been diabetic for ten years, and this is the first time a doctor explained exactly how it affects my retina. The screening was quick, and I left knowing exactly what I need to do to protect my sight.",
    quoteTa: "எனக்கு பத்தாண்டுகளாக சர்க்கரை நோய் உள்ளது, சர்க்கரை நோய் எனது விழித்திரையை எப்படிப் பாதிக்கிறது என்பதை முதன்முறையாக ஒரு மருத்துவர் மிகத் தெளிவாக விளக்கினார். பரிசோதனை விரைவாக முடிந்தது, எனது பார்வையைப் பாதுகாக்க நான் என்ன செய்ய வேண்டும் என்பதை முழுமையாகத் தெரிந்து கொண்டு திரும்பினேன்.",
    authorEn: "S. Lakshmi, Zamin Uthukuli",
    authorTa: "எஸ். லட்சுமி, ஜமீன் ஊத்துக்குளி"
  },
  {
    treatmentEn: "Retina, Emergency",
    treatmentTa: "விழித்திரை, அவசர சிகிச்சை",
    quoteEn: "When I noticed a sudden shadow in my vision, I was terrified. Dr. Raghuram examined me immediately and started treatment right away. His calm approach and expertise saved my sight.",
    quoteTa: "என் பார்வையில் திடீரென ஒரு நிழல் விழுந்ததைக் கண்டபோது நான் மிகவும் பயந்துவிட்டேன். டாக்டர் ரகுராம் என்னை உடனடியாகப் பரிசோதித்து, உடனே சிகிச்சையைத் தொடங்கினார். அவரது அமைதியான அணுகுமுறையும், நிபுணத்துவமுமே எனது பார்வையை காப்பாற்றியது.",
    authorEn: "A. Karthik, Kinathukadavu",
    authorTa: "ஏ. கார்த்திக், கிணத்துக்கடவு"
  },
  {
    treatmentEn: "Cataract Surgery",
    treatmentTa: "கண்புரை அறுவை சிகிச்சை",
    quoteEn: "My mother was very anxious about the surgery, but the doctor's patience put her completely at ease. She walked out smiling the very same day. We are deeply grateful for the excellent care.",
    quoteTa: "அறுவை சிகிச்சை குறித்து என் அம்மா மிகவும் கவலையாக இருந்தார், ஆனால் மருத்துவரின் பொறுமையான அணுகுமுறை அவரை அமைதிப்படுத்தியது. அதே நாளின் மாலையிலேயே அவர் சிரித்துக் கொண்டே வீடு திரும்பினார். இந்தச் சிறந்த சிகிச்சைக்காக நாங்கள் மிகவும் கடமைப்பட்டுள்ளோம்.",
    authorEn: "M. Devi, Pollachi",
    authorTa: "எம். தேவி, பொள்ளாச்சி"
  },
  {
    treatmentEn: "Glaucoma Monitoring",
    treatmentTa: "குளுக்கோமா கண்காணிப்பு",
    quoteEn: "Glaucoma runs in our family, so I need constant monitoring. The clinic is equipped with all the latest testing machines, and the doctor takes time to review the changes with me every visit.",
    quoteTa: "குளுக்கோமா எங்கள் குடும்பத்தில் பரம்பரையாக உள்ளது, எனவே எனக்குத் தொடர் கண்காணிப்பு தேவை. இந்த மருத்துவமனை அனைத்து நவீன பரிசோதனை இயந்திரங்களையும் கொண்டுள்ளது, ஒவ்வொரு முறையும் மருத்துவர் பொறுமையாக மாற்றங்களை எனக்கு விளக்குகிறார்.",
    authorEn: "V. Subramanian, Anaimalai",
    authorTa: "வி. சுப்பிரமணியன், ஆனைமலை"
  },
  {
    treatmentEn: "Spectacles and Check-up",
    treatmentTa: "கண்ணாடி மற்றும் பரிசோதனை",
    quoteEn: "A very thorough eye check-up. They did not try to sell me unnecessary expensive glasses. Honest advice and a very clean, professional clinic.",
    quoteTa: "மிகவும் முழுமையான கண் பரிசோதனை. தேவையில்லாத விலையுயர்ந்த கண்ணாடிகளை விற்க அவர்கள் முயற்சிக்கவில்லை. நேர்மையான ஆலோசனை மற்றும் மிகவும் சுத்தமான, தொழில்முறையான மருத்துவமனை.",
    authorEn: "P. Anitha, Pollachi",
    authorTa: "பி. அனிதா, பொள்ளாச்சி"
  }
];

export default function StoriesGrid() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.internalNote}>
          <div className={styles.noteTitle}>⚠ A note for the hospital, not the patient</div>
          <div className={styles.noteBody}>
            The six quotations below are placeholders. They are written to demonstrate length and tone. They are NOT real patients and must be replaced before launch. (Alternatively, Google Reviews can be embedded here.) Please remove this note when the real quotations are in.
          </div>
        </div>

        <Reveal className={styles.grid} stagger={0.08} targets=":scope > *">
          {REVIEWS.map((review, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.stars}>
                <span aria-hidden="true">★★★★★</span>
                <span className="sr-only"><span className="en">5 out of 5 stars</span><span className="ta" lang="ta">5க்கு 5 நட்சத்திரங்கள்</span></span>
              </div>
              <div className={styles.treatment}>
                <span className="en">{review.treatmentEn}</span>
                <span className="ta" lang="ta">{review.treatmentTa}</span>
              </div>
              <blockquote className={styles.quote}>
                &ldquo;
                <span className="en">{review.quoteEn}</span>
                <span className="ta" lang="ta">{review.quoteTa}</span>
                &rdquo;
              </blockquote>
              <div className={styles.author}>
                <span className="en">{review.authorEn}</span>
                <span className="ta" lang="ta">{review.authorTa}</span>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
