import Link from "next/link";
import styles from "./page.module.css";
import { ArrowLeft, Plus } from "lucide-react";

export const metadata = {
  title: "Holistic Health FAQs | Wellnest Care",
  description: "Answers to your questions about Ayurveda, Homeopathy, and Integrative Medicine at Wellnest Care Abu Dhabi.",
};

const faqs = [
  {
    question: "Do you accept health insurance in the UAE?",
    answer: "Most major UAE health insurance providers cover our Homeopathic consultations and specific integrative protocols. However, coverage for traditional Ayurvedic therapies (like Panchakarma) depends on your specific policy tier. We provide detailed invoicing for easy claims."
  },
  {
    question: "What is the difference between the Onyx and Emerald wings?",
    answer: "The Onyx Wing is our dedicated Male Sanctuary, staffed exclusively by male practitioners and specialists. The Emerald Wing is our female-only sanctuary, focusing intensely on women's wellness, hormonal health, and privacy."
  },
  {
    question: "How should I prepare for my first Panchakarma session?",
    answer: "Panchakarma requires preparatory phase known as 'Purvakarma' (internal oleation and diet adjustments). Your Lead Ayurvedic Physician will provide a strict 7-day protocol prior to your in-clinic detox sessions."
  },
  {
    question: "Can I do Clinical Athletic Recovery if I have a chronic injury?",
    answer: "Yes, but clearance is required. Unlike standard spa treatments, our Clinical Athletic Recovery is a clinical protocol. If you have a severe structural injury, Dr. Vikram Sharma will assess you first to ensure the Marma point release is not contraindicated."
  },
  {
    question: "How long does a homeopathic constitutional assessment take?",
    answer: "Your initial constitutional assessment with Dr. Aisha Rahman or our Lead Homeopaths takes between 60 to 90 minutes. This ensures we capture your complete physical, mental, and emotional health history."
  }
];

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <main className={styles.container}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <header className={styles.header}>
        <h1 className={styles.title}>Frequently Asked Questions</h1>
        <p className={styles.subtitle}>
          Clarity on our protocols, privacy, and integrative approach.
        </p>
      </header>

      <section className={styles.faqSection}>
        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <details key={index} className={styles.faqItem}>
              <summary className={styles.faqQuestion}>
                {faq.question}
                <Plus size={20} className={styles.icon} />
              </summary>
              <div className={styles.faqAnswer}>
                <p>{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      <div className={styles.ctaWrapper}>
        <p>Still have questions?</p>
        <Link href="/contact" className={styles.ctaButton}>
          Contact Our Concierge
        </Link>
      </div>
    </main>
  );
}
