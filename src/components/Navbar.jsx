import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ cartCount }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div
  className="navbar-logo"
  onClick={() => {
    setOpen(false);
    navigate("/");
  }}
  style={{ cursor: "pointer" }}
>
  ARTVERSE
</div>


      <div className="hamburger" onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`navbar-links ${open ? "active" : ""}`}>
        <NavLink
          to="/"
          onClick={() => setOpen(false)}
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          HOME
        </NavLink>

        <NavLink
          to="/about"
          onClick={() => setOpen(false)}
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          ABOUT
        </NavLink>

        <NavLink
          to="/shop"
          onClick={() => setOpen(false)}
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          SHOP
        </NavLink>

        <NavLink
          to="/contact"
          onClick={() => setOpen(false)}
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          CONTACT
        </NavLink>

        <button
          className="cart-btn"
          onClick={() => {
            setOpen(false);
            navigate("/cart");
          }}
        >
          <i className="fa-solid fa-cart-shopping"></i>
          CART
          <span className="cart-count">{cartCount}</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
