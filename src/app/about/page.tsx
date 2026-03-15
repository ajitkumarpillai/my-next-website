import Link from "next/link";
import styles from "./page.module.css";
import { Heart, Shield, Award, MapPin, Sparkles, UserCheck } from "lucide-react";

export default function AboutPage() {
  return (
    <main className={styles.container}>
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Where Ancient Wisdom Meets Clinical Excellence</h1>
          <p className={styles.subtitle}>
            Abu Dhabi’s premier sanctuary for authentic Ayurveda, Homeopathy, and Integrative Care.
          </p>
        </div>
      </header>

      <section className={styles.section}>
        <div className={styles.contentWrapper}>
          <div className={styles.sectionHeader}>
            <Sparkles className={styles.sectionIcon} />
            <h2 className={styles.sectionTitle}>Our Philosophy: Healing at the Source</h2>
          </div>
          <p className={styles.text}>
            Wellnest Care was founded on a simple yet profound belief: that true health is more than the absence of symptoms—it is a state of dynamic balance. Located in the heart of Abu Dhabi, our center serves as a bridge between the precision of modern clinical standards and the timeless healing legacy of the East. We specialize in root-cause recovery, addressing chronic conditions by restoring the body’s innate physiological intelligence.
          </p>
        </div>
      </section>

      <section className={`${styles.section} ${styles.altBackground}`}>
        <div className={styles.contentWrapper}>
          <div className={styles.sectionHeader}>
            <MapPin className={styles.sectionIcon} />
            <h2 className={styles.sectionTitle}>A Sanctuary for Transformation</h2>
          </div>
          <p className={styles.text}>
            Healing begins the moment you step through our doors. We have moved away from the standard "clinic" feel to create a space of deep serenity. With dedicated, private wings for Men (Onyx) and Women (Emerald), our sanctuary is designed to provide the ultimate environment for detoxification, physical recovery, and mental clarity.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.contentWrapper}>
          <div className={styles.sectionHeader}>
            <Award className={styles.sectionIcon} />
            <h2 className={styles.sectionTitle}>Expertise with a Global Legacy</h2>
          </div>
          <p className={styles.text}>
            Our clinical strength is our people. The Wellnest board consists of licensed, award-winning doctors and master-level therapists with decades of combined experience across India and the UAE.
          </p>
          <div className={styles.expertiseGrid}>
            <div className={styles.expertiseCard}>
              <h3 className={styles.expertiseTitle}>Ayurveda</h3>
              <p className={styles.expertiseText}>
                Practiced with traditional precision by specialists trained in India's leading holistic institutions.
              </p>
            </div>
            <div className={styles.expertiseCard}>
              <h3 className={styles.expertiseTitle}>Homeopathy</h3>
              <p className={styles.expertiseText}>
                Delivered through deep constitutional assessments to trigger long-term immune and hormonal balance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.altBackground}`}>
        <div className={styles.contentWrapper}>
          <div className={styles.sectionHeader}>
            <UserCheck className={styles.sectionIcon} />
            <h2 className={styles.sectionTitle}>Why Choose Wellnest?</h2>
          </div>
          <div className={styles.featuresGrid}>
            <div className={styles.feature}>
              <h4 className={styles.featureTitle}>Proven Experience</h4>
              <p className={styles.featureText}>A team with extensive backgrounds in both high-volume clinical settings and traditional healing retreats.</p>
            </div>
            <div className={styles.feature}>
              <h4 className={styles.featureTitle}>The Dual Approach</h4>
              <p className={styles.featureText}>A rare, integrated perspective where Ayurveda and Homeopathy work in harmony to support your recovery.</p>
            </div>
            <div className={styles.feature}>
              <h4 className={styles.featureTitle}>Absolute Privacy</h4>
              <p className={styles.featureText}>Thoughtfully designed private treatment suites and gender-specific wings.</p>
            </div>
            <div className={styles.feature}>
              <h4 className={styles.featureTitle}>Sustainable Health</h4>
              <p className={styles.featureText}>We empower you with the lifestyle tools and knowledge to stay healthy long after you leave our center.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.contentWrapper}>
          <h2 className={styles.ctaTitle}>Start Your Journey to Wellnest</h2>
          <Link href="/booking" className={styles.ctaButton}>
            Book Your Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
