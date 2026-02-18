require("dotenv").config();

const express = require("express");
const cors = require("cors");
const Razorpay = require("razorpay");

const app = express();

/* =========================
   MIDDLEWARE
========================= */
app.use(
  cors({
    origin: "https://byjubiju.github.io", // GitHub Pages
    methods: ["GET", "POST"],
  })
);

app.use(express.json()); // VERY IMPORTANT

/* =========================
   TEST ROUTE
========================= */
app.get("/", (req, res) => {
  res.send("Artverse Backend is running 🚀");
});

/* =========================
   RAZORPAY INSTANCE
========================= */
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

/* =========================
   CREATE ORDER ROUTE
========================= */
app.post("/create-order", async (req, res) => {
  try {
    const { amount } = req.body;

    console.log("Amount received:", amount); // debug log

    if (!amount) {
      return res.status(400).json({ error: "Amount is required" });
    }

    const order = await razorpay.orders.create({
      amount: amount * 100, // rupees → paise
      currency: "INR",
      receipt: "receipt_" + Date.now(),
    });

    res.json(order);
  } catch (err) {
    console.error("Razorpay Error:", err);
    res.status(500).json({ error: "Order creation failed" });
  }
});

/* =========================
   START SERVER (RENDER)
========================= */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
