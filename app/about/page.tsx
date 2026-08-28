import type { Metadata } from "next";

import About from "@/components/About";
import LegacyTimeline from "@/components/LegacyTimeline";
import Philosophy from "@/components/Philosophy";
import Associations from "@/components/Associations";
import AboutCTA from "@/components/AboutCTA";

export const metadata: Metadata = {
  title: "About Dr. Khironn Neheru",
  description:
    "Learn about Dr. Khironn Neheru, a numerologist with 23+ years of experience and a family legacy in numerology since 1987, serving clients across 71 countries.",
};

export default function AboutPage() {
  return (
    <>
      <main>
        <About />
        <LegacyTimeline />
        <Philosophy />
        <Associations />
        <AboutCTA />
      </main>
    </>
  );
}