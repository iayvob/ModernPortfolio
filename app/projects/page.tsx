"use client";

import React from "react";
import SectionHeading from "@/components/section-heading";
import { projectsData } from "@/lib/data";
import Project from "@/components/project";


export default function Projects() {
    return (
        <div className="flex flex-col">
            <SectionHeading>
                <p>All My Projects</p>
            </SectionHeading>
            <section className="scroll-mt-28 mb-28 flex justify-center items-center">
            <div className="flex flex-col xl:flex-wrap xl:justify-between xl:flex-row xl:m-10">
                {
                    projectsData.map((project, index) => (
                    <React.Fragment key={index}>
                        <Project {...project}/>
                    </React.Fragment>
                    ))}
            </div>
        </section>
        </div>
    )
}