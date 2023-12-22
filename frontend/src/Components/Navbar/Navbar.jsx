import Logo from "../Assets/logo.png";
import Carticon from "../Assets/cart_icon.png";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useEffect, useState } from "react";

const menuItems = [
  { key: "/", label: "Home" },
  { key: "playstation", label: "PlayStation" },
  { key: "xbox", label: "Xbox" },
  { key: "pc", label: "PC" },
];

export default function Navbar() {
  const [theme, setTheme] = useState("dark-theme");

  const toggleTheme = () => {
    if (theme === "dark-theme") {
      setTheme("light-theme"); 
    } else {
      setTheme("dark-theme");
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <nav className="navbar">
      {/* Navbar Logo */}
      <div className="navbar-logo">
        <img src={Logo} alt="Store Logo" />
        <NavLink to="/">
          <p>Next-Gen Games</p>
        </NavLink>
      </div>
      {/* Navbar Menu */}
      <ul className="navbar-menu">
        {menuItems.map((item) => (
          <li key={item.key}>
            <NavLink
              to={item.key}
              activeclassname="true"
              style={{ textDecoration: "none", color: "#fff" }}
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
        <NavLink to="#" onClick={() => toggleTheme()}>
          <button>Toggle</button>
        </NavLink>
        <NavLink to="cart">
          <img src={Carticon} alt="Cart Icon" />
        </NavLink>
        <div className="nav_cart-counter">0</div>
      </div>
    </nav>
  );
}
