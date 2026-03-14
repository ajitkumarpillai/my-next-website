import Link from "next/link";
import styles from "../../sharedIndex.module.css";
import { ArrowLeft, Brain, Baby, Wind, Droplets, Activity } from "lucide-react";

export const metadata = {
  title: "Homeopathic Conditions | Wellnest Care",
  description: "Find root-cause Homeopathic solutions for chronic migraines and pediatric allergies.",
};

const conditions = [
  {
    icon: <Brain size={24} />,
    title: "Migraines & Chronic Headaches",
    snippet: "Tracing <span className={styles.symptomHighlight}>throbbing pain</span> back to specific constitutional triggers—hormonal or environmental.",
    link: "/homeopathy/conditions/migraines-headaches",
    tags: ["Constitutional", "Neurological"]
  },
  {
    icon: <Baby size={24} />,
    title: "Pediatric Allergies & Immunity",
    snippet: "Modulating the child's innate <span className={styles.symptomHighlight}>immune hyper-reactivity</span> safely and naturally.",
    link: "/homeopathy/conditions/pediatric-allergies-immunity",
    tags: ["Immune Modulation", "Safe for Kids"]
  },
  {
    icon: <Wind size={24} />,
    title: "Rhinitis & Chronic Sinusitis",
    snippet: "Addressing <span className={styles.symptomHighlight}>chronic inflammation</span> of nasal membranes triggered by dust and AC air.",
    link: "/homeopathy/conditions/rhinitis-sinusitis",
    tags: ["Respiratory", "Environmental"]
  },
  {
    icon: <Droplets size={24} />,
    title: "Eczema & Atopic Dermatitis",
    snippet: "Internal restoration for <span className={styles.symptomHighlight}>chronic eczema</span>, treating underlying metabolic triggers.",
    link: "/homeopathy/conditions/eczema-dermatitis",
    tags: ["Dermatology", "Non-Steroidal"]
  },
  {
    icon: <Activity size={24} />,
    title: "Behavioral & Neuro-Support",
    snippet: "Homeopathic support for <span className={styles.symptomHighlight}>ADHD</span> and <span className={styles.symptomHighlight}>ASD</span> symptoms, focusing on grounding.",
    link: "/homeopathy/conditions/behavioral-neuro-support",
    tags: ["Neuro-Support", "Integrative"]
  }
];

export default function HomeopathyConditionsIndex() {
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Homeopathic Conditions</h1>
        <p className={styles.subtitle}>
          We don't suppress symptoms; we decode them. Find the condition you are battling below to understand our constitutional approach.
        </p>
      </header>

      <section className={styles.grid}>
        {conditions.map((cond, i) => (
          <Link href={cond.link} key={i} className={`${styles.card} ${styles.homeopathyCard}`}>
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
