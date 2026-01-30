const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <h2>Matrix AI</h2>
            <button
        style={styles.btn}
        onClick={() =>
            document.getElementById("contact").scrollIntoView({
            behavior: "smooth"
            })
        }
        >
        Get Consultation
        </button>

    </nav>
  );
};

const styles = {
  nav: {
    padding: "20px 10%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#020617",
    position: "sticky",
    top: 0,
    zIndex: 10
  },
  btn: {
    padding: "10px 18px",
    background: "#38bdf8",
    borderRadius: "6px",
    color: "#020617",
    fontWeight: "600"
  }
};

export default Navbar;
