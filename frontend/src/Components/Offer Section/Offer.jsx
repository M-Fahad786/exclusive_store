import "./Offer.css";
import Exclusiveimage from "../Assets/exclusive_image.png";
export default function Offer() {
  return (
    <div className="offer-section">
      <div className="offer-sec-left">
        <h1> Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY FOR BEST SELLER PRODUCTS</p>
        <button>Check Now</button>
      </div>
      <div className="offer-sec-right">
        <img src={Exclusiveimage} alt="Exclusive img" />
      </div>
    </div>
  );
}
