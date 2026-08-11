import { SectionTitle } from "./ui/SectionTitle";
import { SectionBackground } from "./ui/SectionBackground";
import { SkillCard } from "./ui/SkillCard";
import {
  SiHtml5,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiExpress,
  SiMongodb,
  SiCplusplus,
  SiGit,
  SiGithub,
  SiPostgresql,
  SiMysql,
  SiPrisma,
  SiRedis,
  SiDocker,
} from "react-icons/si";
import { FaNodeJs, FaPython, FaCss3Alt } from "react-icons/fa";

const skills = [
  {
    name: "HTML",
    icon: SiHtml5,
    color: "#e34f26",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "CSS",
    icon: FaCss3Alt,
    color: "#1572b6",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "#ffd600",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178c6",
    url: "https://www.typescriptlang.org/",
  },
  {
    name: "React",
    icon: SiReact,
    color: "#61dafb",
    url: "https://react.dev/",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "#000000",
    url: "https://nextjs.org/",
  },
  {
    name: "TailwindCSS",
    icon: SiTailwindcss,
    color: "#38bdf8",
    url: "https://tailwindcss.com/",
  },
  {
    name: "Redux",
    icon: SiRedux,
    color: "#764abc",
    url: "https://redux.js.org/",
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
    color: "#68a063",
    url: "https://nodejs.org/",
  },
  {
    name: "Express.js",
    icon: SiExpress,
    color: "#000000",
    url: "https://expressjs.com/",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "#47a248",
    url: "https://www.mongodb.com/",
  },
  {
    name: "MySQL",
    icon: SiMysql,
    color: "#3E6E93",
    url: "https://www.mysql.com/",
  },
  {
    name: "Postgresql",
    icon: SiPostgresql,
    color: "#336791",
    url: "https://www.postgresql.org/",
  },
  {
    name: "Prisma",
    icon: SiPrisma,
    color: "#186997",
    url: "https://www.prisma.io/",
  },
  {
    name: "Redis",
    icon: SiRedis,
    color: "#DC382D",
    url: "https://redis.io/",
  },
  {
    name: "Docker",
    icon: SiDocker,
    color: "#2496ED",
    url: "https://www.docker.com/",
  },
  {
    name: "C++",
    icon: SiCplusplus,
    color: "#00599c",
    url: "https://cplusplus.com/",
  },
  {
    name: "Python",
    icon: FaPython,
    color: "#306998",
    url: "https://www.python.org/",
  },
  {
    name: "Git",
    icon: SiGit,
    color: "#f34f29",
    url: "https://git-scm.com/",
  },
  {
    name: "GitHub",
    icon: SiGithub,
    color: "#000000",
    url: "https://github.com/",
  },
];

export function Skills() {
  return (
    <SectionBackground>
      <section id='skills'>
        <div className='container mx-auto px-6'>
          <SectionTitle subtitle="The tech stack I've been collecting like Pokémon cards - gotta catch 'em all! 🎯">
            Skills
          </SectionTitle>

          <div className='max-w-6xl mx-auto grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-4 sm:gap-6'>
            {skills.map((tech) => (
              <SkillCard
                key={tech.name}
                name={tech.name}
                icon={tech.icon}
                color={tech.color}
                url={tech.url}
              />
            ))}
          </div>
        </div>
      </section>
    </SectionBackground>
  );
}
