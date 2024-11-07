import ProjectsPage from "@/components/projects/projectsPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Projects | Ayoub Chalabi",
    template: "%s | Ayoub Chalabi",
  },
  description: "Ayoub Full-stack Web Developer Projects",
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

export default function Projects() {
  return <ProjectsPage />;
}