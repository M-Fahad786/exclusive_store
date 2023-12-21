import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import BreadCrum from "../Components/BreadCrums/BreadCrum";

export default function Product() {
  const { allProducts } = useContext(ShopContext);
  const {productId} = useParams();
  const product = allProducts.find((e) => e.id === Number(productId));
  return (
    <section>
      <BreadCrum product={product} />
    </section>
  );
}
