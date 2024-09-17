'use client'
import React from "react";
import HeaderInfo from "./headerInfo";
import Services from "./services";
import { useSectionInView } from "@/lib/hooks";

export default function ServicesPage() {
  const { ref } = useSectionInView("Services", 0.25);

  return (
    <main ref={ref} id="Services">
      <HeaderInfo
        title={"Our Tailor-Made Solutions for Your Business"}
        description={
          "Discover a wide range of services designed to help your business thrive in the digital age. From custom web and SaaS application development to seamless payment integrations, secure user authentication, and advanced AI features—each service is crafted with precision, using the latest technologies. Whether you need a solution built from scratch or want to optimize and maintain existing platforms, I offer expertise and support to turn your vision into reality."
        }
        page={"services"}
      />
      <Services />
    </main>
  );
}
