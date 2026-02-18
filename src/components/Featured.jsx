import "./Featured.css";
import art3 from "./images/Spider with frame.png";
import art6 from "./images/walterwhite with frame.png";
import art7 from "./images/ani.png";
import { Link } from "react-router-dom";

const Featured = () => {
  return (
    <section className="featured">
      <div className="featured-header">
        <div>
          <p className="featured-tag">SELECTED WORKS</p>
          <h2 className="featured-title">Featured Pieces</h2>
        </div>

 

<Link to="/shop" className="view-all">VIEW ALL</Link>

           
          
      </div>

      <div className="featured-grid">
        <div className="featured-card">
          <img src={art3} alt="Abstract Harmony" />
          <h3>Spiderman & Venom</h3>
        </div>

        <div className="featured-card">
          <img src={art6} alt="Midnight Blue" />
          <h3>Walter White</h3>
        </div>

        <div className="featured-card">
          <img src={art7} alt="Portrait Study" />
          <h3>Jujutsu Kaisen</h3>
        </div>
      </div>
    </section>
  );
};

export default Featured;
