"use client";

import { useState, useEffect } from "react";
import styles from "./UtilityBar.module.css";
import { MapPin, Phone, Clock, PhoneCall } from "lucide-react";

export default function UtilityBar() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev === 0 ? 1 : 0));
    }, 10000); // 10 seconds switch
    return () => clearInterval(timer);
  }, []);

  const tickerText = "✨ Premium Concierge: Complimentary Valet Parking & Home Pick-Drop for all clinical appointments. • M-Floor, Khalidiya, Abu Dhabi • Open: 8 AM - 10 PM • Call: +971 2 622 5233 • ";

  return (
    <>
      {/* Laptop: Top Bar */}
      <div className={`${styles.bar} ${styles.desktopOnly}`}>
        <div className={styles.contentWrapper}>
          <div className={`${styles.slide} ${index === 0 ? styles.active : ""}`}>
            <span><span className={styles.boldConcierge}>✨ Premium Concierge:</span> Complimentary Valet Parking & Home Pick-Drop for all clinical appointments.</span>
            <a href="tel:+97126225233" className={styles.desktopCallBtn}>
              <PhoneCall size={12} />
              Book Transport
            </a>
          </div>

          <div className={`${styles.slide} ${index === 1 ? styles.active : ""}`}>
            <div className={styles.contactInfo}>
              <div className={styles.infoItem}>
                <MapPin size={14} />
                <span>M-Floor, 1939, Al Qemsi Building, Khalidiya, Abu Dhabi</span>
              </div>
              <div className={styles.infoItem}>
                <Phone size={14} />
                <span>+971 2 622 5233 / +971 52 231 3874</span>
              </div>
              <div className={styles.infoItem}>
                <Clock size={14} />
                <span>Open: Mon-Sun 8:00 AM - 10:00 PM</span>
              </div>
            </div>
            <a href="tel:+97126225233" className={styles.desktopCallBtn}>
              <PhoneCall size={12} />
              Call Now
            </a>
          </div>
        </div>
      </div>

      {/* Mobile: Fixed Bottom Action Dock */}
      <div className={styles.mobileOnly}>
        <div className={styles.tickerArea}>
          <div className={styles.ticker}>
            <div className={styles.tickerContent}>
              {tickerText} {tickerText} {tickerText}
            </div>
          </div>
        </div>
        <div className={styles.actionArea}>
          <a href="tel:+97126225233" className={styles.callButton}>
            <PhoneCall size={14} />
            <span>Call</span>
          </a>
        </div>
      </div>
    </>
  );
}
