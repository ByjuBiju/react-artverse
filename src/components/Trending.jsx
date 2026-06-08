import "./Trending.css";
import { useRef } from "react";

import img1 from "./images/surya.jpg";
import img8 from "./images/com.png";
import img2 from "./images/sita.png";
import img3 from "./images/maveeran.jpg";

const commissions = [
  { img: img1 },
  { img: img2 },
  { img: img3 },
  { img: img8 },
];

const Trending= () => {
  const scrollRef = useRef(null);

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  return (
    <section className="commission-section">
      <p className="commission-tag">WORKS</p>

      <div className="title-wrapper">
        <h2 className="commission-title">
          Trending Now
        </h2>

        <button className="scroll-btn" onClick={scrollRight}>
          →
        </button>
      </div>

      <div className="commission-cards" ref={scrollRef}>
        {commissions.map((item, index) => (
          <div className="commission-card" key={index}>
            <img
              src={item.img}
              alt={`commission-${index}`}
              className="commission-img"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Trending;
