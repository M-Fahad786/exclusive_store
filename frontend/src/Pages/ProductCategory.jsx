import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import "./CSS/ProductCategory.css";

export default function ProductCategory({ banner }) {
  const { allProducts } = useContext(ShopContext);
  return (
    <section className="product-category">
      <img src={banner} alt="" />
    </section>
  );
}
