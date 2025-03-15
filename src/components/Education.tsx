import React from "react";
import { SectionTitle } from "./ui/SectionTitle";
import { EducationCard } from "./ui/EducationCard";

const education = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    institution: "PDM University, Haryana",
    period: "2022 - 2026",
  },
  {
    degree: "Senior Secondary (XII)",
    institution: "Govt. Boys Sr. Sec. School, Delhi",
    period: "2021 - 2022",
  },
  {
    degree: "Secondary (X)",
    institution: "Akash Model Sr. Sec. School, Delhi",
    period: "2020 - 2021",
  },
];

export function Education() {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-8">
        <SectionTitle>Education</SectionTitle>
        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu) => (
            <EducationCard key={edu.degree} {...edu} />
          ))}
        </div>
      </div>
    </section>
  );
}
