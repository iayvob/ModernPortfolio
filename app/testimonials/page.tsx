import TestimonialsPage from "@/components/testimonials/TestimonialsPage";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: {
    default: "Testimonials | Ayoub Chalabi",
    template: "%s | Ayoub Chalabi",
  },
  description: "Ayoub full-stack Web Developer testimonials",
};

export default function Page() {
  return <TestimonialsPage />;
}
