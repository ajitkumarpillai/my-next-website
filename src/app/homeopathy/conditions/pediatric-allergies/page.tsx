import Link from "next/link";
import styles from "../../../sharedDetail.module.css";
import { Flame, ScanSearch, Stethoscope, ChevronRight } from "lucide-react";

export const metadata = {
  title: "Pediatric Allergies | Wellnest Care",
  description: "Natural, non-suppressive homeopathic care for child allergies and asthma in Abu Dhabi.",
};

export default function PediatricAllergiesPage() {
  return (
    <main className={`${styles.container} ${styles.homeopathyTheme}`}>
      <header className={styles.hero}>
        <div className={styles.iconWrapper}>
          <Flame size={32} />
        </div>
        <h1 className={styles.title}>Pediatric Allergies & Asthma</h1>
        <p className={styles.hook}>
          Healing requires modulating the child's innate <span className={styles.symptomHighlight}>immune hyper-reactivity</span> safely 
          and naturally, without reliance on steroids or long-term suppression.
        </p>
      </header>

      <section className={styles.contentWrapper}>
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <ScanSearch className={styles.sectionIcon} /> The Pediatric Vision
          </h2>
          <p style={{marginBottom: "1.5rem", color: "var(--color-muted)", lineHeight: "1.7"}}>
            Children are highly responsive to Homeopathy. Because their vital force is dynamic, we can often reverse allergic patterns before they become chronic adult health burdens.
          </p>
          <ul className={styles.bulletList}>
            <li><strong>Immune Re-education:</strong> We use nano-diluted remedies to gently "teach" the immune system not to overreact to dust, pollen, or certain foods.</li>
            <li><strong>Respiratory Strengthening:</strong> For asthmatic children, our focus is on clearing the bronchial pathways and strengthening lung capacity.</li>
            <li><strong>Toxin Clearance:</strong> We address the "Miasmatic" load to ensure the child's developmental growth is not hindered by recurrent infections.</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <Stethoscope className={styles.sectionIcon} /> Suggested Protocols
          </h2>
          <div className={styles.treatmentLinks}>
            <Link href="/homeopathy/treatments/constitutional-assessment" className={styles.treatmentCard}>
              <div className={styles.treatmentInfo}>
                <strong>Constitutional Assessment</strong>
                <span>Homeopathy • Deep dive into child's developmental health</span>
              </div>
              <ChevronRight className={styles.arrowIcon} />
            </Link>
            
            <Link href="/homeopathy/treatments/immune-modulation-therapy" className={styles.treatmentCard}>
              <div className={styles.treatmentInfo}>
                <strong>Immune Modulation Therapy</strong>
                <span>Homeopathy • Building a resilient defensive baseline</span>
              </div>
              <ChevronRight className={styles.arrowIcon} />
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>Give them a healthy start.</h2>
        <p className={styles.ctaDesc}>Protect your child's vitality with gentle, evidence-informed homeopathic care.</p>
        <Link href="/booking" className={styles.ctaButton}>
          Consult Dr. Aisha
        </Link>
      </section>
    </main>
  );
}
