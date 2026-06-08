import "./Sketch.css";
import { useNavigate } from "react-router-dom";

import art2 from "./images/Krishna with frame.png";
import art4 from "./images/car with frame.png";
import art5 from "./images/Shiva with frame.png";
import art6 from "./images/walterwhite with frame.png";
import art7 from "./images/ani.png";
import art8 from "./images/monk.png";
import art9 from "./images/spa.jpg";
import art11 from "./images/ani.jpg";
import art10 from "./images/kpop.jpg";


const artworks = [
  {
    img: art9,
    type: "SKETCH",
    title: "Astronaut in Space",
    price: 4000,
    desc: "35.0 cm x 45.0 cm"
  },
  {
    img: art2,
    type: "SKETCH",
    title: "Krishna",
    price: 2000,
    desc: "29.7 cm x 42 cm"
  },
  {
    img: art5,
    type: "SKETCH",
    title: "Shiva",
    price: 1500,
    desc: "21.0 cm x 29.7 cm"
  },
  {
    img: art6,
    type: "SKETCH",
    title: "Walter White",
    price: 1500,
    desc: "21.0 cm x 29.7 cm"
  },
    {
    img: art7,
    type: "SKETCH",
    title: "Jujutsu Kaisen",
    price: 1500,
    desc: "21.0 cm x 29.7 cm"
  },
  {
    img: art8,
    type: "SKETCH",
    title: "Punch Monkey",
    price: 1500,
    desc: "21.0 cm x 29.7 cm"
  },
  {
    img: art10,
    type: "SKETCH",
    title: "Kim Tae-hyung",
    price: 1000,
    desc: "21.0 cm x 29.7 cm"
  },
  {
    img: art11,
    type: "SKETCH",
    title: "Anirudh",
    price: 1000,
    desc: "21.0 cm x 29.7 cm"
  },
  {
    img: art4,
    type: "SKETCH",
    title: "Car",
    price: 1000,
    desc: "21.0 cm x 29.7 cm"
  }
];

const Sketch = () => {
  const navigate = useNavigate();

  return (
    <section className="shop-section">
      <div className="shop-header">
        <p className="shop-tag">BROWSE COLLECTION</p>
        <h1 className="shop-title">Sketches</h1>

        <div className="shop-filters">
          <button
            className="filter-btn"
            onClick={() => navigate("/shop")}
          >
            ALL ARTWORKS
          </button>
          <button
            className="filter-btn"
            onClick={() => navigate("/paint")}
          >
            PAINTINGS
          </button>
          <button
            className="filter-btn active"
            onClick={() => navigate("/sket")}
          >
            SKETCHES
          </button>
        </div>
      </div>

      <div className="shop-grid">
        {artworks.map((item, index) => (
          <div className="shop-card" key={index}>
            <img
  src={item.img}
  alt={item.title}
  className={item.small ? "small-art-img" : ""}
/>


            <p className="art-type">{item.type}</p>

            <h3 className="art-title">{item.title}</h3>

            <p className="art-desc">{item.desc}</p>

            <div className="art-footer">
              <span className="art-price">
                <i className="fa-solid fa-indian-rupee-sign"></i> {item.price}.00
              </span>

              <button className="cartt-btn">ADD TO CART</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sketch;
