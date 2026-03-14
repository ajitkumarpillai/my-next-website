import Link from "next/link";
import styles from "../../sharedIndex.module.css";
import { ArrowLeft, ActivitySquare, Flower2, Moon, Activity, Sparkles, Pipette } from "lucide-react";

export const metadata = {
  title: "Clinical Conditions | Wellnest Ayurveda",
  description: "Explore our specialized Ayurvedic clinical hub for restorative healing.",
};

const conditions = [
  {
    icon: <ActivitySquare size={24} />,
    title: "Joint Pain & Arthritis",
    snippet: "Intensive structural lubrication and <span className={styles.symptomHighlight}>inflammation reversal</span> for degenerative joints.",
    link: "/ayurveda/conditions/joint-pain-arthritis",
    tags: ["Vata", "Ama"]
  },
  {
    icon: <Flower2 size={24} />,
    title: "PCOS & Hormonal Health",
    snippet: "Addressing the metabolic roots of <span className={styles.symptomHighlight}>irregular cycles</span> and weight gain.",
    link: "/ayurveda/conditions/pcos-hormonal-imbalance",
    tags: ["Metabolism", "Kapha"]
  },
  {
    icon: <Moon size={24} />,
    title: "Stress & Insomnia",
    snippet: "Neurological grounding to silence <span className={styles.symptomHighlight}>racing minds</span> and restore deep sleep.",
    link: "/ayurveda/conditions/stress-insomnia",
    tags: ["Neurology", "Vata"]
  },
  {
    icon: <Activity size={24} />,
    title: "Digestive Disorders (IBS)",
    snippet: "Restoring 'Agni' to treat chronic <span className={styles.symptomHighlight}>bloating</span>, <span className={styles.symptomHighlight}>acidity</span>, and irregular motility.",
    link: "/ayurveda/conditions/digestive-disorders-ibs",
    tags: ["Agni", "GI Health"]
  },
  {
    icon: <Sparkles size={24} />,
    title: "Hair Fall & Scalp Care",
    snippet: "Addressing environmental <span className={styles.symptomHighlight}>hair thinning</span> through deep follicular nourishment.",
    link: "/ayurveda/conditions/hair-fall-scalp-care",
    tags: ["Asthi Dhatu", "Scalp Detox"]
  },
  {
    icon: <Pipette size={24} />,
    title: "Skin & Chronic Eczema",
    snippet: "Internal purification for <span className={styles.symptomHighlight}>eczema</span> and <span className={styles.symptomHighlight}>psoriasis</span> through blood cleansing.",
    link: "/ayurveda/conditions/skin-chronic-eczema",
    tags: ["Dermatology", "Detox"]
  }
];

export default function AyurvedaConditionsIndex() {
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Conditions We Treat</h1>
        <p className={styles.subtitle}>
          We specialize in chronic disease management and structural recovery. 
          Discover our specialized Ayurvedic perspective on your condition.
        </p>
      </header>

      <section className={styles.grid}>
        {conditions.map((cond, i) => (
          <Link href={cond.link} key={i} className={`${styles.card} ${styles.ayurvedaCard}`}>
            <div className={styles.cardHeader}>
              <div className={styles.iconWrapper}>
                {cond.icon}
              </div>
              <h2 className={styles.cardTitle}>{cond.title}</h2>
            </div>
            <p className={styles.cardSnippet} dangerouslySetInnerHTML={{ __html: cond.snippet }}></p>
            <div className={styles.tags}>
              {cond.tags.map((tag, idx) => (
                <span key={idx} className={styles.tag}>{tag}</span>
              ))}
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
