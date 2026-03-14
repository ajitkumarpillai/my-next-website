import Link from "next/link";
import styles from "../../../sharedDetail.module.css";
import { ShieldCheck, Clock, FlaskConical, Activity } from "lucide-react";

export const metadata = {
  title: "Miasmatic Deep-Cleanse | Wellnest Homeopathy",
  description: "Targeting the hereditary and chronic roots of disease through high-precision miasmatic homeopathic analysis.",
};

export default function MiasmaticPage() {
  return (
    <main className={`${styles.container} ${styles.homeopathyTheme}`}>
      <header className={styles.hero}>
        <div className={styles.iconWrapper}>
          <ShieldCheck size={32} />
        </div>
        <h1 className={styles.title}>Miasmatic Deep-Cleanse</h1>
        <p className={styles.hook}>
          "Miasm" refers to the deep-seated hereditary soil or chronic blockages that allow disease to keep returning. 
          We use Miasmatic prescribing to break the cycle of chronic illness for good.
        </p>
      </header>

      <section className={styles.contentWrapper}>
        <div className={styles.metricsGrid}>
          <div className={styles.metric}>
            <Clock className={styles.sectionIcon} />
            <span className={styles.metricValue}>Chronic Focus</span>
            <span className={styles.metricLabel}>Therapy Goal</span>
          </div>
          <div className={styles.metric}>
            <FlaskConical className={styles.sectionIcon} />
            <span className={styles.metricValue}>Deep Acting</span>
            <span className={styles.metricLabel}>Remedy Type</span>
          </div>
        </div>

        <div className={styles.section} style={{marginTop: "4rem"}}>
          <h2 className={styles.sectionTitle}>The Clinical Impact</h2>
          <ul className={styles.bulletList}>
            <li><strong>Breaking Patterns:</strong> If you suffer from "seasonal" eczema or "recurrent" migraines, a constitutional remedy may help, but a miasmatic anti-dote is often needed to stop the recurrence entirely.</li>
            <li><strong>Systemic Detox:</strong> Miasmatic remedies clear the "biological noise" that prevents more standard medical treatments from working effectively.</li>
            <li><strong>Preventive Legacy:</strong> By clearing active miasms, we aim to prevent the progression of deep-seated genetic tendencies into overt disease.</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Primary Indications</h2>
          <div className={styles.conditionLinks}>
            <Link href="/homeopathy/conditions/eczema-dermatitis" className={styles.conditionTag}>
              Recurrent Eczema
            </Link>
            <Link href="/homeopathy/conditions/rhinitis-sinusitis" className={styles.conditionTag}>
              Chronic Sinusitis
            </Link>
            <span className={styles.conditionTag}>Autoimmune Suppression</span>
            <span className={styles.conditionTag}>Chronic Fatigue</span>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>End the cycle of recurrence.</h2>
        <p className={styles.ctaDesc}>Explore the deepest levels of homeopathic healing with our lead specialists.</p>
        <Link href="/booking" className={styles.ctaButton}>
          Consult our Specialists
        </Link>
      </section>
    </main>
  );
}
