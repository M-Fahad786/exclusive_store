import Logo from "../Assets/logo.png";
import Carticon from "../Assets/cart_icon.png";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const menuItems = [
  { key: "/", label: "Home" },
  { key: "mens", label: "Mens" },
  { key: "womens", label: "Womens" },
  { key: "kids", label: "Kids" },
];

export default function Navbar() {
  return (
    <nav className="navbar">
      {/* Navbar Logo */}
      <div className="navbar-logo">
        <img src={Logo} alt="Store Logo" />
        <NavLink to="/">
          <p>Exclusive</p>
        </NavLink>
      </div>
      {/* Navbar Menu */}
      <ul className="navbar-menu">
        {menuItems.map((item) => (
          <li key={item.key}>
            <NavLink
              to={item.key}
              activeclassname="true"
              style={{ textDecoration: "none", color: "#000" }}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
      {/* Navbar Login */}
      <div className="nav-login">
        <NavLink to="login">
          <button>Login</button>
        </NavLink>
        <NavLink to="cart">
          <img src={Carticon} alt="Cart Icon" />
        </NavLink>
        <div className="nav_cart-counter">0</div>
      </div>
    </nav>
  );
}
