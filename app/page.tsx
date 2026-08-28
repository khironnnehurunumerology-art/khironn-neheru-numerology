import Hero from "@/components/Hero";
import AboutCTA from "@/components/AboutCTA";

const schema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Dr. Khironn Neheru",
  jobTitle: "Numerologist",
  url: "https://khironnnehuru.com",
  description:
    "Dr. Khironn Neheru is a numerologist and numerology consultant with more than 23 years of experience.",
  knowsAbout: [
    "Numerology",
    "Numerology Consultation",
    "Name Analysis",
    "Business Numerology",
    "Career Guidance",
    "Relationship Numerology",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      <Hero />
      <AboutCTA />
    </>
  );
}