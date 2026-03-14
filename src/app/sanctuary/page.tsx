import Link from "next/link";
import styles from "./page.module.css";
import { Lock, UserCheck, Shield } from "lucide-react";

export default function SanctuaryPage() {
  return (
    <main className={styles.container}>
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>The Wellnest Sanctuary</h1>
          <p className={styles.subtitle}>
            Uncompromising privacy. Gender-specific, premium suites and dedicated practitioners preserving the solemnity of your healing.
          </p>
        </div>
      </header>

      <section className={styles.wingsContainer}>
        <div className={styles.wingBlock}>
          <div className={styles.wingHeader}>
            <Shield className={styles.iconMale} />
            <h2>The Onyx Wing (Male Sanctuary)</h2>
            <p>3 ultra-premium, completely private suites.</p>
          </div>
          <ul className={styles.featureList}>
            <li><Lock size={16} /> Exclusive male-only practitioner protocols</li>
            <li><UserCheck size={16} /> Disenfranchised entry & waiting area</li>
            <li><UserCheck size={16} /> Specialized Athletic Recovery Therapy & Recovery equipment</li>
          </ul>
        </div>

        <div className={styles.wingBlock}>
          <div className={styles.wingHeader}>
            <Shield className={styles.iconFemale} />
             <h2>The Emerald Wing (Female Sanctuary)</h2>
            <p>4 opulent, serenely designed private suites.</p>
          </div>
          <ul className={styles.featureList}>
            <li><Lock size={16} /> Dedicated female physicians & therapists</li>
            <li><UserCheck size={16} /> Sound-proofed consultation parameters</li>
            <li><UserCheck size={16} /> Focus on women&apos;s wellness, dermatology, and hormonal health</li>
          </ul>
        </div>
      </section>

      <div className={styles.ctaWrapper}>
        <Link href="/booking" className={styles.ctaButton}>
          Request a Private Consultation
        </Link>
      </div>
    </main>
  );
}
