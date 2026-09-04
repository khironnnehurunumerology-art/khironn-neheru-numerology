import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        {/* BRAND */}
        <div className={styles.brand}>
          <Link href="/#home" className={styles.logo}>
            <span>KN</span>

            <div>
              <strong>Dr. Khironn Neheru</strong>
              <small>NUMEROLOGIST</small>
            </div>
          </Link>

          <p>
            Personalised numerology guidance designed to bring
            clarity, insight and direction to your journey.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className={styles.links}>
          <span>QUICK LINKS</span>

          <Link href="/#home">Home</Link>
          <Link href="/#about">About</Link>
          <Link href="/#services">Services</Link>
          <Link href="/#contact">Contact</Link>
          <Link href="/appointment">Book Appointment</Link>
        </div>

        {/* CONTACT */}
        <div className={styles.contact}>
          <span>CONTACT</span>

          <a href="tel:9121685513">
            9121685513
          </a>

          <a href="mailto:khironnnehurunumerology@gmail.com">
            khironnnehurunumerology@gmail.com
          </a>

          <p>
            Manikonda, Hyderabad,
            <br />
            Telangana - 500089
          </p>
        </div>

      </div>

      {/* BOTTOM */}
      <div className={styles.bottom}>
        <p>
          © {new Date().getFullYear()} Dr. Khironn Neheru. All rights reserved.
        </p>

        <div>
          <Link href="/privacy-policy">
            Privacy Policy
          </Link>

          <Link href="/terms-and-conditions">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}