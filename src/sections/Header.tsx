import Button from "@/components/Button";
import { FC } from "react";

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const navItems = [
  {
    label: "About",
    href: "#intro",
  },
  {
    label: "Selected Works",
    href: "#projects",
  },
  {
    label: "Testimonials",
    href: "#testimonials",
  },
  {
    label: "FAQs",
    href: "#faqs",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

const Header: FC = () => {
  return (
    <header>
      <div className="fixed top-0 left-0 w-full backdrop-blur-md mix-blend-difference">
        <div className="container !max-w-full">
          <div className="flex justify-between items-center h-20 px-8 md:px-12 lg:px-24">
            <div>
              <a href="/">
                <span className="text-lg uppercase font-semibold text-white">
                  Natnael Demelash
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed top-0 left-0 w-full">
        <div className="container !max-w-full">
          <div className="flex justify-end items-center h-20 px-8 md:px-12 lg:px-24">
            <div className="flex items-center gap-4">
              <div className="inline-flex items-center justify-center border border-stone-400 rounded-full size-11 bg-stone-200">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="3"
                    y="15"
                    width="18"
                    height="2"
                    fill="currentColor"
                  />
                  <rect x="3" y="7" width="18" height="2" fill="currentColor" />
                </svg>
              </div>
              <Button variant="primary" className="hidden md:block">
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
