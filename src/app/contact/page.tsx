"use client";

import Link from "next/link";
import styles from "./page.module.css";
import { ArrowLeft, MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Visit Our Sanctuary</h1>
        <p className={styles.subtitle}>
          Located in the heart of Abu Dhabi. Connect with our concierge to arrange your preliminary consultation.
        </p>
      </header>

      <section className={styles.contentGrid}>
        <div className={styles.infoCard}>
          <h2>Clinic Information</h2>
          <div className={styles.infoList}>
            <div className={styles.infoItem}>
              <MapPin className={styles.icon} />
              <div>
                <strong>Address:</strong>
                <p>Level 4, Wellnest Tower<br/>Al Reem Island, Abu Dhabi, UAE</p>
              </div>
            </div>
            
            <div className={styles.infoItem}>
              <Phone className={styles.icon} />
              <div>
                <strong>Connect:</strong>
                <p>+971 55 123 4567<br/>Whatsapp Support Available</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <Mail className={styles.icon} />
              <div>
                <strong>Email:</strong>
                <p>concierge@wellnestcare.ae</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <Clock className={styles.icon} />
              <div>
                <strong>Hours of Healing:</strong>
                <p>Mon - Sat: 8:00 AM - 8:00 PM<br/>Sunday: Closed for deep cleaning</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.formCard}>
          <h2>General Inquiry</h2>
          <form className={styles.contactForm}>
            <div className={styles.formGroup}>
              <label>Full Name</label>
              <input type="text" placeholder="Your name" required />
            </div>
            <div className={styles.formGroup}>
              <label>Email Address</label>
              <input type="email" placeholder="Your email address" required />
            </div>
            <div className={styles.formGroup}>
              <label>How can we assist you?</label>
              <textarea placeholder="Describe your inquiry..." rows={4} required></textarea>
            </div>
            <button type="button" className={styles.submitBtn}>
              Send Inquiry
            </button>
            <p className={styles.bookingNote}>
              Ready to schedule? Utilize our <Link href="/booking">Smart Booking Engine</Link>.
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}
