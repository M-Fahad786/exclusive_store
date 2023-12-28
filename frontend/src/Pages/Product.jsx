import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import BreadCrum from "../Components/BreadCrums/BreadCrum";
import Productdisplay from "../Components/ProductDisplay/Productdisplay";
import ProductDescription from "../Components/ProductDescription/ProductDescription";
import RelatedProducts from "../Components/RelatedProducts/RelatedProducts";

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
          <ProductDescription />
          <RelatedProducts />
        </>
      )}
    </section>
  );
};

export default Product;
