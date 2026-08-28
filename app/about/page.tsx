import About from "@/components/About";
import LegacyTimeline from "@/components/LegacyTimeline";
import Philosophy from "@/components/Philosophy";
import Associations from "@/components/Associations";
import AboutCTA from "@/components/AboutCTA";

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