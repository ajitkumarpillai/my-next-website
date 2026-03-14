import Link from "next/link";
import styles from "../../../sharedDetail.module.css";
import { Moon, ScanSearch, Stethoscope, ChevronRight } from "lucide-react";

export const metadata = {
  title: "Stress & Insomnia | Wellnest Ayurveda",
  description: "Ayurvedic neurological protocols for anxiety, sleep disorders, and chronic stress management.",
};

export default function StressInsomniaPage() {
  return (
    <main className={`${styles.container} ${styles.ayurvedaTheme}`}>
      <header className={styles.hero}>
        <div className={styles.iconWrapper}>
          <Moon size={32} />
        </div>
        <h1 className={styles.title}>Stress, Anxiety & Insomnia</h1>
        <p className={styles.hook}>
          A hyper-active nervous system is the modern epidemic. We use profound neurological grounding protocols 
          to silence <span className={styles.symptomHighlight}>racing minds</span> and restore the natural <span className={styles.symptomHighlight}>sleep-wake cycle</span>.
        </p>
      </header>

      <section className={styles.contentWrapper}>
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <ScanSearch className={styles.sectionIcon} /> The Root Cause
          </h2>
          <ul className={styles.bulletList}>
            <li><strong>Vata Balancing:</strong> Anxiety is viewed as an excess of the air element. Our herb-infused oil therapies ground the system, reducing nervous exhaustion.</li>
            <li><strong>Deep Sleep Protocols:</strong> We address chronic insomnia by cooling the brain and stabilizing the pineal gland's natural rhythm.</li>
            <li><strong>Cortisol Regulation:</strong> Systematic relaxation techniques help lower systemic stress levels, improving focus and emotional resilience.</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <Stethoscope className={styles.sectionIcon} /> Suggested Protocols
          </h2>
          <div className={styles.treatmentLinks}>
            <Link href="/ayurveda/treatments/shirodhara-therapy" className={styles.treatmentCard}>
              <div className={styles.treatmentInfo}>
                <strong>Shirodhara (Neural Reset)</strong>
                <span>Ayurveda • Rhythmic oil flow to the forehead for deep peace</span>
              </div>
              <ChevronRight className={styles.arrowIcon} />
            </Link>
            
            <Link href="/ayurveda/treatments/abhyanga-rejuvenation" className={styles.treatmentCard}>
              <div className={styles.treatmentInfo}>
                <strong>Full-Body Abhyanga</strong>
                <span>Ayurveda • Medicated oil massage for systemic grounding</span>
              </div>
              <ChevronRight className={styles.arrowIcon} />
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>Find your inner peace.</h2>
        <p className={styles.ctaDesc}>Calm the mind and nourish the spirit with our neurological reset therapies.</p>
        <Link href="/booking" className={styles.ctaButton}>
          Consult our Specialists
        </Link>
      </section>
    </main>
  );
}
