import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>

        {/* CONTENT */}
        <div className={styles.content}>

          <div className={styles.eyebrow}>
            NUMEROLOGY • LEGACY SINCE 1987
          </div>

          <h1 className={styles.title}>
            Discover The
            <br />
            <span className={styles.gold}>Power Of</span>
            <br />
            Numbers
          </h1>

          <p className={styles.description}>
            Dr. Khironn Neheru is a numerologist with more than
            23 years of experience, continuing a family legacy
            established in 1987 and serving clients across
            71 countries.
          </p>

          <div className={styles.actions}>
            <Link
              href="/appointment"
              className={styles.primary}
            >
              Book A Consultation →
            </Link>

            <Link
              href="/about"
              className={styles.secondary}
            >
              Explore The Legacy →
            </Link>
          </div>

        </div>

        {/* VISUAL */}
        <div className={styles.visual}>
          <div className={styles.circle}>
            <div className={styles.number}>9</div>
          </div>
        </div>

      </div>
    </section>
  );
}