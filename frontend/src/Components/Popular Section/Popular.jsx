import dataProduct from "../Assets/data";
import Item from "../Website Items/Item";
import "./Popular.css";
export default function Popular() {
  return (
    <section className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <section className="popular-items">
        {dataProduct.map(({ id, name, image, newPrice, oldPrice }, i) => {
          return (
            <Item
              key={i}
              id={id}
              name={name}
              image={image}
              newPrice={newPrice}
              oldPrice={oldPrice}
            />
          );
        })}
      </section>
    </section>
  );
}
