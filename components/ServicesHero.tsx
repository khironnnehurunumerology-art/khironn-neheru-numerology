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
            Discover personalised numerology guidance designed to bring
            clarity, balance and direction to important areas of your life.
          </p>

          <a href="/appointment" className="servicesButton">
            Book A Consultation →
          </a>
        </div>

        <div className="servicesHeroVisual">
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