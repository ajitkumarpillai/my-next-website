import GlossaryTooltip from "@/components/GlossaryTooltip";
import Link from "next/link";
import styles from "./page.module.css";
import { Droplets, Activity, Flower2, ArrowLeft } from "lucide-react";

const conditions = [
  { category: "Pain & Musculoskeletal Care", list: "Back pain, neck pain, arthritis, sciatica, frozen shoulder, muscle stiffness." },
  { category: "Digestive & Metabolic Health", list: "Acidity, IBS, constipation, bloating, fatty liver support, obesity, diabetes support." },
  { category: "Skin & Hair Concerns", list: "Eczema, psoriasis, acne, allergic skin conditions, hair fall, alopecia." },
  { category: "Women’s Health", list: "PCOS/PCOD support, menstrual irregularities, hormonal imbalance, menopausal support." },
  { category: "Stress, Sleep & Lifestyle Disorders", list: "Stress, anxiety support, migraine, fatigue, burnout." },
  { category: "Immunity & Pediatric Support", list: "Low immunity, recurrent cold/cough, pediatric digestive issues." },
  { category: "Urinary & Kidney Health", list: "UTI support, kidney stone support." }
];

const therapies = [
  { name: "Ayurvedic Consultation", desc: "Detailed health assessment to determine body constitution and suitable therapies." },
  { name: "Panchakarma", desc: "Detox and cleansing therapy for long-term health balance." },
  { name: "Abhyanga", desc: "Warm herbal oil massage to improve circulation and relaxation." },
  { name: "Shirodhara", desc: "Gentle oil flow therapy to calm the mind and improve sleep." },
  { name: "Swedana", desc: "Herbal steam therapy for detox and muscle relaxation." },
  { name: "Kizhi / Podikizhi", desc: "Herbal poultice therapy for pain and inflammation." },
  { name: "Nasya", desc: "Therapy focusing on sinus, headache, and respiratory balance." },
  { name: "Basti", desc: "Classical Ayurvedic therapy for deeper body balancing." }
];

const pathways = [
  { name: "Wellnest Pain Relief Program", desc: "Designed for chronic pain and musculoskeletal discomfort." },
  { name: "Wellnest Gut & Digestive Reset", desc: "Focused on digestive balance and metabolic health." },
  { name: "Wellnest Stress & Sleep Restore", desc: "Helps reduce stress and improve sleep quality." },
  { name: "Wellnest Women’s Balance Program", desc: "Supports hormonal balance and women’s wellness." },
  { name: "Wellnest Hair & Scalp Revival", desc: "Targets hair fall and scalp health." },
  { name: "Wellnest Skin Balance Program", desc: "For eczema, acne, and chronic skin issues." },
  { name: "Wellnest Immunity Support Program", desc: "Helps strengthen natural immunity." },
  { name: "Wellnest Seasonal Detox Program", desc: "A guided detox and rejuvenation experience." }
];

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

      <section className={styles.sectionContainer}>
        <div className={styles.sectionHeader}>
          <Flower2 className={styles.sectionIcon} />
          <h2 className={styles.sectionTitle}>Conditions We Treat</h2>
          <p className={styles.sectionIntro}>
            We specialize in chronic disease management and structural recovery. Discover our specialized Ayurvedic perspective on your condition.
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
          <Droplets className={styles.sectionIcon} />
          <h2 className={styles.sectionTitle}>Ayurvedic Therapies</h2>
          <p className={styles.sectionIntro}>
            We do not mask symptoms; we resolve them. Explore our master-level therapies designed to initiate profound physiological healing.
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
          <Activity className={styles.sectionIcon} />
          <h2 className={styles.sectionTitle}>Curated Healing Pathways</h2>
          <p className={styles.sectionIntro}>
            Transcend the standard appointment hour. Immerse yourself in our comprehensive, multi-day integrative health packages designed for true physiological transformation.
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
