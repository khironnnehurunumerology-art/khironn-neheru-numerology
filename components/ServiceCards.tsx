import "./ServiceCards.css";

const services = [
  {
    number: "01",
    title: "Personal Numerology",
    description:
      "Understand the influence of numbers on your personality, strengths, opportunities and life journey.",
  },
  {
    number: "02",
    title: "Name Analysis",
    description:
      "Explore the numerological significance of your name and discover how name vibrations can influence your journey.",
  },
  {
    number: "03",
    title: "Business Numerology",
    description:
      "Numerology guidance for business names, branding and important professional decisions.",
  },
  {
    number: "04",
    title: "Career Guidance",
    description:
      "Gain clarity about career direction and opportunities through personalised numerological analysis.",
  },
  {
    number: "05",
    title: "Relationship Numerology",
    description:
      "Understand numerical compatibility and gain insights into personal relationships and connections.",
  },
  {
    number: "06",
    title: "Life Guidance",
    description:
      "Personalised numerology guidance designed to bring greater clarity, balance and direction to your life.",
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
            Explore personalised numerology services designed to provide
            clarity, insight and direction.
          </p>
        </div>

        <div className="serviceGrid">
          {services.map((service) => (
            <article className="serviceCard" key={service.number}>
              <span className="serviceNumber">{service.number}</span>

              <div className="serviceCardContent">
                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <a href="/contact">Explore Service →</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}