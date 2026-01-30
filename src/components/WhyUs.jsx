const points = [
  "AI-first development approach",
  "Fast MVP delivery",
  "Scalable and secure solutions",
  "Cost-efficient implementation"
];

const WhyUs = () => {
  return (
    <section>
      <h2>Why Choose Us</h2>
      <ul style={styles.list}>
        {points.map((p, i) => (
          <li key={i}>✔ {p}</li>
        ))}
      </ul>
    </section>
  );
};

const styles = {
  list: {
    marginTop: "30px",
    lineHeight: "2",
    listStyle: "none"
  }
};

export default WhyUs;
