"use client";

import React from "react";
import SectionHeading from "@/components/section-heading";
import { projectsData } from "@/lib/data";
import Project from "@/components/project";
import { useSectionInView } from "@/lib/hooks";


export default function Services() {
    const { ref } = useSectionInView("Services", 0.25);
    return (
        <div className="flex flex-col" ref={ref} id='Services'>
            <SectionHeading>
                <p>Services Offered</p>
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