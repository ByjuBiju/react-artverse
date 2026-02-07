import "./Shopone.css";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

import art1 from "./images/deadpool.jpg";
import art2 from "./images/Krishna with frame.png";
import art3 from "./images/Spider with frame.png";
import art4 from "./images/car with frame.png";
import art5 from "./images/Shiva with frame.png";
import art6 from "./images/walterwhite with frame.png";
import art7 from "./images/anime with frame.png";

const artworks = [
  {
    img: art1,
    type: "PAINTING",
    title: "Deadpool Art",
    price: 1000,
    desc: "21.0 cm x 29.7 cm",
    small: true
  },
  {
    img: art2,
    type: "SKETCH",
    title: "Krishna",
    price: 2000,
    desc: "29.7 cm x 42 cm"
  },
  {
    img: art3,
    type: "SKETCH",
    title: "Spiderman & Venom",
    price: 1000,
    desc: "21.0 cm x 29.7 cm"
  },
  {
    img: art4,
    type: "SKETCH",
    title: "Car",
    price: 1000,
    desc: "21.0 cm x 29.7 cm"
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
  }
];

const Shopone = ({ addToCart }) => {
  const navigate = useNavigate();

  return (
    <>
      <section className="shop-section">
        <div className="shop-header">
          <p className="shop-tag">BROWSE COLLECTION</p>
          <h1 className="shop-title">All Artworks</h1>

          <div className="shop-filters">
            <button
              className="filter-btn active"
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
              className="filter-btn"
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

                <button
                  className="cartt-btn"
                  onClick={() => addToCart(item)}
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </>
  );
};

export default Shopone;
