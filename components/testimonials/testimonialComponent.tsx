"use client";
import { testimonials } from "@/lib/data";
import { motion } from "framer-motion";
import React from "react";
import TestimonialCard from "./testimonialCard";

export default function TestimonialComponent() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 1000 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "tween",
        duration: 0.2,
      }}
      className="scroll-mt-28 mb-28 flex justify-center items-center"
    >
      <div className="flex flex-col xl:flex-wrap xl:justify-between xl:flex-row xl:m-10 gap-y-16">
        {testimonials.map((test, index) => (
          <React.Fragment key={index}>
            <TestimonialCard {...test} />
          </React.Fragment>
        ))}
      </div>
    </motion.section>
  );
}
