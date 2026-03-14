import React from "react";

export default function SchemaMarkup() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Wellnest Care",
    "description": "Abu Dhabi's leading holistic center for Ayurveda and Homeopathy.",
    "url": "https://wellnestcare.ae",
    "telephone": "+971-55-123-4567",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Wellnest Tower",
      "addressLocality": "Abu Dhabi",
      "addressRegion": "AD",
      "addressCountry": "UAE"
    },
    "department": [
      {
        "@type": "MedicalClinic",
        "name": "Ayurveda",
        "medicalSpecialty": "Ayurvedic Medicine",
        "telephone": "+971-55-123-4568"
      },
      {
        "@type": "MedicalClinic",
        "name": "Homeopathy",
        "medicalSpecialty": "Homeopathic Medicine",
        "telephone": "+971-55-123-4569"
      }
    ],
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "DOH License",
        "name": "Abu Dhabi Department of Health Clinic License #MF-90210"
      }
    ]
  };

  const employeesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Physician",
          "name": "Dr. Tariq Al-Faisal",
          "jobTitle": "Medical Director",
          "identifier": {
            "@type": "PropertyValue",
            "name": "DOH License",
            "value": "DOH-10293"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Physician",
          "name": "Dr. Aisha Rahman",
          "jobTitle": "Chief Homeopath",
          "identifier": {
            "@type": "PropertyValue",
            "name": "DOH License",
            "value": "DOH-22419"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "Physician",
          "name": "Dr. Vikram Sharma",
          "jobTitle": "Lead Ayurvedic Physician",
          "identifier": {
            "@type": "PropertyValue",
            "name": "DOH License",
            "value": "DOH-30981"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@type": "Physician",
          "name": "Dr. Elena Rostova",
          "jobTitle": "Integrative Medicine Specialist",
          "identifier": {
            "@type": "PropertyValue",
            "name": "DOH License",
            "value": "DOH-41002"
          }
        }
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org/",
    "@type": "Service",
    "serviceType": "Clinical Athletic Recovery",
    "provider": {
      "@type": "MedicalClinic",
      "name": "Wellnest Care"
    },
    "areaServed": "Abu Dhabi",
    "category": ["Sports Medicine", "Wellness/Massage"]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(employeesSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}
