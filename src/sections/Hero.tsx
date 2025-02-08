import { FC } from "react";
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */

import Image from "next/image";
import Button from "@/components/Button";

const Hero: FC = () => {
  return (
    <section className="flex flex-col min-h-screen items-center justify-center mt-10 text-center px-4 sm:px-6 md:px-8">
      {/* Avatar */}
      <div className="w-24 h-24 sm:w-36 sm:h-36 rounded-full overflow-hidden shadow-md mb-6 mt-3">
        <Image
          src="/images/profile.jpeg"
          alt="Profile Picture"
          width={200}
          height={200}
          className="rounded-full"
        />
      </div>

      {/* Title */}
      <h1 className="text-2xl sm:text-3xl jost text-gray-800 mb-6">
        Hi, I&#39;m <span className="font-bold">Natnael</span>{" "}
        <span role="img" aria-label="rock">
          🤘
        </span>
      </h1>

      {/* Main Heading */}
      <h2 className="text-center max-w-3xl sm:max-w-4xl px-4 sm:px-8 md:px-12 text-2xl sm:text-4xl md:text-5xl font-medium text-gray-900  sm:leading-normal mb-4 capitalize">
        Building modern web applications with creativity and precision.
      </h2>

      {/* Subtitle */}
      <p className=" text-sm sm:text-base md:text-[1.1rem] text-gray-600 mb-8 max-w-md sm:max-w-lg md:max-w-xl">
        a <span className="font-semibold">Front End Developer</span> passionate
        about creating beautiful, responsive, and user-friendly interfaces.
        <br /> I specialize in React, Tailwind CSS, and building seamless web
        experiences.
      </p>

      <Button variant="primary" href="#contact">
        Connect with me
      </Button>
    </section>
  );
};

export default Hero;
