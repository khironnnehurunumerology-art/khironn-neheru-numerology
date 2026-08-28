import styles from "./Stats.module.css";

const stats = [
  {
    number: "23+",
    title: "Years Experience",
  },
  {
    number: "71",
    title: "Countries Served",
  },
  {
    number: "1987",
    title: "Legacy Since",
  },
  {
    number: "Lakhs+",
    title: "People Guided",
  },
];

export default function Stats() {
  return (
    <section className={styles.stats}>
      <div className={styles.container}>
        {stats.map((item) => (
          <div className={styles.item} key={item.title}>
            <strong>{item.number}</strong>
            <span>{item.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
}