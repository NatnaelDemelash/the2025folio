"use client";
import { motion } from "framer-motion";
import Image from "next/image";

import JavaScript from "@/assets/icons/javascript.png";
import TailwindCSS from "@/assets/icons/tailwind-css.svg";
import Vite from "@/assets/icons/vite.png";
import TypeScript from "@/assets/icons/typescript.png";
import NextJS from "@/assets/icons/nextjs.png";
import React from "@/assets/icons/react2.png";

const technologies = [
  { name: "JavaScript", icon: JavaScript },
  { name: "TypeScript", icon: TypeScript },
  { name: "Vite", icon: Vite },
  { name: "TailwindCSS", icon: TailwindCSS },
  { name: "Next.js", icon: NextJS },
  { name: "React", icon: React },
];

const TechStackSlider: React.FC = () => {
  return (
    <div className="bg-[#f2f2f2]  px-4 sm:px-10 lg:px-20 my-4 max-w-4xl mx-auto overflow-hidden  py-8">
      <motion.div
        className="flex space-x-10 sm:space-x-16 w-full"
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
      >
        {/* Duplicate for seamless looping */}
        {[...technologies, ...technologies].map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center space-y-2 sm:space-y-3"
          >
            {/* Icon container to maintain equal size */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 flex items-center justify-center bg-transparent">
              <Image
                src={tech.icon}
                alt={tech.name}
                className="w-14 h-14 object-contain"
              />
            </div>
            <p className="text-xs sm:text-sm lg:text-base ">{tech.name}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default TechStackSlider;
