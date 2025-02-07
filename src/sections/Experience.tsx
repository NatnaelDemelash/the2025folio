"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    year: "2024 - Present",
    role: "Software Engineer",
    company: "GoodayOn",
    description: `Contributed to the development of web applications using JavaScript, Vue.js, and React.js. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Vue", "Tailwind", "React", "Firebase"],
  },
  {
    year: "2021 - 2023",
    role: "Operation Team Lead",
    company: "GoodayOn",
    description: `Successfully utilized CRM software tools, including Trello and Jira, to streamline and enhance project management processes.`,
    technologies: ["Trello", "Jira"],
  },
];

export default function Experience() {
  return (
    <div className="max-w-4xl mx-auto p-8 relative bg-orange">
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-900">
        Experience
      </h2>
      <div className="relative border-l-4 border-blue-400 rounded-md pl-6 space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg p-6 rounded-2xl border border-gray-200 hover:shadow-xl transition-all relative"
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute -left-7 w-6 h-6 bg-blue-400 rounded-full border-4 border-white"></div>
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-semibold text-gray-800">
                {exp.role} - {exp.company}
              </h3>
              <span className="text-gray-500 font-medium">{exp.year}</span>
            </div>
            <p className="mt-4 text-gray-600">{exp.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {exp.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
