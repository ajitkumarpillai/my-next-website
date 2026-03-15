import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Activity, Leaf, MapPin, Phone, Mail, Facebook, Instagram, Navigation, Car, CarFront, Shield, Sparkles, Award } from "lucide-react";
import styles from "./page.module.css";
import HeroSlider from "@/components/HeroSlider";
import DoctorCard from "@/components/DoctorCard";
import { ayurvedaDoctors, homeopathyDoctors } from "@/data/doctors";

export default function Home() {
  return (
    <main className={styles.container}>
      {/* 1. Luxury Hero Section */}
      <section className={styles.hero}>
        <HeroSlider />
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <span className={styles.heroSubtitle}>Abu Dhabi's Premium Holistic Destination</span>
          <h1 className={styles.heroTitle}>The Epitome of Integrated Excellence</h1>
          <p className={styles.heroText}>
            Where ancient healing wisdom meets modern clinical precision in a 5-star luxury medical sanctuary.
          </p>
          <div className={styles.heroActions}>
            <Link href="/booking" className={styles.btnPrimary}>
              Book a Consultation
            </Link>
            <a href="#wings" className={styles.btnSecondary}>
              Explore Ayurveda & Homeopathy
            </a>
          </div>
        </div>
      </section>

      {/* 1.5. About Summary Section */}
      <section className={styles.aboutSummary}>
        <div className={styles.aboutContent}>
          <span className={styles.heroSubtitle} style={{ display: 'block', marginBottom: '1rem' }}>Our Heritage & Philosophy</span>
          <h2 className={styles.aboutTitle}>Ancient Wisdom. Clinical Precision.</h2>
          <p className={styles.aboutBrief}>
            Wellnest Care is Abu Dhabi’s premier clinical sanctuary, where the timeless healing legacy of the East meets modern medical standards. We specialize in root-cause recovery, restoring your body’s innate intelligence through award-winning expertise.
          </p>
          
          <div className={styles.aboutGrid}>
            <div className={styles.aboutItem}>
              <Sparkles className={styles.aboutIcon} />
              <h4>Profound Healing</h4>
              <p>Moving beyond symptom management to resolve chronic conditions at their source.</p>
            </div>
            <div className={styles.aboutItem}>
              <MapPin className={styles.aboutIcon} />
              <h4>Clinical Sanctuary</h4>
              <p>5-star medical facilities with dedicated, private wings for absolute comfort.</p>
            </div>
            <div className={styles.aboutItem}>
              <Award className={styles.aboutIcon} />
              <h4>Global Expertise</h4>
              <p>Governed by licensed doctors and master therapists with decades of UAE experience.</p>
            </div>
          </div>

          <Link href="/about" className={styles.btnText}>
            Read Our Full Story <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* 2. Wing Selection (The "Split" reimagined below the fold) */}
      <section id="wings" className={styles.wingsSection}>
        <div className={styles.sectionHeader}>
          <h2>Choose Your Path to Healing</h2>
          <p>We feature two strictly segregated, world-class medical disciplines tailored to your specific needs.</p>
        </div>
        
        <div className={styles.wingsGrid}>
          {/* Ayurveda Card */}
          <Link href="/ayurveda" className={`${styles.wingCard} ${styles.cardAyurveda}`}>
            <div className={styles.cardOverlay}></div>
            <div className={styles.cardContent}>
              <Leaf className={styles.cardIcon} />
              <h3>Ayurveda</h3>
              <p>Authentic Panchakarma detox, Advanced athletic recovery protocols, and traditional therapeutic healing.</p>
              <span className={styles.cardAction}>
                Explore Ayurveda <ArrowRight size={16} />
              </span>
            </div>
          </Link>

          {/* Homeopathy Card */}
          <Link href="/homeopathy" className={`${styles.wingCard} ${styles.cardHomeopathy}`}>
            <div className={styles.cardOverlay}></div>
            <div className={styles.cardContent}>
              <Activity className={styles.cardIcon} />
              <h3>Homeopathy</h3>
              <p>Constitutional prescribing, chronic disease management, and pediatric allergy focus.</p>
              <span className={styles.cardAction}>
                Explore Homeopathy <ArrowRight size={16} />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* 3. The Sanctuary Experience (Trust Engine) */}
      <section className={styles.trustSection}>
        <div className={styles.trustIntro}>
          <h2>Uncompromising Luxury & Privacy</h2>
          <p>Licensed by the Department of Health (DOH #MF-90210), Wellnest Care guarantees clinical excellence wrapped in 5-star hospitality.</p>
        </div>
        
        <div className={styles.featuresGrid}>
          <div className={styles.featureBox}>
            <ShieldCheck className={styles.featureIcon} />
            <h4>7 Premium Treatment Rooms</h4>
            <p>Featuring hospital-grade sterilization and acoustic isolation for ultimate peace.</p>
          </div>
          <div className={styles.featureBox}>
            <div className={styles.wingBadgeOnyx}>Onyx Wing</div>
            <h4>Exclusive Male Privacy</h4>
            <p>A dedicated, distraction-free environment tailored specifically for our male patients.</p>
          </div>
          <div className={styles.featureBox}>
            <div className={styles.wingBadgeEmerald}>Emerald Wing</div>
            <h4>Exclusive Female Privacy</h4>
            <p>A serene, secure sanctuary operated by female specialists for our female patients.</p>
          </div>
          <div className={styles.featureBox}>
            <div className={styles.wingBadgeEmerald}>Onyx + Emerald</div>
            <h4>Complimentary Valet</h4>
            <p>Seamless arrival and departure at our front door, allowing you to focus entirely on your healing.</p>
          </div>
          <div className={styles.featureBox}>
            <CarFront className={styles.featureIcon} />
            <h4>Pick & Drop Transport</h4>
            <p>Restricted mobility? We offer complimentary transport within a 10km radius to ensure you get the care you need.</p>
          </div>
        </div>
      </section>

      {/* 4. Insurance Section */}
      <section className={styles.insuranceSection}>
        <div className={styles.insuranceContent}>
          <Shield className={styles.insuranceIcon} />
          <div className={styles.insuranceText}>
            <h2>Insurance Partners</h2>
            <p>Providing seamless care with all leading insurance providers in the UAE.</p>
          </div>
          <div className={styles.insuranceBadge}>
            Reimbursement Based Coverage
          </div>
        </div>
      </section>

      {/* 5. Clinical Leadership Highlight */}
      <section className={styles.leadershipSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.heroSubtitle} style={{ display: 'block', marginBottom: '1rem' }}>Clinical Excellence</span>
          <h2>Governed by Licensed Expertise</h2>
          <p>Meet the medical practitioners behind our dedicated therapeutic wings.</p>
        </div>

        <div className={styles.rowAyurveda}>
          {ayurvedaDoctors.map((doc, idx) => (
            <DoctorCard key={idx} doctor={doc} />
          ))}
        </div>

        <div className={styles.rowHomeopathy}>
          {homeopathyDoctors.map((doc, idx) => (
            <DoctorCard key={idx} doctor={doc} />
          ))}
        </div>

        <div className={styles.ctaWrapper}>
          <Link href="/team" className={styles.btnLarge}>
            Meet Our Full Medical Board <ArrowRight size={20} />
          </Link>
        </div>
      </section>

    </main>
  );
}
