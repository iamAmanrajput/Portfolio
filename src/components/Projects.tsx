import React from "react";
import { SectionTitle } from "./ui/SectionTitle";
import { ProjectCard } from "./ui/ProjectCard";

const projects = [
  {
    title: "NeoMart",
    description:
      "Mern Stack Ecommerce Website With Payment Gateway and Admin Panel",
    image: "/assets/NeoMart.png",
    link: "https://neomarts.vercel.app/",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "ZapChat",
    description: "Real-time chat app with MERN stack, dark UI, and WebSockets.",
    image: "/assets/ZapChat.png",
    link: "https://zapchats.vercel.app/",
    tags: ["React", "Tailwind CSS", "Node.js", "MongoDB", "websockets"],
  },
  {
    title: "Portfolio",
    description: "Personal portfolio website showcasing projects and skills",
    image: "/assets/Portfolio.png",
    link: "https://aman-rajput.vercel.app/",
    tags: ["React", "Tailwind CSS", "TypeScript", "Framer Motion"],
  },
  {
    title: "CourseNest",
    description: "Mern Stack Course Buying and Selling Website",
    image: "/assets/CourseNest.png",
    link: "https://coursenest.vercel.app/",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Password-Manager",
    description: "Store and manage your passwords in a secure way",
    image: "/assets/PassManager.png",
    link: "https://pass-op-aman.vercel.app/",
    tags: ["React", "Tailwind CSS", "MongoDB"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-8">
        <SectionTitle>Projects</SectionTitle>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
