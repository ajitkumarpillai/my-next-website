"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./HeroGallery.module.css";

const slides = [
  {
    id: 1,
    src: "/hero-ayurveda.png",
    alt: "Ayurvedic Clinical Excellence",
    title: "Authentic Ayurvedic Healing",
    subtitle: "Precision traditional protocols for deep neurological and physical restoration",
  },
  {
    id: 2,
    src: "/hero-homeopathy.png",
    alt: "Clinical Homeopathy Consultation",
    title: "Expert Clinical Homeopathy",
    subtitle: "Evidence-based constitutional care by world-class licensed practitioners",
  },
  {
    id: 3,
    src: "/hero-recovery.png",
    alt: "Athletic Recovery Specialist",
    title: "Precision Athletic Recovery",
    subtitle: "Anatomically targeted therapies for peak performance and injury prevention",
  },
  {
    id: 4,
    src: "/hero-room.png",
    alt: "Premium Treatment Room",
    title: "The Onyx & Emerald Wings",
    subtitle: "7 ultra-premium suites designed for total privacy and clinical excellence",
  },
];

export default function HeroGallery() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.heroContainer}>
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className={styles.imageWrapper}
        >
          <Image
            src={slides[current].src}
            alt={slides[current].alt}
            fill
            priority
            className={styles.image}
          />
          <div className={styles.overlay} />
        </motion.div>
      </AnimatePresence>

      <div className={styles.content}>
        <motion.h1
          key={`title-${current}`}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className={styles.title}
        >
          {slides[current].title}
        </motion.h1>
        <motion.p
          key={`subtitle-${current}`}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className={styles.subtitle}
        >
          {slides[current].subtitle}
        </motion.p>
      </div>

      <div className={styles.indicators}>
        {slides.map((_, index) => (
          <button
            key={index}
            className={`${styles.indicator} ${
              index === current ? styles.activeIndicator : ""
            }`}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
