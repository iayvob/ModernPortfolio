"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import Link from "next/link";


export default function Projects() {
    const { ref } = useSectionInView("Projects", 0.25);
    return (
        <section id="projects" className="scroll-mt-28 mb-28" ref={ref}>
            <SectionHeading>
                <p>My Projects</p>
                <Link href='/projects' className="!bg-black/[0.7] hover:!bg-black/[0.3] !text-[0.7rem] tracking-wider text-white rounded-full p-2 dark:text-white/70" >View All Projects</Link>
            </SectionHeading>
            <div>
                {
                    projectsData.slice(0, 4).map((project, index) => (
                    <React.Fragment key={index}>
                        <Project {...project}/>
                    </React.Fragment>
                    ))}
            </div>
            <SectionHeading>
                <Link href='/projects' className="!bg-black/[0.7] hover:!bg-black/[0.3] !text-[0.7rem] tracking-wider text-white rounded-full p-2 dark:text-white/70" >view more ...</Link>
            </SectionHeading>
        </section>
    )
}