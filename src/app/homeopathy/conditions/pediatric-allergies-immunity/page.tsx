import Link from "next/link";
import styles from "../../../sharedDetail.module.css";
import { Baby, ScanSearch, Stethoscope, ChevronRight } from "lucide-react";

export const metadata = {
  title: "Pediatric Allergies & Immunity | Wellnest Homeopathy",
  description: "Natural, steroid-free homeopathic care for child allergies, recurrent infections, and immune strengthening.",
};

export default function PediatricAllergyPage() {
  return (
    <main className={`${styles.container} ${styles.homeopathyTheme}`}>
      <header className={styles.hero}>
        <div className={styles.iconWrapper}>
          <Baby size={32} />
        </div>
        <h1 className={styles.title}>Pediatric Allergies & Immunity</h1>
        <p className={styles.hook}>
          A child's immune system is still "learning." We provide gentle, non-suppressive homeopathic protocols 
          to reduce <span className={styles.symptomHighlight}>hypersensitivity</span> and build resilience without heavy medications.
        </p>
      </header>

      <section className={styles.contentWrapper}>
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <ScanSearch className={styles.sectionIcon} /> The Homeopathic Approach
          </h2>
          <ul className={styles.bulletList}>
            <li><strong>Treating the Terrian:</strong> Instead of just blocking histamine, Homeopathy strengthens the child's underlying constitution to naturally lower the allergic threshold.</li>
            <li><strong>Non-Suppressive Relief:</strong> We address recurrent ear infections, tonsillitis, and "creeping" allergies at the root.</li>
            <li><strong>Safe & Gentle:</strong> Our nano-diluted remedies address asthmatic bronchitis and urticaria without the side effects of steroids.</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <Stethoscope className={styles.sectionIcon} /> Suggested Protocols
          </h2>
          <div className={styles.treatmentLinks}>
            <Link href="/homeopathy/treatments/constitutional-assessment" className={styles.treatmentCard}>
              <div className={styles.treatmentInfo}>
                <strong>Constitutional Pediatric Assessment</strong>
                <span>Homeopathy • Comprehensive deep-dive into the child's health history</span>
              </div>
              <ChevronRight className={styles.arrowIcon} />
            </Link>
            
            <Link href="/homeopathy/treatments/immune-modulation-therapy" className={styles.treatmentCard}>
              <div className={styles.treatmentInfo}>
                <strong>Immune-Modulation Protocol</strong>
                <span>Homeopathy • Building natural defense against seasonal triggers</span>
              </div>
              <ChevronRight className={styles.arrowIcon} />
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>Protect their future health.</h2>
        <p className={styles.ctaDesc}>Book a specialized pediatric consultation with our Lead Homeopath.</p>
        <Link href="/booking" className={styles.ctaButton}>
          Consult our Specialists
        </Link>
      </section>
    </main>
  );
}
