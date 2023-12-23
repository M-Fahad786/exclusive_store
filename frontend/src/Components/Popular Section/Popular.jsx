import productData from "../Assets/data";
import Item from "../Website Items/Item";
import "./Popular.css";
export default function Popular() {
  return (
    <section className="popular">
      <h1>POPULAR GAMES IN Xbox</h1>
      <section className="popular-items">
        {productData.map(({ id, name, image, newPrice, oldPrice }, i) => {
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
