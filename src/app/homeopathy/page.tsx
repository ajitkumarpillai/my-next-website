import Link from "next/link";
import styles from "./page.module.css";
import { BrainCircuit, Dna, Baby, ArrowLeft } from "lucide-react";

export default function HomeopathyWing() {
  return (
    <main className={styles.container}>
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Homeopathy</h1>
          <p className={styles.subtitle}>
            Deep-rooted constitutional healing for chronic illness and pediatric care.
          </p>
        </div>
      </header>

      <section className={styles.servicesGrid}>
        <div className={styles.serviceCard}>
          <BrainCircuit className={styles.icon} />
          <h2 className={styles.serviceTitle}>Conditions We Treat</h2>
          <p className={styles.serviceDesc}>
            Explore our constitutional approach to chronic illness, pediatric allergies, and debilitating migraines.
          </p>
          <Link href="/homeopathy/conditions" className={styles.serviceLink} style={{ marginTop: '1rem', display: 'inline-block', fontWeight: 'bold' }}>
            View Homeopathic Conditions →
          </Link>
        </div>

        <div className={styles.serviceCard}>
          <Dna className={styles.icon} />
          <h2 className={styles.serviceTitle}>Our Therapies</h2>
          <p className={styles.serviceDesc}>
            Discover the science of micro-dose medicine and deep constitutional assessments carefully tailored to your holistic blueprint.
          </p>
          <Link href="/homeopathy/treatments" className={styles.serviceLink} style={{ marginTop: '1rem', display: 'inline-block', fontWeight: 'bold' }}>
            Explore Homeopathic Therapies →
          </Link>
        </div>
      </section>
    </main>
  );
}
