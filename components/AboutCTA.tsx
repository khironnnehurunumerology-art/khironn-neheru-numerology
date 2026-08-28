import Link from "next/link";
import styles from "./AboutCTA.module.css";

export default function AboutCTA() {
  return (
    <section className={styles.cta}>
      <div className={styles.container}>

        {/* LEFT CONTENT */}
        <div className={styles.content}>
          <p className={styles.eyebrow}>
            BEGIN YOUR JOURNEY
          </p>

          <h2>
            Find Clarity.
            <br />
            <span>Move Forward.</span>
          </h2>

          <p className={styles.description}>
            Discover personalised numerology guidance with Dr.
            Khironn Neheru, based on your name, date of birth and
            individual numerological profile. Gain deeper insight
            and direction through a personalised numerology
            consultation.
          </p>

          <Link
            href="/appointment"
            className={styles.button}
            aria-label="Book a numerology consultation with Dr. Khironn Neheru"
          >
            Book A Consultation
            <span>→</span>
          </Link>
        </div>

        {/* RIGHT NUMEROLOGY SYMBOL */}
        <div
          className={styles.symbol}
          aria-label="Numerology symbol"
        >
          <div className={styles.circleOne}>
            <div className={styles.circleTwo}>
              <div className={styles.circleThree}>
                <span>9</span>
                <small>NUMEROLOGY</small>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}