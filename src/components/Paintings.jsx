import "./Paintings.css";
import { useNavigate } from "react-router-dom";

import art1 from "./images/deadpool.jpg";

const artworks = [
  {
    img: art1,
    type: "PAINTING",
    title: "Deadpool Art" ,
    price: 500,
    desc: "21.0 cm x 29.7 cm",
    small: true 
  }
];

const Paintings = () => {
  const navigate = useNavigate();

  return (
    <section className="shop-section">
      <div className="shop-header">
        <p className="shop-tag">BROWSE COLLECTION</p>
        <h1 className="shop-title">Paintings</h1>

        <div className="shop-filters">
          <button
            className="filter-btn"
            onClick={() => navigate("/shop")}
          >
            ALL ARTWORKS
          </button>
          <button
            className="filter-btn active"
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

              <button className="cartt-btn">ADD TO CART</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Paintings;
