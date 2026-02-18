import "./CartItems.css";
import { useNavigate } from "react-router-dom";

const CartItems = ({ cartItems, removeFromCart }) => {
  const navigate = useNavigate();

  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = () => {
    if (!window.paypal) {
      alert("PayPal SDK not loaded");
      return;
    }

    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    // Clear previous render (important)
    document.getElementById("paypal-button-container").innerHTML = "";

    window.paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: (subtotal / 83).toFixed(2), // INR → USD
                },
              },
            ],
          });
        },

        onApprove: (data, actions) => {
          return actions.order.capture().then((details) => {
            alert(
              "Payment successful 🎉 Thank you " +
                details.payer.name.given_name
            );
          });
        },
      })
      .render("#paypal-button-container");
  };

  return (
    <section className="cart-page">
      <h1 className="cart-title">Your Cart</h1>

      <div className="cart-wrapper">
        {/* LEFT SIDE */}
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

        {/* RIGHT SIDE */}
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

          {/* ✅ YOUR CUSTOM BUTTON */}
          <button className="checkout-btn" onClick={handleCheckout}>
            PROCEED TO CHECKOUT →
          </button>

          {/* PayPal popup renders here */}
          <div id="paypal-button-container"></div>

          <p
            className="continue"
            onClick={() => navigate("/shop")}
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
