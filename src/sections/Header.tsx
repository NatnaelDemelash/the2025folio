"use client";

import { FC } from "react";
import { Bolt, Projector, User, Cable } from "lucide-react";

const Header: FC = () => {
  return (
    <header>
      <div className="fixed top-0 left-0 w-full backdrop-blur-md mix-blend-difference z-10">
        <div className="container mx-auto px-8 md:px-12 lg:px-24">
          <div className="flex justify-between items-center h-20">
            {/* Left: Logo */}
            <a href="/">
              <span className="hidden md:block text-lg uppercase font-semibold text-white">
                Natnael Demelash
              </span>
            </a>

            {/* Right: Icon Navigation Links with Tooltips */}
            <nav className="flex gap-6 px-4 py-2 rounded">
              {/* About */}
              <div className="relative group">
                <a
                  href="/"
                  className="flex items-center justify-center w-10 h-10 text-white transition"
                  aria-label="Tech Stacks"
                >
                  <User size={25} />
                </a>
                <div className="absolute -bottom-14 left-1/2 transform -translate-x-1/2 whitespace-nowrap px-3 py-1 text-sm text-white bg-gray-900 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                  About
                </div>
              </div>

              {/* Tech Stacks */}
              <div className="relative group">
                <a
                  href="#stacks"
                  className="flex items-center justify-center w-10 h-10 text-white transition"
                  aria-label="About"
                >
                  <Bolt size={25} />
                </a>
                <div className="absolute -bottom-14 left-1/2 transform -translate-x-1/2 whitespace-nowrap px-3 py-1 text-sm text-white bg-gray-900 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                  Tech Stacks
                </div>
              </div>

              {/* Projects */}
              <div className="relative group">
                <a
                  href="#projects"
                  className="flex items-center justify-center w-10 h-10 text-white transition"
                  aria-label="Projects"
                >
                  <Projector size={25} />
                </a>
                <div className="absolute -bottom-14 left-1/2 transform -translate-x-1/2 whitespace-nowrap px-3 py-1 text-sm text-white bg-gray-900 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                  Projects
                </div>
              </div>

              {/* Contact */}
              <div className="relative group">
                <a
                  href="#contact"
                  className="flex items-center justify-center w-10 h-10 text-white transition"
                  aria-label="Contact"
                >
                  <Cable size={25} />
                </a>
                <div className="absolute -bottom-14 left-1/2 transform -translate-x-1/2 whitespace-nowrap px-3 py-1 text-sm text-white bg-gray-900 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                  Contact
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
