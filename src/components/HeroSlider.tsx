"use client";

import { useState, useEffect } from "react";
import styles from "./HeroSlider.module.css";

const slides = [
  {
    image: "/hero-ayurveda.png",
    alt: "Authentic Ayurveda"
  },
  {
    image: "/hero-homeopathy.png",
    alt: "Expert Homeopathy"
  },
  {
    image: "/hero-recovery.png",
    alt: "Athletic Recovery"
  },
  {
    image: "/hero-room.png",
    alt: "Luxury Treatment Room"
  }
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000); 
    
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`${styles.slide} ${index === current ? styles.active : ""}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        />
      ))}
    </>
  );
}
