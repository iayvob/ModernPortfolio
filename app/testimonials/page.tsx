import TestimonialsPage from "@/components/testimonials/TestimonialsPage";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: {
    default: "Testimonials | Ayoub Chalabi",
    template: "%s | Ayoub Chalabi",
  },
  description: "Ayoub full-stack Web Developer testimonials",
  twitter: {
    images: ["/src/app/openGraph-image.png"],
  },
  openGraph: {
    images: [
      {
        url: "/src/app/openGraph-image.png",
        width: 1200,
        height: 630,
        alt: "Ayoub Chalabi's Portfolio",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <TestimonialsPage />;
}
