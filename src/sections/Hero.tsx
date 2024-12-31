import { FC } from "react";
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import heroImage from "@/assets/images/hero-image.jpg";
import profile from "@/assets/images/profile.jpeg";
import Image from "next/image";
import Button from "@/components/Button";

const Hero: FC = () => {
  return (
    <section className="flex flex-col items-center justify-center mt-10 text-center px-4 sm:px-6 md:px-8">
      {/* Avatar */}
      <div className="w-24 h-24 sm:w-36 sm:h-36 rounded-full overflow-hidden shadow-md mb-6">
        <Image
          src={profile}
          alt="Avatar"
          className="w-full h-full object-cover"
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
      <h2 className="text-center max-w-3xl sm:max-w-4xl px-4 sm:px-8 md:px-12 text-2xl sm:text-4xl md:text-6xl font-medium text-gray-900 leading-relaxed sm:leading-loose mb-4 capitalize">
        Building modern web applications with creativity and precision.
      </h2>

      {/* Subtitle */}
      <p className=" text-sm sm:text-base md:text-lg text-gray-600 mb-8 max-w-md sm:max-w-lg md:max-w-xl">
        a <span className="font-semibold">Front End Developer</span> passionate
        about creating beautiful, responsive, and user-friendly interfaces.
        <br /> I specialize in React, Tailwind CSS, and building seamless web
        experiences.
      </p>

      {/* Button */}
      {/* <button className="px-4 sm:px-6 py-2 sm:py-3 bg-black text-white text-sm sm:text-base md:text-lg font-medium rounded-md shadow hover:bg-gray-800 transition">
        Connect with me
      </button> */}
      <Button variant="primary">Connect with me</Button>
    </section>
  );
};

export default Hero;
