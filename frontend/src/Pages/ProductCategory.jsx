import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import Item from "../Components/Website Items/Item";
import "./CSS/ProductCategory.css";
import dropdownIcon from "../Components/Assets/dropdown_icon.png";

export default function ProductCategory({ banner, category }) {
  const { allProducts } = useContext(ShopContext);

  return (
    <section className="product-category">
      <img
        className="product-category-banner"
        src={banner}
        alt="Product Categories"
      />
      <article className="product-category-indexSort">
        <p>
          <span>Showing 1-12</span>
          out of {allProducts.length} products
        </p>
        <div className="product-details-sort">
          Sort by <img src={dropdownIcon} alt="Drop Down Icon" />
        </div>
      </article>
      <article className="websites-products">
        {allProducts.map((item, i) => {
          if (category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                oldPrice={item.oldPrice}
                newPrice={item.newPrice}
              />
            );
          } else {
            return <p>No Product Found! Please Try Again.</p>;
          }
        })}
      </article>
      <section className="load-more-btn">Explore More</section>
    </section>
  );
}
