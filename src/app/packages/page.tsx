import Link from "next/link";
import styles from "./page.module.css";
import { ArrowLeft, CheckCircle2, ChevronRight } from "lucide-react";

export const metadata = {
  title: "Premium Wellness Packages & Programs | Wellnest Care",
  description: "Immersive multi-day Ayurvedic detox and Homeopathic healing programs in Abu Dhabi. Featuring the Emerald Postnatal Integration and Onyx Athletic Recovery.",
};

const packages = [
  {
    title: "The 3-Day Emerald Detox",
    subtitle: "Panchakarma Reset Primer",
    wing: "Ayurveda",
    theme: "emerald",
    price: "AED 3,500",
    description: "An intensive introductory cleanse designed for high-stress executives. Flushes deep-seated Ama (toxins) through specialized oleation and thermal therapies.",
    inclusions: [
      "Initial Nadi Vigyan (Pulse Diagnosis) Consultation",
      "3x Abhyanga & Swedana (Herbal Steam) Sessions",
      "2x Shirodhara (Third-Eye Oil Pour) for nervous system reset",
      "Personalized 3-Day Dosha-Balancing Meal Plan"
    ]
  },
  {
    title: "Postnatal Integration Program",
    subtitle: "4-Week Restorative Protocol",
    wing: "Homeopathy & Ayurvedas",
    theme: "integrative",
    price: "AED 8,200",
    description: "A comprehensive dual-wing approach to repair the female physiology and balance hormones post-delivery in complete privacy.",
    inclusions: [
      "Deep Constitutional Homeopathic Assessment (Dr. Aisha)",
      "4x Postpartum Specialized Herbal Massages (Udwarthanam)",
      "Weekly Marma Point Therapy for Pelvic Floor recovery",
      "Immunity & Lactation Supportive Supplement Kit"
    ]
  },
  {
    title: "The Onyx Athletic Recovery",
    subtitle: "7-Day Fascial Release",
    wing: "Ayurveda",
    theme: "onyx",
    price: "AED 5,900",
    description: "Designed explicitly for triathletes, marathoners, and high-performance individuals recovering from muscular trauma or preparing for a peak event.",
    inclusions: [
      "Structural Kinematic Assessment (Dr. Vikram)",
      "5x Clinical Clinical Athletic Recovery interventions",
      "Targeted Kizhi (Herbal Bolus) applications for joint inflammation",
      "Advanced Joint Lubrication Therapy (Janu Basti)"
    ]
  }
];

export default function PackagesPage() {
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Curated Healing Pathways</h1>
        <p className={styles.subtitle}>
          Transcend the standard appointment hour. Immerse yourself in our comprehensive, multi-day integrative health packages designed for true physiological transformation.
        </p>
      </header>

      <section className={styles.packagesGrid}>
        {packages.map((pkg, index) => (
           <div key={index} className={`${styles.packageCard} ${styles[pkg.theme]}`}>
             <div className={styles.cardHeader}>
               <span className={styles.wingBadge}>{pkg.wing}</span>
               <h2 className={styles.pkgTitle}>{pkg.title}</h2>
               <h3 className={styles.pkgSubtitle}>{pkg.subtitle}</h3>
             </div>
             
             <div className={styles.cardBody}>
               <p className={styles.description}>{pkg.description}</p>
               
               <h4 className={styles.inclusionsTitle}>Protocol Inclusions:</h4>
               <ul className={styles.inclusionsList}>
                 {pkg.inclusions.map((item, i) => (
                   <li key={i}>
                     <CheckCircle2 size={16} className={styles.checkIcon} />
                     <span>{item}</span>
                   </li>
                 ))}
               </ul>
             </div>
             
             <div className={styles.cardFooter}>
               <div className={styles.priceMeta}>
                 <span className={styles.startingAt}>Starting from</span>
                 <span className={styles.price}>{pkg.price}</span>
               </div>
               <Link href="/booking" className={styles.bookBtn}>
                 Reserve Pathway <ChevronRight size={16} />
               </Link>
             </div>
           </div>
        ))}
      </section>
    </main>
  );
}
