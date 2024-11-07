import React from "react";
import { Metadata } from "next";
import ServicesPage from "@/components/services/servicesPage";

export const metadata: Metadata = {
  title: {
    default: "Services | Ayoub Chalabi",
    template: "%s | Ayoub Chalabi",
  },
  description: "Ayoub full-stack Web Developer Services",
};

export default function Page() {
  return <ServicesPage />;
}
