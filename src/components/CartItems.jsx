import "./CartItems.css";
import { useNavigate } from "react-router-dom";

const CartItems = ({ cartItems, removeFromCart }) => {
  const navigate = useNavigate(); // ✅ Correctly inside the component

  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = async () => {
    try {
      if (cartItems.length === 0) {
        alert("Your cart is empty!");
        return;
      }

      const response = await fetch("http://localhost:5000/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cartItems }),
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url; // ✅ Redirect to Stripe
      } else {
        alert("Something went wrong!");
      }
    } catch (error) {
      console.error("Checkout error:", error);
      alert("Checkout failed!");
    }
  };

  return (
    <section className="cart-page">
      <h1 className="cart-title">Your Cart</h1>

      <div className="cart-wrapper">
        {/* LEFT SIDE - CART ITEMS */}
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div className="cart-item" key={index}>
              <img src={item.img} alt={item.title} />

              <div className="cart-item-details">
                <h3>{item.title}</h3>
                <p className="price">₹ {item.price}.00</p>
                <p className="qty">Quantity: 1</p>
              </div>

              <div className="cart-item-right">
                <button
                  className="delete-btn"
                  onClick={() => removeFromCart(index)}
                >
                  <i className="bi bi-trash"></i>
                </button>

                <p className="total">₹ {item.price}.00</p>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE - ORDER SUMMARY */}
        <div className="order-summary">
          <h2>Order Summary</h2>

          <div className="summary-row">
            <span>Subtotal</span>
            <span>₹ {subtotal}.00</span>
          </div>

          <div className="summary-row">
            <span>Shipping</span>
            <span>Free</span>
          </div>

          <hr />

          <div className="summary-row total">
            <span>Total</span>
            <span>₹ {subtotal}.00</span>
          </div>

          <button className="checkout-btn" onClick={handleCheckout}>
            PROCEED TO CHECKOUT →
          </button>

          {/* CONTINUE SHOPPING */}
          <p
            className="continue"
            onClick={() => navigate("/shop")} // Navigate to shop page
            style={{ cursor: "pointer" }}
          >
            CONTINUE SHOPPING
          </p>
        </div>
      </div>
    </section>
  );
};

export default CartItems;
