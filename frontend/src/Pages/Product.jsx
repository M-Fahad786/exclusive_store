import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import BreadCrum from "../Components/BreadCrums/BreadCrum";
import Productdisplay from "../Components/ProductDisplay/Productdisplay";

const Product = () => {
  const { allProducts } = useContext(ShopContext);
  const { productId } = useParams();

  const product = allProducts.find((e) => e.id === Number(productId));

  return (
    <section>
      {product && (
        <>
          <BreadCrum product={product} />
          <Productdisplay product={product} />
        </>
      )}
    </section>
  );
};

export default Product;
