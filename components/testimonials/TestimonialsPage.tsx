"use client";
import React from "react";
import HeaderInfo from "../comune/headerInfo";
import TestimonialComponent from "./testimonialComponent";
import { useSectionInView } from "@/lib/hooks";

export default function TestimonialsPage() {
  const { ref } = useSectionInView("Testimonials", 0.25);
  return (
    <section ref={ref} id="Testimonials" className="scroll-mt-[100rem]">
      <HeaderInfo
        title="What Our Clients Say ?"
        description="Hear from our satisfied clients about their experiences working with us. Our tailor-made solutions have empowered businesses across various industries to achieve their goals and exceed their expectations. From custom web and SaaS applications to seamless integrations and advanced AI features, our clients share how our expertise and support have made a tangible difference. Explore their stories and discover why businesses trust us to turn their vision into reality"
        page="testimonials"
      />
      <TestimonialComponent />
    </section>
  );
}
