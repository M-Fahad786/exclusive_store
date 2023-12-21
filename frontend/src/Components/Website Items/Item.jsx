import { NavLink } from "react-router-dom";
import "./Item.css";
export default function Item({ image, name, newPrice, oldPrice, id }) {
  return (
    <article className="item">
      <NavLink to={`/product/${id}`}>
        <img src={image} alt="Item img" />
      </NavLink>
      <p>{name}</p>
      <div className="items-price">
        <div className="items-prices-new">${newPrice}</div>
        <div className="items-prices-old">${oldPrice}</div>
      </div>
    </article>
  );
}
