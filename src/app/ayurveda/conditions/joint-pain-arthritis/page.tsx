import Link from "next/link";
import styles from "../../../sharedDetail.module.css";
import { ActivitySquare, ScanSearch, Stethoscope, ChevronRight } from "lucide-react";

export const metadata = {
  title: "Arthritis & Joint Pain | Wellnest Ayurveda",
  description: "Ayurvedic treatment for Osteoarthritis, Rheumatoid Arthritis, and chronic joint stiffness in Abu Dhabi.",
};

export default function ArthritisPage() {
  return (
    <main className={`${styles.container} ${styles.ayurvedaTheme}`}>
      <header className={styles.hero}>
        <div className={styles.iconWrapper}>
          <ActivitySquare size={32} />
        </div>
        <h1 className={styles.title}>Joint Pain & Arthritis</h1>
        <p className={styles.hook}>
          In Ayurveda, chronic <span className={styles.symptomHighlight}>stiffness</span> and <span className={styles.symptomHighlight}>joint inflammation</span> are often the result of 'Ama' (toxins) 
          accumulating in the bone tissue. We don't just mask the pain; we lubricate the source.
        </p>
      </header>

      <section className={styles.contentWrapper}>
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <ScanSearch className={styles.sectionIcon} /> The Root Cause
          </h2>
          <ul className={styles.bulletList}>
            <li><strong>Deep Lubrication:</strong> We use medicated oils and localized heat to penetrate the synovial fluid, reducing crepitus and improving mobility.</li>
            <li><strong>Ama Detoxification:</strong> Specific Panchakarma stages are tailored to scrape out systemic inflammation from the marrow and joint spaces.</li>
            <li><strong>Nerve Soothing:</strong> Our geriatric and athletic recovery protocols focus on calming 'Vata'—the primary driver of degenerative bone pain.</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <Stethoscope className={styles.sectionIcon} /> Suggested Protocols
          </h2>
          <div className={styles.treatmentLinks}>
            <Link href="/specialist/athletic-recovery" className={styles.treatmentCard}>
              <div className={styles.treatmentInfo}>
                <strong>Clinical Athletic Recovery Protocol</strong>
                <span>Ayurveda • Fascial Release & Structural Realignment</span>
              </div>
              <ChevronRight className={styles.arrowIcon} />
            </Link>

            <Link href="/ayurveda/treatments/kizhi-herbal-poultice" className={styles.treatmentCard}>
              <div className={styles.treatmentInfo}>
                <strong>Kizhi (Herbal Poultice)</strong>
                <span>Ayurveda • Intense heat for joint stiffness & swelling</span>
              </div>
              <ChevronRight className={styles.arrowIcon} />
            </Link>

            <Link href="/ayurveda/treatments/kati-vasti-spine-care" className={styles.treatmentCard}>
              <div className={styles.treatmentInfo}>
                <strong>Kati Vasti (Spine Care)</strong>
                <span>Ayurveda • Targeted relief for lumbar degeneration</span>
              </div>
              <ChevronRight className={styles.arrowIcon} />
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>Restore your mobility.</h2>
        <p className={styles.ctaDesc}>Step into a pain-free life with our structural recovery protocols.</p>
        <Link href="/booking" className={styles.ctaButton}>
          Consult our Specialists
        </Link>
      </section>
    </main>
  );
}
