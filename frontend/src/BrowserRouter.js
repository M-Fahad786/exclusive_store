// AppRoutes.js
import { Route, Routes } from "react-router-dom";
import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import ProductCategory from "./Pages/ProductCategory";
import Product from "./Pages/Product";
import menBanner from "./Components/Assets/banner_mens.png";
import womenBanner from "./Components/Assets/banner_women.png";
import kidsBanner from "./Components/Assets/banner_kids.png";

export default function BrowserRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/playstation"
        element={<ProductCategory banner={menBanner} category="mens" />}
      />
      <Route
        path="/xbox"
        element={<ProductCategory banner={womenBanner} category="womens" />}
      />
      <Route
        path="/pc"
        element={<ProductCategory banner={kidsBanner} category="kids" />}
      />
      <Route path="/product" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path=":productId" element={<Product />} />
    </Routes>
  );
}
