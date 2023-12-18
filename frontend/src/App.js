import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Navbar from "./Components/Navbar/Navbar";
import ProductDetails from "./Pages/ProductDetails";
import Products from "./Pages/Product";
import Footer from "./Components/Footer/Footer"
import "./App.css";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/mens"
          element={<ProductDetails category="mens" />}
        ></Route>
        <Route
          path="/womens"
          element={<ProductDetails category="womens" />}
        ></Route>
        <Route
          path="/kids"
          element={<ProductDetails category="kids" />}
        ></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path=":productId" element={<Products />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}
