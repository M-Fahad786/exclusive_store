import "./Item.css";
export default function Item(props) {
  return (
    <div className="item">
      <img src={props.image} alt="Item img" />
      <p>{props.name}</p>
      <div className="items-price">
        <div className="items-prices-new">${props.new_price}</div>
        <div className="items-prices-old">${props.old_price}</div>
      </div>
    </div>
  );
}
