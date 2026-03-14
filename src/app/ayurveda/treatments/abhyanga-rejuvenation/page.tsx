import Link from "next/link";
import styles from "../../../sharedDetail.module.css";
import { Waves, Clock, Thermometer, FlaskConical } from "lucide-react";

export const metadata = {
  title: "Abhyanga Full-Body Rejuvenation | Wellnest Ayurveda",
  description: "Traditional 4-hand Ayurvedic oil massage for detoxification, lymphatic drainage, and nervous system grounding.",
};

export default function AbhyangaPage() {
  return (
    <main className={`${styles.container} ${styles.ayurvedaTheme}`}>
      <header className={styles.hero}>
        <div className={styles.iconWrapper}>
          <Waves size={32} />
        </div>
        <h1 className={styles.title}>Abhyanga Rejuvenation</h1>
        <p className={styles.hook}>
          Abhyanga is the cornerstone of Ayurvedic wellness. This is not a mere massage; it is a clinical application 
          of warm, herb-infused oils designed to mobilize toxins from your tissues and ground your nervous system.
        </p>
      </header>

      <section className={styles.contentWrapper}>
        <div className={styles.metricsGrid}>
          <div className={styles.metric}>
            <Clock className={styles.sectionIcon} />
            <span className={styles.metricValue}>60 or 90 Mins</span>
            <span className={styles.metricLabel}>Duration</span>
          </div>
          <div className={styles.metric}>
            <Thermometer className={styles.sectionIcon} />
            <span className={styles.metricValue}>Warm Oil</span>
            <span className={styles.metricLabel}>Temperature</span>
          </div>
        </div>

        <div className={styles.section} style={{marginTop: "4rem"}}>
          <h2 className={styles.sectionTitle}>The Clinical Benefits</h2>
          <ul className={styles.bulletList}>
            <li><strong>Snehana (Oleation):</strong> Deep dermal absorption of medicated oils nourishes the internal organs and lubricates the joints.</li>
            <li><strong>Vata Pacification:</strong> The rhythmic, warm application of oil is the ultimate antidote to chronic stress, anxiety, and scattered mental energy.</li>
            <li><strong>Lymphatic Stimulation:</strong> Specialized strokes move towards the heart, encouraging the drainage of metabolic waste and improving circulation.</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Primary Indications</h2>
          <div className={styles.conditionLinks}>
            <Link href="/ayurveda/conditions/stress-insomnia" className={styles.conditionTag}>
              Stress & Insomnia
            </Link>
            <Link href="/ayurveda/conditions/joint-pain-arthritis" className={styles.conditionTag}>
              Joint Pain
            </Link>
            <Link href="/ayurveda/conditions/hair-fall-scalp-care" className={styles.conditionTag}>
              Hair & Scalp Health
            </Link>
            <span className={styles.conditionTag}>Chronic Fatigue</span>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>Experience total tranquility.</h2>
        <p className={styles.ctaDesc}>Step into our 5-star forest sanctuary for a medical-grade reset.</p>
        <Link href="/booking" className={styles.ctaButton}>
          Book Abhyanga
        </Link>
      </section>
    </main>
  );
}
