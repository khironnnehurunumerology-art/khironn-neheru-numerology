import Link from "next/link";

export default function ServicesHero() {
  return (
    <section className="servicesHero">
      <div className="servicesHeroInner">

        <div className="servicesHeroContent">
          <p className="servicesEyebrow">
            NUMEROLOGY • PERSONAL GUIDANCE
          </p>

          <h1 className="servicesTitle">
            Numerology
            <br />
            <span>Services.</span>
          </h1>

          <p className="servicesDescription">
            Explore personalised numerology services by Dr. Khironn
            Neheru, designed to provide clarity, insight and direction
            based on your name, date of birth and individual
            numerological profile.
          </p>

          <Link
            href="/appointment"
            className="servicesButton"
            aria-label="Book a numerology consultation with Dr. Khironn Neheru"
          >
            Book A Consultation →
          </Link>
        </div>

        <div
          className="servicesHeroVisual"
          aria-label="Numerology services"
        >
          <div className="servicesCircle">
            <div className="servicesCircleInner">
              <span>9</span>
              <small>NUMEROLOGY</small>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}