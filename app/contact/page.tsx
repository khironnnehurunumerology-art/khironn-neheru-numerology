import type { Metadata } from "next";

import ContactHero from "@/components/ContactHero";
import ContactForm from "@/components/ContactForm";
import ContactOffice from "@/components/ContactOffice";

export const metadata: Metadata = {
  title: "Contact Dr. Khironn Neheru",
  description:
    "Get in touch with Dr. Khironn Neheru for numerology consultations, enquiries and personalised guidance. Contact us by phone, email or visit our office.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactForm />
      <ContactOffice />
    </>
  );
}