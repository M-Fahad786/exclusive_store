import "./Navbar.css";
import Logo from "../Assets/logo.png";
import Carticon from "../Assets/cart_icon.png";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [menu, setMenu] = useState("home");
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={Logo} alt="Store Logo" />
        <a href="/">
          <p>Exclusive</p>
        </a>
      </div>
      <ul className="navbar-menu">
        <li
          onClick={() => {
            setMenu("home");
          }}
          className={menu === "home" ? "active" : ""}
        >
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            Home
          </Link>
        </li>
        <li
          onClick={() => {
            setMenu("mens");
          }}
          className={menu === "mens" ? "active" : ""}
        >
          <Link to="mens" style={{ textDecoration: "none", color: "black" }}>
            Men
          </Link>
        </li>
        <li
          onClick={() => {
            setMenu("womens");
          }}
          className={menu === "womens" ? "active" : ""}
        >
          <Link to="womens" style={{ textDecoration: "none", color: "black" }}>
            Women
          </Link>
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
          className={menu === "kids" ? "active" : ""}
        >
          <Link to="kids" style={{ textDecoration: "none", color: "black" }}>
            Kids
          </Link>
        </li>
      </ul>
      <div className="nav-login">
        <Link to="login">
          <button>Login</button>
        </Link>
        <Link to="cart">
          <img src={Carticon} alt="Cart Icon" />
        </Link>
        <div className="nav_cart-counter">0</div>
      </div>
    </nav>
  );
}
