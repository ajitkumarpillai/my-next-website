import Link from "next/link";
import styles from "../../sharedIndex.module.css";
import { ArrowLeft, Dna, Zap, ShieldCheck, Activity } from "lucide-react";

export const metadata = {
  title: "Homeopathic Therapies | Wellnest Care",
  description: "Explore our intensive constitutional homeopathic protocols.",
};

const treatments = [
  {
    icon: <Dna size={24} />,
    title: "Constitutional Assessment",
    snippet: "An exhaustive, 90-minute investigation into your entire physiological, mental, and emotional blueprint to find your singular remedy match.",
    link: "/homeopathy/treatments/constitutional-assessment",
    tags: ["Complete Blueprint", "90 Mins"]
  },
  {
    icon: <Zap size={24} />,
    title: "Acute Care Protocol",
    snippet: "Rapid homeopathic intervention for fevers, infections, and injuries using precise high-potency prescribing.",
    link: "/homeopathy/treatments/acute-care-protocol",
    tags: ["Rapid Relief", "15-30 Mins"]
  },
  {
    icon: <ShieldCheck size={24} />,
    title: "Miasmatic Deep-Cleanse",
    snippet: "Targeting the hereditary 'soil' and chronic blockages that prevent standard treatments from working effectively.",
    link: "/homeopathy/treatments/miasmatic-deep-cleanse",
    tags: ["Chronic Recovery", "Deep-Cleanse"]
  },
  {
    icon: <Activity size={24} />,
    title: "Immune-Modulation Therapy",
    snippet: "Training the immune system to respond with precision to environmental and seasonal pathogens.",
    link: "/homeopathy/treatments/immune-modulation-therapy",
    tags: ["Prevention", "Immunity"]
  }
];

export default function HomeopathyTreatmentsIndex() {
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Homeopathic Therapies</h1>
        <p className={styles.subtitle}>
          Discover the power of micro-dose medicine. Our classic homeopathic protocols are designed to stimulate your body's innate self-healing mechanism.
        </p>
      </header>

      <section className={styles.grid}>
        {treatments.map((treat, i) => (
          <Link href={treat.link} key={i} className={`${styles.card} ${styles.homeopathyCard}`}>
            <div className={styles.cardHeader}>
              <div className={styles.iconWrapper}>
                {treat.icon}
              </div>
              <h2 className={styles.cardTitle}>{treat.title}</h2>
            </div>
            <p className={styles.cardSnippet}>{treat.snippet}</p>
            <div className={styles.tags}>
              {treat.tags.map((tag, idx) => (
                <span key={idx} className={styles.tag}>{tag}</span>
              ))}
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
