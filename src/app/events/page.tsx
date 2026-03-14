import Link from "next/link";
import styles from "./page.module.css";
import { ArrowLeft, Calendar, MapPin, Users, Heart } from "lucide-react";

export const metadata = {
  title: "Holistic Events & Workshops | Wellnest Care",
  description: "Join our Abu Dhabi community for guided meditation, dosha-aligned yoga, and integrative health seminars.",
};

const events = [
  {
    title: "Full Moon Trataka Meditation",
    date: "March 28, 2026",
    time: "7:00 PM - 8:30 PM",
    practitioner: "Dr. Vikram Sharma",
    location: "The Lotus Studio (Main Center)",
    type: "Meditation",
    spots_left: 4,
    description: "An ancient yogic purification practice involving candle gazing to improve concentration, clear the mind of erratic Vata energy, and promote deep restorative sleep."
  },
  {
    title: "Homeopathy for Pediatric Immunity",
    date: "April 05, 2026",
    time: "10:00 AM - 11:30 AM",
    practitioner: "Dr. Aisha Rahman",
    location: "Emerald Wing Conference Room",
    type: "Seminar",
    spots_left: 12,
    description: "A free constitutional seminar for mothers. Learn how to naturally bolster your child's innate immune response against seasonal allergies and recurrent viral infections without over-reliance on antibiotics."
  },
  {
    title: "Postnatal Core & Pelvic Floor Recovery",
    date: "Weekly (Every Tuesday)",
    time: "9:00 AM - 10:00 AM",
    practitioner: "Dr. Elena Rostova",
    location: "Emerald Wing Studio (Female Only)",
    type: "Integrative Movement",
    spots_left: 8,
    description: "A safe, clinically supervised movement class focusing on diastasis recti repair and pelvic floor strengthening using a fusion of Pilates principles and Ayurvedic Marma stimulation."
  }
];

export default function EventsPage() {
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Community Calendar</h1>
        <p className={styles.subtitle}>
          Healing happens in connection. Join our expert-led seminars, clinical movement classes, and guided meditations.
        </p>
      </header>

      <section className={styles.eventsGrid}>
        {events.map((evt, index) => (
          <article key={index} className={styles.eventCard}>
            <div className={styles.dateBlock}>
              <Calendar className={styles.calendarIcon} />
              <div className={styles.dateTime}>
                <span className={styles.date}>{evt.date}</span>
                <span className={styles.time}>{evt.time}</span>
              </div>
            </div>

            <div className={styles.eventContent}>
              <span className={styles.eventType}>{evt.type}</span>
              <h2 className={styles.eventTitle}>{evt.title}</h2>
              <p className={styles.eventDesc}>{evt.description}</p>
              
              <div className={styles.eventMeta}>
                <div className={styles.metaItem}>
                  <Heart size={16} className={styles.metaIcon} />
                  <span>Led by: {evt.practitioner}</span>
                </div>
                <div className={styles.metaItem}>
                  <MapPin size={16} className={styles.metaIcon} />
                  <span>{evt.location}</span>
                </div>
                <div className={styles.metaItem}>
                  <Users size={16} className={styles.metaIcon} />
                  <span className={evt.spots_left < 5 ? styles.urgentSpot : ''}>
                    {evt.spots_left} spots remaining
                  </span>
                </div>
              </div>
            </div>

            <div className={styles.cardAction}>
              <button className={styles.rsvpBtn}>RSVP via WhatsApp</button>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
