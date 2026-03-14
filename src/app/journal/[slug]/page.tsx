import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "../journalDetail.module.css";
import { ArrowLeft, Clock, Calendar, User, ChevronLeft } from "lucide-react";

// Mock database of articles
const articlesMap: Record<string, any> = {
  "understanding-ayurvedic-doshas": {
    title: "Understanding Your Ayurvedic Dosha: Vata, Pitta, and Kapha",
    category: "Ayurveda",
    date: "March 15, 2026",
    readTime: "5 min read",
    content: (
      <>
        <p>In Ayurveda, health is defined as the dynamic balance between three fundamental energies, or <strong>Doshas</strong>: Vata, Pitta, and Kapha. Each of us is born with a unique proportion of these energies, known as our <em>Prakriti</em>.</p>
        <h2>The Three Doshas</h2>
        <ul>
          <li><strong>Vata (Air & Ether):</strong> Controls movement, breathing, and the nervous system. When out of balance, it leads to anxiety, dry skin, and insomnia.</li>
          <li><strong>Pitta (Fire & Water):</strong> Controls metabolism, digestion, and body temperature. Imbalance manifests as anger, inflammation, and acidity.</li>
          <li><strong>Kapha (Earth & Water):</strong> Controls structure, lubrication, and immunity. Imbalance leads to lethargy, congestion, and weight gain.</li>
        </ul>
        <p>Before beginning any clinical treatment like Panchakarma, our doctors perform a precise pulse diagnostic (Nadi Pariksha) to determine which Dosha requires grounding or activation.</p>
      </>
    )
  },
  "homeopathy-for-eczema": {
    title: "Why Cortisone Fails: The Homeopathic Approach to Eczema",
    category: "Homeopathy",
    date: "March 12, 2026",
    readTime: "8 min read",
    content: (
      <>
        <p>For many patients suffering from chronic eczema, topical steroids are a temporary fix that often leads to "rebound" flare-ups. In Homeopathy, we view skin eruptions as the body's attempt to push deeper internal toxicity to the surface.</p>
        <h2>The Danger of Suppression</h2>
        <p>When we apply cortisone, we suppress the immune response at the skin level. However, the underlying metabolic or nervous system trigger remains unaddressed, often driving the pathology "deeper" into the lungs (asthma) or digestive tract.</p>
        <h2>The Constitutional Path</h2>
        <p>Homeopathy uses highly individualized remedies—selected based on your unique triggers, sleep patterns, and emotional landscape—to clear the internal terrain, allowing the skin to heal naturally and permanently.</p>
      </>
    )
  },
  "the-neural-reset-shirodhara": {
    title: "The Neural Reset: Why Shirodhara Calms the Modern Mind",
    category: "Clinical Ayurveda",
    date: "March 10, 2026",
    readTime: "10 min read",
    content: (
      <>
        <p>Shirodhara—the rhythmic pouring of warm medicated oil on the forehead—is often seen as a spa treatment, but its clinical origins are rooted in deep neurological stabilization.</p>
        <h2>The Science of the Third Eye</h2>
        <p>The continuous flow of oil at a specific temperature and pressure on the <em>Ajna Chakra</em> area creates a somatosensory stimulus that down-regulates the sympathetic nervous system. It shifts the brain from "fight-or-flight" (high cortisol) into the "rest-and-digest" parasympathetic state.</p>
        <h2>Clinical Benefits</h2>
        <ul>
          <li><strong>Insomnia:</strong> Resets the pineal gland's melatonin secretion.</li>
          <li><strong>Anxiety:</strong> Lowers the excitation of the amygdala.</li>
          <li><strong>Hypertension:</strong> Studies show a marked reduction in blood pressure post-therapy.</li>
        </ul>
      </>
    )
  },
  "homeopathic-constitutional-blueprint": {
    title: "The Constitutional Blueprint: Why Homeopathy is NOT One-Size-Fits-All",
    category: "Clinical Homeopathy",
    date: "March 08, 2026",
    readTime: "7 min read",
    content: (
      <>
        <p>If ten people walk into a homeopathic clinic with a migraine, they might leave with ten completely different remedies. This is the essence of individualization.</p>
        <h2>Symptoms as a Language</h2>
        <p>In conventional medicine, a migraine is a migraine. In Homeopathy, we ask: <em>Is it worse in the sun? Does it improve with cold pressure? Does it start on the left side?</em> These "modalities" are the keys to unlocking your specific blueprint.</p>
        <h2>Deep-Acting Remedies</h2>
        <p>By matching a remedy to your total physical and emotional constitution, we don't just stop the pain; we reset the body's threshold for the trigger itself.</p>
      </>
    )
  },
  "urban-detox-panchakarma-uae": {
    title: "Urban Detox: Reversing UAE Environmental Stress with Panchakarma",
    category: "Lifestyle",
    date: "March 05, 2026",
    readTime: "9 min read",
    content: (
      <>
        <p>Living in high-tech urban environments like Abu Dhabi presents unique physiological challenges: constant air conditioning, exposure to fine desert dust, and high evening humidity.</p>
        <h2>The "Dry Body" Syndrome</h2>
        <p>Recycled AC air severely aggravates <em>Vata</em>, leading to chronic dehydration, skin aged prematurely, and respiratory sensitivity. Conversely, the "heavy" urban humidity can cause <em>Ama</em> (toxins) to stick deeper in the tissues.</p>
        <h2>The Panchakarma Solution</h2>
        <p>Our seasonal detox protocols are specifically modified for the Gulf climate, focusing on heavy internal oleation (Snehana) and targeted sweating (Swedana) to pull heavy metals and environmental pollutants out of the cellular matrix.</p>
      </>
    )
  },
  "athletic-recovery-anatomy": {
    title: "Sen Lines vs. Marma Points: Athletic Recovery Anatomy",
    category: "Integrative Tech",
    date: "February 18, 2026",
    readTime: "6 min read",
    content: (
      <>
        <p>For athletes, recovery is as important as the training itself. Our clinic bridges two ancient systems to optimize cellular repair and neuromuscular efficiency.</p>
        <h2>Bridging the Concepts</h2>
        <ul>
          <li><strong>Sen Lines:</strong> Derived from energy-meridian science to address fascial tension and energy flow across long kinetic chains.</li>
          <li><strong>Marma Points:</strong> The clinical Ayurvedic science of vital pressure points where nerves, bones, and muscles intersect.</li>
        </ul>
        <h2>The Result</h2>
        <p>Our Integrated Athletic Recovery Protocol clears lactic acid faster, reduces DOMS (Delayed Onset Muscle Soreness), and improves joint ROM (Range of Motion) through targeted structural manipulation.</p>
      </>
    )
  }
};

