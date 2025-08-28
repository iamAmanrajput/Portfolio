import { User2, Code2, Lightbulb } from "lucide-react";
import { GoGoal } from "react-icons/go";
import { SectionTitle } from "./ui/SectionTitle";
import { SectionBackground } from "./ui/SectionBackground";

const aboutSections = [
  {
    icon: User2,
    title: "Who I Am",
    description: [
      "Full-stack developer with a passion for software engineering.",
      "Skilled in building scalable, efficient applications.",
      "Continuously learning to stay ahead in technology.",
    ],
    color: "bg-blue-600",
  },
  {
    icon: Code2,
    title: "What I Do",
    description: [
      "Build fast, scalable web apps with modern frameworks.",
      "Optimize code for efficiency and maintainability.",
      "Engage with open-source and stay updated with industry trends.",
    ],
    color: "bg-purple-600",
  },
  {
    icon: GoGoal,
    title: "My Goals",
    description: [
      "Create impactful tech solutions to address real-world challenges.",
      "Grow as a full-stack developer with leading-edge tools.",
      "Support the developer community through contributions.",
    ],
    color: "bg-green-600",
  },
  {
    icon: Lightbulb,
    title: "My Philosophy",
    description: [
      "Technology should simplify and enhance everyday life.",
      "Effective software solves problems with clarity and purpose.",
      "Continuous learning is essential for growth in tech.",
    ],
    color: "bg-orange-600",
  },
];

export function About() {
  return (
    <SectionBackground>
      <section id="about">
        <div className="container mx-auto px-6">
          <SectionTitle subtitle="Just a curious developer who loves turning ideas into reality (and debugging at 2 AM)">
            About Me
          </SectionTitle>

          {/* Introduction */}
          <div className="max-w-5xl mx-auto mb-10 text-center">
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Hey there! 👋 I'm{" "}
              <span className="text-blue-600 font-semibold">Aman Kumar</span>, a
              MERN Stack Developer and a problem solver. Currently, I am in the
              7th semester of my Computer Science Engineering degree. I love
              exploring new technologies and building impactful solutions.I
              enjoy turning ideas into scalable web applications and tackling
              complex coding problems.
            </p>
            <div className="mt-6 flex justify-center">
              <span className="text-sm sm:text-base inline-block bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-4 py-2 rounded-lg shadow">
                🚀 I like to build products and solve problems
              </span>
            </div>
          </div>

          {/* About Section Cards */}
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {aboutSections.map(({ icon: Icon, title, description, color }) => (
              <div key={title} className="relative group">
                {/* Background Effect */}
                <div
                  className={`absolute inset-0 ${color} rounded-xl blur-xl opacity-20 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none`}
                />

                {/* Card Content */}
                <div className="relative bg-white dark:bg-gray-900 p-6 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md hover:shadow-lg transition-transform duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center mb-4 space-x-4">
                    {/* Icon */}
                    <div className={`p-3 ${color} rounded-lg`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                      {title}
                    </h3>
                  </div>
                  <ul className="text-sm sm:text-base list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-1">
                    {description.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SectionBackground>
  );
}
