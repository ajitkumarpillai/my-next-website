import Link from "next/link";
import styles from "../../../sharedDetail.module.css";
import { Zap, Clock, Activity, FlaskConical } from "lucide-react";

export const metadata = {
  title: "Acute Homeopathic Care | Wellnest Homeopathy",
  description: "Rapid-response homeopathic intervention for fevers, respiratory flare-ups, and minor injuries using high-potency protocols.",
};

export default function AcuteCarePage() {
  return (
    <main className={`${styles.container} ${styles.homeopathyTheme}`}>
      <header className={styles.hero}>
        <div className={styles.iconWrapper}>
          <Zap size={32} />
        </div>
        <h1 className={styles.title}>Acute Care Protocol</h1>
        <p className={styles.hook}>
          Acute Homeopathy is designed for speed. By identifying the "totality" of your sudden symptoms, 
          we unlock a rapid healing response for infections, inflammations, and injuries.
        </p>
      </header>

      <section className={styles.contentWrapper}>
        <div className={styles.metricsGrid}>
          <div className={styles.metric}>
            <Clock className={styles.sectionIcon} />
            <span className={styles.metricValue}>15 - 30 Mins</span>
            <span className={styles.metricLabel}>Session Time</span>
          </div>
          <div className={styles.metric}>
            <Zap className={styles.sectionIcon} />
            <span className={styles.metricValue}>High Potency</span>
            <span className={styles.metricLabel}>Remedy Level</span>
          </div>
        </div>

        <div className={styles.section} style={{marginTop: "4rem"}}>
          <h2 className={styles.sectionTitle}>The Clinical Advantage</h2>
          <ul className={styles.bulletList}>
            <li><strong>Non-Suppressive:</strong> Unlike conventional "cold & flu" drugs that simply hide symptoms, our acute remedies stimulate the immune system to finish the work of defense.</li>
            <li><strong>Rapid Response:</strong> When the remedy matches the symptom picture (e.g., sudden fever or sharp injury pain), the physiological effect is often felt within minutes.</li>
            <li><strong>Targeted First-Aid:</strong> Perfect for child fevers, sports injuries, sudden digestive upsets, and seasonal allergy flare-ups.</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Primary Indications</h2>
          <div className={styles.conditionLinks}>
            <Link href="/homeopathy/conditions/rhinitis-sinusitis" className={styles.conditionTag}>
              Sinus Flare-ups
            </Link>
            <Link href="/homeopathy/conditions/pediatric-allergies-immunity" className={styles.conditionTag}>
              Childhood Fevers
            </Link>
            <span className={styles.conditionTag}>Sports Injuries</span>
            <span className={styles.conditionTag}>Acute Gastric Upset</span>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>Rapid relief, naturally.</h2>
        <p className={styles.ctaDesc}>Step into our clinic for immediate homeopathic support during your next flare-up.</p>
        <Link href="/booking" className={styles.ctaButton}>
          Book Acute Consult
        </Link>
      </section>
    </main>
  );
}
