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
            <p>
              S/O. Penamal Sanjeev Nehru, Plot No. 35,
              Domine Power Building, Beside Ranihill Apartment,
              Opposite SBI Bank, Lanco Hills Road, Manikonda,
              Puppalaguda, K.V. Rangareddy,
              Telangana - 500089
            </p>
          </div>

          <div>
            <span>PHONE</span>
            <p>9121685513</p>
          </div>

          <div>
            <span>EMAIL</span>
            <p>khironnnehurunumerology@gmail.com</p>
          </div>

        </div>

      </div>
    </section>
  );
}