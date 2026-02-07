import "./Hero.css";
import heroImage from "./images/first.jpg";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero-left">
        <p className="hero-tag">ORIGINAL ARTWORK</p>

        <h1 className="hero-title">
          Art That <br />
          Speaks <span>Volumes</span>
        </h1>

        <p className="hero-desc">
          Paintings and pencil sketches crafted with passion.
        </p>

        <div className="hero-buttons">
          <button
            className="btn-primary"onClick={() => navigate("/shop")}>EXPLORE SHOP →
          </button>

          <button
            className="btn-outline"onClick={() => navigate("/about")}>ABOUT ARTIST
          </button>
        </div>
      </div>

      <div className="hero-right">
        <img src={heroImage} alt="Artwork" />
      </div>
    </section>
  );
};

export default Hero;
