"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./DoctorCarousel.module.css";
import DoctorCard from "./DoctorCard";
import { ayurvedaDoctors, homeopathyDoctors } from "@/data/doctors";

export default function DoctorCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const allDoctors = [...ayurvedaDoctors, ...homeopathyDoctors];

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.scrollArea} ref={scrollRef}>
        {allDoctors.map((doc, idx) => (
          <div key={idx} className={styles.cardWrapper}>
            <DoctorCard doctor={doc} />
          </div>
        ))}
      </div>

      <div className={styles.controls}>
        <button 
          className={styles.navButton} 
          onClick={() => scroll("left")}
          aria-label="Previous specialist"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          className={styles.navButton} 
          onClick={() => scroll("right")}
          aria-label="Next specialist"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}
