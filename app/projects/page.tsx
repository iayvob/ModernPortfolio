import ProjectsPage from "@/components/projectsPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Ayoub Chalabi",
  description: "Ayoub Full-stack React(Next.js) Developer",
};

export default function Projects() {
  return <ProjectsPage />;
}
