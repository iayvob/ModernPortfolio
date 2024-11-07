import ProjectsPage from "@/components/projects/projectsPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Projects | Ayoub Chalabi",
    template: "%s | Ayoub Chalabi",
  },
  description: "Ayoub Full-stack Web Developer Projects",
};

export default function Projects() {
  return <ProjectsPage />;
}