import Link from "next/link";
import styles from "../../../sharedDetail.module.css";
import { Pipette, ScanSearch, Stethoscope, ChevronRight } from "lucide-react";

export const metadata = {
  title: "Skin Conditions & Eczema | Wellnest Ayurveda",
  description: "Ayurvedic management for chronic skin conditions, eczema, and psoriasis through blood purification.",
};

export default function SkinConditionsPage() {
  return (
    <main className={`${styles.container} ${styles.ayurvedaTheme}`}>
      <header className={styles.hero}>
        <div className={styles.iconWrapper}>
          <Pipette size={32} />
        </div>
        <h1 className={styles.title}>Skin Conditions & Eczema</h1>
        <p className={styles.hook}>
          Ayurveda views the skin as a mirror of the liver and blood. We treat <span className={styles.symptomHighlight}>eczema</span>, 
          <span className={styles.symptomHighlight}>psoriasis</span>, and <span className={styles.symptomHighlight}>chronic acne</span> by purifying the blood (Rakta Shodhana).
        </p>
      </header>

      <section className={styles.contentWrapper}>
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <ScanSearch className={styles.sectionIcon} /> Root-Cause Purification
          </h2>
          <ul className={styles.bulletList}>
            <li><strong>Rakta Shodhana:</strong> We address the 'fire' in the blood (Pitta) which manifests as inflammatory skin eruptions and itching.</li>
            <li><strong>Liver Support:</strong> Improving liver function is essential for clearing the metabolic waste that causes chronic dermatitis.</li>
            <li><strong>Lymphatic Drainage:</strong> Our therapies help clear the interstitial fluid, reducing swelling and irritation in chronic psoriasis.</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <Stethoscope className={styles.sectionIcon} /> Suggested Protocols
          </h2>
          <div className={styles.treatmentLinks}>
            <Link href="/ayurveda/treatments/panchakarma-detox" className={styles.treatmentCard}>
              <div className={styles.treatmentInfo}>
                <strong>Virechana (Clinical Purgation)</strong>
                <span>Ayurveda • The definitive therapy for blood and skin purification</span>
              </div>
              <ChevronRight className={styles.arrowIcon} />
            </Link>
            
            <Link href="/ayurveda/treatments/abhyanga-rejuvenation" className={styles.treatmentCard}>
              <div className={styles.treatmentInfo}>
                <strong>Takradhara (Cooling Liquid Flow)</strong>
                <span>Ayurveda • Specialized for heat-based inflammatory skin conditions</span>
              </div>
              <ChevronRight className={styles.arrowIcon} />
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>Heal your skin from within.</h2>
        <p className={styles.ctaDesc}>Step towards clear, healthy skin with our blood-purification protocols.</p>
        <Link href="/booking" className={styles.ctaButton}>
          Consult our Specialists
        </Link>
      </section>
    </main>
  );
}
