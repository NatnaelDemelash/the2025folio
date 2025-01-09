import React from "react";
import Image, { StaticImageData } from "next/image";

type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
  imageUrl: StaticImageData;
  projectLink: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tags,
  imageUrl,
  projectLink,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative w-full h-52">
        <Image
          src={imageUrl}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-gray-100 text-gray-800 text-xs font-medium py-1 px-3 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href={projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-white bg-stone-800 hover:bg-stone-900 px-4 py-2 rounded-lg text-sm font-medium"
        >
          View Project
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
