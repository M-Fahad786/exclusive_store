import { PropTypes } from "prop-types";
import "./Item.css";
export default function Item({ image, name, newPrice, oldPrice}) {
  return (
    <article className="item">
      <img src={image} alt="Item img" />
      <p>{name}</p>
      <div className="items-price">
        <div className="items-prices-new">${newPrice}</div>
        <div className="items-prices-old">${oldPrice}</div>
      </div>
    </article>
  );
}
Item.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  newPrice: PropTypes.number.isRequired,
  oldPrice: PropTypes.number.isRequired,
};
