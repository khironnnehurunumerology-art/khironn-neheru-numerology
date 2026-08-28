import styles from "./ContactOffice.module.css";

export default function ContactOffice() {
  return (
    <section className={styles.office}>
      <div className={styles.container}>

        <div className={styles.heading}>
          <p>VISIT OUR OFFICE</p>

          <h2>
            Let&apos;s Connect
            <br />
            <span>In Person.</span>
          </h2>
        </div>

        <div className={styles.details}>

          <div>
            <span>ADDRESS</span>

            <address>
              S/O. Penamal Sanjeev Nehru, Plot No. 35,
              Domine Power Building, Beside Ranihill Apartment,
              Opposite SBI Bank, Lanco Hills Road, Manikonda,
              Puppalaguda, K.V. Rangareddy,
              Telangana - 500089
            </address>
          </div>

          <div>
            <span>PHONE</span>

            <p>
              <a href="tel:+919121685513">
                +91 91216 85513
              </a>
            </p>
          </div>

          <div>
            <span>EMAIL</span>

            <p>
              <a href="mailto:khironnnehurunumerology@gmail.com">
                khironnnehurunumerology@gmail.com
              </a>
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}