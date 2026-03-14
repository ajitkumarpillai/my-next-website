import Link from "next/link";
import styles from "../../../sharedDetail.module.css";
import { Sparkles, ScanSearch, Stethoscope, ChevronRight } from "lucide-react";

export const metadata = {
  title: "Hair Fall & Scalp Care | Wellnest Ayurveda",
  description: "Ayurvedic scalp treatments for hair fall, thinning, and premature graying in Abu Dhabi.",
};

export default function HairFallPage() {
  return (
    <main className={`${styles.container} ${styles.ayurvedaTheme}`}>
      <header className={styles.hero}>
        <div className={styles.iconWrapper}>
          <Sparkles size={32} />
        </div>
        <h1 className={styles.title}>Hair Fall & Scalp Care</h1>
        <p className={styles.hook}>
          Healthy hair begins at the follicle. We address chronic <span className={styles.symptomHighlight}>thinning</span>, 
          environmental <span className={styles.symptomHighlight}>hair loss</span>, and scalp health by nourishing the bone tissue (Asthi Dhatu).
        </p>
      </header>

      <section className={styles.contentWrapper}>
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <ScanSearch className={styles.sectionIcon} /> The Root Cause
          </h2>
          <ul className={styles.bulletList}>
            <li><strong>Follicle Nourishment:</strong> We use herbal oils to reach the 'bulb' of the hair, reversing premature graying and metabolic thinning.</li>
            <li><strong>Scalp Detox:</strong> Specific therapies clear chronic dandruff and fungal buildup that block healthy growth.</li>
            <li><strong>The Poshaka Link:</strong> We provide dietary and lifestyle protocols to ensure essential nutrients reach the scalp tissue.</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <Stethoscope className={styles.sectionIcon} /> Suggested Protocols
          </h2>
          <div className={styles.treatmentLinks}>
            <Link href="/ayurveda/treatments/shirodhara-therapy" className={styles.treatmentCard}>
              <div className={styles.treatmentInfo}>
                <strong>Siro-Abhyanga & Shirodhara</strong>
                <span>Ayurveda • Intense scalp nourishment and nervous cooling</span>
              </div>
              <ChevronRight className={styles.arrowIcon} />
            </Link>
            
            <Link href="/ayurveda/treatments/abhyanga-rejuvenation" className={styles.treatmentCard}>
              <div className={styles.treatmentInfo}>
                <strong>Rasayana Rejuvenation</strong>
                <span>Ayurveda • Systemic nutrient building for hair quality</span>
              </div>
              <ChevronRight className={styles.arrowIcon} />
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>Revitalize your hair.</h2>
        <p className={styles.ctaDesc}>Nourish your roots with our clinical scalp-care protocols.</p>
        <Link href="/booking" className={styles.ctaButton}>
          Consult our Specialists
        </Link>
      </section>
    </main>
  );
}
