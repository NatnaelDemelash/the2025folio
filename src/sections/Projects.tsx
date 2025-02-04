import React from "react";
import ProjectCard from "@/components/ProjectCard";

import Project1 from "@/assets/images/Project 1.png";
import Project2 from "@/assets/images/Project 2.png";
import Project3 from "@/assets/images/Project 3.png";
import Project4 from "@/assets/images/Project 4.png";

const projects = [
  {
    title: "Omni Food",
    description:
      "An AI based tech company which majorly focuses on consumer well-being through a healthy diet.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: Project1,
    projectLink: "https://loquacious-haupia-108385.netlify.app/", // Added https://
  },
  {
    title: "Pizzeria",
    description:
      "Designed and developed a responsive website for a local pizza shop, with a focus on user-friendly navigation and visual appeal.",
    tags: ["UX/UI Design", "JavaScript"],
    imageUrl: Project2,
    projectLink: "https://pizzeria101.netlify.app/", // Added https://
  },
  {
    title: "Aurora_Aisel Shop",
    description:
      "Designed and developed a fully functional e-commerce website for a local clothing brand, with a focus on user-friendly navigation",
    tags: ["React", "JavaScript"],
    imageUrl: Project3,
    projectLink: "https://aurora-aisel-shop.vercel.app", // Added https://
  },
  {
    title: "Puluk Travel",
    description:
      " Developed a fully functional travel website for a local tourism company.",
    tags: ["React", "Typescript"],
    imageUrl: Project4,
    projectLink: "https://puluk-travel.vercel.app", // Added https://
  },
];

const Project: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50" id="projects">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          My Recent Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              imageUrl={project.imageUrl}
              projectLink={project.projectLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
