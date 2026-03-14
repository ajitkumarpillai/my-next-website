import Link from "next/link";
import styles from "../../../sharedDetail.module.css";
import { Flower2, ScanSearch, Stethoscope, ChevronRight } from "lucide-react";

export const metadata = {
  title: "PCOS & Hormonal Health | Wellnest Ayurveda",
  description: "Ayurvedic management of PCOS, hormonal imbalances, and menstrual health in Abu Dhabi.",
};

export default function PCOSPage() {
  return (
    <main className={`${styles.container} ${styles.ayurvedaTheme}`}>
      <header className={styles.hero}>
        <div className={styles.iconWrapper}>
          <Flower2 size={32} />
        </div>
        <h1 className={styles.title}>PCOS & Hormonal Imbalance</h1>
        <p className={styles.hook}>
          Poly-Cystic Ovary Syndrome is more than just a reproductive issue; it is a systemic metabolic 
          imbalance. We use Vasant-Ritu protocols to clear <span className={styles.symptomHighlight}>Kapha-medas</span> blockages.
        </p>
      </header>

      <section className={styles.contentWrapper}>
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <ScanSearch className={styles.sectionIcon} /> The Ayurvedic Perspective
          </h2>
          <ul className={styles.bulletList}>
            <li><strong>The Metabolic Root:</strong> We address insulin resistance and weight gain by stimulating the 'Medas-Agni' (fat metabolism) through specific dry-powder therapies.</li>
            <li><strong>Cycle Restoration:</strong> Our protocols aim to regulate irregular cycles and reduce the formation of cystic ovaries by balancing the Apana Vayu (downward energy).</li>
            <li><strong>Androgen Balance:</strong> Through systematic detoxification, we help lower excessive androgen levels, addressing hirsutism and hormonal acne.</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <Stethoscope className={styles.sectionIcon} /> Suggested Protocols
          </h2>
          <div className={styles.treatmentLinks}>
            <Link href="/ayurveda/treatments/udvartana-weight-management" className={styles.treatmentCard}>
              <div className={styles.treatmentInfo}>
                <strong>Udvartana (Metabolic Massage)</strong>
                <span>Ayurveda • Dry herbal powder to stimulate fat metabolism</span>
              </div>
              <ChevronRight className={styles.arrowIcon} />
            </Link>
            
            <Link href="/ayurveda/treatments/panchakarma-detox" className={styles.treatmentCard}>
              <div className={styles.treatmentInfo}>
                <strong>Virechana (Clinical Purgation)</strong>
                <span>Ayurveda • Targeted hormonal toxin clearance</span>
              </div>
              <ChevronRight className={styles.arrowIcon} />
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>Start your hormonal reset.</h2>
        <p className={styles.ctaDesc}>Consult our Ayurvedic specialists for a personalized hormonal roadmap.</p>
        <Link href="/booking" className={styles.ctaButton}>
          Consult our Specialists
        </Link>
      </section>
    </main>
  );
}
