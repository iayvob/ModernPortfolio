"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { FiExternalLink } from "react-icons/fi";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I'm currently a student in Higher School preparing for bachelor degree in{" "}
        <span className="font-medium">Software Engineer</span>, I decided to pursue my
        passion for programming. I enrolled in a coding Udemy bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">freelancing</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy studying
        , watching movies, or have a nice walk outside. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">designing with Figma and also about Electronics</span>. I'm also
        learning how to create contents.
      </p>
      <div className="flex items-center justify-center mt-12">
        <div className="relative">
          <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 opacity-75 blur"></div>
          <button className="relative rounded-lg bg-gray-950 px-4 py-2 text-white"><a href="https://iayvoblog.vercel.app" className="flex items-center gap-3">iayvoblog <FiExternalLink /></a></button>
        </div>
      </div>
    </motion.section>
  );
}