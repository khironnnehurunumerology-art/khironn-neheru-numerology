import Link from "next/link";
import "./ServiceCards.css";

const services = [
  {
    number: "01",
    title: "Personal Numerology",
    description:
      "Discover personalised numerology insights into your personality, strengths, opportunities and life journey through your name and date of birth.",
  },
  {
    number: "02",
    title: "Name Analysis",
    description:
      "Explore the numerological significance of your name and understand how name vibrations may influence different areas of your personal journey.",
  },
  {
    number: "03",
    title: "Business Numerology",
    description:
      "Get personalised numerology guidance for business names, branding and important professional decisions to support your business journey.",
  },
  {
    number: "04",
    title: "Career Guidance",
    description:
      "Gain personalised numerology insights for career direction, professional opportunities and important decisions related to your working life.",
  },
  {
    number: "05",
    title: "Relationship Numerology",
    description:
      "Explore numerical compatibility and gain personalised numerology insights into relationships, connections and interpersonal understanding.",
  },
  {
    number: "06",
    title: "Life Guidance",
    description:
      "Receive personalised numerology guidance designed to help you gain clarity, balance and direction across important areas of your life.",
  },
];

export default function ServiceCards() {
  return (
    <section className="serviceCards">
      <div className="serviceCardsContainer">

        <div className="serviceCardsHeader">
          <span>OUR EXPERTISE</span>

          <h2>
            Guidance For
            <br />
            <strong>Every Journey.</strong>
          </h2>

          <p>
            Explore personalised numerology services by Dr. Khironn
            Neheru, designed to provide clarity, insight and direction
            for personal, professional and life decisions.
          </p>
        </div>

        <div className="serviceGrid">
          {services.map((service) => (
            <article className="serviceCard" key={service.number}>
              <span className="serviceNumber">
                {service.number}
              </span>

              <div className="serviceCardContent">
                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <Link
                  href="/contact"
                  aria-label={`Learn more about ${service.title}`}
                >
                  Explore Service →
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}