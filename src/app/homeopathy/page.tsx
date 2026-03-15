import Link from "next/link";
import styles from "./page.module.css";
import { BrainCircuit, Dna, Baby, ArrowLeft } from "lucide-react";

const conditions = [
  { category: "Allergies & Respiratory", list: "Allergies, sinusitis, recurrent cold/cough, asthma support." },
  { category: "Skin & Hair", list: "Eczema, psoriasis, acne, urticaria support, hair fall." },
  { category: "Women’s Health", list: "PCOS support, thyroid support, menstrual irregularities." },
  { category: "Digestive Health", list: "Gastric complaints, acidity, bloating, IBS support." },
  { category: "Stress & Emotional Wellbeing", list: "Anxiety support, insomnia, migraine." },
  { category: "Child Health", list: "Low immunity, recurrent infections, appetite concerns." }
];

const therapies = [
  { name: "Homeopathic Consultation", desc: "Comprehensive evaluation of symptoms and lifestyle." },
  { name: "Constitutional Homeopathy", desc: "Personalized remedy based on the individual’s constitution." },
  { name: "Chronic Care Support", desc: "Long-term care for recurring or chronic issues." },
  { name: "Women’s Homeopathic Care", desc: "Natural support for hormonal health." },
  { name: "Child & Family Homeopathy", desc: "Gentle support for common pediatric issues." }
];

const pathways = [
  { name: "Wellnest Allergy Relief Program", desc: "For recurring allergy and sinus concerns." },
  { name: "Wellnest Skin Confidence Program", desc: "Focused on chronic skin conditions." },
  { name: "Wellnest Hormone Balance Program", desc: "Support for PCOS, thyroid, and hormonal health." },
  { name: "Wellnest Child Wellness Program", desc: "Natural support for children’s immunity." },
  { name: "Wellnest Gut Comfort Program", desc: "Addresses digestive imbalance." },
  { name: "Wellnest Calm & Sleep Program", desc: "Helps manage stress and sleep disorders." }
];

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

      <section className={styles.sectionContainer}>
        <div className={styles.sectionHeader}>
          <BrainCircuit className={styles.sectionIcon} />
          <h2 className={styles.sectionTitle}>Conditions We Treat</h2>
          <p className={styles.sectionIntro}>
            We specialize in constitutional healing for chronic illness, pediatric care, and profound relief. Discover our specialized Homeopathic perspective.
          </p>
        </div>
        <div className={styles.conditionsGrid}>
          {conditions.map((item, index) => (
            <div key={index} className={styles.conditionCard}>
              <h3 className={styles.conditionName}>{item.category}</h3>
              <p className={styles.conditionList}>{item.list}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={`${styles.sectionContainer} ${styles.altBackground}`}>
        <div className={styles.sectionHeader}>
          <Dna className={styles.sectionIcon} />
          <h2 className={styles.sectionTitle}>Our Homeopathic Approach</h2>
          <p className={styles.sectionIntro}>
            Discover the science of micro-dose medicine and deep constitutional assessments carefully tailored to your holistic blueprint.
          </p>
        </div>
        <div className={styles.therapiesGrid}>
          {therapies.map((item, index) => (
            <div key={index} className={styles.therapyItem}>
              <h3 className={styles.therapyName}>{item.name}</h3>
              <p className={styles.therapyDesc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.sectionContainer}>
        <div className={styles.sectionHeader}>
          <Baby className={styles.sectionIcon} />
          <h2 className={styles.sectionTitle}>Wellnest Homeopathy Programs</h2>
          <p className={styles.sectionIntro}>
            Immerse yourself in our comprehensive integrative health packages designed for true constitutional transformation over time.
          </p>
        </div>
        <div className={styles.pathwaysGrid}>
          {pathways.map((item, index) => (
            <div key={index} className={styles.pathwayCard}>
              <div className={styles.pathwayContent}>
                <h3 className={styles.pathwayName}>{item.name}</h3>
                <p className={styles.pathwayDesc}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
