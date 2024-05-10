"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useSectionInView } from "@/lib/hooks";
import { article } from "@/lib/articles";
import { TbArticle } from "react-icons/tb";



export default function Intro() {
    const NumArticleBadg = article.length;
    const { ref } = useSectionInView("Articles", 0.5);
    
    return (
        <section ref={ref} className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]" id="articles">
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
                        <Image src="https://media.licdn.com/dms/image/D4D03AQF9k5yh2BRRZg/profile-displayphoto-shrink_800_800/0/1712205955477?e=1719446400&v=beta&t=8Y3mSvYjopkk2LDFVlfcsSuYu-jyRKE0xqNblpn2ivM" alt="Chalabi Ayoub" width="192" height="192" quality="95" priority={true} className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl" />
                    </motion.div>
                    <motion.span className="absolute bottom-0 right-0 text-4xl"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 125,
                            delay: 0.1,
                            duration: 0.7,
                        }}
                    >
                        ✍️
                    </motion.span>
                </div>
            </div>

            <motion.p className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <span className="font-bold">Hello, This is</span>{" "}
                <span className="font-bold">The part where</span> sharing {" "}
                <span className="font-bold">My ideas</span> in different sides of <span className="italic">sciences and Technologies</span>. May be a projects <br/>
                <span className="underline">if find kind interactions with it.</span>
            </motion.p>

            <motion.div className="flex flex-col sm:flex-row items-center gap-2 px-4 text-lg font-medium justify-center"
                initial={{ opacity: 0, y: 100}}
                animate={{ opacity: 1, y: 0}}
                transition={{
                    delay: 0.1,
                }}
            >
                <Link href="#articleTitles" className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition">Publications<span className="ml-2">- {NumArticleBadg} -</span></Link>
                <Link href="#allArticles" className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.60rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-[1.15] hover:text-gray-950 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 dark:hover:text-white/80">
                    <TbArticle />
                </Link>
            </motion.div>
        </section>
    )
}