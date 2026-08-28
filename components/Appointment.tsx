"use client";

import { FormEvent, useState } from "react";

const consultationFees = {
  "Phone Call": 499,
  "Video Call": 799,
  "Direct Meeting": 999,
};

export default function Appointment() {
  const [consultation, setConsultation] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    console.log({
      name: form.get("name"),
      phone: form.get("phone"),
      email: form.get("email"),
      date: form.get("date"),
      time: form.get("time"),
      consultation,
      amount:
        consultationFees[
          consultation as keyof typeof consultationFees
        ],
      message: form.get("message"),
    });

    alert(
      `Consultation: ${consultation}\nFee: ₹${
        consultationFees[
          consultation as keyof typeof consultationFees
        ]
      }`
    );
  };

  return (
    <section className="appointmentHero">
      <div className="appointmentInner">

        <div className="appointmentIntro">
          <p className="appointmentEyebrow">
            BOOK A CONSULTATION
          </p>

          <h1>
            Your Journey.
            <br />
            <span>Starts Here.</span>
          </h1>

          <p className="appointmentDescription">
            Schedule a personalised numerology consultation and gain
            clarity, insight and direction based on your individual
            numerological profile.
          </p>

          <div className="appointmentNote">
            <span>NUMEROLOGY CONSULTATION</span>

            <p>
              Choose your preferred consultation method and provide
              your details. Our team will get back to you shortly.
            </p>
          </div>
        </div>

        <form
          className="appointmentForm"
          onSubmit={handleSubmit}
        >

          <div className="formRow">

            <div className="formGroup">
              <label>Your Name</label>

              <input
                name="name"
                type="text"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="formGroup">
              <label>Phone Number</label>

              <input
                name="phone"
                type="tel"
                placeholder="Enter your phone number"
                required
              />
            </div>

          </div>

          <div className="formGroup">
            <label>Email Address</label>

            <input
              name="email"
              type="email"
              placeholder="Enter your email address"
              required
            />
          </div>

          <div className="formRow">

            <div className="formGroup">
              <label>Preferred Date</label>

              <input
                name="date"
                type="date"
                required
              />
            </div>

            <div className="formGroup">
              <label>Preferred Time</label>

              <input
                name="time"
                type="time"
                required
              />
            </div>

          </div>

          <div className="formGroup">
            <label>Consultation Type</label>

            <div className="consultationOptions">

              {Object.entries(consultationFees).map(
                ([name, fee]) => (
                  <label
                    className="consultationOption"
                    key={name}
                  >
                    <input
                      type="radio"
                      name="consultation"
                      value={name}
                      required
                      checked={consultation === name}
                      onChange={() => setConsultation(name)}
                    />

                    <span>
                      <strong>{name}</strong>
                      <small>₹{fee}</small>
                    </span>
                  </label>
                )
              )}

            </div>
          </div>

          {consultation && (
            <div className="appointmentSummary">
              <span>SELECTED CONSULTATION</span>

              <strong>{consultation}</strong>

              <b>
                ₹
                {
                  consultationFees[
                    consultation as keyof typeof consultationFees
                  ]
                }
              </b>
            </div>
          )}

          <div className="formGroup">
            <label>Your Message</label>

            <textarea
              name="message"
              rows={5}
              placeholder="Tell us how we can help you..."
            />
          </div>

          <button
            className="appointmentSubmit"
            type="submit"
          >
            Book Appointment →
          </button>

        </form>

      </div>
    </section>
  );
}