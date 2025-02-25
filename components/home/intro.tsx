"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import Link from "next/link";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { FiExternalLink } from "react-icons/fi";
import profile from "@/public/Illustration/profilePic.png";
import Head from "next/head";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <>
      <Head>
        <title>Ayoub Chalabi - Full-Stack Developer</title>
        <meta name="description" content="Ayoub Chalabi is a full-stack developer with 3 years of experience. Contact Ayoub for web development services." />
        <meta name="keywords" content="Ayoub Chalabi, full-stack developer, web development, software engineer, portfolio" />
      </Head>
      <section
        ref={ref}
        className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem] mt-12"
        id="home"
      >
        <div className="flex items-center justify-center">
          <div className=" relative ">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "tween",
                duration: 0.2,
              }}
            >
              <Image
                src={profile}
                alt="Chalabi Ayoub"
                width="192"
                height="192"
                quality="95"
                priority={true}
                className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
              />
            </motion.div>
            <motion.span
              className="absolute bottom-0 right-0 text-4xl"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 125,
                delay: 0.1,
                duration: 0.7,
              }}
            >
              👏
            </motion.span>
          </div>
        </div>

        <motion.h1
          className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="font-bold">Hello, I'm Ayoub.</span> I'm a {" "}
          <span className="font-bold">full-stack developer</span> with {" "}
          <span className="font-bold">3 years</span> of experiences
        </motion.h1>

        <motion.div
          className="flex flex-col sm:flex-row items-center gap-2 px-4 text-lg font-medium justify-center"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
          }}
        >
          <Link
            onClick={() => {
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }}
            href="#contact"
            className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          >
            Contact me
            <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
          </Link>
          <a
            href='/files/Curriculum-Vitae-Ayoub-Chalabi-English-Version.pdf'
            download
            className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          >
            Download Resume{" "}
            <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
          </a>
          <div className="!flex gap-5">
            <a
              href="https://www.linkedin.com/in/iayvob"
              className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-[1.15] transition cursor-pointer borderBlack hover:text-gray-950 dark:bg-white/10 dark:text-white/60 dark:hover:text-white/80"
            >
              <BsLinkedin />
            </a>
            <a
              href="https://github.com/iayvob"
              className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-[1.15] hover:text-gray-950 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 dark:hover:text-white/80"
            >
              <FaGithubSquare />
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
          }}
          className="flex items-center justify-center mt-12 gap-16"
        >
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 opacity-75 blur"></div>
            <button className="relative rounded-full bg-gray-950 px-4 py-2 text-white">
              <Link href="/services" className="flex items-center gap-3">
                Services Offered
                <FiExternalLink />
              </Link>
            </button>
          </div>
        </motion.div>
      </section>
    </>
  );
}