import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import styles from "./DoctorCard.module.css";
import { Doctor } from "@/data/doctors";

interface DoctorCardProps {
  doctor: Doctor;
}

export default function DoctorCard({ doctor }: DoctorCardProps) {
  const variantClass = doctor.type === 'ayurveda' ? styles.ayurveda : styles.homeopathy;

  return (
    <div className={`${styles.card} ${variantClass}`}>
      <div className={styles.imageWrapper}>
        <Image 
          src={doctor.image} 
          alt={doctor.name} 
          width={400} 
          height={400} 
          className={styles.profileImage}
        />
        <div className={styles.overlay} />
      </div>
      <div className={styles.cardBody}>
        <div className={styles.cardHeader}>
          <h3 className={styles.name}>{doctor.name}</h3>
          <span className={styles.role}>{doctor.role}</span>
        </div>
        <div className={styles.details}>
          <span className={styles.qualification}>{doctor.qualification}</span>
          <ul className={styles.expertise}>
            {doctor.expertise.map((exp, i) => (
              <li key={i} className={styles.expertiseItem}>{exp}</li>
            ))}
          </ul>
        </div>
        <div className={styles.cardFooter}>
          <div className={styles.verificationBadge}>
            <ShieldCheck size={16} className={styles.shieldIcon} />
            <span>DOH Verified</span>
          </div>
        </div>
      </div>
    </div>
  );
}
