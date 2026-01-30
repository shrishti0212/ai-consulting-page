const Hero = () => {
  return (
    <section style={styles.hero}>
      <h1>AI Consulting That Scales Your Business</h1>
      <p>
        We help startups and enterprises build AI-powered solutions faster and smarter.
      </p>
        <button
        style={styles.btn}
        onClick={() =>
            document.getElementById("contact").scrollIntoView({
            behavior: "smooth"
            })
        }
        >
        Book Free Consultation
        </button>

    </section>
  );
};

const styles = {
  hero: {
    textAlign: "center",
    minHeight: "80vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "20px"
  },
  btn: {
    marginTop: "20px",
    padding: "14px 24px",
    background: "#38bdf8",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "600",
    color: "#020617"
  }
};

export default Hero;
