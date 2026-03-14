import Link from "next/link";
import styles from "../../../sharedDetail.module.css";
import { Activity, ScanSearch, Stethoscope, ChevronRight } from "lucide-react";

export const metadata = {
  title: "IBS & Digestive Disorders | Wellnest Ayurveda",
  description: "Ayurvedic clinical management for IBS, bloating, chronic acidity, and gut health restoration.",
};

export default function DigestiveDisordersPage() {
  return (
    <main className={`${styles.container} ${styles.ayurvedaTheme}`}>
      <header className={styles.hero}>
        <div className={styles.iconWrapper}>
          <Activity size={32} />
        </div>
        <h1 className={styles.title}>Digestive Disorders & IBS</h1>
        <p className={styles.hook}>
          Gut health is the cornerstone of all vitality. We treat chronic <span className={styles.symptomHighlight}>bloating</span>, <span className={styles.symptomHighlight}>acidity</span>, and 
          irregular motility by restoring your 'Agni'—the digestive fire.
        </p>
      </header>

      <section className={styles.contentWrapper}>
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <ScanSearch className={styles.sectionIcon} /> The Root Cause
          </h2>
          <ul className={styles.bulletList}>
            <li><strong>Restoring the Fire:</strong> We identify if your digestion is too sharp (acidity) or too slow (heavy bloating) and use diet-corrective protocols to stabilize it.</li>
            <li><strong>Microbiome Balance:</strong> Our internal therapies target the root of chronic indigestion and malabsorption.</li>
            <li><strong>Stress-Gut Link:</strong> For IBS sufferers, we address the enteric nervous system to calm intestinal spasms and urgency.</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <Stethoscope className={styles.sectionIcon} /> Suggested Protocols
          </h2>
          <div className={styles.treatmentLinks}>
            <Link href="/ayurveda/treatments/panchakarma-detox" className={styles.treatmentCard}>
              <div className={styles.treatmentInfo}>
                <strong>Classical Panchakarma</strong>
                <span>Ayurveda • Systematic internal cleansing and gut reset</span>
              </div>
              <ChevronRight className={styles.arrowIcon} />
            </Link>
            
            <Link href="/ayurveda/treatments/abhyanga-rejuvenation" className={styles.treatmentCard}>
              <div className={styles.treatmentInfo}>
                <strong>Udara Abhyanga (Abdominal Massage)</strong>
                <span>Ayurveda • Targeted oil therapy for bowel regulation</span>
              </div>
              <ChevronRight className={styles.arrowIcon} />
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>Rebuild your gut health.</h2>
        <p className={styles.ctaDesc}>Master your digestion with our personalized Ayurvedic gut-restoration programs.</p>
        <Link href="/booking" className={styles.ctaButton}>
          Consult our Specialists
        </Link>
      </section>
    </main>
  );
}
