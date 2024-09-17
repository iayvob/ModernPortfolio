"use client";
import Image from "next/image";
import React from "react";
import service from "@/public/services/3.png";
import project from "@/public/services/9.png";
import { motion } from "framer-motion";

type Props = {
  title: string;
  description: string;
  page: "projects" | "services";
};

export default function HeaderInfo({ title, description, page }: Props) {
  return (
    <div className="mb-28 px-20 mt-12 sm:mb-0 scroll-mt-[100rem] flex flex-col gap-y-6 xl:flex-row justify-between">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          type: "tween",
          duration: 0.2,
        }}
        className="lg:w-[60%] flex flex-col xl:flex-row gap-y-4"
      >
        <div className="flex flex-col gap-x-2 items-center gap-y-6 ">
          <div className="flex items-center justify-center">
            <div className=" relative ">
              <div>
                <Image
                  src="https://pbs.twimg.com/profile_images/1804488911093202944/UerGXacu_400x400.jpg"
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
        <p className="font-semibold">{description}</p>
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
          src={page === "services" ? service : page === "projects" ? project : ""}
          alt="show case"
          width={300}
          height={300}
        />
      </motion.div>
    </div>
  );
}
