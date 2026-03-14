import Link from "next/link";
import styles from "./page.module.css";
import { Award } from "lucide-react";
import DoctorCard from "@/components/DoctorCard";
import { ayurvedaDoctors, homeopathyDoctors } from "@/data/doctors";

const therapists = [
  { name: "Dr. Krit", role: "Lead Athletic Recovery Specialist" },
  { name: "Priya Menon", role: "Senior Panchakarma Therapist" },
  { name: "Arjun Das", role: "Ayurvedic Spa Specialist" },
  { name: "Nadia Silva", role: "Holistic Assessment Guide" },
  { name: "Somchai Lee", role: "Athletic Recovery Expert" },
  { name: "Fatima Noor", role: "Female Wing Care Coordinator" },
  { name: "Ravi Kumar", role: "Marma Point Therapist" },
  { name: "Sarah Jenkins", role: "Integrative Massage Therapist" },
];

export const metadata = {
  title: "Our Experts | Wellnest Clinical Board",
  description: "Meet our licensed medical board of Ayurveda and Homeopathy doctors in Abu Dhabi.",
};

export default function TeamPage() {
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Our Licensed Medical Board</h1>
        <p className={styles.subtitle}>
          Unwavering expertise. Every therapeutic protocol at Wellnest Care is strictly governed by licensed medical 
          practitioners to ensure absolute clinical safety and efficacy.
        </p>
      </header>

      {/* Ayurveda Board */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Ayurveda Medical Board</h2>
        <div className={styles.grid}>
          {ayurvedaDoctors.map((doc, idx) => (
            <DoctorCard key={idx} doctor={doc} />
          ))}
        </div>
      </section>

      {/* Homeopathy Board */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Homeopathy Medical Board</h2>
        <div className={styles.grid}>
          {homeopathyDoctors.map((doc, idx) => (
            <DoctorCard key={idx} doctor={doc} />
          ))}
        </div>
      </section>

      {/* Therapists */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Master Therapists & Coordinators</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1.5rem'
        }}>
          {therapists.map((therapist, idx) => (
            <div key={idx} style={{
              background: 'white',
              padding: '1.5rem',
              borderRadius: '8px',
              border: '1px solid var(--color-border)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>{therapist.name}</h3>
                <span style={{ fontSize: '0.85rem', color: 'var(--color-muted)' }}>{therapist.role}</span>
              </div>
              <Award size={20} style={{ color: 'var(--color-ayurveda-accent)' }} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
