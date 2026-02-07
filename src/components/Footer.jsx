import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-about">
          <h3>ARTVERSE</h3>
          <p>
            Original paintings and sketches created with passion and dedication.
          </p>
        </div>

        <div className="footer-links">
          <h4>QUICK LINKS</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-social">
          <h4>FOLLOW US</h4>
          <div className="social-icons">
            <a href="https://www.instagram.com/_byju_b_/" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.youtube.com/@Art_ver_se/" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-youtube"></i>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100084313997622" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="https://mail.google.com/mail/u/0/#inbox">
              <i className="fa-regular fa-envelope"></i>
            </a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Artverse. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
