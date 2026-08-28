import type { Metadata } from "next";

import ServicesHero from "@/components/ServicesHero";
import ServiceCards from "@/components/ServiceCards";

export const metadata: Metadata = {
  title: "Numerology Services",
  description:
    "Explore personalised numerology services by Dr. Khironn Neheru, including personal numerology, name analysis, business numerology, career guidance, relationship numerology and life guidance.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServiceCards />
    </>
  );
}