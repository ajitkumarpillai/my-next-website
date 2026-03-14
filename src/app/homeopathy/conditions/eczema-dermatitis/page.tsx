import Link from "next/link";
import styles from "../../../sharedDetail.module.css";
import { Droplets, ScanSearch, Stethoscope, ChevronRight } from "lucide-react";

export const metadata = {
  title: "Homeopathic Eczema & Dermatitis | Wellnest Homeopathy",
  description: "Internal homeopathic therapy for chronic eczema and atopic dermatitis without the use of topical steroids.",
};

export default function EczemaPage() {
  return (
    <main className={`${styles.container} ${styles.homeopathyTheme}`}>
      <header className={styles.hero}>
        <div className={styles.iconWrapper}>
          <Droplets size={32} />
        </div>
        <h1 className={styles.title}>Eczema & Atopic Dermatitis</h1>
        <p className={styles.hook}>
          Skin issues are rarely just "on the surface." Homeopathy views <span className={styles.symptomHighlight}>eczema</span> as an internal 
          metabolic or nervous system expression. We treat the patient, not just the patch.
        </p>
      </header>

      <section className={styles.contentWrapper}>
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <ScanSearch className={styles.sectionIcon} /> Root Cause Resolution
          </h2>
          <ul className={styles.bulletList}>
            <li><strong>Steroid-Free Path:</strong> Topical steroids often suppress skin eruptions deeper into the system. We encourage the body's natural healing response.</li>
            <li><strong>Psychosomatic Link:</strong> Many eczema flare-ups are triggered by stress. We identify these triggers to stabilize the skin's reactivity.</li>
            <li><strong>Gut-Skin Axis:</strong> We address underlying metabolic heat and toxicity that contribute to chronic itching.</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <Stethoscope className={styles.sectionIcon} /> Suggested Protocols
          </h2>
          <div className={styles.treatmentLinks}>
            <Link href="/homeopathy/treatments/constitutional-assessment" className={styles.treatmentCard}>
              <div className={styles.treatmentInfo}>
                <strong>Full Constitutional Assessment</strong>
                <span>Homeopathy • Identifying the unique trigger profile</span>
              </div>
              <ChevronRight className={styles.arrowIcon} />
            </Link>
            
            <Link href="/homeopathy/treatments/miasmatic-deep-cleanse" className={styles.treatmentCard}>
              <div className={styles.treatmentInfo}>
                <strong>Miasmatic Cleansing</strong>
                <span>Homeopathy • Breaking the cycle of chronic skin recurrence</span>
              </div>
              <ChevronRight className={styles.arrowIcon} />
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>Heal your skin from within.</h2>
        <p className={styles.ctaDesc}>Step away from suppression and towards true skin health.</p>
        <Link href="/booking" className={styles.ctaButton}>
          Consult our Specialists
        </Link>
      </section>
    </main>
  );
}
