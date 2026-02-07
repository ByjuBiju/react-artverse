import "./CtaSection.css";
import { useNavigate } from "react-router-dom";

const CtaSection = () => {
  const navigate = useNavigate();

  return (
    <section className="cta">
      <div className="cta-content">
        <h2>Ready to Own Original Art?</h2>

        <p>
          Browse our collection of unique paintings and sketches. Each piece is
          one-of-a-kind and ready to enhance your space.
        </p>

        <button className="cta-btn"onClick={() => navigate("/shop")}>BROWSE COLLECTION</button>
      </div>
    </section>
  );
};

export default CtaSection;
