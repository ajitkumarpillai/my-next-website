"use client";

import styles from "./FloatingWhatsApp.module.css";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  const phoneNumber = "971551234567"; // UAE format without +
  const defaultMessage = "Hello Wellnest Care Concierge, I would like to inquire about a consultation.";
  
  const handleWhatsAppClick = () => {
    // Detect standard devices vs mobile
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <button 
      className={styles.fab} 
      onClick={handleWhatsAppClick}
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle size={32} />
      <span className={styles.tooltip}>Chat with Concierge</span>
    </button>
  );
}
