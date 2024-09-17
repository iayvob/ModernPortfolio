'use client'
import { useSectionInView } from "@/lib/hooks";
import React from "react";
import HeaderInfo from "./headerInfo";
import ProjectsComponent from "./projectComponent";

export default function ProjectsPage() {
  const { ref } = useSectionInView("projectsPage", 0.25);

  return (
    <div className="flex flex-col" ref={ref} id="projectsPage">
      <HeaderInfo
        title={"Showcasing Innovative Web Solutions"}
        description={
          "Explore a curated collection of my latest projects, ranging from custom web applications and SaaS platforms to feature-rich e-commerce sites and AI-driven solutions. Each project reflects a commitment to cutting-edge technology, seamless user experiences, and high-performance design. Whether it's building from the ground up or enhancing existing systems, these projects demonstrate the breadth and depth of my expertise across various industries and technical stacks."
        }
        page={"projects"}
      />
      <ProjectsComponent />
    </div>
  );
}
