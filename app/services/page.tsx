import React from "react";
import { Metadata } from "next";
import ServicesPage from "@/components/services/servicesPage";

export const metadata: Metadata = {
  title: {
    default: "Services | Ayoub Chalabi",
    template: "%s | Ayoub Chalabi",
  },
  description: "Ayoub full-stack Web Developer Services",
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
  return <ServicesPage />;
}
