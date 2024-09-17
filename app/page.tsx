import About from "@/components/about";
import type { Metadata } from "next";
import Contact from "@/components/contact";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";

export const metadata: Metadata = {
  title: "Portfolio | Ayoub Chalabi",
  description: "Ayoub Full-stack React(Next.js) Developer",
};

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}; 