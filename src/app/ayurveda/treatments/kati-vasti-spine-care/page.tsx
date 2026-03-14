import Link from "next/link";
import styles from "../../../sharedDetail.module.css";
import { Container, Clock, Thermometer, FlaskConical } from "lucide-react";

export const metadata = {
  title: "Kati Vasti Spine Care | Wellnest Ayurveda",
  description: "Specialized localized oil pooling for lower back pain, sciatica, and vertebral disk conditions.",
};

export default function KatiVastiPage() {
  return (
    <main className={`${styles.container} ${styles.ayurvedaTheme}`}>
      <header className={styles.hero}>
        <div className={styles.iconWrapper}>
          <Container size={32} />
        </div>
        <h1 className={styles.title}>Kati Vasti (Localized Spine Care)</h1>
        <p className={styles.hook}>
          Kati Vasti involves creating a reservoir of medicated dough over the lumbar region and filling it with warm medicinal oil. 
          This localized pooling provides deep nourishment to the spinal disks and relieves nerve compression.
        </p>
      </header>

      <section className={styles.contentWrapper}>
        <div className={styles.metricsGrid}>
          <div className={styles.metric}>
            <Clock className={styles.sectionIcon} />
            <span className={styles.metricValue}>45 Mins</span>
            <span className={styles.metricLabel}>Duration</span>
          </div>
          <div className={styles.metric}>
            <Thermometer className={styles.sectionIcon} />
            <span className={styles.metricValue}>45°C - 50°C</span>
            <span className={styles.metricLabel}>Oil Temp</span>
          </div>
        </div>

        <div className={styles.section} style={{marginTop: "4rem"}}>
          <h2 className={styles.sectionTitle}>The Clinical Process</h2>
          <ul className={styles.bulletList}>
            <li><strong>Localized Penetration:</strong> The "holding" of oil allows the medicinal properties to penetrate deeper through the skin layers into the vertebral column.</li>
            <li><strong>Disk Hydration:</strong> It helps lubricate and hydrate the intervertebral disks, relieving the "dryness" associated with chronic Vata spinal issues.</li>
            <li><strong>Nerve Soothing:</strong> The warmth and chemical properties of the oils desensitize irritated nerve endings, providing immediate relief from sciatica and spasms.</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Primary Indications</h2>
          <div className={styles.conditionLinks}>
            <Link href="/ayurveda/conditions/joint-pain-arthritis" className={styles.conditionTag}>
              Lower Back Pain
            </Link>
            <span className={styles.conditionTag}>Sciatica</span>
            <span className={styles.conditionTag}>Disk Bulge / Herniation</span>
            <span className={styles.conditionTag}>Lumbar Spondylosis</span>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>Support your spinal health.</h2>
        <p className={styles.ctaDesc}>Kati Vasti is a high-precision clinical procedure requiring specialist application.</p>
        <Link href="/booking" className={styles.ctaButton}>
          Book Kati Vasti
        </Link>
      </section>
    </main>
  );
}
