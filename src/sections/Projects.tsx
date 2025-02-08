import React from "react";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "Omni Food",
    description:
      "An AI based tech company which majorly focuses on consumer well-being through a healthy diet.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: "/images/project1.png",
    projectLink: "https://loquacious-haupia-108385.netlify.app/",
  },
  {
    title: "Pizzeria",
    description:
      "Designed and developed a responsive website for a local pizza shop, with a focus on user-friendly navigation and visual appeal.",
    tags: ["UX/UI Design", "JavaScript"],
    imageUrl: "/images/project2.png",
    projectLink: "https://pizzeria101.netlify.app/",
  },
  {
    title: "Aurora_Aisel Shop",
    description:
      "Designed and developed a fully functional e-commerce website for a local clothing brand, with a focus on user-friendly navigation.",
    tags: ["React", "JavaScript"],
    imageUrl: "/images/project3.png",
    projectLink: "https://aurora-aisel-shop.vercel.app",
  },
  {
    title: "Puluk Travel",
    description:
      "Developed a fully functional travel website for a local tourism company.",
    tags: ["React", "Typescript"],
    imageUrl: "/images/project4.png",
    projectLink: "https://puluk-travel.vercel.app",
  },
];

const Project: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50" id="projects">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-xl font-bold text-blue-500 mb-8">Recent Works</h2>
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
