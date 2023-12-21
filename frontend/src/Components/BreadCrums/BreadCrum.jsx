import arrowIcon from "../Assets/breadcrum_arrow.png";
import "./BreadCrum.css";
export default function BreadCrum(props) {
  const { product } = props;
  return (
    <section className="breadcrum-sec">
      HOME <img src={arrowIcon} alt="Arrow Icon BreadCrum" /> SHOP
      <img src={arrowIcon} alt="Arrow Icon BreadCrum" /> {product.category}
      <img src={arrowIcon} alt="Arrow Icon BreadCrum" /> {product.name}
    </section>
  );
}
