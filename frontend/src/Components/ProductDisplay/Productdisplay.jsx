import React, { useContext } from "react";
import "./Productdisplay.css";
import starIcon from "../Assets/star_icon.png";
import starIcondull from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const Productdisplay = ({ product }) => {
  const { image, name, oldPrice, newPrice, id } = product;

  const starIcons = Array.from({ length: 5 }, (_, index) => (
    <img
      key={index}
      src={index < 4 ? starIcon : starIcondull}
      alt={`Star ${index + 1}`}
      className="star-icon"
    />
  ));

  const productImages = Array.from({ length: 4 }, (_, index) => (
    <img
      key={index}
      src={image}
      alt={`Product Pic ${index + 1}`}
      className="product-image"
    />
  ));

  const { addToCart } = useContext(ShopContext);
  return (
    <section className="product-display">
      <article className="product-display-left">
        <div className="product-img-list">{productImages}</div>
        <div className="product-img">
          <img src={image} alt="Display Pic" className="product-main-img" />
        </div>
      </article>
      <article className="product-display-right">
        <h1>{name}</h1>
        <div className="product-rating">
          {starIcons}
          <p>(250+)</p>
        </div>
        <div className="product-prices">
          <div className="old-product-price">${oldPrice}</div>
          <div className="new-product-price">${newPrice}</div>
        </div>
        <div className="product-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          iusto corporis cumque vitae, ex assumenda explicabo impedit, qui enim,
          architecto officia.
        </div>
        <div className="product-sizes">
          <h1>Select Console</h1>
          <div className="product-size-list">
            <div>Ps5</div>
            <div>Ps4</div>
            <div>XboxX</div>
            <div>XboxS</div>
            <div>PC</div>
          </div>
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            addToCart(id);
          }}
        >
          ADD TO CART
        </button>
        <p className="product-category">
          <span>Category: </span>
          Women , T-Shirt Crop Top
        </p>
        <p className="product-category">
          <span>Tags: </span>
          Modern, Latest
        </p>
      </article>
    </section>
  );
};

export default Productdisplay;
