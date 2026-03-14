import Link from "next/link";
import styles from "../../../sharedDetail.module.css";
import { Activity, Clock, FlaskConical, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Immune-Modulation Therapy | Wellnest Homeopathy",
  description: "Enhancing the body's natural defense mechanisms using gentle Homeopathic immuno-supportive protocols.",
};

export default function ImmuneModulationPage() {
  return (
    <main className={`${styles.container} ${styles.homeopathyTheme}`}>
      <header className={styles.hero}>
        <div className={styles.iconWrapper}>
          <ShieldCheck size={32} />
        </div>
        <h1 className={styles.title}>Immune-Modulation Therapy</h1>
        <p className={styles.hook}>
          We don't "boost" the immune system—which can sometimes lead to over-activity—we *modulate* it. 
          Homeopathic protocols train your immune system to respond with intelligence and precision.
        </p>
      </header>

      <section className={styles.contentWrapper}>
        <div className={styles.metricsGrid}>
          <div className={styles.metric}>
            <Clock className={styles.sectionIcon} />
            <span className={styles.metricValue}>Preventive</span>
            <span className={styles.metricLabel}>Focus Area</span>
          </div>
          <div className={styles.metric}>
            <Activity className={styles.sectionIcon} />
            <span className={styles.metricValue}>Active Defense</span>
            <span className={styles.metricLabel}>Therapy Type</span>
          </div>
        </div>

        <div className={styles.section} style={{marginTop: "4rem"}}>
          <h2 className={styles.sectionTitle}>The Science of Modulation</h2>
          <ul className={styles.bulletList}>
            <li><strong>Reducing Hypersensitivity:</strong> For patients with severe allergies (Rhinitis, Eczema), we work to lower the "hair-trigger" response of the immune system.</li>
            <li><strong>Pathogen Resilience:</strong> By stimulating the non-specific immune response, we help children and adults recover faster from environmental pathogens and seasonal viruses.</li>
            <li><strong>Metabolic Support:</strong> Improving the body's internal "biological terrain" makes it a less hospitable environment for chronic infection.</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Primary Indications</h2>
          <div className={styles.conditionLinks}>
            <Link href="/homeopathy/conditions/pediatric-allergies-immunity" className={styles.conditionTag}>
              Frequent Childhood Infections
            </Link>
            <Link href="/homeopathy/conditions/behavioral-neuro-support" className={styles.conditionTag}>
              Neuro-Inflammatory Support
            </Link>
            <span className={styles.conditionTag}>Post-Viral Weakness</span>
            <span className={styles.conditionTag}>Seasonal Resilience</span>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>Build your natural fortress.</h2>
        <p className={styles.ctaDesc}>Step into a proactive health model with our preventive homeopathic protocols.</p>
        <Link href="/booking" className={styles.ctaButton}>
          Consult our Specialists
        </Link>
      </section>
    </main>
  );
}
