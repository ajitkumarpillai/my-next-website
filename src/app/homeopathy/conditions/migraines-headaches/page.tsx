import Link from "next/link";
import styles from "../../../sharedDetail.module.css";
import { Brain, ScanSearch, Stethoscope, ChevronRight } from "lucide-react";

export const metadata = {
  title: "Migraines & Chronic Headaches | Wellnest Care",
  description: "Root-cause homeopathic treatment for migraines and tension headaches in Abu Dhabi.",
};

export default function MigrainesPage() {
  return (
    <main className={`${styles.container} ${styles.homeopathyTheme}`}>
      <header className={styles.hero}>
        <div className={styles.iconWrapper}>
          <Brain size={32} />
        </div>
        <h1 className={styles.title}>Migraines & Chronic Headaches</h1>
        <p className={styles.hook}>
          We trace the <span className={styles.symptomHighlight}>throbbing pain</span> back to your specific triggers—hormonal, environmental, or stress-related—to 
          silence <span className={styles.symptomHighlight}>light sensitivity</span> and recurrence.
        </p>
      </header>

      <section className={styles.contentWrapper}>
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <ScanSearch className={styles.sectionIcon} /> The Clinical Investigation
          </h2>
          <p style={{marginBottom: "1.5rem", color: "var(--color-muted)", lineHeight: "1.7"}}>
            Unlike pain-suppression medication, Homeopathy looks at the *modality* of your pain. Does it worsen with heat? Is it localized to one side? Does it follow your hormonal cycle?
          </p>
          <ul className={styles.bulletList}>
            <li><strong>Trigger Desensitization:</strong> We identify the neuro-vascular triggers and use constitutional remedies to stabilize the body's response.</li>
            <li><strong>Hormonal Integration:</strong> For many women, migraines follow a cyclical pattern. We address the underlying endocrine balance.</li>
            <li><strong>Neuro-Vascular Support:</strong> Remedies aim to improve blood flow regulation to the brain, reducing the intensity of the vascular flare-ups.</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <Stethoscope className={styles.sectionIcon} /> Suggested Protocols
          </h2>
          <div className={styles.treatmentLinks}>
            <Link href="/homeopathy/treatments/constitutional-assessment" className={styles.treatmentCard}>
              <div className={styles.treatmentInfo}>
                <strong>Constitutional Intake</strong>
                <span>Homeopathy • Identifying your unique migraine blueprint</span>
              </div>
              <ChevronRight className={styles.arrowIcon} />
            </Link>
            
            <Link href="/homeopathy/treatments/acute-care-protocol" className={styles.treatmentCard}>
              <div className={styles.treatmentInfo}>
                <strong>Acute Flare-up Support</strong>
                <span>Homeopathy • Rapid intervention for active headache episodes</span>
              </div>
              <ChevronRight className={styles.arrowIcon} />
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>End the cycle of pain.</h2>
        <p className={styles.ctaDesc}>Discover your specific migraine trigger and reclaim your quality of life.</p>
        <Link href="/booking" className={styles.ctaButton}>
          Consult our Specialists
        </Link>
      </section>
    </main>
  );
}
