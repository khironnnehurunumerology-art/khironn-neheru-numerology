import styles from "./ContactForm.module.css";

export default function ContactForm() {
  return (
    <section className={styles.contactFormSection}>
      <div className={styles.contactFormContainer}>

        <div className={styles.formIntro}>
          <p className={styles.eyebrow}>SEND A MESSAGE</p>

          <h2>
            Have Something
            <br />
            <span>To Ask?</span>
          </h2>

          <p>
            Share your details and message with us. Our team will
            get back to you as soon as possible.
          </p>
        </div>

        <form className={styles.form}>

          <div className={styles.row}>
            <div className={styles.field}>
              <label htmlFor="name">YOUR NAME</label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="phone">PHONE NUMBER</label>
              <input
                id="phone"
                type="tel"
                placeholder="Enter your phone number"
              />
            </div>
          </div>

          <div className={styles.field}>
            <label htmlFor="email">EMAIL ADDRESS</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email address"
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="message">YOUR MESSAGE</label>
            <textarea
              id="message"
              rows={5}
              placeholder="How can we help you?"
            />
          </div>

          <button type="submit">
            Send Message →
          </button>

        </form>

      </div>
    </section>
  );
}