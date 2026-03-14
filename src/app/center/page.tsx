import HeroGallery from "@/components/HeroGallery";
import Link from "next/link";
import styles from "./page.module.css";
import { ShieldCheck, Activity, Leaf, CarFront, Car, Shield, Library } from "lucide-react";

export default function CenterPage() {
  return (
    <main className={styles.container}>
      {/* Navigation Header */}
      <HeroGallery />

      <section className={styles.introSection}>
        <div className={styles.textBlock}>
          <h2 className={styles.heading}>The Epitome of Integrated Excellence</h2>
          <p className={styles.bodyText}>
            Welcome to Abu Dhabi's premier destination for holistic and integrative medicine. 
            At Wellnest Care, we merge ancient wisdom with modern clinical precision. 
            Our facility is designed to elevate your healing journey through meticulously curated environments.
          </p>
        </div>

        <div className={styles.features}>
          <div className={styles.featureBox}>
            <ShieldCheck className={styles.icon} />
            <h3 className={styles.featureTitle}>7 Premium Treatment Rooms</h3>
            <p className={styles.featureText}>Including the exclusive Onyx and Emerald Wings, prioritizing privacy and clinical hygiene.</p>
          </div>
          <div className={styles.featureBox}>
            <Activity className={styles.icon} />
            <h3 className={styles.featureTitle}>Homeopathic & Allopathic Diagnostics</h3>
            <p className={styles.featureText}>Root-cause resolution supervised by licensed specialists.</p>
          </div>
          <div className={styles.featureBox}>
            <Leaf className={styles.icon} />
            <h3 className={styles.featureTitle}>Authentic Ayurveda</h3>
            <p className={styles.featureText}>Panchakarma detox and Advanced athletic recovery protocols.</p>
          </div>
          <div className={styles.featureBox}>
            <CarFront className={styles.icon} />
            <h3 className={styles.featureTitle}>Complimentary Valet</h3>
            <p className={styles.featureText}>Seamless arrival and departure at our front door, allowing you to focus entirely on your healing.</p>
          </div>
          <div className={styles.featureBox}>
            <Car className={styles.icon} />
            <h3 className={styles.featureTitle}>Pick & Drop Transport</h3>
            <p className={styles.featureText}>Restricted mobility? We offer complimentary transport within a 10km radius to ensure you get the care you need.</p>
          </div>
        </div>
      </section>

      <section className={styles.insuranceSection}>
        <div className={styles.insuranceContent}>
          <Shield className={styles.insuranceIcon} />
          <div className={styles.insuranceText}>
            <h2>Insurance Coverage</h2>
            <p>Wellnest Care is an empanelled provider for all leading insurance companies.</p>
          </div>
          <div className={styles.insuranceBadge}>
            Reimbursement Based Coverage
          </div>
        </div>
      </section>

      <section className={styles.resourceCTA}>
        <div className={styles.resourceContent}>
          <div className={styles.resourceHeader}>
            <Library className={styles.resourceIcon} />
            <h2>Patient Resource Center</h2>
          </div>
          <p>Download preparatory guides, intake forms, and explore our clinical glossary to empower your healing journey.</p>
          <Link href="/resources" className={styles.resourceBtn}>
            Access Patient Resources
          </Link>
        </div>
      </section>

    </main>
  );
}
