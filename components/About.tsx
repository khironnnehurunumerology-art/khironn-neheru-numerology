import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.container}>

        {/* IMAGE SIDE */}
        <div className={styles.imageSide}>
          <div className={styles.imageFrame}>

            <img
              src="/khironn-neheru.png"
              alt="Dr. Khironn Neheru"
              className={styles.profileImage}
            />

            <span className={styles.imageLabel}>
              NUMEROLOGY
            </span>

          </div>

          <div className={styles.badge}>
            <strong>23+</strong>
            <span>YEARS OF EXPERIENCE</span>
          </div>
        </div>

        {/* CONTENT SIDE */}
        <div className={styles.content}>

          <p className={styles.eyebrow}>
            ABOUT DR. KHIRONN NEHERU
          </p>

          <h1 className={styles.title}>
            A Legacy
            <br />
            <span>Of Numerology.</span>
          </h1>

          <p className={styles.text}>
            Hello, I am Dr. Khironn Neheru, a numerologist with more
            than 23 years of experience. Over the years, I have had
            the opportunity to guide and serve clients across 71
            countries through numerology.
          </p>

          <p className={styles.text}>
            Numerology is not just my profession; it is a legacy that
            has been passed down through my family.
          </p>

          <p className={styles.text}>
            My father, Mr. Nehru, was also a renowned numerologist and
            previously worked as a DGM at BHEL. In 1986, he resigned
            from his job to completely dedicate his life to numerology.
          </p>

          <p className={styles.text}>
            He established our numerology office in 1987. Since then,
            we have been providing numerology guidance and consultation
            to lakhs of people across the world.
          </p>

          <a href="/about" className={styles.link}>
            Explore Our Legacy →
          </a>

        </div>

      </div>
    </section>
  );
}