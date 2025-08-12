import { SectionTitle } from "./ui/SectionTitle";
import { SectionBackground } from "./ui/SectionBackground";
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
    period: "2019 - 2020",
  },
];

export function Education() {
  return (
    <SectionBackground>
      <section id="education">
        <div className="container mx-auto px-8">
          <SectionTitle subtitle="Where I learned theory and then forgot half of it while learning to actually code 😅">
            Education
          </SectionTitle>
          <div className="max-w-5xl mx-auto space-y-10">
            {education.map((edu, index) => (
              <EducationCard
                key={edu.degree}
                {...edu}
                isLast={index === education.length - 1}
              />
            ))}
          </div>
        </div>
      </section>
    </SectionBackground>
  );
}
