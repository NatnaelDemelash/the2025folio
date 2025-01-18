import React, { FC } from "react";

const Intro: FC = () => {
  return (
    <div
      className="min-h-[80vh] flex justify-center items-center px-6 md:px-10 py-6 bg-white"
      id="intro"
    >
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl md:text-5xl text-gray-800 leading-[1] md:leading-[1.28]">
          <span className="text-4xl md:text-5xl">👋</span> I'm{" "}
          <span className="text-purple-500 font-bold underline">
            {" "}
            a Front End Developer
          </span>{" "}
          with 2 years of experience in the field. I thrive on creating engaging
          and interactive user interfaces that are visually appealing and
          user-friendly. I have a passion for learning new technologies and
          applying them to real-world problems.
        </h1>
      </div>
    </div>
  );
};

export default Intro;
