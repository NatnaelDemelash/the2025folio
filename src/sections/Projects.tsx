import React from "react";
import ProjectCard from "@/components/ProjectCard";

import Project1 from "@/assets/images/Project 1.png";
import Project2 from "@/assets/images/Project 2.png";
import Project3 from "@/assets/images/Project 3.png";
import Project4 from "@/assets/images/Project 4.png";

const projects = [
  {
    title: "E-Commerce Website",
    description:
      "Developed a fully functional e-commerce platform using React and Node.js, complete with user authentication.",
    tags: ["React", "Node.js"],
    imageUrl: Project1,
    projectLink: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "Designed and built a sleek personal portfolio showcasing a photographer’s skills, projects, and achievements.",
    tags: ["UX/UI Design", "React", "Node.js"],
    imageUrl: Project2,
    projectLink: "#",
  },
  {
    title: "Jewelry Website",
    description:
      "Created a dynamic Jewelry Website using React for the frontend and Node.js for the backend.",
    tags: ["Prototypes", "React", "Node.js"],
    imageUrl: Project3,
    projectLink: "#",
  },
  {
    title: "Restaurant Website",
    description:
      "Crafted a responsive website for a local restaurant, emphasizing user-friendly navigation and enticing visuals.",
    tags: ["React", "Node.js"],
    imageUrl: Project4,
    projectLink: "#",
  },
];

const Project: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50">
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
