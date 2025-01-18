import { FC } from "react";
import Link from "next/link";

import Button from "@/components/Button";
import { Github, Linkedin } from "lucide-react";

const navItems = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "#projects",
    label: "Projects",
  },
  {
    href: "#contact",
    label: "Contact",
  },
];

const Footer: FC = () => {
  return (
    <footer className="bg-stone-900 text-white" id="contact">
      <div className="container mt-20">
        <div className="section py-8">
          <div className="flex items-center gap-3">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="md:col-span-2">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl md:leading-relaxed uppercase font-extralight">
                  Ready to take your digital presence to the next level?
                </h2>

                <Button
                  variant="secondary"
                  className="mt-8"
                  iconAfter={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-4 md:size-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  }
                  href="mailto:natnael.dev101@gmail.com"
                >
                  natnael.dev101@gmail.com
                </Button>

                {/* Social Icons */}
                <div className="flex gap-4 mt-6">
                  <Link
                    href="https://www.linkedin.com/in/natnaeldemelash/"
                    target="_blank"
                    className="hover:text-gray-400"
                  >
                    <Linkedin className="w-8 h-8" />
                  </Link>
                  <Link
                    href="https://github.com/NatnaelDemelash"
                    target="_blank"
                    className="hover:text-gray-400"
                  >
                    <Github className="w-8 h-8" />
                  </Link>
                </div>
              </div>

              <div>
                <nav className="flex flex-col md:items-end gap-6 mt-16 md:mt-0">
                  {navItems.map(({ href, label }) => (
                    <Link key={label} href={href}>
                      <Button variant="text" className="text-lg">
                        {label}
                      </Button>
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </div>
        <p className="py-16 text-sm text-white/30">
          Copyright &copy; Natnael Demelash &bull; All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
