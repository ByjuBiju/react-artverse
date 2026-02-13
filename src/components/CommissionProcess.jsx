import "./CommissionProcess.css";

import img1 from "./images/couple.png";
import img2 from "./images/frnds.png";
import img3 from "./images/frin.png";
import img4 from "./images/fam.png";
import img5 from "./images/emee.png";
import img6 from "./images/par.png";
import img7 from "./images/actt.png";

const commissions = [
  { img: img1 },
  { img: img2 },
  { img: img3 },
  { img: img4 },
  { img: img5 },
  { img: img6 },
  { img: img7 },
];

const CommissionProcess = () => {
  return (
    <section className="commission-section">
      <p className="commission-tag">COMMISSION WORKS</p>
      <h2 className="commission-title">Bringing Your Vision to Life</h2>

      <div className="commission-cards">
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

export default CommissionProcess;
