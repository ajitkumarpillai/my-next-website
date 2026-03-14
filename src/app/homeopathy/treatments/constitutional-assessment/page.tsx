import Link from "next/link";
import styles from "../../../sharedDetail.module.css";
import { ArrowLeft, Dna, FlaskConical, Clock } from "lucide-react";

export const metadata = {
  title: "Constitutional Assessment | Wellnest Homeopathy",
  description: "Deep, individualized homeopathic prescribing in Abu Dhabi.",
};

export default function HomeopathyPage() {
  return (
    <main className={`${styles.container} ${styles.homeopathyTheme}`}>
      <header className={styles.hero}>
        <div className={styles.iconWrapper}>
          <Dna size={32} />
        </div>
        <h1 className={styles.title}>Constitutional Assessment</h1>
        <p className={styles.hook}>
          We do not treat the disease; we treat the person carrying the disease. A constitutional assessment is an exhaustive, 90-minute investigation into your entire physiological, mental, and emotional blueprint to find your singular remedy match.
        </p>
      </header>

      <section className={styles.contentWrapper}>
        <div className={styles.metricsGrid}>
          <div className={styles.metric}>
            <Clock className={styles.sectionIcon} />
            <span className={styles.metricValue}>90 Minutes</span>
            <span className={styles.metricLabel}>Initial Consult</span>
          </div>
          <div className={styles.metric}>
            <FlaskConical className={styles.sectionIcon} />
            <span className={styles.metricValue}>Micro-Dose</span>
            <span className={styles.metricLabel}>Delivery System</span>
          </div>
        </div>

        <div className={styles.section} style={{marginTop: "4rem"}}>
          <h2 className={styles.sectionTitle}>The Science of the Procedure</h2>
          <ul className={styles.bulletList}>
            <li><strong>Law of Similars:</strong> Homeopathy operates on "Like Cures Like". A substance that causes symptoms in a healthy person can, in micro-doses, cure those same symptoms in a sick person by triggering the body's immune response.</li>
            <li><strong>The Repertorization:</strong> Dr. Aisha or Dr. Tariq will cross-reference hundreds of your specific physical symptoms (e.g., "headache worse on the right side at 4 PM") with emotional traits to find a mathematically precise "Simillimum" (perfect remedy match).</li>
            <li><strong>Potentization:</strong> The remedies are ultra-diluted, meaning there is zero chemical toxicity remaining—only the energetic footprint of the substance to stimulate your self-healing mechanism.</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Primary Indications (What it Treats)</h2>
          <p style={{marginBottom: "1.5rem", color: "var(--color-muted)", lineHeight: "1.6"}}>
            Constitutional prescribing is incredibly effective for chronic, recurring conditions where traditional medicine has failed.
          </p>
          <div className={styles.conditionLinks}>
            <Link href="/homeopathy/conditions/migraines-headaches" className={styles.conditionTag}>
              Chronic Migraines
            </Link>
            <Link href="/homeopathy/conditions/pediatric-allergies" className={styles.conditionTag}>
              Pediatric Allergies & Asthma
            </Link>
            <span className={styles.conditionTag}>PCOS & Hormonal Imbalance</span>
            <span className={styles.conditionTag}>Autoimmune Skin Disorders</span>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>Find your exact remedy match.</h2>
        <p className={styles.ctaDesc}>Book your 90-minute constitutional intake today.</p>
        <Link href="/booking" className={styles.ctaButton}>
          Consult Dr. Aisha
        </Link>
      </section>
    </main>
  );
}
