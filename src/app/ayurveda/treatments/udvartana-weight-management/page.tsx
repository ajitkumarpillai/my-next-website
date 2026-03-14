import Link from "next/link";
import styles from "../../../sharedDetail.module.css";
import { Scale, Clock, Thermometer, FlaskConical } from "lucide-react";

export const metadata = {
  title: "Udvartana Weight Management | Wellnest Ayurveda",
  description: "Dry herbal powder massage for metabolism stimulation, cellulite reduction, and lymphatic detoxification.",
};

export default function UdvartanaPage() {
  return (
    <main className={`${styles.container} ${styles.ayurvedaTheme}`}>
      <header className={styles.hero}>
        <div className={styles.iconWrapper}>
          <Scale size={32} />
        </div>
        <h1 className={styles.title}>Udvartana (Medical Powder Massage)</h1>
        <p className={styles.hook}>
          Udvartana is an invigorating, upward dry-massage using herbal powders chosen for their "Lekhana" (scraping) qualities. 
          It is the ultimate Ayurvedic treatment for metabolic sluggishness and lymphatic congestion.
        </p>
      </header>

      <section className={styles.contentWrapper}>
        <div className={styles.metricsGrid}>
          <div className={styles.metric}>
            <Clock className={styles.sectionIcon} />
            <span className={styles.metricValue}>60 Mins</span>
            <span className={styles.metricLabel}>Duration</span>
          </div>
          <div className={styles.metric}>
            <FlaskConical className={styles.sectionIcon} />
            <span className={styles.metricValue}>Herbal Powders</span>
            <span className={styles.metricLabel}>Base Medium</span>
          </div>
        </div>

        <div className={styles.section} style={{marginTop: "4rem"}}>
          <h2 className={styles.sectionTitle}>The Clinical Impact</h2>
          <ul className={styles.bulletList}>
            <li><strong>Lipid Metabolism:</strong> The intensity of the dry massage generates heat, which helps liquify sub-cutaneous fat and stimulate fat metabolism.</li>
            <li><strong>Cellulite Reduction:</strong> By improving lymphatic drainage and reducing "Kapha" accumulation under the skin, it drastically improves skin texture.</li>
            <li><strong>Dermal Exfoliation:</strong> The micronized herbal powders cleanse the skin surface, improving blood flow and leaving the skin glowing and tightened.</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Primary Indications</h2>
          <div className={styles.conditionLinks}>
            <Link href="/ayurveda/conditions/pcos-hormonal-imbalance" className={styles.conditionTag}>
              PCOS Weight Management
            </Link>
            <span className={styles.conditionTag}>Obesity & Metabolic Syndrome</span>
            <span className={styles.conditionTag}>Water Retention</span>
            <span className={styles.conditionTag}>Lethargy & Slow Digestion</span>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>Sculpt your metabolic health.</h2>
        <p className={styles.ctaDesc}>Activate your lymphatic system with a course of Udvartana sessions.</p>
        <Link href="/booking" className={styles.ctaButton}>
          Book Udvartana
        </Link>
      </section>
    </main>
  );
}
