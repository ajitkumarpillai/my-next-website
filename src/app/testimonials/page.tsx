import Link from "next/link";
import styles from "./page.module.css";
import { ArrowLeft, Quote, Star } from "lucide-react";

export const metadata = {
  title: "Patient Success Stories | Wellnest Care",
  description: "Real experiences and healing journeys from patients who chose integrative Ayurveda and Homeopathy at Wellnest Care.",
};

const testimonials = [
  {
    name: "Ayesha M.",
    condition: "Chronic Migraines & Hormonal Imbalance",
    treatment: "Homeopathic Constitutional Therapy",
    quote: "I spent three years relying on strong painkillers for my migraines. Dr. Aisha's homeopathic assessment was the first time a doctor asked me about my stress triggers. Seven months into my constitutional remedy, the migraines have reduced by 90%. I feel like I have my life back.",
    wing: "Homeopathy",
  },
  {
    name: "Tarek S.",
    condition: "Post-Surgical Knee Rehab",
    treatment: "Clinical Athletic Recovery + Marma Therapy",
    quote: "As an amateur triathlete, a knee surgery left me with severe fascial tightness. The Athletic Recovery protocol at Wellnest wasn't a standard spa massage—it was intense, targeted clinical work. The Marma point release drastically improved my range of motion.",
    wing: "Ayurveda",
  },
  {
    name: "Fatima Al R.",
    condition: "Postpartum Fatigue & Toxicity",
    treatment: "Panchakarma (Emerald Wing)",
    quote: "The privacy in the Emerald Wing is unparalleled. I underwent a 14-day Panchakarma protocol to clear the physical exhaustion holding me back after my second child. The dedication of the female therapists was beautiful. Deeply restorative.",
    wing: "Ayurveda",
  },
  {
    name: "David H.",
    condition: "Severe Eczema & Allergies",
    treatment: "Integrative Homeopathy",
    quote: "Cortisone creams stopped working. The transition to homeopathy caused a brief flare-up initially (which the doctor warned me about), but staying the course with Dr. Tariq was the best medical decision I've made. My skin is clear, and I haven't used steroids in a year.",
    wing: "Homeopathy",
  }
];

export default function TestimonialsPage() {
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Healing Journeys</h1>
        <p className={styles.subtitle}>
          Read the authenticated experiences of patients who discovered true, root-cause healing.
        </p>
      </header>

      <section className={styles.testimonialsGrid}>
        {testimonials.map((test, index) => (
          <div key={index} className={styles.testimonialCard}>
            <div className={styles.quoteIcon}>
              <Quote size={32} />
            </div>
            
            <div className={styles.stars}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>

            <p className={styles.quoteText}>"{test.quote}"</p>
            
            <div className={styles.patientMeta}>
              <div className={styles.patientInfo}>
                <strong>{test.name}</strong>
                <span className={styles.conditionMeta}>{test.condition}</span>
              </div>
              
              <div className={styles.treatmentInfo}>
                <span className={styles.badge}>{test.wing}</span>
                <span className={styles.treatmentName}>{test.treatment}</span>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className={styles.ctaSection}>
        <h2>Begin Your Story</h2>
        <p>Our specialists are ready to help you trace the root of your symptoms.</p>
        <Link href="/booking" className={styles.ctaButton}>
          Schedule a Consultation
        </Link>
      </section>
    </main>
  );
}
