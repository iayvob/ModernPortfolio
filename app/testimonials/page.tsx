import TestimonialsPage from "@/components/testimonials/TestimonialsPage";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Testimonials | Ayoub Chalabi",
  description: "Ayoub full-stack React(Next.js) Developer",
};

export default function page() {
  return <TestimonialsPage />;
}
