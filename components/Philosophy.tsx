import styles from "./Philosophy.module.css";

const points = [
  {
    number: "01",
    title: "Name & Birth Analysis",
    text: "I analyse the unique vibrations of a person’s name and date of birth to understand their alignment according to numerological principles.",
  },
  {
    number: "02",
    title: "Name Correction",
    text: "In certain cases, a small modification such as adding or changing a letter can be suggested to create better alignment between the name and date of birth.",
  },
  {
    number: "03",
    title: "Personalised Guidance",
    text: "Based on individual analysis, I provide guidance related to lucky colours, dates, numbers, stones and other personalised recommendations.",
  },
  {
    number: "04",
    title: "Business & Professional Guidance",
    text: "I also provide guidance for business names, professional decisions and signature analysis based on graphology and numerological principles.",
  },
];

export default function Philosophy() {
  return (
    <section className={styles.philosophy}>
      <div className={styles.container}>

        {/* HEADING */}
        <div className={styles.heading}>
          <p>MY APPROACH</p>

          <h2>
            Numbers With
            <br />
            <span>Purpose.</span>
          </h2>

          <p className={styles.intro}>
            I believe that every name and date of birth carries
            its own unique vibrations. Through personalised
            analysis, I aim to provide clarity and meaningful
            guidance.
          </p>
        </div>

        {/* POINTS */}
        <div className={styles.points}>
          {points.map((point) => (
            <div className={styles.point} key={point.number}>

              <span className={styles.number}>
                {point.number}
              </span>

              <div className={styles.pointContent}>
                <h3>{point.title}</h3>
                <p>{point.text}</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}