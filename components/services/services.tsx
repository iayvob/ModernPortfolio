"use client";
import { motion } from "framer-motion";
import React from "react";
import { services } from "@/lib/data";
import CardInfo from "../comune/cardInfo";

export default function Services() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 1000 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "tween",
        duration: 0.2,
      }}
      className="flex flex-col"
    >
      <section className="scroll-mt-28 mb-28 flex justify-center items-center">
        <div className="flex flex-col xl:flex-wrap xl:justify-between xl:flex-row xl:m-10">
          {services.map((service, index) => (
            <React.Fragment key={index}>
              <CardInfo {...service} />
            </React.Fragment>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
