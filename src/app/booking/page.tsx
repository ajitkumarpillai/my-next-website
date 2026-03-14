"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export default function BookingEngine() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    department: "",
    service: "",
    practitioner: "",
    date: "",
  });

  const handleSelect = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
    setStep(step + 1);
  };

  return (
    <main className={styles.container}>
      <div className={styles.bookingWrapper}>
        <div className={styles.progressContainer}>
          <div className={`${styles.progressStep} ${step >= 1 ? styles.active : ""}`}>1. Department</div>
          <div className={`${styles.progressStep} ${step >= 2 ? styles.active : ""}`}>2. Service</div>
          <div className={`${styles.progressStep} ${step >= 3 ? styles.active : ""}`}>3. Specialist</div>
          <div className={`${styles.progressStep} ${step >= 4 ? styles.active : ""}`}>4. Schedule</div>
        </div>

        <div className={styles.stepContainer}>
          {step === 1 && (
            <div className={styles.stepContent}>
              <h2>Select Department</h2>
              <div className={styles.optionsGrid}>
                <button
                  className={styles.optionBtn}
                  onClick={() => handleSelect("department", "Ayurveda")}
                >
                  Ayurveda
                </button>
                <button
                  className={styles.optionBtn}
                  onClick={() => handleSelect("department", "Homeopathy")}
                >
                  Homeopathy
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className={styles.stepContent}>
              <h2>Select Service ({formData.department})</h2>
              <button className={styles.backStep} onClick={() => setStep(1)}>Back</button>
              <div className={styles.optionsGrid}>
                {formData.department === "Ayurveda" ? (
                  <>
                    <button className={styles.optionBtn} onClick={() => handleSelect("service", "Panchakarma")}>Panchakarma</button>
                    <button className={styles.optionBtn} onClick={() => handleSelect("service", "Clinical Athletic Recovery")}>Athletic Recovery</button>
                  </>
                ) : (
                  <>
                    <button className={styles.optionBtn} onClick={() => handleSelect("service", "Constitutional")}>Constitutional Review</button>
                    <button className={styles.optionBtn} onClick={() => handleSelect("service", "Pediatric")}>Pediatric Care</button>
                  </>
                )}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className={styles.stepContent}>
              <h2>Select Preferred Practitioner / Gender Preference</h2>
              <button className={styles.backStep} onClick={() => setStep(2)}>Back</button>
              <div className={styles.optionsGrid}>
                <button className={styles.optionBtn} onClick={() => handleSelect("practitioner", "Male Only (Onyx Wing)")}>
                  Male Practitioner (Onyx Wing)
                </button>
                <button className={styles.optionBtn} onClick={() => handleSelect("practitioner", "Female Only (Emerald Wing)")}>
                  Female Practitioner (Emerald Wing)
                </button>
                <button className={styles.optionBtn} onClick={() => handleSelect("practitioner", "No Preference")}>
                  No Preference
                </button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className={styles.stepContent}>
              <h2>Select Date & Time</h2>
              <button className={styles.backStep} onClick={() => setStep(3)}>Back</button>
              <div className={styles.calendarMockup}>
                <input 
                  type="date" 
                  className={styles.dateInput}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                />
                <button 
                  className={styles.confirmBtn}
                  onClick={() => setStep(5)}
                  disabled={!formData.date}
                >
                  Confirm Booking
                </button>
              </div>
            </div>
          )}

          {step === 5 && (
            <div className={styles.successContent}>
              <CheckCircle2 size={64} className={styles.successIcon} />
              <h2>Booking Confirmed</h2>
              <p>Your session is reserved for: <strong>{formData.date}</strong></p>
              <p>Service: {formData.department} - {formData.service}</p>
              <Link href="/" className={styles.returnHome}>
                Return to Home
              </Link>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
