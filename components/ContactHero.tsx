import styles from "./ContactHero.module.css";

export default function ContactHero() {
  return (
    <section className={styles.contactHero}>
      <div className={styles.contactHeroInner}>

        <div>
          <p className={styles.contactEyebrow}>GET IN TOUCH</p>

          <h1>
            Let&apos;s Start
            <br />
            <span>A Conversation.</span>
          </h1>

          <p className={styles.contactIntro}>
            Have a question about numerology or want to book a
            consultation? We&apos;re here to help.
          </p>
        </div>

        <div className={styles.contactDetails}>

          <div>
            <span>PHONE</span>
            <p>9121685513</p>
          </div>

          <div>
            <span>EMAIL</span>
            <p>khironnnehurunumerology@gmail.com</p>
          </div>

          <div>
            <span>OFFICE</span>
            <p>
              S/O. Penamal Sanjeev Nehru, Plot No. 35,
              Domine Power Building, Beside Ranihill Apartment,
              Opposite SBI Bank, Lanco Hills Road, Manikonda,
              Puppalaguda, K.V. Rangareddy,
              Telangana - 500089
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}