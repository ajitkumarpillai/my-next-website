export interface Doctor {
  name: string;
  role: string;
  qualification: string;
  expertise: string[];
  image: string;
  verified: boolean;
  type: 'ayurveda' | 'homeopathy';
}

export const ayurvedaDoctors: Doctor[] = [
  {
    name: "Dr. Vikram Sharma",
    role: "Lead Ayurvedic Physician",
    qualification: "BAMS, MD (Ayurveda) - 15+ Yrs Exp",
    expertise: ["Chronic Pain & Arthritis", "Panchakarma Detox", "Metabolic Disorders"],
    image: "/doctors/ayurveda-1.png",
    verified: true,
    type: 'ayurveda'
  },
  {
    name: "Dr. Lakshmi Sharma",
    role: "Senior Ayurvedic Consultant",
    qualification: "BAMS, PG Cert in Reproductive Health",
    expertise: ["Women's Hormonal Health", "Scalp & Hair Care", "Stress Management"],
    image: "/doctors/ayurveda-2.png",
    verified: true,
    type: 'ayurveda'
  }
];

export const homeopathyDoctors: Doctor[] = [
  {
    name: "Dr. Aisha Rahman",
    role: "Chief Homeopathic Consultant",
    qualification: "BHMS, MSc (Clinical Homeopathy) - 20+ Yrs Exp",
    expertise: ["Pediatric Hypersensitivity", "Constitutional Prescribing", "Autoimmune Support"],
    image: "/doctors/homeopathy-1.png",
    verified: true,
    type: 'homeopathy'
  },
  {
    name: "Dr. Sarah Jensen",
    role: "Clinical Homeopath",
    qualification: "BHMS, DIHom (UK)",
    expertise: ["Chronic Migraines", "Behavioral & Neuro-Support", "Skin Conditions"],
    image: "/doctors/homeopathy-2.png",
    verified: true,
    type: 'homeopathy'
  },
  {
    name: "Dr. Anya Sharma",
    role: "Integrative Homeopath",
    qualification: "BHMS, Certified Nutritionist",
    expertise: ["Allergic Rhinitis", "Gut-Brain Axis", "Integrative Wellness"],
    image: "/doctors/homeopathy-3.png",
    verified: true,
    type: 'homeopathy'
  }
];
