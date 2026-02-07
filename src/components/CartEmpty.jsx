import "./CartEmpty.css";
import { useNavigate } from "react-router-dom";

const CartEmpty = () => {
  const navigate = useNavigate();

  return (
    <section className="cart-empty">
      <div className="cart-empty-box">
        <div className="cart-icon">
          🛍️
        </div>

        <h1>Your Cart is Empty</h1>

        <p>
          Discover beautiful artworks and add them to your collection.
        </p>

        <button
          className="browse-btn"
          onClick={() => navigate("/shop")}
        >
          BROWSE SHOP →
        </button>
      </div>
    </section>
  );
};

export default CartEmpty;
