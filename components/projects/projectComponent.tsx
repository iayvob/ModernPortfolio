import { projectsData } from "@/lib/data";
import React from "react";
import CardInfo from "../comune/cardInfo";

export default function ProjectsComponent() {
  return (
    <section className="scroll-mt-28 mb-28 flex justify-center items-center">
      <div className="flex flex-col xl:flex-wrap xl:justify-between xl:flex-row xl:m-10">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <CardInfo {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
