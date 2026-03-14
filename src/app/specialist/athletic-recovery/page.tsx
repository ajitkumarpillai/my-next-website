import Link from "next/link";
import styles from "./page.module.css";
import { ArrowLeft, Target, ShieldPlus, Zap } from "lucide-react";

export const metadata = {
  title: "Clinical Athletic Recovery Abu Dhabi | Wellnest Care",
  description: "Elite Clinical Athletic Recovery within an Ayurvedic Framework focusing on Marma point release and athletic recovery in Abu Dhabi.",
};

export default function ThaiSportsMassage() {
  return (
    <main className={styles.container}>
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Clinical Athletic Recovery within an Ayurvedic Framework</h1>
          <p className={styles.subtitle}>
            A clinical approach to athletic recovery, integrating traditional Advanced assisted-stretching with the precision of Ayurvedic Marma point therapy.
          </p>
        </div>
      </header>

      <section className={styles.articleSection}>
        <div className={styles.articleContent}>
          <h2>The Intersection of Two Ancient Sciences</h2>
          <p>
            At Wellnest Care, our Clinical Athletic Recovery protocol transcends standard massage. 
            By mapping the energetic "Sen" lines of Thai medicine onto the physiological "Marma" points of Ayurveda, 
            our specialists achieve profound releases in fascial tension, joint mobility, and muscular recovery.
          </p>

          <div className={styles.benefitsGrid}>
            <div className={styles.benefitCard}>
              <Target className={styles.icon} />
              <h3>Precision Marma Release</h3>
              <p>Targeting specific anatomical junctions to release energy blocks and accelerate lymphatic drainage.</p>
            </div>
            <div className={styles.benefitCard}>
              <Zap className={styles.icon} />
              <h3>Assisted Kinetic Stretching</h3>
              <p>Deep passive stretching akin to "applied yoga," enhancing flexibility and athletic performance without active exertion.</p>
            </div>
            <div className={styles.benefitCard}>
              <ShieldPlus className={styles.icon} />
              <h3>Clinical Safety</h3>
              <p>Administered under the supervision of our Lead Ayurvedic Physician, Dr. Vikram Sharma, ensuring contraindicated conditions are safely navigated.</p>
            </div>
          </div>

          <h2>Who Benefits Most?</h2>
          <p>
            This protocol is explicitly designed for high-performance athletes, individuals recovering from soft-tissue injuries, and those suffering from chronic postural imbalances induced by sedentary lifestyles. 
            Unlike general spa treatments, this is a medically reviewed therapeutic intervention requiring a preliminary structural assessment.
          </p>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <h2>Accelerate Your Recovery</h2>
        <Link href="/booking" className={styles.ctaButton}>
          Book a Specialist Session
        </Link>
      </section>
    </main>
  );
}
