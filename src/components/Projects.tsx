import { SectionTitle } from "./ui/SectionTitle";
import { SectionBackground } from "./ui/SectionBackground";
import { ProjectCard } from "./ui/ProjectCard";
import {
  SiReact,
  SiNodedotjs,
  SiFirebase,
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiMongodb,
  SiPrisma,
  SiShadcnui,
  SiFramer,
  SiSocketdotio,
  SiStripe,
  SiAppwrite,
  SiExpress,
  SiRazorpay,
} from "react-icons/si";

// Define reusable tech stack icons & colors
const techStacks = {
  react: { icon: SiReact, name: "React", color: "#00cfff" },
  node: { icon: SiNodedotjs, name: "Node.js", color: "#228b22" },
  firebase: { icon: SiFirebase, name: "Firebase", color: "#fbbf00" },
  tailwind: { icon: SiTailwindcss, name: "Tailwind CSS", color: "#06b6d4" },
  typescript: { icon: SiTypescript, name: "TypeScript", color: "#1f6feb" },
  next: { icon: SiNextdotjs, name: "Next.js", color: "#" },
  mongodb: { icon: SiMongodb, name: "MongoDB", color: "#10b981" },
  prisma: { icon: SiPrisma, name: "Prisma", color: "#186997" },
  shadcn: { icon: SiShadcnui, name: "ShadCN", color: "#6366f1" },
  framer: { icon: SiFramer, name: "Framer Motion", color: "#2563eb" },
  socket: { icon: SiSocketdotio, name: "Socket.io", color: "#" },
  stripe: { icon: SiStripe, name: "Stripe", color: "#5b4df1" },
  appwrite: { icon: SiAppwrite, name: "Appwrite", color: "#ff3d00" },
  express: { icon: SiExpress, name: "Express", color: "#10b981" },
  razorpay: { icon: SiRazorpay, name: "RazorPay", color: "#00cfff" },
};

const projects = [
  {
    title: "NexLib",
    description:
      "MERN-based library management portal with book tracking, automated fine calculation, and queue handling. Integrated with Razorpay for online payments and built with a responsive UI.",
    image: "/assets/nexlib.png",
    link: "https://nexlib.in/",
    github: "https://github.com/iamAmanrajput/Nexlib",
    techStack: [
      techStacks.react,
      techStacks.node,
      techStacks.express,
      techStacks.mongodb,
      techStacks.razorpay,
      techStacks.tailwind,
      techStacks.shadcn,
      techStacks.framer,
    ],
  },
  {
    title: "NeoMart",
    description:
      "Full-featured MERN e-commerce platform with secure payments, product filtering, cart management, and an admin panel for store operations. Designed with a responsive modern UI.",
    image: "/assets/NeoMart.png",
    link: "https://neomarts.vercel.app/",
    github: "https://github.com/iamAmanrajput/NeoMart",
    techStack: [
      techStacks.react,
      techStacks.node,
      techStacks.express,
      techStacks.mongodb,
      techStacks.razorpay,
      techStacks.tailwind,
      techStacks.shadcn,
    ],
  },

  {
    title: "Portfolio",
    description:
      "Personal portfolio with project showcase, animated transitions, and responsive design. Built to present my skills and make it easy for recruiters to connect.",
    image: "/assets/Portfolio.png",
    link: "https://aman-rajput.vercel.app/",
    github: "https://github.com/iamAmanrajput/Portfolio",
    techStack: [
      techStacks.react,
      techStacks.tailwind,
      techStacks.framer,
      techStacks.typescript,
    ],
  },
];

export function Projects() {
  return (
    <SectionBackground>
      <section id="projects">
        <div className="container mx-auto px-8">
          <SectionTitle subtitle="My code babies - they're not perfect, but they're mine and I love them">
            Projects
          </SectionTitle>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>
    </SectionBackground>
  );
}
