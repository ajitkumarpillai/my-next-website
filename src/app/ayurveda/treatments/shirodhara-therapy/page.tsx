import Link from "next/link";
import styles from "../../../sharedDetail.module.css";
import { ArrowLeft, FlaskConical, Clock } from "lucide-react";

export const metadata = {
  title: "Shirodhara Therapy | Wellnest Ayurveda",
  description: "Ayurvedic neurological reset and stress relief in Abu Dhabi.",
};

export default function ShirodharaPage() {
  return (
    <main className={`${styles.container} ${styles.ayurvedaTheme}`}>
      <header className={styles.hero}>
        <div className={styles.iconWrapper}>
          <svg xmlns="http://www.w3.org/Form/2003/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
        </div>
        <h1 className={styles.title}>Shirodhara Therapy</h1>
        <p className={styles.hook}>
          "Shiro" (Head) "Dhara" (Flow). A continuous, rhythmic pouring of warm, medicated herbal oil over the forehead (the 'Third Eye' or Ajna Chakra). This is Ayurveda's ultimate neurological reset.
        </p>
      </header>

      <section className={styles.contentWrapper}>
        <div className={styles.metricsGrid}>
          <div className={styles.metric}>
            <Clock className={styles.sectionIcon} />
            <span className={styles.metricValue}>60 Minutes</span>
            <span className={styles.metricLabel}>Duration</span>
          </div>
          <div className={styles.metric}>
            <FlaskConical className={styles.sectionIcon} />
            <span className={styles.metricValue}>Outpatient</span>
            <span className={styles.metricLabel}>Requirement</span>
          </div>
        </div>

        <div className={styles.section} style={{marginTop: "4rem"}}>
          <h2 className={styles.sectionTitle}>The Science of the Procedure</h2>
          <ul className={styles.bulletList}>
            <li><strong>Nervous System Pacification:</strong> The consistent pressure and warmth of the oil on the forehead penetrate the central nervous system, lowering cortisol levels and shifting the body from 'flight-or-fight' (sympathetic) into deep 'rest-and-digest' (parasympathetic) states.</li>
            <li><strong>Vata Subjugation:</strong> In Ayurveda, anxiety and neurological pain are caused by excess Vata (Air/Space) in the mind. The heavy, warm, grounding properties of the oil counteract and ground this erratic energy.</li>
            <li><strong>Endocrine Balance:</strong> The procedure physically stimulates the pituitary and pineal glands, inducing the release of serotonin and melatonin for profound mood stabilization and sleep correction.</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Primary Indications (What it Treats)</h2>
          <p style={{marginBottom: "1.5rem", color: "var(--color-muted)", lineHeight: "1.6"}}>
            Shirodhara is highly recommended for stress-induced or neurological conditions.
          </p>
          <div className={styles.conditionLinks}>
            <span className={styles.conditionTag}>Clinical Insomnia</span>
            <span className={styles.conditionTag}>Severe Anxiety & PTSD</span>
            <span className={styles.conditionTag}>Essential Tremors</span>
            <span className={styles.conditionTag}>Tension Headaches</span>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>Experience profound mental stillness.</h2>
        <p className={styles.ctaDesc}>Book your Shirodhara session in our tranquil Earthy Green suites.</p>
        <Link href="/booking" className={styles.ctaButton}>
          Reserve a Session
        </Link>
      </section>
    </main>
  );
}
