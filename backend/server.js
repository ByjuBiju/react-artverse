require("dotenv").config();

const express = require("express");
const cors = require("cors");
const Razorpay = require("razorpay");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Razorpay instance
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// Test route (important for checking Render deployment)
app.get("/", (req, res) => {
  res.send("Artverse Backend is running 🚀");
});

// Create Order Route
app.post("/create-order", async (req, res) => {
  try {
    const { cartItems } = req.body;

    if (!cartItems || cartItems.length === 0) {
      return res.status(400).json({ error: "Cart is empty" });
    }

    const totalAmount = cartItems.reduce(
      (sum, item) => sum + item.price,
      0
    );

    const options = {
      amount: totalAmount * 100, // convert to paise
      currency: "INR",
      receipt: "receipt_order_" + Date.now(),
    };

    const order = await razorpay.orders.create(options);

    res.json({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      key: process.env.RAZORPAY_KEY_ID,
    });
  } catch (error) {
    console.error("Razorpay Error:", error);
    res.status(500).json({ error: error.message });
  }
});

// ✅ IMPORTANT FIX FOR RENDER
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
