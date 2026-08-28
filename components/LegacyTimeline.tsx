import styles from "./LegacyTimeline.module.css";

const milestones = [
  {
    year: "1986",
    title: "A Defining Decision",
    description:
      "Mr. Nehru resigned from his position as DGM at BHEL to completely dedicate his life to numerology.",
  },
  {
    year: "1987",
    title: "The Legacy Begins",
    description:
      "Our numerology office was established, beginning a family legacy of numerology guidance and consultation.",
  },
  {
    year: "23+ Years",
    title: "Continuing The Legacy",
    description:
      "Dr. Khironn Neheru continues his father’s legacy with more than 23 years of experience in the field of numerology.",
  },
  {
    year: "71 Countries",
    title: "A Global Journey",
    description:
      "Over the years, we have had the opportunity to guide and serve clients across 71 countries.",
  },
];

export default function LegacyTimeline() {
  return (
    <section className={styles.legacy}>
      <div className={styles.container}>

        <div className={styles.header}>
          <div>
            <p className={styles.eyebrow}>
              A LEGACY BUILT OVER GENERATIONS
            </p>

            <h2 className={styles.title}>
              A Legacy That
              <br />
              <span>Continues.</span>
            </h2>
          </div>

          <p className={styles.intro}>
            From a family tradition started in 1987 to a numerology
            practice serving people across the world.
          </p>
        </div>

        <div className={styles.timeline}>
          {milestones.map((item, index) => (
            <div className={styles.item} key={item.year}>

              <div className={styles.number}>
                0{index + 1}
              </div>

              <div className={styles.year}>
                {item.year}
              </div>

              <div className={styles.content}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>

            </div>
          ))}
        </div>

        <div className={styles.bottomStats}>
          <div>
            <strong>23+</strong>
            <span>YEARS EXPERIENCE</span>
          </div>

          <div>
            <strong>71</strong>
            <span>COUNTRIES SERVED</span>
          </div>

          <div>
            <strong>1987</strong>
            <span>LEGACY SINCE</span>
          </div>
        </div>

      </div>
    </section>
  );
}