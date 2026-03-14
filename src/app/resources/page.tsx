"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";
import { ArrowLeft, Download, Library, Search, FileText } from "lucide-react";

const glossaryData = [
  {
    term: "Abhyanga",
    def: "A full-body massage using individualized, warm herbal oils to nourish the skin, pacify Vata dosha, and mobilize toxins."
  },
  {
    term: "Agnisara",
    def: "A yogic and Ayurvedic technique for stimulating the digestive fire (Agni) through rhythmic abdominal contractions."
  },
  {
    term: "Basti",
    def: "Medicated enema therapy, considered the 'mother' of all Panchakarma treatments for its deep neurological and Vata-balancing effects."
  },
  {
    term: "Constitutional Type",
    def: "The unique physical and psychological blueprint of an individual, used in both Ayurveda (Prakriti) and Homeopathy to tailor treatment."
  },
  {
    term: "Dosha (Vata, Pitta, Kapha)",
    def: "The three fundamental biological energies in Ayurveda that govern human physical and mental processes."
  },
  {
    term: "Dilution & Potentization",
    def: "The process of preparing homeopathic remedies through serial dilution and succussion (vigorous shaking) to unlock medicinal energy."
  },
  {
    term: "Gunas",
    def: "The 20 fundamental qualities (e.g., heavy/light, hot/cold) used in Ayurveda to categorize substances and their effects on the body."
  },
  {
    term: "Materia Medica",
    def: "The comprehensive encyclopedia of homeopathic remedies, detailing the symptom profiles and constitutional types for each substance."
  },
  {
    term: "Marma Points",
    def: "107 vital anatomical junctions where nerves, bones, and muscles intersect. Crucial for structural recovery and energy flow."
  },
  {
    term: "Miasm",
    def: "In Homeopathy, an underlying hereditary or acquired predisposition toward certain types of chronic disease patterns."
  },
  {
    term: "Nasya",
    def: "The administration of medicated oils or powders through the nasal passages to clear the head and nourish the nervous system."
  },
  {
    term: "Ojas",
    def: "The subtle essence of vitality and immunity, derived from perfectly digested food and a balanced lifestyle."
  },
  {
    term: "Prakriti",
    def: "An individual's unique birth constitution, determined at the moment of conception, representing their natural state of balance."
  },
  {
    term: "Purvakarma",
    def: "The preparatory phase of Panchakarma, involving internal and external oleation to mobilize toxins for elimination."
  },
  {
    term: "Similia Similibus Curentur",
    def: "The core principle of Homeopathy: 'Like Cures Like.' A substance that causes symptoms in a healthy person can cure those symptoms in a sick person."
  },
  {
    term: "Swedana",
    def: "Therapeutic sweating induced by steam, often infused with medicinal herbs, to open the channels and liquefy toxins."
  },
  {
    term: "Virechana",
    def: "Clinical purgation therapy used to clear excess Pitta and toxins from the liver, gallbladder, and small intestine."
  }
];

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredGlossary = glossaryData.filter(item => 
    item.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.def.toLowerCase().includes(searchQuery.toLowerCase())
  ).sort((a, b) => a.term.localeCompare(b.term));

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Patient Resource Center</h1>
        <p className={styles.subtitle}>
          Empower your healing journey with our preparatory guides and comprehensive clinical glossary.
        </p>
      </header>

      <section className={styles.contentGrid}>
        <div className={styles.resourceSection}>
          <h2><Download className={styles.icon} /> Preparatory & Post-Care Guides</h2>
          <div className={styles.cardList}>
            <div className={styles.resourceCard}>
              <div className={styles.cardInfo}>
                <h3>Purvakarma Preparation PDF</h3>
                <p>The 7-day diet protocol to prepare your body for Panchakarma detox.</p>
              </div>
              <button className={styles.downloadBtn}>Download PDF</button>
            </div>

            <div className={styles.resourceCard}>
              <div className={styles.cardInfo}>
                <div style={{ color: 'var(--color-ayurveda-primary)', fontWeight: '600', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <FileText size={18} /> Essential Clinical Guide
                </div>
                <h3>Virechana: Things to Take Care</h3>
                <p>Crucial pre-purgation restrictions and post-treatment 'Samsarjana Krama' (special diet) for blood purification.</p>
              </div>
              <button className={styles.downloadBtn} style={{ background: 'var(--color-ayurveda-primary)' }}>Download Guide</button>
            </div>

            <div className={styles.resourceCard}>
              <div className={styles.cardInfo}>
                <h3>Homeopathic Intake Form</h3>
                <p>Complete this comprehensive history questionnaire prior to your constitutional assessment.</p>
              </div>
              <button className={styles.downloadBtn}>Download Form</button>
            </div>
          </div>
        </div>

        <div className={styles.resourceSection}>
          <h2><Library className={styles.icon} /> Holistic Glossary</h2>
          
          <div className={styles.searchContainer}>
            <Search className={styles.searchIcon} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-muted)', pointerEvents: 'none' }} size={20} />
            <input 
              type="text" 
              placeholder="Search clinical terms (e.g. 'Virechana', 'Miasm')..." 
              className={styles.searchInput}
              style={{ paddingLeft: '3rem' }}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className={styles.glossaryGrid}>
            {filteredGlossary.length > 0 ? (
              filteredGlossary.map((item, idx) => (
                <div className={styles.glossaryItem} key={idx}>
                  <strong>{item.term}</strong>
                  <p>{item.def}</p>
                </div>
              ))
            ) : (
              <div className={styles.noResults}>
                No clinical terms found matching "{searchQuery}".
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
