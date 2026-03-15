import Link from "next/link";
import styles from "./GlobalNav.module.css";

export default function GlobalNav() {
  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.navBrand} style={{ textDecoration: 'none' }}>Wellnest Care</Link>
      <div className={styles.navLinks}>
        <Link href="/">Home</Link>
        <div className={styles.dropdown}>
          <Link href="/ayurveda" className={styles.dropbtn}>Ayurveda ▼</Link>
          <div className={styles.dropdownContent}>
            <Link href="/ayurveda/conditions">Conditions We Treat</Link>
            <Link href="/ayurveda/treatments">Our Therapies</Link>
            <Link href="/packages">Wellness Programs</Link>
          </div>
        </div>
        <div className={styles.dropdown}>
          <Link href="/homeopathy" className={styles.dropbtn}>Homeopathy ▼</Link>
          <div className={styles.dropdownContent}>
            <Link href="/homeopathy/conditions">Conditions We Treat</Link>
            <Link href="/homeopathy/treatments">Our Therapies</Link>
          </div>
        </div>
        <Link href="/team">Our Experts</Link>
        <div className={styles.dropdown}>
          <Link href="/center" className={styles.dropbtn}>The Center ▼</Link>
          <div className={styles.dropdownContent}>
            <Link href="/center">The Sanctuary</Link>
            <Link href="/about">About Us</Link>
          </div>
        </div>
        <Link href="/journal">Blog</Link>
        <Link href="/contact" className={styles.btnNav}>Contact Us</Link>
      </div>
    </nav>
  );
}
