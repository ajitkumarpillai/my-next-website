import Link from "next/link";
import styles from "../../../sharedDetail.module.css";
import { Brain, ScanSearch, Stethoscope, ChevronRight } from "lucide-react";

export const metadata = {
  title: "Behavioral & Neuro-Support | Wellnest Homeopathy",
  description: "Integrative homeopathic support for ADHD, Autism (ASD) symptoms, and childhood behavioral challenges.",
};

export default function BehavioralPage() {
  return (
    <main className={`${styles.container} ${styles.homeopathyTheme}`}>
      <header className={styles.hero}>
        <div className={styles.iconWrapper}>
          <Brain size={32} />
        </div>
        <h1 className={styles.title}>Behavioral & Neuro-Support</h1>
        <p className={styles.hook}>
          Homeopathy offers a compassionate path for children with <span className={styles.symptomHighlight}>ADHD</span>, <span className={styles.symptomHighlight}>ASD</span>, and 
          <span className={styles.symptomHighlight}>sensory processing</span> challenges. We focus on neurological grounding.
        </p>
      </header>

      <section className={styles.contentWrapper}>
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <ScanSearch className={styles.sectionIcon} /> The Integrative Vision
          </h2>
          <ul className={styles.bulletList}>
            <li><strong>Symptom Focus:</strong> We target hyperactivity, restless sleep, and sensory overwhelming with high-precision remedies.</li>
            <li><strong>Gentle Grounding:</strong> Our remedies aim to gently balance the nervous system without masking attention difficulties or personality.</li>
            <li><strong>Brain-Gut Link:</strong> We address neuro-inflammation and digestive sensitivities that often co-occur with behavioral challenges.</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <Stethoscope className={styles.sectionIcon} /> Suggested Protocols
          </h2>
          <div className={styles.treatmentLinks}>
            <Link href="/homeopathy/treatments/constitutional-assessment" className={styles.treatmentCard}>
              <div className={styles.treatmentInfo}>
                <strong>Master Constitutional Assessment</strong>
                <span>Homeopathy • Detailed neurological and behavioral profiling</span>
              </div>
              <ChevronRight className={styles.arrowIcon} />
            </Link>
            
            <Link href="/homeopathy/treatments/immune-modulation-therapy" className={styles.treatmentCard}>
              <div className={styles.treatmentInfo}>
                <strong>Immune-Gut-Brain Detox</strong>
                <span>Homeopathy • Addressing the inflammatory roots of neuro-challenges</span>
              </div>
              <ChevronRight className={styles.arrowIcon} />
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>Support their unique journey.</h2>
        <p className={styles.ctaDesc}>Discover how integrative Homeopathy can bring balance to your child's world.</p>
        <Link href="/booking" className={styles.ctaButton}>
          Consult our Specialists
        </Link>
      </section>
    </main>
  );
}