export async function generateStaticParams() {
  return Object.keys(articlesMap).map((slug) => ({
    slug: slug,
  }));
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articlesMap[params.slug];

  if (!article) {
    notFound();
  }

  return (
    <main className={styles.container}>
      <nav className={styles.navbar}>
        <Link href="/journal" className={styles.backLink}>
          <ChevronLeft size={16} /> Back to Journal
        </Link>
        <div className={styles.brand}>Wellnest Care</div>
      </nav>

      <header className={styles.articleHero}>
        <span className={styles.categoryBadge}>{article.category}</span>
        <h1 className={styles.title}>{article.title}</h1>
        <div className={styles.articleMeta}>
          <div className={styles.metaItem}><User size={16} /> Wellnest Medical Board</div>
          <div className={styles.metaItem}><Calendar size={16} /> {article.date}</div>
          <div className={styles.metaItem}><Clock size={16} /> {article.readTime}</div>
        </div>
      </header>

      <article className={styles.contentWrapper}>
        <div className={styles.articleContent}>
          {article.content}
        </div>

        <div className={styles.conclusionBox}>
          <h3>Clinical Summary</h3>
          <p>Integrated holistic medicine is about precision. If you are experiencing symptoms related to this article, we recommend a clinical assessment to determine your specific bio-type.</p>
        </div>
      </article>

      <section className={styles.ctaSection}>
        <h2>Begin your healing journey today.</h2>
        <Link href="/booking" className={styles.ctaButton}>
          Book a Clinical Consultation
        </Link>
      </section>
    </main>
  );
}
