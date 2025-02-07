import Experience from "@/sections/Experience";
import Footer from "@/sections/Footer";
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import Intro from "@/sections/Intro";
import Project from "@/sections/Projects";
import TechStackSlider from "@/sections/TechStackSlider";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <TechStackSlider />
      <Project />
      <Intro />

      <Experience />
      <Footer />
    </>
  );
}
