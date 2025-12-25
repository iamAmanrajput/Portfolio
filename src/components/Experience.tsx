import { SectionTitle } from "./ui/SectionTitle";
import { SectionBackground } from "./ui/SectionBackground";
import { ExperienceCard } from "./ui/ExperienceCard";

const experiences = [
  {
    title: "Full Stack Developer Intern",
    company: "Cyberguards Consulting (OPC) Pvt. Ltd.",
    period: "Aug 2025 - Nov 2025",
    description:
      "Designed, developed, and maintained robust full-stack web applications using the MERN stack. Contributed to core feature development, backend API integration, and performance optimization while adhering to best coding practices.",

    link: "https://cyberguards.in/",

    skills: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "TypeScript",
      "REST APIs",
      "Git",
      "GitHub",
    ],
  },
];

export function Experience() {
  return (
    <SectionBackground>
      <section id="experience">
        <div className="container mx-auto px-8">
          <SectionTitle subtitle="My journey from 'Hello World' to leading teams and building stuffs">
            Experience
          </SectionTitle>
          <div className="relative border-l-2 border-blue-600 dark:border-blue-500 max-w-5xl mx-auto space-y-10">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} {...exp} />
            ))}
          </div>
        </div>
      </section>
    </SectionBackground>
  );
}
