import arrowIcon from "../Assets/breadcrum_arrow.png";
import "./BreadCrum.css";
export default function BreadCrum({ product }) {
  return (
    <section className="breadcrum-sec">
      Home <img src={arrowIcon} alt="Arrow Icon BreadCrum" />{" "}
      {product?.category}
      <img src={arrowIcon} alt="Arrow Icon BreadCrum" /> {product?.name}
    </section>
  );
}
