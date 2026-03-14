import GlossaryTooltip from "@/components/GlossaryTooltip";
import Link from "next/link";
import styles from "./page.module.css";
import { Droplets, Activity, Flower2, ArrowLeft } from "lucide-react";

export default function AyurvedaWing() {
  return (
    <main className={styles.container}>
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Ayurveda</h1>
          <p className={styles.subtitle}>
            Ancient wisdom meeting clinical precision. Detox, recover, and align your elemental doshas.
          </p>
        </div>
      </header>

      <section className={styles.servicesGrid}>
        <div className={styles.serviceCard}>
          <Flower2 className={styles.icon} />
          <h2 className={styles.serviceTitle}>Conditions We Treat</h2>
          <p className={styles.serviceDesc}>
            Explore our root-cause Ayurvedic approach to chronic conditions like Eczema and Arthritis.
          </p>
          <Link href="/ayurveda/conditions" className={styles.serviceLink} style={{ marginTop: '1rem', display: 'inline-block', fontWeight: 'bold' }}>
            View Ayurvedic Conditions →
          </Link>
        </div>

        <div className={styles.serviceCard}>
          <Droplets className={styles.icon} />
          <h2 className={styles.serviceTitle}>Our Therapies</h2>
          <p className={styles.serviceDesc}>
            Deep-dive into our traditional, intensive protocols including Panchakarma Detoxification and Shirodhara.
          </p>
          <Link href="/ayurveda/treatments" className={styles.serviceLink} style={{ marginTop: '1rem', display: 'inline-block', fontWeight: 'bold' }}>
            Explore Ayurvedic Therapies →
          </Link>
        </div>

        <div className={styles.serviceCard}>
          <Activity className={styles.icon} />
          <h2 className={styles.serviceTitle}>Wellness Programs</h2>
          <p className={styles.serviceDesc}>
            Immersive 3-Day and 7-Day holistic programs, combining treatments, diet, and yoga.
          </p>
          <Link href="/packages" className={styles.serviceLink} style={{ marginTop: '1rem', display: 'inline-block', fontWeight: 'bold' }}>
            View Wellness Programs →
          </Link>
        </div>
      </section>
    </main>
  );
}
