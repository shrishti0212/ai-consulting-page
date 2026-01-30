import { useState } from "react";

const Contact = () => {
    const [submitted, setSubmitted] = useState(false);

    if (submitted) {
    return (
      <section id="contact">
        <h2>Thank you!</h2>
        <p>We’ll get back to you shortly.</p>
      </section>
    );
  }

  return (
    <section id="contact">
      <h2>Contact Us</h2>

      <form
        action="https://formspree.io/f/mwvbavqr"
        method="POST"
        onSubmit={() => setSubmitted(true)}
        style={styles.form}
      >
        <input style={styles.input} name="name" placeholder="Your Name" required />
        <input
          style={styles.input}
          type="email"
          name="email"
          placeholder="Email"
          required
        />
        <textarea
          style={styles.input}
          name="message"
          placeholder="Your Message"
          required
        />
        <button style={styles.btn} type="submit">
          Send Message
        </button>
      </form>
    </section>
  );
};


const styles = {
  form: {
    marginTop: "30px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    maxWidth: "420px"
  },
  input: {
    padding: "12px",
    borderRadius: "6px",
    border: "none",
    outline: "none"
  },
  btn: {
    padding: "12px",
    background: "#38bdf8",
    borderRadius: "6px",
    fontWeight: "600"
  }
};


export default Contact;
