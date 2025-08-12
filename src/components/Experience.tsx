import { SectionTitle } from "./ui/SectionTitle";
import { SectionBackground } from "./ui/SectionBackground";
import { ExperienceCard } from "./ui/ExperienceCard";

const experiences = [
  {
    title: "Full Stack Developer Intern",
    company: "CodSoft",
    period: "Jan 2024 - Feb 2024",
    description:
      "Developing and maintaining web applications using MERN stack. Implemented key features that improved user engagement by 40%.",
    skills: ["React", "Node.js", "MongoDB", "Express.js", "TypeScript"],
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
