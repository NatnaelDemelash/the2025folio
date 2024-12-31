import Button from "@/components/Button";
import { FC } from "react";

const navItems = [
  {
    href: "#",
    label: "Home",
  },
  {
    href: "#",
    label: "Projects",
  },
  {
    href: "#",
    label: "Contact",
  },
];

const Footer: FC = () => {
  return (
    <footer className="bg-stone-900 text-white">
      <div className="container mt-20">
        <div className="section py-8">
          <div className="flex items-center gap-3 ">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="md:col-span-2">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl md:leading-relaxed uppercase font-extralight">
                  Ready to take Your digital presence to the next level?
                </h2>

                <Button
                  variant="secondary"
                  className="mt-8"
                  iconAfter={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
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
                >
                  natnael.dev101@gmail.com
                </Button>
              </div>

              <div className="">
                <nav className="flex flex-col md:items-end gap-6 mt-16 md:mt-0">
                  {navItems.map(({ href, label }) => (
                    <a key={label} href={href}>
                      <Button variant="text" className="text-lg">
                        {label}
                      </Button>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </div>
        <p className="py-16 text-sm text-white/30">
          Copyright &copy; Natnael Demelash &bull; All right reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
