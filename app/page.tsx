import Link from "next/link";

import Hero from "@/components/Hero";
import About from "@/components/About";
import LegacyTimeline from "@/components/LegacyTimeline";
import Philosophy from "@/components/Philosophy";
import Associations from "@/components/Associations";
import ServiceCards from "@/components/ServiceCards";
import ContactOffice from "@/components/ContactOffice";

export default function Home() {
  return (
    <>
      {/* HOME */}
      <section id="home">
        <Hero />
      </section>

      {/* ABOUT */}
      <section id="about">
        <About />
        <LegacyTimeline />
        <Philosophy />
        <Associations />
      </section>

      {/* SERVICES */}
      <section id="services">
        <ServiceCards />
      </section>

      {/* BOOK APPOINTMENT */}
      <section className="homeAppointment">
        <div className="homeAppointmentInner">
          <p className="homeAppointmentEyebrow">
            BOOK A CONSULTATION
          </p>

          <h2>
            Your Journey.
            <br />
            <span>Starts Here.</span>
          </h2>

          <p>
            Choose your preferred consultation and connect with
            Dr. Khironn Neheru for personalised numerology guidance.
          </p>

          <Link href="/appointment">
            Book Appointment →
          </Link>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <ContactOffice />
      </section>
    </>
  );
}