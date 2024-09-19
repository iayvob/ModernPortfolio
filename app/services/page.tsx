import React from "react";
import { Metadata } from "next";
import ServicesPage from "@/components/services/servicesPage";

export const metadata: Metadata = {
  title: "Services | Ayoub Chalabi",
  description: "Ayoub full-stack React(Next.js) Developer",
};

export default function Page() {
  return (
    <section>
      <ServicesPage />
    </section>
  );
}
