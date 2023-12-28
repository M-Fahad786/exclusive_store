import dataProduct from "../Assets/data";
import Item from "../Website Items/Item";
import "./RelatedProducts.css";
export default function RelatedProducts() {
  return (
    <section className="related-products">
      <h1> Related Products</h1>
      <div className="related-items">
        {dataProduct.map(({ id, name, image, oldPrice, newPrice }, i) => {
          return (
            <Item
              key={i}
              id={id}
              name={name}
              image={image}
              oldPrice={oldPrice}
              newPrice={newPrice}
            />
          );
        })}
      </div>
    </section>
  );
}
