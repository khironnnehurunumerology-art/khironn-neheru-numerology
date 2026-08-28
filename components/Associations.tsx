import styles from "./Associations.module.css";

const personalities = [
  {
    name: "Boyapati Srinu",
    profession: "Film Director",
    image: "/images/boyapati-srinu.jpg",
  },
  {
    name: "Tamannaah",
    profession: "Actress",
    image: "/images/tamannaah.jpg",
  },
  {
    name: "Aamir Khan",
    profession: "Actor",
    image: "/images/aamir-khan.jpg",
  },
  {
    name: "Teja Sajja",
    profession: "Actor",
    image: "/images/teja-sajja.jpg",
  },
  {
    name: "Vishwak Sen",
    profession: "Actor",
    image: "/images/vishwak-sen.jpg",
  },
  {
    name: "Nithiin",
    profession: "Actor",
    image: "/images/nithiin.jpg",
  },
  {
    name: "Srinivasa Reddy",
    profession: "Film Director",
    image: "/images/srinivasa-reddy.jpg",
  },
  {
    name: "Usha",
    profession: "Singer",
    image: "/images/usha.jpg",
  },
  {
    name: "Deepu",
    profession: "Singer",
    image: "/images/deepu.jpg",
  },
];

export default function Associations() {
  return (
    <section className={styles.associations}>
      <div className={styles.container}>

        {/* HEADER */}
        <div className={styles.header}>
          <div>
            <p className={styles.eyebrow}>
              ASSOCIATIONS & EXPERIENCE
            </p>

            <h2 className={styles.title}>
              Trusted By
              <br />
              <span>People From Every Field.</span>
            </h2>
          </div>

          <p className={styles.intro}>
            Over the years, our numerology services have been
            associated with people from business, cinema,
            entertainment and various other professions.
          </p>
        </div>

        {/* PERSONALITY CARDS */}
        <div className={styles.cards}>
          {personalities.map((person, index) => (
            <div className={styles.card} key={person.name}>

              {/* IMAGE */}
              <div className={styles.imageWrapper}>
                <img
                  src={person.image}
                  alt={person.name}
                  className={styles.personImage}
                />
              </div>

              {/* CONTENT */}
              <div className={styles.cardContent}>

                <span className={styles.number}>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className={styles.personInfo}>
                  <h3>{person.name}</h3>
                  <p>{person.profession}</p>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* NOTE */}
        <div className={styles.note}>
          <span>OUR EXPERIENCE</span>

          <p>
            Our journey has given us the opportunity to guide
            individuals from diverse backgrounds and professions
            through personalised numerology consultation.
          </p>
        </div>

      </div>
    </section>
  );
}