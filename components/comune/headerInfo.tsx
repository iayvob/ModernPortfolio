"use client";
import Image from "next/image";
import React from "react";
import test from "@/public/Illustration/testimonials.png";
import project from "@/public/Illustration/project.png";
import service from "@/public/Illustration/service.png";
import { motion } from "framer-motion";
import profile from "@/public/Illustration/profilePic.jpg";


type Props = {
  title: string;
  description: string;
  page: "projects" | "services" | "testimonials";
};

export default function HeaderInfo({ title, description, page }: Props) {
  return (
    <div className="mb-28 px-20 mt-12 sm:mb-0 flex flex-col gap-y-6 xl:flex-row justify-between">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          type: "tween",
          duration: 0.2,
        }}
        className="lg:w-[60%] flex flex-col gap-y-4"
      >
        <div className="flex flex-col xl:flex-row gap-x-2 items-center gap-y-6 ">
          <div className="flex items-center justify-center">
            <div className=" relative ">
              <div>
                <Image
                  src={profile}
                  alt="Chalabi Ayoub"
                  width={170}
                  height={170}
                  quality={95}
                  priority={true}
                  className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
                />
              </div>
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
                👨‍💻
              </motion.span>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold">{title}</h2>
          </div>
        </div>
        <div>
          <p className="font-semibold">{description}</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          type: "tween",
          duration: 0.2,
        }}
      >
        <Image
          src={
            page === "services"
              ? service
              : page === "projects"
              ? project
              : page === "testimonials"
              ? test
              : ""
          }
          alt="show case"
          width={300}
          height={300}
        />
      </motion.div>
    </div>
  );
}
