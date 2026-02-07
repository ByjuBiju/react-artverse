import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Shopone from "./components/Shopone";
import Shop from "./components/Shop";
import Paint from "./components/Paint";
import Sket from "./components/Sket";
import ScrollToTop from "./components/ScrollToTop";
import Cart from "./components/Cart";

function App() {
 const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
  };

  const removeFromCart = (index) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar cartCount={cartItems.length} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
<Route
  path="/shop"
  element={<Shopone addToCart={addToCart} />}
/>

<Route
  path="/cart"
  element={
    <Cart
      cartItems={cartItems}
      removeFromCart={removeFromCart}
    />
  }
/>


        <Route path="/contact" element={<Contact />} />
        <Route path="/paint" element={<Paint />} />
        <Route path="/sket" element={<Sket />} />
        <Route path="/shop" element={<Shop />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
