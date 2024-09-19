import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";
import { testimonials } from "@/lib/data";
import { MdVerified } from "react-icons/md";

type Props = (typeof testimonials )[number];

export default function TestimonialCard({ name, position, imageLink, opinion, postLink }: Props) {
  return (
    <main className="md:px-20 px-0">
      <div className="relative">
        <section className="bg-gray-100 w-[30rem] space-x-3 border border-black/5 rounded-lg overflow-hidden h-[15rem] hover:bg-gray-200 transition dark:bg-white/10 dark:hover:bg-white/20 dark:text-white">
          <div className="mt-12">
            <Image
              src={imageLink}
              alt="Project I worked on"
              width={80}
              height={80}
              quality={95}
              className="absolute -top-8 left-5 rounded-full"
            />
          </div>
          <div className="flex flex-col gap-y-6">
            <div className="flex flex-col md:gap-x-3 h-full gap-x-2">
              <div className="flex gap-1 items-center">
                <h3 className="text-2xl font-semibold">{name}</h3>
                <MdVerified />
              </div>
              <div>
                <p>{position}</p>
              </div>
            </div>
            <div className="h-[4rem] overflow-y-auto scrollbar-custom">
              <p className="leading-relaxed text-gray-700 dark:text-white/70">
                {opinion}
              </p>
            </div>
            <div className="w-full flex justify-end pr-3">
              <Link href={postLink} className="flex items-center gap-x-1">
                <p className="text-">Link to LinkedIn Post </p>{" "}
                <FiExternalLink />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
