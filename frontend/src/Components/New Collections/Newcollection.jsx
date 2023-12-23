import newCollections from "../Assets/newCollections";
import Item from "../Website Items/Item";
import "./Newcollection.css";
export default function NewCollection() {
  return (
    <section className="newCollections">
      <h1>NEW RELEASES</h1>
      <hr />
      <article className="itemCollections">
        {newCollections.map(({ id, name, image, oldPrice, newPrice }, i) => {
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
      </article>
    </section>
  );
}
