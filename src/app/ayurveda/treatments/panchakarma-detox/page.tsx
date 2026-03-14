import Link from "next/link";
import styles from "../../../sharedDetail.module.css";
import { ArrowLeft, Droplets, FlaskConical, Clock } from "lucide-react";

export const metadata = {
  title: "Panchakarma Detoxification | Wellnest Ayurveda",
  description: "The ultimate 5-step Ayurvedic cellular cleanse in Abu Dhabi.",
};

export default function PanchakarmaPage() {
  return (
    <main className={`${styles.container} ${styles.ayurvedaTheme}`}>
      <header className={styles.hero}>
        <div className={styles.iconWrapper}>
          <Droplets size={32} />
        </div>
        <h1 className={styles.title}>Panchakarma Detoxification</h1>
        <p className={styles.hook}>
          "Pancha" (Five) "Karma" (Actions). This is not a spa detox; it is the most profound clinical purification system in Ayurvedic medicine, designed to flush deep-seated metabolic toxins (Ama) from your fat cells and vital organs.
        </p>
      </header>

      <section className={styles.contentWrapper}>
        <div className={styles.metricsGrid}>
          <div className={styles.metric}>
            <Clock className={styles.sectionIcon} />
            <span className={styles.metricValue}>7 to 21 Days</span>
            <span className={styles.metricLabel}>Duration</span>
          </div>
          <div className={styles.metric}>
            <FlaskConical className={styles.sectionIcon} />
            <span className={styles.metricValue}>Pre-Consult</span>
            <span className={styles.metricLabel}>Requirement</span>
          </div>
        </div>

        <div className={styles.section} style={{marginTop: "4rem"}}>
          <h2 className={styles.sectionTitle}>The Science of the Cleanse</h2>
          <ul className={styles.bulletList}>
            <li><strong>Purvakarma (The Prep):</strong> We spend 3-7 days softening the toxins through internal oleation (drinking medicated ghee) and external thermogenesis (herbal steam).</li>
            <li><strong>Pradhana Karma (The Flush):</strong> Once toxins are mobilized into the GI tract, we use specialized, physician-monitored emesis or purgation therapies to completely expel them from the body.</li>
            <li><strong>Paschat Karma (The Rebuild):</strong> The digestive fire (Agni) is weak post-cleanse. We provide a strict restorative diet protocol to rebuild cellular immunity.</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Primary Indications (What it Treats)</h2>
          <p style={{marginBottom: "1.5rem", color: "var(--color-muted)", lineHeight: "1.6"}}>
            Panchakarma is the definitive solution for conditions where toxins have crossed the digestive barrier and settled into deeper tissues.
          </p>
          <div className={styles.conditionLinks}>
            <Link href="/ayurveda/conditions/skin-chronic-eczema" className={styles.conditionTag}>
              Eczema & Psoriasis
            </Link>
            <Link href="/ayurveda/conditions/joint-pain-arthritis" className={styles.conditionTag}>
              Rheumatoid Arthritis
            </Link>
            <span className={styles.conditionTag}>Autoimmune Disorders</span>
            <span className={styles.conditionTag}>Chronic Fatigue</span>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>Clear the toxicity holding you back.</h2>
        <p className={styles.ctaDesc}>Panchakarma requires clearance from Dr. Vikram.</p>
        <Link href="/booking" className={styles.ctaButton}>
          Book Assessment
        </Link>
      </section>
    </main>
  );
}
