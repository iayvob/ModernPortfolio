import SectionDivider from "@/components/comune/section-divider";
import About from "@/components/home/about";
import Intro from "@/components/home/intro";
import Skills from "@/components/home/skills";
import type { Metadata } from "next";
import Contact from "@/components/home/contact";
import Projects from "@/components/home/projects";

export const metadata: Metadata = {
  title: {
    default: "Portfolio | Ayoub Chalabi",
    template: "%s | Ayoub Chalabi",
  },
  description: "Ayoub Full-stack web Developer Portfolio",
  keywords: [
    "Ayoub Chalabi",
    "Full-stack Developer",
    "React Developer",
    "Next.js Developer",
    "Web Developer",
    "Portfolio",
  ],
  twitter: {
    images: ["/src/app/openGraph-image.png"],
  },
  openGraph: {
    images: [
      {
        url: "/src/app/openGraph-image.png",
        width: 1200,
        height: 630,
        alt: "Ayoub Chalabi's Portfolio",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
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
}
