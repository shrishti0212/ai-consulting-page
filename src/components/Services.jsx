const services = [
  "AI Strategy Consulting",
  "Custom AI Solutions",
  "ML Model Development",
  "AI Automation Systems"
];

const Services = () => {
  return (
    <section>
      <h2>Our Services</h2>
      <div style={styles.grid}>
        {services.map((service, i) => (
          <div key={i} style={styles.card}>
            <h3>{service}</h3>
            <p>
              We design and implement AI solutions tailored to your business needs.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  grid: {
    marginTop: "40px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px"
  },
  card: {
    padding: "25px",
    background: "#020617",
    borderRadius: "10px"
  }
};

export default Services;
