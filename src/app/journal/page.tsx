import Link from "next/link";
import styles from "./page.module.css";
import { BookOpen, Clock, Tag, ChevronRight } from "lucide-react";

export const metadata = {
  title: "The Wellnest Journal | Holistic Health Blog Abu Dhabi",
  description: "Explore our clinical deep-dives into Ayurveda, Homeopathy, and Integrative Medicine.",
};

const articles = [
  {
    title: "Understanding Your Ayurvedic Dosha: Vata, Pitta, and Kapha",
    excerpt: "Before beginning any Panchakarma protocol, identifying your unique elemental constitution is crucial for customized healing.",
    category: "Ayurveda",
    readTime: "5 min read",
    date: "March 15, 2026",
    slug: "understanding-ayurvedic-doshas"
  },
  {
    title: "Why Cortisone Fails: The Homeopathic Approach to Eczema",
    excerpt: "Steroids suppress symptoms; homeopathy seeks the root cause. Discover how constitutional prescribing treats chronic skin conditions.",
    category: "Homeopathy",
    readTime: "8 min read",
    date: "March 12, 2026",
    slug: "homeopathy-for-eczema"
  },
  {
    title: "The Neural Reset: Why Shirodhara Calms the Modern Mind",
    excerpt: "Exploring the science behind rhythmic oil flow and its profound impact on cortical stability and chronic stress.",
    category: "Clinical Ayurveda",
    readTime: "10 min read",
    date: "March 10, 2026",
    slug: "the-neural-reset-shirodhara"
  },
  {
    title: "The Constitutional Blueprint: Why Homeopathy is NOT One-Size-Fits-All",
    excerpt: "An investigation into why two patients with the same clinical diagnosis require vastly different homeopathic remedies.",
    category: "Clinical Homeopathy",
    readTime: "7 min read",
    date: "March 08, 2026",
    slug: "homeopathic-constitutional-blueprint"
  },
  {
    title: "Urban Detox: Reversing UAE Environmental Stress with Panchakarma",
    excerpt: "Addressing the internal impact of AC-reliant lifestyles, desert dust, and urban humidity on your metabolic vitality.",
    category: "Lifestyle",
    readTime: "9 min read",
    date: "March 05, 2026",
    slug: "urban-detox-panchakarma-uae"
  },
  {
    title: "Sen Lines vs. Marma Points: Athletic Recovery Anatomy",
    excerpt: "An anatomical breakdown of our exclusive athletic recovery protocol bridging two ancient Eastern sciences.",
    category: "Integrative Tech",
    readTime: "6 min read",
    date: "February 18, 2026",
    slug: "athletic-recovery-anatomy"
  }
];

export default function JournalPage() {
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.title}>The Wellnest Journal</h1>
          <p className={styles.subtitle}>
            Clinical insights, natural remedies, and integrative health research published by our medical board.
          </p>
        </div>
      </header>

      <section className={styles.articlesGrid}>
        {articles.map((article, index) => (
          <article key={index} className={styles.articleCard}>
            <div className={styles.cardHeader}>
              <span className={styles.categoryBadge}>
                <Tag size={12} className={styles.metaIcon} />
                {article.category}
              </span>
              <span className={styles.readTime}>
                <Clock size={12} className={styles.metaIcon} />
                {article.readTime}
              </span>
            </div>
            
            <h2 className={styles.articleTitle}>
              <Link href={`/journal/${article.slug}`}>{article.title}</Link>
            </h2>
            
            <p className={styles.articleExcerpt}>{article.excerpt}</p>
            
            <div className={styles.cardFooter}>
              <span className={styles.publishDate}>{article.date}</span>
              <Link href={`/journal/${article.slug}`} className={styles.readMore}>
                Read Article <ChevronRight size={14} />
              </Link>
            </div>
          </article>
        ))}
      </section>

      <section className={styles.newsletter}>
        <div className={styles.newsletterContent}>
          <h3>Clinical Updates in Your Inbox</h3>
          <p>Join 2,000+ patients receiving monthly holistic research and health protocols.</p>
          <div className={styles.newsletterForm}>
             <input type="email" placeholder="your@email.com" className={styles.input} />
             <button className={styles.button}>Subscribe</button>
          </div>
        </div>
      </section>
    </main>
  );
}
