import Link from "next/link";
import { Facebook, Instagram, Navigation, MapPin, Phone, Mail } from "lucide-react";
import styles from "./GlobalFooter.module.css";

export default function GlobalFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerGrid}>
        {/* Brand & Socials */}
        <div className={styles.footerBrand}>
          <h3>Wellnest Care</h3>
          <p>Integrated Holistic Excellence.</p>
          <div className={styles.socialLinks}>
            <a href="https://www.facebook.com/wellnestnaturalcare/" target="_blank" rel="noopener noreferrer"><Facebook size={20} /></a>
            <a href="https://www.instagram.com/wellnestnaturalcare/" target="_blank" rel="noopener noreferrer"><Instagram size={20} /></a>
            <a href="https://maps.app.goo.gl/n1nCk2D5hM7sBs8V8" target="_blank" rel="noopener noreferrer"><Navigation size={20} /></a>
          </div>
        </div>
        
        {/* Quick Links */}
        <div className={styles.footerLinks}>
          <h4>Quick Links</h4>
          <Link href="/team">Our Experts</Link>
          <Link href="/packages">Wellness Packages</Link>
          <Link href="/journal">The Blog</Link>
          <Link href="/resources">Patient Resources</Link>
          <Link href="/faq">Patient FAQ</Link>
        </div>
        
        {/* Contact Details */}
        <div className={styles.footerContact}>
          <h4>Contact Details</h4>
          <p><MapPin size={16} className={styles.contactIcon} /> M-Floor, 1939, Al Qemsi Building, Khalidiya, Abu Dhabi</p>
          <p><Phone size={16} className={styles.contactIcon} /> +971 2 622 5233</p>
          <p><Phone size={16} className={styles.contactIcon} /> +971 52 231 3874</p>
          <p><Mail size={16} className={styles.contactIcon} /> contact@wellnestcare.com</p>
        </div>
        
        {/* Map Embed */}
        <div className={styles.footerMap}>
          <iframe 
             width="100%" 
             height="200" 
             style={{ border: 0, borderRadius: '4px' }} 
             loading="lazy" 
             allowFullScreen 
             src={`https://maps.google.com/maps?q=Wellnest%20Natural%20Care%20Khalidiya%20Abu%20Dhabi&t=&z=14&ie=UTF8&iwloc=&output=embed`}>
          </iframe>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} Wellnest Natural Care. All rights reserved. DOH License #MF-90210</p>
      </div>
    </footer>
  );
}
