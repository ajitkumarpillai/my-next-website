import Link from "next/link";
import styles from "../../../sharedDetail.module.css";
import { Flame, Clock, Thermometer, FlaskConical } from "lucide-react";

export const metadata = {
  title: "Kizhi Herbal Poultice Therapy | Wellnest Ayurveda",
  description: "Specialized heat therapy using herbal bundles to relieve inflammatory pain, stiffness, and structural congestion.",
};

export default function KizhiPage() {
  return (
    <main className={`${styles.container} ${styles.ayurvedaTheme}`}>
      <header className={styles.hero}>
        <div className={styles.iconWrapper}>
          <Flame size={32} />
        </div>
        <h1 className={styles.title}>Kizhi (Herbal Poultice)</h1>
        <p className={styles.hook}>
          Kizhi involves intense thermogenesis using muslin bundles filled with medicinal herbs, powders, or special rice. 
          It is the premier Ayurvedic intervention for breaking down stiffness and relieving deep structural pain.
        </p>
      </header>

      <section className={styles.contentWrapper}>
        <div className={styles.metricsGrid}>
          <div className={styles.metric}>
            <Clock className={styles.sectionIcon} />
            <span className={styles.metricValue}>45 or 60 Mins</span>
            <span className={styles.metricLabel}>Duration</span>
          </div>
          <div className={styles.metric}>
            <Thermometer className={styles.sectionIcon} />
            <span className={styles.metricValue}>High Heat</span>
            <span className={styles.metricLabel}>Therapy Type</span>
          </div>
        </div>

        <div className={styles.section} style={{marginTop: "4rem"}}>
          <h2 className={styles.sectionTitle}>Therapeutic Variations</h2>
          <ul className={styles.bulletList}>
            <li><strong>Podikizhi:</strong> Using bundles filled with specialized herbal powders to treat Vata-Kapha joint pain and reduce inflammatory swelling.</li>
            <li><strong>Elakizhi:</strong> Utilizing fresh medicated leaves to improve peripheral circulation and muscle tone, excellent for sports recovery.</li>
            <li><strong>Njavara Kizhi:</strong> Bundles of medicinal rice boiled in milk and decoctions, used for neuromuscular strengthening and skin rejuvenation.</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Primary Indications</h2>
          <div className={styles.conditionLinks}>
            <Link href="/ayurveda/conditions/joint-pain-arthritis" className={styles.conditionTag}>
              Spondylitis & Arthritis
            </Link>
            <Link href="/specialist/athletic-recovery" className={styles.conditionTag}>
              Sports Injuries
            </Link>
            <span className={styles.conditionTag}>Lower Back Stiffness</span>
            <span className={styles.conditionTag}>Neuromuscular Pain</span>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>Break the cycle of pain.</h2>
        <p className={styles.ctaDesc}>Let our specialists customize a Kizhi protocol for your specific condition.</p>
        <Link href="/booking" className={styles.ctaButton}>
          Book Kizhi Therapy
        </Link>
      </section>
    </main>
  );
}
