"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import GlobalNav from "./GlobalNav";
import UtilityBar from "./UtilityBar";
import styles from "./NavigationWrapper.module.css";

export default function NavigationWrapper() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`${styles.headerStack} ${scrolled ? styles.scrolled : ""}`}>
        <div className={styles.utilityWrapper}>
          <UtilityBar />
        </div>
        <div className={styles.navWrapper}>
          <GlobalNav />
        </div>
      </header>
      {/* Spacer to prevent content jump behind fixed header */}
      <div style={{ height: "120px" }} />
    </>
  );
}
