import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Shopone from "./components/Shopone";
import Paint from "./components/Paint";
import Sket from "./components/Sket";
import ScrollToTop from "./components/ScrollToTop";
import Cart from "./components/Cart";
import Success from "./components/Success";
import Cancel from "./components/Cancel";

function App() {
  // ✅ Load cart from localStorage when app starts
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // ✅ Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
  };

  const removeFromCart = (index) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <BrowserRouter basename="/react-artverse">
      <ScrollToTop />
      <Navbar cartCount={cartItems.length} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* SHOP */}
        <Route
          path="/shop"
          element={<Shopone addToCart={addToCart} />}
        />

        {/* CART */}
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              removeFromCart={removeFromCart}
            />
          }
        />

        {/* STRIPE REDIRECT ROUTES */}
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />

        <Route path="/paint" element={<Paint />} />
        <Route path="/sket" element={<Sket />} />

        {/* Redirect unknown routes */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
