import Link from "next/link";
import styles from "../../sharedIndex.module.css";
import { ArrowLeft, Droplets, Clock, Waves, Flame, Scale, Container } from "lucide-react";

export const metadata = {
  title: "Ayurvedic Therapies | Wellnest Care",
  description: "Explore our intensive Ayurvedic detoxification and neurological protocols.",
};

const treatments = [
  {
    icon: <Droplets size={24} />,
    title: "Panchakarma Detoxification",
    snippet: "Our signature 5-step cellular cleanse. Ideal for systemic toxicity, autoimmune conditions, and severe dosha imbalance.",
    link: "/ayurveda/treatments/panchakarma-detox",
    tags: ["Deep Cleanse", "7-21 Days"]
  },
  {
    icon: <Clock size={24} />,
    title: "Shirodhara Therapy",
    snippet: "A continuous flow of warm, medicated oil poured over the third eye. Clinically proven to reset the nervous system.",
    link: "/ayurveda/treatments/shirodhara-therapy",
    tags: ["Neurological Reset", "60 Mins"]
  },
  {
    icon: <Waves size={24} />,
    title: "Abhyanga Rejuvenation",
    snippet: "A high-precision 4-hand oil application to ground the nervous system and mobilize deep-tissue toxins.",
    link: "/ayurveda/treatments/abhyanga-rejuvenation",
    tags: ["Nervous System", "Vata"]
  },
  {
    icon: <Flame size={24} />,
    title: "Kizhi (Herbal Poultice)",
    snippet: "Intense heat therapy using medicinal herbal bundles to relieve joint stiffness and chronic inflammation.",
    link: "/ayurveda/treatments/kizhi-herbal-poultice",
    tags: ["Pain Relief", "Heat Therapy"]
  },
  {
    icon: <Scale size={24} />,
    title: "Udvartana (Weight Management)",
    snippet: "A dry herbal powder massage designed to stimulate lipid metabolism and reduce cellulite.",
    link: "/ayurveda/treatments/udvartana-weight-management",
    tags: ["Metabolism", "Kapha"]
  },
  {
    icon: <Container size={24} />,
    title: "Kati Vasti (Spine Care)",
    snippet: "Localized oil pooling to hydrate spinal disks and relieve nerve compression in the lumbar region.",
    link: "/ayurveda/treatments/kati-vasti-spine-care",
    tags: ["Back Pain", "Sciatica"]
  }
];

export default function AyurvedaTreatmentsIndex() {
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Ayurvedic Therapies</h1>
        <p className={styles.subtitle}>
          We do not mask symptoms; we resolve them. Explore our master-level therapies designed to initiate profound physiological healing.
        </p>
      </header>

      <section className={styles.grid}>
        {treatments.map((treat, i) => (
          <Link href={treat.link} key={i} className={`${styles.card} ${styles.ayurvedaCard}`}>
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
