import Link from "next/link";
import styles from "../../../sharedDetail.module.css";
import { Wind, ScanSearch, Stethoscope, ChevronRight } from "lucide-react";

export const metadata = {
  title: "Allergic Rhinitis & Sinusitis | Wellnest Homeopathy",
  description: "Homeopathic management for chronic sneezing, nasal congestion, and sinusitis triggered by UAE environmental factors.",
};

export default function RhinitisPage() {
  return (
    <main className={`${styles.container} ${styles.homeopathyTheme}`}>
      <header className={styles.hero}>
        <div className={styles.iconWrapper}>
          <Wind size={32} />
        </div>
        <h1 className={styles.title}>Allergic Rhinitis & Sinusitis</h1>
        <p className={styles.hook}>
          Dust, pollen, and recycled AC air create a persistent burden. We treat the <span className={styles.symptomHighlight}>chronic inflammation</span> 
          of the mucous membranes to provide lasting relief from <span className={styles.symptomHighlight}>The UAE Sneeze</span>.
        </p>
      </header>

      <section className={styles.contentWrapper}>
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <ScanSearch className={styles.sectionIcon} /> The Homeopathic Bridge
          </h2>
          <ul className={styles.bulletList}>
            <li><strong>Desensitization:</strong> We use bio-matching remedies to desensitize the body to sand-dust rhinitis and humidity-related sneezing.</li>
            <li><strong>Drainage Therapy:</strong> Homeopathic remedies help drain congested sinuses, reducing the pressure and headaches associated with chronicity.</li>
            <li><strong>Respiratory Recovery:</strong> We help the body complete the healing process for lingering nasal drip and mucosal irritation.</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <Stethoscope className={styles.sectionIcon} /> Suggested Protocols
          </h2>
          <div className={styles.treatmentLinks}>
            <Link href="/homeopathy/treatments/acute-care-protocol" className={styles.treatmentCard}>
              <div className={styles.treatmentInfo}>
                <strong>Acute Respiratory Support</strong>
                <span>Homeopathy • Rapid relief for active congestion & sneezing</span>
              </div>
              <ChevronRight className={styles.arrowIcon} />
            </Link>
            
            <Link href="/homeopathy/treatments/miasmatic-deep-cleanse" className={styles.treatmentCard}>
              <div className={styles.treatmentInfo}>
                <strong>Miasmatic Deep-Cleanse</strong>
                <span>Homeopathy • Addressing the hereditary root of hypersensitivity</span>
              </div>
              <ChevronRight className={styles.arrowIcon} />
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>Breathe freely again.</h2>
        <p className={styles.ctaDesc}>Our respiratory protocols are designed to break the cycle of seasonal dependence.</p>
        <Link href="/booking" className={styles.ctaButton}>
          Consult our Specialists
        </Link>
      </section>
    </main>
  );
}
