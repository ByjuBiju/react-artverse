require("dotenv").config();
const express = require("express");
const cors = require("cors");
const Stripe = require("stripe");

const app = express();
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

app.use(cors());
app.use(express.json());

app.post("/create-checkout-session", async (req, res) => {
    try {
      console.log("Body:", req.body);
  
      const { cartItems } = req.body;
  
      if (!cartItems) {
        return res.status(400).json({ error: "No cart items received" });
      }
  
      const line_items = cartItems.map((item) => ({
        price_data: {
          currency: "inr",
          product_data: {
            name: item.title,
          },
          unit_amount: Math.round(item.price * 100),
        },
        quantity: 1,
      }));
  
      const session = await stripe.checkout.sessions.create({
        line_items,
        mode: "payment",
        success_url: "http://localhost:5181/success",
        cancel_url: "http://localhost:5181/cart",
      });
  
      res.json({ url: session.url });
    } catch (err) {
      console.error("Stripe ERROR:", err.message);
      res.status(500).json({ error: err.message });
    }
  });
  
  

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
