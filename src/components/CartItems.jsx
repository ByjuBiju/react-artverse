import "./CartItems.css";
<<<<<<< HEAD
import { useNavigate } from "react-router-dom";
=======
import { loadStripe } from "@stripe/stripe-js";

// 🔑 Replace with your real Stripe publishable key
const stripePromise = loadStripe("pk_test_YOUR_PUBLISHABLE_KEY");
>>>>>>> origin/main

const CartItems = ({ cartItems, removeFromCart }) => {
  const navigate = useNavigate(); // ✅ Correctly inside the component

  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = async () => {
    try {
<<<<<<< HEAD
      if (cartItems.length === 0) {
        alert("Your cart is empty!");
        return;
      }
=======
      const stripe = await stripePromise;
>>>>>>> origin/main

      const response = await fetch("http://localhost:5000/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
<<<<<<< HEAD
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
=======
        body: JSON.stringify({
          cartItems: cartItems,
        }),
      });

      const session = await response.json();

      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        console.log(result.error.message);
      }
    } catch (error) {
      console.log("Checkout Error:", error);
>>>>>>> origin/main
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
<<<<<<< HEAD
                  <i className="bi bi-trash"></i>
=======
                  <svg
                    className="w-6 h-6 text-gray-800 dark:text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.586 2.586A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4a2 2 0 0 1 .586-1.414ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z"
                      clipRule="evenodd"
                    />
                  </svg>
>>>>>>> origin/main
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

<<<<<<< HEAD
=======
          {/* ✅ CONNECTED STRIPE BUTTON */}
>>>>>>> origin/main
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
